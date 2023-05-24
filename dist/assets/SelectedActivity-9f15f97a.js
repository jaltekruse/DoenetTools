import { t as Recoil_index_20, W as searchParamAtomFamily, aj as selectedCourseItems, o as Recoil_index_24, p as pageToolViewAtom, a8 as itemByDoenetId, q as useCourse, r as reactExports, a3 as useToast, a9 as findFirstPageOfActivity, b as jsxs, F as Fragment, j as jsx, a4 as toastType, B as Button, c as FontAwesomeIcon, am as faFileCode, aA as Recoil_index_8 } from "./PageViewer-d914b069.js";
import { A as AssignUnassignActivity, u as useActivity, a as AssignTo, b as AssignedDate, D as DueDate, T as TimeLimit, c as AttemptLimit, d as AttemptAggregation, e as TotalPointsOrPercent, G as GradeCategory, I as ItemWeights, f as Individualize, S as ShowSolution, g as ShowSolutionInGradebook, h as ShowFeedback, i as ShowHints, j as ShowCorrectness, k as ShowCreditAchieved, P as Paginate, l as ShowFinishButton, m as ProctorMakesAvailable, n as AutoSubmit, M as MakePublic, o as ShowDoenetMLSource, C as CanViewAfterCompleted, p as PinAssignment } from "./SettingComponents-423b898c.js";
import { A as ActionButton } from "./ActionButton-1e9c5f7a.js";
import { A as ActionButtonGroup } from "./ActionButtonGroup-f7bafe40.js";
import { B as ButtonGroup } from "./ButtonGroup-b585a5ef.js";
import { e as effectivePermissionsByCourseId } from "./RoleDropdown-ece1f3f8.js";
import { T as Textfield } from "./Textfield-0be9f722.js";
import "./DateTime-4edca487.js";
import "./moment-feb1c730.js";
import "./IncrementMenu-19c70527.js";
import "./DropdownMenu-d8160745.js";
import "./defineProperty-2975ceb9.js";
import "./setPrototypeOf-be240aa9.js";
import "./extends-d9a14db7.js";
import "./emotion-react.browser.esm-dfafc3e8.js";
import "./emotion-element-6a883da9.browser.esm-2d3713e7.js";
import "./RelatedItems-8a9ec536.js";
import "./useSaveDraft-b85dfaeb.js";
import "./EditorViewerRecoil-84be9f2a.js";
function SelectedActivity() {
  const courseId = Recoil_index_20(searchParamAtomFamily("courseId"));
  const doenetId = Recoil_index_20(selectedCourseItems)[0];
  const setPageToolView = Recoil_index_24(pageToolViewAtom);
  const { canEditContent } = Recoil_index_20(
    effectivePermissionsByCourseId(courseId)
  );
  const { label: recoilLabel, content } = Recoil_index_20(
    itemByDoenetId(doenetId)
  );
  const { renameItem, create, compileActivity, deleteItem } = useCourse(courseId);
  const [itemTextFieldLabel, setItemTextFieldLabel] = reactExports.useState(recoilLabel);
  const addToast = useToast();
  reactExports.useEffect(() => {
    setItemTextFieldLabel(recoilLabel);
  }, [recoilLabel]);
  const handelLabelModfication = () => {
    let effectiveItemLabel = itemTextFieldLabel;
    if (itemTextFieldLabel === "") {
      effectiveItemLabel = recoilLabel;
      if (recoilLabel === "") {
        effectiveItemLabel = "Untitled";
      }
      setItemTextFieldLabel(effectiveItemLabel);
    }
    if (recoilLabel !== effectiveItemLabel) {
      renameItem(doenetId, effectiveItemLabel);
    }
  };
  if (doenetId == void 0) {
    return null;
  }
  let firstPageDoenetId = findFirstPageOfActivity(content);
  let heading = /* @__PURE__ */ jsxs("h2", { "data-test": "infoPanelItemLabel", style: { margin: "16px 5px" }, children: [
    /* @__PURE__ */ jsx(FontAwesomeIcon, { icon: faFileCode }),
    " ",
    recoilLabel
  ] });
  if (canEditContent === "1") {
    return /* @__PURE__ */ jsxs(Fragment, { children: [
      heading,
      /* @__PURE__ */ jsxs(ActionButtonGroup, { vertical: true, children: [
        /* @__PURE__ */ jsx(
          ActionButton,
          {
            width: "menu",
            value: "Edit Activity",
            dataTest: "Edit Activity",
            onClick: () => {
              if (firstPageDoenetId == null) {
                addToast(`ERROR: No page found in activity`, toastType.INFO);
              } else {
                setPageToolView((prev) => {
                  return {
                    page: "course",
                    tool: "editor",
                    view: prev.view,
                    params: {
                      doenetId,
                      pageId: firstPageDoenetId
                    }
                  };
                });
              }
            }
          }
        ),
        /* @__PURE__ */ jsx(
          ActionButton,
          {
            width: "menu",
            value: "View Draft Activity",
            dataTest: "View Draft Activity",
            onClick: () => {
              compileActivity({
                activityDoenetId: doenetId,
                courseId,
                successCallback: () => {
                  setPageToolView({
                    page: "course",
                    tool: "draftactivity",
                    view: "",
                    params: {
                      doenetId,
                      requestedVariant: 1
                    }
                  });
                }
              });
            }
          }
        ),
        /* @__PURE__ */ jsx(
          ActionButton,
          {
            width: "menu",
            value: "View Assigned Activity",
            dataTest: "View Assigned Activity",
            onClick: () => {
              setPageToolView({
                page: "course",
                tool: "assignment",
                view: "",
                params: {
                  doenetId
                }
              });
            }
          }
        )
      ] }),
      /* @__PURE__ */ jsx("br", {}),
      /* @__PURE__ */ jsx(AssignUnassignActivity, { doenetId, courseId }),
      /* @__PURE__ */ jsx(
        Textfield,
        {
          label: "Label",
          dataTest: "Label Activity",
          vertical: true,
          width: "menu",
          value: itemTextFieldLabel,
          onChange: (e) => setItemTextFieldLabel(e.target.value),
          onKeyDown: (e) => {
            if (e.keyCode === 13)
              handelLabelModfication();
          },
          onBlur: handelLabelModfication
        }
      ),
      /* @__PURE__ */ jsx("br", {}),
      /* @__PURE__ */ jsxs(ButtonGroup, { vertical: true, children: [
        /* @__PURE__ */ jsx(
          Button,
          {
            width: "menu",
            onClick: () => create({ itemType: "page" }),
            value: "Add Page",
            dataTest: "Add Page"
          }
        ),
        /* @__PURE__ */ jsx(
          Button,
          {
            width: "menu",
            onClick: () => create({ itemType: "order" }),
            value: "Add Order",
            dataTest: "Add Order"
          }
        ),
        /* @__PURE__ */ jsx(
          Button,
          {
            width: "menu",
            onClick: () => create({ itemType: "collectionLink" }),
            dataTest: "Add Collection Link",
            value: "Add Collection Link"
          }
        )
      ] }),
      /* @__PURE__ */ jsx("br", {}),
      /* @__PURE__ */ jsx(AssignmentSettings, { doenetId, courseId }),
      /* @__PURE__ */ jsx(
        Button,
        {
          width: "menu",
          value: "Delete Activity",
          dataTest: "Delete Activity",
          alert: true,
          onClick: (e) => {
            e.preventDefault();
            e.stopPropagation();
            deleteItem({ doenetId });
          }
        }
      )
    ] });
  }
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    heading,
    /* @__PURE__ */ jsx(
      ActionButton,
      {
        width: "menu",
        dataTest: "View Activity",
        value: "View Activity",
        onClick: () => {
          setPageToolView({
            page: "course",
            tool: "assignment",
            view: "",
            params: {
              doenetId
            }
          });
        }
      }
    )
  ] });
}
Recoil_index_8({
  key: "temporaryRestrictToAtom",
  default: []
});
function AssignmentSettings({ doenetId, courseId }) {
  const { canModifyActivitySettings, canViewActivitySettings } = Recoil_index_20(
    effectivePermissionsByCourseId(courseId)
  );
  const {
    value: {
      numberOfAttemptsAllowed,
      timeLimit,
      assignedDate,
      dueDate,
      totalPointsOrPercent
    }
  } = useActivity(courseId, doenetId);
  Recoil_index_24(pageToolViewAtom);
  const sharedProps = {
    courseId,
    doenetId,
    editable: canModifyActivitySettings ?? "0"
  };
  if (canViewActivitySettings === "1") {
    return /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx(AssignTo, { ...sharedProps }),
      /* @__PURE__ */ jsx("br", {}),
      /* @__PURE__ */ jsx(AssignedDate, { ...sharedProps }),
      /* @__PURE__ */ jsx(DueDate, { ...sharedProps }),
      /* @__PURE__ */ jsx(TimeLimit, { ...sharedProps }),
      /* @__PURE__ */ jsx(AttemptLimit, { ...sharedProps }),
      /* @__PURE__ */ jsx(AttemptAggregation, { ...sharedProps }),
      /* @__PURE__ */ jsx(TotalPointsOrPercent, { ...sharedProps }),
      /* @__PURE__ */ jsx(GradeCategory, { ...sharedProps }),
      /* @__PURE__ */ jsx(ItemWeights, { ...sharedProps }),
      /* @__PURE__ */ jsxs("div", { style: { margin: "16px 0" }, children: [
        /* @__PURE__ */ jsx(Individualize, { ...sharedProps }),
        /* @__PURE__ */ jsx(ShowSolution, { ...sharedProps }),
        /* @__PURE__ */ jsx(ShowSolutionInGradebook, { ...sharedProps }),
        /* @__PURE__ */ jsx(ShowFeedback, { ...sharedProps }),
        /* @__PURE__ */ jsx(ShowHints, { ...sharedProps }),
        /* @__PURE__ */ jsx(ShowCorrectness, { ...sharedProps }),
        /* @__PURE__ */ jsx(ShowCreditAchieved, { ...sharedProps }),
        /* @__PURE__ */ jsx(Paginate, { ...sharedProps }),
        /* @__PURE__ */ jsx(ShowFinishButton, { ...sharedProps }),
        /* @__PURE__ */ jsx(ProctorMakesAvailable, { ...sharedProps }),
        /* @__PURE__ */ jsx(AutoSubmit, { ...sharedProps }),
        /* @__PURE__ */ jsx(MakePublic, { ...sharedProps }),
        /* @__PURE__ */ jsx(ShowDoenetMLSource, { ...sharedProps }),
        /* @__PURE__ */ jsx(CanViewAfterCompleted, { ...sharedProps })
      ] }),
      /* @__PURE__ */ jsx(PinAssignment, { ...sharedProps })
    ] });
  }
  let nAttemptsAllowed = numberOfAttemptsAllowed;
  if (nAttemptsAllowed === null) {
    nAttemptsAllowed = "unlimited";
  }
  let timeLimitJSX = null;
  if (timeLimit !== null) {
    timeLimitJSX = /* @__PURE__ */ jsxs("p", { children: [
      "Time Limit: ",
      timeLimit,
      " minutes"
    ] });
  }
  let assignedDateJSX = null;
  if (assignedDate !== null) {
    assignedDateJSX = /* @__PURE__ */ jsxs("p", { children: [
      "Assigned: ",
      assignedDate
    ] });
  }
  let dueDateJSX = /* @__PURE__ */ jsx("p", { children: "No Due Date" });
  if (dueDate !== null) {
    dueDateJSX = /* @__PURE__ */ jsxs("p", { children: [
      "Due: ",
      dueDate
    ] });
  }
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs("div", { children: [
    assignedDateJSX,
    dueDateJSX,
    timeLimitJSX,
    /* @__PURE__ */ jsxs("p", { children: [
      "Attempts Allowed: ",
      nAttemptsAllowed
    ] }),
    /* @__PURE__ */ jsxs("p", { children: [
      "Points: ",
      totalPointsOrPercent
    ] })
  ] }) });
}
export {
  AssignmentSettings,
  SelectedActivity as default
};
