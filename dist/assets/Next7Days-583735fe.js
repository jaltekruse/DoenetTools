import { o as Recoil_index_24, p as pageToolViewAtom, t as Recoil_index_20, ai as useInitCourseItems, r as reactExports, a0 as Recoil_index_31, Y as mainPanelClickAtom, Z as selectedMenuPanelAtom, h as axios, a8 as itemByDoenetId, a9 as findFirstPageOfActivity, j as jsx, ag as UTCDateStringToDate, b as jsxs, F as Fragment, B as Button, c as FontAwesomeIcon, f as faChevronLeft, d as faChevronRight, aA as Recoil_index_8, a5 as CheckboxButton, b7 as faThumbtack } from "./PageViewer-d914b069.js";
import { g as globalSelectedNodesAtom, c as clearDriveAndItemSelections } from "./CourseToolHandler-1976a165.js";
import { B as ButtonGroup } from "./ButtonGroup-b585a5ef.js";
import { e as effectivePermissionsByCourseId } from "./RoleDropdown-ece1f3f8.js";
const classTimesAtom = Recoil_index_8({
  key: "classTimesAtom",
  default: []
});
const showCompletedAtom = Recoil_index_8({
  key: "showCompletedAtom",
  default: true
});
const showOverdueAtom = Recoil_index_8({
  key: "showOverdueAtom",
  default: false
});
function formatAssignedDate(dt, classTimes, dueDT, thisWeek) {
  if (dt == "Invalid Date" || dt == null) {
    return null;
  }
  let dtDOTW = dt.getDay();
  for (let classTime of classTimes) {
    if (classTime.dotwIndex == dtDOTW) {
      let classStartDT = new Date(dt.getTime());
      const [starthours, startminutes] = classTime.startTime.split(":");
      classStartDT.setHours(starthours, startminutes, 0, 0);
      let classEndDT = new Date(dt.getTime());
      const [endhours, endminutes] = classTime.endTime.split(":");
      classEndDT.setHours(endhours, endminutes, 0, 0);
      if (dt >= classStartDT && dt < classEndDT) {
        if (dt.getMonth() != dueDT.getMonth() || dt.getDate() != dueDT.getDate()) {
          return `In Class ${dt.getMonth() + 1}/${dt.getDate()}`;
        }
        return "In Class";
      } else if (dt.getTime() == classEndDT.getTime()) {
        if (dt.getMonth() != dueDT.getMonth() || dt.getDate() != dueDT.getDate()) {
          return `After Class ${dt.getMonth() + 1}/${dt.getDate()}`;
        }
        return "After Class";
      }
    }
  }
  let time = dt.toLocaleString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true
  });
  if (time === "Invalid Date") {
    time = null;
  }
  if (thisWeek) {
    let today = /* @__PURE__ */ new Date();
    let yesterday = new Date(today.getTime() + 1e3 * 60 * 60 * 24 * -1);
    let tomorrow = new Date(today.getTime() + 1e3 * 60 * 60 * 24 * 1);
    if (dt.getMonth() == yesterday.getMonth() && dt.getDate() == yesterday.getDate() && dt.getFullYear() == yesterday.getFullYear()) {
      return `Yesterday - ${time}`;
    }
    if (dt.getMonth() == tomorrow.getMonth() && dt.getDate() == tomorrow.getDate() && dt.getFullYear() == tomorrow.getFullYear()) {
      return `Tomorrow - ${time}`;
    }
    const dotwLabel = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ];
    return `${dotwLabel[dt.getDay()]} - ${time}`;
  }
  let returnValue = `${dt.getMonth() + 1}/${dt.getDate()} ${time}`;
  if (time === null) {
    returnValue = null;
  }
  return returnValue;
}
function formatDueDate(dt, classTimes) {
  if (dt == "Invalid Date" || dt == null) {
    return null;
  }
  let dtDOTW = dt.getDay();
  for (let classTime of classTimes) {
    if (classTime.dotwIndex == dtDOTW) {
      let classStartDT = new Date(dt.getTime());
      const [starthours, startminutes] = classTime.startTime.split(":");
      classStartDT.setHours(starthours, startminutes, 0, 0);
      let classEndDT = new Date(dt.getTime());
      const [endhours, endminutes] = classTime.endTime.split(":");
      classEndDT.setHours(endhours, endminutes, 0, 0);
      if (dt.getTime() == classStartDT.getTime()) {
        return "Before Class";
      } else if (dt > classStartDT && dt < classEndDT) {
        return "In Class";
      } else if (dt.getTime() == classEndDT.getTime()) {
        return "End of Class";
      }
    }
  }
  let returnValue = dt.toLocaleString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true
  });
  returnValue = `${dt.getMonth() + 1}/${dt.getDate()} ${returnValue}`;
  if (returnValue === "Invalid Date") {
    returnValue = null;
  }
  return returnValue;
}
function buildRows({
  dotw = "",
  rowLabel = "",
  assignments,
  clickCallback,
  completedArray,
  setCompletedArray,
  classTimes,
  weekShift,
  selectedItemId,
  showCompleted
}) {
  let newRows = [];
  if (assignments.length > 0) {
    let isFirstRow = true;
    let numberOfVisibleRows = 0;
    for (let assignment of assignments) {
      let checked = completedArray.includes(assignment.doenetId);
      if (showCompleted || !showCompleted && !checked) {
        numberOfVisibleRows++;
      }
    }
    for (let i = 0; i < assignments.length; i++) {
      let assignment = assignments[i];
      let assignedDate = UTCDateStringToDate(assignment.assignedDate);
      let displayAssignedDate = "";
      if (assignedDate) {
        assignedDate.setSeconds(0, 0);
      }
      let dueDate = UTCDateStringToDate(assignment.dueDate);
      let displayDueDate = "";
      let effectiveRowLabel = "";
      if (dueDate) {
        dueDate.setSeconds(0, 0);
        effectiveRowLabel = `${dotw} `;
        displayDueDate = formatDueDate(dueDate, classTimes);
        if (assignedDate) {
          displayAssignedDate = formatAssignedDate(
            assignedDate,
            classTimes,
            dueDate,
            weekShift == 0
          );
        }
      }
      if (rowLabel !== "") {
        effectiveRowLabel = rowLabel;
      }
      let bgColor = null;
      if (assignment.itemId === selectedItemId) {
        bgColor = "#B8D2EA";
      }
      let oneClick = (e) => {
        e.stopPropagation();
        clickCallback({
          courseId: assignment.courseId,
          doenetId: assignment.doenetId
        });
      };
      let checked = completedArray.includes(assignment.doenetId);
      if (!showCompleted && checked) {
        continue;
      }
      let score = "";
      if (assignment.gradeCategory) {
        const totalPointsOrPercent = Number(assignment.totalPointsOrPercent);
        let pointsAwarded = Math.round(assignment.credit * totalPointsOrPercent * 100) / 100;
        if (assignment.creditOverride) {
          pointsAwarded = Math.round(assignment.creditOverride * totalPointsOrPercent * 100) / 100;
        }
        score = `${pointsAwarded}/${totalPointsOrPercent}`;
      }
      let checkbox = /* @__PURE__ */ jsx(
        CheckboxButton,
        {
          checked,
          onClick: (e) => {
            e.stopPropagation();
            if (checked) {
              setCompletedArray((was) => {
                let newObj = [...was];
                newObj.splice(newObj.indexOf(assignment.doenetId), 1);
                return newObj;
              });
            } else {
              setCompletedArray((was) => {
                let newObj = [assignment.doenetId, ...was];
                return newObj;
              });
            }
            axios.get("/api/saveCompleted.php", {
              params: { doenetId: assignment.doenetId }
            });
          }
        }
      );
      if (isFirstRow) {
        isFirstRow = false;
        newRows.push(
          /* @__PURE__ */ jsxs(
            "tr",
            {
              "data-test": `cbw row ${i}`,
              children: [
                /* @__PURE__ */ jsx(
                  "td",
                  {
                    "data-test": `cbw row label ${i}`,
                    style: { borderBottom: "2px solid black", padding: "8px" },
                    rowSpan: numberOfVisibleRows,
                    children: effectiveRowLabel
                  }
                ),
                /* @__PURE__ */ jsx(
                  "td",
                  {
                    "data-test": `cbw assignment label ${i}`,
                    style: {
                      backgroundColor: bgColor,
                      padding: "8px",
                      borderBottom: "2px solid black",
                      cursor: "pointer"
                    },
                    onClick: oneClick,
                    children: assignment.label
                  }
                ),
                /* @__PURE__ */ jsx(
                  "td",
                  {
                    "data-test": `cbw assigned date ${i}`,
                    style: {
                      backgroundColor: bgColor,
                      padding: "8px",
                      borderBottom: "2px solid black",
                      cursor: "pointer"
                    },
                    onClick: oneClick,
                    children: displayAssignedDate
                  }
                ),
                /* @__PURE__ */ jsx(
                  "td",
                  {
                    "data-test": `cbw due date ${i}`,
                    style: {
                      backgroundColor: bgColor,
                      padding: "8px",
                      borderBottom: "2px solid black",
                      cursor: "pointer"
                    },
                    onClick: oneClick,
                    children: displayDueDate
                  }
                ),
                /* @__PURE__ */ jsx(
                  "td",
                  {
                    "data-test": `cbw score ${i}`,
                    style: {
                      backgroundColor: bgColor,
                      padding: "8px",
                      borderBottom: "2px solid black",
                      textAlign: "center"
                    },
                    children: score
                  }
                ),
                /* @__PURE__ */ jsx(
                  "td",
                  {
                    "data-test": `cbw completed ${i}`,
                    style: {
                      backgroundColor: bgColor,
                      padding: "8px",
                      borderBottom: "2px solid black",
                      textAlign: "center"
                    },
                    children: checkbox
                  }
                )
              ]
            },
            `${effectiveRowLabel}${assignment.doenetId}`
          )
        );
      } else {
        newRows.push(
          /* @__PURE__ */ jsxs(
            "tr",
            {
              "data-test": `cbw row ${i}`,
              children: [
                /* @__PURE__ */ jsx(
                  "td",
                  {
                    "data-test": `cbw assignment label ${i}`,
                    style: {
                      backgroundColor: bgColor,
                      padding: "8px",
                      borderBottom: "2px solid black",
                      cursor: "pointer"
                    },
                    onClick: oneClick,
                    children: assignment.label
                  }
                ),
                /* @__PURE__ */ jsx(
                  "td",
                  {
                    "data-test": `cbw assigned date ${i}`,
                    style: {
                      backgroundColor: bgColor,
                      padding: "8px",
                      borderBottom: "2px solid black",
                      cursor: "pointer"
                    },
                    onClick: oneClick,
                    children: displayAssignedDate
                  }
                ),
                /* @__PURE__ */ jsx(
                  "td",
                  {
                    "data-test": `cbw due date ${i}`,
                    style: {
                      backgroundColor: bgColor,
                      padding: "8px",
                      borderBottom: "2px solid black",
                      cursor: "pointer"
                    },
                    onClick: oneClick,
                    children: displayDueDate
                  }
                ),
                /* @__PURE__ */ jsx(
                  "td",
                  {
                    "data-test": `cbw score ${i}`,
                    style: {
                      backgroundColor: bgColor,
                      padding: "8px",
                      borderBottom: "2px solid black",
                      textAlign: "center"
                    },
                    children: score
                  }
                ),
                /* @__PURE__ */ jsx(
                  "td",
                  {
                    "data-test": `cbw completed ${i}`,
                    style: {
                      backgroundColor: bgColor,
                      padding: "8px",
                      borderBottom: "2px solid black",
                      textAlign: "center"
                    },
                    children: checkbox
                  }
                )
              ]
            },
            `${effectiveRowLabel}${assignment.doenetId}${i}`
          )
        );
      }
    }
  }
  return newRows;
}
function Next7Days({ courseId }) {
  var _a;
  const setPageToolView = Recoil_index_24(pageToolViewAtom);
  const showCompleted = Recoil_index_20(showCompletedAtom);
  const showOverdue = Recoil_index_20(showOverdueAtom);
  useInitCourseItems(courseId);
  let [assignmentArray, setAssignmentArray] = reactExports.useState([]);
  let [pinnedArray, setPinnedArray] = reactExports.useState([]);
  let [completedArray, setCompletedArray] = reactExports.useState([]);
  let [initialized, setInitialized] = reactExports.useState(false);
  let [problemMessage, setProblemMessage] = reactExports.useState("");
  let [weekShift, setWeekShift] = reactExports.useState(0);
  let classTimes = Recoil_index_20(classTimesAtom);
  let selected = Recoil_index_20(globalSelectedNodesAtom);
  let selectedItemId = null;
  if (((_a = selected[0]) == null ? void 0 : _a.driveInstanceId) === "currentContent") {
    selectedItemId = selected[0].itemId;
  }
  let loadAssignmentArray = Recoil_index_31(({ set }) => async (courseId2) => {
    set(mainPanelClickAtom, (was) => [
      ...was,
      { atom: clearDriveAndItemSelections, value: null },
      { atom: selectedMenuPanelAtom, value: null }
    ]);
    const { data } = await axios.get("/api/loadTODO.php", {
      params: { courseId: courseId2 }
    });
    if (!data.success) {
      setProblemMessage(data.message);
      return;
    }
    if (data.assignments) {
      setAssignmentArray(data.assignments);
      setPinnedArray(data.pinned);
    }
    if (data.classTimes) {
      set(classTimesAtom, data.classTimes);
    }
    if (data.completed) {
      setCompletedArray(data.completed);
    }
  });
  const clickCallback = Recoil_index_31(
    ({ set, snapshot }) => async (info) => {
      const courseId2 = info.courseId;
      const doenetId = info.doenetId;
      let { canEditContent } = await snapshot.getPromise(
        effectivePermissionsByCourseId(courseId2)
      );
      if (canEditContent === "1") {
        let itemObj = await snapshot.getPromise(itemByDoenetId(doenetId));
        let pageId = findFirstPageOfActivity(itemObj.content);
        setPageToolView({
          page: "course",
          tool: "editor",
          view: "",
          params: {
            doenetId,
            pageId
          }
        });
      } else {
        setPageToolView({
          page: "course",
          tool: "assignment",
          view: "",
          params: {
            doenetId
          }
        });
      }
    },
    []
  );
  if (!initialized && courseId !== "") {
    setInitialized(true);
    loadAssignmentArray(courseId);
    return null;
  }
  if (problemMessage !== "") {
    return /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("h2", { children: problemMessage }) });
  }
  let today = /* @__PURE__ */ new Date();
  let diff = 1 - today.getDay();
  if (diff === 1) {
    diff = -6;
  }
  let monday = new Date(
    today.getTime() + 1e3 * 60 * 60 * 24 * diff + 1e3 * 60 * 60 * 24 * weekShift * 7
  );
  let sunday = new Date(monday.getTime() + 1e3 * 60 * 60 * 24 * 6);
  let headerMonday = `${monday.getMonth() + 1}/${monday.getDate()}`;
  let headerSunday = `${sunday.getMonth() + 1}/${sunday.getDate()}`;
  let pinnedRows = [];
  let overdueRows = [];
  let pinnedName = /* @__PURE__ */ jsxs("p", { children: [
    /* @__PURE__ */ jsx(FontAwesomeIcon, { icon: faThumbtack }),
    " Pinned"
  ] });
  if (weekShift == 0) {
    pinnedRows.push(
      ...buildRows({
        rowLabel: pinnedName,
        assignments: pinnedArray,
        clickCallback,
        completedArray,
        setCompletedArray,
        classTimes,
        weekShift,
        selectedItemId,
        showCompleted
      })
    );
    if (showOverdue) {
      const now = /* @__PURE__ */ new Date();
      let overdueArray = [];
      for (let assignment of assignmentArray) {
        const due = UTCDateStringToDate(assignment.dueDate);
        if (!due || due > now) {
          break;
        }
        if (!completedArray.includes(assignment.doenetId)) {
          overdueArray.push(assignment);
        }
      }
      overdueRows.push(
        ...buildRows({
          rowLabel: "Overdue",
          assignments: overdueArray,
          clickCallback,
          completedArray,
          setCompletedArray,
          classTimes,
          weekShift,
          selectedItemId,
          showCompleted
        })
      );
    }
  }
  let dayRows = [];
  let beginningOfMondayDT = new Date(monday.getTime());
  beginningOfMondayDT.setHours(0, 0, 0, 0);
  let endOfSundayDT = new Date(sunday.getTime());
  endOfSundayDT.setHours(23, 59, 59, 999);
  let dueByDOTW = [[], [], [], [], [], [], []];
  for (let i = 0; i < assignmentArray.length; i++) {
    let assignment = assignmentArray[i];
    let dueDate = UTCDateStringToDate(assignment.dueDate);
    if (!dueDate || dueDate < beginningOfMondayDT) {
      continue;
    }
    if (dueDate > endOfSundayDT) {
      break;
    }
    let assignmentDOTW = dueDate.getDay();
    dueByDOTW[assignmentDOTW].push({ ...assignment });
  }
  dueByDOTW.push(dueByDOTW.shift());
  const dotwLabel = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday"
  ];
  for (let [index, dayAssignments] of Object.entries(dueByDOTW)) {
    dayRows.push(
      ...buildRows({
        dotw: dotwLabel[index],
        assignments: dayAssignments,
        clickCallback,
        completedArray,
        setCompletedArray,
        classTimes,
        weekShift,
        selectedItemId,
        showCompleted
      })
    );
  }
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs(
      "div",
      {
        style: {
          display: "flex",
          // backgroundColor:"grey",
          alignItems: "center",
          justifyContent: "space-evenly",
          width: "850px",
          height: "70px"
        },
        children: [
          /* @__PURE__ */ jsxs("span", { children: [
            /* @__PURE__ */ jsx(Button, { onClick: () => setWeekShift(0), value: "This Week" }),
            " "
          ] }),
          /* @__PURE__ */ jsx("h1", { children: "Content by Week" }),
          /* @__PURE__ */ jsxs("span", { style: { fontSize: "1.4em" }, children: [
            headerMonday,
            " - ",
            headerSunday
          ] }),
          /* @__PURE__ */ jsxs(ButtonGroup, { children: [
            /* @__PURE__ */ jsx("span", { children: /* @__PURE__ */ jsx(
              Button,
              {
                dataTest: "previous week button",
                onClick: () => setWeekShift((was) => was - 1),
                icon: /* @__PURE__ */ jsx(FontAwesomeIcon, { icon: faChevronLeft })
              }
            ) }),
            /* @__PURE__ */ jsx("span", { children: /* @__PURE__ */ jsx(
              Button,
              {
                dataTest: "next week button",
                onClick: () => setWeekShift((was) => was + 1),
                icon: /* @__PURE__ */ jsx(FontAwesomeIcon, { icon: faChevronRight })
              }
            ) })
          ] })
        ]
      }
    ),
    /* @__PURE__ */ jsxs("table", { style: { width: "850px", borderSpacing: "0em .2em" }, children: [
      /* @__PURE__ */ jsxs("tr", { children: [
        /* @__PURE__ */ jsx(
          "th",
          {
            style: {
              width: "100px",
              padding: "8px",
              textAlign: "left",
              borderBottom: "2px solid black"
            },
            children: "Day"
          }
        ),
        /* @__PURE__ */ jsx(
          "th",
          {
            style: {
              width: "200px",
              padding: "8px",
              textAlign: "left",
              borderBottom: "2px solid black"
            },
            children: "Name"
          }
        ),
        /* @__PURE__ */ jsx(
          "th",
          {
            style: {
              width: "200px",
              padding: "8px",
              textAlign: "left",
              borderBottom: "2px solid black"
            },
            children: "Assigned"
          }
        ),
        /* @__PURE__ */ jsx(
          "th",
          {
            style: {
              width: "200px",
              padding: "8px",
              textAlign: "left",
              borderBottom: "2px solid black"
            },
            children: "Due"
          }
        ),
        /* @__PURE__ */ jsx(
          "th",
          {
            style: {
              width: "50px",
              padding: "8px",
              textAlign: "left",
              borderBottom: "2px solid black"
            },
            children: "Score"
          }
        ),
        /* @__PURE__ */ jsx(
          "th",
          {
            style: {
              width: "100px",
              padding: "8px",
              textAlign: "center",
              borderBottom: "2px solid black"
            },
            children: "Completed"
          }
        )
      ] }),
      pinnedRows,
      overdueRows,
      dayRows
    ] })
  ] });
}
export {
  Next7Days as N,
  showCompletedAtom as a,
  classTimesAtom as c,
  showOverdueAtom as s
};
