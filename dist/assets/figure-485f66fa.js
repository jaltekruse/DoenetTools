import { R as React, bx as useDoenetRenderer, r as reactExports, j as jsx, b as jsxs } from "./PageViewer-d914b069.js";
import { V as VisibilitySensor } from "./visibility-sensor-57589aaf.js";
import { M as Measure } from "./index.esm-b50f3a4c.js";
import "./extends-d9a14db7.js";
import "./setPrototypeOf-be240aa9.js";
import "./inheritsLoose-000f9e77.js";
const figure = React.memo(function Figure(props) {
  var _a;
  let { name, id, SVs, children, actions, callAction } = useDoenetRenderer(props);
  let onChangeVisibility = (isVisible) => {
    callAction({
      action: actions.recordVisibilityChange,
      args: { isVisible }
    });
  };
  reactExports.useEffect(() => {
    return () => {
      callAction({
        action: actions.recordVisibilityChange,
        args: { isVisible: false }
      });
    };
  }, []);
  if (SVs.hidden || !children) {
    return null;
  }
  let childrenToRender = children;
  let caption = null;
  let captionChild = null;
  if (SVs.captionChildName) {
    let captionChildInd;
    for (let [ind, child] of children.entries()) {
      if (((_a = child == null ? void 0 : child.props) == null ? void 0 : _a.componentInstructions.componentName) === SVs.captionChildName) {
        captionChildInd = ind;
        break;
      }
    }
    captionChild = children[captionChildInd];
    childrenToRender.splice(captionChildInd, 1);
  }
  if (!SVs.suppressFigureNameInCaption) {
    let figureName = /* @__PURE__ */ jsx("strong", { children: SVs.figureName });
    if (captionChild) {
      caption = /* @__PURE__ */ jsxs("div", { children: [
        figureName,
        ": ",
        captionChild
      ] });
    } else {
      caption = /* @__PURE__ */ jsx("div", { children: figureName });
    }
  } else {
    if (captionChild) {
      caption = /* @__PURE__ */ jsx("div", { children: captionChild });
    }
  }
  const [captionTextAlign, setCaptionTextAlign] = reactExports.useState("center");
  function getLineHeight(el) {
    var temp = document.createElement(el.nodeName), ret;
    temp.setAttribute(
      "style",
      "margin:0; padding:0; font-family:" + (el.style.fontFamily || "inherit") + "; font-size:" + (el.style.fontSize || "inherit")
    );
    temp.innerHTML = "A";
    el.parentNode.appendChild(temp);
    ret = temp.clientHeight;
    temp.parentNode.removeChild(temp);
    return ret;
  }
  function countCaptionLines() {
    var el = document.getElementById(id + "_caption");
    var divHeight = el.offsetHeight;
    var lineHeight = getLineHeight(document.getElementById(id + "_caption"));
    var lines = Math.round(divHeight / lineHeight);
    return lines;
  }
  function handleResize() {
    if (countCaptionLines() >= 2) {
      setCaptionTextAlign("left");
    } else {
      setCaptionTextAlign("center");
    }
  }
  return /* @__PURE__ */ jsx(VisibilitySensor, { partialVisibility: true, onChange: onChangeVisibility, children: /* @__PURE__ */ jsxs("figure", { id, style: { margin: "12px 0" }, children: [
    /* @__PURE__ */ jsx("a", { name: id }),
    childrenToRender,
    /* @__PURE__ */ jsx("figcaption", { id: id + "_caption", children: /* @__PURE__ */ jsx(Measure, { onResize: handleResize, children: ({ measureRef }) => /* @__PURE__ */ jsx("div", { ref: measureRef, style: { textAlign: captionTextAlign }, children: caption }) }) })
  ] }) });
});
export {
  figure as default
};
