import React from "react";
import {useRecoilValue} from "recoil";
import {ManageUsers} from "../../_reactComponents/Course/SettingComponents.js";
import {searchParamAtomFamily} from "../NewToolRoot.js";
export default function ManageUsersMenu() {
  const courseId = useRecoilValue(searchParamAtomFamily("courseId"));
  return /* @__PURE__ */ React.createElement(ManageUsers, {
    courseId
  });
}
