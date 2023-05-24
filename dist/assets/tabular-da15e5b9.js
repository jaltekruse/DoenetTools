import { R as React, bx as useDoenetRenderer, r as reactExports, j as jsx, b as jsxs } from "./PageViewer-d914b069.js";
import { s as sizeToCSS } from "./css-5483d03f.js";
import { V as VisibilitySensor } from "./visibility-sensor-57589aaf.js";
const tabular = React.memo(function Tabular(props) {
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
  const tableStyle = {
    width: sizeToCSS(SVs.width),
    height: sizeToCSS(SVs.height),
    borderCollapse: "collapse",
    borderColor: "var(--canvastext)",
    borderRadius: "var(--mainBorderRadius)",
    tableLayout: "fixed"
  };
  if (SVs.top !== "none") {
    tableStyle.borderTopStyle = "solid";
    if (SVs.top === "minor") {
      tableStyle.borderTopWidth = "thin";
    } else if (SVs.top === "medium") {
      tableStyle.borderTopWidth = "medium";
    } else {
      tableStyle.borderTopWidth = "thick";
    }
  }
  return /* @__PURE__ */ jsx(VisibilitySensor, { partialVisibility: true, onChange: onChangeVisibility, children: /* @__PURE__ */ jsxs("div", { style: { margin: "12px 0" }, children: [
    /* @__PURE__ */ jsx("a", { name: id }),
    /* @__PURE__ */ jsx("table", { id, style: tableStyle, children: /* @__PURE__ */ jsx("tbody", { children }) })
  ] }) });
});
export {
  tabular as default
};
