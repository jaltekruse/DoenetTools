import { o as Recoil_index_24, p as pageToolViewAtom, t as Recoil_index_20, aa as coursePermissionsAndSettingsByCourseId, b1 as Recoil_index_11, a8 as itemByDoenetId, a9 as findFirstPageOfActivity, m as Recoil_index_22 } from "./PageViewer-d914b069.js";
import { e as effectivePermissionsByCourseId } from "./RoleDropdown-ece1f3f8.js";
import { studentData, assignmentData } from "./Gradebook-7b015fa4.js";
function useCourseChooserCrumb() {
  const setPageToolView = Recoil_index_24(pageToolViewAtom);
  return {
    label: "Courses",
    onClick: () => {
      setPageToolView({
        page: "course",
        tool: "courseChooser",
        view: ""
      });
    }
  };
}
function useDashboardCrumb(courseId) {
  const setPageToolView = Recoil_index_24(pageToolViewAtom);
  const course = Recoil_index_20(
    coursePermissionsAndSettingsByCourseId(courseId)
  );
  let label = course == null ? void 0 : course.label;
  return {
    label,
    onClick: () => {
      setPageToolView({
        page: "course",
        tool: "dashboard",
        view: "",
        params: {
          courseId
        }
      });
    }
  };
}
const navigationSelectorFamily = Recoil_index_11({
  key: "navigationSelectorFamily/Default",
  get: ({ courseId, parentDoenetId }) => async ({ get }) => {
    async function getSections({ courseId: courseId2, parentDoenetId: parentDoenetId2 }) {
      if (parentDoenetId2 === "" || parentDoenetId2 === void 0) {
        return [];
      }
      const {
        label,
        parentDoenetId: itemParentDoenetId,
        type
      } = await get(itemByDoenetId(parentDoenetId2));
      if (courseId2 === itemParentDoenetId) {
        return [{ label, parentDoenetId: parentDoenetId2, type }];
      }
      let results = await getSections({
        courseId: courseId2,
        parentDoenetId: itemParentDoenetId
      });
      return [...results, { label, parentDoenetId: parentDoenetId2, type }];
    }
    return await getSections({ courseId, parentDoenetId });
  }
});
function useNavigationCrumbs(courseId, parentDoenetId) {
  const setPageToolView = Recoil_index_24(pageToolViewAtom);
  const folderInfoArray = Recoil_index_20(
    navigationSelectorFamily({ courseId, parentDoenetId })
  );
  const crumbs = [
    {
      label: "Content",
      onClick: () => {
        setPageToolView({
          page: "course",
          tool: "navigation",
          view: "",
          params: {
            courseId
          }
        });
      }
    }
  ];
  for (let { label, parentDoenetId: parentDoenetId2, type } of folderInfoArray) {
    switch (type) {
      case "section":
        crumbs.push({
          label,
          onClick: () => {
            setPageToolView({
              page: "course",
              tool: "navigation",
              view: "",
              params: {
                courseId,
                sectionId: parentDoenetId2
              }
            });
          }
        });
        break;
      default:
        console.warn(`Unsupported navigration crumb type: ${type}`);
    }
  }
  return crumbs;
}
function useEditorCrumb({ pageId, doenetId, linkPageId }) {
  const setPageToolView = Recoil_index_24(pageToolViewAtom);
  const pageObj = Recoil_index_20(itemByDoenetId(pageId));
  let { label: pageLabel } = pageObj;
  const linkPageObj = Recoil_index_20(itemByDoenetId(linkPageId));
  if (linkPageId) {
    ({ label: pageLabel } = linkPageObj);
  }
  const activityObj = Recoil_index_20(itemByDoenetId(doenetId));
  let { label: activityLabel } = activityObj;
  let crumbs = [
    {
      label: activityLabel ?? "_",
      onClick: () => {
        setPageToolView({
          page: "course",
          tool: "editor",
          view: "",
          params: {
            doenetId,
            pageId
          }
        });
      }
    }
  ];
  if (!activityObj.isSinglePage && activityObj.type != "bank" && !linkPageId) {
    let firstPageDoenetId = findFirstPageOfActivity(activityObj.content);
    crumbs = [
      {
        label: activityLabel ?? "_",
        onClick: () => {
          setPageToolView({
            page: "course",
            tool: "editor",
            view: "",
            params: {
              doenetId,
              pageId: firstPageDoenetId
            }
          });
        }
      },
      {
        label: pageLabel ?? "_",
        onClick: () => {
          setPageToolView({
            page: "course",
            tool: "editor",
            view: "",
            params: {
              doenetId,
              pageId
            }
          });
        }
      }
    ];
  }
  if (activityObj.type == "bank") {
    crumbs = [
      {
        label: pageLabel ?? "_",
        onClick: () => {
          setPageToolView({
            page: "course",
            tool: "editor",
            view: "",
            params: {
              doenetId,
              pageId
            }
          });
        }
      }
    ];
  }
  if (linkPageId) {
    crumbs = [
      {
        label: pageLabel ?? "_",
        onClick: () => {
          setPageToolView({
            page: "course",
            tool: "editor",
            view: "",
            params: {
              linkPageId
            }
          });
        }
      }
    ];
  }
  return crumbs;
}
function useAssignmentCrumb({ doenetId }) {
  const setPageToolView = Recoil_index_24(pageToolViewAtom);
  const { label } = Recoil_index_20(itemByDoenetId(doenetId));
  return {
    label: label ?? "_",
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
  };
}
function usePeopleCrumb(courseId) {
  const setPageToolView = Recoil_index_24(pageToolViewAtom);
  return {
    label: "People",
    onClick: () => {
      setPageToolView({
        page: "course",
        tool: "people",
        view: "",
        params: {
          courseId
        }
      });
    }
  };
}
function useDataCrumb(courseId, parentDoenetId) {
  const setPageToolView = Recoil_index_24(pageToolViewAtom);
  const folderInfoArray = Recoil_index_20(
    navigationSelectorFamily({ courseId, parentDoenetId })
  );
  const crumbs = [
    {
      label: "Data",
      onClick: () => {
        setPageToolView({
          page: "course",
          tool: "data",
          view: "",
          params: {
            courseId
          }
        });
      }
    }
  ];
  for (let { label, parentDoenetId: parentDoenetId2, type } of folderInfoArray) {
    switch (type) {
      case "section":
        crumbs.push({
          label,
          onClick: () => {
            setPageToolView({
              page: "course",
              tool: "data",
              view: "",
              params: {
                courseId,
                sectionId: parentDoenetId2
              }
            });
          }
        });
        break;
      default:
        console.warn(`Unsupported navigration crumb type: ${type}`);
    }
  }
  return crumbs;
}
function useGradebookCrumbs() {
  var _a, _b;
  const [{ params: pageToolParams, tool }, setPageToolView] = Recoil_index_22(pageToolViewAtom);
  let crumbs = [];
  const { canViewAndModifyGrades } = Recoil_index_20(
    effectivePermissionsByCourseId(pageToolParams == null ? void 0 : pageToolParams.courseId)
  );
  const students = Recoil_index_20(studentData);
  const assignments = Recoil_index_20(assignmentData);
  if (canViewAndModifyGrades == "1") {
    {
      let params = {
        courseId: pageToolParams == null ? void 0 : pageToolParams.courseId
      };
      crumbs.push({
        label: "Gradebook",
        onClick: () => {
          setPageToolView({
            page: "course",
            tool: "gradebook",
            view: "",
            params
          });
        }
      });
    }
  }
  if (tool == "gradebook") {
    return crumbs;
  }
  if (tool == "gradebookStudent" || canViewAndModifyGrades != "1" && tool == "gradebookStudentAssignment" || (pageToolParams == null ? void 0 : pageToolParams.previousCrumb) == "student" && tool == "gradebookStudentAssignment") {
    let label = "Gradebook";
    if (canViewAndModifyGrades == "1") {
      const student = students[pageToolParams == null ? void 0 : pageToolParams.userId];
      label = `${student.firstName} ${student.lastName}`;
    }
    let params = {
      courseId: pageToolParams == null ? void 0 : pageToolParams.courseId,
      userId: pageToolParams == null ? void 0 : pageToolParams.userId
    };
    crumbs.push({
      label,
      onClick: () => {
        setPageToolView({
          page: "course",
          tool: "gradebookStudent",
          view: "",
          params
        });
      }
    });
  }
  if (tool == "gradebookStudent") {
    return crumbs;
  }
  if (tool == "gradebookAssignment" || (pageToolParams == null ? void 0 : pageToolParams.previousCrumb) == "assignment" && tool == "gradebookStudentAssignment") {
    if (canViewAndModifyGrades != "1") {
      crumbs.push({ label: "Not Available" });
    } else {
      let assignmentName = (_a = assignments == null ? void 0 : assignments[pageToolParams == null ? void 0 : pageToolParams.doenetId]) == null ? void 0 : _a.label;
      if (!assignmentName) {
        assignmentName = "_";
      }
      let params = {
        courseId: pageToolParams == null ? void 0 : pageToolParams.courseId,
        doenetId: pageToolParams == null ? void 0 : pageToolParams.doenetId
      };
      crumbs.push({
        label: assignmentName,
        onClick: () => {
          setPageToolView({
            page: "course",
            tool: "gradebookAssignment",
            view: "",
            params
          });
        }
      });
    }
  }
  if (tool == "gradebookAssignment") {
    return crumbs;
  }
  if (canViewAndModifyGrades != "1") {
    let assignmentName = (_b = assignments == null ? void 0 : assignments[pageToolParams == null ? void 0 : pageToolParams.doenetId]) == null ? void 0 : _b.label;
    if (!assignmentName) {
      assignmentName = "_";
    }
    let params = {
      courseId: pageToolParams == null ? void 0 : pageToolParams.courseId,
      userId: pageToolParams == null ? void 0 : pageToolParams.userId,
      doenetId: pageToolParams == null ? void 0 : pageToolParams.doenetId
    };
    crumbs.push({
      label: assignmentName,
      onClick: () => {
        setPageToolView({
          page: "course",
          tool: "gradebookStudentAssignment",
          view: "",
          params
        });
      }
    });
  } else {
    let crumbLabel = "_";
    if ((pageToolParams == null ? void 0 : pageToolParams.previousCrumb) == "student") {
      crumbLabel = assignments[pageToolParams == null ? void 0 : pageToolParams.doenetId].label;
    }
    if ((pageToolParams == null ? void 0 : pageToolParams.previousCrumb) == "assignment") {
      const student = students[pageToolParams == null ? void 0 : pageToolParams.userId];
      crumbLabel = `${student.firstName} ${student.lastName}`;
    }
    let params = {
      courseId: pageToolParams == null ? void 0 : pageToolParams.courseId,
      userId: pageToolParams == null ? void 0 : pageToolParams.userId,
      doenetId: pageToolParams == null ? void 0 : pageToolParams.doenetId,
      previousCrumb: pageToolParams == null ? void 0 : pageToolParams.previousCrumb
    };
    crumbs.push({
      label: crumbLabel,
      onClick: () => {
        setPageToolView({
          page: "course",
          tool: "gradebookStudentAssignment",
          view: "",
          params
        });
      }
    });
  }
  return crumbs;
}
export {
  useDashboardCrumb as a,
  useNavigationCrumbs as b,
  usePeopleCrumb as c,
  useDataCrumb as d,
  useEditorCrumb as e,
  useGradebookCrumbs as f,
  useAssignmentCrumb as g,
  useCourseChooserCrumb as u
};
