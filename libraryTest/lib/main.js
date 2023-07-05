//const myWorker = new Worker("./lib/worker.js");
import { sqrtImpl } from "./sqrt";

window.sqrtImpl = sqrtImpl;

// Build a worker from an anonymous function body
var blobURL = URL.createObjectURL(
  new Blob(
    [
      "(",
      function () {
        onmessage = function (e) {
          if (e.data.messageType === "squareRoot") {
            postMessage({
              messageType: "squareRootResult",
              //result: window.sqrtImpl(e.data.num),
              result: Math.sqrt(e.data.num),
              destId: e.data.destId,
            });
          }
        };
      }.toString(),

      ")()",
    ],
    { type: "application/javascript" },
  ),
);

delete window.worker;

const worker = new Worker(blobURL);

// Won't be needing this anymore
URL.revokeObjectURL(blobURL);

export function squareRoot(destId, num) {
  worker.postMessage({ messageType: "squareRoot", num: num, destId: destId });
}

worker.onmessage = (e) => {
  console.log("Message received from worker", e);
  if (e.data.messageType === "squareRootResult") {
    document.getElementById(e.data.destId).innerHTML = e.data.result;
  }
};
