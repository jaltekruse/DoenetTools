import { t as Recoil_index_20, W as searchParamAtomFamily, aa as coursePermissionsAndSettingsByCourseId, b as jsxs, j as jsx, s as styled } from "./PageViewer-d914b069.js";
import { a as AddRole, M as MangeRoles } from "./SettingComponents-71d0c77d.js";
import "./CourseToolHandler-1976a165.js";
import "./index-badc91d0.js";
import "./index-a634ad2f.js";
import "./index-72e7d0b2.js";
import "./index.esm-b50f3a4c.js";
import "./extends-d9a14db7.js";
import "./setPrototypeOf-be240aa9.js";
import "./inheritsLoose-000f9e77.js";
/* empty css               */import "./ButtonGroup-b585a5ef.js";
import "./CollapseSection-5f783e94.js";
import "./util-2e804dda.js";
import "./DateTime-4edca487.js";
import "./moment-feb1c730.js";
import "./DropdownMenu-d8160745.js";
import "./defineProperty-2975ceb9.js";
import "./emotion-react.browser.esm-dfafc3e8.js";
import "./emotion-element-6a883da9.browser.esm-2d3713e7.js";
import "./RelatedItems-8a9ec536.js";
import "./RoleDropdown-ece1f3f8.js";
import "./Textfield-0be9f722.js";
const Conainer = styled.div`
  padding: 10px;
`;
function RolesEditor() {
  const courseId = Recoil_index_20(searchParamAtomFamily("courseId"));
  const { isAdmin } = Recoil_index_20(
    coursePermissionsAndSettingsByCourseId(courseId)
  );
  if (isAdmin !== "1")
    return null;
  return /* @__PURE__ */ jsxs(Conainer, { children: [
    /* @__PURE__ */ jsx("h2", { children: "Edit Role Permissions" }),
    /* @__PURE__ */ jsx(AddRole, { courseId }),
    /* @__PURE__ */ jsx(MangeRoles, { courseId })
  ] });
}
export {
  RolesEditor as default
};
