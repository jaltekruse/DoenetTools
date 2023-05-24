import { o as Recoil_index_24, r as reactExports, b as jsxs, j as jsx, B as Button } from "./PageViewer-d914b069.js";
import { u as useDropzone } from "./index-9598b80e.js";
import { p as parse } from "./index-ab0d9fd5.js";
import { processGradesAtom, headersGradesAtom, entriesGradesAtom } from "./GradebookAssignment-9679e89e.js";
import { B as ButtonGroup } from "./ButtonGroup-b585a5ef.js";
import { C as CollapseSection } from "./CollapseSection-5f783e94.js";
import "./Gradebook-7b015fa4.js";
import "./RoleDropdown-ece1f3f8.js";
import "./DropdownMenu-d8160745.js";
import "./defineProperty-2975ceb9.js";
import "./setPrototypeOf-be240aa9.js";
import "./extends-d9a14db7.js";
import "./emotion-react.browser.esm-dfafc3e8.js";
import "./emotion-element-6a883da9.browser.esm-2d3713e7.js";
function GradeUpload() {
  const setProcess = Recoil_index_24(processGradesAtom);
  const setHeaders = Recoil_index_24(headersGradesAtom);
  const setEntries = Recoil_index_24(entriesGradesAtom);
  const onDrop = reactExports.useCallback(
    (file) => {
      const reader = new FileReader();
      reader.onabort = () => {
      };
      reader.onerror = () => {
      };
      reader.onload = () => {
        parse(reader.result, { comment: "#" }, function(err, data) {
          setHeaders(data[0]);
          data.shift();
          setEntries(data);
          setProcess("Upload Choice Table");
        });
      };
      reader.readAsText(file[0]);
    },
    [setEntries, setHeaders, setProcess]
  );
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });
  if (isDragActive) {
    setProcess("Assignment Table");
  }
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsxs("div", { ...getRootProps(), children: [
      /* @__PURE__ */ jsx("input", { ...getInputProps() }),
      isDragActive ? /* @__PURE__ */ jsx("p", { children: "Drop the files here" }) : /* @__PURE__ */ jsx(ButtonGroup, { vertical: true, children: /* @__PURE__ */ jsx(
        Button,
        {
          width: "menu",
          value: "Import CSV file",
          onClick: () => setProcess("Assignment Table")
        }
      ) })
    ] }, "drop"),
    /* @__PURE__ */ jsx("br", {}),
    /* @__PURE__ */ jsxs(CollapseSection, { title: "Formatting Instructions", collapsed: true, children: [
      /* @__PURE__ */ jsx("p", { children: "Your file needs to contain a Email column. The parser will ignore columns where the points do not match the points possible. e.g. if a assignment has 30 points possible you can only select from columns with 30 points in their second row. This is done to match canvas export formatting." }),
      /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("b", { children: "Email (required)" }) }),
      /* @__PURE__ */ jsxs("div", { children: [
        "First column is ",
        /* @__PURE__ */ jsx("strong", { children: "Name" })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        "Second row is ",
        /* @__PURE__ */ jsx("strong", { children: "points possible" })
      ] })
    ] })
  ] });
}
export {
  GradeUpload as default
};
