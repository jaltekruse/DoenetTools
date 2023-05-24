import { R as React, bx as useDoenetRenderer, r as reactExports, t as Recoil_index_20, J as darkModeAtom, bG as createFunctionFromDefinition, j as jsx, F as Fragment } from "./PageViewer-d914b069.js";
import { BoardContext, LINE_LAYER_OFFSET } from "./graph-8a8db909.js";
import "./css-5483d03f.js";
import "./visibility-sensor-57589aaf.js";
const regionBetweenCurveXAxis = React.memo(function RegionBetweenCurveXAxis(props) {
  let { name, id, SVs } = useDoenetRenderer(props);
  RegionBetweenCurveXAxis.ignoreActionsWithoutCore = () => true;
  const board = reactExports.useContext(BoardContext);
  let curveJXG = reactExports.useRef(null);
  let integralJXG = reactExports.useRef(null);
  const darkMode = Recoil_index_20(darkModeAtom);
  reactExports.useEffect(() => {
    return () => {
      if (integralJXG.current !== null) {
        deleteRegion();
      }
    };
  }, []);
  function createRegion() {
    if (!SVs.haveFunction || SVs.boundaryValues.length !== 2 || !SVs.boundaryValues.every(Number.isFinite)) {
      return null;
    }
    let fillColor = darkMode === "dark" ? SVs.selectedStyle.fillColorDarkMode : SVs.selectedStyle.fillColor;
    let jsxAttributes = {
      name: SVs.labelForGraph,
      visible: !SVs.hidden,
      withLabel: SVs.labelForGraph !== "",
      fixed: true,
      layer: 10 * SVs.layer + LINE_LAYER_OFFSET,
      fillColor,
      fillOpacity: SVs.selectedStyle.fillOpacity,
      highlight: false,
      // don't display points at left and right endpoints along function
      curveLeft: { visible: false },
      curveRight: { visible: false }
    };
    jsxAttributes.label = {
      highlight: false
    };
    let f = createFunctionFromDefinition(SVs.fDefinition);
    curveJXG.current = board.create("functiongraph", f, { visible: false });
    return board.create(
      "integral",
      [SVs.boundaryValues, curveJXG.current],
      jsxAttributes
    );
  }
  function deleteRegion() {
    if (integralJXG.current) {
      board.removeObject(integralJXG.current);
      integralJXG.current = null;
      board.removeObject(curveJXG.current);
      curveJXG.current = null;
    }
  }
  if (board) {
    if (integralJXG.current === null) {
      integralJXG.current = createRegion();
    } else if (!SVs.haveFunction || SVs.boundaryValues.length !== 2 || !SVs.boundaryValues.every(Number.isFinite)) {
      deleteRegion();
    } else {
      let f = createFunctionFromDefinition(SVs.fDefinition);
      curveJXG.current.Y = f;
      integralJXG.current.visProp["visible"] = !SVs.hidden;
      integralJXG.current.visPropCalc["visible"] = !SVs.hidden;
      let [x1, x2] = SVs.boundaryValues;
      let [y1, y2] = SVs.boundaryValues.map(f);
      integralJXG.current.curveLeft.coords.setCoordinates(JXG.COORDS_BY_USER, [
        x1,
        y1
      ]);
      integralJXG.current.curveRight.coords.setCoordinates(JXG.COORDS_BY_USER, [
        x2,
        y2
      ]);
      let layer = 10 * SVs.layer + LINE_LAYER_OFFSET;
      let layerChanged = integralJXG.current.visProp.layer !== layer;
      if (layerChanged) {
        integralJXG.current.setAttribute({ layer });
      }
      let fillColor = darkMode === "dark" ? SVs.selectedStyle.fillColorDarkMode : SVs.selectedStyle.fillColor;
      if (integralJXG.current.visProp.fillcolor !== fillColor) {
        integralJXG.current.visProp.fillcolor = fillColor;
      }
      if (integralJXG.current.visProp.fillopacity !== SVs.selectedStyle.fillOpacity) {
        integralJXG.current.visProp.fillopacity = SVs.selectedStyle.fillOpacity;
      }
      integralJXG.current.curveLeft.needsUpdate = true;
      integralJXG.current.curveLeft.update();
      integralJXG.current.curveLeft.fullUpdate();
      integralJXG.current.curveRight.needsUpdate = true;
      integralJXG.current.curveLeft.update();
      integralJXG.current.curveRight.fullUpdate();
      integralJXG.current.needsUpdate = true;
      integralJXG.current.curveLeft.update();
      integralJXG.current.fullUpdate();
      board.update();
      board.fullUpdate();
      board.updateRenderer();
    }
    return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx("a", { name: id }) });
  }
  if (SVs.hidden) {
    return null;
  }
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx("a", { name: id }) });
});
export {
  regionBetweenCurveXAxis as default
};
