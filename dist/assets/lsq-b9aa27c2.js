import { R as React, bx as useDoenetRenderer, j as jsx, F as Fragment } from "./PageViewer-d914b069.js";
const lsq = React.memo(function Lsq(props) {
  let { SVs } = useDoenetRenderer(props, false);
  if (SVs.hidden) {
    return null;
  }
  return /* @__PURE__ */ jsx(Fragment, { children: "‘" });
});
export {
  lsq as default
};
