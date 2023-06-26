onmessage = function (e) {
  if (e.data.messageType === "squareRoot") {
    postMessage({
      messageType: "squareRootResult",
      result: Math.sqrt(e.data.num),
      destId: e.data.destId,
    });
  }
};
