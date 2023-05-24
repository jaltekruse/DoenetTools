import { R as React, bx as useDoenetRenderer, j as jsx, F as Fragment } from "./PageViewer-d914b069.js";
const ndash = React.memo(function Ndash(props) {
  let { SVs } = useDoenetRenderer(props);
  if (SVs.hidden) {
    return null;
  }
  return /* @__PURE__ */ jsx(Fragment, { children: "–" });
});
export {
  ndash as default
};
