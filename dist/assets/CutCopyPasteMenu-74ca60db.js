import { t as Recoil_index_20, W as searchParamAtomFamily, q as useCourse, a3 as useToast, bk as cutCourseItems, bl as copiedCourseItems, aj as selectedCourseItems, j as jsx, F as Fragment, b as jsxs, a4 as toastType } from "./PageViewer-d914b069.js";
import { A as ActionButton } from "./ActionButton-1e9c5f7a.js";
import { A as ActionButtonGroup } from "./ActionButtonGroup-f7bafe40.js";
function CutCopyPasteMenu() {
  const courseId = Recoil_index_20(searchParamAtomFamily("courseId"));
  const { copyItems, cutItems, pasteItems } = useCourse(courseId);
  const addToast = useToast();
  let cutObjs = Recoil_index_20(cutCourseItems);
  let copiedObjs = Recoil_index_20(copiedCourseItems);
  let selectedItems = Recoil_index_20(selectedCourseItems);
  let canCut = true;
  let canPaste = true;
  if (cutObjs.length == 0 && copiedObjs.length == 0) {
    canPaste = false;
  }
  if (selectedItems.length == 0) {
    canCut = false;
  }
  let cutJSX = /* @__PURE__ */ jsx(
    ActionButton,
    {
      width: "menu",
      value: "Cut",
      disabled: !canCut,
      onClick: () => {
        cutItems({
          successCallback: () => {
          },
          failureCallback: (message) => {
            addToast(message, toastType.INFO);
          }
        });
      }
    }
  );
  let pasteJSX = /* @__PURE__ */ jsx(
    ActionButton,
    {
      width: "menu",
      value: "Paste",
      disabled: !canPaste,
      onClick: () => {
        pasteItems({
          successCallback: () => {
          },
          failureCallback: (message) => {
            addToast(message, toastType.INFO);
          }
        });
      }
    }
  );
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs(ActionButtonGroup, { width: "menu", children: [
    cutJSX,
    pasteJSX
  ] }) });
}
export {
  CutCopyPasteMenu as default
};
