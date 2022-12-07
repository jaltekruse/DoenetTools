import React, {useEffect} from "react";
import useDoenetRender from "./useDoenetRenderer.js";
import VisibilitySensor from "react-visibility-sensor-v2";
export default React.memo(function List(props) {
  let {name, id, SVs, children, actions, callAction} = useDoenetRender(props);
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
  if (SVs.item) {
    return /* @__PURE__ */ React.createElement(VisibilitySensor, {
      partialVisibility: true,
      onChange: onChangeVisibility,
      requireContentsSize: false
    }, /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("a", {
      name: id
    }), /* @__PURE__ */ React.createElement("li", {
      id
    }, children)));
  } else if (SVs.numbered) {
    return /* @__PURE__ */ React.createElement(VisibilitySensor, {
      partialVisibility: true,
      onChange: onChangeVisibility
    }, /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("ol", {
      id
    }, /* @__PURE__ */ React.createElement("a", {
      name: id
    }), children)));
  } else {
    return /* @__PURE__ */ React.createElement(VisibilitySensor, {
      partialVisibility: true,
      onChange: onChangeVisibility
    }, /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("ul", {
      id
    }, /* @__PURE__ */ React.createElement("a", {
      name: id
    }), children)));
  }
});
