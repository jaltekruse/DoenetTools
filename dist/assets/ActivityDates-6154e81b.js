import { t as Recoil_index_20, W as searchParamAtomFamily, a1 as courseIdAtom, j as jsx, F as Fragment, b as jsxs } from "./PageViewer-d914b069.js";
import { u as useActivity } from "./SettingComponents-423b898c.js";
import { e as effectivePermissionsByCourseId } from "./RoleDropdown-ece1f3f8.js";
import "./DateTime-4edca487.js";
import "./moment-feb1c730.js";
import "./IncrementMenu-19c70527.js";
import "./DropdownMenu-d8160745.js";
import "./defineProperty-2975ceb9.js";
import "./setPrototypeOf-be240aa9.js";
import "./extends-d9a14db7.js";
import "./emotion-react.browser.esm-dfafc3e8.js";
import "./emotion-element-6a883da9.browser.esm-2d3713e7.js";
import "./RelatedItems-8a9ec536.js";
import "./ActionButtonGroup-f7bafe40.js";
import "./ActionButton-1e9c5f7a.js";
import "./Textfield-0be9f722.js";
import "./useSaveDraft-b85dfaeb.js";
import "./EditorViewerRecoil-84be9f2a.js";
function ActivityDates() {
  const doenetId = Recoil_index_20(searchParamAtomFamily("doenetId"));
  const courseId = Recoil_index_20(courseIdAtom);
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx(AssignmentSettings, { doenetId, courseId }) });
}
function AssignmentSettings({ doenetId, courseId }) {
  const { canModifyActivitySettings, canViewActivitySettings } = Recoil_index_20(
    effectivePermissionsByCourseId(courseId)
  );
  const {
    value: {
      numberOfAttemptsAllowed,
      timeLimit,
      assignedDate,
      dueDate
      //totalPointsOrPercent,
    }
  } = useActivity(courseId, doenetId);
  if (canViewActivitySettings === "1") {
    return /* @__PURE__ */ jsx(Fragment, {});
  }
  let nAttemptsAllowed = numberOfAttemptsAllowed;
  if (nAttemptsAllowed === null) {
    nAttemptsAllowed = "unlimited";
  }
  let timeLimitJSX = null;
  if (timeLimit !== null) {
    timeLimitJSX = /* @__PURE__ */ jsxs("p", { children: [
      "Time Limit: ",
      timeLimit,
      " minutes"
    ] });
  }
  let assignedDateJSX = null;
  if (assignedDate !== null) {
    assignedDateJSX = /* @__PURE__ */ jsxs("p", { style: { content: "A" }, children: [
      "Assigned: ",
      assignedDate
    ] });
  }
  let dueDateJSX = /* @__PURE__ */ jsx("p", { children: "No Due Date" });
  if (dueDate !== null) {
    dueDateJSX = /* @__PURE__ */ jsxs("p", { children: [
      "Due: ",
      dueDate
    ] });
  }
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs("div", { children: [
    assignedDateJSX,
    dueDateJSX,
    timeLimitJSX,
    /* @__PURE__ */ jsxs("p", { children: [
      "Attempts Allowed: ",
      nAttemptsAllowed
    ] })
  ] }) });
}
export {
  AssignmentSettings,
  ActivityDates as default
};
