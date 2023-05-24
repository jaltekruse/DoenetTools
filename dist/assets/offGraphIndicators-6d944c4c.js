function getEffectiveBoundingBox(board) {
  let flippedX = false;
  let flippedY = false;
  let [xmin, ymax, xmax, ymin] = board.getBoundingBox();
  if (xmax < xmin) {
    flippedX = true;
    [xmax, xmin] = [xmin, xmax];
  }
  if (ymax < ymin) {
    flippedY = true;
    [ymax, ymin] = [ymin, ymax];
  }
  return { flippedX, flippedY, xmin, xmax, ymin, ymax };
}
function getGraphCornerWithBuffer(board, direction, buffer = 0.01) {
  let { flippedX, flippedY, xmin, xmax, ymin, ymax } = getEffectiveBoundingBox(board);
  let xSign = flippedX ? -1 : 1;
  let ySign = flippedY ? -1 : 1;
  let xscale = xmax - xmin;
  let yscale = ymax - ymin;
  let xminAdjusted = xmin + xscale * buffer;
  let xmaxAdjusted = xmax - xscale * buffer;
  let yminAdjusted = ymin + yscale * buffer;
  let ymaxAdjusted = ymax - yscale * buffer;
  let x = direction[0] * xSign === 1 ? xmaxAdjusted : xminAdjusted;
  let y = direction[1] * ySign === 1 ? ymaxAdjusted : yminAdjusted;
  return [x, y];
}
function adjustPointLabelPosition(labelPosition, nearEdgeOfGraph) {
  if (nearEdgeOfGraph[0] === -1) {
    if (labelPosition.substring(
      labelPosition.length - 4,
      labelPosition.length
    ) === "left") {
      labelPosition = labelPosition.substring(0, labelPosition.length - 4) + "right";
    } else if (labelPosition === "top") {
      labelPosition = "upperright";
    } else if (labelPosition === "bottom") {
      labelPosition = "lowerright";
    }
  } else if (nearEdgeOfGraph[0] === 1) {
    if (labelPosition.substring(
      labelPosition.length - 5,
      labelPosition.length
    ) === "right") {
      labelPosition = labelPosition.substring(0, labelPosition.length - 5) + "left";
    } else if (labelPosition === "top") {
      labelPosition = "upperleft";
    } else if (labelPosition === "bottom") {
      labelPosition = "lowerleft";
    }
  }
  if (nearEdgeOfGraph[1] === -1) {
    if (labelPosition.substring(0, 5, labelPosition.length) === "lower") {
      labelPosition = "upper" + labelPosition.substring(5, labelPosition.length);
    } else if (labelPosition === "left") {
      labelPosition = "upperleft";
    } else if (labelPosition === "right") {
      labelPosition = "upperright";
    }
  } else if (nearEdgeOfGraph[1] === 1) {
    if (labelPosition.substring(0, 5, labelPosition.length) === "upper") {
      labelPosition = "lower" + labelPosition.substring(5, labelPosition.length);
    } else if (labelPosition === "left") {
      labelPosition = "lowerleft";
    } else if (labelPosition === "right") {
      labelPosition = "lowerright";
    }
  }
  return labelPosition;
}
function calculatePointLabelAnchor(labelPosition) {
  let anchorx, anchory, offset;
  if (labelPosition === "upperright") {
    offset = [5, 5];
    anchorx = "left";
    anchory = "bottom";
  } else if (labelPosition === "upperleft") {
    offset = [-5, 5];
    anchorx = "right";
    anchory = "bottom";
  } else if (labelPosition === "lowerright") {
    offset = [5, -5];
    anchorx = "left";
    anchory = "top";
  } else if (labelPosition === "lowerleft") {
    offset = [-5, -5];
    anchorx = "right";
    anchory = "top";
  } else if (labelPosition === "top") {
    offset = [0, 10];
    anchorx = "middle";
    anchory = "bottom";
  } else if (labelPosition === "bottom") {
    offset = [0, -10];
    anchorx = "middle";
    anchory = "top";
  } else if (labelPosition === "left") {
    offset = [-10, 0];
    anchorx = "right";
    anchory = "middle";
  } else {
    offset = [10, 0];
    anchorx = "left";
    anchory = "middle";
  }
  return { offset, anchorx, anchory };
}
function normalizePointSize(size, style) {
  if (style === "diamond") {
    return size * 1.4;
  } else if (style === "plus") {
    return size * 1.2;
  } else if (style === "square") {
    return size * 1.1;
  } else if (style.substring(0, 8) === "triangle") {
    return size * 1.5;
  } else
    return size;
}
function normalizePointStyle(style, offGraphIndicatorSides) {
  if (offGraphIndicatorSides[1] === -1) {
    return "triangledown";
  } else if (offGraphIndicatorSides[1] === 1) {
    return "triangleup";
  } else if (offGraphIndicatorSides[0] === -1) {
    return "triangleleft";
  } else if (offGraphIndicatorSides[0] === 1) {
    return "triangleright";
  } else if (style === "triangle") {
    return "triangleup";
  } else {
    return style;
  }
}
function characterizeOffGraphPoint(coords, board) {
  let { flippedX, flippedY, xmin, xmax, ymin, ymax } = getEffectiveBoundingBox(board);
  let xscale = xmax - xmin;
  let yscale = ymax - ymin;
  let xminAdjusted = xmin + xscale * 0.01;
  let xmaxAdjusted = xmax - xscale * 0.01;
  let yminAdjusted = ymin + yscale * 0.01;
  let ymaxAdjusted = ymax - yscale * 0.01;
  let indicatorCoords = [...coords];
  let indicatorSides = [0, 0];
  let needIndicator = false;
  if (indicatorCoords[0] < xminAdjusted) {
    needIndicator = true;
    indicatorSides[0] = flippedX ? 1 : -1;
    indicatorCoords[0] = xminAdjusted;
  } else if (indicatorCoords[0] > xmaxAdjusted) {
    needIndicator = true;
    indicatorSides[0] = flippedX ? -1 : 1;
    indicatorCoords[0] = xmaxAdjusted;
  }
  if (indicatorCoords[1] < yminAdjusted) {
    needIndicator = true;
    indicatorSides[1] = flippedY ? 1 : -1;
    indicatorCoords[1] = yminAdjusted;
  } else if (indicatorCoords[1] > ymaxAdjusted) {
    needIndicator = true;
    indicatorSides[1] = flippedY ? -1 : 1;
    indicatorCoords[1] = ymaxAdjusted;
  }
  return {
    needIndicator,
    indicatorCoords,
    indicatorSides
  };
}
function characterizeOffGraphCircleArc({
  center,
  radius,
  directionToCheck,
  board
}) {
  let { flippedX, flippedY, xmin, xmax, ymin, ymax } = getEffectiveBoundingBox(board);
  let xSign = flippedX ? -1 : 1;
  let ySign = flippedY ? -1 : 1;
  let xscale = xmax - xmin;
  let yscale = ymax - ymin;
  let xminAdjusted = xmin + xscale * 0.01;
  let xmaxAdjusted = xmax - xscale * 0.01;
  let yminAdjusted = ymin + yscale * 0.01;
  let ymaxAdjusted = ymax - yscale * 0.01;
  let xToCheck = directionToCheck[0] * xSign === 1 ? xmaxAdjusted : xminAdjusted;
  let yToCheck = directionToCheck[1] * ySign === 1 ? ymaxAdjusted : yminAdjusted;
  let yOnVerticalEdge = center[1] - ySign * directionToCheck[1] * Math.sqrt(radius ** 2 - (xToCheck - center[0]) ** 2);
  let doubleSign = directionToCheck[1] * ySign;
  if (yOnVerticalEdge * doubleSign > yToCheck * doubleSign) {
    return {
      needIndicator: true,
      indicatorSides: directionToCheck,
      indicatorCoords: [xToCheck, yToCheck]
    };
  }
  return { needIndicator: false };
}
export {
  getGraphCornerWithBuffer as a,
  characterizeOffGraphCircleArc as b,
  characterizeOffGraphPoint as c,
  normalizePointSize as d,
  adjustPointLabelPosition as e,
  calculatePointLabelAnchor as f,
  getEffectiveBoundingBox as g,
  normalizePointStyle as n
};
