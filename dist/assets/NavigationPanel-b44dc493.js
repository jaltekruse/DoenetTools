import { t as Recoil_index_20, W as searchParamAtomFamily, o as Recoil_index_24, a7 as suppressMenusAtom, a3 as useToast, r as reactExports, a0 as Recoil_index_31, Z as selectedMenuPanelAtom, a8 as itemByDoenetId, p as pageToolViewAtom, a9 as findFirstPageOfActivity, aa as coursePermissionsAndSettingsByCourseId, j as jsx, b as jsxs, ab as Ue, s as styled } from "./PageViewer-d914b069.js";
import { C as CourseNavigator } from "./CourseNavigator-3afd6a61.js";
import { e as effectivePermissionsByCourseId } from "./RoleDropdown-ece1f3f8.js";
import "./index.esm-b50f3a4c.js";
import "./extends-d9a14db7.js";
import "./setPrototypeOf-be240aa9.js";
import "./inheritsLoose-000f9e77.js";
/* empty css               */import "./ButtonGroup-b585a5ef.js";
import "./DropdownMenu-d8160745.js";
import "./defineProperty-2975ceb9.js";
import "./emotion-react.browser.esm-dfafc3e8.js";
import "./emotion-element-6a883da9.browser.esm-2d3713e7.js";
const movingGradient = Ue`
  0% { background-position: -250px 0; }
  100% { background-position: 250px 0; }
`;
const Table = styled.table`
  width: 850px;
  border-radius: 5px;
  margin-top: 50px;
  margin-left: 20px;
`;
const Tr = styled.tr``;
const Td = styled.td`
  height: 40px;
  vertical-align: middle;
  padding: 8px;
  /* border-bottom: 2px solid var(--canvastext); */

  &.Td2 {
    width: 50px;
  }

  &.Td3 {
    width: 400px;
  }
`;
const TBody = styled.tbody``;
const Td2Span = styled.span`
  display: block;
  //background-color: var(--canvastext);
  width: 70px;
  height: 16px;
  border-radius: 5px;
`;
const Td3Span = styled.span`
  display: block;
  height: 14px;
  border-radius: 5px;
  background: linear-gradient(
    to right,
    var(--mainGray) 20%,
    var(--mainGray) 50%,
    var(--mainGray) 80%
  );
  background-size: 500px 100px;
  animation-name: ${movingGradient};
  animation-duration: 1s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  animation-fill-mode: forwards;
`;
function NavigationPanel() {
  const courseId = Recoil_index_20(searchParamAtomFamily("courseId"));
  const { canEditContent } = Recoil_index_20(
    effectivePermissionsByCourseId(courseId)
  );
  const setSuppressMenus = Recoil_index_24(suppressMenusAtom);
  useToast();
  reactExports.useLayoutEffect(() => {
    setSuppressMenus(
      canEditContent == "1" ? [] : ["AddDriveItems", "CutCopyPasteMenu"]
    );
  }, [canEditContent, setSuppressMenus]);
  const updateSelectMenu = Recoil_index_31(
    ({ set, snapshot }) => async ({ singleItem }) => {
      console.log(`singleItem doenetId:${singleItem == null ? void 0 : singleItem.doenetId}`, singleItem);
      if (singleItem !== null) {
        if (singleItem.type == "activity") {
          set(selectedMenuPanelAtom, "SelectedActivity");
        } else if (singleItem.type == "order") {
          set(selectedMenuPanelAtom, "SelectedOrder");
        } else if (singleItem.type == "page") {
          set(selectedMenuPanelAtom, "SelectedPage");
        } else if (singleItem.type == "section") {
          set(selectedMenuPanelAtom, "SelectedSection");
        } else if (singleItem.type == "bank") {
          set(selectedMenuPanelAtom, "SelectedBank");
        } else if (singleItem.type == "collectionLink") {
          set(selectedMenuPanelAtom, "SelectedCollectionLink");
        } else if (singleItem.type == "pageLink") {
          set(selectedMenuPanelAtom, "SelectedPageLink");
        } else {
          set(selectedMenuPanelAtom, null);
        }
      } else {
        set(selectedMenuPanelAtom, null);
      }
    }
  );
  const doubleClickItem = Recoil_index_31(
    ({ set, snapshot }) => async ({ doenetId, courseId: courseId2 }) => {
      let clickedItem = await snapshot.getPromise(itemByDoenetId(doenetId));
      let { canEditContent: canEditContent2 } = await snapshot.getPromise(
        effectivePermissionsByCourseId(courseId2)
      );
      if (clickedItem.type == "page") {
        set(pageToolViewAtom, (prev) => {
          return {
            page: "course",
            tool: "editor",
            view: prev.view,
            params: {
              pageId: doenetId,
              doenetId: clickedItem.containingDoenetId
            }
          };
        });
      } else if (clickedItem.type == "pageLink") {
        set(pageToolViewAtom, (prev) => {
          return {
            page: "course",
            tool: "editor",
            view: prev.view,
            params: {
              linkPageId: doenetId
            }
          };
        });
      } else if (clickedItem.type == "activity") {
        if (canEditContent2 == "1") {
          let pageDoenetId = findFirstPageOfActivity(clickedItem.content);
          if (pageDoenetId == null)
            ;
          else {
            set(pageToolViewAtom, (prev) => {
              return {
                page: "course",
                tool: "editor",
                view: prev.view,
                params: { doenetId, pageId: pageDoenetId }
              };
            });
          }
        } else {
          set(pageToolViewAtom, {
            page: "course",
            tool: "assignment",
            view: "",
            params: {
              doenetId
            }
          });
        }
      } else if (clickedItem.type == "section") {
        set(pageToolViewAtom, (prev) => {
          return {
            page: "course",
            tool: "navigation",
            view: prev.view,
            params: { sectionId: clickedItem.doenetId, courseId: courseId2 }
          };
        });
      }
    }
  );
  let course = Recoil_index_20(coursePermissionsAndSettingsByCourseId(courseId));
  if ((course == null ? void 0 : course.canViewCourse) == "0") {
    return /* @__PURE__ */ jsx("h1", { children: "No Access to view this page." });
  }
  return /* @__PURE__ */ jsx(
    reactExports.Suspense,
    {
      fallback: /* @__PURE__ */ jsx(Table, { children: /* @__PURE__ */ jsxs(TBody, { children: [
        /* @__PURE__ */ jsxs(Tr, { children: [
          /* @__PURE__ */ jsx(Td, { className: "Td2", children: /* @__PURE__ */ jsx(Td2Span, {}) }),
          /* @__PURE__ */ jsx(Td, { className: "Td3", children: /* @__PURE__ */ jsx(Td3Span, {}) })
        ] }),
        /* @__PURE__ */ jsxs(Tr, { children: [
          /* @__PURE__ */ jsx(Td, { className: "Td2", children: /* @__PURE__ */ jsx(Td2Span, {}) }),
          /* @__PURE__ */ jsx(Td, { className: "Td3", children: /* @__PURE__ */ jsx(Td3Span, {}) })
        ] }),
        /* @__PURE__ */ jsxs(Tr, { children: [
          /* @__PURE__ */ jsx(Td, { className: "Td2", children: /* @__PURE__ */ jsx(Td2Span, {}) }),
          /* @__PURE__ */ jsx(Td, { className: "Td3", children: /* @__PURE__ */ jsx(Td3Span, {}) })
        ] })
      ] }) }),
      children: /* @__PURE__ */ jsx(Container, { children: /* @__PURE__ */ jsx(
        CourseNavigator,
        {
          updateSelectMenu,
          doubleClickItem
        }
      ) })
    }
  );
}
function Container(props) {
  return /* @__PURE__ */ jsx(
    "div",
    {
      style: {
        maxWidth: "850px",
        margin: "10px 20px"
        // border: "1px red solid",
      },
      children: props.children
    }
  );
}
export {
  NavigationPanel as default
};
