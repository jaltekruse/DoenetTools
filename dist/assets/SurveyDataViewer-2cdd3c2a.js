import { t as Recoil_index_20, W as searchParamAtomFamily, r as reactExports, at as serializedComponentsReviver, j as jsx, b as jsxs, h as axios } from "./PageViewer-d914b069.js";
function SurveyDataViewer() {
  let doenetId = Recoil_index_20(searchParamAtomFamily("doenetId"));
  let driveId = Recoil_index_20(searchParamAtomFamily("driveId"));
  let [stateVariableData, setStateVariableData] = reactExports.useState(null);
  reactExports.useEffect(() => {
    async function getData(doenetId2) {
      let { data } = await axios.get("/api/getSurveyData.php", {
        params: { doenetId: doenetId2 }
      });
      setStateVariableData(data.responses);
    }
    if (doenetId) {
      getData(doenetId);
    }
  }, [doenetId]);
  if (!driveId || !stateVariableData) {
    return null;
  }
  let columns = ["User's Name", "Email", "Student Id"];
  for (let svObj of stateVariableData) {
    let svars = JSON.parse(svObj.stateVariables, serializedComponentsReviver);
    for (let key of Object.keys(svars)) {
      if (!columns.includes(key)) {
        let value = svars[key];
        if ((value == null ? void 0 : value.immediateValue) || (value == null ? void 0 : value.value) || (value == null ? void 0 : value.allSelectedIndices)) {
          columns.push(key);
        }
      }
    }
  }
  let rowsJSX = [];
  for (let [x, svObj] of Object.entries(stateVariableData)) {
    let svars = JSON.parse(svObj.stateVariables, serializedComponentsReviver);
    let cellsJSX = [];
    for (let [i, key] of Object.entries(columns)) {
      if (i > 2) {
        let value = svars[key];
        let response = "N/A";
        if (value == null ? void 0 : value.immediateValue) {
          response = value.immediateValue;
        } else if (value == null ? void 0 : value.value) {
          response = value.value;
        } else if (value == null ? void 0 : value.allSelectedIndices) {
          response = value.allSelectedIndices[0];
        }
        cellsJSX.push(/* @__PURE__ */ jsx("td", { children: response }, `survey${x}-${i}`));
      }
    }
    cellsJSX.unshift(/* @__PURE__ */ jsx("td", { children: svObj.studentId }));
    cellsJSX.unshift(/* @__PURE__ */ jsx("td", { children: svObj.email }));
    cellsJSX.unshift(/* @__PURE__ */ jsx("td", { children: `${svObj.firstName} ${svObj.lastName}` }));
    rowsJSX.push(
      /* @__PURE__ */ jsx("tr", { style: { borderBottom: "1pt solid var(--canvastext)" }, children: cellsJSX })
    );
  }
  let thJSX = [];
  for (let [i, column] of Object.entries(columns)) {
    thJSX.push(
      /* @__PURE__ */ jsx("th", { style: { width: "150px" }, children: column }, `surveyHead${i}`)
    );
  }
  return /* @__PURE__ */ jsx("div", { style: { margin: "5px" }, children: /* @__PURE__ */ jsxs("table", { style: { borderCollapse: "collapse" }, children: [
    /* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsx("tr", { style: { borderBottom: "2pt solid var(--canvastext)" }, children: thJSX }) }),
    /* @__PURE__ */ jsx("tbody", { children: rowsJSX })
  ] }) });
}
export {
  SurveyDataViewer as default
};
