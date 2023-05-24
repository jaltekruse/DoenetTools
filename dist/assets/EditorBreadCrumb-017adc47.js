import { t as Recoil_index_20, a1 as courseIdAtom, W as searchParamAtomFamily, j as jsx, r as reactExports } from "./PageViewer-d914b069.js";
import { B as BreadCrumb } from "./BreadCrumb-20c00d72.js";
import { u as useCourseChooserCrumb, a as useDashboardCrumb, b as useNavigationCrumbs, e as useEditorCrumb } from "./breadcrumbUtil-2c734bba.js";
import "./RoleDropdown-ece1f3f8.js";
import "./DropdownMenu-d8160745.js";
import "./defineProperty-2975ceb9.js";
import "./setPrototypeOf-be240aa9.js";
import "./extends-d9a14db7.js";
import "./emotion-react.browser.esm-dfafc3e8.js";
import "./emotion-element-6a883da9.browser.esm-2d3713e7.js";
import "./Gradebook-7b015fa4.js";
function EditorBreadCrumb() {
  const courseId = Recoil_index_20(courseIdAtom);
  const doenetId = Recoil_index_20(searchParamAtomFamily("doenetId"));
  const pageId = Recoil_index_20(searchParamAtomFamily("pageId"));
  const linkPageId = Recoil_index_20(searchParamAtomFamily("linkPageId"));
  const chooserCrumb = useCourseChooserCrumb();
  const dashboardCrumb = useDashboardCrumb(courseId);
  const navigationCrumbs = useNavigationCrumbs(courseId, doenetId);
  const editorCrumb = useEditorCrumb({ doenetId, pageId, linkPageId });
  return /* @__PURE__ */ jsx(reactExports.Suspense, { fallback: /* @__PURE__ */ jsx("div", { children: "Loading Breadcrumb..." }), children: /* @__PURE__ */ jsx(
    BreadCrumb,
    {
      crumbs: [
        chooserCrumb,
        dashboardCrumb,
        ...navigationCrumbs,
        ...editorCrumb
      ],
      offset: 68
    }
  ) });
}
export {
  EditorBreadCrumb as default
};
