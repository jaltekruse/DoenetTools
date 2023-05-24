import { R as React, bx as useDoenetRenderer, r as reactExports, t as Recoil_index_20, J as darkModeAtom, j as jsx, F as Fragment } from "./PageViewer-d914b069.js";
import { BoardContext, LINE_LAYER_OFFSET, VERTEX_LAYER_OFFSET } from "./graph-8a8db909.js";
import "./css-5483d03f.js";
import "./visibility-sensor-57589aaf.js";
const polyline = React.memo(function Polyline(props) {
  let { name, id, SVs, actions, sourceOfUpdate, callAction } = useDoenetRenderer(props);
  Polyline.ignoreActionsWithoutCore = () => true;
  const board = reactExports.useContext(BoardContext);
  let polylineJXG = reactExports.useRef(null);
  let pointsJXG = reactExports.useRef(null);
  let pointCoords = reactExports.useRef(null);
  let draggedPoint = reactExports.useRef(null);
  let downOnPoint = reactExports.useRef(null);
  let pointerAtDown = reactExports.useRef(null);
  let pointsAtDown = reactExports.useRef(null);
  let pointerIsDown = reactExports.useRef(false);
  let pointerMovedSinceDown = reactExports.useRef(false);
  let previousNumVertices = reactExports.useRef(null);
  let jsxPointAttributes = reactExports.useRef(null);
  let lastPositionsFromCore = reactExports.useRef(null);
  let fixed = reactExports.useRef(false);
  let fixLocation = reactExports.useRef(false);
  let verticesFixed = reactExports.useRef(false);
  lastPositionsFromCore.current = SVs.numericalVertices;
  fixed.current = SVs.fixed;
  fixLocation.current = !SVs.draggable || SVs.fixLocation || SVs.fixed;
  verticesFixed.current = !SVs.verticesDraggable || SVs.fixed || SVs.fixLocation;
  const darkMode = Recoil_index_20(darkModeAtom);
  reactExports.useEffect(() => {
    return () => {
      if (polylineJXG.current) {
        deletePolylineJXG();
      }
      if (board) {
        board.off("move", boardMoveHandler);
      }
    };
  }, []);
  reactExports.useEffect(() => {
    if (board) {
      board.on("move", boardMoveHandler);
    }
  }, [board]);
  function createPolylineJXG() {
    if (SVs.numericalVertices.length !== SVs.numVertices || SVs.numericalVertices.some((x2) => x2.length !== 2)) {
      return null;
    }
    let validCoords = true;
    for (let coords of SVs.numericalVertices) {
      if (!Number.isFinite(coords[0])) {
        validCoords = false;
      }
      if (!Number.isFinite(coords[1])) {
        validCoords = false;
      }
    }
    let lineColor = darkMode === "dark" ? SVs.selectedStyle.lineColorDarkMode : SVs.selectedStyle.lineColor;
    let jsxPolylineAttributes = {
      name: SVs.labelForGraph,
      visible: !SVs.hidden && validCoords,
      withLabel: SVs.labelForGraph !== "",
      layer: 10 * SVs.layer + LINE_LAYER_OFFSET,
      fixed: fixed.current,
      strokeColor: lineColor,
      strokeOpacity: SVs.selectedStyle.lineOpacity,
      highlightStrokeColor: lineColor,
      highlightStrokeOpacity: SVs.selectedStyle.lineOpacity * 0.5,
      strokeWidth: SVs.selectedStyle.lineWidth,
      highlightStrokeWidth: SVs.selectedStyle.lineWidth,
      dash: styleToDash(SVs.selectedStyle.lineStyle),
      highlight: !fixLocation.current,
      lineCap: "butt"
    };
    jsxPointAttributes.current = Object.assign({}, jsxPolylineAttributes);
    Object.assign(jsxPointAttributes.current, {
      fixed: false,
      highlight: true,
      withLabel: false,
      fillColor: "none",
      strokeColor: "none",
      highlightStrokeColor: "none",
      highlightFillColor: getComputedStyle(
        document.documentElement
      ).getPropertyValue("--mainGray"),
      layer: 10 * SVs.layer + VERTEX_LAYER_OFFSET
    });
    if (verticesFixed.current || SVs.hidden || !validCoords) {
      jsxPointAttributes.current.visible = false;
    }
    jsxPolylineAttributes.label = {
      highlight: false
    };
    if (SVs.labelHasLatex) {
      jsxPolylineAttributes.label.useMathJax = true;
    }
    if (SVs.applyStyleToLabel) {
      jsxPolylineAttributes.label.strokeColor = lineColor;
    } else {
      jsxPolylineAttributes.label.strokeColor = "var(--canvastext)";
    }
    pointsJXG.current = [];
    for (let i = 0; i < SVs.numVertices; i++) {
      pointsJXG.current.push(
        board.create(
          "point",
          [...SVs.numericalVertices[i]],
          jsxPointAttributes.current
        )
      );
    }
    let x = [], y = [];
    SVs.numericalVertices.forEach((z) => {
      x.push(z[0]);
      y.push(z[1]);
    });
    let newPolylineJXG = board.create("curve", [x, y], jsxPolylineAttributes);
    newPolylineJXG.isDraggable = !fixLocation.current;
    for (let i = 0; i < SVs.numVertices; i++) {
      pointsJXG.current[i].on("drag", (e) => dragHandler(i, e));
      pointsJXG.current[i].on("up", () => upHandler(i));
      pointsJXG.current[i].on("keyfocusout", () => keyFocusOutHandler(i));
      pointsJXG.current[i].on("keydown", (e) => keyDownHandler(i, e));
      pointsJXG.current[i].on("down", (e) => downHandler(i, e));
      pointsJXG.current[i].on("hit", (e) => hitHandler());
    }
    newPolylineJXG.on("drag", (e) => dragHandler(-1, e));
    newPolylineJXG.on("up", () => upHandler(-1));
    newPolylineJXG.on("keyfocusout", () => keyFocusOutHandler(-1));
    newPolylineJXG.on("keydown", (e) => keyDownHandler(-1, e));
    newPolylineJXG.on("down", (e) => downHandler(-1, e));
    newPolylineJXG.on("hit", (e) => hitHandler());
    previousNumVertices.current = SVs.numVertices;
    return newPolylineJXG;
  }
  function boardMoveHandler(e) {
    if (pointerIsDown.current) {
      if (Math.abs(e.x - pointerAtDown.current[0]) > 0.1 || Math.abs(e.y - pointerAtDown.current[1]) > 0.1) {
        pointerMovedSinceDown.current = true;
      }
    }
  }
  function deletePolylineJXG() {
    polylineJXG.current.off("drag");
    polylineJXG.current.off("down");
    polylineJXG.current.off("hit");
    polylineJXG.current.off("up");
    polylineJXG.current.off("keyfocusout");
    polylineJXG.current.off("keydown");
    board.removeObject(polylineJXG.current);
    polylineJXG.current = null;
    for (let i = 0; i < SVs.numVertices; i++) {
      pointsJXG.current[i].off("drag");
      pointsJXG.current[i].off("down");
      pointsJXG.current[i].off("hit");
      pointsJXG.current[i].off("up");
      pointsJXG.current[i].off("keyfocusout");
      pointsJXG.current[i].off("keydown");
      board.removeObject(pointsJXG.current[i]);
      delete pointsJXG.current[i];
    }
  }
  function dragHandler(i, e) {
    let viaPointer = e.type === "pointermove";
    if (!viaPointer || Math.abs(e.x - pointerAtDown.current[0]) > 0.1 || Math.abs(e.y - pointerAtDown.current[1]) > 0.1) {
      draggedPoint.current = i;
      if (i === -1) {
        polylineJXG.current.updateTransformMatrix();
        let shiftX = polylineJXG.current.transformMat[1][0];
        let shiftY = polylineJXG.current.transformMat[2][0];
        var o = board.origin.scrCoords;
        pointCoords.current = [];
        for (let i2 = 0; i2 < polylineJXG.current.points.length; i2++) {
          if (viaPointer) {
            let calculatedX = (pointsAtDown.current[i2][1] + e.x - pointerAtDown.current[0] - o[1]) / board.unitX;
            let calculatedY = (o[2] - (pointsAtDown.current[i2][2] + e.y - pointerAtDown.current[1])) / board.unitY;
            pointCoords.current.push([calculatedX, calculatedY]);
          } else {
            pointCoords.current.push([
              polylineJXG.current.dataX[i2] + shiftX,
              polylineJXG.current.dataY[i2] + shiftY
            ]);
          }
        }
        callAction({
          action: actions.movePolyline,
          args: {
            pointCoords: pointCoords.current,
            transient: true,
            skippable: true
          }
        });
        for (let j = 0; j < SVs.numVertices; j++) {
          pointsJXG.current[j].coords.setCoordinates(JXG.COORDS_BY_USER, [
            ...lastPositionsFromCore.current[j]
          ]);
          polylineJXG.current.dataX[j] = lastPositionsFromCore.current[j][0] - shiftX;
          polylineJXG.current.dataY[j] = lastPositionsFromCore.current[j][1] - shiftY;
        }
      } else {
        pointCoords.current = {};
        pointCoords.current[i] = [
          pointsJXG.current[i].X(),
          pointsJXG.current[i].Y()
        ];
        callAction({
          action: actions.movePolyline,
          args: {
            pointCoords: pointCoords.current,
            transient: true,
            skippable: true,
            sourceDetails: { vertex: i }
          }
        });
        pointsJXG.current[i].coords.setCoordinates(JXG.COORDS_BY_USER, [
          ...lastPositionsFromCore.current[i]
        ]);
        board.updateInfobox(pointsJXG.current[i]);
      }
    }
  }
  function downHandler(i, e) {
    draggedPoint.current = null;
    pointerAtDown.current = [e.x, e.y];
    if (i === -1) {
      if (downOnPoint.current === null && !fixed.current) {
        callAction({
          action: actions.polylineFocused,
          args: { name }
          // send name so get original name if adapted
        });
      }
      pointsAtDown.current = polylineJXG.current.points.map((x) => [
        ...x.scrCoords
      ]);
    } else {
      if (!verticesFixed.current) {
        callAction({
          action: actions.polylineFocused,
          args: { name }
          // send name so get original name if adapted
        });
      }
      downOnPoint.current = i;
    }
    pointerIsDown.current = true;
    pointerMovedSinceDown.current = false;
  }
  function hitHandler() {
    draggedPoint.current = null;
    callAction({
      action: actions.polylineFocused,
      args: { name }
      // send name so get original name if adapted
    });
  }
  function upHandler(i) {
    if (draggedPoint.current === i) {
      if (i === -1) {
        callAction({
          action: actions.movePolyline,
          args: {
            pointCoords: pointCoords.current
          }
        });
      } else {
        callAction({
          action: actions.movePolyline,
          args: {
            pointCoords: pointCoords.current,
            sourceDetails: { vertex: i }
          }
        });
      }
    } else if (!pointerMovedSinceDown.current && (downOnPoint.current === null || i !== -1) && !fixed.current) {
      callAction({
        action: actions.polylineClicked,
        args: { name }
        // send name so get original name if adapted
      });
    }
    if (i !== -1) {
      downOnPoint.current = null;
    }
    pointerIsDown.current = false;
  }
  function keyFocusOutHandler(i) {
    if (draggedPoint.current === i) {
      if (i === -1) {
        callAction({
          action: actions.movePolyline,
          args: {
            pointCoords: pointCoords.current
          }
        });
      } else {
        callAction({
          action: actions.movePolyline,
          args: {
            pointCoords: pointCoords.current,
            sourceInformation: { vertex: i }
          }
        });
      }
    }
    draggedPoint.current = null;
  }
  function keyDownHandler(i, e) {
    if (e.key === "Enter") {
      if (draggedPoint.current === i) {
        if (i === -1) {
          callAction({
            action: actions.movePolyline,
            args: {
              pointCoords: pointCoords.current
            }
          });
        } else {
          callAction({
            action: actions.movePolyline,
            args: {
              pointCoords: pointCoords.current,
              sourceInformation: { vertex: i }
            }
          });
        }
      }
      draggedPoint.current = null;
      callAction({
        action: actions.polylineClicked,
        args: { name }
        // send name so get original name if adapted
      });
    }
  }
  if (board) {
    if (!polylineJXG.current) {
      polylineJXG.current = createPolylineJXG();
    } else if (SVs.numericalVertices.length !== SVs.numVertices || SVs.numericalVertices.some((x) => x.length !== 2)) {
      deletePolylineJXG();
    } else {
      let validCoords = true;
      for (let coords of SVs.numericalVertices) {
        if (!Number.isFinite(coords[0])) {
          validCoords = false;
        }
        if (!Number.isFinite(coords[1])) {
          validCoords = false;
        }
      }
      polylineJXG.current.visProp.fixed = fixed.current;
      polylineJXG.current.visProp.highlight = !fixLocation.current;
      polylineJXG.current.isDraggable = !fixLocation.current;
      let polylineLayer = 10 * SVs.layer + LINE_LAYER_OFFSET;
      let layerChanged = polylineJXG.current.visProp.layer !== polylineLayer;
      let pointLayer = 10 * SVs.layer + VERTEX_LAYER_OFFSET;
      if (layerChanged) {
        polylineJXG.current.setAttribute({ layer: polylineLayer });
        jsxPointAttributes.current.layer = pointLayer;
      }
      if (SVs.numVertices > previousNumVertices.current) {
        for (let i = previousNumVertices.current; i < SVs.numVertices; i++) {
          pointsJXG.current.push(
            board.create(
              "point",
              [...SVs.numericalVertices[i]],
              jsxPointAttributes.current
            )
          );
          polylineJXG.current.dataX.length = SVs.numVertices;
          pointsJXG.current[i].on("drag", (e) => dragHandler(i, e));
          pointsJXG.current[i].on("up", (e) => upHandler(i));
          pointsJXG.current[i].on("down", (e) => downHandler(i, e));
          pointsJXG.current[i].on("hit", (e) => hitHandler());
          pointsJXG.current[i].on("keyfocusout", (e) => keyFocusOutHandler(i));
          pointsJXG.current[i].on("keydown", (e) => keyDownHandler(i, e));
        }
      } else if (SVs.numVertices < previousNumVertices.current) {
        for (let i = SVs.numVertices; i < previousNumVertices.current; i++) {
          let pt = pointsJXG.current.pop();
          pt.off("drag");
          pt.off("down");
          pt.off("hit");
          pt.off("up");
          pt.off("keyfocusout");
          pt.off("keydown");
          board.removeObject(pt);
        }
        polylineJXG.current.dataX.length = SVs.numVertices;
      }
      previousNumVertices.current = SVs.numVertices;
      polylineJXG.current.updateTransformMatrix();
      let shiftX = polylineJXG.current.transformMat[1][0];
      let shiftY = polylineJXG.current.transformMat[2][0];
      for (let i = 0; i < SVs.numVertices; i++) {
        pointsJXG.current[i].coords.setCoordinates(JXG.COORDS_BY_USER, [
          ...SVs.numericalVertices[i]
        ]);
        polylineJXG.current.dataX[i] = SVs.numericalVertices[i][0] - shiftX;
        polylineJXG.current.dataY[i] = SVs.numericalVertices[i][1] - shiftY;
      }
      let visible = !SVs.hidden;
      if (validCoords) {
        polylineJXG.current.visProp["visible"] = visible;
        polylineJXG.current.visPropCalc["visible"] = visible;
        let pointsVisible = visible && !verticesFixed.current;
        for (let i = 0; i < SVs.numVertices; i++) {
          pointsJXG.current[i].visProp["visible"] = pointsVisible;
          pointsJXG.current[i].visPropCalc["visible"] = pointsVisible;
        }
      } else {
        polylineJXG.current.visProp["visible"] = false;
        polylineJXG.current.visPropCalc["visible"] = false;
        for (let i = 0; i < SVs.numVertices; i++) {
          pointsJXG.current[i].visProp["visible"] = false;
          pointsJXG.current[i].visPropCalc["visible"] = false;
        }
      }
      let lineColor = darkMode === "dark" ? SVs.selectedStyle.lineColorDarkMode : SVs.selectedStyle.lineColor;
      if (polylineJXG.current.visProp.strokecolor !== lineColor) {
        polylineJXG.current.visProp.strokecolor = lineColor;
        polylineJXG.current.visProp.highlightstrokecolor = lineColor;
      }
      if (polylineJXG.current.visProp.strokewidth !== SVs.selectedStyle.lineWidth) {
        polylineJXG.current.visProp.strokewidth = SVs.selectedStyle.lineWidth;
        polylineJXG.current.visProp.highlightstrokewidth = SVs.selectedStyle.lineWidth;
      }
      if (polylineJXG.current.visProp.strokeopacity !== SVs.selectedStyle.lineOpacity) {
        polylineJXG.current.visProp.strokeopacity = SVs.selectedStyle.lineOpacity;
        polylineJXG.current.visProp.highlightstrokeopacity = SVs.selectedStyle.lineOpacity * 0.5;
      }
      let newDash = styleToDash(SVs.selectedStyle.lineStyle);
      if (polylineJXG.current.visProp.dash !== newDash) {
        polylineJXG.current.visProp.dash = newDash;
      }
      polylineJXG.current.name = SVs.labelForGraph;
      if (polylineJXG.current.hasLabel) {
        if (SVs.applyStyleToLabel) {
          polylineJXG.current.label.visProp.strokecolor = lineColor;
        } else {
          polylineJXG.current.label.visProp.strokecolor = "var(--canvastext)";
        }
        polylineJXG.current.label.needsUpdate = true;
        polylineJXG.current.label.update();
      }
      if (sourceOfUpdate.sourceInformation && name in sourceOfUpdate.sourceInformation) {
        let vertexUpdated = sourceOfUpdate.sourceInformation[name].vertex;
        if (Number.isFinite(vertexUpdated)) {
          board.updateInfobox(pointsJXG.current[vertexUpdated]);
        }
      }
      polylineJXG.current.needsUpdate = true;
      polylineJXG.current.update().updateVisibility();
      for (let i = 0; i < SVs.numVertices; i++) {
        if (layerChanged) {
          pointsJXG.current[i].setAttribute({ layer: pointLayer });
        }
        pointsJXG.current[i].needsUpdate = true;
        pointsJXG.current[i].update();
      }
      board.updateRenderer();
    }
  }
  if (SVs.hidden) {
    return null;
  }
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx("a", { name: id }) });
});
function styleToDash(style) {
  if (style === "solid") {
    return 0;
  } else if (style === "dashed") {
    return 2;
  } else if (style === "dotted") {
    return 1;
  } else {
    return 0;
  }
}
export {
  polyline as default
};
