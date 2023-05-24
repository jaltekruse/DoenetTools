import { R as React, bx as useDoenetRenderer, b as jsxs, j as jsx } from "./PageViewer-d914b069.js";
const containerInline = React.memo(function ContainerInline(props) {
  let { name, id, SVs, children } = useDoenetRenderer(props);
  if (SVs.hidden) {
    return null;
  }
  return /* @__PURE__ */ jsxs("span", { id, children: [
    /* @__PURE__ */ jsx("a", { name: id }),
    children
  ] });
});
export {
  containerInline as default
};
