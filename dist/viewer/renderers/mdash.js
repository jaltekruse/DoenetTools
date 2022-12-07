import React from "react";
import useDoenetRender from "./useDoenetRenderer.js";
export default React.memo(function Ndash(props) {
  let {SVs} = useDoenetRender(props, false);
  if (SVs.hidden) {
    return null;
  }
  return /* @__PURE__ */ React.createElement(React.Fragment, null, "—");
});
