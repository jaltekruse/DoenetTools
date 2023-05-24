import { t as Recoil_index_20, W as searchParamAtomFamily, a0 as Recoil_index_31, aa as coursePermissionsAndSettingsByCourseId, au as peopleByCourseId, b5 as courseRolePermissionsByCourseIdRoleId, j as jsx, B as Button } from "./PageViewer-d914b069.js";
import { assignmentData, overviewData, gradeCategories } from "./Gradebook-7b015fa4.js";
import "./RoleDropdown-ece1f3f8.js";
import "./DropdownMenu-d8160745.js";
import "./defineProperty-2975ceb9.js";
import "./setPrototypeOf-be240aa9.js";
import "./extends-d9a14db7.js";
import "./emotion-react.browser.esm-dfafc3e8.js";
import "./emotion-element-6a883da9.browser.esm-2d3713e7.js";
function GradeDownload() {
  const courseId = Recoil_index_20(searchParamAtomFamily("courseId"));
  const download = Recoil_index_31(
    ({ snapshot }) => async (courseId2) => {
      var _a, _b, _c, _d, _e, _f;
      const { label } = await snapshot.getPromise(
        coursePermissionsAndSettingsByCourseId(courseId2)
      );
      let filename = `${label}.csv`;
      let csvText;
      let assignments = await snapshot.getPromise(assignmentData);
      let overview = await snapshot.getPromise(overviewData);
      const { value: people } = await snapshot.getPromise(
        peopleByCourseId(courseId2)
      );
      let studentInfo = {};
      let headingsCSV = "Name,Email,External Id,Section,Withdrew,";
      let possiblePointsCSV = "Possible Points,,,,,";
      for (const {
        userId,
        email,
        roleId,
        withdrew,
        externalId,
        section,
        firstName,
        lastName
      } of people) {
        const { isIncludedInGradebook } = await snapshot.getPromise(
          courseRolePermissionsByCourseIdRoleId({ courseId: courseId2, roleId })
        );
        if (isIncludedInGradebook !== "1")
          continue;
        const studentName = `${firstName} ${lastName}`.replaceAll('"', '""');
        studentInfo[userId] = {
          courseTotal: 0,
          csv: `"${studentName}",${email},${externalId},${section},${withdrew === "1" ? "X" : ""},`
        };
      }
      let courseTotalPossiblePoints = 0;
      let sortedAssignments = Object.entries(assignments);
      sortedAssignments.sort(
        (a, b) => a[1].sortOrder < b[1].sortOrder ? -1 : 1
      );
      for (let {
        category,
        scaleFactor = 1,
        maximumNumber = Infinity,
        maximumValue = Infinity
      } of gradeCategories) {
        let allCategoryPossiblePoints = [];
        for (const userId in studentInfo) {
          studentInfo[userId][category] = [];
        }
        for (const [doenetId] of sortedAssignments) {
          let inCategory = (_a = assignments[doenetId]) == null ? void 0 : _a.category;
          if ((inCategory == null ? void 0 : inCategory.toLowerCase()) !== (category == null ? void 0 : category.toLowerCase())) {
            continue;
          }
          let assignmentLabel = (_b = assignments[doenetId]) == null ? void 0 : _b.label.replaceAll(
            '"',
            '""'
          );
          headingsCSV += `"${assignmentLabel}",`;
          let possiblepoints = ((_c = assignments == null ? void 0 : assignments[doenetId]) == null ? void 0 : _c.totalPointsOrPercent) * 1;
          possiblePointsCSV = `${possiblePointsCSV}${possiblepoints},`;
          allCategoryPossiblePoints.push(possiblepoints);
          for (const userId in studentInfo) {
            let credit = (_e = (_d = overview[userId]) == null ? void 0 : _d.assignments) == null ? void 0 : _e[doenetId];
            if (credit === null && ((_f = assignments == null ? void 0 : assignments[doenetId]) == null ? void 0 : _f.isGloballyAssigned) === "0") {
              studentInfo[userId].csv = `${studentInfo[userId].csv},`;
              continue;
            }
            let score = possiblepoints * credit;
            score = Math.round(score * 100) / 100;
            studentInfo[userId].csv = `${studentInfo[userId].csv}${score},`;
            studentInfo[userId][category].push(score);
          }
        }
        allCategoryPossiblePoints.sort((a, b) => b - a).slice(0, maximumNumber);
        let categoryScaledPoints = allCategoryPossiblePoints.reduce((a, b) => a + b, 0) * scaleFactor;
        let categoryPossiblePoints = Math.min(
          categoryScaledPoints,
          maximumValue
        );
        courseTotalPossiblePoints += categoryPossiblePoints;
        headingsCSV += `${category} Total,`;
        possiblePointsCSV = `${possiblePointsCSV}${categoryPossiblePoints},`;
        for (const userId in studentInfo) {
          let categoryScores = studentInfo[userId][category];
          categoryScores = categoryScores.sort((a, b) => b - a).slice(0, maximumNumber);
          let categoryScaledScores = categoryScores.reduce((a, c) => a + c, 0) * scaleFactor;
          let categoryScore = Math.min(categoryScaledScores, maximumValue);
          studentInfo[userId].csv = `${studentInfo[userId].csv}${categoryScore},`;
          studentInfo[userId].courseTotal += categoryScore;
        }
      }
      headingsCSV += "Course Total";
      possiblePointsCSV = `${possiblePointsCSV}${courseTotalPossiblePoints}`;
      csvText = `${headingsCSV}
${possiblePointsCSV}`;
      for (const userId in studentInfo) {
        csvText = `${csvText}
${studentInfo[userId].csv}${studentInfo[userId].courseTotal}`;
      }
      var element = document.createElement("a");
      element.setAttribute(
        "href",
        "data:text/plain;charset=utf-8, " + encodeURIComponent(csvText)
      );
      element.setAttribute("download", filename);
      document.body.appendChild(element);
      element.click();
      document.body.removeChild(element);
    },
    []
  );
  return /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(
    Button,
    {
      value: "Download CSV",
      onClick: () => {
        download(courseId);
      }
    }
  ) });
}
export {
  GradeDownload as default
};
