import { t as Recoil_index_20, W as searchParamAtomFamily, a1 as courseIdAtom, b as jsxs, j as jsx } from "./PageViewer-d914b069.js";
import { AssignmentSettings } from "./SelectedActivity-9f15f97a.js";
import { A as AssignUnassignActivity } from "./SettingComponents-423b898c.js";
import "./ActionButton-1e9c5f7a.js";
import "./ActionButtonGroup-f7bafe40.js";
import "./ButtonGroup-b585a5ef.js";
import "./RoleDropdown-ece1f3f8.js";
import "./DropdownMenu-d8160745.js";
import "./defineProperty-2975ceb9.js";
import "./setPrototypeOf-be240aa9.js";
import "./extends-d9a14db7.js";
import "./emotion-react.browser.esm-dfafc3e8.js";
import "./emotion-element-6a883da9.browser.esm-2d3713e7.js";
import "./Textfield-0be9f722.js";
import "./DateTime-4edca487.js";
import "./moment-feb1c730.js";
import "./IncrementMenu-19c70527.js";
import "./RelatedItems-8a9ec536.js";
import "./useSaveDraft-b85dfaeb.js";
import "./EditorViewerRecoil-84be9f2a.js";
function AssignmentSettingsMenu() {
  const doenetId = Recoil_index_20(searchParamAtomFamily("doenetId"));
  const courseId = Recoil_index_20(courseIdAtom);
  return /* @__PURE__ */ jsxs("div", { style: { paddingTop: "6px", paddingBottom: "6px" }, children: [
    /* @__PURE__ */ jsx(AssignUnassignActivity, { doenetId, courseId }),
    /* @__PURE__ */ jsx("br", {}),
    /* @__PURE__ */ jsx(
      AssignmentSettings,
      {
        effectiveRole: "instructor",
        doenetId,
        courseId
      }
    )
  ] });
}
export {
  AssignmentSettingsMenu as default
};
