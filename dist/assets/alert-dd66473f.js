import { R as React, bx as useDoenetRenderer, b as jsxs, j as jsx } from "./PageViewer-d914b069.js";
const alert = React.memo(function Alert(props) {
  let { name, id, SVs, children } = useDoenetRenderer(props);
  if (SVs.hidden) {
    return null;
  }
  return /* @__PURE__ */ jsxs("strong", { id, children: [
    /* @__PURE__ */ jsx("a", { name: id }),
    children
  ] });
});
export {
  alert as default
};
