import React, {Suspense} from "react";
import {useRecoilValue} from "recoil";
import {BreadCrumb} from "../../_reactComponents/PanelHeaderComponents/BreadCrumb.js";
import {searchParamAtomFamily} from "../NewToolRoot.js";
import {
  useCourseChooserCrumb,
  useDashboardCrumb
} from "../../_utils/breadcrumbUtil.js";
export default function DashboardBreadCrumb() {
  const courseId = useRecoilValue(searchParamAtomFamily("courseId"));
  const courseChooserCrumb = useCourseChooserCrumb();
  const dashboardCrumb = useDashboardCrumb(courseId);
  return /* @__PURE__ */ React.createElement(Suspense, {
    fallback: /* @__PURE__ */ React.createElement("div", null, "loading Breadcrumbs...")
  }, /* @__PURE__ */ React.createElement(BreadCrumb, {
    crumbs: [courseChooserCrumb, dashboardCrumb]
  }));
}
