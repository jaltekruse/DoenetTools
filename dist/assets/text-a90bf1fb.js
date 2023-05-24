import { R as React, bx as useDoenetRenderer, r as reactExports, t as Recoil_index_20, J as darkModeAtom, by as Context, bD as getPositionFromAnchorByCoordinate, j as jsx, bJ as textRendererStyle, b as jsxs, F as Fragment } from "./PageViewer-d914b069.js";
import { BoardContext, TEXT_LAYER_OFFSET } from "./graph-8a8db909.js";
import "./css-5483d03f.js";
import "./visibility-sensor-57589aaf.js";
const text = React.memo(function Text(props) {
  let { name, id, SVs, actions, sourceOfUpdate, callAction } = useDoenetRenderer(props);
  Text.ignoreActionsWithoutCore = () => true;
  let textJXG = reactExports.useRef(null);
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
      if (textJXG.current !== null) {
        deleteTextJXG();
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
  function createTextJXG() {
    let textColor = darkMode === "dark" ? SVs.selectedStyle.textColorDarkMode : SVs.selectedStyle.textColor;
    let backgroundColor = darkMode === "dark" ? SVs.selectedStyle.backgroundColorDarkMode : SVs.selectedStyle.backgroundColor;
    let cssStyle = ``;
    if (backgroundColor) {
      cssStyle += `background-color: ${backgroundColor}`;
    }
    let jsxTextAttributes = {
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
        jsxTextAttributes["visible"] = false;
      }
      if (!Number.isFinite(anchorCoords[1])) {
        anchorCoords[1] = 0;
        jsxTextAttributes["visible"] = false;
      }
      newAnchorPointJXG = board.create("point", anchorCoords, {
        visible: false
      });
    } catch (e) {
      jsxTextAttributes["visible"] = false;
      newAnchorPointJXG = board.create("point", [0, 0], { visible: false });
    }
    jsxTextAttributes.anchor = newAnchorPointJXG;
    let { anchorx, anchory } = getPositionFromAnchorByCoordinate(
      SVs.positionFromAnchor
    );
    jsxTextAttributes.anchorx = anchorx;
    jsxTextAttributes.anchory = anchory;
    anchorRel.current = [anchorx, anchory];
    let newTextJXG = board.create("text", [0, 0, SVs.text], jsxTextAttributes);
    newTextJXG.isDraggable = !fixLocation.current;
    newTextJXG.on("down", function(e) {
      pointerAtDown.current = [e.x, e.y];
      pointAtDown.current = [...newAnchorPointJXG.coords.scrCoords];
      dragged.current = false;
      pointerIsDown.current = true;
      pointerMovedSinceDown.current = false;
      if (!fixed.current) {
        callAction({
          action: actions.textFocused,
          args: { name }
          // send name so get original name if adapted
        });
      }
    });
    newTextJXG.on("hit", function(e) {
      pointAtDown.current = [...newAnchorPointJXG.coords.scrCoords];
      dragged.current = false;
      callAction({
        action: actions.textFocused,
        args: { name }
        // send name so get original name if adapted
      });
    });
    newTextJXG.on("up", function(e) {
      if (dragged.current) {
        callAction({
          action: actions.moveText,
          args: {
            x: calculatedX.current,
            y: calculatedY.current
          }
        });
        dragged.current = false;
      } else if (!pointerMovedSinceDown.current && !fixed.current) {
        callAction({
          action: actions.textClicked,
          args: { name }
          // send name so get original name if adapted
        });
      }
      pointerIsDown.current = false;
    });
    newTextJXG.on("keyfocusout", function(e) {
      if (dragged.current) {
        callAction({
          action: actions.moveText,
          args: {
            x: calculatedX.current,
            y: calculatedY.current
          }
        });
        dragged.current = false;
      }
    });
    newTextJXG.on("drag", function(e) {
      let viaPointer = e.type === "pointermove";
      if (!viaPointer || Math.abs(e.x - pointerAtDown.current[0]) > 0.1 || Math.abs(e.y - pointerAtDown.current[1]) > 0.1) {
        dragged.current = true;
      }
      let [xmin, ymax, xmax, ymin] = board.getBoundingBox();
      let width = newTextJXG.size[0] / board.unitX;
      let height = newTextJXG.size[1] / board.unitY;
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
        calculatedX.current = newAnchorPointJXG.X() + newTextJXG.relativeCoords.usrCoords[1];
        calculatedY.current = newAnchorPointJXG.Y() + newTextJXG.relativeCoords.usrCoords[2];
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
        action: actions.moveText,
        args: {
          x: calculatedX.current,
          y: calculatedY.current,
          transient: true,
          skippable: true
        }
      });
      newTextJXG.relativeCoords.setCoordinates(JXG.COORDS_BY_USER, [0, 0]);
      newAnchorPointJXG.coords.setCoordinates(
        JXG.COORDS_BY_USER,
        lastPositionFromCore.current
      );
    });
    newTextJXG.on("keydown", function(e) {
      if (e.key === "Enter") {
        if (dragged.current) {
          callAction({
            action: actions.moveText,
            args: {
              x: calculatedX.current,
              y: calculatedY.current
            }
          });
          dragged.current = false;
        }
        callAction({
          action: actions.textClicked,
          args: { name }
          // send name so get original name if adapted
        });
      }
    });
    textJXG.current = newTextJXG;
    anchorPointJXG.current = newAnchorPointJXG;
    previousPositionFromAnchor.current = SVs.positionFromAnchor;
  }
  function boardMoveHandler(e) {
    if (pointerIsDown.current) {
      if (Math.abs(e.x - pointerAtDown.current[0]) > 0.1 || Math.abs(e.y - pointerAtDown.current[1]) > 0.1) {
        pointerMovedSinceDown.current = true;
      }
    }
  }
  function deleteTextJXG() {
    textJXG.current.off("drag");
    textJXG.current.off("down");
    textJXG.current.off("hit");
    textJXG.current.off("up");
    textJXG.current.off("keyfocusout");
    textJXG.current.off("keydown");
    board.removeObject(textJXG.current);
    textJXG.current = null;
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
    if (textJXG.current === null) {
      createTextJXG();
    } else {
      textJXG.current.relativeCoords.setCoordinates(JXG.COORDS_BY_USER, [0, 0]);
      anchorPointJXG.current.coords.setCoordinates(
        JXG.COORDS_BY_USER,
        anchorCoords
      );
      textJXG.current.setText(SVs.text);
      let visible = !SVs.hidden;
      if (Number.isFinite(anchorCoords[0]) && Number.isFinite(anchorCoords[1])) {
        let actuallyChangedVisibility = textJXG.current.visProp["visible"] !== visible;
        textJXG.current.visProp["visible"] = visible;
        textJXG.current.visPropCalc["visible"] = visible;
        if (actuallyChangedVisibility) {
          textJXG.current.setAttribute({ visible });
        }
      } else {
        textJXG.current.visProp["visible"] = false;
        textJXG.current.visPropCalc["visible"] = false;
      }
      let layer = 10 * SVs.layer + TEXT_LAYER_OFFSET;
      let layerChanged = textJXG.current.visProp.layer !== layer;
      if (layerChanged) {
        textJXG.current.setAttribute({ layer });
      }
      let textColor = darkMode === "dark" ? SVs.selectedStyle.textColorDarkMode : SVs.selectedStyle.textColor;
      let backgroundColor = darkMode === "dark" ? SVs.selectedStyle.backgroundColorDarkMode : SVs.selectedStyle.backgroundColor;
      let cssStyle = ``;
      if (backgroundColor) {
        cssStyle += `background-color: ${backgroundColor}`;
      } else {
        cssStyle += `background-color: transparent`;
      }
      if (textJXG.current.visProp.strokecolor !== textColor) {
        textJXG.current.visProp.strokecolor = textColor;
        textJXG.current.visProp.highlightstrokecolor = textColor;
      }
      if (textJXG.current.visProp.cssstyle !== cssStyle) {
        textJXG.current.visProp.cssstyle = cssStyle;
        textJXG.current.visProp.highlightcssstyle = cssStyle;
      }
      textJXG.current.visProp.highlight = !fixLocation.current;
      textJXG.current.visProp.fixed = fixed.current;
      textJXG.current.isDraggable = !fixLocation.current;
      textJXG.current.needsUpdate = true;
      if (SVs.positionFromAnchor !== previousPositionFromAnchor.current) {
        let { anchorx, anchory } = getPositionFromAnchorByCoordinate(
          SVs.positionFromAnchor
        );
        textJXG.current.visProp.anchorx = anchorx;
        textJXG.current.visProp.anchory = anchory;
        anchorRel.current = [anchorx, anchory];
        previousPositionFromAnchor.current = SVs.positionFromAnchor;
        textJXG.current.fullUpdate();
      } else {
        textJXG.current.update();
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
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("a", { name: id }),
    /* @__PURE__ */ jsx("span", { id, style, children: SVs.text })
  ] });
});
export {
  text as default
};
