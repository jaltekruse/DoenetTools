import { R as React, bx as useDoenetRenderer, b as jsxs, j as jsx, c as FontAwesomeIcon, bA as faLevelDownAlt, ar as faCheck, bb as faTimes, bB as faCloud, F as Fragment, s as styled } from "./PageViewer-d914b069.js";
const Button = styled.button`
  position: relative;
  height: 24px;
  display: inline-block;
  color: white;
  background-color: var(--mainBlue);
  padding: 2px;
  /* border: var(--mainBorder); */
  border: none;
  border-radius: var(--mainBorderRadius);
  margin: 0px 4px 4px 0px;

  &:hover {
    background-color: var(--lightBlue);
    color: black;
  }
`;
const answer = React.memo(function Answer(props) {
  let { name, id, SVs, actions, children, callAction } = useDoenetRenderer(props);
  if (SVs.hidden) {
    return null;
  }
  let disabled = SVs.disabled;
  let submitAnswer = () => callAction({
    action: actions.submitAnswer
  });
  if (SVs.submitAllAnswersAtAncestor) {
    submitAnswer = () => callAction({
      action: actions.submitAllAnswers
    });
  }
  let inputChildrenToRender = null;
  if (SVs.inputChildren.length > 0) {
    let inputChildNames = SVs.inputChildren.map((x) => x.componentName);
    inputChildrenToRender = children.filter(
      //child might be null or a string
      (child) => child && typeof child !== "string" && inputChildNames.includes(
        child.props.componentInstructions.componentName
      )
    );
  }
  if (!SVs.delegateCheckWork && !SVs.suppressCheckwork) {
    let validationState = "unvalidated";
    if (SVs.justSubmitted || SVs.numAttemptsLeft < 1) {
      if (SVs.creditAchieved === 1) {
        validationState = "correct";
      } else if (SVs.creditAchieved === 0) {
        validationState = "incorrect";
      } else {
        validationState = "partialcorrect";
      }
    }
    let checkWorkStyle = {
      cursor: "pointer",
      padding: "1px 6px 1px 6px"
    };
    if (disabled) {
      checkWorkStyle.backgroundColor = getComputedStyle(
        document.documentElement
      ).getPropertyValue("--mainGray");
    }
    let checkWorkText = SVs.submitLabel;
    if (!SVs.showCorrectness) {
      checkWorkText = SVs.submitLabelNoCorrectness;
    }
    let checkworkComponent = /* @__PURE__ */ jsxs(
      Button,
      {
        id: id + "_submit",
        tabIndex: "0",
        disabled,
        style: checkWorkStyle,
        onClick: submitAnswer,
        onKeyPress: (e) => {
          if (e.key === "Enter") {
            submitAnswer();
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
      if (validationState !== "unvalidated") {
        checkWorkStyle.backgroundColor = "rgb(74, 3, 217)";
        checkworkComponent = /* @__PURE__ */ jsxs(Button, { id: id + "_saved", style: checkWorkStyle, children: [
          /* @__PURE__ */ jsx(FontAwesomeIcon, { icon: faCloud }),
          "  Response Saved"
        ] });
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
    return /* @__PURE__ */ jsxs("span", { id, style: { marginBottom: "4px" }, children: [
      /* @__PURE__ */ jsx("a", { name: id }),
      inputChildrenToRender,
      checkworkComponent
    ] });
  } else {
    return /* @__PURE__ */ jsxs("span", { id, style: { marginBottom: "4px" }, children: [
      /* @__PURE__ */ jsx("a", { name: id }),
      inputChildrenToRender
    ] });
  }
});
export {
  answer as default
};
