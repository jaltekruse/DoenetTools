import { R as React, bx as useDoenetRenderer, r as reactExports, j as jsx, b as jsxs, F as Fragment } from "./PageViewer-d914b069.js";
import { V as VisibilitySensor } from "./visibility-sensor-57589aaf.js";
const table = React.memo(function Table(props) {
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
  if (SVs.hidden) {
    return null;
  }
  let heading = null;
  let childrenToRender = [...children];
  let title;
  if (SVs.titleChildName) {
    let titleChildInd;
    for (let [ind, child] of children.entries()) {
      if (((_a = child == null ? void 0 : child.props) == null ? void 0 : _a.componentInstructions.componentName) === SVs.titleChildName) {
        titleChildInd = ind;
        break;
      }
    }
    title = children[titleChildInd];
    childrenToRender.splice(titleChildInd, 1);
  } else {
    title = SVs.title;
  }
  if (!SVs.suppressTableNameInTitle) {
    let tableName = /* @__PURE__ */ jsx("strong", { children: SVs.tableName });
    if (title) {
      title = /* @__PURE__ */ jsxs(Fragment, { children: [
        tableName,
        ": ",
        title
      ] });
    } else {
      title = tableName;
    }
  }
  heading = /* @__PURE__ */ jsx("div", { id: id + "_title", children: title });
  return /* @__PURE__ */ jsx(VisibilitySensor, { partialVisibility: true, onChange: onChangeVisibility, children: /* @__PURE__ */ jsxs("div", { id, style: { margin: "12px 0" }, children: [
    /* @__PURE__ */ jsx("a", { name: id }),
    heading,
    childrenToRender
  ] }) });
});
export {
  table as default
};
