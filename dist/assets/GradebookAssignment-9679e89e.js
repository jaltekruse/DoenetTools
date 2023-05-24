import { aA as Recoil_index_8, o as Recoil_index_24, p as pageToolViewAtom, t as Recoil_index_20, W as searchParamAtomFamily, U as Recoil_index_21, a7 as suppressMenusAtom, r as reactExports, aa as coursePermissionsAndSettingsByCourseId, j as jsx, b as jsxs, F as Fragment, a3 as useToast, a0 as Recoil_index_31, h as axios, a4 as toastType, B as Button } from "./PageViewer-d914b069.js";
import { attemptData, overviewData, studentData, assignmentData, Styles, Table, attemptDataQuery, studentDataQuery, overviewDataQuery } from "./Gradebook-7b015fa4.js";
import { B as ButtonGroup } from "./ButtonGroup-b585a5ef.js";
import { D as DropdownMenu } from "./DropdownMenu-d8160745.js";
import { e as effectivePermissionsByCourseId } from "./RoleDropdown-ece1f3f8.js";
import "./defineProperty-2975ceb9.js";
import "./setPrototypeOf-be240aa9.js";
import "./extends-d9a14db7.js";
import "./emotion-react.browser.esm-dfafc3e8.js";
import "./emotion-element-6a883da9.browser.esm-2d3713e7.js";
const processGradesAtom = Recoil_index_8({
  key: "processGradesAtom",
  default: "Assignment Table"
});
const headersGradesAtom = Recoil_index_8({
  key: "headersGradesAtom",
  default: []
});
const entriesGradesAtom = Recoil_index_8({
  key: "entriesGradesAtom",
  default: []
});
const getUserId = (students, name) => {
  for (let userId in students) {
    if (students[userId].firstName + " " + students[userId].lastName == name) {
      return userId;
    }
  }
  return -1;
};
function UploadChoices({ doenetId, maxAttempts }) {
  var _a, _b;
  let headers = Recoil_index_20(headersGradesAtom);
  let rows = Recoil_index_20(entriesGradesAtom);
  const addToast = useToast();
  const setProcess = Recoil_index_24(processGradesAtom);
  let assignments = Recoil_index_21(assignmentData);
  let [scoreIndex, setScoreIndex] = reactExports.useState(null);
  let [selectedColumnIndex, setSelectedColumnIndex] = reactExports.useState(1);
  let [attemptNumber, setAttemptNumber] = reactExports.useState(null);
  let [selectedAttemptIndex, setSelectedAttemptIndex] = reactExports.useState(1);
  const refreshGradebook = Recoil_index_31(
    ({ set, snapshot }) => async ({ doenetId: doenetId2, addToast: addToast2 }) => {
      const courseId = await snapshot.getPromise(
        searchParamAtomFamily("courseId")
      );
      const {
        data: { assignmentAttemptsData }
      } = await axios.get("/api/loadGradebookAssignmentAttempts.php", {
        params: { courseId, doenetId: doenetId2 }
      });
      const {
        data: { gradebookEnrollment }
      } = await axios.get("/api/loadGradebookEnrollment.php", {
        params: { courseId }
      });
      const {
        data: { overview }
      } = await axios.get("/api/loadGradebookOverview.php", {
        params: { courseId }
      });
      set(attemptDataQuery(doenetId2), assignmentAttemptsData);
      set(studentDataQuery, gradebookEnrollment);
      set(overviewDataQuery, overview);
      addToast2(`Updated scores!`);
      set(processGradesAtom, "Assignment Table");
    }
  );
  if (assignments.state !== "hasValue") {
    return null;
  }
  const totalPointsOrPercent = (_b = (_a = assignments.contents) == null ? void 0 : _a[doenetId]) == null ? void 0 : _b.totalPointsOrPercent;
  if (!headers.includes("Email")) {
    addToast("Need a column header named 'Email' ", toastType.ERROR);
    setProcess("Assignment Table");
    return null;
  }
  let columnIndexes = [];
  let validColumns = headers.filter((_, i) => {
    var _a2;
    let columnPoints = Number((_a2 = rows == null ? void 0 : rows[0]) == null ? void 0 : _a2[i]);
    if (columnPoints == totalPointsOrPercent) {
      columnIndexes.push(i);
    }
    return columnPoints == totalPointsOrPercent;
  });
  if (validColumns.length < 1) {
    addToast(
      `Need a column with an assignment worth ${totalPointsOrPercent} points in the second row`,
      toastType.ERROR
    );
    setProcess("Assignment Table");
    return null;
  }
  if (!scoreIndex) {
    setScoreIndex(columnIndexes[0]);
  }
  let studentColumn = headers.indexOf("Student");
  let emailColumn = headers.indexOf("Email");
  let tableRows = [];
  let emails = [];
  let scores = [];
  for (let row of rows) {
    let name = studentColumn === -1 ? null : row[studentColumn];
    let email = row[emailColumn];
    let score = row[scoreIndex];
    if (email !== "") {
      emails.push(email);
      scores.push(score);
      tableRows.push(
        /* @__PURE__ */ jsxs("tr", { children: [
          " ",
          /* @__PURE__ */ jsx("td", { children: name }),
          /* @__PURE__ */ jsx("td", { children: email }),
          /* @__PURE__ */ jsx("td", { children: score })
        ] }, email)
      );
    }
  }
  let importTable = /* @__PURE__ */ jsxs("table", { children: [
    /* @__PURE__ */ jsxs("tr", { children: [
      /* @__PURE__ */ jsx("th", { style: { width: "200px" }, children: "Student" }),
      /* @__PURE__ */ jsx("th", { style: { width: "200px" }, children: "Email" }),
      /* @__PURE__ */ jsx("th", { style: { width: "50px" }, children: "Score" })
    ] }),
    tableRows
  ] });
  let dropdownItems = [];
  for (let [i, name] of Object.entries(validColumns)) {
    dropdownItems.push([i, name]);
  }
  let attemptDropdownItems = [];
  if (attemptNumber === null) {
    attemptDropdownItems.push([0, `Select Attempt Number`]);
  }
  for (let i = 1; i <= maxAttempts; i++) {
    attemptDropdownItems.push([i, `Attempt Number ${i}`]);
  }
  attemptDropdownItems.push([Number(maxAttempts) + 1, `New Attempt Number`]);
  let descriptionOfUpload = null;
  if (attemptNumber) {
    if (Number(maxAttempts) + 1 === attemptNumber) {
      descriptionOfUpload = /* @__PURE__ */ jsxs("div", { children: [
        "Use column ",
        /* @__PURE__ */ jsx("b", { children: validColumns[Number(selectedColumnIndex) - 1] }),
        " to insert a new ",
        /* @__PURE__ */ jsxs("b", { children: [
          "Attempt Number ",
          attemptNumber
        ] }),
        "?"
      ] });
    } else {
      descriptionOfUpload = /* @__PURE__ */ jsxs("div", { children: [
        "Use column ",
        /* @__PURE__ */ jsx("b", { children: validColumns[Number(selectedColumnIndex) - 1] }),
        " to change ",
        /* @__PURE__ */ jsxs("b", { children: [
          "Attempt Number ",
          attemptNumber
        ] }),
        " scores?"
      ] });
    }
  }
  {
    attemptNumber ? /* @__PURE__ */ jsxs("div", { children: [
      "Use column ",
      /* @__PURE__ */ jsx("b", { children: validColumns[Number(selectedColumnIndex) - 1] }),
      " as",
      " ",
      /* @__PURE__ */ jsxs("b", { children: [
        "Attempt Number ",
        attemptNumber
      ] }),
      " to",
      " ",
      Number(maxAttempts) + 1 === attemptNumber ? "insert" : "override",
      " ",
      "scores?"
    ] }) : null;
  }
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs("div", { children: [
      validColumns.length,
      " column",
      validColumns.length > 1 ? "s" : null,
      " match",
      " ",
      totalPointsOrPercent,
      " total points",
      " "
    ] }),
    /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(
      DropdownMenu,
      {
        items: dropdownItems,
        valueIndex: selectedColumnIndex,
        width: "400px",
        onChange: ({ value }) => {
          setSelectedColumnIndex(Number(value) + 1);
          setScoreIndex(columnIndexes[value]);
        }
      }
    ) }),
    /* @__PURE__ */ jsx("br", {}),
    /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(
      DropdownMenu,
      {
        items: attemptDropdownItems,
        valueIndex: selectedAttemptIndex,
        width: "400px",
        onChange: ({ value }) => {
          setSelectedAttemptIndex(value);
          setAttemptNumber(value);
        }
      }
    ) }),
    /* @__PURE__ */ jsx("br", {}),
    descriptionOfUpload,
    /* @__PURE__ */ jsxs(ButtonGroup, { children: [
      /* @__PURE__ */ jsx(
        Button,
        {
          alert: true,
          value: "Cancel",
          onClick: () => {
            addToast(`Override Cancelled`);
            setProcess("Assignment Table");
          }
        }
      ),
      attemptNumber ? /* @__PURE__ */ jsx(
        Button,
        {
          value: "Accept",
          onClick: () => {
            let payload = {
              doenetId,
              attemptNumber,
              emails,
              scores
            };
            axios.post("/api/saveOverrideGrades.php", payload).catch((e) => {
              addToast(e, toastType.ERROR);
              setProcess("Assignment Table");
            }).then(({ data }) => {
              if (data.success) {
                refreshGradebook({ doenetId, addToast });
              } else {
                addToast(data.message, toastType.ERROR);
              }
            });
          }
        }
      ) : null
    ] }),
    /* @__PURE__ */ jsx("br", {}),
    importTable
  ] });
}
function GradebookAssignmentView() {
  var _a, _b, _c, _d, _e, _f;
  const setPageToolView = Recoil_index_24(pageToolViewAtom);
  let doenetId = Recoil_index_20(searchParamAtomFamily("doenetId"));
  let courseId = Recoil_index_20(searchParamAtomFamily("courseId"));
  let attempts = Recoil_index_21(attemptData(doenetId));
  let overview = Recoil_index_21(overviewData);
  let students = Recoil_index_21(studentData);
  let process = Recoil_index_20(processGradesAtom);
  const setSuppressMenus = Recoil_index_24(suppressMenusAtom);
  let { canViewAndModifyGrades } = Recoil_index_20(
    effectivePermissionsByCourseId(courseId)
  );
  let assignments = Recoil_index_21(assignmentData);
  reactExports.useEffect(() => {
    if (canViewAndModifyGrades === "1") {
      setSuppressMenus([]);
    } else {
      setSuppressMenus(["GradeUpload"]);
    }
  }, [canViewAndModifyGrades, setSuppressMenus]);
  let course = Recoil_index_20(coursePermissionsAndSettingsByCourseId(courseId));
  if ((course == null ? void 0 : course.canViewCourse) == "0") {
    return /* @__PURE__ */ jsx("h1", { children: "No Access to view this page." });
  }
  if (attempts.state !== "hasValue" || students.state !== "hasValue" || assignments.state !== "hasValue") {
    return null;
  }
  const label = assignments.contents[doenetId].label;
  const totalPossiblePoints = Number(
    (_a = assignments.contents[doenetId]) == null ? void 0 : _a.totalPointsOrPercent
  );
  let assignmentsTable = {};
  let maxAttempts = 0;
  for (let userId in attempts.contents) {
    if ((_b = attempts.contents[userId]) == null ? void 0 : _b.attempts) {
      let lastAttemptNumber = Math.max(
        ...Object.keys(attempts.contents[userId].attempts).map(Number)
      );
      if (lastAttemptNumber > maxAttempts) {
        maxAttempts = lastAttemptNumber;
      }
    }
  }
  if (process === "Upload Choice Table") {
    return /* @__PURE__ */ jsx(UploadChoices, { doenetId, maxAttempts });
  }
  assignmentsTable.headers = [];
  assignmentsTable.headers.push({
    Header: "Student",
    Footer: "Possible Points",
    accessor: "student"
  });
  for (let i = 1; i <= maxAttempts; i++) {
    assignmentsTable.headers.push({
      Header: "Attempt " + i,
      Footer: totalPossiblePoints,
      accessor: "a" + i,
      disableFilters: true,
      Cell: (row) => /* @__PURE__ */ jsx(
        "a",
        {
          onClick: () => {
            let name = row.cell.row.cells[0].value.props.children;
            let userId = getUserId(students.contents, name);
            setPageToolView({
              page: "course",
              tool: "gradebookStudentAssignment",
              view: "",
              params: {
                courseId,
                doenetId,
                userId,
                attemptNumber: i,
                previousCrumb: "assignment"
              }
            });
          },
          children: row.value
        }
      )
    });
  }
  assignmentsTable.headers.push({
    Header: "Assignment Total",
    Footer: totalPossiblePoints,
    accessor: "grade",
    disableFilters: true
  });
  assignmentsTable.rows = [];
  for (let userId in students.contents) {
    let firstName = students.contents[userId].firstName;
    let lastName = students.contents[userId].lastName;
    let row = {};
    let name = firstName + " " + lastName;
    row["student"] = /* @__PURE__ */ jsx(
      "a",
      {
        onClick: () => {
          setPageToolView({
            page: "course",
            tool: "gradebookStudentAssignment",
            view: "",
            params: { courseId, doenetId, userId, previousCrumb: "assignment" }
          });
        },
        children: name
      }
    );
    for (let i = 1; i <= maxAttempts; i++) {
      let attemptCredit = (_c = attempts.contents[userId]) == null ? void 0 : _c.attempts[i];
      let pointsEarned = Math.round(attemptCredit * totalPossiblePoints * 100) / 100;
      row["a" + i] = attemptCredit === void 0 ? "" : pointsEarned;
    }
    let totalCredit = (_f = (_e = (_d = overview == null ? void 0 : overview.contents) == null ? void 0 : _d[userId]) == null ? void 0 : _e.assignments) == null ? void 0 : _f[doenetId];
    let totalPointsEarned = Math.round(totalCredit * totalPossiblePoints * 100) / 100;
    row["grade"] = totalCredit ? totalPointsEarned : "0";
    assignmentsTable.rows.push(row);
  }
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("div", { style: { paddingLeft: "8px" }, children: /* @__PURE__ */ jsx("b", { children: label }) }),
    /* @__PURE__ */ jsxs("div", { style: { paddingLeft: "8px" }, children: [
      totalPossiblePoints,
      " Points Possible"
    ] }),
    /* @__PURE__ */ jsx(Styles, { children: /* @__PURE__ */ jsx(
      Table,
      {
        columns: assignmentsTable.headers,
        data: assignmentsTable.rows
      }
    ) })
  ] });
}
export {
  GradebookAssignmentView as default,
  entriesGradesAtom,
  headersGradesAtom,
  processGradesAtom
};
