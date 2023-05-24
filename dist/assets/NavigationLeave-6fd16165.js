import { a0 as Recoil_index_31, aj as selectedCourseItems, a8 as itemByDoenetId, Z as selectedMenuPanelAtom, bk as cutCourseItems, bl as copiedCourseItems } from "./PageViewer-d914b069.js";
function NavigationLeave() {
  const clearSelections = Recoil_index_31(({ set, snapshot }) => async () => {
    let selectedDoenentIds = await snapshot.getPromise(selectedCourseItems);
    for (let doenetId of selectedDoenentIds) {
      set(itemByDoenetId(doenetId), (prev) => {
        let next = { ...prev };
        next.isSelected = false;
        return next;
      });
    }
    set(selectedCourseItems, []);
    set(selectedMenuPanelAtom, "");
    let cutObjs = await snapshot.getPromise(cutCourseItems);
    for (let cutObj of cutObjs) {
      set(itemByDoenetId(cutObj.doenetId), (prev) => {
        let next = { ...prev };
        next["isBeingCut"] = false;
        return next;
      });
    }
    set(cutCourseItems, []);
    set(copiedCourseItems, []);
  });
  clearSelections();
  return null;
}
export {
  NavigationLeave as default
};
