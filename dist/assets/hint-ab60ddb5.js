import { R as React, bx as useDoenetRenderer, r as reactExports, j as jsx, b as jsxs, s as styled, c as FontAwesomeIcon, bH as faLightbulb } from "./PageViewer-d914b069.js";
import { b as faLightbulb$1 } from "./index-72e7d0b2.js";
import { V as VisibilitySensor } from "./visibility-sensor-57589aaf.js";
const SpanStyling = styled.span`
  &: focus {
    outline: 2px solid var(--canvastext);
    outline-offset: 2px;
  }
`;
const hint = React.memo(function Hint(props) {
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
  if (!SVs.showHints) {
    return null;
  }
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
  if (!title) {
    title = SVs.title;
  }
  let icon = /* @__PURE__ */ jsx(FontAwesomeIcon, { icon: faLightbulb });
  let info = null;
  let infoBlockStyle = { display: "none" };
  let onClickFunction = () => {
    callAction({
      action: actions.revealHint
    });
  };
  let onKeyPressFunction = (e) => {
    if (e.key === "Enter") {
      callAction({
        action: actions.revealHint
      });
    }
  };
  let openCloseText = "open";
  if (SVs.open) {
    openCloseText = "close";
    icon = /* @__PURE__ */ jsx(FontAwesomeIcon, { icon: faLightbulb$1 });
    info = children;
    infoBlockStyle = {
      display: "block",
      margin: "0px 4px 12px 4px",
      padding: "6px",
      border: "2px solid var(--canvastext)",
      borderTop: "0px",
      borderBottomLeftRadius: "5px",
      borderBottomRightRadius: "5px",
      backgroundColor: "var(--canvas)"
    };
    onKeyPressFunction = (e) => {
      if (e.key === "Enter") {
        callAction({
          action: actions.closeHint
        });
      }
    };
    onClickFunction = () => {
      callAction({
        action: actions.closeHint
      });
    };
  }
  return /* @__PURE__ */ jsx(VisibilitySensor, { partialVisibility: true, onChange: onChangeVisibility, children: /* @__PURE__ */ jsxs("aside", { id, children: [
    /* @__PURE__ */ jsx("a", { name: id }),
    /* @__PURE__ */ jsxs(
      SpanStyling,
      {
        style: {
          display: "block",
          margin: SVs.open ? "12px 4px 0px 4px" : "12px 4px 12px 4px",
          padding: "6px",
          border: "2px solid var(--canvastext)",
          borderTopLeftRadius: "5px",
          borderTopRightRadius: "5px",
          borderBottomLeftRadius: SVs.open ? "0px" : "5px",
          borderBottomRightRadius: SVs.open ? "0px" : "5px",
          backgroundColor: "var(--mainGray)",
          cursor: "pointer"
        },
        tabIndex: "0",
        "data-test": "hint-heading",
        onClick: onClickFunction,
        onKeyDown: onKeyPressFunction,
        children: [
          " ",
          icon,
          " ",
          title,
          " (click to ",
          openCloseText,
          ")"
        ]
      }
    ),
    /* @__PURE__ */ jsx("span", { style: infoBlockStyle, children: info })
  ] }, id) });
});
export {
  hint as default
};
