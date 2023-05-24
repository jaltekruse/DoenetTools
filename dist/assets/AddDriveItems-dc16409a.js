import { t as Recoil_index_20, W as searchParamAtomFamily, q as useCourse, a3 as useToast, j as jsx, F as Fragment, b as jsxs, B as Button } from "./PageViewer-d914b069.js";
import { B as ButtonGroup } from "./ButtonGroup-b585a5ef.js";
function AddDriveItems() {
  const courseId = Recoil_index_20(searchParamAtomFamily("courseId"));
  const { create } = useCourse(courseId);
  const addToast = useToast();
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs(ButtonGroup, { vertical: true, children: [
    /* @__PURE__ */ jsx(
      Button,
      {
        width: "menu",
        dataTest: "Add Activity Button",
        onClick: () => create({ itemType: "activity" }, () => {
          addToast("Activity Created!");
        }),
        value: "Add Activity",
        children: "Add Activity"
      }
    ),
    /* @__PURE__ */ jsx(
      Button,
      {
        width: "menu",
        dataTest: "Add Collection Button",
        onClick: () => create({ itemType: "bank" }, () => {
          addToast("Collection Created!");
        }),
        value: "Add Collection"
      }
    ),
    /* @__PURE__ */ jsx(
      Button,
      {
        width: "menu",
        dataTest: "Add Section Button",
        onClick: () => create({ itemType: "section" }, () => {
          addToast("Section Created!");
        }),
        value: "Add Section",
        children: "Add Section"
      }
    )
  ] }) });
}
export {
  AddDriveItems as default
};
