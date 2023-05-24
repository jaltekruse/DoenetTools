import { R as React, bx as useDoenetRenderer, r as reactExports, j as jsx, F as Fragment, s as styled, b as jsxs } from "./PageViewer-d914b069.js";
import { V as VisibilitySensor } from "./visibility-sensor-57589aaf.js";
const Box = styled.svg`
  border: "2px solid red";
  margin: 2px;
  outline: none;
`;
const orbitalDiagram = React.memo(function orbitalDiagram2(props) {
  let { name, id, SVs, actions, callAction } = useDoenetRenderer(props);
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
  if (SVs.hidden || !SVs.value) {
    return null;
  }
  let rows = [...SVs.value].reverse();
  let rowsJSX = [];
  for (let [index, row] of Object.entries(rows)) {
    let rowNumber = rows.length - index - 1;
    rowsJSX.push(
      /* @__PURE__ */ jsx(
        OrbitalRow,
        {
          rowNumber,
          orbitalText: row.orbitalText,
          boxes: row.boxes,
          name: id
        },
        `OrbitalRow${rowNumber}`
      )
    );
  }
  return /* @__PURE__ */ jsx(VisibilitySensor, { partialVisibility: true, onChange: onChangeVisibility, children: /* @__PURE__ */ jsx(Fragment, { children: rowsJSX }) });
});
const OrbitalRow = React.memo(function OrbitalRow2({
  rowNumber,
  orbitalText,
  boxes,
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
  let boxesJSX = [];
  for (let [index, code] of Object.entries(boxes)) {
    boxesJSX.push(
      /* @__PURE__ */ jsx(
        OrbitalBox,
        {
          boxNum: index,
          rowNumber,
          arrows: code,
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
      style: rowStyle,
      children: [
        /* @__PURE__ */ jsx(
          OrbitalText,
          {
            orbitalText,
            rowNumber,
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
  orbitalText,
  name
}) {
  return /* @__PURE__ */ jsx(
    "div",
    {
      id: `OrbitalText${rowNumber}${name}`,
      style: {
        marginRight: "4px",
        height: "14px",
        width: "40px",
        backgroundColor: "white"
      },
      type: "text",
      size: "4",
      children: orbitalText
    }
  );
});
const OrbitalBox = React.memo(function OrbitalBox2({
  boxNum,
  arrows = "",
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
  return /* @__PURE__ */ jsxs(
    Box,
    {
      id: `orbitalbox${name}${rowNumber}-${boxNum}`,
      tabIndex: "-1",
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
  orbitalDiagram as default
};
