import React from "react";
import useDoenetRender from "./useDoenetRenderer.js";
export default React.memo(function Alert(props) {
  let {name, id, SVs, children} = useDoenetRender(props);
  if (SVs.hidden) {
    return null;
  }
  return /* @__PURE__ */ React.createElement("strong", {
    id
  }, /* @__PURE__ */ React.createElement("a", {
    name: id
  }), children);
});
