import React from "react";
import useDoenetRenderer from "./useDoenetRenderer.js";
import VisibilitySensor from "react-visibility-sensor-v2";
import {useEffect} from "react";
export default React.memo(function P(props) {
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
  if (SVs.hidden) {
    return null;
  }
  return /* @__PURE__ */ React.createElement(VisibilitySensor, {
    partialVisibility: true,
    onChange: onChangeVisibility
  }, /* @__PURE__ */ React.createElement("p", {
    id
  }, /* @__PURE__ */ React.createElement("a", {
    name: id
  }), children));
});
