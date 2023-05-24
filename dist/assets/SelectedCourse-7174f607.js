import { s as styled, m as Recoil_index_22, j as jsx, b as jsxs, F as Fragment, B as Button, q as useCourse, t as Recoil_index_20, o as Recoil_index_24, p as pageToolViewAtom, c as FontAwesomeIcon, bm as faChalkboard } from "./PageViewer-d914b069.js";
import { B as ButtonGroup } from "./ButtonGroup-b585a5ef.js";
import { d as drivecardSelectedNodesAtom } from "./CourseToolHandler-1976a165.js";
import { E as EditLabel, b as EditImageAndColor, D as DeleteCourse, c as DuplicateCourse } from "./SettingComponents-71d0c77d.js";
import { e as effectivePermissionsByCourseId } from "./RoleDropdown-ece1f3f8.js";
import { A as ActionButton } from "./ActionButton-1e9c5f7a.js";
import { A as ActionButtonGroup } from "./ActionButtonGroup-f7bafe40.js";
import "./index-badc91d0.js";
import "./index-a634ad2f.js";
import "./index-72e7d0b2.js";
import "./index.esm-b50f3a4c.js";
import "./extends-d9a14db7.js";
import "./setPrototypeOf-be240aa9.js";
import "./inheritsLoose-000f9e77.js";
/* empty css               */import "./CollapseSection-5f783e94.js";
import "./util-2e804dda.js";
import "./DateTime-4edca487.js";
import "./moment-feb1c730.js";
import "./DropdownMenu-d8160745.js";
import "./defineProperty-2975ceb9.js";
import "./emotion-react.browser.esm-dfafc3e8.js";
import "./emotion-element-6a883da9.browser.esm-2d3713e7.js";
import "./RelatedItems-8a9ec536.js";
import "./Textfield-0be9f722.js";
styled.button`
  width: 20px;
  height: 20px;
  background: ${(props) => `${props.color}`};
  cursor: pointer;
  margin: 3px;
  border: ${(props) => props.selected ? "1px solid var(--canvastext)" : "none"};
  border-radius: 3px;
`;
styled.div`
  width: 100%;
  text-align: right;
`;
styled.div`
  border: 1px solid var(--canvastext);
  width: 50px;
  background: var(--canvas);
  cursor: pointer;
  padding: 0px 5px 0px 5px;
`;
styled.div`
  border: none;
  width: 20px;
  background: var(--canvas);
  cursor: pointer;
`;
styled.div`
  margin-right: 0;
  width: 86px;
`;
styled.ul`
  padding: 4px;
  list-style-type: none;
  /* border: 1px solid var(--canvastext); */
  border-radius: 3px;
  box-shadow: 3px 3px 7px var(--mainGray);
  background: var(--canvas);
  margin: 0 auto;
  text-align: left;
`;
function SelectedCourse() {
  var _a;
  const [courseCardsSelection, setCourseCardsSelection] = Recoil_index_22(
    drivecardSelectedNodesAtom
  );
  if (courseCardsSelection.length === 1) {
    return /* @__PURE__ */ jsx(
      CourseInfoPanel,
      {
        courseId: courseCardsSelection[0].courseId
      },
      `CourseInfoPanel${courseCardsSelection[0].courseId}`
    );
  } else if (courseCardsSelection.length > 1 && ((_a = courseCardsSelection[0]) == null ? void 0 : _a.isOwner)) {
    return /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsxs("h2", { children: [
        " ",
        courseCardsSelection.length,
        " Courses Selected"
      ] }),
      /* @__PURE__ */ jsxs(ButtonGroup, { vertical: true, children: [
        /* @__PURE__ */ jsx(
          Button,
          {
            width: "menu",
            value: "Duplicate (Soon)",
            onClick: (e) => {
              e.preventDefault();
              e.stopPropagation();
              console.log(">>>This will Duplicate courses");
              setCourseCardsSelection([]);
            }
          }
        ),
        /* @__PURE__ */ jsx(
          Button,
          {
            width: "menu",
            value: "Delete Courses (Soon)",
            alert: true,
            onClick: (e) => {
              e.preventDefault();
              e.stopPropagation();
              console.log(">>>This will Delete multiple courses");
              setCourseCardsSelection([]);
            }
          }
        )
      ] })
    ] });
  }
  return null;
}
const CourseInfoPanel = function({ courseId }) {
  const { label } = useCourse(courseId);
  const {
    isOwner,
    isAdmin,
    canViewUsers,
    dataAccessPermission,
    canModifyCourseSettings
  } = Recoil_index_20(effectivePermissionsByCourseId(courseId));
  const setPageToolView = Recoil_index_24(pageToolViewAtom);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs("h2", { "data-test": "infoPanelItemLabel", children: [
      /* @__PURE__ */ jsx(FontAwesomeIcon, { icon: faChalkboard }),
      " ",
      label
    ] }),
    /* @__PURE__ */ jsx(ActionButtonGroup, { vertical: true, children: /* @__PURE__ */ jsx(
      ActionButton,
      {
        width: "menu",
        value: "Enter Course",
        dataTest: "Enter Course nav button",
        onClick: (e) => {
          e.preventDefault();
          e.stopPropagation();
          setPageToolView({
            page: "course",
            tool: "dashboard",
            view: "",
            params: {
              courseId
            }
          });
        }
      }
    ) }),
    canModifyCourseSettings === "1" && /* @__PURE__ */ jsx(EditLabel, { courseId }),
    canModifyCourseSettings === "1" && /* @__PURE__ */ jsx(EditImageAndColor, { courseId }),
    /* @__PURE__ */ jsx("br", {}),
    isOwner === "1" && /* @__PURE__ */ jsx(DeleteCourse, { courseId }),
    isOwner === "1" && /* @__PURE__ */ jsx(DuplicateCourse, { courseId })
  ] });
};
export {
  SelectedCourse as default
};
