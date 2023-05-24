import { o as Recoil_index_24, p as pageToolViewAtom, t as Recoil_index_20, W as searchParamAtomFamily, j as jsx, B as Button } from "./PageViewer-d914b069.js";
import { B as ButtonGroup } from "./ButtonGroup-b585a5ef.js";
function EnrollStudents() {
  const setPageToolView = Recoil_index_24(pageToolViewAtom);
  const courseId = Recoil_index_20(searchParamAtomFamily("courseId"));
  return /* @__PURE__ */ jsx(ButtonGroup, { vertical: true, children: /* @__PURE__ */ jsx(
    Button,
    {
      width: "menu",
      onClick: () => setPageToolView({
        page: "course",
        tool: "people",
        view: "",
        params: { courseId }
      }),
      value: "Go to People",
      children: "Go to People"
    }
  ) });
}
export {
  EnrollStudents as default
};
