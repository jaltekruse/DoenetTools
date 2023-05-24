import { R as React, bx as useDoenetRenderer, r as reactExports, j as jsx, b as jsxs } from "./PageViewer-d914b069.js";
import { V as VisibilitySensor } from "./visibility-sensor-57589aaf.js";
const containerBlock = React.memo(function Container(props) {
  let { name, id, SVs, children, actions, callAction } = useDoenetRenderer(props);
  let onChangeVisibility = (isVisible) => {
    if (actions.recordVisibilityChange) {
      callAction({
        action: actions.recordVisibilityChange,
        args: { isVisible }
      });
    }
  };
  reactExports.useEffect(() => {
    return () => {
      if (actions.recordVisibilityChange) {
        callAction({
          action: actions.recordVisibilityChange,
          args: { isVisible: false }
        });
      }
    };
  }, []);
  if (SVs.hidden) {
    return null;
  }
  return /* @__PURE__ */ jsx(VisibilitySensor, { partialVisibility: true, onChange: onChangeVisibility, children: /* @__PURE__ */ jsxs("div", { id, children: [
    /* @__PURE__ */ jsx("a", { name: id }),
    children
  ] }) });
});
export {
  containerBlock as default
};
