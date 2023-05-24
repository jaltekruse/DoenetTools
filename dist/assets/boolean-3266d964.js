import { R as React, bx as useDoenetRenderer, b as jsxs, F as Fragment, j as jsx } from "./PageViewer-d914b069.js";
const boolean = React.memo(function Boolean(props) {
  let { name, id, SVs } = useDoenetRenderer(props, false);
  if (SVs.hidden) {
    return null;
  }
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("a", { name: id }),
    /* @__PURE__ */ jsx("span", { id, children: SVs.text })
  ] });
});
export {
  boolean as default
};
