import { R as React, bx as useDoenetRenderer, r as reactExports, j as jsx, b as jsxs } from "./PageViewer-d914b069.js";
import { s as sizeToCSS } from "./css-5483d03f.js";
import { V as VisibilitySensor } from "./visibility-sensor-57589aaf.js";
const summaryStatistics = React.memo(function Tabular(props) {
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
    borderColor: "black",
    borderRadius: "var(--mainBorderRadius)"
  };
  let options = [
    "mean",
    "stdev",
    "variance",
    "stderr",
    "count",
    "minimum",
    "quartile1",
    "median",
    "quartile3",
    "maximum",
    "range",
    "sum"
  ];
  let columns = options.filter((x) => x in SVs.summaryStatistics);
  let heading = /* @__PURE__ */ jsx("tr", { children: columns.map((x, i) => /* @__PURE__ */ jsx("th", { children: x }, i)) });
  let data = /* @__PURE__ */ jsx("tr", { children: columns.map((x, i) => /* @__PURE__ */ jsx("td", { children: SVs.summaryStatistics[x] }, i)) });
  return /* @__PURE__ */ jsx(VisibilitySensor, { partialVisibility: true, onChange: onChangeVisibility, children: /* @__PURE__ */ jsxs("div", { style: { margin: "12px 0" }, children: [
    /* @__PURE__ */ jsx("a", { name: id }),
    /* @__PURE__ */ jsxs("p", { children: [
      "Summary statistics of ",
      SVs.columnName
    ] }),
    /* @__PURE__ */ jsx("table", { id, style: tableStyle, children: /* @__PURE__ */ jsxs("tbody", { children: [
      heading,
      data
    ] }) })
  ] }) });
});
export {
  summaryStatistics as default
};
