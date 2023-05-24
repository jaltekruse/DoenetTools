import { R as React, bx as useDoenetRenderer, b as jsxs, j as jsx } from "./PageViewer-d914b069.js";
const c = React.memo(function C(props) {
  let { name, id, SVs, children } = useDoenetRenderer(props);
  if (SVs.hidden) {
    return null;
  }
  return /* @__PURE__ */ jsxs("code", { id, style: { margin: "12px 0" }, children: [
    /* @__PURE__ */ jsx("a", { name: id }),
    children
  ] });
});
export {
  c as default
};
