import { R as React, bx as useDoenetRenderer, b as jsxs, F as Fragment, j as jsx } from "./PageViewer-d914b069.js";
const q = React.memo(function Q(props) {
  let { name, id, SVs, children } = useDoenetRenderer(props);
  if (SVs.hidden) {
    return null;
  }
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("a", { name: id }),
    "“",
    children,
    "”"
  ] });
});
export {
  q as default
};
