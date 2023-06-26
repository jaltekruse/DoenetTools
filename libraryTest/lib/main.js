const myWorker = new Worker("./lib/worker.js");

export function squareRoot(destId, num) {
  myWorker.postMessage({ messageType: "squareRoot", num: num, destId: destId });
}

myWorker.onmessage = (e) => {
  console.log("Message received from worker", e);
  if (e.data.messageType === "squareRootResult") {
    document.getElementById(e.data.destId).innerHTML = e.data.result;
  }
};
