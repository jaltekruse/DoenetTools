import { R as React, bx as useDoenetRenderer, r as reactExports, j as jsx, b as jsxs, F as Fragment } from "./PageViewer-d914b069.js";
import { V as VisibilitySensor } from "./visibility-sensor-57589aaf.js";
const list = React.memo(function List(props) {
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
  if (SVs.item) {
    return /* @__PURE__ */ jsx(
      VisibilitySensor,
      {
        partialVisibility: true,
        onChange: onChangeVisibility,
        requireContentsSize: false,
        children: /* @__PURE__ */ jsxs(Fragment, { children: [
          /* @__PURE__ */ jsx("a", { name: id }),
          /* @__PURE__ */ jsx("li", { id, children })
        ] })
      }
    );
  } else if (SVs.numbered) {
    let list_style;
    if (SVs.marker) {
      if (SVs.marker[0] === "1") {
        list_style = "decimal";
      } else if (SVs.marker[0] === "a") {
        list_style = "lower-alpha";
      } else if (SVs.marker[0] === "i") {
        list_style = "lower-roman";
      } else if (SVs.marker[0] === "A") {
        list_style = "upper-alpha";
      } else if (SVs.marker[0] === "I") {
        list_style = "upper-roman";
      }
    }
    if (!list_style) {
      list_style = styleTypeByLevel.numbered[(SVs.level - 1) % styleTypeByLevel.numbered.length];
    }
    return /* @__PURE__ */ jsx(VisibilitySensor, { partialVisibility: true, onChange: onChangeVisibility, children: /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs("ol", { id, style: { listStyleType: list_style }, children: [
      /* @__PURE__ */ jsx("a", { name: id }),
      children
    ] }) }) });
  } else {
    let list_style;
    if (SVs.marker) {
      list_style = SVs.marker.toLowerCase();
      if (!unnumberedStyles.includes(list_style)) {
        list_style = null;
      }
    }
    if (!list_style) {
      list_style = styleTypeByLevel.unnumbered[(SVs.level - 1) % styleTypeByLevel.unnumbered.length];
    }
    return /* @__PURE__ */ jsx(VisibilitySensor, { partialVisibility: true, onChange: onChangeVisibility, children: /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs("ul", { id, style: { listStyleType: list_style }, children: [
      /* @__PURE__ */ jsx("a", { name: id }),
      children
    ] }) }) });
  }
});
const unnumberedStyles = ["disc", "circle", "square"];
const styleTypeByLevel = {
  numbered: [
    "decimal",
    "lower-alpha",
    "lower-roman",
    "upper-alpha",
    "upper-roman"
  ],
  unnumbered: unnumberedStyles
};
export {
  list as default
};
