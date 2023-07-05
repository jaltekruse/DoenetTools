function a(e) {
  return Math.sqrt(e) * 3;
}
window.sqrtImpl = a;
var t = URL.createObjectURL(
  new Blob(
    [
      "(",
      function() {
        onmessage = function(e) {
          e.data.messageType === "squareRoot" && postMessage({
            messageType: "squareRootResult",
            //result: window.sqrtImpl(e.data.num),
            result: Math.sqrt(e.data.num),
            destId: e.data.destId
          });
        };
      }.toString(),
      ")()"
    ],
    { type: "application/javascript" }
  )
);
delete window.worker;
const s = new Worker(t);
URL.revokeObjectURL(t);
function r(e, o) {
  s.postMessage({ messageType: "squareRoot", num: o, destId: e });
}
s.onmessage = (e) => {
  console.log("Message received from worker", e), e.data.messageType === "squareRootResult" && (document.getElementById(e.data.destId).innerHTML = e.data.result);
};
export {
  r as squareRoot
};
