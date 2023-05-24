import { R as React, bx as useDoenetRenderer, r as reactExports, t as Recoil_index_20, J as darkModeAtom, j as jsx, F as Fragment } from "./PageViewer-d914b069.js";
import { BoardContext, LINE_LAYER_OFFSET } from "./graph-8a8db909.js";
import "./css-5483d03f.js";
import "./visibility-sensor-57589aaf.js";
const ray = React.memo(function Ray(props) {
  let { name, id, SVs, actions, sourceOfUpdate, callAction } = useDoenetRenderer(props);
  Ray.ignoreActionsWithoutCore = () => true;
  const board = reactExports.useContext(BoardContext);
  let rayJXG = reactExports.useRef(null);
  let pointerAtDown = reactExports.useRef(null);
  let pointsAtDown = reactExports.useRef(null);
  let pointerIsDown = reactExports.useRef(false);
  let pointerMovedSinceDown = reactExports.useRef(false);
  let dragged = reactExports.useRef(false);
  let previousWithLabel = reactExports.useRef(null);
  let pointCoords = reactExports.useRef(null);
  let lastEndpointFromCore = reactExports.useRef(null);
  let lastThroughpointFromCore = reactExports.useRef(null);
  let fixed = reactExports.useRef(false);
  let fixLocation = reactExports.useRef(false);
  lastEndpointFromCore.current = SVs.numericalEndpoint;
  lastThroughpointFromCore.current = SVs.numericalThroughpoint;
  fixed.current = SVs.fixed;
  fixLocation.current = !SVs.draggable || SVs.fixLocation || SVs.fixed;
  const darkMode = Recoil_index_20(darkModeAtom);
  reactExports.useEffect(() => {
    return () => {
      if (Object.keys(rayJXG.current).length !== 0) {
        deleteRayJXG();
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
  function createRayJXG() {
    if (SVs.numericalEndpoint.length !== 2 || SVs.numericalThroughpoint.length !== 2) {
      rayJXG.current = null;
      return;
    }
    let lineColor = darkMode === "dark" ? SVs.selectedStyle.lineColorDarkMode : SVs.selectedStyle.lineColor;
    var jsxRayAttributes = {
      name: SVs.labelForGraph,
      visible: !SVs.hidden,
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
      straightFirst: false
    };
    jsxRayAttributes.label = {
      highlight: false
    };
    if (SVs.labelHasLatex) {
      jsxRayAttributes.label.useMathJax = true;
    }
    if (SVs.applyStyleToLabel) {
      jsxRayAttributes.label.strokeColor = lineColor;
    } else {
      jsxRayAttributes.label.strokeColor = "var(--canvastext)";
    }
    let through = [[...SVs.numericalEndpoint], [...SVs.numericalThroughpoint]];
    let newRayJXG = board.create("line", through, jsxRayAttributes);
    newRayJXG.isDraggable = !fixLocation.current;
    newRayJXG.on("drag", function(e) {
      let viaPointer = e.type === "pointermove";
      if (!viaPointer || Math.abs(e.x - pointerAtDown.current[0]) > 0.1 || Math.abs(e.y - pointerAtDown.current[1]) > 0.1) {
        dragged.current = true;
        pointCoords.current = [];
        for (let i = 0; i < 2; i++) {
          if (viaPointer) {
            var o = board.origin.scrCoords;
            let calculatedX = (pointsAtDown.current[i][1] + e.x - pointerAtDown.current[0] - o[1]) / board.unitX;
            let calculatedY = (o[2] - (pointsAtDown.current[i][2] + e.y - pointerAtDown.current[1])) / board.unitY;
            pointCoords.current.push([calculatedX, calculatedY]);
          } else {
            pointCoords.current.push([
              newRayJXG.point1.X(),
              newRayJXG.point1.Y()
            ]);
            pointCoords.current.push([
              newRayJXG.point2.X(),
              newRayJXG.point2.Y()
            ]);
          }
        }
        callAction({
          action: actions.moveRay,
          args: {
            endpointcoords: pointCoords.current[0],
            throughcoords: pointCoords.current[1],
            transient: true,
            skippable: true
          }
        });
      }
      rayJXG.current.point1.coords.setCoordinates(
        JXG.COORDS_BY_USER,
        lastEndpointFromCore.current
      );
      rayJXG.current.point2.coords.setCoordinates(
        JXG.COORDS_BY_USER,
        lastThroughpointFromCore.current
      );
    });
    newRayJXG.on("up", function(e) {
      if (dragged.current) {
        callAction({
          action: actions.moveRay,
          args: {
            endpointcoords: pointCoords.current[0],
            throughcoords: pointCoords.current[1]
          }
        });
      } else if (!pointerMovedSinceDown.current && !fixed.current) {
        callAction({
          action: actions.rayClicked,
          args: { name }
          // send name so get original name if adapted
        });
      }
      pointerIsDown.current = false;
    });
    newRayJXG.on("keyfocusout", function(e) {
      if (dragged.current) {
        callAction({
          action: actions.moveRay,
          args: {
            point1coords: pointCoords.current[0],
            point2coords: pointCoords.current[1]
          }
        });
        dragged.current = false;
      }
    });
    newRayJXG.on("down", function(e) {
      dragged.current = false;
      pointerAtDown.current = [e.x, e.y];
      pointsAtDown.current = [
        [...newRayJXG.point1.coords.scrCoords],
        [...newRayJXG.point2.coords.scrCoords]
      ];
      pointerIsDown.current = true;
      pointerMovedSinceDown.current = false;
      if (!fixed.current) {
        callAction({
          action: actions.rayFocused,
          args: { name }
          // send name so get original name if adapted
        });
      }
    });
    newRayJXG.on("hit", function(e) {
      dragged.current = false;
      callAction({
        action: actions.rayFocused,
        args: { name }
        // send name so get original name if adapted
      });
    });
    newRayJXG.on("keydown", function(e) {
      if (e.key === "Enter") {
        if (dragged.current) {
          callAction({
            action: actions.moveRay,
            args: {
              point1coords: pointCoords.current[0],
              point2coords: pointCoords.current[1]
            }
          });
          dragged.current = false;
        }
        callAction({
          action: actions.rayClicked,
          args: { name }
          // send name so get original name if adapted
        });
      }
    });
    previousWithLabel.current = SVs.labelForGraph !== "";
    rayJXG.current = newRayJXG;
  }
  function boardMoveHandler(e) {
    if (pointerIsDown.current) {
      if (Math.abs(e.x - pointerAtDown.current[0]) > 0.1 || Math.abs(e.y - pointerAtDown.current[1]) > 0.1) {
        pointerMovedSinceDown.current = true;
      }
    }
  }
  function deleteRayJXG() {
    rayJXG.current.off("drag");
    rayJXG.current.off("down");
    rayJXG.current.off("hit");
    rayJXG.current.off("up");
    rayJXG.current.off("keyfocusout");
    rayJXG.current.off("keydown");
    board.removeObject(rayJXG.current);
    rayJXG.current = null;
  }
  if (board) {
    if (rayJXG.current === null) {
      createRayJXG();
    } else if (SVs.numericalEndpoint.length !== 2 || SVs.numericalThroughpoint.length !== 2) {
      deleteRayJXG();
    } else {
      let validCoords = true;
      for (let coords of [SVs.numericalEndpoint, SVs.numericalThroughpoint]) {
        if (!Number.isFinite(coords[0])) {
          validCoords = false;
        }
        if (!Number.isFinite(coords[1])) {
          validCoords = false;
        }
      }
      rayJXG.current.point1.coords.setCoordinates(
        JXG.COORDS_BY_USER,
        SVs.numericalEndpoint
      );
      rayJXG.current.point2.coords.setCoordinates(
        JXG.COORDS_BY_USER,
        SVs.numericalThroughpoint
      );
      let visible = !SVs.hidden;
      if (validCoords) {
        let actuallyChangedVisibility = rayJXG.current.visProp["visible"] !== visible;
        rayJXG.current.visProp["visible"] = visible;
        rayJXG.current.visPropCalc["visible"] = visible;
        if (actuallyChangedVisibility) {
          rayJXG.current.setAttribute({ visible });
        }
      } else {
        rayJXG.current.visProp["visible"] = false;
        rayJXG.current.visPropCalc["visible"] = false;
      }
      rayJXG.current.visProp.fixed = fixed.current;
      rayJXG.current.visProp.highlight = !fixLocation.current;
      rayJXG.current.isDraggable = !fixLocation.current;
      let layer = 10 * SVs.layer + LINE_LAYER_OFFSET;
      let layerChanged = rayJXG.current.visProp.layer !== layer;
      if (layerChanged) {
        rayJXG.current.setAttribute({ layer });
      }
      let lineColor = darkMode === "dark" ? SVs.selectedStyle.lineColorDarkMode : SVs.selectedStyle.lineColor;
      if (rayJXG.current.visProp.strokecolor !== lineColor) {
        rayJXG.current.visProp.strokecolor = lineColor;
        rayJXG.current.visProp.highlightstrokecolor = lineColor;
      }
      if (rayJXG.current.visProp.strokewidth !== SVs.selectedStyle.lineWidth) {
        rayJXG.current.visProp.strokewidth = SVs.selectedStyle.lineWidth;
        rayJXG.current.visProp.highlightstrokewidth = SVs.selectedStyle.lineWidth;
      }
      if (rayJXG.current.visProp.strokeopacity !== SVs.selectedStyle.lineOpacity) {
        rayJXG.current.visProp.strokeopacity = SVs.selectedStyle.lineOpacity;
        rayJXG.current.visProp.highlightstrokeopacity = SVs.selectedStyle.lineOpacity * 0.5;
      }
      let newDash = styleToDash(SVs.selectedStyle.lineStyle);
      if (rayJXG.current.visProp.dash !== newDash) {
        rayJXG.current.visProp.dash = newDash;
      }
      rayJXG.current.name = SVs.labelForGraph;
      let withlabel = SVs.labelForGraph !== "";
      if (withlabel != previousWithLabel.current) {
        rayJXG.current.setAttribute({ withlabel });
        previousWithLabel.current = withlabel;
      }
      rayJXG.current.needsUpdate = true;
      rayJXG.current.update();
      if (rayJXG.current.hasLabel) {
        if (SVs.applyStyleToLabel) {
          rayJXG.current.label.visProp.strokecolor = lineColor;
        } else {
          rayJXG.current.label.visProp.strokecolor = "var(--canvastext)";
        }
        rayJXG.current.label.needsUpdate = true;
        rayJXG.current.label.update();
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
  ray as default
};
