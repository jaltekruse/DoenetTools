import { t as Recoil_index_20, W as searchParamAtomFamily, a0 as Recoil_index_31, h as axios, b as jsxs, F as Fragment, j as jsx, B as Button, c as FontAwesomeIcon, bw as faPlus, bb as faTimes } from "./PageViewer-d914b069.js";
import { c as classTimesAtom } from "./Next7Days-583735fe.js";
import { D as DropdownMenu } from "./DropdownMenu-d8160745.js";
import { D as DateTime } from "./DateTime-4edca487.js";
import "./CourseToolHandler-1976a165.js";
import "./index-badc91d0.js";
import "./index-a634ad2f.js";
import "./index-72e7d0b2.js";
import "./index.esm-b50f3a4c.js";
import "./extends-d9a14db7.js";
import "./setPrototypeOf-be240aa9.js";
import "./inheritsLoose-000f9e77.js";
/* empty css               */import "./ButtonGroup-b585a5ef.js";
import "./RoleDropdown-ece1f3f8.js";
import "./defineProperty-2975ceb9.js";
import "./emotion-react.browser.esm-dfafc3e8.js";
import "./emotion-element-6a883da9.browser.esm-2d3713e7.js";
import "./moment-feb1c730.js";
function ClassTimes() {
  const timesObj = Recoil_index_20(classTimesAtom);
  const courseId = Recoil_index_20(searchParamAtomFamily("courseId"));
  const addClassTime = Recoil_index_31(
    ({ set, snapshot }) => async (courseId2) => {
      let prevTimesArr = await snapshot.getPromise(classTimesAtom);
      let nextArr = [...prevTimesArr];
      nextArr.push({
        dotwIndex: 1,
        // monday 9 to 10 am
        startTime: "09:00",
        endTime: "10:00"
      });
      set(classTimesAtom, nextArr);
      let dotwIndexes = [];
      let startTimes = [];
      let endTimes = [];
      for (let classTime of nextArr) {
        dotwIndexes.push(classTime.dotwIndex);
        startTimes.push(classTime.startTime);
        endTimes.push(classTime.endTime);
      }
      await axios.post("/api/updateClassTimes.php", {
        courseId: courseId2,
        dotwIndexes,
        startTimes,
        endTimes
      });
    }
  );
  const updateClassTime = Recoil_index_31(
    ({ set, snapshot }) => async ({ index, nextClassTime, courseId: courseId2 }) => {
      let was = await snapshot.getPromise(classTimesAtom);
      let nextArr = [...was];
      nextArr[index] = { ...nextClassTime };
      set(classTimesAtom, nextArr);
      let dotwIndexes = [];
      let startTimes = [];
      let endTimes = [];
      for (let classTime of nextArr) {
        dotwIndexes.push(classTime.dotwIndex);
        startTimes.push(classTime.startTime);
        endTimes.push(classTime.endTime);
      }
      await axios.post("/api/updateClassTimes.php", {
        courseId: courseId2,
        dotwIndexes,
        startTimes,
        endTimes
      });
    }
  );
  const deleteClassTime = Recoil_index_31(
    ({ set, snapshot }) => async ({ index, courseId: courseId2 }) => {
      let was = await snapshot.getPromise(classTimesAtom);
      let nextArr = [...was];
      nextArr.splice(index, 1);
      set(classTimesAtom, nextArr);
      let dotwIndexes = [];
      let startTimes = [];
      let endTimes = [];
      for (let classTime of nextArr) {
        dotwIndexes.push(classTime.dotwIndex);
        startTimes.push(classTime.startTime);
        endTimes.push(classTime.endTime);
      }
      await axios.post("/api/updateClassTimes.php", {
        courseId: courseId2,
        dotwIndexes,
        startTimes,
        endTimes
      });
    }
  );
  const dotwItems = [
    [1, "Monday"],
    [2, "Tuesday"],
    [3, "Wednesday"],
    [4, "Thursday"],
    [5, "Friday"],
    [6, "Saturday"],
    [0, "Sunday"]
  ];
  let timesJSX = [];
  for (let [index, timeObj] of Object.entries(timesObj)) {
    const startTimeWholeDate = /* @__PURE__ */ new Date();
    startTimeWholeDate.setHours(timeObj.startTime.split(":")[0]);
    startTimeWholeDate.setMinutes(timeObj.startTime.split(":")[1]);
    const endTimeWholeDate = /* @__PURE__ */ new Date();
    endTimeWholeDate.setHours(timeObj.endTime.split(":")[0]);
    endTimeWholeDate.setMinutes(timeObj.endTime.split(":")[1]);
    let dropDownDOTWIndex = timeObj.dotwIndex;
    if (timeObj.dotwIndex == 0) {
      dropDownDOTWIndex = 7;
    }
    timesJSX.push(
      /* @__PURE__ */ jsxs(Fragment, { children: [
        /* @__PURE__ */ jsxs("tr", { children: [
          /* @__PURE__ */ jsx("td", { style: { width: "190px" }, children: /* @__PURE__ */ jsx(
            DropdownMenu,
            {
              dataTest: `DOTW Dropdown ${index}`,
              width: "180px",
              items: dotwItems,
              valueIndex: dropDownDOTWIndex,
              onChange: ({ value }) => {
                let nextClassTime = { ...timeObj };
                nextClassTime.dotwIndex = value;
                updateClassTime({ courseId, index, nextClassTime });
              }
            }
          ) }),
          /* @__PURE__ */ jsx(
            Button,
            {
              dataTest: `Classtime Delete Button ${index}`,
              icon: /* @__PURE__ */ jsx(FontAwesomeIcon, { icon: faTimes }),
              alert: true,
              onClick: () => {
                deleteClassTime({ index, courseId });
              }
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("tr", { style: { width: "190px", display: "flex", alignItems: "center" }, children: [
          /* @__PURE__ */ jsx("td", { children: /* @__PURE__ */ jsx(
            DateTime,
            {
              dataTest: `Classtime start time ${index}`,
              datePicker: false,
              width: "74px",
              value: startTimeWholeDate,
              onBlur: (value, valid) => {
                let nextClassTime = { ...timeObj };
                nextClassTime.startTime = new Date(
                  value.value._d
                ).toLocaleString("en-US", {
                  hour12: false,
                  hour: "2-digit",
                  minute: "2-digit"
                });
                updateClassTime({ courseId, index, nextClassTime });
              }
            }
          ) }),
          /* @__PURE__ */ jsx("td", { style: { marginLeft: "6px", marginRight: "6px" }, children: "-" }),
          /* @__PURE__ */ jsx("td", { style: { ["--menuPanelMargin"]: "-62px" }, children: /* @__PURE__ */ jsx(
            DateTime,
            {
              dataTest: `Classtime end time ${index}`,
              datePicker: false,
              width: "74px",
              value: endTimeWholeDate,
              onBlur: (value, valid) => {
                let nextClassTime = { ...timeObj };
                nextClassTime.endTime = new Date(value.value._d).toLocaleString(
                  "en-US",
                  {
                    hour12: false,
                    hour: "2-digit",
                    minute: "2-digit"
                  }
                );
                updateClassTime({ courseId, index, nextClassTime });
              }
            }
          ) })
        ] }),
        /* @__PURE__ */ jsx("div", { style: { margin: "10px" } })
      ] })
    );
  }
  let classTimesTable = /* @__PURE__ */ jsx("div", { children: "No times set." });
  if (timesJSX.length > 0) {
    classTimesTable = /* @__PURE__ */ jsx("table", { style: { width: "230px", margins: "5px" }, children: timesJSX });
  }
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    classTimesTable,
    /* @__PURE__ */ jsx(
      Button,
      {
        dataTest: "Add Classtime",
        icon: /* @__PURE__ */ jsx(FontAwesomeIcon, { icon: faPlus }),
        style: { margin: "auto" },
        onClick: () => addClassTime(courseId)
      }
    )
  ] });
}
export {
  ClassTimes as default
};
