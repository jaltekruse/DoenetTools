import { R as React, bx as useDoenetRenderer, r as reactExports, j as jsx, b as jsxs } from "./PageViewer-d914b069.js";
import { V as VisibilitySensor } from "./visibility-sensor-57589aaf.js";
const sideBySide = React.memo(function sideBySide2(props) {
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
  let styledChildren = [];
  const marginLeft = SVs.margins[0];
  const marginRight = SVs.margins[1];
  const numColumns = children.length;
  for (let [i, child] of children.entries()) {
    let width = SVs.widths[i];
    let thisMarginLeft = marginLeft;
    let thisMarginRight = marginRight;
    if (i > 0) {
      thisMarginLeft += SVs.gapWidth / 2;
    }
    if (i < numColumns - 1) {
      thisMarginRight += SVs.gapWidth / 2;
    }
    styledChildren.push(
      /* @__PURE__ */ jsx(
        "span",
        {
          style: {
            marginLeft: `${thisMarginLeft}%`,
            marginRight: `${thisMarginRight}%`,
            width: `${width}%`
          },
          children: child
        },
        child.key
      )
    );
  }
  return /* @__PURE__ */ jsx(VisibilitySensor, { partialVisibility: true, onChange: onChangeVisibility, children: /* @__PURE__ */ jsxs(
    "div",
    {
      id,
      style: { display: "flex", maxWidth: "850px", margin: "12px 0" },
      children: [
        /* @__PURE__ */ jsx("a", { name: id }),
        styledChildren
      ]
    }
  ) });
});
export {
  sideBySide as default
};
