import { t as Recoil_index_20, W as searchParamAtomFamily, ai as useInitCourseItems, r as reactExports, o as Recoil_index_24, Y as mainPanelClickAtom, a0 as Recoil_index_31, aj as selectedCourseItems, Z as selectedMenuPanelAtom, a8 as itemByDoenetId, j as jsx, s as styled, ak as studentCourseItemOrderByCourseIdBySection, b as jsxs, F as Fragment, al as faFolderTree, am as faFileCode, an as authorCourseItemOrderByCourseIdBySection, ao as faLayerGroup, ap as faFileExport, ac as faCode, aq as faLink, c as FontAwesomeIcon, B as Button, ar as faCheck, as as faChevronDown, d as faChevronRight } from "./PageViewer-d914b069.js";
import { M as Measure } from "./index.esm-b50f3a4c.js";
/* empty css               */import { e as effectivePermissionsByCourseId } from "./RoleDropdown-ece1f3f8.js";
import { B as ButtonGroup } from "./ButtonGroup-b585a5ef.js";
const ToggleCloseIconStyling = styled.button`
  border: none;
  border-radius: 35px;
  &:focus {
    outline: 2px solid var(--canvastext);
    outline-offset: 2px;
  }
`;
function CourseNavigator(props) {
  const courseId = Recoil_index_20(searchParamAtomFamily("courseId"));
  const sectionId = Recoil_index_20(searchParamAtomFamily("sectionId"));
  const { canViewUnassignedContent } = Recoil_index_20(
    effectivePermissionsByCourseId(courseId)
  );
  useInitCourseItems(courseId);
  const [numberOfVisibleColumns, setNumberOfVisibleColumns] = reactExports.useState(1);
  let setMainPanelClick = Recoil_index_24(mainPanelClickAtom);
  let clearSelections = Recoil_index_31(({ snapshot, set }) => async () => {
    const selectedItems = await snapshot.getPromise(selectedCourseItems);
    set(selectedMenuPanelAtom, null);
    set(selectedCourseItems, []);
    for (let deselectId of selectedItems) {
      set(itemByDoenetId(deselectId), (was) => {
        let newObj = { ...was };
        newObj.isSelected = false;
        return newObj;
      });
    }
  });
  reactExports.useEffect(() => {
    setMainPanelClick((was) => {
      let newObj = [...was];
      newObj.push(clearSelections);
      return newObj;
    });
  }, [clearSelections, setMainPanelClick]);
  if (canViewUnassignedContent == "0" || props.displayRole == "student") {
    return /* @__PURE__ */ jsx(
      StudentCourseNavigation,
      {
        courseNavigatorProps: props,
        courseId,
        sectionId,
        numberOfVisibleColumns,
        setNumberOfVisibleColumns
      }
    );
  }
  if (canViewUnassignedContent == "1" || props.displayRole == "instructor") {
    return /* @__PURE__ */ jsx(
      AuthorCourseNavigation,
      {
        courseNavigatorProps: props,
        courseId,
        sectionId,
        numberOfVisibleColumns,
        setNumberOfVisibleColumns
      }
    );
  }
  return null;
}
function StudentCourseNavigation({
  courseId,
  sectionId,
  numberOfVisibleColumns,
  setNumberOfVisibleColumns,
  courseNavigatorProps
}) {
  let studentItemOrder = Recoil_index_20(
    studentCourseItemOrderByCourseIdBySection({ courseId, sectionId })
  );
  console.log("studentItemOrder", studentItemOrder);
  let previousSections = reactExports.useRef([]);
  let definedForSectionId = reactExports.useRef("");
  if (definedForSectionId.current != sectionId) {
    previousSections.current = [];
    definedForSectionId.current = sectionId;
  }
  let items = [];
  studentItemOrder.map(
    (doenetId) => items.push(
      /* @__PURE__ */ jsx(
        StudentItem,
        {
          courseId,
          doenetId,
          indentLevel: 0,
          previousSections,
          courseNavigatorProps,
          numberOfVisibleColumns
        },
        `itemcomponent${doenetId}`
      )
    )
  );
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      CourseNavigationHeader,
      {
        courseId,
        sectionId,
        columnLabels: ["Due Date"],
        numberOfVisibleColumns,
        setNumberOfVisibleColumns
      }
    ),
    items
  ] });
}
function StudentItem({
  courseId,
  doenetId,
  numberOfVisibleColumns,
  indentLevel,
  previousSections,
  courseNavigatorProps
}) {
  let itemInfo = Recoil_index_20(itemByDoenetId(doenetId));
  if (itemInfo.type == "section" && (previousSections == null ? void 0 : previousSections.current)) {
    previousSections.current.push(itemInfo.doenetId);
  }
  if (previousSections == null ? void 0 : previousSections.current.includes(itemInfo.parentDoenetId)) {
    return null;
  }
  if (itemInfo.type == "section") {
    return /* @__PURE__ */ jsx(
      StudentSection,
      {
        courseNavigatorProps,
        courseId,
        doenetId,
        itemInfo,
        numberOfVisibleColumns,
        indentLevel
      },
      `Item${doenetId}`
    );
  } else if (itemInfo.type == "activity") {
    return /* @__PURE__ */ jsx(
      StudentActivity,
      {
        courseNavigatorProps,
        courseId,
        doenetId,
        itemInfo,
        numberOfVisibleColumns,
        indentLevel
      },
      `Item${doenetId}`
    );
  }
  return null;
}
function StudentSection({
  courseId,
  doenetId,
  itemInfo,
  numberOfVisibleColumns,
  indentLevel,
  courseNavigatorProps
}) {
  let studentSectionItemOrder = Recoil_index_20(
    studentCourseItemOrderByCourseIdBySection({
      courseId,
      sectionId: itemInfo.doenetId
    })
  );
  let previousSections = reactExports.useRef([]);
  if (itemInfo.isOpen) {
    let sectionItems = studentSectionItemOrder.map((doenetId2) => /* @__PURE__ */ jsx(
      StudentItem,
      {
        courseNavigatorProps,
        previousSections,
        courseId,
        doenetId: doenetId2,
        numberOfVisibleColumns,
        indentLevel: indentLevel + 1
      },
      `itemcomponent${doenetId2}`
    ));
    return /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx(
        Row,
        {
          courseId,
          courseNavigatorProps,
          numberOfVisibleColumns,
          icon: faFolderTree,
          label: itemInfo.label,
          doenetId,
          hasToggle: true,
          isOpen: itemInfo.isOpen,
          isSelected: itemInfo.isSelected,
          indentLevel
        }
      ),
      sectionItems
    ] });
  } else {
    return /* @__PURE__ */ jsx(
      Row,
      {
        courseId,
        courseNavigatorProps,
        numberOfVisibleColumns,
        icon: faFolderTree,
        label: itemInfo.label,
        doenetId,
        hasToggle: true,
        isOpen: itemInfo.isOpen,
        isSelected: itemInfo.isSelected,
        indentLevel
      }
    );
  }
}
function StudentActivity({
  courseId,
  doenetId,
  itemInfo,
  numberOfVisibleColumns,
  indentLevel,
  courseNavigatorProps
}) {
  let columnsJSX = [null];
  if (itemInfo.dueDate) {
    columnsJSX[0] = /* @__PURE__ */ jsx("span", { children: itemInfo.dueDate }, `activityColumn2${doenetId}`);
  }
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx(
    Row,
    {
      courseId,
      courseNavigatorProps,
      columnsJSX,
      numberOfVisibleColumns,
      icon: faFileCode,
      label: itemInfo.label,
      doenetId,
      isSelected: itemInfo.isSelected,
      indentLevel,
      isBeingCut: itemInfo.isBeingCut
    }
  ) });
}
function AuthorCourseNavigation({
  courseId,
  sectionId,
  numberOfVisibleColumns,
  setNumberOfVisibleColumns,
  courseNavigatorProps
}) {
  let authorItemOrder = Recoil_index_20(
    authorCourseItemOrderByCourseIdBySection({ courseId, sectionId })
  );
  console.log(
    `authorItemOrder CourseId-${courseId}-SectionId-${sectionId}-`,
    authorItemOrder
  );
  let previousSections = reactExports.useRef([]);
  let definedForSectionId = reactExports.useRef("");
  if (definedForSectionId.current != sectionId) {
    previousSections.current = [];
    definedForSectionId.current = sectionId;
  }
  let items = authorItemOrder.map((doenetId) => /* @__PURE__ */ jsx(
    Item,
    {
      courseNavigatorProps,
      previousSections,
      courseId,
      doenetId,
      numberOfVisibleColumns,
      indentLevel: 0
    },
    `itemcomponent${doenetId}`
  ));
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      CourseNavigationHeader,
      {
        courseId,
        sectionId,
        columnLabels: ["Assigned", "Public"],
        numberOfVisibleColumns,
        setNumberOfVisibleColumns
      }
    ),
    items
  ] });
}
function Item({
  courseId,
  doenetId,
  numberOfVisibleColumns,
  indentLevel,
  previousSections,
  courseNavigatorProps
}) {
  let itemInfo = Recoil_index_20(itemByDoenetId(doenetId));
  if (itemInfo.type == "section" && (previousSections == null ? void 0 : previousSections.current)) {
    previousSections.current.push(itemInfo.doenetId);
  }
  if (previousSections == null ? void 0 : previousSections.current.includes(itemInfo.parentDoenetId)) {
    return null;
  }
  if (itemInfo.type == "section") {
    return /* @__PURE__ */ jsx(
      Section,
      {
        courseNavigatorProps,
        courseId,
        doenetId,
        itemInfo,
        numberOfVisibleColumns,
        indentLevel
      },
      `Item${doenetId}`
    );
  } else if (itemInfo.type == "bank") {
    return /* @__PURE__ */ jsx(
      Bank,
      {
        courseNavigatorProps,
        courseId,
        doenetId,
        itemInfo,
        numberOfVisibleColumns,
        indentLevel
      },
      `Item${doenetId}`
    );
  } else if (itemInfo.type == "activity") {
    return /* @__PURE__ */ jsx(
      Activity,
      {
        courseNavigatorProps,
        courseId,
        doenetId,
        itemInfo,
        numberOfVisibleColumns,
        indentLevel
      },
      `Item${doenetId}`
    );
  }
  return null;
}
function Section({
  courseId,
  doenetId,
  itemInfo,
  numberOfVisibleColumns,
  indentLevel,
  courseNavigatorProps
}) {
  let authorSectionItemOrder = Recoil_index_20(
    authorCourseItemOrderByCourseIdBySection({
      courseId,
      sectionId: itemInfo.doenetId
    })
  );
  let previousSections = reactExports.useRef([]);
  let columnsJSX = [null, null];
  if (itemInfo.isAssigned) {
    columnsJSX[0] = /* @__PURE__ */ jsx(FontAwesomeIcon, { icon: faCheck }, `activityColumn2${doenetId}`);
  }
  if (itemInfo.isOpen) {
    let sectionItems = authorSectionItemOrder.map((doenetId2) => /* @__PURE__ */ jsx(
      Item,
      {
        courseNavigatorProps,
        previousSections,
        courseId,
        doenetId: doenetId2,
        numberOfVisibleColumns,
        indentLevel: indentLevel + 1
      },
      `itemcomponent${doenetId2}`
    ));
    return /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx(
        Row,
        {
          courseId,
          columnsJSX,
          courseNavigatorProps,
          isBeingCut: itemInfo.isBeingCut,
          numberOfVisibleColumns,
          icon: faFolderTree,
          label: itemInfo.label,
          doenetId,
          hasToggle: true,
          isOpen: itemInfo.isOpen,
          isSelected: itemInfo.isSelected,
          indentLevel
        }
      ),
      sectionItems
    ] });
  } else {
    return /* @__PURE__ */ jsx(
      Row,
      {
        courseId,
        columnsJSX,
        courseNavigatorProps,
        isBeingCut: itemInfo.isBeingCut,
        numberOfVisibleColumns,
        icon: faFolderTree,
        label: itemInfo.label,
        doenetId,
        hasToggle: true,
        isOpen: itemInfo.isOpen,
        isSelected: itemInfo.isSelected,
        indentLevel
      }
    );
  }
}
function Bank({
  courseId,
  doenetId,
  itemInfo,
  numberOfVisibleColumns,
  indentLevel,
  courseNavigatorProps
}) {
  if (itemInfo.isOpen) {
    let pages = itemInfo.pages.map((pageDoenetId, i) => {
      return /* @__PURE__ */ jsx(
        Page,
        {
          courseNavigatorProps,
          courseId,
          doenetId: pageDoenetId,
          numberOfVisibleColumns,
          indentLevel: indentLevel + 1,
          number: i + 1
        },
        `Page${pageDoenetId}`
      );
    });
    return /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx(
        Row,
        {
          courseId,
          courseNavigatorProps,
          numberOfVisibleColumns,
          icon: faLayerGroup,
          label: itemInfo.label,
          doenetId,
          hasToggle: true,
          isOpen: itemInfo.isOpen,
          isSelected: itemInfo.isSelected,
          isBeingCut: itemInfo.isBeingCut,
          indentLevel
        }
      ),
      pages
    ] });
  } else {
    return /* @__PURE__ */ jsx(
      Row,
      {
        courseId,
        courseNavigatorProps,
        numberOfVisibleColumns,
        icon: faLayerGroup,
        label: itemInfo.label,
        doenetId,
        hasToggle: true,
        isOpen: itemInfo.isOpen,
        isSelected: itemInfo.isSelected,
        isBeingCut: itemInfo.isBeingCut,
        indentLevel
      }
    );
  }
}
function Activity({
  courseId,
  doenetId,
  itemInfo,
  numberOfVisibleColumns,
  indentLevel,
  courseNavigatorProps
}) {
  let columnsJSX = [null, null];
  if (itemInfo.isAssigned) {
    columnsJSX[0] = /* @__PURE__ */ jsx(FontAwesomeIcon, { icon: faCheck }, `activityColumn2${doenetId}`);
  }
  if (itemInfo.isPublic) {
    columnsJSX[1] = /* @__PURE__ */ jsx(FontAwesomeIcon, { icon: faCheck }, `activityColumn3${doenetId}`);
  }
  if (itemInfo.isSinglePage) {
    return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx(
      Row,
      {
        courseId,
        courseNavigatorProps,
        columnsJSX,
        numberOfVisibleColumns,
        icon: faFileCode,
        label: itemInfo.label,
        doenetId,
        isSelected: itemInfo.isSelected,
        indentLevel,
        isBeingCut: itemInfo.isBeingCut
      }
    ) });
  }
  if (itemInfo.isOpen) {
    let childRowsJSX = itemInfo.content.map((collectionLinkPageOrOrder, i) => {
      if ((collectionLinkPageOrOrder == null ? void 0 : collectionLinkPageOrOrder.type) == "order") {
        return /* @__PURE__ */ jsx(
          Order,
          {
            courseNavigatorProps,
            orderInfo: collectionLinkPageOrOrder,
            courseId,
            activityDoenetId: doenetId,
            numberOfVisibleColumns: 1,
            indentLevel: indentLevel + 1
          },
          `Order${i}${doenetId}`
        );
      } else if (!(collectionLinkPageOrOrder == null ? void 0 : collectionLinkPageOrOrder.type)) {
        return /* @__PURE__ */ jsx(
          Page,
          {
            courseNavigatorProps,
            courseId,
            doenetId: collectionLinkPageOrOrder,
            activityDoenetId: itemInfo.doenetId,
            numberOfVisibleColumns,
            indentLevel: indentLevel + 1
          },
          `NavPage${i}`
        );
      } else if ((collectionLinkPageOrOrder == null ? void 0 : collectionLinkPageOrOrder.type) == "collectionLink") {
        return /* @__PURE__ */ jsx(
          CollectionLink,
          {
            courseNavigatorProps,
            courseId,
            collectionLinkInfo: collectionLinkPageOrOrder,
            activityDoenetId: itemInfo.doenetId,
            numberOfVisibleColumns,
            indentLevel: indentLevel + 1
          },
          `CollectionLink${i}`
        );
      }
    });
    return /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx(
        Row,
        {
          courseId,
          courseNavigatorProps,
          columnsJSX,
          numberOfVisibleColumns,
          icon: faFileCode,
          label: itemInfo.label,
          doenetId,
          hasToggle: true,
          isOpen: itemInfo.isOpen,
          isSelected: itemInfo.isSelected,
          indentLevel,
          isBeingCut: itemInfo.isBeingCut
        }
      ),
      childRowsJSX
    ] });
  } else {
    return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx(
      Row,
      {
        courseId,
        courseNavigatorProps,
        columnsJSX,
        numberOfVisibleColumns,
        icon: faFileCode,
        label: itemInfo.label,
        doenetId,
        hasToggle: true,
        isOpen: itemInfo.isOpen,
        isSelected: itemInfo.isSelected,
        indentLevel,
        isBeingCut: itemInfo.isBeingCut
      }
    ) });
  }
}
function Order({
  courseId,
  activityDoenetId,
  numberOfVisibleColumns,
  indentLevel,
  orderInfo,
  courseNavigatorProps
}) {
  let { behavior, doenetId, content, numberToSelect, withReplacement } = orderInfo;
  let recoilOrderInfo = Recoil_index_20(itemByDoenetId(doenetId));
  let contentJSX = [];
  if (behavior == "sequence") {
    contentJSX = content.map((collectionLinkPageOrOrder, i) => {
      if ((collectionLinkPageOrOrder == null ? void 0 : collectionLinkPageOrOrder.type) == "order") {
        return /* @__PURE__ */ jsx(
          Order,
          {
            courseNavigatorProps,
            orderInfo: collectionLinkPageOrOrder,
            courseId,
            activityDoenetId: doenetId,
            numberOfVisibleColumns: 1,
            indentLevel: indentLevel + 1
          },
          `Order${i}${doenetId}`
        );
      } else if ((collectionLinkPageOrOrder == null ? void 0 : collectionLinkPageOrOrder.type) == "collectionLink") {
        return /* @__PURE__ */ jsx(
          CollectionLink,
          {
            courseNavigatorProps,
            courseId,
            collectionLinkInfo: collectionLinkPageOrOrder,
            activityDoenetId: doenetId,
            numberOfVisibleColumns,
            indentLevel: indentLevel + 1
          },
          `CollectionLink${i}`
        );
      } else {
        return /* @__PURE__ */ jsx(
          Page,
          {
            courseNavigatorProps,
            courseId,
            doenetId: collectionLinkPageOrOrder,
            activityDoenetId,
            numberOfVisibleColumns,
            indentLevel: indentLevel + 1,
            number: i + 1
          },
          `NavPage${i}`
        );
      }
    });
  } else {
    contentJSX = content.map((collectionLinkPageOrOrder, i) => {
      if ((collectionLinkPageOrOrder == null ? void 0 : collectionLinkPageOrOrder.type) == "order") {
        return /* @__PURE__ */ jsx(
          Order,
          {
            courseNavigatorProps,
            orderInfo: collectionLinkPageOrOrder,
            courseId,
            activityDoenetId: doenetId,
            numberOfVisibleColumns: 1,
            indentLevel: indentLevel + 1
          },
          `Order${i}${doenetId}`
        );
      } else if ((collectionLinkPageOrOrder == null ? void 0 : collectionLinkPageOrOrder.type) == "collectionLink") {
        return /* @__PURE__ */ jsx(
          CollectionLink,
          {
            courseNavigatorProps,
            courseId,
            collectionLinkInfo: collectionLinkPageOrOrder,
            activityDoenetId: doenetId,
            numberOfVisibleColumns,
            indentLevel: indentLevel + 1
          },
          `CollectionLink${i}`
        );
      } else {
        return /* @__PURE__ */ jsx(
          Page,
          {
            courseNavigatorProps,
            courseId,
            doenetId: collectionLinkPageOrOrder,
            activityDoenetId,
            numberOfVisibleColumns,
            indentLevel: indentLevel + 1
          },
          `NavPage${i}`
        );
      }
    });
  }
  let label = behavior;
  if (behavior == "select") {
    if (withReplacement) {
      label = `${behavior} ${numberToSelect} with replacement`;
    } else {
      label = `${behavior} ${numberToSelect} without replacement`;
    }
  }
  if (recoilOrderInfo.isOpen) {
    return /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx(
        Row,
        {
          courseId,
          isBeingCut: recoilOrderInfo.isBeingCut,
          courseNavigatorProps,
          numberOfVisibleColumns,
          icon: faFileExport,
          label,
          doenetId,
          hasToggle: true,
          isOpen: recoilOrderInfo.isOpen,
          isSelected: recoilOrderInfo.isSelected,
          indentLevel
        }
      ),
      contentJSX
    ] });
  } else {
    return /* @__PURE__ */ jsx(
      Row,
      {
        courseId,
        isBeingCut: recoilOrderInfo.isBeingCut,
        courseNavigatorProps,
        numberOfVisibleColumns,
        icon: faFileExport,
        label,
        doenetId,
        hasToggle: true,
        isOpen: recoilOrderInfo.isOpen,
        isSelected: recoilOrderInfo.isSelected,
        indentLevel
      }
    );
  }
}
function Page({
  courseId,
  doenetId,
  activityDoenetId,
  numberOfVisibleColumns,
  indentLevel,
  number = null,
  courseNavigatorProps
}) {
  let recoilPageInfo = Recoil_index_20(itemByDoenetId(doenetId));
  return /* @__PURE__ */ jsx(
    Row,
    {
      courseId,
      courseNavigatorProps,
      numberOfVisibleColumns,
      icon: faCode,
      label: recoilPageInfo.label,
      doenetId: recoilPageInfo.doenetId,
      indentLevel,
      numbered: number,
      isSelected: recoilPageInfo.isSelected,
      isBeingCut: recoilPageInfo.isBeingCut
    }
  );
}
function CollectionLinkChildren({
  courseId,
  indentLevel,
  pages,
  courseNavigatorProps
}) {
  if (!pages) {
    return null;
  }
  let pageLinksJSX = [];
  for (let [i, pageId] of pages.entries()) {
    pageLinksJSX.push(
      /* @__PURE__ */ jsx(
        PageLink,
        {
          courseId,
          doenetId: pageId,
          number: i + 1,
          indentLevel: indentLevel + 1,
          courseNavigatorProps
        }
      )
    );
  }
  return /* @__PURE__ */ jsx(Fragment, { children: pageLinksJSX });
}
function CollectionLink({
  courseId,
  numberOfVisibleColumns,
  indentLevel,
  number = null,
  courseNavigatorProps,
  collectionLinkInfo
}) {
  let { doenetId } = collectionLinkInfo;
  let collectionLinkRecoilPageInfo = Recoil_index_20(itemByDoenetId(doenetId));
  let collectionLinkChildrenJSX = null;
  if (collectionLinkRecoilPageInfo.isOpen) {
    let pages = collectionLinkRecoilPageInfo.pages;
    collectionLinkChildrenJSX = /* @__PURE__ */ jsx(
      CollectionLinkChildren,
      {
        courseId,
        indentLevel,
        pages,
        courseNavigatorProps
      }
    );
  }
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      Row,
      {
        courseId,
        courseNavigatorProps,
        hasToggle: true,
        isOpen: collectionLinkRecoilPageInfo.isOpen,
        numberOfVisibleColumns,
        icon: faLink,
        label: collectionLinkRecoilPageInfo.label,
        doenetId,
        indentLevel,
        numbered: number,
        isSelected: collectionLinkRecoilPageInfo.isSelected,
        isBeingCut: collectionLinkRecoilPageInfo.isBeingCut
      }
    ),
    collectionLinkChildrenJSX
  ] });
}
function PageLink({
  courseId,
  doenetId,
  indentLevel,
  numberOfVisibleColumns,
  number = null,
  courseNavigatorProps
}) {
  let recoilPageInfo = Recoil_index_20(itemByDoenetId(doenetId));
  return /* @__PURE__ */ jsx(
    Row,
    {
      courseId,
      itemType: "pageLink",
      courseNavigatorProps,
      numberOfVisibleColumns,
      icon: faLink,
      label: `Link to ${recoilPageInfo.label}`,
      doenetId,
      indentLevel,
      numbered: number,
      isSelected: recoilPageInfo.isSelected,
      isBeingCut: recoilPageInfo.isBeingCut
    }
  );
}
function Row({
  courseId,
  doenetId,
  itemType,
  numberOfVisibleColumns,
  columnsJSX = [],
  icon,
  label,
  isSelected = false,
  indentLevel = 0,
  numbered,
  hasToggle = false,
  isOpen,
  isBeingCut = false,
  courseNavigatorProps
}) {
  const setSelectionMenu = Recoil_index_24(selectedMenuPanelAtom);
  let openCloseIndicator = null;
  let toggleOpenClosed = Recoil_index_31(
    ({ set }) => () => {
      set(itemByDoenetId(doenetId), (was) => {
        let newObj = { ...was };
        newObj.isOpen = !newObj.isOpen;
        return newObj;
      });
    },
    [doenetId]
  );
  let handleSingleSelectionClick = Recoil_index_31(
    ({ snapshot, set }) => async (e) => {
      e.preventDefault();
      e.stopPropagation();
      let selectedItems = await snapshot.getPromise(selectedCourseItems);
      let newSelectedItems = [];
      if (selectedItems.length == 0) {
        newSelectedItems = [doenetId];
        set(itemByDoenetId(doenetId), (was) => {
          let newObj = { ...was };
          newObj.isSelected = true;
          return newObj;
        });
      } else if (selectedItems.length == 1 && selectedItems[0] == doenetId) {
        if (e.metaKey) {
          newSelectedItems = [];
          set(itemByDoenetId(doenetId), (was) => {
            let newObj = { ...was };
            newObj.isSelected = false;
            return newObj;
          });
        } else {
          newSelectedItems = [...selectedItems];
        }
      } else {
        if (e.shiftKey) {
          let sectionId = await snapshot.getPromise(
            searchParamAtomFamily("sectionId")
          );
          if (!sectionId) {
            sectionId = courseId;
          }
          const authorItemDoenetIds = await snapshot.getPromise(
            authorCourseItemOrderByCourseIdBySection({ courseId, sectionId })
          );
          let allRenderedRows = [];
          let skip = false;
          let parentDoenetIdsToSkip = [];
          for (let i = 0; i < authorItemDoenetIds.length; i++) {
            let itemDoenetId = authorItemDoenetIds[i];
            const authorItemInfo = await snapshot.getPromise(
              itemByDoenetId(itemDoenetId)
            );
            if (skip) {
              if (!parentDoenetIdsToSkip.includes(authorItemInfo.parentDoenetId)) {
                skip = false;
                parentDoenetIdsToSkip = [];
              } else {
                if (authorItemInfo.type == "order") {
                  parentDoenetIdsToSkip.push(authorItemInfo.doenetId);
                }
              }
            }
            if (!skip) {
              allRenderedRows.push(itemDoenetId);
              if ((authorItemInfo == null ? void 0 : authorItemInfo.isOpen) !== void 0 && !authorItemInfo.isOpen) {
                skip = true;
                parentDoenetIdsToSkip.push(authorItemInfo.doenetId);
              }
            }
          }
          let lastSelectedDoenetId = selectedItems[selectedItems.length - 1];
          let indexOfLastSelected = allRenderedRows.indexOf(lastSelectedDoenetId);
          let indexOfClick = allRenderedRows.indexOf(doenetId);
          let itemsToSelect = allRenderedRows.slice(
            Math.min(indexOfLastSelected, indexOfClick),
            Math.max(indexOfLastSelected, indexOfClick) + 1
          );
          if (indexOfLastSelected > indexOfClick) {
            itemsToSelect.reverse();
          }
          newSelectedItems = [...selectedItems];
          for (let newDoenetId of itemsToSelect) {
            if (!selectedItems.includes(newDoenetId)) {
              newSelectedItems.push(newDoenetId);
              set(itemByDoenetId(newDoenetId), (was) => {
                let newObj = { ...was };
                newObj.isSelected = true;
                return newObj;
              });
            }
          }
        } else if (e.metaKey) {
          let itemWasSelected = selectedItems.includes(doenetId);
          if (itemWasSelected) {
            newSelectedItems = selectedItems.filter((testId) => {
              return testId != doenetId;
            });
            set(itemByDoenetId(doenetId), (was) => {
              let newObj = { ...was };
              newObj.isSelected = false;
              return newObj;
            });
          } else {
            newSelectedItems = [...selectedItems, doenetId];
            set(itemByDoenetId(doenetId), (was) => {
              let newObj = { ...was };
              newObj.isSelected = true;
              return newObj;
            });
          }
        } else {
          newSelectedItems = [doenetId];
          set(itemByDoenetId(doenetId), (was) => {
            let newObj = { ...was };
            newObj.isSelected = true;
            return newObj;
          });
          for (let doenetIdToUnselect of selectedItems) {
            if (doenetId != doenetIdToUnselect) {
              set(itemByDoenetId(doenetIdToUnselect), (was) => {
                let newObj = { ...was };
                newObj.isSelected = false;
                return newObj;
              });
            }
          }
        }
      }
      let singleItem = null;
      if (newSelectedItems.length == 1) {
        singleItem = await snapshot.getPromise(
          itemByDoenetId(newSelectedItems[0])
        );
      }
      set(selectedCourseItems, newSelectedItems);
      courseNavigatorProps == null ? void 0 : courseNavigatorProps.updateSelectMenu({
        selectedItems: newSelectedItems,
        singleItem
      });
    },
    [doenetId, courseId, setSelectionMenu]
  );
  let bgcolor = "var(--canvas)";
  let color = "var(--canvastext)";
  if (isSelected) {
    color = "black";
    bgcolor = "var(--lightBlue)";
  } else if (isBeingCut) {
    bgcolor = "var(--mainGray)";
  }
  if (hasToggle) {
    openCloseIndicator = isOpen ? /* @__PURE__ */ jsx(
      ToggleCloseIconStyling,
      {
        "data-text": "folderToggleCloseIcon",
        "aria-expanded": "true",
        style: { backgroundColor: bgcolor },
        onClick: () => {
          if (hasToggle) {
            toggleOpenClosed();
          }
        },
        onKeyDown: (e) => {
          if (e.key === "enter") {
            if (hasToggle) {
              toggleOpenClosed();
            }
          }
        },
        children: /* @__PURE__ */ jsx(FontAwesomeIcon, { icon: faChevronDown, style: { color } })
      }
    ) : /* @__PURE__ */ jsx(
      ToggleCloseIconStyling,
      {
        "data-test": "folderToggleOpenIcon",
        "aria-expanded": "false",
        style: { backgroundColor: bgcolor },
        onClick: () => {
          if (hasToggle) {
            toggleOpenClosed();
          }
        },
        onKeyDown: (e) => {
          if (e.key === "enter") {
            if (hasToggle) {
              toggleOpenClosed();
            }
          }
        },
        children: /* @__PURE__ */ jsx(FontAwesomeIcon, { icon: faChevronRight, style: { color } })
      }
    );
  }
  let handleDoubleClick = Recoil_index_31(
    () => async (e) => {
      e.preventDefault();
      e.stopPropagation();
      courseNavigatorProps == null ? void 0 : courseNavigatorProps.doubleClickItem({ doenetId, courseId });
    },
    [doenetId, courseId, courseNavigatorProps]
  );
  let columnsCSS = getColumnsCSS(numberOfVisibleColumns);
  const indentPx = 25;
  let activityJSX = /* @__PURE__ */ jsx(
    "div",
    {
      role: "button",
      tabIndex: 0,
      className: "navigationRow noselect nooutline",
      style: {
        cursor: "pointer",
        padding: "8px",
        border: "0px",
        borderBottom: "2px solid var(--canvastext)",
        backgroundColor: bgcolor,
        color,
        width: "auto"
        // marginLeft: marginSize,
      },
      onClick: (e) => {
        handleSingleSelectionClick(e);
      },
      onKeyDown: (e) => {
        if (e.key === "Enter") {
          if (bgcolor === "var(--canvas)") {
            handleSingleSelectionClick(e);
          } else {
            if (e.key === "Enter" && e.metaKey) {
              handleSingleSelectionClick(e);
            } else {
              handleDoubleClick(e);
            }
          }
        }
      },
      onDoubleClick: (e) => {
        handleDoubleClick(e);
      },
      children: /* @__PURE__ */ jsxs(
        "div",
        {
          style: {
            display: "grid",
            gridTemplateColumns: columnsCSS,
            gridTemplateRows: "1fr",
            alignContent: "center"
            // marginTop: '8px',
            // marginBottom: '8px',
          },
          children: [
            /* @__PURE__ */ jsx(
              "span",
              {
                className: "navigationColumn1",
                style: {
                  marginLeft: `${indentLevel * indentPx}px`
                },
                children: /* @__PURE__ */ jsxs(
                  "p",
                  {
                    style: {
                      display: "inline",
                      margin: "0px"
                    },
                    children: [
                      numbered ? /* @__PURE__ */ jsxs(
                        "svg",
                        {
                          style: { verticalAlign: "middle" },
                          width: "22",
                          height: "22",
                          viewBox: "0 0 22 22",
                          children: [
                            /* @__PURE__ */ jsx(
                              "circle",
                              {
                                cx: "11",
                                cy: "11",
                                r: "12",
                                stroke: "var(--canvas)",
                                strokeWidth: "2",
                                fill: "var(--mainBlue)"
                              }
                            ),
                            /* @__PURE__ */ jsx(
                              "text",
                              {
                                fontSize: "14",
                                fill: "var(--canvas)",
                                fontFamily: "Verdana",
                                textAnchor: "middle",
                                alignmentBaseline: "baseline",
                                x: "11",
                                y: "16",
                                children: numbered
                              }
                            )
                          ]
                        }
                      ) : null,
                      openCloseIndicator,
                      /* @__PURE__ */ jsx("span", { style: { marginLeft: "8px" }, "data-test": "rowIcon", children: /* @__PURE__ */ jsx(FontAwesomeIcon, { icon }) }),
                      /* @__PURE__ */ jsxs("span", { style: { marginLeft: "4px" }, "data-test": "rowLabel", children: [
                        label,
                        " "
                      ] })
                    ]
                  }
                )
              }
            ),
            numberOfVisibleColumns > 1 ? /* @__PURE__ */ jsx("span", { className: "navigationColumn2", style: { textAlign: "center" }, children: columnsJSX[0] }) : null,
            numberOfVisibleColumns > 2 ? /* @__PURE__ */ jsx("span", { className: "navigationColumn3", style: { textAlign: "center" }, children: columnsJSX[1] }) : null,
            numberOfVisibleColumns > 3 ? /* @__PURE__ */ jsx("span", { className: "navigationColumn4", style: { textAlign: "center" }, children: columnsJSX[2] }) : null,
            numberOfVisibleColumns > 4 ? /* @__PURE__ */ jsx("span", { className: "navigationColumn5", style: { textAlign: "center" }, children: columnsJSX[3] }) : null
          ]
        }
      )
    },
    `Row${doenetId}`
  );
  return /* @__PURE__ */ jsx(Fragment, { children: activityJSX });
}
function getColumnsCSS(numberOfVisibleColumns) {
  let columnsCSS = "300px repeat(4,1fr)";
  if (numberOfVisibleColumns === 4) {
    columnsCSS = "300px repeat(3,1fr)";
  } else if (numberOfVisibleColumns === 3) {
    columnsCSS = "300px 1fr 1fr";
  } else if (numberOfVisibleColumns === 2) {
    columnsCSS = "300px 1fr";
  } else if (numberOfVisibleColumns === 1) {
    columnsCSS = "100%";
  }
  return columnsCSS;
}
function CourseNavigationHeader({
  courseId,
  sectionId,
  columnLabels,
  numberOfVisibleColumns,
  setNumberOfVisibleColumns
}) {
  let openCloseAll = Recoil_index_31(
    ({ set, snapshot }) => async ({ isOpen = true, courseId: courseId2, sectionId: sectionId2 }) => {
      if (!sectionId2) {
        sectionId2 = courseId2;
      }
      let doenetIds = await snapshot.getPromise(
        authorCourseItemOrderByCourseIdBySection({ courseId: courseId2, sectionId: sectionId2 })
      );
      for (let doenetId of doenetIds) {
        set(itemByDoenetId(doenetId), (prev) => {
          let next = { ...prev };
          if ("isOpen" in next) {
            next.isOpen = isOpen;
          }
          return next;
        });
      }
    },
    []
  );
  const updateNumColumns = reactExports.useCallback(
    (width) => {
      const maxColumns = columnLabels.length + 1;
      const breakpoints = [375, 500, 650, 800];
      if (width >= breakpoints[3] && numberOfVisibleColumns !== 5) {
        const nextNumberOfVisibleColumns = Math.min(maxColumns, 5);
        setNumberOfVisibleColumns == null ? void 0 : setNumberOfVisibleColumns(nextNumberOfVisibleColumns);
      } else if (width < breakpoints[3] && width >= breakpoints[2] && numberOfVisibleColumns !== 4) {
        const nextNumberOfVisibleColumns = Math.min(maxColumns, 4);
        setNumberOfVisibleColumns == null ? void 0 : setNumberOfVisibleColumns(nextNumberOfVisibleColumns);
      } else if (width < breakpoints[2] && width >= breakpoints[1] && numberOfVisibleColumns !== 3) {
        const nextNumberOfVisibleColumns = Math.min(maxColumns, 3);
        setNumberOfVisibleColumns == null ? void 0 : setNumberOfVisibleColumns(nextNumberOfVisibleColumns);
      } else if (width < breakpoints[1] && width >= breakpoints[0] && numberOfVisibleColumns !== 2) {
        const nextNumberOfVisibleColumns = Math.min(maxColumns, 2);
        setNumberOfVisibleColumns == null ? void 0 : setNumberOfVisibleColumns(nextNumberOfVisibleColumns);
      } else if (width < breakpoints[0] && numberOfVisibleColumns !== 1) {
        setNumberOfVisibleColumns == null ? void 0 : setNumberOfVisibleColumns(1);
      } else if (numberOfVisibleColumns > maxColumns) {
        setNumberOfVisibleColumns == null ? void 0 : setNumberOfVisibleColumns(maxColumns);
      }
    },
    [columnLabels, numberOfVisibleColumns, setNumberOfVisibleColumns]
  );
  let columnsCSS = getColumnsCSS(numberOfVisibleColumns);
  return /* @__PURE__ */ jsx(
    Measure,
    {
      bounds: true,
      onResize: (contentRect) => {
        const width = contentRect.bounds.width;
        updateNumColumns(width);
      },
      children: ({ measureRef }) => /* @__PURE__ */ jsx(
        "div",
        {
          ref: measureRef,
          className: "noselect nooutline",
          style: {
            padding: "8px",
            border: "0px",
            borderBottom: "1px solid var(--canvastext)",
            maxWidth: "850px",
            margin: "0px"
          },
          children: /* @__PURE__ */ jsxs(
            "div",
            {
              style: {
                display: "grid",
                gridTemplateColumns: columnsCSS,
                gridTemplateRows: "1fr",
                alignContent: "center"
              },
              children: [
                /* @__PURE__ */ jsxs("span", { style: { display: "flex" }, children: [
                  /* @__PURE__ */ jsx("span", { style: { marginRight: "10px" }, children: "Label" }),
                  /* @__PURE__ */ jsxs(ButtonGroup, { children: [
                    /* @__PURE__ */ jsx(
                      Button,
                      {
                        value: "Open All",
                        onClick: () => openCloseAll({ isOpen: true, courseId, sectionId })
                      }
                    ),
                    /* @__PURE__ */ jsx(
                      Button,
                      {
                        value: "Close All",
                        onClick: () => openCloseAll({ isOpen: false, courseId, sectionId })
                      }
                    )
                  ] })
                ] }),
                numberOfVisibleColumns >= 2 && columnLabels[0] ? /* @__PURE__ */ jsx("span", { style: { textAlign: "center" }, children: columnLabels[0] }) : null,
                numberOfVisibleColumns >= 3 && columnLabels[1] ? /* @__PURE__ */ jsx("span", { style: { textAlign: "center" }, children: columnLabels[1] }) : null,
                numberOfVisibleColumns >= 4 && columnLabels[2] ? /* @__PURE__ */ jsx("span", { style: { textAlign: "center" }, children: columnLabels[2] }) : null,
                numberOfVisibleColumns >= 5 && columnLabels[3] ? /* @__PURE__ */ jsx("span", { style: { textAlign: "center" }, children: columnLabels[3] }) : null
              ]
            }
          )
        }
      )
    }
  );
}
export {
  CourseNavigator as C
};
