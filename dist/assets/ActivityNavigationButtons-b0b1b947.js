import { r as reactExports, t as Recoil_index_20, a1 as courseIdAtom, W as searchParamAtomFamily, o as Recoil_index_24, p as pageToolViewAtom, b as jsxs, j as jsx, B as Button, b1 as Recoil_index_11, bi as authorCourseItemOrderByCourseId, bj as studentCourseItemOrderByCourseId, a8 as itemByDoenetId, a9 as findFirstPageOfActivity } from "./PageViewer-d914b069.js";
import { B as ButtonGroup } from "./ButtonGroup-b585a5ef.js";
import { e as effectivePermissionsByCourseId } from "./RoleDropdown-ece1f3f8.js";
import "./DropdownMenu-d8160745.js";
import "./defineProperty-2975ceb9.js";
import "./setPrototypeOf-be240aa9.js";
import "./extends-d9a14db7.js";
import "./emotion-react.browser.esm-dfafc3e8.js";
import "./emotion-element-6a883da9.browser.esm-2d3713e7.js";
const itemOrderByCourseId = Recoil_index_11({
  key: "itemOrderbyCourseId",
  get: (courseId) => ({ get }) => {
    const { canViewUnassignedContent } = get(
      effectivePermissionsByCourseId(courseId)
    );
    if (canViewUnassignedContent === "1") {
      return get(authorCourseItemOrderByCourseId(courseId));
    } else {
      return get(studentCourseItemOrderByCourseId(courseId));
    }
  }
});
const activityOrderByCourseId = Recoil_index_11({
  key: "activityOrderByCourseId",
  get: (courseId) => ({ get, getCallback }) => {
    const itemOrder = get(itemOrderByCourseId(courseId));
    const activityOrder = itemOrder.filter((doenetId) => {
      const item = get(itemByDoenetId(doenetId));
      return (item == null ? void 0 : item.type) === "activity" && !item.proctorMakesAvailable;
    });
    const getInfoFromIndex = getCallback(({ snapshot }) => (idx) => {
      if (idx < 0 || idx >= activityOrder.length)
        return {};
      return snapshot.getLoadable(itemByDoenetId(activityOrder[idx])).getValue();
    });
    const getFirstPageFromIndex = getCallback(({ snapshot }) => (idx) => {
      var _a;
      if (idx < 0 || idx >= activityOrder.length)
        return null;
      return findFirstPageOfActivity(
        ((_a = snapshot.getLoadable(itemByDoenetId(activityOrder[idx])).getValue()) == null ? void 0 : _a.content) ?? []
      );
    });
    return {
      value: activityOrder,
      getInfoFromIndex,
      getFirstPageFromIndex
    };
  }
});
function ActivityNavigationbuttons() {
  const [neighborParams, setNeighborParams] = reactExports.useState({
    previous: null,
    next: null
  });
  const courseId = Recoil_index_20(courseIdAtom);
  const doenetId = Recoil_index_20(searchParamAtomFamily("doenetId"));
  const navigate = Recoil_index_24(pageToolViewAtom);
  const { value: activityOrder, getFirstPageFromIndex } = Recoil_index_20(
    activityOrderByCourseId(courseId)
  );
  reactExports.useLayoutEffect(() => {
    const itemIdx = activityOrder.indexOf(doenetId);
    if (itemIdx === -1) {
      setNeighborParams({
        previous: null,
        next: null
      });
    } else {
      setNeighborParams({
        previous: itemIdx > 0 ? {
          doenetId: activityOrder[itemIdx - 1],
          pageId: getFirstPageFromIndex(itemIdx - 1)
        } : null,
        next: itemIdx < activityOrder.length - 1 ? {
          doenetId: activityOrder[itemIdx + 1],
          pageId: getFirstPageFromIndex(itemIdx + 1)
        } : null
      });
    }
  }, [activityOrder, doenetId, getFirstPageFromIndex]);
  return /* @__PURE__ */ jsxs(ButtonGroup, { children: [
    /* @__PURE__ */ jsx(
      Button,
      {
        "data-test": "Previous Activity Button",
        value: "Previous",
        onClick: () => {
          navigate((prev) => ({
            ...prev,
            params: { ...prev.params, ...neighborParams.previous }
          }));
        },
        disabled: neighborParams.previous === null
      }
    ),
    /* @__PURE__ */ jsx(
      Button,
      {
        "data-test": "Next Activity Button",
        value: "Next",
        onClick: () => {
          navigate((prev) => ({
            ...prev,
            params: { ...prev.params, ...neighborParams.next }
          }));
        },
        disabled: neighborParams.next === null
      }
    )
  ] });
}
export {
  ActivityNavigationbuttons as default
};
