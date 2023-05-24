import { R as React, bx as useDoenetRenderer, o as Recoil_index_24, bC as rendererState, r as reactExports, b as jsxs, F as Fragment, j as jsx } from "./PageViewer-d914b069.js";
import { s as sizeToCSS } from "./css-5483d03f.js";
import { C as CodeMirror } from "./CodeMirror-4f017845.js";
import { V as VisibilitySensor } from "./visibility-sensor-57589aaf.js";
const codeEditor = React.memo(function CodeEditor(props) {
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
  CodeEditor.baseStateVariable = "immediateValue";
  const setRendererState = Recoil_index_24(rendererState(rendererName));
  let currentValue = reactExports.useRef(SVs.immediateValue);
  let updateValueTimer = reactExports.useRef(null);
  let editorRef = reactExports.useRef(null);
  let updateInternalValueTo = reactExports.useRef(SVs.immediateValue);
  let componentHeight = { ...SVs.height };
  let editorHeight = { ...SVs.height };
  if (SVs.showResults && SVs.resultsLocation === "bottom") {
    editorHeight.size *= 1 - SVs.viewerRatio;
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
      if (updateValueTimer.current !== null) {
        clearTimeout(updateValueTimer.current);
        callAction({
          action: actions.updateValue,
          baseVariableValue: currentValue.current
        });
      }
    };
  }, []);
  if (SVs.hidden) {
    return null;
  }
  const editorKey = id + "_editor";
  if (!ignoreUpdate && SVs.immediateValue !== currentValue.current) {
    currentValue.current = SVs.immediateValue;
    updateInternalValueTo.current = SVs.immediateValue;
  }
  let viewer = null;
  let editorWidth = SVs.width;
  let componentWidth = SVs.width;
  let editorStyle = {
    width: sizeToCSS(editorWidth),
    height: sizeToCSS(editorHeight),
    maxWidth: "100%",
    padding: "0px",
    // padding: "2px",
    // border: "1px solid black",
    overflowX: "hidden",
    overflowY: "scroll"
  };
  if (SVs.showResults) {
    if (SVs.resultsLocation === "bottom") {
      viewer = /* @__PURE__ */ jsxs(Fragment, { children: [
        /* @__PURE__ */ jsx("hr", { style: { width: sizeToCSS(componentWidth), maxWidth: "100%" } }),
        /* @__PURE__ */ jsx("div", { children })
      ] });
    } else {
      viewer = /* @__PURE__ */ jsx("div", { children });
    }
  }
  let paddingBottom = { ...editorHeight };
  paddingBottom.size /= 2;
  paddingBottom = sizeToCSS(paddingBottom);
  let editor = /* @__PURE__ */ jsx("div", { id: editorKey, style: editorStyle, children: /* @__PURE__ */ jsx(
    CodeMirror,
    {
      editorRef,
      setInternalValueTo: updateInternalValueTo.current,
      readOnly: SVs.disabled,
      onBlur: () => {
        clearTimeout(updateValueTimer.current);
        callAction({
          action: actions.updateValue,
          baseVariableValue: currentValue.current
        });
        updateValueTimer.current = null;
      },
      onFocus: () => {
      },
      onBeforeChange: (value) => {
        if (currentValue.current !== value) {
          currentValue.current = value;
          setRendererState((was) => {
            let newObj = { ...was };
            newObj.ignoreUpdate = true;
            return newObj;
          });
          callAction({
            action: actions.updateImmediateValue,
            args: { text: value },
            baseVariableValue: value
          });
          clearTimeout(updateValueTimer.current);
          updateValueTimer.current = setTimeout(function() {
            callAction({
              action: actions.updateValue,
              baseVariableValue: currentValue.current
            });
            updateValueTimer.current = null;
          }, 3e3);
        }
      },
      paddingBottom
    }
  ) }, editorKey);
  let editorWithViewer = editor;
  if (SVs.showResults && SVs.resultsLocation === "bottom") {
    editorWithViewer = /* @__PURE__ */ jsxs(Fragment, { children: [
      editor,
      viewer
    ] });
  }
  editorWithViewer = /* @__PURE__ */ jsxs("div", { style: { margin: "12px 0" }, children: [
    /* @__PURE__ */ jsx("a", { name: id }),
    /* @__PURE__ */ jsx(
      "div",
      {
        style: {
          padding: "0",
          border: "var(--mainBorder)",
          borderRadius: "var(--mainBorderRadius)",
          height: sizeToCSS(componentHeight),
          width: sizeToCSS(componentWidth),
          maxWidth: "100%",
          display: "flex",
          flexDirection: "column"
        },
        id,
        children: editorWithViewer
      }
    )
  ] });
  if (SVs.showResults) {
    if (SVs.resultsLocation === "left") {
      editorWithViewer = /* @__PURE__ */ jsxs("div", { style: { display: "flex", maxWidth: "100%", margin: "12px 0" }, children: [
        /* @__PURE__ */ jsx(
          "div",
          {
            style: {
              maxWidth: "50%",
              paddingRight: "15px",
              boxSizing: "border-box"
            },
            children: viewer
          }
        ),
        /* @__PURE__ */ jsx(
          "div",
          {
            style: {
              maxWidth: "50%",
              boxSizing: "border-box"
            },
            children: editorWithViewer
          }
        )
      ] });
    } else if (SVs.resultsLocation === "right") {
      editorWithViewer = /* @__PURE__ */ jsxs("div", { style: { display: "flex", maxWidth: "100%", margin: "12px 0" }, children: [
        /* @__PURE__ */ jsx(
          "div",
          {
            style: {
              maxWidth: "50%",
              paddingRight: "15px",
              boxSizing: "border-box"
            },
            children: editorWithViewer
          }
        ),
        /* @__PURE__ */ jsx(
          "div",
          {
            style: {
              maxWidth: "50%",
              boxSizing: "border-box"
            },
            children: viewer
          }
        )
      ] });
    }
  }
  return /* @__PURE__ */ jsx(VisibilitySensor, { partialVisibility: true, onChange: onChangeVisibility, children: editorWithViewer });
});
export {
  codeEditor as default
};
