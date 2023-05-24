import { R as React, bx as useDoenetRenderer, j as jsx, F as Fragment } from "./PageViewer-d914b069.js";
const nbsp = React.memo(function Nbsp(props) {
  let { SVs } = useDoenetRenderer(props, false);
  if (SVs.hidden) {
    return null;
  }
  return /* @__PURE__ */ jsx(Fragment, { children: " " });
});
export {
  nbsp as default
};
