import React, {useEffect} from "react";
import useDoenetRenderer from "./useDoenetRenderer.js";
import VisibilitySensor from "react-visibility-sensor-v2";
export default React.memo(function Pre(props) {
  let {name, id, SVs, children, actions, callAction} = useDoenetRenderer(props);
  let onChangeVisibility = (isVisible) => {
    callAction({
      action: actions.recordVisibilityChange,
      args: {isVisible}
    });
  };
  useEffect(() => {
    return () => {
      callAction({
        action: actions.recordVisibilityChange,
        args: {isVisible: false}
      });
    };
  }, []);
  if (SVs.hidden)
    return null;
  return /* @__PURE__ */ React.createElement(VisibilitySensor, {
    partialVisibility: true,
    onChange: onChangeVisibility
  }, /* @__PURE__ */ React.createElement("pre", {
    id,
    style: {margin: "12px 0"}
  }, /* @__PURE__ */ React.createElement("a", {
    name: id
  }), children));
});
