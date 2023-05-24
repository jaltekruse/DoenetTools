import { a3 as useToast, U as Recoil_index_21, a8 as itemByDoenetId, a0 as Recoil_index_31, b2 as DateToUTCDateString, bs as DateToUTCDateWithoutSecondsString, h as axios, s as styled, b0 as Recoil_index_10, t as Recoil_index_20, W as searchParamAtomFamily, q as useCourse, r as reactExports, m as Recoil_index_22, b as jsxs, j as jsx, a5 as CheckboxButton, c as FontAwesomeIcon, bn as faCalendarPlus, bo as faCalendarTimes, be as DateToDateString, au as peopleByCourseId, F as Fragment } from "./PageViewer-d914b069.js";
import { D as DateTime } from "./DateTime-4edca487.js";
import { I as Increment } from "./IncrementMenu-19c70527.js";
import { D as DropdownMenu } from "./DropdownMenu-d8160745.js";
import { R as RelatedItems } from "./RelatedItems-8a9ec536.js";
import { A as ActionButtonGroup } from "./ActionButtonGroup-f7bafe40.js";
import { A as ActionButton } from "./ActionButton-1e9c5f7a.js";
import { T as Textfield } from "./Textfield-0be9f722.js";
import { u as useSaveDraft } from "./useSaveDraft-b85dfaeb.js";
const useActivity = (courseId, doenetId) => {
  const addToast = useToast();
  const activity = Recoil_index_21(itemByDoenetId(doenetId)).getValue();
  const updateAssignmentSettings = Recoil_index_31(
    ({ set }) => async (...valuesWithDescriptionsToUpdateByKey) => {
      const updateObject = valuesWithDescriptionsToUpdateByKey.reduce(
        (obj, { keyToUpdate, value }) => {
          obj[keyToUpdate] = value;
          return obj;
        },
        {}
      );
      let updateDBObj = { ...updateObject };
      if (updateDBObj["assignedDate"] !== void 0 && updateDBObj["assignedDate"] !== null) {
        updateDBObj["assignedDate"] = DateToUTCDateString(
          new Date(updateDBObj["assignedDate"])
        );
      }
      if (updateDBObj["dueDate"] !== void 0 && updateDBObj["dueDate"] !== null) {
        updateDBObj["dueDate"] = DateToUTCDateWithoutSecondsString(
          new Date(updateDBObj["dueDate"])
        );
      }
      if (updateDBObj["pinnedAfterDate"] !== void 0 && updateDBObj["pinnedAfterDate"] !== null) {
        updateDBObj["pinnedAfterDate"] = DateToUTCDateString(
          new Date(updateDBObj["pinnedAfterDate"])
        );
      }
      if (updateDBObj["pinnedUntilDate"] !== void 0 && updateDBObj["pinnedUntilDate"] !== null) {
        updateDBObj["pinnedUntilDate"] = DateToUTCDateString(
          new Date(updateDBObj["pinnedUntilDate"])
        );
      }
      const resp = await axios.post("/api/updateAssignmentSettings.php", {
        ...updateDBObj,
        courseId,
        doenetId
      });
      if (resp.data.success) {
        set(itemByDoenetId(doenetId), (prev) => ({
          ...prev,
          ...updateObject
        }));
        for (const {
          description,
          valueDescription,
          value,
          keyToUpdate
        } of valuesWithDescriptionsToUpdateByKey) {
        }
      }
    },
    [addToast, courseId, doenetId]
  );
  const updateActivityFlags = Recoil_index_31(
    ({ set }) => async (...valuesWithDescriptionsToUpdateByKey) => {
      const updateObject = valuesWithDescriptionsToUpdateByKey.reduce(
        (obj, { keyToUpdate, value }) => {
          obj[keyToUpdate] = value;
          return obj;
        },
        {}
      );
      const resp = await axios.post("/api/updateContentFlags.php", {
        ...updateObject,
        courseId,
        doenetId
      });
      if (resp.data.success) {
        set(itemByDoenetId(doenetId), (prev) => ({
          ...prev,
          ...updateObject
        }));
        for (const {
          description,
          valueDescription,
          value,
          keyToUpdate
        } of valuesWithDescriptionsToUpdateByKey) {
        }
      }
    },
    [addToast, courseId, doenetId]
  );
  return { value: activity, updateAssignmentSettings, updateActivityFlags };
};
function prerenderActivity({ cid, doenetId, flags }) {
  let worker = new Worker("/_utils/prerenderWorker.js", { type: "module" });
  worker.postMessage({
    messageType: "prerenderActivity",
    args: {
      cid,
      doenetId,
      flags
    }
  });
  worker.onmessage = function(e) {
    if (e.data.messageType === "finished") {
      worker.terminate();
    } else if (e.data.messageType === "error") {
      console.error(e.data.message);
      worker.terminate();
    }
  };
  return worker;
}
const InputWrapper = styled.div`
  margin: 0 5px 10px 5px;
  display: ${(props) => props.flex ? "flex" : "block"};
  align-items: ${(props) => props.flex && "center"};
`;
const LabelText = styled.span`
  margin-bottom: 5px;
`;
const CheckboxLabelText = styled.span`
  font-size: 15px;
  line-height: 1.1;
`;
const InputControl = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: calc(var(--menuWidth) - 10px);
`;
const initializingWorkersAtom = Recoil_index_10({
  key: "initializingWorkersAtom",
  default: null
});
const AssignUnassignActivity = ({ doenetId, courseId }) => {
  const pageId = Recoil_index_20(searchParamAtomFamily("pageId"));
  const { saveDraft } = useSaveDraft();
  const { compileActivity, updateAssignItem } = useCourse(courseId);
  const itemObj = Recoil_index_20(itemByDoenetId(doenetId));
  const isAssigned = itemObj.isAssigned;
  useToast();
  const [initializeStatus, setInitializeStatus] = reactExports.useState("");
  let assignActivityText = "Assign Activity";
  if (isAssigned) {
    assignActivityText = "Update Assigned Activity";
  }
  let [initializingWorker, setInitializingWorker] = Recoil_index_22(
    initializingWorkersAtom(doenetId)
  );
  let assignButton = /* @__PURE__ */ jsx(
    ActionButton,
    {
      width: "menu",
      dataTest: "Assign Activity",
      value: assignActivityText,
      onClick: async () => {
        if (pageId) {
          await saveDraft({ pageId, courseId });
        }
        compileActivity({
          activityDoenetId: doenetId,
          isAssigned: true,
          courseId
          // successCallback: () => {
          //   addToast('Activity Assigned.', toastType.INFO);
          // },
        });
        updateAssignItem({
          doenetId,
          isAssigned: true,
          successCallback: () => {
          }
        });
      }
    }
  );
  let unAssignButton = null;
  let prerenderButton = null;
  if (isAssigned) {
    unAssignButton = /* @__PURE__ */ jsx(
      ActionButton,
      {
        width: "menu",
        dataTest: "Unassign Activity",
        value: "Unassign Activity",
        alert: true,
        onClick: () => {
          updateAssignItem({
            doenetId,
            isAssigned: false,
            successCallback: () => {
            }
          });
        }
      }
    );
    if (initializingWorker) {
      prerenderButton = /* @__PURE__ */ jsx(
        ActionButton,
        {
          width: "menu",
          dataTest: "Cancel prerendering",
          value: `${initializeStatus} (Cancel)`,
          onClick: () => {
            initializingWorker.terminate();
            setInitializingWorker(null);
          }
        }
      );
    } else {
      let initializePrerender = async () => {
        let flags = {
          showCorrectness: itemObj.showCorrectness,
          readOnly: false,
          solutionDisplayMode: itemObj.showSolution ? "button" : "none",
          showFeedback: itemObj.showFeedback,
          showHints: itemObj.showHints,
          allowLoadState: false,
          allowSaveState: false,
          allowLocalState: false,
          allowSaveSubmissions: false,
          allowSaveEvents: false
        };
        let resp = await axios.get(`/api/getCidForAssignment.php`, {
          params: { doenetId }
        });
        if (resp.data.cid) {
          setInitializeStatus("");
          let worker = prerenderActivity({
            cid: resp.data.cid,
            doenetId,
            flags
          });
          setInitializingWorker(worker);
          worker.onmessage = (e) => {
            if (e.data.messageType === "status") {
              setInitializeStatus(
                `${e.data.stage} ${Math.round(e.data.complete * 100)}%`
              );
            } else {
              worker.terminate();
              setInitializingWorker(null);
            }
          };
        }
      };
      prerenderButton = /* @__PURE__ */ jsx(
        ActionButton,
        {
          width: "menu",
          dataTest: "Prerender activity",
          value: "Prerender activity",
          onClick: initializePrerender
        }
      );
    }
  }
  return /* @__PURE__ */ jsxs(ActionButtonGroup, { vertical: true, children: [
    assignButton,
    unAssignButton,
    prerenderButton
  ] });
};
const AssignedDate = ({ doenetId, courseId, editable = false }) => {
  const addToast = useToast();
  const {
    value: { assignedDate: recoilValue },
    updateAssignmentSettings
  } = useActivity(courseId, doenetId);
  const [assignedDate, setAssignedDate] = reactExports.useState(recoilValue);
  reactExports.useEffect(() => {
    setAssignedDate(recoilValue);
  }, [recoilValue]);
  return /* @__PURE__ */ jsxs(InputWrapper, { children: [
    /* @__PURE__ */ jsx(LabelText, { children: "Assigned Date" }),
    /* @__PURE__ */ jsxs(InputControl, { onClick: (e) => e.preventDefault(), children: [
      /* @__PURE__ */ jsx(
        CheckboxButton,
        {
          style: { marginRight: "5px" },
          dataTest: "Assigned Date Checkbox",
          checkedIcon: /* @__PURE__ */ jsx(FontAwesomeIcon, { icon: faCalendarPlus }),
          uncheckedIcon: /* @__PURE__ */ jsx(FontAwesomeIcon, { icon: faCalendarTimes }),
          checked: assignedDate !== null && assignedDate !== void 0,
          onClick: () => {
            let valueDescription = "None";
            let value = null;
            if (assignedDate === null || assignedDate === void 0) {
              valueDescription = "Now";
              value = DateToDateString(/* @__PURE__ */ new Date());
            }
            setAssignedDate(value);
            updateAssignmentSettings({
              keyToUpdate: "assignedDate",
              value,
              description: "Assigned Date",
              valueDescription
            });
          }
        }
      ),
      /* @__PURE__ */ jsx(
        DateTime,
        {
          width: "176px",
          disabled: assignedDate === null || assignedDate === void 0,
          value: assignedDate ? new Date(assignedDate) : null,
          dataTest: "Assigned Date",
          disabledText: "No Assigned Date",
          disabledOnClick: () => {
            let valueDescription = "Now";
            let value = DateToDateString(/* @__PURE__ */ new Date());
            updateAssignmentSettings({
              keyToUpdate: "assignedDate",
              value,
              description: "Assigned Date",
              valueDescription
            });
          },
          onBlur: ({ valid, value }) => {
            if (valid) {
              try {
                value = value.toDate();
              } catch (e) {
              }
              if (new Date(DateToDateString(value)).getTime() !== new Date(assignedDate).getTime()) {
                setAssignedDate(DateToDateString(value));
                updateAssignmentSettings(doenetId, {
                  keyToUpdate: "assignedDate",
                  value: DateToDateString(value),
                  description: "Assigned Date"
                });
              }
            } else {
              addToast("Invalid Assigned Date");
            }
          }
        }
      )
    ] })
  ] });
};
const DueDate = ({ courseId, doenetId }) => {
  const addToast = useToast();
  const {
    value: { dueDate: recoilValue },
    updateAssignmentSettings
  } = useActivity(courseId, doenetId);
  const [dueDate, setDueDate] = reactExports.useState();
  reactExports.useEffect(() => {
    setDueDate(recoilValue);
  }, [recoilValue]);
  return /* @__PURE__ */ jsxs(InputWrapper, { children: [
    /* @__PURE__ */ jsx(LabelText, { children: "Due Date" }),
    /* @__PURE__ */ jsxs(InputControl, { onClick: (e) => e.preventDefault(), children: [
      /* @__PURE__ */ jsx(
        CheckboxButton,
        {
          style: { marginRight: "5px" },
          dataTest: "Due Date Checkbox",
          checkedIcon: /* @__PURE__ */ jsx(FontAwesomeIcon, { icon: faCalendarPlus }),
          uncheckedIcon: /* @__PURE__ */ jsx(FontAwesomeIcon, { icon: faCalendarTimes }),
          checked: dueDate !== null && dueDate !== void 0,
          onClick: () => {
            let valueDescription = "None";
            let value = null;
            if (dueDate === null || dueDate === void 0) {
              valueDescription = "Next Week";
              let nextWeek = /* @__PURE__ */ new Date();
              nextWeek.setDate(nextWeek.getDate() + 7);
              value = DateToDateString(nextWeek);
            }
            setDueDate(value);
            updateAssignmentSettings({
              keyToUpdate: "dueDate",
              value,
              description: "Due Date",
              valueDescription
            });
          }
        }
      ),
      /* @__PURE__ */ jsx(
        DateTime,
        {
          width: "176px",
          disabled: dueDate === null || dueDate === void 0,
          value: dueDate ? new Date(dueDate) : null,
          dataTest: "Due Date",
          onBlur: ({ valid, value }) => {
            if (valid) {
              try {
                value = value.toDate();
              } catch (e) {
              }
              if (new Date(DateToDateString(value)).getTime() !== new Date(dueDate).getTime()) {
                setDueDate(DateToDateString(value));
                updateAssignmentSettings({
                  keyToUpdate: "dueDate",
                  value: DateToDateString(value),
                  description: "Due Date"
                });
              }
            } else {
              addToast("Invalid Due Date");
            }
          },
          disabledText: "No Due Date",
          disabledOnClick: () => {
            let valueDescription = "Next Week";
            let nextWeek = /* @__PURE__ */ new Date();
            nextWeek.setDate(nextWeek.getDate() + 7);
            let value = DateToDateString(nextWeek);
            setDueDate(value);
            updateAssignmentSettings({
              keyToUpdate: "dueDate",
              value,
              description: "Due Date",
              valueDescription
            });
          }
        }
      )
    ] })
  ] });
};
const TimeLimit = ({ courseId, doenetId }) => {
  const {
    value: { timeLimit: recoilValue },
    updateAssignmentSettings
  } = useActivity(courseId, doenetId);
  const [timeLimit, setTimeLimit] = reactExports.useState(recoilValue);
  const [isEnabled, setIsEnabled] = reactExports.useState(recoilValue ? true : false);
  return /* @__PURE__ */ jsxs(InputWrapper, { children: [
    /* @__PURE__ */ jsx(LabelText, { children: "Time Limit in Minutes" }),
    /* @__PURE__ */ jsxs(InputControl, { onClick: (e) => e.preventDefault(), children: [
      /* @__PURE__ */ jsx(
        CheckboxButton,
        {
          style: { marginRight: "5px" },
          dataTest: "Time Limit Checkbox",
          checked: isEnabled,
          onClick: () => {
            let valueDescription = "Not Limited";
            let value = null;
            let enable = false;
            if (!isEnabled) {
              valueDescription = "60 Minutes";
              value = 60;
              enable = true;
            }
            setTimeLimit(value);
            setIsEnabled(enable);
            updateAssignmentSettings({
              keyToUpdate: "timeLimit",
              value,
              description: "Time Limit ",
              valueDescription
            });
          }
        }
      ),
      /* @__PURE__ */ jsx(
        Increment,
        {
          disabled: !isEnabled,
          value: timeLimit,
          dataTest: "Time Limit",
          min: 1,
          width: "180px",
          onBlur: (limit) => {
            if (isNaN(limit) || limit < 1)
              limit = 1;
            setTimeLimit(parseInt(limit));
            updateAssignmentSettings({
              keyToUpdate: "timeLimit",
              value: parseInt(limit),
              description: "Time Limit",
              valueDescription: `${limit} Minutes`
            });
          },
          onChange: (limit) => setTimeLimit(parseInt(limit))
        }
      )
    ] })
  ] });
};
const AttemptLimit = ({ courseId, doenetId }) => {
  const {
    value: { numberOfAttemptsAllowed: recoilValue },
    updateAssignmentSettings
  } = useActivity(courseId, doenetId);
  const [numberOfAttemptsAllowed, setNumberOfAttemptsAllowed] = reactExports.useState(recoilValue);
  const [isEnabled, setIsEnabled] = reactExports.useState(recoilValue ? true : false);
  return /* @__PURE__ */ jsxs(InputWrapper, { children: [
    /* @__PURE__ */ jsx(LabelText, { children: "Attempts" }),
    /* @__PURE__ */ jsxs(InputControl, { onClick: (e) => e.preventDefault(), children: [
      /* @__PURE__ */ jsx(
        CheckboxButton,
        {
          style: { marginRight: "5px" },
          dataTest: "Attempt Limit Checkbox",
          checked: isEnabled,
          onClick: () => {
            let valueDescription = "Not Limited";
            let value = null;
            let enable = false;
            if (!isEnabled) {
              valueDescription = "1";
              value = 1;
              enable = true;
            }
            setNumberOfAttemptsAllowed(value);
            setIsEnabled(enable);
            updateAssignmentSettings({
              keyToUpdate: "numberOfAttemptsAllowed",
              value,
              description: "Attempts Allowed",
              valueDescription
            });
          }
        }
      ),
      /* @__PURE__ */ jsx(
        Increment,
        {
          disabled: !isEnabled,
          value: numberOfAttemptsAllowed,
          dataTest: "Attempt Limit",
          width: "180px",
          min: 1,
          onBlur: (attempts) => {
            if (isNaN(attempts) || attempts < 1)
              attempts = 1;
            setNumberOfAttemptsAllowed(parseInt(attempts));
            updateAssignmentSettings({
              keyToUpdate: "numberOfAttemptsAllowed",
              value: parseInt(attempts),
              description: "Attempts Allowed"
            });
          },
          onChange: (attempts) => setNumberOfAttemptsAllowed(parseInt(attempts))
        }
      )
    ] })
  ] });
};
const AttemptAggregation = ({ courseId, doenetId }) => {
  const {
    value: { attemptAggregation: recoilValue },
    updateAssignmentSettings
  } = useActivity(courseId, doenetId);
  const [attemptAggregation, setAttemptAggregation] = reactExports.useState();
  reactExports.useEffect(() => {
    setAttemptAggregation(recoilValue);
  }, [recoilValue]);
  return /* @__PURE__ */ jsxs(InputWrapper, { children: [
    /* @__PURE__ */ jsx(LabelText, { children: "Attempt Aggregation" }),
    /* @__PURE__ */ jsx(InputControl, { children: /* @__PURE__ */ jsx(
      DropdownMenu,
      {
        dataTest: "Attempt Aggregation",
        width: "menu",
        valueIndex: attemptAggregation === "m" ? 1 : 2,
        items: [
          ["m", "Maximum"],
          ["l", "Last Attempt"]
        ],
        onChange: ({ value: val }) => {
          let valueDescription = "Maximum";
          if (val === "l") {
            valueDescription = "Last Attempt";
          }
          setAttemptAggregation(val);
          updateAssignmentSettings({
            keyToUpdate: "attemptAggregation",
            value: val,
            description: "Attempt Aggregation",
            valueDescription
          });
        }
      }
    ) })
  ] });
};
const TotalPointsOrPercent = ({ courseId, doenetId }) => {
  const {
    value: { totalPointsOrPercent: recoilValue },
    updateAssignmentSettings
  } = useActivity(courseId, doenetId);
  const [totalPointsOrPercent, setTotalPointsOrPercent] = reactExports.useState();
  reactExports.useEffect(() => {
    setTotalPointsOrPercent(recoilValue);
  }, [recoilValue]);
  return /* @__PURE__ */ jsxs(InputWrapper, { children: [
    /* @__PURE__ */ jsx(LabelText, { children: "Total Points Or Percent" }),
    /* @__PURE__ */ jsx(InputControl, { children: /* @__PURE__ */ jsx(
      Increment,
      {
        value: totalPointsOrPercent,
        dataTest: "Total Points Or Percent",
        min: 0,
        onBlur: (newValue) => {
          if (newValue !== recoilValue) {
            let totalPointsOrPercentLocal = null;
            if (newValue < 0 || newValue === "" || isNaN(newValue)) {
              setTotalPointsOrPercent(0);
              totalPointsOrPercentLocal = 0;
            } else {
              totalPointsOrPercentLocal = parseFloat(newValue);
              setTotalPointsOrPercent(parseFloat(newValue));
            }
            updateAssignmentSettings(doenetId, {
              keyToUpdate: "totalPointsOrPercent",
              value: totalPointsOrPercentLocal,
              description: "Total Points Or Percent"
            });
          }
        },
        onChange: (newValue) => setTotalPointsOrPercent(newValue)
      }
    ) })
  ] });
};
const GradeCategory = ({ courseId, doenetId }) => {
  const {
    value: { gradeCategory: recoilValue },
    updateAssignmentSettings
  } = useActivity(courseId, doenetId);
  const [gradeCategory, setGradeCategory] = reactExports.useState();
  reactExports.useEffect(() => {
    setGradeCategory(recoilValue);
  }, [recoilValue]);
  return /* @__PURE__ */ jsxs(InputWrapper, { children: [
    /* @__PURE__ */ jsx(LabelText, { children: "Grade Category" }),
    /* @__PURE__ */ jsx(
      DropdownMenu,
      {
        defaultIndex: "7",
        valueIndex: {
          gateway: 1,
          exams: 2,
          quizzes: 3,
          "problem sets": 4,
          projects: 5,
          participation: 6,
          "No Category": 7
        }[gradeCategory],
        items: [
          ["gateway", "Gateway"],
          ["exams", "Exams"],
          ["quizzes", "Quizzes"],
          ["problem sets", "Problem Sets"],
          ["projects", "Projects"],
          ["participation", "Participation"],
          ["NULL", "No Category"]
        ],
        dataTest: "Grade Category",
        onChange: ({ value: val }) => {
          if (recoilValue !== val) {
            setGradeCategory(val);
            updateAssignmentSettings({
              keyToUpdate: "gradeCategory",
              value: val,
              description: "Grade Category"
            });
          }
        }
      }
    )
  ] });
};
const ItemWeights = ({ courseId, doenetId }) => {
  const {
    value: { itemWeights: recoilValue },
    updateAssignmentSettings
  } = useActivity(courseId, doenetId);
  const [textValue, setTextValue] = reactExports.useState("");
  reactExports.useEffect(() => {
    setTextValue(recoilValue == null ? void 0 : recoilValue.join(" "));
  }, [recoilValue]);
  return /* @__PURE__ */ jsxs(InputWrapper, { children: [
    /* @__PURE__ */ jsx(LabelText, { children: "Item Weights" }),
    /* @__PURE__ */ jsx(
      Textfield,
      {
        vertical: true,
        width: "menu",
        value: textValue,
        dataTest: "Item Weights",
        onChange: (e) => {
          setTextValue(e.target.value);
        },
        onBlur: () => {
          let parsedValue = textValue.split(" ").filter((x) => x).map(Number).map((x) => x >= 0 ? x : 0);
          if (recoilValue.length !== parsedValue.length || recoilValue.some((v, i) => v !== parsedValue[i])) {
            updateAssignmentSettings({
              keyToUpdate: "itemWeights",
              value: parsedValue,
              description: "Item Weights"
            });
          }
        }
      }
    )
  ] });
};
const CheckedSetting = ({
  courseId,
  doenetId,
  keyToUpdate,
  description,
  label,
  invert,
  dataTest
}) => {
  const {
    value: { [keyToUpdate]: recoilValue },
    updateAssignmentSettings
  } = useActivity(courseId, doenetId);
  const [localValue, setLocalValue] = reactExports.useState(recoilValue);
  reactExports.useEffect(() => {
    setLocalValue(recoilValue);
  }, [invert, recoilValue]);
  return /* @__PURE__ */ jsxs(InputWrapper, { flex: true, children: [
    /* @__PURE__ */ jsx(
      CheckboxButton,
      {
        style: { marginRight: "5px" },
        dataTest,
        checked: invert ? !localValue : localValue,
        onClick: () => {
          let valueDescription = invert ? "True" : "False";
          let value = false;
          if (!localValue) {
            valueDescription = invert ? "False" : "True";
            value = true;
          }
          setLocalValue(value);
          updateAssignmentSettings({
            keyToUpdate,
            value,
            description,
            valueDescription
          });
        }
      }
    ),
    /* @__PURE__ */ jsx(CheckboxLabelText, { children: label ?? description })
  ] });
};
const CheckedFlag = ({
  courseId,
  doenetId,
  keyToUpdate,
  description,
  label,
  invert,
  dataTest
}) => {
  const {
    value: { [keyToUpdate]: recoilValue },
    updateActivityFlags
  } = useActivity(courseId, doenetId);
  const [localValue, setLocalValue] = reactExports.useState(recoilValue);
  reactExports.useEffect(() => {
    setLocalValue(recoilValue);
  }, [recoilValue, invert]);
  return /* @__PURE__ */ jsxs(InputWrapper, { flex: true, children: [
    /* @__PURE__ */ jsx(
      CheckboxButton,
      {
        style: { marginRight: "5px" },
        dataTest,
        checked: invert ? !localValue : localValue,
        onClick: () => {
          let valueDescription = invert ? "True" : "False";
          let value = false;
          if (!localValue) {
            valueDescription = invert ? "False" : "True";
            value = true;
          }
          setLocalValue(value);
          updateActivityFlags({
            keyToUpdate,
            value,
            description,
            valueDescription
          });
        }
      }
    ),
    /* @__PURE__ */ jsx(CheckboxLabelText, { children: label ?? description })
  ] });
};
const Individualize = ({ courseId, doenetId }) => {
  return /* @__PURE__ */ jsx(
    CheckedSetting,
    {
      courseId,
      doenetId,
      keyToUpdate: "individualize",
      description: "Individualize",
      dataTest: "Individualize"
    }
  );
};
const ShowSolution = ({ courseId, doenetId }) => {
  return /* @__PURE__ */ jsx(
    CheckedSetting,
    {
      courseId,
      doenetId,
      keyToUpdate: "showSolution",
      description: "Show Solution",
      dataTest: "Show Solution"
    }
  );
};
const ShowSolutionInGradebook = ({ courseId, doenetId }) => {
  return /* @__PURE__ */ jsx(
    CheckedSetting,
    {
      courseId,
      doenetId,
      keyToUpdate: "showSolutionInGradebook",
      description: "Show Solution In Gradebook",
      dataTest: "Show Solution In Gradebook"
    }
  );
};
const ShowFeedback = ({ courseId, doenetId }) => {
  return /* @__PURE__ */ jsx(
    CheckedSetting,
    {
      courseId,
      doenetId,
      keyToUpdate: "showFeedback",
      description: "Show Feedback",
      dataTest: "Show Feedback"
    }
  );
};
const ShowHints = ({ courseId, doenetId }) => {
  return /* @__PURE__ */ jsx(
    CheckedSetting,
    {
      courseId,
      doenetId,
      keyToUpdate: "showHints",
      description: "Show Hints",
      dataTest: "Show Hints"
    }
  );
};
const ShowCorrectness = ({ courseId, doenetId }) => {
  return /* @__PURE__ */ jsx(
    CheckedSetting,
    {
      courseId,
      doenetId,
      keyToUpdate: "showCorrectness",
      description: "Show Correctness",
      dataTest: "Show Correctness"
    }
  );
};
const ShowCreditAchieved = ({ courseId, doenetId }) => {
  return /* @__PURE__ */ jsx(
    CheckedSetting,
    {
      courseId,
      doenetId,
      keyToUpdate: "showCreditAchievedMenu",
      description: "Show Credit Achieved Menu",
      dataTest: "Show Credit Achieved Menu"
    }
  );
};
const Paginate = ({ courseId, doenetId }) => {
  return /* @__PURE__ */ jsx(
    CheckedSetting,
    {
      courseId,
      doenetId,
      keyToUpdate: "paginate",
      description: "Paginate",
      dataTest: "Paginate"
    }
  );
};
const ShowFinishButton = ({ courseId, doenetId }) => {
  return /* @__PURE__ */ jsx(
    CheckedSetting,
    {
      courseId,
      doenetId,
      keyToUpdate: "showFinishButton",
      description: "Show Finish Button",
      dataTest: "Show Finish Button"
    }
  );
};
const MakePublic = ({ courseId, doenetId }) => {
  return /* @__PURE__ */ jsx(
    CheckedFlag,
    {
      courseId,
      doenetId,
      keyToUpdate: "isPublic",
      description: "Make Publicly Visible",
      dataTest: "Make Publicly Visible"
    }
  );
};
const ShowDoenetMLSource = ({ courseId, doenetId }) => {
  return /* @__PURE__ */ jsx(
    CheckedFlag,
    {
      courseId,
      doenetId,
      keyToUpdate: "userCanViewSource",
      description: "Show DoenetML Source",
      dataTest: "Show DoenetML Source"
    }
  );
};
const CanViewAfterCompleted = ({ courseId, doenetId }) => {
  return /* @__PURE__ */ jsx(
    CheckedSetting,
    {
      courseId,
      doenetId,
      keyToUpdate: "canViewAfterCompleted",
      description: "Can View After Completed",
      dataTest: "Can View After Completed"
    }
  );
};
const ProctorMakesAvailable = ({ courseId, doenetId }) => {
  return /* @__PURE__ */ jsx(
    CheckedSetting,
    {
      courseId,
      doenetId,
      keyToUpdate: "proctorMakesAvailable",
      description: "Proctor Makes Available",
      dataTest: "Proctor Makes Available"
    }
  );
};
const AutoSubmit = ({ courseId, doenetId }) => {
  return /* @__PURE__ */ jsx(
    CheckedSetting,
    {
      courseId,
      doenetId,
      keyToUpdate: "autoSubmit",
      description: "Auto Submit",
      dataTest: "Auto Submit"
    }
  );
};
const PinAssignment = ({ courseId, doenetId }) => {
  const addToast = useToast();
  const {
    value: {
      pinnedUntilDate: recoilPinnedUntilDate,
      pinnedAfterDate: recoilPinnedAfterDate
    },
    updateAssignmentSettings
  } = useActivity(courseId, doenetId);
  const [pinnedUntilDate, setPinnedUntilDate] = reactExports.useState(recoilPinnedUntilDate);
  const [pinnedAfterDate, setPinnedAfterDate] = reactExports.useState(recoilPinnedAfterDate);
  reactExports.useEffect(() => {
    setPinnedUntilDate(recoilPinnedUntilDate);
  }, [recoilPinnedUntilDate]);
  reactExports.useEffect(() => {
    setPinnedAfterDate(recoilPinnedAfterDate);
  }, [recoilPinnedAfterDate]);
  return /* @__PURE__ */ jsxs(InputWrapper, { children: [
    /* @__PURE__ */ jsx(LabelText, { children: "Pin Assignment" }),
    /* @__PURE__ */ jsxs(InputControl, { onClick: (e) => e.preventDefault(), children: [
      /* @__PURE__ */ jsx(
        CheckboxButton,
        {
          style: { marginRight: "5px" },
          checkedIcon: /* @__PURE__ */ jsx(FontAwesomeIcon, { icon: faCalendarPlus }),
          uncheckedIcon: /* @__PURE__ */ jsx(FontAwesomeIcon, { icon: faCalendarTimes }),
          checked: pinnedUntilDate !== null && pinnedUntilDate !== void 0,
          dataTest: "Pin Assignment Checkbox",
          onClick: () => {
            let valueDescription = "None";
            let value = null;
            let secondValue = null;
            if (pinnedUntilDate === null || pinnedUntilDate === void 0) {
              valueDescription = "Now to Next Year";
              let today = /* @__PURE__ */ new Date();
              let nextYear = /* @__PURE__ */ new Date();
              nextYear.setDate(nextYear.getDate() + 365);
              value = DateToDateString(today);
              secondValue = DateToDateString(nextYear);
            }
            setPinnedAfterDate(value);
            setPinnedUntilDate(secondValue);
            updateAssignmentSettings(
              {
                keyToUpdate: "pinnedAfterDate",
                value,
                description: "Pinned Dates ",
                valueDescription
              },
              {
                keyToUpdate: "pinnedUntilDate",
                value: secondValue
              }
            );
          }
        }
      ),
      /* @__PURE__ */ jsxs("div", { style: { display: "flex", flexDirection: "column" }, children: [
        /* @__PURE__ */ jsx(
          DateTime,
          {
            width: "176px",
            dataTest: "Pinned After Date",
            disabled: pinnedAfterDate === null || pinnedAfterDate === void 0,
            disabledText: "No Pinned After Date",
            disabledOnClick: () => {
              let valueDescription = "None";
              let value = null;
              let secondValue = null;
              if (pinnedAfterDate === null || pinnedAfterDate === void 0) {
                valueDescription = "Now to Next Year";
                let today = /* @__PURE__ */ new Date();
                let nextYear = /* @__PURE__ */ new Date();
                nextYear.setDate(nextYear.getDate() + 365);
                value = DateToDateString(today);
                secondValue = DateToDateString(nextYear);
              }
              setPinnedAfterDate(value);
              setPinnedUntilDate(secondValue);
              updateAssignmentSettings(
                {
                  keyToUpdate: "pinnedAfterDate",
                  value,
                  description: "Pinned Dates ",
                  valueDescription
                },
                {
                  keyToUpdate: "pinnedUntilDate",
                  value: secondValue
                }
              );
            },
            value: pinnedAfterDate ? new Date(pinnedAfterDate) : null,
            onBlur: ({ valid, value }) => {
              if (valid) {
                try {
                  value = value.toDate();
                } catch (e) {
                }
                if (new Date(DateToDateString(value)).getTime() !== new Date(pinnedAfterDate).getTime()) {
                  setPinnedAfterDate(DateToDateString(value));
                  updateAssignmentSettings({
                    keyToUpdate: "pinnedAfterDate",
                    value: DateToDateString(value),
                    description: "Pinned After Date"
                  });
                }
              } else {
                addToast("Invalid Pin After Date");
              }
            }
          }
        ),
        /* @__PURE__ */ jsx(
          DateTime,
          {
            width: "176px",
            dataTest: "Pinned Until Date",
            style: { marginTop: "5px" },
            disabled: pinnedUntilDate === null || pinnedUntilDate === void 0,
            disabledText: "No Pinned Until Date",
            disabledOnClick: () => {
              let valueDescription = "None";
              let value = null;
              let secondValue = null;
              if (pinnedUntilDate === null || pinnedUntilDate === void 0) {
                valueDescription = "Now to Next Year";
                let today = /* @__PURE__ */ new Date();
                let nextYear = /* @__PURE__ */ new Date();
                nextYear.setDate(nextYear.getDate() + 365);
                value = DateToDateString(today);
                secondValue = DateToDateString(nextYear);
              }
              setPinnedAfterDate(value);
              setPinnedUntilDate(secondValue);
              updateAssignmentSettings(
                {
                  keyToUpdate: "pinnedAfterDate",
                  value,
                  description: "Pinned Dates ",
                  valueDescription
                },
                {
                  keyToUpdate: "pinnedUntilDate",
                  value: secondValue
                }
              );
            },
            value: pinnedUntilDate ? new Date(pinnedUntilDate) : null,
            onBlur: ({ valid, value }) => {
              if (valid) {
                try {
                  value = value.toDate();
                } catch (e) {
                }
                if (new Date(DateToDateString(value)).getTime() !== new Date(pinnedUntilDate).getTime()) {
                  setPinnedUntilDate(DateToDateString(value));
                  updateAssignmentSettings({
                    keyToUpdate: "pinnedUntilDate",
                    value: DateToDateString(value),
                    description: "Pinned Until Date"
                  });
                }
              } else {
                addToast("Invalid Pin Until Date");
              }
            }
          }
        )
      ] })
    ] })
  ] });
};
function AssignTo({ courseId, doenetId }) {
  const {
    value: { isGloballyAssigned }
  } = useActivity(courseId, doenetId);
  const { value: enrolledStudents } = Recoil_index_20(
    peopleByCourseId(courseId)
  );
  const [restrictedTo, setRestrictedTo] = reactExports.useState([]);
  async function getAndSetRestrictedTo({ courseId: courseId2, doenetId: doenetId2 }) {
    let resp = await axios.get("/api/getRestrictedTo.php", {
      params: { courseId: courseId2, doenetId: doenetId2 }
    });
    setRestrictedTo(resp.data.restrictedTo);
  }
  async function updateRestrictedTo({ courseId: courseId2, doenetId: doenetId2, emailAddresses }) {
    let resp = await axios.post("/api/updateRestrictedTo.php", {
      courseId: courseId2,
      doenetId: doenetId2,
      emailAddresses
    });
    if (resp.data.success) {
      setRestrictedTo(emailAddresses);
    }
  }
  reactExports.useEffect(() => {
    if (!isGloballyAssigned) {
      getAndSetRestrictedTo({ courseId, doenetId });
    }
  }, [courseId, doenetId, isGloballyAssigned]);
  let enrolledJSX = enrolledStudents.reduce((allrows, row) => {
    if (row.withdrew == "0") {
      if (!isGloballyAssigned && restrictedTo.includes(row.email)) {
        return [
          ...allrows,
          /* @__PURE__ */ jsxs("option", { selected: true, value: row.email, children: [
            row.firstName,
            " ",
            row.lastName
          ] }, `enrolledOpt${row.email}`)
        ];
      } else {
        return [
          ...allrows,
          /* @__PURE__ */ jsxs("option", { value: row.email, children: [
            row.firstName,
            " ",
            row.lastName
          ] }, `enrolledOpt${row.email}`)
        ];
      }
    } else {
      return allrows;
    }
  }, []);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      CheckedFlag,
      {
        courseId,
        doenetId,
        keyToUpdate: "isGloballyAssigned",
        description: "Restrict Assignment",
        invert: true
      }
    ),
    /* @__PURE__ */ jsx(
      RelatedItems,
      {
        width: "menu",
        options: enrolledJSX,
        disabled: isGloballyAssigned,
        onChange: (e) => {
          let emailAddresses = Array.from(
            e.target.selectedOptions,
            (option) => option.value
          );
          updateRestrictedTo({ courseId, doenetId, emailAddresses });
        },
        multiple: true
      }
    )
  ] });
}
export {
  AssignUnassignActivity as A,
  CanViewAfterCompleted as C,
  DueDate as D,
  GradeCategory as G,
  ItemWeights as I,
  MakePublic as M,
  Paginate as P,
  ShowSolution as S,
  TimeLimit as T,
  AssignTo as a,
  AssignedDate as b,
  AttemptLimit as c,
  AttemptAggregation as d,
  TotalPointsOrPercent as e,
  Individualize as f,
  ShowSolutionInGradebook as g,
  ShowFeedback as h,
  ShowHints as i,
  ShowCorrectness as j,
  ShowCreditAchieved as k,
  ShowFinishButton as l,
  ProctorMakesAvailable as m,
  AutoSubmit as n,
  ShowDoenetMLSource as o,
  PinAssignment as p,
  useActivity as u
};
