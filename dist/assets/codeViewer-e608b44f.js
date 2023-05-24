import { R as React, bx as useDoenetRenderer, r as reactExports, b as jsxs, j as jsx, B as Button } from "./PageViewer-d914b069.js";
import { s as sizeToCSS } from "./css-5483d03f.js";
import { V as VisibilitySensor } from "./visibility-sensor-57589aaf.js";
const codeViewer = React.memo(function CodeViewer(props) {
  let { name, id, SVs, children, actions, callAction } = useDoenetRenderer(
    props,
    false
  );
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
  let viewerHeight = { ...SVs.height };
  viewerHeight.size = viewerHeight.size - 40;
  let viewerWidth = { ...SVs.width };
  viewerWidth.size = viewerWidth.size - 4;
  let surroundingBoxStyle = {
    width: sizeToCSS(SVs.width),
    maxWidth: "100%"
  };
  if (SVs.locationFromParent !== "bottom") {
    surroundingBoxStyle.border = "var(--mainBorder)";
    surroundingBoxStyle.borderRadius = "var(--mainBorderRadius)";
  }
  let contentPanel = /* @__PURE__ */ jsxs(
    "div",
    {
      style: {
        width: sizeToCSS(SVs.width),
        height: sizeToCSS(SVs.height),
        maxWidth: "100%",
        // padding: "12px",
        // border: "1px solid black",
        // overflowY: "scroll"
        boxSizing: "border-box",
        paddingLeft: "10px"
      },
      children: [
        /* @__PURE__ */ jsx("div", { style: { height: "28px" }, children: /* @__PURE__ */ jsx(
          Button,
          {
            onClick: () => callAction({ action: actions.updateComponents }),
            value: "update",
            id: id + "_updateButton",
            style: { marginTop: "10px" }
          }
        ) }),
        /* @__PURE__ */ jsx(
          "div",
          {
            style: {
              overflowY: "scroll",
              width: sizeToCSS(viewerWidth),
              maxWidth: "100%",
              height: sizeToCSS(viewerHeight),
              paddingRight: "10px",
              marginTop: "10px",
              boxSizing: "border-box"
            },
            id: id + "_content",
            children
          }
        )
      ]
    }
  );
  let outerStyle = {};
  if (SVs.locationFromParent !== "bottom") {
    outerStyle = { margin: "12px 0" };
  }
  return /* @__PURE__ */ jsx(VisibilitySensor, { partialVisibility: true, onChange: onChangeVisibility, children: /* @__PURE__ */ jsxs("div", { style: outerStyle, children: [
    /* @__PURE__ */ jsx("a", { name: id }),
    /* @__PURE__ */ jsx(
      "div",
      {
        style: surroundingBoxStyle,
        className: "codeViewerSurroundingBox",
        id,
        children: contentPanel
      }
    )
  ] }) });
});
export {
  codeViewer as default
};
