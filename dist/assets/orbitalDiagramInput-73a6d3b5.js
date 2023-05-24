import { R as React, bx as useDoenetRenderer, r as reactExports, j as jsx, b as jsxs, F as Fragment, s as styled } from "./PageViewer-d914b069.js";
import { V as VisibilitySensor } from "./visibility-sensor-57589aaf.js";
const Box = styled.svg`
  border: "2px solid red";
  margin: 2px;
  outline: none;
`;
const orbitalDiagramInput = React.memo(function orbitalDiagramInput2(props) {
  let { name, id, SVs, actions, callAction } = useDoenetRenderer(props);
  let selectedRowIndex0 = SVs.selectedRowIndex - 1;
  let selectedBoxIndex0 = SVs.selectedBoxIndex - 1;
  orbitalDiagramInput2.ignoreActionsWithoutCore = () => true;
  let fixed = reactExports.createRef(SVs.fixed);
  fixed.current = SVs.fixed;
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
  function setSelectedRow(index) {
    if (!fixed.current) {
      callAction({
        action: actions.selectRow,
        args: { index: Number(index) + 1 }
      });
    }
  }
  function setSelectedBox(index, rowNum) {
    if (!fixed.current) {
      if (rowNum !== void 0) {
        callAction({
          action: actions.selectRow,
          args: { index: Number(rowNum) + 1 }
        });
      }
      callAction({
        action: actions.selectBox,
        args: { index: Number(index) + 1 }
      });
    }
  }
  function updateRowText(newValue) {
    if (!fixed.current) {
      callAction({
        action: actions.updateRowText,
        args: { newValue }
      });
    }
  }
  function deselect(e) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j;
    if (((_a = e.relatedTarget) == null ? void 0 : _a.id) !== `orbitaladdrow${id}` && ((_b = e.relatedTarget) == null ? void 0 : _b.id) !== `orbitalremoverow${id}` && ((_c = e.relatedTarget) == null ? void 0 : _c.id) !== `orbitaladdbox${id}` && ((_d = e.relatedTarget) == null ? void 0 : _d.id) !== `orbitaladduparrow${id}` && ((_e = e.relatedTarget) == null ? void 0 : _e.id) !== `orbitaladddownarrow${id}` && ((_f = e.relatedTarget) == null ? void 0 : _f.id) !== `orbitalremovearrow${id}` && ((_g = e.relatedTarget) == null ? void 0 : _g.id) !== `orbitalremovebox${id}`) {
      if (((_h = e.relatedTarget) == null ? void 0 : _h.id) !== `OrbitalText${selectedRowIndex0}${id}` && ((_i = e.relatedTarget) == null ? void 0 : _i.id) !== `OrbitalRow${selectedRowIndex0}${id}` && ((_j = e.relatedTarget) == null ? void 0 : _j.id.substring(0, 10 + id.length)) !== `orbitalbox${id}`) {
        setSelectedRow(-1);
      }
      setSelectedBox(-1);
    }
  }
  let rowsJSX = [];
  for (let [index, row] of Object.entries(SVs.rows)) {
    let rowNumber = SVs.rows.length - index - 1;
    rowsJSX.push(
      /* @__PURE__ */ jsx(
        OrbitalRow,
        {
          updateRowText,
          rowNumber,
          selectedRow: selectedRowIndex0,
          setSelectedRow,
          orbitalText: row.orbitalText,
          boxes: row.boxes,
          selectedBox: selectedBoxIndex0,
          setSelectedBox,
          deselect,
          name: id
        },
        `OrbitalRow${rowNumber}`
      )
    );
  }
  let controls = null;
  if (!SVs.fixed) {
    controls = /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx(
        "button",
        {
          id: `orbitaladdrow${id}`,
          onBlur: (e) => {
            deselect(e);
          },
          onClick: () => {
            callAction({
              action: actions.addRow
            });
          },
          children: "Add Row"
        }
      ),
      /* @__PURE__ */ jsx(
        "button",
        {
          id: `orbitalremoverow${id}`,
          onClick: () => {
            callAction({
              action: actions.removeRow
            });
          },
          children: "Remove Row"
        }
      ),
      /* @__PURE__ */ jsx(
        "button",
        {
          id: `orbitaladdbox${id}`,
          onBlur: (e) => {
            deselect(e);
          },
          onClick: () => {
            callAction({
              action: actions.addBox
            });
          },
          children: "Add Box"
        }
      ),
      /* @__PURE__ */ jsx(
        "button",
        {
          id: `orbitalremovebox${id}`,
          onBlur: (e) => {
            deselect(e);
          },
          onClick: () => {
            callAction({
              action: actions.removeBox
            });
          },
          children: "Remove Box"
        }
      ),
      /* @__PURE__ */ jsx(
        "button",
        {
          id: `orbitaladduparrow${id}`,
          onBlur: (e) => {
            deselect(e);
          },
          onClick: () => {
            callAction({
              action: actions.addUpArrow
            });
          },
          children: "Add Up Arrow"
        }
      ),
      /* @__PURE__ */ jsx(
        "button",
        {
          id: `orbitaladddownarrow${id}`,
          onBlur: (e) => {
            deselect(e);
          },
          onClick: () => {
            callAction({
              action: actions.addDownArrow
            });
          },
          children: "Add Down Arrow"
        }
      ),
      /* @__PURE__ */ jsx(
        "button",
        {
          id: `orbitalremovearrow${id}`,
          onBlur: (e) => {
            deselect(e);
          },
          onClick: () => {
            callAction({
              action: actions.removeArrow
            });
          },
          children: "Remove Arrow"
        }
      )
    ] });
  }
  return /* @__PURE__ */ jsx(VisibilitySensor, { partialVisibility: true, onChange: onChangeVisibility, children: /* @__PURE__ */ jsxs(Fragment, { children: [
    controls,
    rowsJSX
  ] }) });
});
const OrbitalRow = React.memo(function OrbitalRow2({
  rowNumber,
  updateRowText,
  selectedRow,
  setSelectedRow,
  orbitalText,
  boxes,
  selectedBox,
  setSelectedBox,
  deselect,
  name
}) {
  let rowStyle = {
    width: "800px",
    height: "44px",
    display: "flex",
    backgroundColor: "#E2E2E2",
    marginTop: "2px",
    marginBottom: "2px",
    padding: "2px",
    border: "white solid 2px"
  };
  if (selectedRow === rowNumber) {
    rowStyle["border"] = "#1A5A99 solid 2px";
  }
  let boxesJSX = [];
  for (let [index, code] of Object.entries(boxes)) {
    let isSelected = false;
    if (selectedRow == rowNumber && selectedBox == index) {
      isSelected = true;
    }
    boxesJSX.push(
      /* @__PURE__ */ jsx(
        OrbitalBox,
        {
          boxNum: index,
          rowNumber,
          arrows: code,
          isSelected,
          setSelectedBox,
          name
        },
        `OrbitalBox${rowNumber}-${index}`
      )
    );
  }
  return /* @__PURE__ */ jsxs(
    "div",
    {
      id: `OrbitalRow${rowNumber}${name}`,
      tabIndex: "-1",
      onClick: () => {
        if (selectedRow !== rowNumber) {
          setSelectedRow(rowNumber);
        }
      },
      onBlur: (e) => {
        deselect(e);
      },
      style: rowStyle,
      children: [
        /* @__PURE__ */ jsx(
          OrbitalText,
          {
            orbitalText,
            rowNumber,
            updateRowText,
            name
          }
        ),
        boxesJSX
      ]
    },
    `OrbitalRow${rowNumber}`
  );
});
const OrbitalText = React.memo(function OrbitalText2({
  rowNumber,
  updateRowText,
  orbitalText,
  name
}) {
  return /* @__PURE__ */ jsx(
    "input",
    {
      id: `OrbitalText${rowNumber}${name}`,
      style: { marginRight: "4px", height: "14px" },
      type: "text",
      size: "4",
      value: orbitalText,
      onChange: (e) => {
        let newValue = e.target.value;
        updateRowText(newValue);
      }
    }
  );
});
const OrbitalBox = React.memo(function OrbitalBox2({
  boxNum,
  arrows = "",
  setSelectedBox,
  isSelected,
  rowNumber,
  name
}) {
  const firstUp = /* @__PURE__ */ jsx(
    "polyline",
    {
      id: `firstUp${boxNum}`,
      points: "6,14 12,6 18,14 12,6 12,35",
      style: { fill: "none", stroke: "black", strokeWidth: "2" }
    },
    `orbitalboxfirstUp${boxNum}`
  );
  const firstDown = /* @__PURE__ */ jsx(
    "polyline",
    {
      id: `firstDown${boxNum}`,
      points: "6,26 12,34 18,26 12,34 12,5",
      style: { fill: "none", stroke: "black", strokeWidth: "2" }
    },
    `orbitalboxfirstDown${boxNum}`
  );
  const secondUp = /* @__PURE__ */ jsx(
    "polyline",
    {
      id: `secondUp${boxNum}`,
      points: "22,14 28,6 34,14 28,6 28,35",
      style: { fill: "none", stroke: "black", strokeWidth: "2" }
    },
    `orbitalboxsecondUp${boxNum}`
  );
  const secondDown = /* @__PURE__ */ jsx(
    "polyline",
    {
      id: `secondDown${boxNum}`,
      points: "22,26 28,34 34,26 28,34 28,5",
      style: { fill: "none", stroke: "black", strokeWidth: "2" }
    },
    `orbitalboxsecondDown${boxNum}`
  );
  const thirdUp = /* @__PURE__ */ jsx(
    "polyline",
    {
      id: `thirdUp${boxNum}`,
      points: "38,14 44,6 50,14 44,6 44,35",
      style: { fill: "none", stroke: "black", strokeWidth: "2" }
    },
    `orbitalboxthirdUp${boxNum}`
  );
  const thirdDown = /* @__PURE__ */ jsx(
    "polyline",
    {
      id: `thirdDown${boxNum}`,
      points: "38,26 44,34 50,26 44,34 44,5",
      style: { fill: "none", stroke: "black", strokeWidth: "2" }
    },
    `orbitalboxthirdDown${boxNum}`
  );
  let arrowsJSX = [];
  let [first, second, third] = arrows.split("");
  if (first == "U") {
    arrowsJSX.push(firstUp);
  }
  if (first == "D") {
    arrowsJSX.push(firstDown);
  }
  if (second == "U") {
    arrowsJSX.push(secondUp);
  }
  if (second == "D") {
    arrowsJSX.push(secondDown);
  }
  if (third == "U") {
    arrowsJSX.push(thirdUp);
  }
  if (third == "D") {
    arrowsJSX.push(thirdDown);
  }
  let boxWidth = 40;
  if (third) {
    boxWidth = 56;
  }
  let boxColor = "black";
  let strokeWidth = "2px";
  if (isSelected) {
    boxColor = "#1A5A99";
    strokeWidth = "6px";
  }
  return /* @__PURE__ */ jsxs(
    Box,
    {
      id: `orbitalbox${name}${rowNumber}-${boxNum}`,
      tabIndex: "-1",
      onClick: (e) => {
        setSelectedBox(boxNum, rowNumber);
        e.stopPropagation();
      },
      width: boxWidth,
      height: "40",
      children: [
        /* @__PURE__ */ jsx(
          "rect",
          {
            x: "0",
            y: "0",
            rx: "4",
            ry: "4",
            width: boxWidth,
            height: "40",
            style: {
              fill: "white",
              stroke: boxColor,
              strokeWidth,
              fillOpacity: "1",
              strokeOpacity: "1"
            }
          }
        ),
        arrowsJSX
      ]
    },
    `orbitalbox${boxNum}`
  );
});
export {
  orbitalDiagramInput as default
};
