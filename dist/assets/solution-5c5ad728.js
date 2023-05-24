import { R as React, bx as useDoenetRenderer, r as reactExports, j as jsx, b as jsxs, s as styled, c as FontAwesomeIcon, bN as faPuzzlePiece } from "./PageViewer-d914b069.js";
import { V as VisibilitySensor } from "./visibility-sensor-57589aaf.js";
const SpanStyling = styled.span`
  // display: block;
  // margin: SVs.open ? 12px 4px 0px 4px : 12px 4px 12px 4px;
  // padding: 6px;
  // border: 2px solid black;
  // border-top-left-radius: 5px;
  // border-top-right-radius: 5px;
  // border-bottom-left-radius: SVs.open ? 0px : 5px;
  // border-bottom-right-radius: SVs.open ? 0px : 5px;
  // background-color: var(--mainGray);
  // cursor: pointer;
  &: focus {
    outline: 2px solid var(--canvastext);
    outline-offset: 2px;
  }
`;
const solution = React.memo(function Solution(props) {
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
  let openCloseText = "open";
  if (SVs.hidden) {
    return null;
  }
  let icon;
  let childrenToRender = null;
  let infoBlockStyle = { display: "none" };
  let onClickFunction;
  let onKeyPressFunction;
  if (SVs.open) {
    icon = /* @__PURE__ */ jsx(FontAwesomeIcon, { icon: faPuzzlePiece });
    openCloseText = "close";
    childrenToRender = children;
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
          action: actions.closeSolution
        });
      }
    };
    if (SVs.canBeClosed) {
      onClickFunction = () => {
        callAction({
          action: actions.closeSolution
        });
      };
    } else {
      onClickFunction = () => {
      };
    }
  } else {
    icon = /* @__PURE__ */ jsx(FontAwesomeIcon, { icon: faPuzzlePiece, rotation: 90 });
    onClickFunction = () => {
      callAction({
        action: actions.revealSolution
      });
    };
    onKeyPressFunction = (e) => {
      if (e.key === "Enter") {
        callAction({
          action: actions.revealSolution
        });
      }
    };
  }
  return /* @__PURE__ */ jsx(VisibilitySensor, { partialVisibility: true, onChange: onChangeVisibility, children: /* @__PURE__ */ jsxs("aside", { id, style: { margin: "12px 0" }, children: [
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
        id: id + "_button",
        onClick: onClickFunction,
        onKeyDown: onKeyPressFunction,
        children: [
          icon,
          " ",
          SVs.sectionName,
          " ",
          SVs.message,
          " (click to ",
          openCloseText,
          ")"
        ]
      }
    ),
    /* @__PURE__ */ jsx("span", { style: infoBlockStyle, children: childrenToRender })
  ] }) });
});
export {
  solution as default
};
