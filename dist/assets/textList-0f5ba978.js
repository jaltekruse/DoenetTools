import { R as React, bx as useDoenetRenderer, b as jsxs, j as jsx } from "./PageViewer-d914b069.js";
const textList = React.memo(function TextList(props) {
  let { name, id, SVs, children } = useDoenetRenderer(props);
  if (SVs.hidden) {
    return null;
  }
  if (children.length === 0 && SVs.text) {
    return /* @__PURE__ */ jsxs(React.Fragment, { children: [
      /* @__PURE__ */ jsx("a", { name: id }),
      /* @__PURE__ */ jsx("span", { id, children: SVs.text })
    ] }, id);
  }
  let withCommas = children.slice(1).reduce((a, b) => [...a, ", ", b], [children[0]]);
  return /* @__PURE__ */ jsxs(React.Fragment, { children: [
    /* @__PURE__ */ jsx("a", { name: id }),
    withCommas
  ] }, id);
});
export {
  textList as default
};
