import { R as React, bx as useDoenetRenderer, j as jsx } from "./PageViewer-d914b069.js";
const row = React.memo(function Row(props) {
  let { name, id, SVs, children } = useDoenetRenderer(props);
  if (SVs.hidden) {
    return null;
  }
  let style = {};
  if (SVs.valign !== null) {
    style.verticalAlign = SVs.valign;
  }
  if (SVs.left !== "none") {
    style.borderLeftStyle = "solid";
    if (SVs.left === "minor") {
      style.borderLeftWidth = "thin";
    } else if (SVs.left === "medium") {
      style.borderLeftWidth = "medium";
    } else {
      style.borderLeftWidth = "thick";
    }
  }
  return /* @__PURE__ */ jsx("tr", { id, style, children });
});
export {
  row as default
};
