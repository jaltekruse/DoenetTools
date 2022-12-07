import {MathJax} from "better-react-mathjax";
import React, {useEffect} from "react";
import useDoenetRender from "./useDoenetRenderer.js";
export default React.memo(function Number(props) {
  let {name, id, SVs} = useDoenetRender(props);
  if (SVs.hidden) {
    return null;
  }
  let number = SVs.text;
  if (SVs.renderAsMath) {
    number = "\\(" + number + "\\)";
  }
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("a", {
    name: id
  }), /* @__PURE__ */ React.createElement("span", {
    id
  }, /* @__PURE__ */ React.createElement(MathJax, {
    hideUntilTypeset: "first",
    inline: true,
    dynamic: true
  }, number)));
});
