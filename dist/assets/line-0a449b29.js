import { R as React, bx as useDoenetRenderer, r as reactExports, t as Recoil_index_20, J as darkModeAtom, j as jsx, F as Fragment, bJ as textRendererStyle, b as jsxs, v as betterReactMathjax } from "./PageViewer-d914b069.js";
import { BoardContext, LINE_LAYER_OFFSET } from "./graph-8a8db909.js";
import "./css-5483d03f.js";
import "./visibility-sensor-57589aaf.js";
const line = React.memo(function Line(props) {
  var _a;
  let { name, id, SVs, actions, callAction } = useDoenetRenderer(props);
  Line.ignoreActionsWithoutCore = () => true;
  const board = reactExports.useContext(BoardContext);
  let lineJXG = reactExports.useRef({});
  let pointerAtDown = reactExports.useRef(null);
  let pointsAtDown = reactExports.useRef(null);
  let pointerIsDown = reactExports.useRef(false);
  let pointerMovedSinceDown = reactExports.useRef(false);
  let dragged = reactExports.useRef(false);
  let previousWithLabel = reactExports.useRef(null);
  let previousLabelPosition = reactExports.useRef(null);
  let pointCoords = reactExports.useRef(null);
  let lastPositionsFromCore = reactExports.useRef(null);
  let fixed = reactExports.useRef(false);
  let fixLocation = reactExports.useRef(false);
  let switchable = reactExports.useRef(false);
  lastPositionsFromCore.current = SVs.numericalPoints;
  fixed.current = SVs.fixed;
  fixLocation.current = !SVs.draggable || SVs.fixLocation || SVs.fixed;
  switchable.current = SVs.switchable && !SVs.fixed;
  const darkMode = Recoil_index_20(darkModeAtom);
  reactExports.useEffect(() => {
    return () => {
      if (Object.keys(lineJXG.current).length !== 0) {
        deleteLineJXG();
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
  function createLineJXG() {
    var _a2;
    if (((_a2 = SVs.numericalPoints) == null ? void 0 : _a2.length) !== 2 || SVs.numericalPoints.some((x) => x.length !== 2)) {
      lineJXG.current = {};
      return;
    }
    let withlabel = SVs.labelForGraph !== "";
    let lineColor = darkMode === "dark" ? SVs.selectedStyle.lineColorDarkMode : SVs.selectedStyle.lineColor;
    var jsxLineAttributes = {
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
      dash: styleToDash(SVs.selectedStyle.lineStyle, SVs.dashed),
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
      jsxLineAttributes.label = {
        offset,
        anchorx,
        anchory,
        position: "top",
        highlight: false
      };
      if (SVs.labelHasLatex) {
        jsxLineAttributes.label.useMathJax = true;
      }
      if (SVs.applyStyleToLabel) {
        jsxLineAttributes.label.strokeColor = lineColor;
      } else {
        jsxLineAttributes.label.strokeColor = "var(--canvastext)";
      }
    } else {
      jsxLineAttributes.label = {
        highlight: false
      };
      if (SVs.labelHasLatex) {
        jsxLineAttributes.label.useMathJax = true;
      }
    }
    let through = [[...SVs.numericalPoints[0]], [...SVs.numericalPoints[1]]];
    let newLineJXG = board.create("line", through, jsxLineAttributes);
    newLineJXG.isDraggable = !fixLocation.current;
    newLineJXG.on("drag", function(e) {
      let viaPointer = e.type === "pointermove";
      if (!viaPointer || Math.abs(e.x - pointerAtDown.current[0]) > 0.1 || Math.abs(e.y - pointerAtDown.current[1]) > 0.1) {
        dragged.current = true;
      }
      pointCoords.current = [];
      if (viaPointer) {
        var o = board.origin.scrCoords;
        for (let i = 0; i < 2; i++) {
          let calculatedX = (pointsAtDown.current[i][1] + e.x - pointerAtDown.current[0] - o[1]) / board.unitX;
          let calculatedY = (o[2] - (pointsAtDown.current[i][2] + e.y - pointerAtDown.current[1])) / board.unitY;
          pointCoords.current.push([calculatedX, calculatedY]);
        }
      } else {
        pointCoords.current.push([
          newLineJXG.point1.X(),
          newLineJXG.point1.Y()
        ]);
        pointCoords.current.push([
          newLineJXG.point2.X(),
          newLineJXG.point2.Y()
        ]);
      }
      callAction({
        action: actions.moveLine,
        args: {
          point1coords: pointCoords.current[0],
          point2coords: pointCoords.current[1],
          transient: true,
          skippable: true
        }
      });
      newLineJXG.point1.coords.setCoordinates(
        JXG.COORDS_BY_USER,
        lastPositionsFromCore.current[0]
      );
      newLineJXG.point2.coords.setCoordinates(
        JXG.COORDS_BY_USER,
        lastPositionsFromCore.current[1]
      );
    });
    newLineJXG.on("up", function(e) {
      if (dragged.current) {
        callAction({
          action: actions.moveLine,
          args: {
            point1coords: pointCoords.current[0],
            point2coords: pointCoords.current[1]
          }
        });
      } else if (!pointerMovedSinceDown.current && !fixed.current) {
        if (switchable.current) {
          callAction({
            action: actions.switchLine
          });
          callAction({
            action: actions.lineClicked,
            args: { name }
            // send name so get original name if adapted
          });
        } else {
          callAction({
            action: actions.lineClicked,
            args: { name }
            // send name so get original name if adapted
          });
        }
      }
      pointerIsDown.current = false;
    });
    newLineJXG.on("keyfocusout", function(e) {
      if (dragged.current) {
        callAction({
          action: actions.moveLine,
          args: {
            point1coords: pointCoords.current[0],
            point2coords: pointCoords.current[1]
          }
        });
        dragged.current = false;
      }
    });
    newLineJXG.on("down", function(e) {
      dragged.current = false;
      pointerAtDown.current = [e.x, e.y];
      pointsAtDown.current = [
        [...newLineJXG.point1.coords.scrCoords],
        [...newLineJXG.point2.coords.scrCoords]
      ];
      pointerIsDown.current = true;
      pointerMovedSinceDown.current = false;
      if (!fixed.current) {
        callAction({
          action: actions.lineFocused,
          args: { name }
          // send name so get original name if adapted
        });
      }
    });
    newLineJXG.on("hit", function(e) {
      dragged.current = false;
      pointsAtDown.current = [
        [...newLineJXG.point1.coords.scrCoords],
        [...newLineJXG.point2.coords.scrCoords]
      ];
      callAction({
        action: actions.lineFocused,
        args: { name }
        // send name so get original name if adapted
      });
    });
    newLineJXG.on("keydown", function(e) {
      if (e.key === "Enter") {
        if (dragged.current) {
          callAction({
            action: actions.moveLine,
            args: {
              point1coords: pointCoords.current[0],
              point2coords: pointCoords.current[1]
            }
          });
          dragged.current = false;
        }
        if (switchable.current) {
          callAction({
            action: actions.switchLine
          });
          callAction({
            action: actions.lineClicked,
            args: { name }
            // send name so get original name if adapted
          });
        } else {
          callAction({
            action: actions.lineClicked,
            args: { name }
            // send name so get original name if adapted
          });
        }
      }
    });
    previousWithLabel.current = SVs.labelForGraph !== "";
    lineJXG.current = newLineJXG;
  }
  function boardMoveHandler(e) {
    if (pointerIsDown.current) {
      if (Math.abs(e.x - pointerAtDown.current[0]) > 0.1 || Math.abs(e.y - pointerAtDown.current[1]) > 0.1) {
        pointerMovedSinceDown.current = true;
      }
    }
  }
  function deleteLineJXG() {
    lineJXG.current.off("drag");
    lineJXG.current.off("down");
    lineJXG.current.off("hit");
    lineJXG.current.off("up");
    lineJXG.current.off("keyfocusout");
    lineJXG.current.off("keydown");
    board.removeObject(lineJXG.current);
    lineJXG.current = {};
  }
  if (board) {
    if (Object.keys(lineJXG.current).length === 0) {
      createLineJXG();
    } else if (((_a = SVs.numericalPoints) == null ? void 0 : _a.length) !== 2 || SVs.numericalPoints.some((x) => x.length !== 2)) {
      deleteLineJXG();
    } else {
      let validCoords = true;
      for (let coords of [SVs.numericalPoints[0], SVs.numericalPoints[1]]) {
        if (!Number.isFinite(coords[0])) {
          validCoords = false;
        }
        if (!Number.isFinite(coords[1])) {
          validCoords = false;
        }
      }
      lineJXG.current.point1.coords.setCoordinates(
        JXG.COORDS_BY_USER,
        SVs.numericalPoints[0]
      );
      lineJXG.current.point2.coords.setCoordinates(
        JXG.COORDS_BY_USER,
        SVs.numericalPoints[1]
      );
      let visible = !SVs.hidden;
      if (validCoords) {
        let actuallyChangedVisibility = lineJXG.current.visProp["visible"] !== visible;
        lineJXG.current.visProp["visible"] = visible;
        lineJXG.current.visPropCalc["visible"] = visible;
        if (actuallyChangedVisibility) {
          lineJXG.current.setAttribute({ visible });
        }
      } else {
        lineJXG.current.visProp["visible"] = false;
        lineJXG.current.visPropCalc["visible"] = false;
      }
      lineJXG.current.visProp.fixed = fixed.current;
      lineJXG.current.visProp.highlight = !fixLocation.current;
      lineJXG.current.isDraggable = !fixLocation.current;
      let layer = 10 * SVs.layer + LINE_LAYER_OFFSET;
      let layerChanged = lineJXG.current.visProp.layer !== layer;
      if (layerChanged) {
        lineJXG.current.setAttribute({ layer });
      }
      let lineColor = darkMode === "dark" ? SVs.selectedStyle.lineColorDarkMode : SVs.selectedStyle.lineColor;
      if (lineJXG.current.visProp.strokecolor !== lineColor) {
        lineJXG.current.visProp.strokecolor = lineColor;
        lineJXG.current.visProp.highlightstrokecolor = lineColor;
      }
      if (lineJXG.current.visProp.strokewidth !== SVs.selectedStyle.lineWidth) {
        lineJXG.current.visProp.strokewidth = SVs.selectedStyle.lineWidth;
        lineJXG.current.visProp.highlightstrokewidth = SVs.selectedStyle.lineWidth;
      }
      if (lineJXG.current.visProp.strokeopacity !== SVs.selectedStyle.lineOpacity) {
        lineJXG.current.visProp.strokeopacity = SVs.selectedStyle.lineOpacity;
        lineJXG.current.visProp.highlightstrokeopacity = SVs.selectedStyle.lineOpacity * 0.5;
      }
      let newDash = styleToDash(SVs.selectedStyle.lineStyle, SVs.dashed);
      if (lineJXG.current.visProp.dash !== newDash) {
        lineJXG.current.visProp.dash = newDash;
      }
      lineJXG.current.name = SVs.labelForGraph;
      let withlabel = SVs.labelForGraph !== "";
      if (withlabel != previousWithLabel.current) {
        lineJXG.current.setAttribute({ withlabel });
        previousWithLabel.current = withlabel;
      }
      lineJXG.current.needsUpdate = true;
      lineJXG.current.update();
      if (lineJXG.current.hasLabel) {
        lineJXG.current.label.needsUpdate = true;
        if (SVs.applyStyleToLabel) {
          lineJXG.current.label.visProp.strokecolor = lineColor;
        } else {
          lineJXG.current.label.visProp.strokecolor = "var(--canvastext)";
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
          lineJXG.current.label.visProp.anchorx = anchorx;
          lineJXG.current.label.visProp.anchory = anchory;
          lineJXG.current.label.visProp.offset = offset;
          previousLabelPosition.current = SVs.labelPosition;
          lineJXG.current.label.fullUpdate();
        } else {
          lineJXG.current.label.update();
        }
      }
      board.updateRenderer();
    }
    return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx("a", { name: id }) });
  }
  if (SVs.hidden) {
    return null;
  }
  let mathJaxify = "\\(" + SVs.latex + "\\)";
  let style = textRendererStyle(darkMode, SVs.selectedStyle);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("a", { name: id }),
    /* @__PURE__ */ jsx("span", { id, style, children: /* @__PURE__ */ jsx(betterReactMathjax.MathJax, { hideUntilTypeset: "first", inline: true, dynamic: true, children: mathJaxify }) })
  ] });
});
function styleToDash(style, dash) {
  if (style === "dashed" || dash) {
    return 2;
  } else if (style === "solid") {
    return 0;
  } else if (style === "dotted") {
    return 1;
  } else {
    return 0;
  }
}
export {
  line as default
};
