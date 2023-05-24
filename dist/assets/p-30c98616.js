import { R as React, bx as useDoenetRenderer, r as reactExports, j as jsx, b as jsxs } from "./PageViewer-d914b069.js";
import { V as VisibilitySensor } from "./visibility-sensor-57589aaf.js";
const p = React.memo(function P(props) {
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
  return /* @__PURE__ */ jsx(VisibilitySensor, { partialVisibility: true, onChange: onChangeVisibility, children: /* @__PURE__ */ jsxs("p", { id, children: [
    /* @__PURE__ */ jsx("a", { name: id }),
    children
  ] }) });
});
export {
  p as default
};
