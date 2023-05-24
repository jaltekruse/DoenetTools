import { t as Recoil_index_20, W as searchParamAtomFamily, j as jsx, r as reactExports } from "./PageViewer-d914b069.js";
import { B as BreadCrumb } from "./BreadCrumb-20c00d72.js";
import { u as useCourseChooserCrumb, a as useDashboardCrumb, b as useNavigationCrumbs } from "./breadcrumbUtil-2c734bba.js";
import "./RoleDropdown-ece1f3f8.js";
import "./DropdownMenu-d8160745.js";
import "./defineProperty-2975ceb9.js";
import "./setPrototypeOf-be240aa9.js";
import "./extends-d9a14db7.js";
import "./emotion-react.browser.esm-dfafc3e8.js";
import "./emotion-element-6a883da9.browser.esm-2d3713e7.js";
import "./Gradebook-7b015fa4.js";
function NavigationBreadCrumb() {
  const courseId = Recoil_index_20(searchParamAtomFamily("courseId"));
  const sectionId = Recoil_index_20(searchParamAtomFamily("sectionId"));
  const chooserCrumb = useCourseChooserCrumb();
  const dashboardCrumb = useDashboardCrumb(courseId);
  const navigationCrumbs = useNavigationCrumbs(courseId, sectionId);
  return /* @__PURE__ */ jsx(reactExports.Suspense, { fallback: /* @__PURE__ */ jsx("div", { children: "Loading Breadcrumb..." }), children: /* @__PURE__ */ jsx(
    BreadCrumb,
    {
      crumbs: [chooserCrumb, dashboardCrumb, ...navigationCrumbs]
    }
  ) });
}
export {
  NavigationBreadCrumb as default
};
