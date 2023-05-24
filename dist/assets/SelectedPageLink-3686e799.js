import { o as Recoil_index_24, p as pageToolViewAtom, t as Recoil_index_20, W as searchParamAtomFamily, aj as selectedCourseItems, a8 as itemByDoenetId, r as reactExports, q as useCourse, a0 as Recoil_index_31, h as axios, b as jsxs, j as jsx, c as FontAwesomeIcon, aq as faLink, F as Fragment, B as Button } from "./PageViewer-d914b069.js";
import { A as ActionButton } from "./ActionButton-1e9c5f7a.js";
import { A as ActionButtonGroup } from "./ActionButtonGroup-f7bafe40.js";
import "./Textfield-0be9f722.js";
function SelectedPageLink() {
  const setPageToolView = Recoil_index_24(pageToolViewAtom);
  const courseId = Recoil_index_20(searchParamAtomFamily("courseId"));
  const doenetId = Recoil_index_20(selectedCourseItems)[0];
  const pageObj = Recoil_index_20(itemByDoenetId(doenetId));
  const [itemTextFieldLabel, setItemTextFieldLabel] = reactExports.useState(pageObj.label);
  let { updateContentLinksToSources } = useCourse(courseId);
  Recoil_index_31(
    ({ set }) => async (courseId2, doenetId2, label) => {
      await axios.get("/api/renamePageLink.php", {
        params: { courseId: courseId2, doenetId: doenetId2, label }
      });
      set(itemByDoenetId(doenetId2), (prev) => {
        let next = { ...prev };
        next.label = label;
        return next;
      });
    }
  );
  reactExports.useEffect(() => {
    if (itemTextFieldLabel !== pageObj.label) {
      setItemTextFieldLabel(pageObj.label);
    }
  }, [doenetId]);
  let heading = /* @__PURE__ */ jsxs("h2", { "data-test": "infoPanelItemLabel", style: { margin: "16px 5px" }, children: [
    /* @__PURE__ */ jsx(FontAwesomeIcon, { icon: faLink }),
    " Link to ",
    pageObj.label
  ] });
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    heading,
    /* @__PURE__ */ jsx(ActionButtonGroup, { vertical: true, children: /* @__PURE__ */ jsx(
      ActionButton,
      {
        width: "menu",
        value: "View Page Link",
        onClick: () => {
          setPageToolView({
            page: "course",
            tool: "editor",
            view: "",
            params: {
              linkPageId: doenetId
            }
          });
        }
      }
    ) }),
    /* @__PURE__ */ jsx("br", {}),
    /* @__PURE__ */ jsx(
      Button,
      {
        width: "menu",
        value: "Update Content to Source",
        onClick: (e) => {
          e.preventDefault();
          e.stopPropagation();
          updateContentLinksToSources({ pages: [doenetId] });
        }
      }
    )
  ] });
}
export {
  SelectedPageLink as default
};
