import { o as Recoil_index_24, p as pageToolViewAtom, t as Recoil_index_20, W as searchParamAtomFamily, U as Recoil_index_21, a7 as suppressMenusAtom, r as reactExports, aa as coursePermissionsAndSettingsByCourseId, j as jsx, b as jsxs, F as Fragment, h as axios } from "./PageViewer-d914b069.js";
import { attemptData, studentData, assignmentData, overviewData, Styles, Table } from "./Gradebook-7b015fa4.js";
import { currentAttemptNumber } from "./AssignmentViewer-40516027.js";
import { e as effectivePermissionsByCourseId } from "./RoleDropdown-ece1f3f8.js";
import { A as ActivityViewer } from "./ActivityViewer-b51a59ab.js";
import "./activityUtils-7af1fc96.js";
import "./ActionButton-1e9c5f7a.js";
import "./ButtonGroup-b585a5ef.js";
import "./DropdownMenu-d8160745.js";
import "./defineProperty-2975ceb9.js";
import "./setPrototypeOf-be240aa9.js";
import "./extends-d9a14db7.js";
import "./emotion-react.browser.esm-dfafc3e8.js";
import "./emotion-element-6a883da9.browser.esm-2d3713e7.js";
import "./visibility-sensor-57589aaf.js";
function GradebookStudentAssignmentView() {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i;
  const setPageToolView = Recoil_index_24(pageToolViewAtom);
  let courseId = Recoil_index_20(searchParamAtomFamily("courseId"));
  let doenetId = Recoil_index_20(searchParamAtomFamily("doenetId"));
  let userId = Recoil_index_20(searchParamAtomFamily("userId"));
  let paramAttemptNumber = Recoil_index_20(
    searchParamAtomFamily("attemptNumber")
  );
  let previousCrumb = Recoil_index_20(searchParamAtomFamily("previousCrumb"));
  let attempts = Recoil_index_21(attemptData(doenetId));
  let students = Recoil_index_21(studentData);
  const setRecoilAttemptNumber = Recoil_index_24(currentAttemptNumber);
  let assignments = Recoil_index_21(assignmentData);
  let { canViewAndModifyGrades } = Recoil_index_20(
    effectivePermissionsByCourseId(courseId)
  );
  const setSuppressMenus = Recoil_index_24(suppressMenusAtom);
  let overview = Recoil_index_21(overviewData);
  const totalPointsOrPercent = Number(
    (_a = assignments.contents[doenetId]) == null ? void 0 : _a.totalPointsOrPercent
  );
  const label = (_b = assignments.contents[doenetId]) == null ? void 0 : _b.label;
  const attemptsObj = (_d = (_c = attempts == null ? void 0 : attempts.contents) == null ? void 0 : _c[userId]) == null ? void 0 : _d.attempts;
  let [attemptNumber, setAttemptNumber] = reactExports.useState(null);
  let [attemptsInfo, setAttemptsInfo] = reactExports.useState(null);
  let assignmentsTable = {};
  let maxAttempts = 0;
  reactExports.useEffect(() => {
    if (attemptsObj) {
      let attemptNumbers = Object.keys(attemptsObj).map(Number);
      let effectiveAttemptNumber = Math.max(0, ...attemptNumbers);
      if (paramAttemptNumber && paramAttemptNumber < effectiveAttemptNumber) {
        effectiveAttemptNumber = paramAttemptNumber;
      }
      setAttemptNumber(effectiveAttemptNumber);
      setRecoilAttemptNumber(effectiveAttemptNumber);
    } else {
      console.log(">>>>TODO TELL THEM YOU HAVENT TAKEN YET");
    }
  }, [
    attemptsObj,
    setAttemptNumber,
    setRecoilAttemptNumber,
    paramAttemptNumber
  ]);
  reactExports.useEffect(() => {
    if (canViewAndModifyGrades !== "1") {
      setSuppressMenus(["GradeSettings"]);
    } else {
      setSuppressMenus([]);
    }
  }, [canViewAndModifyGrades, setSuppressMenus]);
  let course = Recoil_index_20(coursePermissionsAndSettingsByCourseId(courseId));
  if ((course == null ? void 0 : course.canViewCourse) == "0") {
    return /* @__PURE__ */ jsx("h1", { children: "No Access to view this page." });
  }
  if (!doenetId || !userId) {
    return null;
  }
  async function loadAssignmentInfo(courseId2, doenetId2, userId2) {
    const {
      data: {
        success,
        message,
        foundAttempt,
        attemptInfo,
        showSolutionInGradebook,
        paginate
      }
    } = await axios.get(`/api/getGradebookAssignmentAttempts.php`, {
      params: { courseId: courseId2, doenetId: doenetId2, userId: userId2 }
    });
    let dataAttemptInfo = {};
    let contentIdToDoenetML = {};
    let solutionDisplayMode = "none";
    if (showSolutionInGradebook === "1") {
      solutionDisplayMode = "button";
    }
    for (let attempt of attemptInfo) {
      let attemptNumber2 = attempt.attemptNumber;
      let variantIndex = attempt.variantIndex;
      let doenetML = contentIdToDoenetML[attempt.cid];
      if (doenetML) {
        dataAttemptInfo[attemptNumber2] = {
          cid: attempt.cid,
          variantIndex,
          // variant:{name:gvariant?.name},
          doenetML,
          solutionDisplayMode,
          paginate
        };
      } else {
        const { data } = await axios.get(`/media/${attempt.cid}.doenet`);
        contentIdToDoenetML[attempt.cid] = data;
        dataAttemptInfo[attemptNumber2] = {
          cid: attempt.cid,
          variantIndex,
          // variant:{name:gvariant?.name},
          doenetML: data,
          solutionDisplayMode,
          paginate
        };
      }
    }
    setAttemptsInfo(dataAttemptInfo);
  }
  if (attemptsInfo === null) {
    loadAssignmentInfo(courseId, doenetId, userId);
    return null;
  }
  if (attempts.state == "hasValue" && userId !== null && userId !== "") {
    maxAttempts = Math.max(0, ...Object.keys(attemptsInfo).map(Number));
  }
  assignmentsTable.headers = [
    {
      Header: "Score",
      Footer: "Possible Points",
      accessor: "score",
      disableFilters: true
    }
  ];
  assignmentsTable.rows = [];
  if (students.state == "hasValue" && userId !== null && userId !== "") {
    let creditRow = {};
    let scoreRow = {};
    creditRow["score"] = "Percentage";
    scoreRow["score"] = "Score";
    if (attempts.state == "hasValue") {
      for (let i = 1; i <= maxAttempts; i++) {
        let attemptCredit = attempts.contents[userId].attempts[i];
        creditRow["a" + i] = attemptCredit ? Math.round(attemptCredit * 1e3) / 10 + "%" : "";
        scoreRow["a" + i] = attemptCredit ? Math.round(attemptCredit * 100 * totalPointsOrPercent) / 100 : "";
      }
      let credit = (_g = (_f = (_e = overview.contents) == null ? void 0 : _e[userId]) == null ? void 0 : _f.assignments) == null ? void 0 : _g[doenetId];
      let score = totalPointsOrPercent * credit;
      let percentage = Math.round(credit * 1e3) / 10 + "%";
      scoreRow["total"] = score;
      creditRow["total"] = percentage;
    }
    assignmentsTable.rows.push(scoreRow);
    assignmentsTable.rows.push(creditRow);
  }
  assignmentsTable.headers.push({
    Header: "Assignment Total",
    Footer: totalPointsOrPercent,
    accessor: "total",
    disableFilters: true
  });
  for (let i = 1; i <= maxAttempts; i++) {
    assignmentsTable.headers.push({
      Header: "Attempt " + i,
      Footer: totalPointsOrPercent,
      accessor: "a" + i,
      disableFilters: true,
      Cell: (row) => /* @__PURE__ */ jsxs(
        "a",
        {
          onClick: () => {
            setPageToolView({
              page: "course",
              tool: "gradebookStudentAssignment",
              view: "",
              params: {
                courseId,
                doenetId,
                userId,
                attemptNumber: i,
                previousCrumb
              }
            });
          },
          children: [
            " ",
            row.value,
            " "
          ]
        }
      )
    });
  }
  let dViewer = null;
  let attemptNumberJSX = null;
  if (attemptNumber > 0 && attemptsInfo[attemptNumber]) {
    let cid = attemptsInfo[attemptNumber].cid;
    let requestedVariantIndex = attemptsInfo[attemptNumber].variantIndex;
    let solutionDisplayMode = attemptsInfo[attemptNumber].solutionDisplayMode;
    let paginate = attemptsInfo[attemptNumber].paginate;
    dViewer = /* @__PURE__ */ jsx(
      ActivityViewer,
      {
        cid,
        doenetId,
        userId,
        forceDisable: true,
        forceShowCorrectness: true,
        forceShowSolution: solutionDisplayMode !== "none",
        forceUnsuppressCheckwork: true,
        flags: {
          showCorrectness: true,
          readOnly: true,
          solutionDisplayMode,
          showFeedback: true,
          showHints: true,
          autoSubmit: false,
          allowLoadState: true,
          allowSaveState: false,
          allowLocalState: false,
          allowSaveSubmissions: false,
          allowSaveEvents: false
          //   pageStateSource: "submissions",
        },
        attemptNumber,
        requestedVariantIndex,
        paginate
      },
      `activityViewer${doenetId}`
    );
    attemptNumberJSX = /* @__PURE__ */ jsxs("div", { style: { paddingLeft: "8px" }, children: [
      "Viewing attempt number ",
      attemptNumber
    ] });
  } else {
    attemptNumberJSX = /* @__PURE__ */ jsxs("div", { style: { paddingLeft: "8px" }, children: [
      "No content available for attempt number ",
      attemptNumber
    ] });
  }
  let studentName = `${(_h = students.contents[userId]) == null ? void 0 : _h.firstName} ${(_i = students.contents[userId]) == null ? void 0 : _i.lastName}`;
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("div", { style: { marginLeft: "18px" }, children: /* @__PURE__ */ jsxs("b", { children: [
      "Gradebook for ",
      studentName
    ] }) }),
    /* @__PURE__ */ jsx("div", { style: { paddingLeft: "18px" }, children: /* @__PURE__ */ jsx("b", { children: label }) }),
    /* @__PURE__ */ jsxs("div", { style: { paddingLeft: "18px" }, children: [
      totalPointsOrPercent,
      " Points Possible"
    ] }),
    /* @__PURE__ */ jsx(Styles, { children: /* @__PURE__ */ jsx(
      Table,
      {
        columns: assignmentsTable.headers,
        data: assignmentsTable.rows
      }
    ) }),
    attemptNumber > 0 ? /* @__PURE__ */ jsxs(Fragment, { children: [
      attemptNumberJSX,
      dViewer
    ] }) : /* @__PURE__ */ jsx("div", { children: "Click an attempt's grade to see your attempt" })
  ] });
}
export {
  GradebookStudentAssignmentView as default
};
