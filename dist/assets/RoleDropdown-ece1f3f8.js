import { b0 as Recoil_index_10, b1 as Recoil_index_11, b5 as courseRolePermissionsByCourseIdRoleId, aa as coursePermissionsAndSettingsByCourseId, t as Recoil_index_20, W as searchParamAtomFamily, b6 as courseRolesByCourseId, j as jsx } from "./PageViewer-d914b069.js";
import { D as DropdownMenu } from "./DropdownMenu-d8160745.js";
const effectiveRoleIdByCourseId = Recoil_index_10({
  key: "effectiveRoleId",
  default: null
});
const effectivePermissionsByCourseId = Recoil_index_11({
  key: "effectivePermissions",
  get: (courseId) => ({ get }) => {
    const roleId = get(effectiveRoleIdByCourseId(courseId));
    if (roleId !== null) {
      return get(courseRolePermissionsByCourseIdRoleId({ courseId, roleId }));
    }
    return get(coursePermissionsAndSettingsByCourseId(courseId));
  }
});
function RoleDropdown({
  label,
  width = "menu",
  maxMenuHeight = "200px",
  defaultRoleId,
  valueRoleId,
  onChange = () => {
  },
  vertical,
  disabled
}) {
  const courseId = Recoil_index_20(searchParamAtomFamily("courseId")) ?? "";
  const roles = Recoil_index_20(courseRolesByCourseId(courseId));
  const valueIndex = valueRoleId ? roles.findIndex(({ roleId }) => roleId === valueRoleId) : null;
  const defaultIndex = defaultRoleId ? roles.findIndex(({ roleId }) => roleId === defaultRoleId) : null;
  return /* @__PURE__ */ jsx(
    DropdownMenu,
    {
      width,
      maxMenuHeight,
      items: roles.map(({ roleLabel, roleId }) => [roleId, roleLabel]),
      label,
      defaultIndex: defaultIndex + 1,
      valueIndex: valueIndex + 1,
      onChange,
      vertical,
      disabled,
      dataTest: "RoleDropDown"
    }
  );
}
export {
  RoleDropdown as R,
  effectiveRoleIdByCourseId as a,
  effectivePermissionsByCourseId as e
};
