import { R as React, bx as useDoenetRenderer, r as reactExports, j as jsx, c as FontAwesomeIcon, bA as faLevelDownAlt, ar as faCheck, bb as faTimes, bB as faCloud, b as jsxs, F as Fragment, s as styled } from "./PageViewer-d914b069.js";
import { A as ActionButton } from "./ActionButton-1e9c5f7a.js";
import { A as ActionButtonGroup } from "./ActionButtonGroup-f7bafe40.js";
/* empty css                    */const Matrix = styled.div`
  position: relative;
  margin: 6px;
  display: inline-block;
  vertical-align: middle;
  width: auto;

  :before {
    content: "";
    position: absolute;
    left: -6px;
    top: -6px;
    border: var(--mainBorder);
    border-right: 0px;
    width: 6px;
    height: 100%;
    padding-top: 6px;
    padding-bottom: 3px;
  }

  :after {
    content: "";
    position: absolute;
    right: -6px;
    top: -6px;
    border: var(--mainBorder);
    border-left: 0px;
    width: 6px;
    height: 100%;
    padding-top: 6px;
    padding-bottom: 3px;
  }
`;
const Button = styled.button`
  position: relative;
  width: 24px;
  height: 24px;
  display: inline-block;
  color: white;
  background-color: var(--mainBlue);
  /* border: var(--mainBorder); */
  padding: 2px;
  border: none;
  border-radius: var(--mainBorderRadius);
  margin: 0px 4px 4px 0px;

  &:hover {
    background-color: var(--lightBlue);
    color: black;
  }
`;
const matrixInput = React.memo(function MatrixInput(props) {
  let { name, id, SVs, actions, children, callAction } = useDoenetRenderer(props);
  let validationState = reactExports.useRef(null);
  function updateValidationState() {
    validationState.current = "unvalidated";
    if (SVs.valueHasBeenValidated || SVs.numAttemptsLeft < 1) {
      if (SVs.creditAchieved === 1) {
        validationState.current = "correct";
      } else if (SVs.creditAchieved === 0) {
        validationState.current = "incorrect";
      } else {
        validationState.current = "partialcorrect";
      }
    }
  }
  if (SVs.hidden) {
    return null;
  }
  updateValidationState();
  let disabled = SVs.disabled;
  getComputedStyle(
    document.documentElement
  ).getPropertyValue("--mainGray");
  let checkWorkStyle = {
    cursor: "pointer",
    padding: "1px 6px 1px 6px"
  };
  let checkWorkButton = null;
  if (SVs.includeCheckWork && !SVs.suppressCheckwork) {
    if (validationState.current === "unvalidated") {
      if (disabled) {
        checkWorkStyle.backgroundColor = getComputedStyle(
          document.documentElement
        ).getPropertyValue("--mainGray");
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
          children: /* @__PURE__ */ jsx(FontAwesomeIcon, { icon: faLevelDownAlt, transform: { rotate: 90 } })
        }
      );
    } else {
      if (SVs.showCorrectness) {
        if (validationState.current === "correct") {
          checkWorkStyle.backgroundColor = getComputedStyle(
            document.documentElement
          ).getPropertyValue("--mainGreen");
          checkWorkButton = /* @__PURE__ */ jsx(Button, { id: id + "_correct", style: checkWorkStyle, children: /* @__PURE__ */ jsx(FontAwesomeIcon, { icon: faCheck }) });
        } else if (validationState.current === "partialcorrect") {
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
    } else if (SVs.numAttemptsLeft < Infinity) {
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
  let matrixInputs = [];
  for (let rowInd = 0; rowInd < SVs.numRows; rowInd++) {
    let mathinputRow = [];
    for (let colInd = 0; colInd < SVs.numColumns; colInd++) {
      mathinputRow.push(
        /* @__PURE__ */ jsx(
          "td",
          {
            className: "matrixCell",
            id: id + "_component_" + rowInd + "_" + colInd,
            children: children[rowInd * SVs.numColumns + colInd]
          },
          colInd
        )
      );
    }
    matrixInputs.push(/* @__PURE__ */ jsx("tr", { children: mathinputRow }, rowInd));
  }
  let rowNumControls = null;
  if (SVs.showSizeControls) {
    rowNumControls = /* @__PURE__ */ jsx("span", { style: { margin: "0px 4px 4px 0px" }, children: /* @__PURE__ */ jsxs(ActionButtonGroup, { children: [
      /* @__PURE__ */ jsx(
        ActionButton,
        {
          id: id + "_rowDecrement",
          value: "r-",
          onClick: () => callAction({
            action: actions.updateNumRows,
            args: { numRows: SVs.numRows - 1 }
          }),
          disabled: SVs.numRows < 2,
          children: "r-"
        }
      ),
      /* @__PURE__ */ jsx(
        ActionButton,
        {
          id: id + "_rowIncrement",
          value: "r+",
          onClick: () => callAction({
            action: actions.updateNumRows,
            args: { numRows: SVs.numRows + 1 }
          }),
          children: "r+"
        }
      )
    ] }) });
  }
  let colNumControls = null;
  if (SVs.showSizeControls) {
    colNumControls = /* @__PURE__ */ jsx("span", { style: { margin: "0px 4px 4px 0px" }, children: /* @__PURE__ */ jsxs(ActionButtonGroup, { children: [
      /* @__PURE__ */ jsx(
        ActionButton,
        {
          id: id + "_columnDecrement",
          value: "c-",
          onClick: () => callAction({
            action: actions.updateNumColumns,
            args: { numColumns: SVs.numColumns - 1 }
          }),
          disabled: SVs.numColumns < 2,
          children: "c-"
        }
      ),
      /* @__PURE__ */ jsx(
        ActionButton,
        {
          id: id + "_columnIncrement",
          value: "c+",
          onClick: () => callAction({
            action: actions.updateNumColumns,
            args: { numColumns: SVs.numColumns + 1 }
          }),
          children: "c+"
        }
      )
    ] }) });
  }
  return /* @__PURE__ */ jsxs(React.Fragment, { children: [
    /* @__PURE__ */ jsx("a", { name: id }),
    /* @__PURE__ */ jsxs("div", { style: { display: "inline-flex", margin: "0px 4px 4px 4px" }, children: [
      /* @__PURE__ */ jsx(Matrix, { className: "matrixInputSurroundingBox", id, children: /* @__PURE__ */ jsx("table", { children: /* @__PURE__ */ jsx("tbody", { children: matrixInputs }) }) }),
      /* @__PURE__ */ jsx("div", { style: { marginRight: "4px" } }),
      rowNumControls,
      colNumControls,
      checkWorkButton
    ] })
  ] });
});
export {
  matrixInput as default
};
