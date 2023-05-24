import { t as Recoil_index_20, W as searchParamAtomFamily, r as reactExports, h as axios, ag as UTCDateStringToDate, j as jsx } from "./PageViewer-d914b069.js";
import { l as loadAssignmentSelector } from "./CourseToolHandler-1976a165.js";
import { currentAttemptNumber } from "./AssignmentViewer-40516027.js";
import "./index-badc91d0.js";
import "./index-a634ad2f.js";
import "./index-72e7d0b2.js";
import "./index.esm-b50f3a4c.js";
import "./extends-d9a14db7.js";
import "./setPrototypeOf-be240aa9.js";
import "./inheritsLoose-000f9e77.js";
/* empty css               */import "./ButtonGroup-b585a5ef.js";
import "./ActivityViewer-b51a59ab.js";
import "./activityUtils-7af1fc96.js";
import "./visibility-sensor-57589aaf.js";
import "./ActionButton-1e9c5f7a.js";
import "./RoleDropdown-ece1f3f8.js";
import "./DropdownMenu-d8160745.js";
import "./defineProperty-2975ceb9.js";
import "./emotion-react.browser.esm-dfafc3e8.js";
import "./emotion-element-6a883da9.browser.esm-2d3713e7.js";
function TimerMenu() {
  const doenetId = Recoil_index_20(searchParamAtomFamily("doenetId"));
  const userAttemptNumber = Recoil_index_20(currentAttemptNumber);
  const { timeLimit } = Recoil_index_20(loadAssignmentSelector(doenetId));
  let [timeDisplay, setTimeDisplay] = reactExports.useState("Unlimited");
  const [endTime, setEndTime] = reactExports.useState(null);
  const [refresh, setRefresh] = reactExports.useState(/* @__PURE__ */ new Date());
  let timer = reactExports.useRef(null);
  reactExports.useEffect(() => {
    let startDT = /* @__PURE__ */ new Date();
    axios.get("/api/loadAttemptStartTime.php", {
      params: { doenetId, attemptNumber: userAttemptNumber }
    }).then(({ data }) => {
      if (data.attemptStart !== null) {
        startDT = UTCDateStringToDate(data.attemptStart);
      }
      let endDT = new Date(
        startDT.getTime() + timeLimit * 6e4 * data.timeLimitMultiplier
      );
      setEndTime(endDT);
    }).catch(console.error);
  }, [userAttemptNumber, timeLimit, doenetId, setEndTime]);
  reactExports.useEffect(() => {
    clearTimeout(timer.current);
    if (timeLimit > 0) {
      let mins_floor = Math.floor((endTime - /* @__PURE__ */ new Date()) / 6e4);
      let mins_raw = (endTime - /* @__PURE__ */ new Date()) / 6e4;
      if (mins_raw <= 0) {
        setTimeDisplay(`Time's Up`);
      } else {
        if (mins_raw < 1) {
          setTimeDisplay(`< 1 Min`);
        } else if (mins_floor === 1) {
          setTimeDisplay(`1 Min`);
        } else {
          setTimeDisplay(`${mins_floor} Mins`);
        }
        timer.current = setTimeout(() => {
          if (mins_raw >= 0) {
            setRefresh(/* @__PURE__ */ new Date());
          }
        }, 1e4);
      }
    }
  }, [refresh, endTime]);
  return /* @__PURE__ */ jsx("div", { style: { fontSize: "40px", textAlign: "center" }, children: timeDisplay });
}
export {
  TimerMenu as default
};
