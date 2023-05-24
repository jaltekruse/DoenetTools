import { s as styled, bn as faCalendarPlus, bo as faCalendarTimes, r as reactExports, j as jsx, c as FontAwesomeIcon, t as Recoil_index_20, W as searchParamAtomFamily, a3 as useToast, b as jsxs, h as axios, bp as DateToDisplayDateString, ag as UTCDateStringToDate, a4 as toastType, F as Fragment, be as DateToDateString, b2 as DateToUTCDateString } from "./PageViewer-d914b069.js";
import { D as DateTime } from "./DateTime-4edca487.js";
import { I as Increment } from "./IncrementMenu-19c70527.js";
import "./moment-feb1c730.js";
const doenetMainBlue = "var(--mainBlue)";
const Button = styled.button`
  height: 24px;
  border: 2px solid;
  border-color: ${(props) => props.color};
  border-radius: 5px;
  color: var(--canvas);
  background-color: ${(props) => props.color};
`;
function CalendarButton(props) {
  const icon = props.checked ? faCalendarPlus : faCalendarTimes;
  const color = props.checked ? doenetMainBlue : "var(--mainGray)";
  const buttonRef = reactExports.useRef(null);
  return /* @__PURE__ */ jsx(
    Button,
    {
      color,
      ref: buttonRef,
      onClick: (e) => {
        props.onClick(e);
      },
      children: /* @__PURE__ */ jsx(FontAwesomeIcon, { icon })
    }
  );
}
function GradeSettings() {
  let courseId = Recoil_index_20(searchParamAtomFamily("courseId"));
  let doenetId = Recoil_index_20(searchParamAtomFamily("doenetId"));
  let userId = Recoil_index_20(searchParamAtomFamily("userId"));
  const [attemptsAllowedAdjustment, setAttemptsAllowedAdjustment] = reactExports.useState(null);
  const [baseAttemptsAllowed, setBaseAttemptsAllowed] = reactExports.useState(null);
  let [dueDateOverride, setDueDateOverride] = reactExports.useState(null);
  let [dueDate, setDueDate] = reactExports.useState(null);
  let [initialized, setInitialized] = reactExports.useState(false);
  const addToast = useToast();
  reactExports.useEffect(() => {
    async function loadAdjustmentInfo(doenetId2, userId2, courseId2) {
      let resp = await axios.get(
        "/api/loadGradebookAdjustmentSettingsInfo.php",
        {
          params: { doenetId: doenetId2, userId: userId2, courseId: courseId2 }
        }
      );
      let numberOfAttemptsAllowedAdjustment = Number(
        resp.data.numberOfAttemptsAllowedAdjustment
      );
      setAttemptsAllowedAdjustment(numberOfAttemptsAllowedAdjustment);
      let baseAttemptsAllowed2 = "unlimited";
      if (resp.data.baseAttemptsAllowed != "unlimited") {
        baseAttemptsAllowed2 = Number(resp.data.baseAttemptsAllowed);
      }
      setBaseAttemptsAllowed(baseAttemptsAllowed2);
    }
    if (attemptsAllowedAdjustment == null) {
      loadAdjustmentInfo(doenetId, userId, courseId);
    }
  }, [attemptsAllowedAdjustment, doenetId, userId, courseId]);
  const loadDueDates = async (doenetId2, userId2) => {
    try {
      let { data } = await axios.get(`/api/loadDueDateInfo.php`, {
        params: { courseId, doenetId: doenetId2, userId: userId2 }
      });
      setInitialized(true);
      if (data.success) {
        const dataDueDateOverride = data.dueDateInfo.dueDateOverride;
        let localTimeZoneDueDateOverride = null;
        if (dataDueDateOverride) {
          localTimeZoneDueDateOverride = DateToDisplayDateString(
            UTCDateStringToDate(dataDueDateOverride)
          );
        }
        setDueDateOverride(localTimeZoneDueDateOverride);
        const dataDueDate = data.dueDateInfo.dueDate;
        let localTimeZoneDueDate = "No Due Date";
        if (dataDueDate) {
          localTimeZoneDueDate = DateToDisplayDateString(
            UTCDateStringToDate(dataDueDate)
          );
        }
        setDueDate(localTimeZoneDueDate);
      } else {
        addToast(`ERROR: ${data.message}`, toastType.ERROR);
      }
    } catch (e) {
      addToast(`ERROR: ${e}`, toastType.ERROR);
    }
  };
  const storeDueDateOverride = async (doenetId2, userId2, newDateString) => {
    if (newDateString === null) {
      newDateString = "Cancel Due Date Override";
    } else {
      newDateString = DateToUTCDateString(new Date(newDateString));
    }
    try {
      let { data } = await axios.get(`/api/saveDueDateInfo.php`, {
        params: { doenetId: doenetId2, userId: userId2, newDateString }
      });
      if (data.success) {
        if (newDateString === "Cancel Due Date Override") {
          addToast(`Cancelled Due Date Override!`, toastType.SUCCESS);
        } else {
          const displayDate = DateToDisplayDateString(new Date(newDateString));
          addToast(
            `Set Due Date Override to ${displayDate}`,
            toastType.SUCCESS
          );
        }
      } else {
        addToast(`ERROR: ${data.message}`, toastType.ERROR);
      }
    } catch (e) {
      addToast(`ERROR: ${e}`, toastType.ERROR);
    }
  };
  if (!doenetId || !userId) {
    return null;
  }
  if (!initialized) {
    loadDueDates(doenetId, userId);
  }
  let dueDateJSX = /* @__PURE__ */ jsxs(Fragment, { children: [
    "Due Date Override:",
    /* @__PURE__ */ jsxs(
      "div",
      {
        style: { display: "flex" },
        onClick: (e) => {
          e.preventDefault();
        },
        children: [
          /* @__PURE__ */ jsx(
            CalendarButton,
            {
              checked: dueDateOverride !== null,
              onClick: () => {
                let value = null;
                if (dueDateOverride === null) {
                  let nextWeek = /* @__PURE__ */ new Date();
                  nextWeek.setDate(nextWeek.getDate() + 7);
                  value = DateToDateString(nextWeek);
                }
                setDueDateOverride(value);
                storeDueDateOverride(doenetId, userId, value);
              }
            }
          ),
          /* @__PURE__ */ jsx(
            DateTime,
            {
              value: dueDateOverride ? new Date(dueDateOverride) : null,
              onBlur: ({ valid, value }) => {
                if (valid) {
                  try {
                    value = value.toDate();
                  } catch (e) {
                  }
                  if (new Date(DateToDateString(value)).getTime() !== new Date(dueDateOverride).getTime()) {
                    setDueDateOverride(value);
                    storeDueDateOverride(doenetId, userId, value);
                  }
                } else {
                  addToast("Invalid Due Date");
                }
              }
            }
          )
        ]
      }
    )
  ] });
  let resultAttemptsAllowed = baseAttemptsAllowed + attemptsAllowedAdjustment;
  let attemptsAdjusterJSX = /* @__PURE__ */ jsx("p", { children: "Unlimited Attempts" });
  if (baseAttemptsAllowed != "unlimited" && attemptsAllowedAdjustment != null) {
    attemptsAdjusterJSX = /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx("div", { children: "Base Attempts Allowed: " }),
      /* @__PURE__ */ jsx("div", { children: baseAttemptsAllowed }),
      /* @__PURE__ */ jsx("div", { children: "Attempts Allowed Adjustment: " }),
      /* @__PURE__ */ jsx(
        Increment,
        {
          min: -baseAttemptsAllowed,
          value: attemptsAllowedAdjustment,
          onChange: (attemptsAdjustment) => {
            setAttemptsAllowedAdjustment(attemptsAdjustment);
            axios.get("/api/updateGradebookAdjustment.php", {
              params: { doenetId, userId, courseId, attemptsAdjustment }
            }).then(({ data }) => {
            });
          }
        }
      ),
      /* @__PURE__ */ jsx("div", { children: "Resulting Attempts Allowed: " }),
      /* @__PURE__ */ jsx("div", { children: resultAttemptsAllowed })
    ] });
  }
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx("div", { children: "Due Date: " }),
    /* @__PURE__ */ jsxs("div", { children: [
      dueDate,
      " "
    ] }),
    dueDateJSX,
    /* @__PURE__ */ jsx("br", {}),
    attemptsAdjusterJSX
  ] });
}
export {
  GradeSettings as default
};
