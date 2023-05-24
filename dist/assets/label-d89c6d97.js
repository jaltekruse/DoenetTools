import { R as React, bx as useDoenetRenderer, r as reactExports, t as Recoil_index_20, J as darkModeAtom, by as Context, bD as getPositionFromAnchorByCoordinate, j as jsx, bJ as textRendererStyle, b as jsxs, v as betterReactMathjax } from "./PageViewer-d914b069.js";
import { BoardContext, TEXT_LAYER_OFFSET } from "./graph-8a8db909.js";
import "./css-5483d03f.js";
import "./visibility-sensor-57589aaf.js";
const label = React.memo(function Label(props) {
  let { name, id, SVs, children, actions, callAction } = useDoenetRenderer(props);
  Label.ignoreActionsWithoutCore = () => true;
  let labelJXG = reactExports.useRef(null);
  let anchorPointJXG = reactExports.useRef(null);
  let anchorRel = reactExports.useRef(null);
  const board = reactExports.useContext(BoardContext);
  let pointerAtDown = reactExports.useRef(null);
  let pointAtDown = reactExports.useRef(null);
  let pointerIsDown = reactExports.useRef(false);
  let pointerMovedSinceDown = reactExports.useRef(false);
  let dragged = reactExports.useRef(false);
  let calculatedX = reactExports.useRef(null);
  let calculatedY = reactExports.useRef(null);
  let lastPositionFromCore = reactExports.useRef(null);
  let previousPositionFromAnchor = reactExports.useRef(null);
  let fixed = reactExports.useRef(false);
  let fixLocation = reactExports.useRef(false);
  fixed.current = SVs.fixed;
  fixLocation.current = !SVs.draggable || SVs.fixLocation || SVs.fixed;
  const darkMode = Recoil_index_20(darkModeAtom);
  reactExports.useEffect(() => {
    return () => {
      if (labelJXG.current !== null) {
        deleteLabelJXG();
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
  function createLabelJXG() {
    let textColor = darkMode === "dark" ? SVs.selectedStyle.textColorDarkMode : SVs.selectedStyle.textColor;
    let backgroundColor = darkMode === "dark" ? SVs.selectedStyle.backgroundColorDarkMode : SVs.selectedStyle.backgroundColor;
    let cssStyle = ``;
    if (backgroundColor) {
      cssStyle += `background-color: ${backgroundColor}`;
    }
    let jsxLabelAttributes = {
      visible: !SVs.hidden,
      fixed: fixed.current,
      layer: 10 * SVs.layer + TEXT_LAYER_OFFSET,
      cssStyle,
      highlightCssStyle: cssStyle,
      strokeColor: textColor,
      strokeOpacity: 1,
      highlightStrokeColor: textColor,
      highlightStrokeOpacity: 0.5,
      highlight: !fixLocation.current,
      useMathJax: SVs.hasLatex,
      parse: false
    };
    let newAnchorPointJXG;
    try {
      let anchor = Context.fromAst(SVs.anchor);
      let anchorCoords = [
        anchor.get_component(0).evaluate_to_constant(),
        anchor.get_component(1).evaluate_to_constant()
      ];
      if (!Number.isFinite(anchorCoords[0])) {
        anchorCoords[0] = 0;
        jsxLabelAttributes["visible"] = false;
      }
      if (!Number.isFinite(anchorCoords[1])) {
        anchorCoords[1] = 0;
        jsxLabelAttributes["visible"] = false;
      }
      newAnchorPointJXG = board.create("point", anchorCoords, {
        visible: false
      });
    } catch (e) {
      jsxLabelAttributes["visible"] = false;
      newAnchorPointJXG = board.create("point", [0, 0], { visible: false });
    }
    jsxLabelAttributes.anchor = newAnchorPointJXG;
    let { anchorx, anchory } = getPositionFromAnchorByCoordinate(
      SVs.positionFromAnchor
    );
    jsxLabelAttributes.anchorx = anchorx;
    jsxLabelAttributes.anchory = anchory;
    anchorRel.current = [anchorx, anchory];
    let newLabelJXG = board.create(
      "text",
      [0, 0, SVs.value],
      jsxLabelAttributes
    );
    newLabelJXG.isDraggable = !fixLocation.current;
    newLabelJXG.on("down", function(e) {
      pointerAtDown.current = [e.x, e.y];
      pointAtDown.current = [...newAnchorPointJXG.coords.scrCoords];
      dragged.current = false;
      pointerIsDown.current = true;
      pointerMovedSinceDown.current = false;
      if (!fixed.current) {
        callAction({
          action: actions.labelFocused,
          args: { name }
          // send name so get original name if adapted
        });
      }
    });
    newLabelJXG.on("hit", function(e) {
      pointAtDown.current = [...newAnchorPointJXG.coords.scrCoords];
      dragged.current = false;
      callAction({
        action: actions.labelFocused,
        args: { name }
        // send name so get original name if adapted
      });
    });
    newLabelJXG.on("up", function(e) {
      if (dragged.current) {
        callAction({
          action: actions.moveLabel,
          args: {
            x: calculatedX.current,
            y: calculatedY.current
          }
        });
        dragged.current = false;
      } else if (!pointerMovedSinceDown.current && !fixed.current) {
        callAction({
          action: actions.labelClicked,
          args: { name }
          // send name so get original name if adapted
        });
      }
      pointerIsDown.current = false;
    });
    newLabelJXG.on("keyfocusout", function(e) {
      if (dragged.current) {
        callAction({
          action: actions.moveLabel,
          args: {
            x: calculatedX.current,
            y: calculatedY.current
          }
        });
        dragged.current = false;
      }
    });
    newLabelJXG.on("drag", function(e) {
      let viaPointer = e.type === "pointermove";
      if (!viaPointer || Math.abs(e.x - pointerAtDown.current[0]) > 0.1 || Math.abs(e.y - pointerAtDown.current[1]) > 0.1) {
        dragged.current = true;
      }
      let [xmin, ymax, xmax, ymin] = board.getBoundingBox();
      let width = newLabelJXG.size[0] / board.unitX;
      let height = newLabelJXG.size[1] / board.unitY;
      let anchorx2 = anchorRel.current[0];
      let anchory2 = anchorRel.current[1];
      let offsetx = 0;
      if (anchorx2 === "middle") {
        offsetx = -width / 2;
      } else if (anchorx2 === "right") {
        offsetx = -width;
      }
      let offsety = 0;
      if (anchory2 === "middle") {
        offsety = -height / 2;
      } else if (anchory2 === "top") {
        offsety = -height;
      }
      let xminAdjusted = xmin + 0.04 * (xmax - xmin) - offsetx - width;
      let xmaxAdjusted = xmax - 0.04 * (xmax - xmin) - offsetx;
      let yminAdjusted = ymin + 0.04 * (ymax - ymin) - offsety - height;
      let ymaxAdjusted = ymax - 0.04 * (ymax - ymin) - offsety;
      if (viaPointer) {
        var o = board.origin.scrCoords;
        calculatedX.current = (pointAtDown.current[1] + e.x - pointerAtDown.current[0] - o[1]) / board.unitX;
        calculatedY.current = (o[2] - (pointAtDown.current[2] + e.y - pointerAtDown.current[1])) / board.unitY;
      } else {
        calculatedX.current = newAnchorPointJXG.X() + newLabelJXG.relativeCoords.usrCoords[1];
        calculatedY.current = newAnchorPointJXG.Y() + newLabelJXG.relativeCoords.usrCoords[2];
      }
      calculatedX.current = Math.min(
        xmaxAdjusted,
        Math.max(xminAdjusted, calculatedX.current)
      );
      calculatedY.current = Math.min(
        ymaxAdjusted,
        Math.max(yminAdjusted, calculatedY.current)
      );
      callAction({
        action: actions.moveLabel,
        args: {
          x: calculatedX.current,
          y: calculatedY.current,
          transient: true,
          skippable: true
        }
      });
      newLabelJXG.relativeCoords.setCoordinates(JXG.COORDS_BY_USER, [0, 0]);
      newAnchorPointJXG.coords.setCoordinates(
        JXG.COORDS_BY_USER,
        lastPositionFromCore.current
      );
    });
    newLabelJXG.on("keydown", function(e) {
      if (e.key === "Enter") {
        if (dragged.current) {
          callAction({
            action: actions.moveLabel,
            args: {
              x: calculatedX.current,
              y: calculatedY.current
            }
          });
          dragged.current = false;
        }
        callAction({
          action: actions.labelClicked,
          args: { name }
          // send name so get original name if adapted
        });
      }
    });
    labelJXG.current = newLabelJXG;
    anchorPointJXG.current = newAnchorPointJXG;
    previousPositionFromAnchor.current = SVs.positionFromAnchor;
    if (SVs.hasLatex) {
      setTimeout(() => {
        if (labelJXG.current) {
          labelJXG.current.needsUpdate = true;
          labelJXG.current.setText(SVs.value);
          labelJXG.current.update();
          board == null ? void 0 : board.updateRenderer();
        }
      }, 1e3);
    }
  }
  function boardMoveHandler(e) {
    if (pointerIsDown.current) {
      if (Math.abs(e.x - pointerAtDown.current[0]) > 0.1 || Math.abs(e.y - pointerAtDown.current[1]) > 0.1) {
        pointerMovedSinceDown.current = true;
      }
    }
  }
  function deleteLabelJXG() {
    labelJXG.current.off("drag");
    labelJXG.current.off("down");
    labelJXG.current.off("hit");
    labelJXG.current.off("up");
    labelJXG.current.off("keyfocusout");
    labelJXG.current.off("keydown");
    board.removeObject(labelJXG.current);
    labelJXG.current = null;
  }
  if (board) {
    let anchorCoords;
    try {
      let anchor = Context.fromAst(SVs.anchor);
      anchorCoords = [
        anchor.get_component(0).evaluate_to_constant(),
        anchor.get_component(1).evaluate_to_constant()
      ];
    } catch (e) {
      anchorCoords = [NaN, NaN];
    }
    lastPositionFromCore.current = anchorCoords;
    if (labelJXG.current === null) {
      createLabelJXG();
    } else {
      labelJXG.current.relativeCoords.setCoordinates(
        JXG.COORDS_BY_USER,
        [0, 0]
      );
      anchorPointJXG.current.coords.setCoordinates(
        JXG.COORDS_BY_USER,
        anchorCoords
      );
      labelJXG.current.setText(SVs.value);
      let visible = !SVs.hidden;
      if (Number.isFinite(anchorCoords[0]) && Number.isFinite(anchorCoords[1])) {
        let actuallyChangedVisibility = labelJXG.current.visProp["visible"] !== visible;
        labelJXG.current.visProp["visible"] = visible;
        labelJXG.current.visPropCalc["visible"] = visible;
        if (actuallyChangedVisibility) {
          labelJXG.current.setAttribute({ visible });
        }
      } else {
        labelJXG.current.visProp["visible"] = false;
        labelJXG.current.visPropCalc["visible"] = false;
      }
      let layer = 10 * SVs.layer + TEXT_LAYER_OFFSET;
      let layerChanged = labelJXG.current.visProp.layer !== layer;
      if (layerChanged) {
        labelJXG.current.setAttribute({ layer });
      }
      let textColor = darkMode === "dark" ? SVs.selectedStyle.textColorDarkMode : SVs.selectedStyle.textColor;
      let backgroundColor = darkMode === "dark" ? SVs.selectedStyle.backgroundColorDarkMode : SVs.selectedStyle.backgroundColor;
      let cssStyle = ``;
      if (backgroundColor) {
        cssStyle += `background-color: ${backgroundColor}`;
      } else {
        cssStyle += `background-color: transparent`;
      }
      if (labelJXG.current.visProp.strokecolor !== textColor) {
        labelJXG.current.visProp.strokecolor = textColor;
        labelJXG.current.visProp.highlightstrokecolor = textColor;
      }
      if (labelJXG.current.visProp.cssstyle !== cssStyle) {
        labelJXG.current.visProp.cssstyle = cssStyle;
        labelJXG.current.visProp.highlightcssstyle = cssStyle;
      }
      labelJXG.current.visProp.highlight = !fixLocation.current;
      labelJXG.current.visProp.fixed = fixed.current;
      labelJXG.current.isDraggable = !fixLocation.current;
      labelJXG.current.needsUpdate = true;
      if (SVs.positionFromAnchor !== previousPositionFromAnchor.current) {
        let { anchorx, anchory } = getPositionFromAnchorByCoordinate(
          SVs.positionFromAnchor
        );
        labelJXG.current.visProp.anchorx = anchorx;
        labelJXG.current.visProp.anchory = anchory;
        anchorRel.current = [anchorx, anchory];
        previousPositionFromAnchor.current = SVs.positionFromAnchor;
        labelJXG.current.fullUpdate();
      } else {
        labelJXG.current.update();
      }
      anchorPointJXG.current.needsUpdate = true;
      anchorPointJXG.current.update();
      board.updateRenderer();
    }
    return /* @__PURE__ */ jsx("a", { name: id });
  }
  if (SVs.hidden) {
    return null;
  }
  let style = textRendererStyle(darkMode, SVs.selectedStyle);
  style.marginRight = "12px";
  let label2 = SVs.value;
  if (SVs.hasLatex) {
    label2 = /* @__PURE__ */ jsx(betterReactMathjax.MathJax, { hideUntilTypeset: "first", inline: true, dynamic: true, children: label2 });
  }
  return /* @__PURE__ */ jsxs("span", { id, style, children: [
    /* @__PURE__ */ jsx("a", { name: id }),
    label2
  ] });
});
export {
  label as default
};
