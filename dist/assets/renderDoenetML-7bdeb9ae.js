import { R as React, bx as useDoenetRenderer, r as reactExports, j as jsx, P as PageViewer } from "./PageViewer-d914b069.js";
import { V as VisibilitySensor } from "./visibility-sensor-57589aaf.js";
const renderDoenetML = React.memo(function Container(props) {
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
  return /* @__PURE__ */ jsx(VisibilitySensor, { partialVisibility: true, onChange: onChangeVisibility, children: /* @__PURE__ */ jsx(
    PageViewer,
    {
      doenetML: SVs.doenetML,
      flags: {
        showCorrectness: true,
        solutionDisplayMode: "button",
        showFeedback: true,
        showHints: true,
        autoSubmit: false,
        allowLoadState: false,
        allowSaveState: false,
        allowLocalState: false,
        allowSaveSubmissions: false,
        allowSaveEvents: false
      },
      pageIsActive: true,
      prefixForIds: id,
      pageNumber: id.replace(/[#\\\/]/g, "")
    }
  ) });
});
export {
  renderDoenetML as default
};
