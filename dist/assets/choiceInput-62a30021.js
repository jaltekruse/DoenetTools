import { R as React, bx as useDoenetRenderer, r as reactExports, o as Recoil_index_24, bC as rendererState, j as jsx, c as FontAwesomeIcon, bA as faLevelDownAlt, ar as faCheck, bb as faTimes, bB as faCloud, b as jsxs, F as Fragment, s as styled, v as betterReactMathjax } from "./PageViewer-d914b069.js";
const choiceInput$1 = "";
const Button = styled.button`
  position: relative;
  /* width: 24px; */
  height: 24px;
  color: #ffffff;
  background-color: var(--mainBlue);
  display: inline-block;
  text-align: center;
  padding: 2px;
  z-index: 0;
  /* border: var(--mainBorder); */
  border: none;
  border-radius: var(--mainBorderRadius);
  margin: 0px 4px 4px 0px;

  &:hover {
    background-color: var(--lightBlue);
    color: black;
  }
`;
const choiceInput = React.memo(function ChoiceInput(props) {
  let {
    name,
    id,
    SVs,
    actions,
    children,
    sourceOfUpdate,
    ignoreUpdate,
    rendererName,
    callAction
  } = useDoenetRenderer(props);
  ChoiceInput.baseStateVariable = "selectedIndices";
  const [rendererSelectedIndices, setRendererSelectedIndices] = reactExports.useState(
    SVs.selectedIndices
  );
  const setRendererState = Recoil_index_24(rendererState(rendererName));
  let selectedIndicesWhenSetState = reactExports.useRef(null);
  if (!ignoreUpdate && selectedIndicesWhenSetState.current !== SVs.selectedIndices) {
    setRendererSelectedIndices(SVs.selectedIndices);
    selectedIndicesWhenSetState.current = SVs.selectedIndices;
  } else {
    selectedIndicesWhenSetState.current = null;
  }
  let validationState = "unvalidated";
  if (SVs.valueHasBeenValidated || SVs.numAttemptsLeft < 1) {
    if (SVs.creditAchieved === 1) {
      validationState = "correct";
    } else if (SVs.creditAchieved === 0) {
      validationState = "incorrect";
    } else {
      validationState = "partialcorrect";
    }
  }
  function onChangeHandler(e) {
    let newSelectedIndices = [];
    if (SVs.inline) {
      if (e.target.value) {
        newSelectedIndices = Array.from(
          e.target.selectedOptions,
          (option) => Number(option.value)
        );
      }
    } else {
      if (SVs.selectMultiple) {
        newSelectedIndices = [...rendererSelectedIndices];
        let index = Number(e.target.value);
        if (e.target.checked) {
          if (!newSelectedIndices.includes(index)) {
            newSelectedIndices.push(index);
            newSelectedIndices.sort((a, b) => a - b);
          }
        } else {
          let i = newSelectedIndices.indexOf(index);
          if (i !== -1) {
            newSelectedIndices.splice(i, 1);
          }
        }
      } else {
        newSelectedIndices = [Number(e.target.value)];
      }
    }
    if (rendererSelectedIndices.length !== newSelectedIndices.length || rendererSelectedIndices.some((v, i) => v != newSelectedIndices[i])) {
      setRendererSelectedIndices(newSelectedIndices);
      selectedIndicesWhenSetState.current = SVs.selectedIndices;
      setRendererState((was) => {
        let newObj = { ...was };
        newObj.ignoreUpdate = true;
        return newObj;
      });
      callAction({
        action: actions.updateSelectedIndices,
        args: {
          selectedIndices: newSelectedIndices
        },
        baseVariableValue: newSelectedIndices
      });
    }
  }
  if (SVs.hidden) {
    return null;
  }
  let disabled = SVs.disabled;
  let label = SVs.label;
  if (SVs.labelHasLatex) {
    label = /* @__PURE__ */ jsx(betterReactMathjax.MathJax, { hideUntilTypeset: "first", inline: true, dynamic: true, children: label });
  }
  if (SVs.inline) {
    let checkWorkStyle = {
      cursor: "pointer",
      padding: "1px 6px 1px 6px",
      width: "24px"
    };
    let checkWorkButton = null;
    if (SVs.includeCheckWork && !SVs.suppressCheckwork) {
      if (validationState === "unvalidated") {
        if (disabled) {
          checkWorkStyle.backgroundColor = getComputedStyle(
            document.documentElement
          ).getPropertyValue("--mainGray");
        }
        checkWorkButton = /* @__PURE__ */ jsx(
          Button,
          {
            id: id + "_submit",
            disabled,
            tabIndex: "0",
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
    let svData = SVs;
    let optionsList = SVs.choiceTexts.map(function(s, i) {
      if (svData.choicesHidden[i]) {
        return null;
      }
      return /* @__PURE__ */ jsx("option", { value: i + 1, disabled: svData.choicesDisabled[i], children: s }, i + 1);
    });
    let value = rendererSelectedIndices;
    if (value === void 0) {
      value = "";
    } else if (!SVs.selectMultiple) {
      value = value[0];
      if (value === void 0) {
        value = "";
      }
    }
    return /* @__PURE__ */ jsxs(React.Fragment, { children: [
      /* @__PURE__ */ jsx("a", { name: id }),
      /* @__PURE__ */ jsxs(
        "label",
        {
          style: { display: "inline-flex", maxWidth: "100%" },
          id: id + "-label",
          children: [
            label,
            /* @__PURE__ */ jsxs(
              "select",
              {
                className: "custom-select",
                id,
                onChange: onChangeHandler,
                value,
                disabled,
                multiple: SVs.selectMultiple,
                children: [
                  /* @__PURE__ */ jsx("option", { hidden: true, value: "", children: SVs.placeHolder }),
                  optionsList
                ]
              }
            )
          ]
        }
      ),
      checkWorkButton
    ] });
  } else {
    let checkWorkStyle = {
      height: "24px",
      display: "inline-block",
      padding: "1px 6px 1px 6px",
      cursor: "pointer"
      // fontWeight: "bold",
    };
    let checkworkComponent = null;
    if (SVs.includeCheckWork && !SVs.suppressCheckwork) {
      if (validationState === "unvalidated") {
        let checkWorkText = SVs.submitLabel;
        if (!SVs.showCorrectness) {
          checkWorkText = SVs.submitLabelNoCorrectness;
        }
        if (disabled) {
          checkWorkStyle.backgroundColor = getComputedStyle(
            document.documentElement
          ).getPropertyValue("--mainGray");
        }
        checkworkComponent = /* @__PURE__ */ jsxs(
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
            children: [
              /* @__PURE__ */ jsx(
                FontAwesomeIcon,
                {
                  style: {
                    /*marginRight: "4px", paddingLeft: "2px"*/
                  },
                  icon: faLevelDownAlt,
                  transform: { rotate: 90 }
                }
              ),
              " ",
              checkWorkText
            ]
          }
        );
      } else {
        if (SVs.showCorrectness) {
          if (validationState === "correct") {
            checkWorkStyle.backgroundColor = getComputedStyle(
              document.documentElement
            ).getPropertyValue("--mainGreen");
            checkworkComponent = /* @__PURE__ */ jsxs(Button, { id: id + "_correct", style: checkWorkStyle, children: [
              /* @__PURE__ */ jsx(FontAwesomeIcon, { icon: faCheck }),
              "  Correct"
            ] });
          } else if (validationState === "incorrect") {
            checkWorkStyle.backgroundColor = getComputedStyle(
              document.documentElement
            ).getPropertyValue("--mainRed");
            checkworkComponent = /* @__PURE__ */ jsxs(Button, { id: id + "_incorrect", style: checkWorkStyle, children: [
              /* @__PURE__ */ jsx(FontAwesomeIcon, { icon: faTimes }),
              "  Incorrect"
            ] });
          } else if (validationState === "partialcorrect") {
            checkWorkStyle.backgroundColor = "#efab34";
            let percent = Math.round(SVs.creditAchieved * 100);
            let partialCreditContents = `${percent}% Correct`;
            checkworkComponent = /* @__PURE__ */ jsx(Button, { id: id + "_partial", style: checkWorkStyle, children: partialCreditContents });
          }
        } else {
          checkWorkStyle.backgroundColor = "rgb(74, 3, 217)";
          checkworkComponent = /* @__PURE__ */ jsxs(Button, { id: id + "_saved", style: checkWorkStyle, children: [
            /* @__PURE__ */ jsx(FontAwesomeIcon, { icon: faCloud }),
            "  Response Saved"
          ] });
        }
      }
    }
    if (SVs.numAttemptsLeft < 0) {
      checkworkComponent = /* @__PURE__ */ jsxs(Fragment, { children: [
        checkworkComponent,
        /* @__PURE__ */ jsx("span", { children: "(no attempts remaining)" })
      ] });
    } else if (SVs.numAttemptsLeft == 1) {
      checkworkComponent = /* @__PURE__ */ jsxs(Fragment, { children: [
        checkworkComponent,
        /* @__PURE__ */ jsx("span", { children: "(1 attempt remaining)" })
      ] });
    } else if (Number.isFinite(SVs.numAttemptsLeft)) {
      checkworkComponent = /* @__PURE__ */ jsxs(Fragment, { children: [
        checkworkComponent,
        /* @__PURE__ */ jsxs("span", { children: [
          "(",
          SVs.numAttemptsLeft,
          " attempts remaining)"
        ] })
      ] });
    }
    let inputKey = id;
    let listStyle = {
      listStyleType: "none"
    };
    let keyBeginning = inputKey + "_choice";
    let inputType = "radio";
    if (SVs.selectMultiple) {
      inputType = "checkbox";
    }
    let svData = SVs;
    let choiceDoenetTags = SVs.choiceOrder.map((v) => children[v - 1]).map(function(child, i) {
      if (svData.choicesHidden[i]) {
        return null;
      }
      if (inputType == "radio") {
        let radioDisabled = disabled || svData.choicesDisabled[i];
        let containerClassName = "radio-container";
        let radioClassName = "radio-checkmark";
        if (radioDisabled) {
          containerClassName += " radio-container-disabled";
          radioClassName += " radio-checkmark-disabled";
        }
        return /* @__PURE__ */ jsxs(
          "label",
          {
            className: containerClassName,
            children: [
              /* @__PURE__ */ jsx(
                "input",
                {
                  type: "radio",
                  id: keyBeginning + (i + 1) + "_input",
                  name: inputKey,
                  value: i + 1,
                  checked: rendererSelectedIndices.includes(i + 1),
                  onChange: onChangeHandler,
                  disabled: radioDisabled
                }
              ),
              /* @__PURE__ */ jsx("span", { className: radioClassName }),
              /* @__PURE__ */ jsx(
                "label",
                {
                  htmlFor: keyBeginning + (i + 1) + "_input",
                  style: { marginLeft: "2px" },
                  children: child
                }
              )
            ]
          },
          inputKey + "_choice" + (i + 1)
        );
      } else if (inputType == "checkbox") {
        let checkboxDisabled = disabled || svData.choicesDisabled[i];
        let containerClassName = "checkbox-container";
        let checkboxClassName = "checkbox-checkmark";
        if (checkboxDisabled) {
          containerClassName += " checkbox-container-disabled";
          checkboxClassName += " checkbox-checkmark-disabled";
        }
        return /* @__PURE__ */ jsxs(
          "label",
          {
            className: containerClassName,
            children: [
              /* @__PURE__ */ jsx(
                "input",
                {
                  type: "checkbox",
                  id: keyBeginning + (i + 1) + "_input",
                  name: inputKey,
                  value: i + 1,
                  checked: rendererSelectedIndices.includes(i + 1),
                  onChange: onChangeHandler,
                  disabled: disabled || svData.choicesDisabled[i]
                }
              ),
              /* @__PURE__ */ jsx("span", { className: checkboxClassName }),
              /* @__PURE__ */ jsx(
                "label",
                {
                  htmlFor: keyBeginning + (i + 1) + "_input",
                  style: { marginLeft: "2px" },
                  children: child
                }
              )
            ]
          },
          inputKey + "_choice" + (i + 1)
        );
      }
    });
    return /* @__PURE__ */ jsxs("div", { id: inputKey + "-label", children: [
      label,
      /* @__PURE__ */ jsxs("ol", { id: inputKey, style: listStyle, children: [
        /* @__PURE__ */ jsx("a", { name: id }),
        choiceDoenetTags
      ] }),
      checkworkComponent
    ] });
  }
});
export {
  choiceInput as default
};
