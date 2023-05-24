import { R as React, bx as useDoenetRenderer, b as jsxs, j as jsx } from "./PageViewer-d914b069.js";
const tag = React.memo(function Tag(props) {
  let { name, id, SVs, children } = useDoenetRenderer(props);
  if (SVs.hidden) {
    return null;
  }
  let open = "<";
  let close = ">";
  if (SVs.selfClosed) {
    close = "/>";
  }
  return /* @__PURE__ */ jsxs("code", { id, style: { color: "var(--mainGreen)" }, children: [
    /* @__PURE__ */ jsx("a", { name: id }),
    open,
    children,
    close
  ] });
});
export {
  tag as default
};
