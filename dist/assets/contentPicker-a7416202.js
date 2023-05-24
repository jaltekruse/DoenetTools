import { R as React, bx as useDoenetRenderer, r as reactExports, o as Recoil_index_24, bC as rendererState, j as jsx, b as jsxs } from "./PageViewer-d914b069.js";
import { V as VisibilitySensor } from "./visibility-sensor-57589aaf.js";
const contentPicker = React.memo(function ContentPicker(props) {
  let {
    name,
    id,
    SVs,
    children,
    actions,
    ignoreUpdate,
    rendererName,
    callAction
  } = useDoenetRenderer(props);
  ContentPicker.baseStateVariable = "selectedIndices";
  const [rendererSelectedIndices, setRendererSelectedIndices] = reactExports.useState(
    SVs.selectedIndices
  );
  const setRendererState = Recoil_index_24(rendererState(rendererName));
  let selectedIndicesWhenSetState = reactExports.useRef(null);
  if (!ignoreUpdate && selectedIndicesWhenSetState.current !== SVs.selectedIndices) {
    setRendererSelectedIndices(SVs.selectedIndices);
    selectedIndicesWhenSetState.current = SVs.selectedIndices;
  } else {
    selectedIndicesWhenSetState.current = null;
  }
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
  function onChangeHandler(e) {
    let newSelectedIndices = [];
    if (e.target.value) {
      newSelectedIndices = Array.from(
        e.target.selectedOptions,
        (option) => Number(option.value)
      );
    }
    if (rendererSelectedIndices.length !== newSelectedIndices.length || rendererSelectedIndices.some((v, i) => v != newSelectedIndices[i])) {
      setRendererSelectedIndices(newSelectedIndices);
      selectedIndicesWhenSetState.current = SVs.selectedIndices;
      setRendererState((was) => {
        let newObj = { ...was };
        newObj.ignoreUpdate = true;
        return newObj;
      });
      callAction({
        action: actions.updateSelectedIndices,
        args: {
          selectedIndices: newSelectedIndices
        },
        baseVariableValue: newSelectedIndices
      });
    }
  }
  if (SVs.hidden) {
    return null;
  }
  let options = [];
  if (SVs.separateByTopic) {
    for (let topic in SVs.childrenByTopic) {
      let childIndices = SVs.childrenByTopic[topic];
      let optionsList = childIndices.map(function(ind) {
        return /* @__PURE__ */ jsx("option", { value: ind + 1, children: SVs.childInfo[ind].title }, ind + 1);
      });
      options.push(
        /* @__PURE__ */ jsx("optgroup", { label: topic, children: optionsList }, topic)
      );
    }
  } else {
    options = SVs.childInfo.map(function(obj, ind) {
      return /* @__PURE__ */ jsx("option", { value: ind + 1, children: obj.title }, ind + 1);
    });
  }
  let value = rendererSelectedIndices[0];
  let label = null;
  if (SVs.label) {
    label = SVs.label + ": ";
  }
  let picker = /* @__PURE__ */ jsx("p", { children: /* @__PURE__ */ jsxs("label", { children: [
    label,
    /* @__PURE__ */ jsx(
      "select",
      {
        className: "custom-select",
        id: id + "-select",
        onChange: (e) => onChangeHandler(e),
        value,
        disabled: SVs.disabled,
        children: options
      }
    )
  ] }) });
  return /* @__PURE__ */ jsx(VisibilitySensor, { partialVisibility: true, onChange: onChangeVisibility, children: /* @__PURE__ */ jsxs("section", { id, children: [
    /* @__PURE__ */ jsx("a", { name: id }),
    picker,
    children
  ] }) });
});
export {
  contentPicker as default
};
