import { R as React, bx as useDoenetRenderer, r as reactExports, j as jsx, b as jsxs, F as Fragment, s as styled, c as FontAwesomeIcon } from "./PageViewer-d914b069.js";
import { a as faComment } from "./index-72e7d0b2.js";
import { V as VisibilitySensor } from "./visibility-sensor-57589aaf.js";
const FeedbackStyling = styled.aside`
  background-color: var(--canvas);
  margin: 0px 4px 12px 4px;
  padding: 1em;
  border: 2px solid var(--canvastext);
  border-top: 0px;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  //   &: focus {
  //   outline: 2px solid var(--canvastext);
  //   outline-offset: 2px;
  //  }
`;
const SpanStyling = styled.span`
  display: block;
  margin: 12px 4px 0px 4px;
  padding: 6px;
  border: 2px solid var(--canvastext);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  background-color: var(--mainGray);
  &: focus {
    outline: 2px solid var(--canvastext);
    outline-offset: 2px;
  }
`;
const feedback = React.memo(function Feedback(props) {
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
  let icon = /* @__PURE__ */ jsx(FontAwesomeIcon, { icon: faComment });
  return /* @__PURE__ */ jsx(VisibilitySensor, { partialVisibility: true, onChange: onChangeVisibility, children: /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs(SpanStyling, { tabIndex: "0", children: [
      icon,
      " Feedback"
    ] }),
    /* @__PURE__ */ jsxs(
      FeedbackStyling,
      {
        id,
        children: [
          /* @__PURE__ */ jsx("a", { name: id }),
          SVs.feedbackText,
          children
        ]
      }
    )
  ] }) });
});
export {
  feedback as default
};
