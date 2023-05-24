import { R as React, bx as useDoenetRenderer, l as useLocation, r as reactExports, j as jsx, L as Link, bz as cesc, b as jsxs } from "./PageViewer-d914b069.js";
import { V as VisibilitySensor } from "./visibility-sensor-57589aaf.js";
const contentBrowser = React.memo(function ContentBrowser(props) {
  let { name, id, SVs, children, actions, callAction } = useDoenetRenderer(props);
  let { hash, search } = useLocation();
  let onChangeVisibility = (isVisible) => {
    if (actions.recordVisibilityChange) {
      callAction({
        action: actions.recordVisibilityChange,
        args: { isVisible }
      });
    }
  };
  let setSelectedItemInd = (ind) => {
    callAction({
      action: actions.setSelectedItemInd,
      args: { ind }
    });
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
  reactExports.useEffect(() => {
    let hashFirstSlash = hash.indexOf("\\/");
    if (hashFirstSlash !== -1) {
      let hashTarget = hash.substring(hashFirstSlash);
      let indFromHash = SVs.indByEscapedComponentName[hashTarget];
      if (indFromHash !== void 0 && indFromHash !== SVs.selectedItemInd) {
        setSelectedItemInd(indFromHash);
      }
    }
  }, [hash]);
  if (SVs.hidden) {
    return null;
  }
  let firstSlash = id.indexOf("\\/");
  let prefix = id.substring(0, firstSlash);
  let urlStart = search + "#" + prefix;
  let initials = SVs.allInitials.map((initial) => /* @__PURE__ */ jsx(
    Link,
    {
      style: {
        padding: "0 5px",
        width: "10px",
        cursor: "pointer",
        color: "var(--mainBlue)",
        textDecoration: initial === SVs.initial ? "underline" : "none"
      },
      to: urlStart + cesc(SVs.firstComponentNameByInitial[initial]),
      children: initial
    },
    initial
  ));
  let labelRows = [];
  let nLabels = SVs.itemInfoForInitial.length;
  let nRows = Math.ceil(nLabels / 3);
  for (let rowInd = 0; rowInd < nRows; rowInd++) {
    let row = [];
    for (let ind = rowInd * 3; ind < (rowInd + 1) * 3; ind++) {
      let itemInfo = SVs.itemInfoForInitial[ind];
      if (!itemInfo) {
        break;
      }
      row.push(
        /* @__PURE__ */ jsx("td", { width: "33%", children: /* @__PURE__ */ jsx(
          Link,
          {
            style: {
              display: "block",
              // padding: "4px",
              // width: "100%",
              cursor: "pointer",
              color: "var(--canvasText)",
              textDecoration: "none",
              backgroundColor: itemInfo.selected ? "var(--mainGray)" : "var(--canvas)"
            },
            to: urlStart + cesc(itemInfo.componentName),
            children: itemInfo.label
          },
          itemInfo.ind
        ) })
      );
    }
    labelRows.push(/* @__PURE__ */ jsx("tr", { children: row }, rowInd));
  }
  let labels = /* @__PURE__ */ jsx("table", { children: labelRows });
  let labelPicker = /* @__PURE__ */ jsxs("div", { style: { width: "100%" }, "data-test": "labelPicker", children: [
    /* @__PURE__ */ jsx(
      "div",
      {
        style: {
          marginTop: "12px",
          height: "25px",
          maxWidth: "220px"
        },
        children: "Select component"
      }
    ),
    /* @__PURE__ */ jsx(
      "div",
      {
        style: {
          display: "flex",
          flexDirection: "column",
          border: "solid",
          maxWidth: "100%",
          height: "100px",
          overflowX: "hidden",
          marginBottom: "12px",
          boxSizing: "border-box"
        },
        children: labels
      }
    )
  ] });
  return /* @__PURE__ */ jsx(VisibilitySensor, { partialVisibility: true, onChange: onChangeVisibility, children: /* @__PURE__ */ jsxs("div", { id, children: [
    /* @__PURE__ */ jsx("a", { name: id }),
    /* @__PURE__ */ jsxs("div", { style: { display: "flex" }, "data-test": "initials", children: [
      "Filter by: ",
      initials
    ] }),
    labelPicker,
    children
  ] }) });
});
export {
  contentBrowser as default
};
