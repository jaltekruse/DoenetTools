import { R as React, bx as useDoenetRenderer, r as reactExports, o as Recoil_index_24, bC as rendererState, by as Context, bD as getPositionFromAnchorByCoordinate, j as jsx, c as FontAwesomeIcon, bA as faLevelDownAlt, ar as faCheck, bb as faTimes, bB as faCloud, b as jsxs, F as Fragment, s as styled, v as betterReactMathjax } from "./PageViewer-d914b069.js";
import { T as ToggleButton } from "./ToggleButton-8895d2cd.js";
import { BoardContext } from "./graph-8a8db909.js";
import "./css-5483d03f.js";
import "./visibility-sensor-57589aaf.js";
const booleanInput$1 = "";
const Button = styled.button`
  position: relative;
  width: 24px;
  height: 24px;
  color: #ffffff;
  background-color: var(--mainBlue);
  display: inline-block;
  /* text-align: center; */
  padding: 2px;
  /* z-index: 0; */
  /* border: var(--mainBorder); */
  border: none;
  border-radius: var(--mainBorderRadius);
  margin: 0px 4px 4px 0px;

  &:hover {
    background-color: var(--lightBlue);
    color: black;
  }
`;
const booleanInput = React.memo(function BooleanInput(props) {
  let { name, id, SVs, actions, ignoreUpdate, rendererName, callAction } = useDoenetRenderer(props);
  BooleanInput.baseStateVariable = "value";
  BooleanInput.ignoreActionsWithoutCore = (actionName) => actionName === "moveInput";
  const [rendererValue, setRendererValue] = reactExports.useState(SVs.value);
  let rendererValueRef = reactExports.useRef(null);
  rendererValueRef.current = rendererValue;
  const setRendererState = Recoil_index_24(rendererState(rendererName));
  let valueWhenSetState = reactExports.useRef(null);
  let inputJXG = reactExports.useRef(null);
  let anchorPointJXG = reactExports.useRef(null);
  let anchorRel = reactExports.useRef(null);
  const board = reactExports.useContext(BoardContext);
  let pointerAtDown = reactExports.useRef(false);
  let pointAtDown = reactExports.useRef(false);
  let dragged = reactExports.useRef(false);
  let calculatedX = reactExports.useRef(null);
  let calculatedY = reactExports.useRef(null);
  let lastPositionFromCore = reactExports.useRef(null);
  let previousPositionFromAnchor = reactExports.useRef(null);
  let fixed = reactExports.useRef(false);
  let fixLocation = reactExports.useRef(false);
  fixed.current = SVs.fixed;
  fixLocation.current = !SVs.draggable || SVs.fixLocation || SVs.fixed;
  reactExports.useEffect(() => {
    return () => {
      if (inputJXG.current !== null) {
        deleteInputJXG();
      }
    };
  }, []);
  if (!ignoreUpdate && valueWhenSetState.current !== SVs.value) {
    setRendererValue(SVs.value);
    valueWhenSetState.current = SVs.value;
  } else {
    valueWhenSetState.current = null;
  }
  function onChangeHandler(e) {
    let newValue = !rendererValueRef.current;
    setRendererValue(newValue);
    valueWhenSetState.current = SVs.value;
    setRendererState((was) => {
      let newObj = { ...was };
      newObj.ignoreUpdate = true;
      return newObj;
    });
    callAction({
      action: actions.updateBoolean,
      args: {
        boolean: newValue
      },
      baseVariableValue: newValue
    });
  }
  function createInputJXG() {
    let jsxInputAttributes = {
      visible: !SVs.hidden,
      fixed: fixed.current,
      disabled: SVs.disabled,
      checked: rendererValue,
      useMathJax: SVs.labelHasLatex,
      strokeColor: "var(--canvastext)",
      highlightStrokeColor: "var(--canvastext)",
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
        jsxInputAttributes["visible"] = false;
      }
      if (!Number.isFinite(anchorCoords[1])) {
        anchorCoords[1] = 0;
        jsxInputAttributes["visible"] = false;
      }
      newAnchorPointJXG = board.create("point", anchorCoords, {
        visible: false
      });
    } catch (e) {
      jsxInputAttributes["visible"] = false;
      newAnchorPointJXG = board.create("point", [0, 0], { visible: false });
      return;
    }
    jsxInputAttributes.anchor = newAnchorPointJXG;
    let { anchorx, anchory } = getPositionFromAnchorByCoordinate(
      SVs.positionFromAnchor
    );
    jsxInputAttributes.anchorx = anchorx;
    jsxInputAttributes.anchory = anchory;
    anchorRel.current = [anchorx, anchory];
    let newInputJXG = board.create(
      "checkbox",
      [0, 0, SVs.label],
      jsxInputAttributes
    );
    newInputJXG.rendNodeCheckbox.addEventListener("change", onChangeHandler);
    newInputJXG.isDraggable = !fixLocation.current;
    newInputJXG.on("down", function(e) {
      pointerAtDown.current = [e.x, e.y];
      pointAtDown.current = [...newAnchorPointJXG.coords.scrCoords];
      dragged.current = false;
    });
    newInputJXG.on("hit", function(e) {
      dragged.current = false;
    });
    newInputJXG.on("up", function(e) {
      if (dragged.current) {
        callAction({
          action: actions.moveInput,
          args: {
            x: calculatedX.current,
            y: calculatedY.current
          }
        });
        dragged.current = false;
      }
    });
    newInputJXG.on("keyfocusout", function(e) {
      if (dragged.current) {
        callAction({
          action: actions.moveInput,
          args: {
            x: calculatedX.current,
            y: calculatedY.current
          }
        });
        dragged.current = false;
      }
    });
    newInputJXG.on("drag", function(e) {
      let viaPointer = e.type === "pointermove";
      if (!viaPointer || Math.abs(e.x - pointerAtDown.current[0]) > 0.1 || Math.abs(e.y - pointerAtDown.current[1]) > 0.1) {
        dragged.current = true;
      }
      let [xmin, ymax, xmax, ymin] = board.getBoundingBox();
      let width = newInputJXG.size[0] / board.unitX;
      let height = newInputJXG.size[1] / board.unitY;
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
        calculatedX.current = newAnchorPointJXG.X() + newInputJXG.relativeCoords.usrCoords[1];
        calculatedY.current = newAnchorPointJXG.Y() + newInputJXG.relativeCoords.usrCoords[2];
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
        action: actions.moveInput,
        args: {
          x: calculatedX.current,
          y: calculatedY.current,
          transient: true,
          skippable: true
        }
      });
      newInputJXG.relativeCoords.setCoordinates(JXG.COORDS_BY_USER, [0, 0]);
      newAnchorPointJXG.coords.setCoordinates(
        JXG.COORDS_BY_USER,
        lastPositionFromCore.current
      );
    });
    newInputJXG.on("keydown", function(e) {
      if (e.key === "Enter") {
        if (dragged.current) {
          callAction({
            action: actions.moveInput,
            args: {
              x: calculatedX.current,
              y: calculatedY.current
            }
          });
          dragged.current = false;
        }
      }
    });
    inputJXG.current = newInputJXG;
    anchorPointJXG.current = newAnchorPointJXG;
    previousPositionFromAnchor.current = SVs.positionFromAnchor;
    if (SVs.labelHasLatex) {
      setTimeout(() => {
        if (inputJXG.current) {
          inputJXG.current.needsUpdate = true;
          inputJXG.current.setText(SVs.label);
          inputJXG.current.update();
          board == null ? void 0 : board.updateRenderer();
        }
      }, 1e3);
    }
  }
  function deleteInputJXG() {
    inputJXG.current.rendNodeCheckbox.removeEventListener(
      "change",
      onChangeHandler
    );
    inputJXG.current.off("drag");
    inputJXG.current.off("down");
    inputJXG.current.off("hit");
    inputJXG.current.off("up");
    inputJXG.current.off("keyfocusout");
    inputJXG.current.off("keydown");
    board.removeObject(inputJXG.current);
    inputJXG.current = null;
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
    if (inputJXG.current === null) {
      createInputJXG();
    } else {
      if (inputJXG.current.Value() !== rendererValue) {
        inputJXG.current.setAttribute({ checked: rendererValue });
      }
      inputJXG.current.relativeCoords.setCoordinates(
        JXG.COORDS_BY_USER,
        [0, 0]
      );
      anchorPointJXG.current.coords.setCoordinates(
        JXG.COORDS_BY_USER,
        anchorCoords
      );
      inputJXG.current.setText(SVs.label);
      let visible = !SVs.hidden;
      if (Number.isFinite(anchorCoords[0]) && Number.isFinite(anchorCoords[1])) {
        let actuallyChangedVisibility = inputJXG.current.visProp["visible"] !== visible;
        inputJXG.current.visProp["visible"] = visible;
        inputJXG.current.visPropCalc["visible"] = visible;
        if (actuallyChangedVisibility) {
          inputJXG.current.setAttribute({ visible });
        }
      } else {
        inputJXG.current.visProp["visible"] = false;
        inputJXG.current.visPropCalc["visible"] = false;
      }
      if (inputJXG.current.visProp.disabled !== SVs.disabled) {
        inputJXG.current.visProp.disabled = SVs.disabled;
        inputJXG.current.setAttribute({ disabled: SVs.disabled });
      }
      inputJXG.current.visProp.highlight = !fixLocation.current;
      inputJXG.current.visProp.fixed = fixed.current;
      inputJXG.current.isDraggable = !fixLocation.current;
      inputJXG.current.needsUpdate = true;
      if (SVs.positionFromAnchor !== previousPositionFromAnchor.current) {
        let { anchorx, anchory } = getPositionFromAnchorByCoordinate(
          SVs.positionFromAnchor
        );
        inputJXG.current.visProp.anchorx = anchorx;
        inputJXG.current.visProp.anchory = anchory;
        anchorRel.current = [anchorx, anchory];
        previousPositionFromAnchor.current = SVs.positionFromAnchor;
        inputJXG.current.fullUpdate();
      } else {
        inputJXG.current.update();
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
  let disabled = SVs.disabled;
  const inputKey = id + "_input";
  let checkWorkStyle = {
    cursor: "pointer",
    padding: "1px 6px 1px 6px"
  };
  let checkWorkButton = null;
  props.icon;
  if (SVs.includeCheckWork && !SVs.suppressCheckwork) {
    let validationState = "unvalidated";
    if (SVs.valueHasBeenValidated) {
      if (SVs.creditAchieved === 1) {
        validationState = "correct";
      } else if (SVs.creditAchieved === 0) {
        validationState = "incorrect";
      } else {
        validationState = "partialcorrect";
      }
    }
    if (validationState === "unvalidated") {
      if (disabled) {
        checkWorkStyle.backgroundColor = getComputedStyle(
          document.documentElement
        ).getPropertyValue("--mainGray");
        checkWorkStyle.cursor = "not-allowed";
      }
      checkWorkButton = /* @__PURE__ */ jsx(
        Button,
        {
          id: id + "_submit",
          tabIndex: "0",
          disabled,
          style: checkWorkStyle,
          onClick: () => callAction({
            action: actions.submitAnswer
          }),
          onKeyPress: (e) => {
            if (e.key === "Enter") {
              callAction({
                action: actions.submitAnswer
              });
            }
          },
          children: /* @__PURE__ */ jsx(
            FontAwesomeIcon,
            {
              style: {
                /*marginRight: "4px", paddingLeft: "2px"*/
              },
              icon: faLevelDownAlt,
              transform: { rotate: 90 }
            }
          )
        }
      );
    } else {
      if (SVs.showCorrectness) {
        if (validationState === "correct") {
          checkWorkStyle.backgroundColor = getComputedStyle(
            document.documentElement
          ).getPropertyValue("--mainGreen");
          checkWorkButton = /* @__PURE__ */ jsx(Button, { id: id + "_correct", style: checkWorkStyle, children: /* @__PURE__ */ jsx(FontAwesomeIcon, { icon: faCheck }) });
        } else if (validationState === "partialcorrect") {
          let percent = Math.round(SVs.creditAchieved * 100);
          let partialCreditContents = `${percent} %`;
          checkWorkStyle.width = "44px";
          checkWorkStyle.backgroundColor = "#efab34";
          checkWorkButton = /* @__PURE__ */ jsx(Button, { id: id + "_partial", style: checkWorkStyle, children: partialCreditContents });
        } else {
          checkWorkStyle.backgroundColor = getComputedStyle(
            document.documentElement
          ).getPropertyValue("--mainRed");
          checkWorkButton = /* @__PURE__ */ jsx(Button, { id: id + "_incorrect", style: checkWorkStyle, children: /* @__PURE__ */ jsx(FontAwesomeIcon, { icon: faTimes }) });
        }
      } else {
        checkWorkStyle.backgroundColor = "rgb(74, 3, 217)";
        checkWorkStyle.padding = "1px 8px 1px 4px";
        checkWorkButton = /* @__PURE__ */ jsx(Button, { id: id + "_saved", style: checkWorkStyle, children: /* @__PURE__ */ jsx(FontAwesomeIcon, { icon: faCloud }) });
      }
    }
    if (SVs.numAttemptsLeft < 0) {
      checkWorkButton = /* @__PURE__ */ jsxs(Fragment, { children: [
        checkWorkButton,
        /* @__PURE__ */ jsx("span", { children: "(no attempts remaining)" })
      ] });
    } else if (SVs.numAttemptsLeft == 1) {
      checkWorkButton = /* @__PURE__ */ jsxs(Fragment, { children: [
        checkWorkButton,
        /* @__PURE__ */ jsx("span", { children: "(1 attempt remaining)" })
      ] });
    } else if (Number.isFinite(SVs.numAttemptsLeft)) {
      checkWorkButton = /* @__PURE__ */ jsxs(Fragment, { children: [
        checkWorkButton,
        /* @__PURE__ */ jsxs("span", { children: [
          "(",
          SVs.numAttemptsLeft,
          " attempts remaining)"
        ] })
      ] });
    }
  }
  let input;
  let label = SVs.label;
  if (SVs.labelHasLatex) {
    label = /* @__PURE__ */ jsx(betterReactMathjax.MathJax, { hideUntilTypeset: "first", inline: true, dynamic: true, children: label });
  }
  if (SVs.asToggleButton) {
    input = /* @__PURE__ */ jsx(
      ToggleButton,
      {
        id: inputKey,
        isSelected: rendererValue,
        onClick: onChangeHandler,
        value: label,
        disabled
      },
      inputKey
    );
  } else {
    let containerClass = "container";
    let checkmarkClass = "checkmark";
    if (disabled) {
      containerClass += " container-disabled";
      checkmarkClass += " checkmark-disabled";
    }
    input = /* @__PURE__ */ jsxs("label", { className: containerClass, children: [
      /* @__PURE__ */ jsx(
        "input",
        {
          type: "checkbox",
          id: inputKey,
          checked: rendererValue,
          onChange: onChangeHandler,
          disabled
        },
        inputKey
      ),
      /* @__PURE__ */ jsx("span", { className: checkmarkClass }),
      label != "" ? /* @__PURE__ */ jsx("span", { style: { marginLeft: "2px" }, children: label }) : /* @__PURE__ */ jsx("span", { children: label })
    ] });
  }
  return /* @__PURE__ */ jsxs(React.Fragment, { children: [
    /* @__PURE__ */ jsxs("span", { id, children: [
      /* @__PURE__ */ jsx("a", { name: id }),
      input
    ] }),
    checkWorkButton
  ] });
});
export {
  booleanInput as default
};
