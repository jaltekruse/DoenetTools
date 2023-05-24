import { R as React, bx as useDoenetRenderer, r as reactExports, b as jsxs, F as Fragment, j as jsx, c as FontAwesomeIcon, bM as faCaretDown, bf as faCaretRight, bA as faLevelDownAlt, ar as faCheck, bb as faTimes, bB as faCloud } from "./PageViewer-d914b069.js";
import { V as VisibilitySensor } from "./visibility-sensor-57589aaf.js";
const section = React.memo(function Section(props) {
  var _a;
  let { name, id, SVs, children, actions, callAction } = useDoenetRenderer(props);
  let onChangeVisibility = (isVisible) => {
    callAction({
      action: actions.recordVisibilityChange,
      args: { isVisible }
    });
  };
  reactExports.useEffect(() => {
    return () => {
      callAction({
        action: actions.recordVisibilityChange,
        args: { isVisible: false }
      });
    };
  }, []);
  if (SVs.hidden) {
    return null;
  }
  let validationState = reactExports.useRef(null);
  const updateValidationState = () => {
    validationState.current = "unvalidated";
    if (SVs.justSubmitted) {
      if (SVs.creditAchieved === 1) {
        validationState.current = "correct";
      } else if (SVs.creditAchieved === 0) {
        validationState.current = "incorrect";
      } else {
        validationState.current = "partialcorrect";
      }
    }
  };
  let submitAllAnswers = () => callAction({
    action: actions.submitAllAnswers
  });
  let title;
  if (SVs.titleChildName) {
    for (let [ind, child] of children.entries()) {
      if (((_a = child == null ? void 0 : child.props) == null ? void 0 : _a.componentInstructions.componentName) === SVs.titleChildName) {
        title = children[ind];
        children.splice(ind, 1);
        break;
      }
    }
  }
  if (title) {
    title = /* @__PURE__ */ jsxs(Fragment, { children: [
      SVs.titlePrefix,
      title
    ] });
  } else if (!SVs.inAList) {
    title = SVs.title;
  }
  let heading = null;
  let headingId = id + "_title";
  if (SVs.collapsible) {
    if (SVs.open) {
      title = /* @__PURE__ */ jsxs(Fragment, { children: [
        /* @__PURE__ */ jsx(FontAwesomeIcon, { icon: faCaretDown }),
        " ",
        title,
        " (click to close)"
      ] });
    } else {
      title = /* @__PURE__ */ jsxs(Fragment, { children: [
        /* @__PURE__ */ jsx(FontAwesomeIcon, { icon: faCaretRight }),
        " ",
        title,
        " (click to open)"
      ] });
    }
  }
  let headingStyle = {};
  if (SVs.collapsible || SVs.boxed) {
    headingStyle = {
      marginBlockStart: 0,
      marginBlockEnd: 0
    };
  }
  switch (SVs.level) {
    case 0:
      heading = /* @__PURE__ */ jsx("h1", { id: headingId, style: headingStyle, children: title });
      break;
    case 1:
      heading = /* @__PURE__ */ jsx("h2", { id: headingId, style: headingStyle, children: title });
      break;
    case 2:
      heading = /* @__PURE__ */ jsx("h3", { id: headingId, style: headingStyle, children: title });
      break;
    case 3:
      heading = /* @__PURE__ */ jsx("h4", { id: headingId, style: headingStyle, children: title });
      break;
    case 4:
      heading = /* @__PURE__ */ jsx("h5", { id: headingId, style: headingStyle, children: title });
      break;
    default:
      heading = /* @__PURE__ */ jsx("h6", { id: headingId, style: headingStyle, children: title });
      break;
  }
  let checkworkComponent = null;
  if (SVs.createSubmitAllButton && !SVs.suppressCheckwork) {
    updateValidationState();
    let checkWorkStyle = {
      height: "23px",
      display: "inline-block",
      backgroundColor: "var(--mainBlue)",
      padding: "1px 6px 1px 6px",
      color: "white",
      fontWeight: "bold",
      marginBottom: "30px"
      //Space after check work
    };
    let checkWorkText = SVs.submitLabel;
    if (!SVs.showCorrectness) {
      checkWorkText = SVs.submitLabelNoCorrectness;
    }
    checkworkComponent = /* @__PURE__ */ jsxs(
      "button",
      {
        id: id + "_submit",
        tabIndex: "0",
        style: checkWorkStyle,
        onClick: submitAllAnswers,
        onKeyPress: (e) => {
          if (e.key === "Enter") {
            submitAllAnswers();
          }
        },
        children: [
          /* @__PURE__ */ jsx(FontAwesomeIcon, { icon: faLevelDownAlt, transform: { rotate: 90 } }),
          " ",
          checkWorkText
        ]
      }
    );
    if (SVs.showCorrectness) {
      if (validationState.current === "correct") {
        checkWorkStyle.backgroundColor = "var(--mainGreen)";
        checkworkComponent = /* @__PURE__ */ jsxs("span", { id: id + "_correct", style: checkWorkStyle, children: [
          /* @__PURE__ */ jsx(FontAwesomeIcon, { icon: faCheck }),
          "  Correct"
        ] });
      } else if (validationState.current === "incorrect") {
        checkWorkStyle.backgroundColor = "var(--mainRed)";
        checkworkComponent = /* @__PURE__ */ jsxs("span", { id: id + "_incorrect", style: checkWorkStyle, children: [
          /* @__PURE__ */ jsx(FontAwesomeIcon, { icon: faTimes }),
          "  Incorrect"
        ] });
      } else if (validationState.current === "partialcorrect") {
        checkWorkStyle.backgroundColor = "var(--mainYellow)";
        let percent = Math.round(SVs.creditAchieved * 100);
        let partialCreditContents = `${percent}% Correct`;
        checkworkComponent = /* @__PURE__ */ jsx("span", { id: id + "_partial", style: checkWorkStyle, children: partialCreditContents });
      }
    } else {
      if (validationState.current !== "unvalidated") {
        checkWorkStyle.backgroundColor = "var(--mainPurple)";
        checkworkComponent = /* @__PURE__ */ jsxs("span", { id: id + "_saved", style: checkWorkStyle, children: [
          /* @__PURE__ */ jsx(FontAwesomeIcon, { icon: faCloud }),
          "  Response Saved"
        ] });
      }
    }
    checkworkComponent = /* @__PURE__ */ jsx("div", { children: checkworkComponent });
  }
  if (SVs.asList) {
    children = /* @__PURE__ */ jsx("ol", { children: children.map((child) => /* @__PURE__ */ jsx("li", { children: child })) });
  }
  let content = /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("a", { name: id }),
    heading,
    children,
    checkworkComponent
  ] });
  if (SVs.collapsible) {
    let innerContent = null;
    if (SVs.open) {
      innerContent = /* @__PURE__ */ jsxs("div", { style: { display: "block", padding: "6px" }, children: [
        children,
        checkworkComponent
      ] });
    }
    content = /* @__PURE__ */ jsxs(
      "div",
      {
        style: {
          border: "var(--mainBorder)",
          borderRadius: "var(--mainBorderRadius)",
          marginTop: "24px"
        },
        children: [
          /* @__PURE__ */ jsxs(
            "div",
            {
              style: {
                backgroundColor: "var(--mainGray)",
                cursor: "pointer",
                padding: "6px",
                borderBottom: SVs.open ? "var(--mainBorder)" : "none",
                borderTopLeftRadius: "var(--mainBorderRadius)",
                borderTopRightRadius: "var(--mainBorderRadius)"
              },
              onClick: () => callAction({
                action: SVs.open ? actions.closeSection : actions.revealSection
              }),
              children: [
                /* @__PURE__ */ jsx("a", { name: id }),
                heading
              ]
            }
          ),
          innerContent
        ]
      }
    );
  } else if (SVs.boxed) {
    content = /* @__PURE__ */ jsxs(
      "div",
      {
        style: {
          border: "var(--mainBorder)",
          borderRadius: "var(--mainBorderRadius)",
          marginTop: "24px"
        },
        children: [
          /* @__PURE__ */ jsxs(
            "div",
            {
              style: {
                padding: "6px",
                borderBottom: "var(--mainBorder)",
                backgroundColor: "var(--mainGray)",
                borderTopLeftRadius: "var(--mainBorderRadius)",
                borderTopRightRadius: "var(--mainBorderRadius)"
              },
              children: [
                /* @__PURE__ */ jsx("a", { name: id }),
                heading
              ]
            }
          ),
          /* @__PURE__ */ jsxs("div", { style: { display: "block", padding: "6px" }, children: [
            children,
            checkworkComponent
          ] })
        ]
      }
    );
  }
  switch (SVs.containerTag) {
    case "aside":
      return /* @__PURE__ */ jsx(
        VisibilitySensor,
        {
          partialVisibility: true,
          onChange: onChangeVisibility,
          children: /* @__PURE__ */ jsxs("aside", { id, style: { margin: "12px 0" }, children: [
            " ",
            content,
            " "
          ] })
        }
      );
    case "article":
      return /* @__PURE__ */ jsx(
        VisibilitySensor,
        {
          partialVisibility: true,
          onChange: onChangeVisibility,
          children: /* @__PURE__ */ jsxs("article", { id, style: { margin: "12px 0" }, children: [
            " ",
            content,
            " "
          ] })
        }
      );
    case "div":
      return /* @__PURE__ */ jsx(
        VisibilitySensor,
        {
          partialVisibility: true,
          onChange: onChangeVisibility,
          children: /* @__PURE__ */ jsxs("div", { id, style: { margin: "12px 0" }, children: [
            " ",
            content,
            " "
          ] })
        }
      );
    case "none":
      return /* @__PURE__ */ jsx(Fragment, { children: content });
    default:
      return /* @__PURE__ */ jsx(
        VisibilitySensor,
        {
          partialVisibility: true,
          onChange: onChangeVisibility,
          children: /* @__PURE__ */ jsxs("section", { id, style: { margin: "12px 0" }, children: [
            " ",
            content,
            " "
          ] })
        }
      );
  }
});
export {
  section as default
};
