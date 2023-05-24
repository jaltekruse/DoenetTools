import { R as React, bx as useDoenetRenderer, j as jsx, b as jsxs } from "./PageViewer-d914b069.js";
const asList = React.memo(function AsList(props) {
  let { name, id, SVs, children } = useDoenetRenderer(props);
  if (SVs.hidden) {
    return null;
  }
  if (children.length === 0) {
    return /* @__PURE__ */ jsx(React.Fragment, {}, id);
  }
  let withCommas = children.slice(1).reduce((a, b) => [...a, ", ", b], [children[0]]);
  return /* @__PURE__ */ jsxs(React.Fragment, { children: [
    /* @__PURE__ */ jsx("a", { name: id }),
    withCommas
  ] }, id);
});
export {
  asList as default
};
