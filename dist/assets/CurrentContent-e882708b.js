import { m as Recoil_index_22, b as jsxs, j as jsx, a5 as CheckboxButton } from "./PageViewer-d914b069.js";
import { s as showOverdueAtom, a as showCompletedAtom } from "./Next7Days-583735fe.js";
import "./CourseToolHandler-1976a165.js";
import "./index-badc91d0.js";
import "./index-a634ad2f.js";
import "./index-72e7d0b2.js";
import "./index.esm-b50f3a4c.js";
import "./extends-d9a14db7.js";
import "./setPrototypeOf-be240aa9.js";
import "./inheritsLoose-000f9e77.js";
/* empty css               */import "./ButtonGroup-b585a5ef.js";
import "./RoleDropdown-ece1f3f8.js";
import "./DropdownMenu-d8160745.js";
import "./defineProperty-2975ceb9.js";
import "./emotion-react.browser.esm-dfafc3e8.js";
import "./emotion-element-6a883da9.browser.esm-2d3713e7.js";
function CurrentContent() {
  const [overdue, setOverdue] = Recoil_index_22(showOverdueAtom);
  const [completed, setCompleted] = Recoil_index_22(showCompletedAtom);
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx(
        CheckboxButton,
        {
          style: { marginRight: "2px" },
          checked: completed,
          onClick: (e) => {
            setCompleted(!completed);
          }
        }
      ),
      "Show Completed",
      " "
    ] }),
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx(
        CheckboxButton,
        {
          style: { marginRight: "2px" },
          checked: overdue,
          onClick: (e) => {
            setOverdue(!overdue);
          }
        }
      ),
      "Show Overdue",
      " "
    ] })
  ] });
}
export {
  CurrentContent as default
};
