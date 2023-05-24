import { R as React, bx as useDoenetRenderer, r as reactExports, t as Recoil_index_20, J as darkModeAtom, j as jsx, F as Fragment } from "./PageViewer-d914b069.js";
import { BoardContext, LINE_LAYER_OFFSET, VERTEX_LAYER_OFFSET } from "./graph-8a8db909.js";
import "./css-5483d03f.js";
import "./visibility-sensor-57589aaf.js";
const lineSegment = React.memo(function LineSegment(props) {
  let { name, id, SVs, actions, sourceOfUpdate, callAction } = useDoenetRenderer(props);
  LineSegment.ignoreActionsWithoutCore = () => true;
  const board = reactExports.useContext(BoardContext);
  let lineSegmentJXG = reactExports.useRef(null);
  let point1JXG = reactExports.useRef(null);
  let point2JXG = reactExports.useRef(null);
  let pointerAtDown = reactExports.useRef(null);
  let pointsAtDown = reactExports.useRef(null);
  let pointerIsDown = reactExports.useRef(false);
  let pointerMovedSinceDown = reactExports.useRef(false);
  let draggedPoint = reactExports.useRef(null);
  let previousWithLabel = reactExports.useRef(null);
  let previousLabelPosition = reactExports.useRef(null);
  let pointCoords = reactExports.useRef(null);
  let downOnPoint = reactExports.useRef(null);
  let lastPositionsFromCore = reactExports.useRef(null);
  let fixed = reactExports.useRef(false);
  let fixLocation = reactExports.useRef(false);
  let endpointsFixed = reactExports.useRef(false);
  lastPositionsFromCore.current = SVs.numericalEndpoints;
  fixed.current = SVs.fixed;
  fixLocation.current = !SVs.draggable || SVs.fixLocation || SVs.fixed;
  endpointsFixed.current = !SVs.endpointsDraggable || SVs.fixed || SVs.fixLocation;
  const darkMode = Recoil_index_20(darkModeAtom);
  reactExports.useEffect(() => {
    return () => {
      if (lineSegmentJXG.current) {
        deleteLineSegmentJXG();
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
  function createLineSegmentJXG() {
    if (SVs.numericalEndpoints.length !== 2 || SVs.numericalEndpoints.some((x) => x.length !== 2)) {
      lineSegmentJXG.current = null;
      point1JXG.current = null;
      point2JXG.current = null;
      return;
    }
    let withlabel = SVs.labelForGraph !== "";
    let lineColor = darkMode === "dark" ? SVs.selectedStyle.lineColorDarkMode : SVs.selectedStyle.lineColor;
    var jsxSegmentAttributes = {
      name: SVs.labelForGraph,
      visible: !SVs.hidden,
      withlabel,
      fixed: fixed.current,
      layer: 10 * SVs.layer + LINE_LAYER_OFFSET,
      strokeColor: lineColor,
      strokeOpacity: SVs.selectedStyle.lineOpacity,
      highlightStrokeColor: lineColor,
      highlightStrokeOpacity: SVs.selectedStyle.lineOpacity * 0.5,
      strokeWidth: SVs.selectedStyle.lineWidth,
      highlightStrokeWidth: SVs.selectedStyle.lineWidth,
      dash: styleToDash(SVs.selectedStyle.lineStyle),
      highlight: !fixLocation.current
    };
    if (withlabel) {
      let anchorx, anchory, offset;
      if (SVs.labelPosition === "upperright") {
        offset = [5, 5];
        anchorx = "left";
        anchory = "bottom";
      } else if (SVs.labelPosition === "upperleft") {
        offset = [-5, 5];
        anchorx = "right";
        anchory = "bottom";
      } else if (SVs.labelPosition === "lowerright") {
        offset = [5, -5];
        anchorx = "left";
        anchory = "top";
      } else {
        offset = [-5, -5];
        anchorx = "right";
        anchory = "top";
      }
      jsxSegmentAttributes.label = {
        offset,
        anchorx,
        anchory,
        highlight: false
      };
      if (SVs.labelHasLatex) {
        jsxSegmentAttributes.label.useMathJax = true;
      }
      if (SVs.applyStyleToLabel) {
        jsxSegmentAttributes.label.strokeColor = lineColor;
      } else {
        jsxSegmentAttributes.label.strokeColor = "var(--canvastext)";
      }
    } else {
      jsxSegmentAttributes.label = {
        highlight: false
      };
      if (SVs.labelHasLatex) {
        jsxSegmentAttributes.label.useMathJax = true;
      }
    }
    let endpointsVisible = !endpointsFixed.current && !SVs.hidden;
    let jsxPointAttributes = Object.assign({}, jsxSegmentAttributes);
    Object.assign(jsxPointAttributes, {
      withLabel: false,
      fixed: false,
      highlight: true,
      fillColor: "none",
      strokeColor: "none",
      highlightStrokeColor: "none",
      highlightFillColor: getComputedStyle(
        document.documentElement
      ).getPropertyValue("--mainGray"),
      layer: 10 * SVs.layer + VERTEX_LAYER_OFFSET,
      showInfoBox: SVs.showCoordsWhenDragging,
      visible: endpointsVisible
    });
    let endpoints = [
      [...SVs.numericalEndpoints[0]],
      [...SVs.numericalEndpoints[1]]
    ];
    point1JXG.current = board.create("point", endpoints[0], jsxPointAttributes);
    point2JXG.current = board.create("point", endpoints[1], jsxPointAttributes);
    lineSegmentJXG.current = board.create(
      "segment",
      [point1JXG.current, point2JXG.current],
      jsxSegmentAttributes
    );
    lineSegmentJXG.isDraggable = !fixLocation.current;
    point1JXG.current.on("drag", (e) => onDragHandler(1, e));
    point2JXG.current.on("drag", (e) => onDragHandler(2, e));
    lineSegmentJXG.current.on("drag", (e) => onDragHandler(0, e));
    point1JXG.current.on("up", () => {
      if (draggedPoint.current === 1) {
        callAction({
          action: actions.moveLineSegment,
          args: {
            point1coords: pointCoords.current
          }
        });
      } else if (!pointerMovedSinceDown.current && !fixed.current) {
        callAction({
          action: actions.lineSegmentClicked,
          args: { name }
          // send name so get original name if adapted
        });
      }
      downOnPoint.current = null;
      pointerIsDown.current = false;
    });
    point2JXG.current.on("up", () => {
      if (draggedPoint.current === 2) {
        callAction({
          action: actions.moveLineSegment,
          args: {
            point2coords: pointCoords.current
          }
        });
      } else if (!pointerMovedSinceDown.current && !fixed.current) {
        callAction({
          action: actions.lineSegmentClicked,
          args: { name }
          // send name so get original name if adapted
        });
      }
      downOnPoint.current = null;
      pointerIsDown.current = false;
    });
    lineSegmentJXG.current.on("up", function(e) {
      if (draggedPoint.current === 0) {
        callAction({
          action: actions.moveLineSegment,
          args: {
            point1coords: pointCoords.current[0],
            point2coords: pointCoords.current[1]
          }
        });
      } else if (!pointerMovedSinceDown.current && downOnPoint.current === null && !fixed.current) {
        callAction({
          action: actions.lineSegmentClicked,
          args: { name }
          // send name so get original name if adapted
        });
      }
      pointerIsDown.current = false;
    });
    point1JXG.current.on("keyfocusout", () => {
      if (draggedPoint.current === 1) {
        callAction({
          action: actions.moveLineSegment,
          args: {
            point1coords: pointCoords.current
          }
        });
      }
      draggedPoint.current = null;
    });
    point2JXG.current.on("keyfocusout", () => {
      if (draggedPoint.current === 2) {
        callAction({
          action: actions.moveLineSegment,
          args: {
            point2coords: pointCoords.current
          }
        });
      }
      draggedPoint.current = null;
    });
    lineSegmentJXG.current.on("keyfocusout", function(e) {
      if (draggedPoint.current === 0) {
        callAction({
          action: actions.moveLineSegment,
          args: {
            point1coords: pointCoords.current[0],
            point2coords: pointCoords.current[1]
          }
        });
      }
      draggedPoint.current = null;
    });
    point1JXG.current.on("down", (e) => {
      draggedPoint.current = null;
      pointerAtDown.current = [e.x, e.y];
      downOnPoint.current = 1;
      pointerIsDown.current = true;
      pointerMovedSinceDown.current = false;
      if (!endpointsFixed.current) {
        callAction({
          action: actions.lineSegmentFocused,
          args: { name }
          // send name so get original name if adapted
        });
      }
    });
    point1JXG.current.on("hit", (e) => {
      draggedPoint.current = null;
      callAction({
        action: actions.lineSegmentFocused,
        args: { name }
        // send name so get original name if adapted
      });
    });
    point2JXG.current.on("down", (e) => {
      draggedPoint.current = null;
      pointerAtDown.current = [e.x, e.y];
      downOnPoint.current = 2;
      pointerIsDown.current = true;
      pointerMovedSinceDown.current = false;
      if (!endpointsFixed.current) {
        callAction({
          action: actions.lineSegmentFocused,
          args: { name }
          // send name so get original name if adapted
        });
      }
    });
    point2JXG.current.on("hit", (e) => {
      draggedPoint.current = null;
      callAction({
        action: actions.lineSegmentFocused,
        args: { name }
        // send name so get original name if adapted
      });
    });
    lineSegmentJXG.current.on("down", function(e) {
      draggedPoint.current = null;
      pointerAtDown.current = [e.x, e.y];
      pointsAtDown.current = [
        [...point1JXG.current.coords.scrCoords],
        [...point2JXG.current.coords.scrCoords]
      ];
      pointerIsDown.current = true;
      pointerMovedSinceDown.current = false;
      if (downOnPoint.current === null && !fixed.current) {
        callAction({
          action: actions.lineSegmentFocused,
          args: { name }
          // send name so get original name if adapted
        });
      }
    });
    lineSegmentJXG.current.on("hit", (e) => {
      draggedPoint.current = null;
      callAction({
        action: actions.lineSegmentFocused,
        args: { name }
        // send name so get original name if adapted
      });
    });
    point1JXG.current.on("keydown", function(e) {
      if (e.key === "Enter") {
        if (draggedPoint.current === 1) {
          callAction({
            action: actions.moveLineSegment,
            args: {
              point1coords: pointCoords.current
            }
          });
        }
        draggedPoint.current = null;
        callAction({
          action: actions.lineSegmentClicked,
          args: { name }
          // send name so get original name if adapted
        });
      }
    });
    point2JXG.current.on("keydown", function(e) {
      if (e.key === "Enter") {
        if (draggedPoint.current === 2) {
          callAction({
            action: actions.moveLineSegment,
            args: {
              point2coords: pointCoords.current
            }
          });
        }
        draggedPoint.current = null;
        callAction({
          action: actions.lineSegmentClicked,
          args: { name }
          // send name so get original name if adapted
        });
      }
    });
    lineSegmentJXG.current.on("keydown", function(e) {
      if (e.key === "Enter") {
        if (draggedPoint.current === 0) {
          callAction({
            action: actions.moveLineSegment,
            args: {
              point1coords: pointCoords.current[0],
              point2coords: pointCoords.current[1]
            }
          });
        }
        draggedPoint.current = null;
        callAction({
          action: actions.lineSegmentClicked,
          args: { name }
          // send name so get original name if adapted
        });
      }
    });
    previousLabelPosition.current = SVs.labelPosition;
    previousWithLabel.current = withlabel;
    return lineSegmentJXG.current;
  }
  function boardMoveHandler(e) {
    if (pointerIsDown.current) {
      if (Math.abs(e.x - pointerAtDown.current[0]) > 0.1 || Math.abs(e.y - pointerAtDown.current[1]) > 0.1) {
        pointerMovedSinceDown.current = true;
      }
    }
  }
  function onDragHandler(i, e) {
    let viaPointer = e.type === "pointermove";
    if (!viaPointer || Math.abs(e.x - pointerAtDown.current[0]) > 0.1 || Math.abs(e.y - pointerAtDown.current[1]) > 0.1) {
      draggedPoint.current = i;
      if (i == 1) {
        pointCoords.current = [
          lineSegmentJXG.current.point1.X(),
          lineSegmentJXG.current.point1.Y()
        ];
        callAction({
          action: actions.moveLineSegment,
          args: {
            point1coords: pointCoords.current,
            transient: true,
            skippable: true,
            sourceDetails: { endpoint: i }
          }
        });
      } else if (i == 2) {
        pointCoords.current = [
          lineSegmentJXG.current.point2.X(),
          lineSegmentJXG.current.point2.Y()
        ];
        callAction({
          action: actions.moveLineSegment,
          args: {
            point2coords: pointCoords.current,
            transient: true,
            skippable: true,
            sourceDetails: { endpoint: i }
          }
        });
      } else {
        pointCoords.current = [];
        if (viaPointer) {
          var o = board.origin.scrCoords;
          for (let i2 = 0; i2 < 2; i2++) {
            let calculatedX = (pointsAtDown.current[i2][1] + e.x - pointerAtDown.current[0] - o[1]) / board.unitX;
            let calculatedY = (o[2] - (pointsAtDown.current[i2][2] + e.y - pointerAtDown.current[1])) / board.unitY;
            pointCoords.current.push([calculatedX, calculatedY]);
          }
        } else {
          pointCoords.current.push([
            lineSegmentJXG.current.point1.X(),
            lineSegmentJXG.current.point1.Y()
          ]);
          pointCoords.current.push([
            lineSegmentJXG.current.point2.X(),
            lineSegmentJXG.current.point2.Y()
          ]);
        }
        callAction({
          action: actions.moveLineSegment,
          args: {
            point1coords: pointCoords.current[0],
            point2coords: pointCoords.current[1],
            transient: true,
            skippable: true
          }
        });
      }
    }
    lineSegmentJXG.current.point1.coords.setCoordinates(
      JXG.COORDS_BY_USER,
      lastPositionsFromCore.current[0]
    );
    lineSegmentJXG.current.point2.coords.setCoordinates(
      JXG.COORDS_BY_USER,
      lastPositionsFromCore.current[1]
    );
    if (i == 1) {
      board.updateInfobox(lineSegmentJXG.current.point1);
    } else if (i == 2) {
      board.updateInfobox(lineSegmentJXG.current.point2);
    }
  }
  function deleteLineSegmentJXG() {
    lineSegmentJXG.current.off("drag");
    lineSegmentJXG.current.off("down");
    lineSegmentJXG.current.off("hit");
    lineSegmentJXG.current.off("up");
    lineSegmentJXG.current.off("keydown");
    lineSegmentJXG.current.off("keyfocusout");
    board.removeObject(lineSegmentJXG.current);
    lineSegmentJXG.current = null;
    point1JXG.current.off("drag");
    point1JXG.current.off("down");
    point1JXG.current.off("hit");
    point1JXG.current.off("up");
    point1JXG.current.off("keydown");
    point1JXG.current.off("keyfocusout");
    board.removeObject(point1JXG.current);
    point1JXG.current = null;
    point2JXG.current.off("drag");
    point2JXG.current.off("down");
    point2JXG.current.off("hit");
    point2JXG.current.off("up");
    point2JXG.current.off("keydown");
    point2JXG.current.off("keyfocusout");
    board.removeObject(point2JXG.current);
    point2JXG.current = null;
  }
  if (board) {
    if (lineSegmentJXG.current === null) {
      createLineSegmentJXG();
    } else if (SVs.numericalEndpoints.length !== 2 || SVs.numericalEndpoints.some((x) => x.length !== 2)) {
      deleteLineSegmentJXG();
    } else {
      let validCoords = true;
      for (let coords of [
        SVs.numericalEndpoints[0],
        SVs.numericalEndpoints[1]
      ]) {
        if (!Number.isFinite(coords[0])) {
          validCoords = false;
        }
        if (!Number.isFinite(coords[1])) {
          validCoords = false;
        }
      }
      lineSegmentJXG.current.point1.coords.setCoordinates(
        JXG.COORDS_BY_USER,
        SVs.numericalEndpoints[0]
      );
      lineSegmentJXG.current.point2.coords.setCoordinates(
        JXG.COORDS_BY_USER,
        SVs.numericalEndpoints[1]
      );
      if (sourceOfUpdate.sourceInformation && name in sourceOfUpdate.sourceInformation) {
        let ind = sourceOfUpdate.sourceInformation[name].endpoint;
        if (ind === 1) {
          board.updateInfobox(lineSegmentJXG.current.point1);
        } else if (ind === 2) {
          board.updateInfobox(lineSegmentJXG.current.point2);
        }
      }
      let visible = !SVs.hidden && validCoords;
      if (validCoords) {
        let actuallyChangedVisibility = lineSegmentJXG.current.visProp["visible"] !== visible;
        lineSegmentJXG.current.visProp["visible"] = visible;
        lineSegmentJXG.current.visPropCalc["visible"] = visible;
        if (actuallyChangedVisibility) {
          lineSegmentJXG.current.setAttribute({ visible });
        }
      } else {
        lineSegmentJXG.current.visProp["visible"] = false;
        lineSegmentJXG.current.visPropCalc["visible"] = false;
      }
      let endpointsVisible = !endpointsFixed.current && visible;
      point1JXG.current.visProp["visible"] = endpointsVisible;
      point1JXG.current.visPropCalc["visible"] = endpointsVisible;
      point2JXG.current.visProp["visible"] = endpointsVisible;
      point2JXG.current.visPropCalc["visible"] = endpointsVisible;
      lineSegmentJXG.current.visProp.fixed = fixed.current;
      lineSegmentJXG.current.visProp.highlight = !fixLocation.current;
      lineSegmentJXG.current.isDraggable = !fixLocation.current;
      let layer = 10 * SVs.layer + LINE_LAYER_OFFSET;
      let layerChanged = lineSegmentJXG.current.visProp.layer !== layer;
      if (layerChanged) {
        lineSegmentJXG.current.setAttribute({ layer });
        point1JXG.current.setAttribute({
          layer: 10 * SVs.layer + VERTEX_LAYER_OFFSET
        });
        point2JXG.current.setAttribute({
          layer: 10 * SVs.layer + VERTEX_LAYER_OFFSET
        });
      }
      let lineColor = darkMode === "dark" ? SVs.selectedStyle.lineColorDarkMode : SVs.selectedStyle.lineColor;
      if (lineSegmentJXG.current.visProp.strokecolor !== lineColor) {
        lineSegmentJXG.current.visProp.strokecolor = lineColor;
        lineSegmentJXG.current.visProp.highlightstrokecolor = lineColor;
      }
      if (lineSegmentJXG.current.visProp.strokewidth !== SVs.selectedStyle.lineWidth) {
        lineSegmentJXG.current.visProp.strokewidth = SVs.selectedStyle.lineWidth;
        lineSegmentJXG.current.visProp.highlightstrokewidth = SVs.selectedStyle.lineWidth;
      }
      if (lineSegmentJXG.current.visProp.strokeopacity !== SVs.selectedStyle.lineOpacity) {
        lineSegmentJXG.current.visProp.strokeopacity = SVs.selectedStyle.lineOpacity;
        lineSegmentJXG.current.visProp.highlightstrokeopacity = SVs.selectedStyle.lineOpacity * 0.5;
      }
      let newDash = styleToDash(SVs.selectedStyle.lineStyle);
      if (lineSegmentJXG.current.visProp.dash !== newDash) {
        lineSegmentJXG.current.visProp.dash = newDash;
      }
      lineSegmentJXG.current.name = SVs.labelForGraph;
      let withlabel = SVs.labelForGraph !== "";
      if (withlabel != previousWithLabel.current) {
        lineSegmentJXG.current.setAttribute({ withlabel });
        previousWithLabel.current = withlabel;
      }
      if (point1JXG.current.highlighted) {
        board.updateInfobox(point1JXG.current);
      } else if (point2JXG.current.highlighted) {
        board.updateInfobox(point2JXG.current);
      }
      lineSegmentJXG.current.needsUpdate = true;
      lineSegmentJXG.current.update();
      if (lineSegmentJXG.current.hasLabel) {
        lineSegmentJXG.current.label.needsUpdate = true;
        if (SVs.applyStyleToLabel) {
          lineSegmentJXG.current.label.visProp.strokecolor = lineColor;
        } else {
          lineSegmentJXG.current.label.visProp.strokecolor = "var(--canvastext)";
        }
        if (SVs.labelPosition !== previousLabelPosition.current) {
          let anchorx, anchory, offset;
          if (SVs.labelPosition === "upperright") {
            offset = [5, 5];
            anchorx = "left";
            anchory = "bottom";
          } else if (SVs.labelPosition === "upperleft") {
            offset = [-5, 5];
            anchorx = "right";
            anchory = "bottom";
          } else if (SVs.labelPosition === "lowerright") {
            offset = [5, -5];
            anchorx = "left";
            anchory = "top";
          } else {
            offset = [-5, -5];
            anchorx = "right";
            anchory = "top";
          }
          lineSegmentJXG.current.label.visProp.anchorx = anchorx;
          lineSegmentJXG.current.label.visProp.anchory = anchory;
          lineSegmentJXG.current.label.visProp.offset = offset;
          previousLabelPosition.current = SVs.labelPosition;
          lineSegmentJXG.current.label.fullUpdate();
        } else {
          lineSegmentJXG.current.label.update();
        }
      }
      point1JXG.current.needsUpdate = true;
      point1JXG.current.update();
      point2JXG.current.needsUpdate = true;
      point2JXG.current.update();
      board.updateRenderer();
    }
    return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx("a", { name: id }) });
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
  lineSegment as default
};
