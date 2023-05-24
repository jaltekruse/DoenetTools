import { t as Recoil_index_20, W as searchParamAtomFamily, o as Recoil_index_24, p as pageToolViewAtom, U as Recoil_index_21, aa as coursePermissionsAndSettingsByCourseId, j as jsx, ag as UTCDateStringToDate, b as jsxs, F as Fragment } from "./PageViewer-d914b069.js";
import { assignmentData, studentData, overviewData, gradeCategories, Styles, Table } from "./Gradebook-7b015fa4.js";
import "./RoleDropdown-ece1f3f8.js";
import "./DropdownMenu-d8160745.js";
import "./defineProperty-2975ceb9.js";
import "./setPrototypeOf-be240aa9.js";
import "./extends-d9a14db7.js";
import "./emotion-react.browser.esm-dfafc3e8.js";
import "./emotion-element-6a883da9.browser.esm-2d3713e7.js";
function GradebookStudent() {
  var _a, _b;
  let courseId = Recoil_index_20(searchParamAtomFamily("courseId"));
  let userId = Recoil_index_20(searchParamAtomFamily("userId"));
  const setPageToolView = Recoil_index_24(pageToolViewAtom);
  let assignments = Recoil_index_21(assignmentData);
  let students = Recoil_index_21(studentData);
  let overview = Recoil_index_21(overviewData);
  let course = Recoil_index_20(coursePermissionsAndSettingsByCourseId(courseId));
  if ((course == null ? void 0 : course.canViewCourse) == "0") {
    return /* @__PURE__ */ jsx("h1", { children: "No Access to view this page." });
  }
  let overviewTable = {};
  overviewTable.headers = [
    {
      Header: "Assignment",
      Footer: "Course Total",
      accessor: "assignment",
      disableFilters: true,
      disableSortBy: true
    }
  ];
  overviewTable.rows = [];
  let totalAssignedPoints = 0;
  let totalScore = 0;
  if (assignments.state == "hasValue" && students.state === "hasValue" && overview.state === "hasValue" && userId !== null && userId !== "") {
    let totalPossiblePoints = 0;
    let sortedAssignments = Object.entries(assignments.contents);
    sortedAssignments.sort(
      (a, b) => a[1].sortOrder < b[1].sortOrder ? -1 : 1
    );
    for (let {
      category,
      scaleFactor = 1,
      maximumNumber = Infinity,
      maximumValue = Infinity
    } of gradeCategories) {
      overviewTable.rows.push({
        // c
        assignment: category
      });
      let scores = [];
      let allpossiblepoints = [];
      let allassignedpoints = [];
      let categoryAssignedPointsAreAllDashes = true;
      for (let [doenetId] of sortedAssignments) {
        let inCategory = assignments.contents[doenetId].category;
        if ((inCategory == null ? void 0 : inCategory.toLowerCase()) !== category.toLowerCase()) {
          continue;
        }
        let assignedpoints = "-";
        let possiblepoints = assignments.contents[doenetId].totalPointsOrPercent * 1;
        let credit = overview.contents[userId].assignments[doenetId];
        if (credit === null && assignments.contents[doenetId].isGloballyAssigned === "0") {
          continue;
        }
        let score = possiblepoints * credit;
        const assignedDate = assignments.contents[doenetId].assignedDate;
        allpossiblepoints.push(possiblepoints);
        scores.push(score);
        score = Math.round(score * 100) / 100;
        let percentage = Math.round(credit * 1e3) / 10 + "%";
        const convertedTZAssignedDate = UTCDateStringToDate(assignedDate);
        if (assignedDate == null || //No assignment date
        // credit != null || //has taken the activity
        credit > 0 || //positive credit for the activity
        convertedTZAssignedDate < /* @__PURE__ */ new Date()) {
          assignedpoints = possiblepoints;
          allassignedpoints.push(possiblepoints);
          categoryAssignedPointsAreAllDashes = false;
        }
        let assignment = /* @__PURE__ */ jsx(
          "a",
          {
            onClick: () => {
              setPageToolView({
                page: "course",
                tool: "gradebookStudentAssignment",
                view: "",
                params: {
                  courseId,
                  userId,
                  doenetId,
                  previousCrumb: "student"
                }
              });
            },
            style: { paddingLeft: "15px" },
            children: assignments.contents[doenetId].label
          }
        );
        overviewTable.rows.push({
          assignment,
          possiblepoints,
          assignedpoints,
          score,
          percentage
        });
      }
      let numberScores = scores.length;
      scores = scores.sort((a, b) => b - a).slice(0, maximumNumber);
      allassignedpoints = allassignedpoints.sort((a, b) => b - a).slice(0, maximumNumber);
      let scaledScore = scores.reduce((a, c) => a + c, 0) * scaleFactor;
      let scaledAssignedPoints = allassignedpoints.reduce((a, c) => a + c, 0) * scaleFactor;
      let categoryScore = Math.min(scaledScore, maximumValue);
      let categoryAssignedPoints = Math.min(scaledAssignedPoints, maximumValue);
      if (categoryAssignedPointsAreAllDashes) {
        categoryAssignedPoints = "-";
      }
      allpossiblepoints = allpossiblepoints.sort((a, b) => b - a).slice(0, maximumNumber);
      let scaledPossiblePoints = allpossiblepoints.reduce((a, c) => a + c, 0) * scaleFactor;
      let categoryPossiblePoints = Math.min(scaledPossiblePoints, maximumValue);
      let categoryPercentage = "0%";
      if (categoryPossiblePoints !== 0) {
        categoryPercentage = Math.round(categoryScore / categoryPossiblePoints * 1e3) / 10 + "%";
      }
      totalScore += categoryScore;
      totalPossiblePoints += categoryPossiblePoints;
      if (categoryAssignedPoints != "-") {
        totalAssignedPoints += categoryAssignedPoints;
        categoryAssignedPoints = Math.round(categoryAssignedPoints * 100) / 100;
      }
      categoryScore = Math.round(categoryScore * 100) / 100;
      categoryPossiblePoints = Math.round(categoryPossiblePoints * 100) / 100;
      let description = [];
      if (numberScores > maximumNumber) {
        description.push(`top ${maximumNumber} scores`);
      }
      if (scaleFactor !== 1) {
        description.push(`rescaling by ${scaleFactor * 100}%`);
      }
      if (scaledPossiblePoints > maximumValue) {
        description.push(`a cap of ${maximumValue} points`);
      }
      overviewTable.rows.push({
        // assignment:"Subtotal for ${category} Description ",
        assignment: /* @__PURE__ */ jsxs("b", { children: [
          `Subtotal for ${category}`,
          description.length > 0 && /* @__PURE__ */ jsxs("div", { style: { fontSize: ".7em" }, children: [
            "Based on ",
            description.join(",")
          ] })
        ] }),
        score: categoryScore,
        possiblepoints: categoryPossiblePoints,
        assignedpoints: categoryAssignedPoints,
        percentage: categoryPercentage
      });
    }
    let totalPercentage = Math.round(totalScore / totalPossiblePoints * 1e3) / 10 + "%";
    totalScore = Math.round(totalScore * 100) / 100;
    totalPossiblePoints = Math.round(totalPossiblePoints * 100) / 100;
    totalAssignedPoints = Math.round(totalAssignedPoints * 100) / 100;
    overviewTable.headers.push(
      {
        Header: "Possible Points",
        Footer: totalPossiblePoints,
        accessor: "possiblepoints",
        disableFilters: true,
        disableSortBy: true
      },
      {
        Header: "Assigned Points",
        Footer: totalAssignedPoints,
        accessor: "assignedpoints",
        disableFilters: true,
        disableSortBy: true
      },
      {
        Header: "Score",
        Footer: totalScore,
        accessor: "score",
        disableFilters: true,
        disableSortBy: true
      },
      {
        Header: "Percentage",
        Footer: totalPercentage,
        accessor: "percentage",
        disableFilters: true,
        disableSortBy: true
      }
    );
  }
  let studentName = `${(_a = students.contents[userId]) == null ? void 0 : _a.firstName} ${(_b = students.contents[userId]) == null ? void 0 : _b.lastName}`;
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("div", { style: { marginLeft: "18px" }, children: /* @__PURE__ */ jsxs("b", { children: [
      "Gradebook for ",
      studentName
    ] }) }),
    /* @__PURE__ */ jsx("div", { style: { marginLeft: "18px" }, children: /* @__PURE__ */ jsxs("b", { children: [
      "Current Score ",
      totalScore,
      "/",
      totalAssignedPoints
    ] }) }),
    /* @__PURE__ */ jsx(Styles, { children: /* @__PURE__ */ jsx(
      Table,
      {
        disableSortBy: true,
        columns: overviewTable.headers,
        data: overviewTable.rows
      }
    ) })
  ] });
}
export {
  GradebookStudent as default
};
