import { a3 as useToast, o as Recoil_index_24, t as Recoil_index_20, W as searchParamAtomFamily, q as useCourse, r as reactExports, a0 as Recoil_index_31, h as axios, X as coursePermissionsAndSettings, b as jsxs, j as jsx, B as Button, a5 as CheckboxButton, aA as Recoil_index_8, a4 as toastType } from "./PageViewer-d914b069.js";
import { u as useDropzone } from "./index-9598b80e.js";
import { p as parse } from "./index-ab0d9fd5.js";
import { B as ButtonGroup } from "./ButtonGroup-b585a5ef.js";
import { C as CollapseSection } from "./CollapseSection-5f783e94.js";
const peopleTableDataAtom = Recoil_index_8({
  key: "peopleTableDataAtom",
  default: []
});
const processAtom = Recoil_index_8({
  key: "processAtom",
  default: "Idle"
});
const validHeaders = Object.freeze({
  Email: "Email",
  FirstName: "FirstName",
  LastName: "LastName",
  Section: "Section",
  ExternalId: "ExternalId"
});
const headersAtom = Recoil_index_8({
  key: "headersAtom",
  default: []
  // effects: [
  //   ({ onSet, setSelf }) => {
  //     onSet((newValue) => {
  //       setSelf(
  //         newValue.reduce((valid, candidate) => {
  //           if (validHeaders[candidate] !== undefined)
  //             return [...valid, candidate];
  //           return valid;
  //         }, []),
  //       );
  //     });
  //   },
  // ],
});
const entriesAtom = Recoil_index_8({
  key: "entriesAtom",
  default: []
});
const enrolllearnerAtom = Recoil_index_8({
  key: "enrolllearnerAtom",
  default: ""
});
const csvPeopleProcess = Object.freeze({
  IDLE: "idle",
  SELECT: "select",
  PREVIEW: "preview"
});
function LoadPeople({ style }) {
  const addToast = useToast();
  const setProcess = Recoil_index_24(processAtom);
  const setHeaders = Recoil_index_24(headersAtom);
  const setEntries = Recoil_index_24(entriesAtom);
  const courseId = Recoil_index_20(searchParamAtomFamily("courseId"));
  let { canAutoEnroll } = useCourse(courseId);
  const [localAutoEnroll, setLocalAutoEnroll] = reactExports.useState(canAutoEnroll);
  reactExports.useEffect(() => {
    let value = false;
    if (canAutoEnroll == "1") {
      value = true;
    }
    setLocalAutoEnroll(value);
  }, [canAutoEnroll]);
  const setAutoEnroll = Recoil_index_31(
    (set) => async (courseId2, autoEnroll) => {
      let canAutoEnroll2 = 0;
      if (autoEnroll) {
        canAutoEnroll2 = 1;
      }
      await axios.post("/api/modifyCourse.php", {
        courseId: courseId2,
        canAutoEnroll: canAutoEnroll2
      });
      set(coursePermissionsAndSettings, (prev) => {
        let next = { ...prev };
        next.canAutoEnroll = canAutoEnroll2;
        return next;
      });
    }
  );
  const onDrop = reactExports.useCallback(
    (file) => {
      const reader = new FileReader();
      reader.onabort = () => {
      };
      reader.onerror = () => {
      };
      reader.onload = () => {
        parse(reader.result, { comment: "#" }, function(err, data) {
          if (err == null ? void 0 : err.message) {
            addToast(
              `${err.message}. Please reformat and try again`,
              toastType.ERROR
            );
          } else {
            setHeaders(data[0]);
            data.shift();
            setEntries(data);
            setProcess(csvPeopleProcess.PREVIEW);
          }
        });
      };
      reader.readAsText(file[0]);
    },
    [setEntries, setHeaders, setProcess]
  );
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });
  return /* @__PURE__ */ jsxs("div", { style, children: [
    /* @__PURE__ */ jsxs("div", { ...getRootProps(), children: [
      /* @__PURE__ */ jsx("input", { ...getInputProps(), "data-test": "Import CSV file" }),
      isDragActive ? /* @__PURE__ */ jsx("p", { children: "Drop the files here" }) : /* @__PURE__ */ jsx(ButtonGroup, { vertical: true, children: /* @__PURE__ */ jsx(Button, { width: "menu", value: "Import CSV file" }) })
    ] }, "drop"),
    /* @__PURE__ */ jsx("div", { style: { height: "4px" } }),
    /* @__PURE__ */ jsxs(
      CollapseSection,
      {
        title: "Formatting Instructions",
        collapsed: true,
        style: { marginTop: "12px" },
        children: [
          /* @__PURE__ */ jsx("p", { children: "Your file needs to contain an email address. The parser will ignore columns which are not listed." }),
          /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("b", { children: "Email (required)" }) }),
          /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("b", { children: "ExternalId" }) }),
          /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("b", { children: "FirstName" }) }),
          /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("b", { children: "LastName" }) }),
          /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("b", { children: "Section" }) })
        ]
      }
    ),
    /* @__PURE__ */ jsxs("p", { style: { display: "flex" }, children: [
      /* @__PURE__ */ jsx(
        CheckboxButton,
        {
          dataTest: "Auto Enroll",
          checked: localAutoEnroll,
          onClick: () => {
            setLocalAutoEnroll(!localAutoEnroll);
            setAutoEnroll(courseId, !localAutoEnroll);
          }
        }
      ),
      " ",
      /* @__PURE__ */ jsx("span", { style: { marginLeft: "10px" }, children: "Auto Enrollment" }),
      " "
    ] })
  ] });
}
export {
  csvPeopleProcess,
  LoadPeople as default,
  enrolllearnerAtom,
  entriesAtom,
  headersAtom,
  peopleTableDataAtom,
  processAtom,
  validHeaders
};
