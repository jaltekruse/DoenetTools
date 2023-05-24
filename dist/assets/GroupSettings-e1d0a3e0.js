import { t as Recoil_index_20, W as searchParamAtomFamily, bv as Recoil_index_25, a3 as useToast, r as reactExports, h as axios, a4 as toastType, a0 as Recoil_index_31, b as jsxs, j as jsx, B as Button, b0 as Recoil_index_10 } from "./PageViewer-d914b069.js";
import { p as parse } from "./index-ab0d9fd5.js";
import { u as useDropzone } from "./index-9598b80e.js";
import { B as ButtonGroup } from "./ButtonGroup-b585a5ef.js";
import { C as CollapseSection } from "./CollapseSection-5f783e94.js";
function groupReducer(state, action) {
  switch (action.type) {
    case "mount":
      return { ...action.payload };
    case "min":
      return {
        ...state,
        min: action.payload.min > 1 ? action.payload.min : 1,
        max: state.max < action.payload.min ? action.payload.min : state.max,
        pref: state.pref < action.payload.min ? action.payload.min : state.pref
      };
    case "max":
      return {
        ...state,
        min: state.min,
        max: state.min <= action.payload.max ? action.payload.max : state.max,
        pref: state.pref < action.payload.max ? action.payload.max : state.pref
      };
    case "pref":
      return {
        ...state,
        pref: state.min <= action.payload.pref && action.payload.pref <= state.max ? action.payload.pref : state.pref
      };
    case "preAssigned":
      try {
        axios.post("/api/updateGroupSettings.php", {
          ...state,
          preAssigned: action.payload.preAssigned,
          doenetId: action.payload.doenetId
        });
      } catch (error) {
        console.error(error);
      }
      return { ...state, preAssigned: action.payload.preAssigned };
    case "isReleased":
      return { ...state, isReleased: action.payload.isReleased };
    case "save":
      try {
        axios.post("/api/updateGroupSettings.php", {
          ...state,
          doenetId: action.payload.doenetId
        });
      } catch (error) {
        console.error(error);
      }
      return state;
    default:
      throw new Error("Invaild groupSettings dispach");
  }
}
function shuffle(array) {
  var m = array.length, t, i;
  while (m) {
    i = Math.floor(Math.random() * m--);
    t = array[m];
    array[m] = array[i];
    array[i] = t;
  }
  return array;
}
const csvGroups = Recoil_index_10({
  key: "csvGroups",
  default: { namesByGroup: [], emailsByGroup: [] }
});
function GroupSettings() {
  const doenetId = Recoil_index_20(searchParamAtomFamily("doenetId"));
  const { emailsByGroup } = Recoil_index_20(csvGroups(doenetId));
  const reset = Recoil_index_25(csvGroups(doenetId));
  const addToast = useToast();
  const [{ min, max, pref, preAssigned, isReleased }, dispach] = reactExports.useReducer(
    groupReducer,
    {
      min: 0,
      max: 0,
      pref: 0,
      preAssigned: 0,
      isReleased: 0
    }
  );
  const assignCollection = reactExports.useCallback(
    async (doenetId2, grouping) => {
      try {
        const {
          data: { entries }
        } = await axios.get("/api/loadCollection.php", {
          params: { doenetId: doenetId2 }
        });
        if ((entries == null ? void 0 : entries.length) > 0) {
          const shuffledEntries = shuffle(entries);
          const shuffledGroups = shuffle([...grouping]);
          axios.post("/api/assignCollection.php", {
            doenetId: doenetId2,
            groups: JSON.stringify(shuffledGroups),
            entries: JSON.stringify(shuffledEntries)
          });
          dispach({ type: "isReleased", payload: { isReleased: "1" } });
        } else {
          addToast(
            "Please add at least one entry to the collection before assigning",
            toastType.ERROR
          );
        }
      } catch (error) {
        console.error(error);
      }
    },
    [addToast]
  );
  reactExports.useCallback(() => {
  }, []);
  const onDrop = Recoil_index_31(
    ({ set }) => (file) => {
      const reader = new FileReader();
      reader.onabort = () => {
      };
      reader.onerror = () => {
      };
      reader.onload = () => {
        parse(reader.result, { comment: "#" }, function(err, data) {
          if (err) {
            console.error(err);
            addToast(`CSV invalid – Error: ${err}`, toastType.ERROR);
          } else {
            const headers = data.shift();
            const emailColIdx = headers.indexOf("Email");
            const groupColIdx = headers.indexOf("Group Number");
            const firstNameIdx = headers.indexOf("First Name");
            const lastNameIdx = headers.indexOf("Last Name");
            const newCSVGroups = { namesByGroup: [], emailsByGroup: [] };
            if (emailColIdx === -1) {
              addToast('File missing "Email" column header', toastType.ERROR);
            } else if (groupColIdx === -1) {
              addToast(
                'File missing "Group Number" column header',
                toastType.ERROR
              );
            } else {
              for (let studentLine in data) {
                let studentData = data[studentLine];
                let groupNumber = studentData[groupColIdx] - 1;
                if (!newCSVGroups.emailsByGroup[groupNumber]) {
                  newCSVGroups.emailsByGroup[groupNumber] = [];
                  newCSVGroups.namesByGroup[groupNumber] = [];
                }
                newCSVGroups.emailsByGroup[groupNumber].push(
                  studentData[emailColIdx]
                );
                newCSVGroups.namesByGroup[groupNumber].push({
                  firstName: studentData[firstNameIdx] ?? "",
                  lastName: studentData[lastNameIdx] ?? ""
                });
              }
            }
            for (let i = 0; i < newCSVGroups.emailsByGroup.length; i++) {
              if (!newCSVGroups.emailsByGroup[i]) {
                newCSVGroups.emailsByGroup[i] = [];
                newCSVGroups.namesByGroup[i] = [];
              }
            }
            set(csvGroups(doenetId), newCSVGroups);
          }
        });
      };
      reader.readAsText(file[0]);
    },
    [addToast, doenetId]
  );
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });
  reactExports.useEffect(() => {
    let mounted = true;
    async function loadData(doenetId2) {
      try {
        const resp = await axios.get("/api/loadGroupSettings.php", {
          params: { doenetId: doenetId2 }
        });
        if (mounted) {
          dispach({ type: "mount", payload: resp.data });
        }
      } catch (error) {
        console.error(error);
      }
    }
    if (doenetId !== "") {
      loadData(doenetId);
    }
    return () => {
      mounted = false;
      reset();
    };
  }, [doenetId, reset]);
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsxs("label", { children: [
      "Pre-Assigned Groups:",
      /* @__PURE__ */ jsx(
        "input",
        {
          type: "checkbox",
          checked: preAssigned === "1",
          value: preAssigned === "1",
          onChange: (e) => {
            dispach({
              type: "preAssigned",
              payload: { preAssigned: e.target.checked ? "1" : "0", doenetId }
            });
          }
        }
      )
    ] }),
    /* @__PURE__ */ jsx("br", {}),
    preAssigned === "1" ? /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsxs("div", { ...getRootProps(), children: [
        /* @__PURE__ */ jsx("input", { ...getInputProps() }),
        isDragActive ? /* @__PURE__ */ jsx("p", { children: "Drop files here" }) : /* @__PURE__ */ jsx(ButtonGroup, { children: /* @__PURE__ */ jsx(Button, { value: "Upload CSV", width: "menu" }) })
      ] }, "drop"),
      /* @__PURE__ */ jsx("br", {}),
      /* @__PURE__ */ jsxs(CollapseSection, { title: "Formatting Instructions", collapsed: true, children: [
        /* @__PURE__ */ jsx("p", { children: "Your file needs to contain email address and group number columns. They can be in any order, but the headers are case sensitive." }),
        /* @__PURE__ */ jsx("p", { children: "Name fields are displayed for convenience – only required data is used to assign the Collection" }),
        /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("b", { children: "First Name" }) }),
        /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("b", { children: "Last Name" }) }),
        /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("b", { children: "Email (required)" }) }),
        /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("b", { children: "Group Number (required)" }) }),
        /* @__PURE__ */ jsx("p", { children: "NOTE: The parser will ignore columns which are not listed." })
      ] })
    ] }) : /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsxs("label", { children: [
        "Min Studnets:",
        /* @__PURE__ */ jsx(
          "input",
          {
            type: "number",
            value: min,
            onChange: (e) => {
              dispach({ type: "min", payload: { min: e.target.value } });
            }
          }
        )
      ] }, "min"),
      /* @__PURE__ */ jsx("br", {}),
      /* @__PURE__ */ jsxs("label", { children: [
        "Max Students:",
        /* @__PURE__ */ jsx(
          "input",
          {
            type: "number",
            value: max,
            onChange: (e) => {
              dispach({ type: "max", payload: { max: e.target.value } });
            }
          }
        )
      ] }, "max"),
      /* @__PURE__ */ jsx("br", {}),
      /* @__PURE__ */ jsxs("label", { children: [
        "Preferred Students:",
        /* @__PURE__ */ jsx(
          "input",
          {
            type: "number",
            value: pref,
            onChange: (e) => {
              dispach({ type: "pref", payload: { pref: e.target.value } });
            }
          }
        )
      ] }, "pref"),
      /* @__PURE__ */ jsx("br", {})
    ] }),
    /* @__PURE__ */ jsx("br", {}),
    /* @__PURE__ */ jsxs(ButtonGroup, { vertical: true, children: [
      preAssigned === "1" ? null : /* @__PURE__ */ jsx(
        Button,
        {
          width: "menu",
          value: "Save",
          onClick: () => {
            dispach({ type: "save", payload: { doenetId } });
          }
        }
      ),
      /* @__PURE__ */ jsx(
        Button,
        {
          alert: true,
          disabled: isReleased === "1",
          width: "menu",
          value: "Assign Collection",
          onClick: () => {
            assignCollection(doenetId, emailsByGroup);
          }
        }
      )
    ] })
  ] });
}
export {
  csvGroups,
  GroupSettings as default
};
