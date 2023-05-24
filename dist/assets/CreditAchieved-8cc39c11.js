import { t as Recoil_index_20, W as searchParamAtomFamily, a8 as itemByDoenetId, l as useLocation, i as useNavigate, r as reactExports, a0 as Recoil_index_31, h as axios, j as jsx, b as jsxs, s as styled, a3 as useToast, m as Recoil_index_22, o as Recoil_index_24, B as Button, a4 as toastType } from "./PageViewer-d914b069.js";
import { currentAttemptNumber, creditAchievedAtom } from "./AssignmentViewer-40516027.js";
import { i as itemWeightsAtom, c as currentPageAtom, a as activityAttemptNumberSetUpAtom } from "./ActivityViewer-b51a59ab.js";
import { e as effectivePermissionsByCourseId } from "./RoleDropdown-ece1f3f8.js";
import { B as ButtonGroup } from "./ButtonGroup-b585a5ef.js";
import { T as Textfield } from "./Textfield-0be9f722.js";
import { overviewData } from "./Gradebook-7b015fa4.js";
import "./activityUtils-7af1fc96.js";
import "./ActionButton-1e9c5f7a.js";
import "./visibility-sensor-57589aaf.js";
import "./DropdownMenu-d8160745.js";
import "./defineProperty-2975ceb9.js";
import "./setPrototypeOf-be240aa9.js";
import "./extends-d9a14db7.js";
import "./emotion-react.browser.esm-dfafc3e8.js";
import "./emotion-element-6a883da9.browser.esm-2d3713e7.js";
const Line = styled.div`
  border-bottom: 2px solid var(--canvastext);
  height: 2px;
  width: 230px;
`;
const ScoreOnRight = styled.div`
  position: absolute;
  right: 0px;
  top: 0px;
`;
const ScoreContainer = styled.div`
  position: relative;
  background: ${(props) => props.highlight ? "var(--mainGray)" : "var(--canvas)"};
  cursor: ${(props) => props.isLink ? "pointer" : "auto"};
`;
function FinalScore({ score }) {
  const addToast = useToast();
  let courseId = Recoil_index_20(searchParamAtomFamily("courseId"));
  let doenetId = Recoil_index_20(searchParamAtomFamily("doenetId"));
  let userId = Recoil_index_20(searchParamAtomFamily("userId"));
  let { canViewAndModifyGrades } = Recoil_index_20(
    effectivePermissionsByCourseId(courseId)
  );
  const [creditAchieved, setCreditAchieved] = Recoil_index_22(creditAchievedAtom);
  const [editMode, setEditMode] = reactExports.useState(false);
  const [scoreState, setScore] = reactExports.useState(score);
  const setOverview = Recoil_index_24(overviewData);
  if (editMode) {
    return /* @__PURE__ */ jsxs("div", { style: { display: "flex", flexDirection: "column", rowGap: "4px" }, children: [
      /* @__PURE__ */ jsx("div", { children: "Final Score:" }),
      /* @__PURE__ */ jsx(
        Textfield,
        {
          width: "menu",
          value: scoreState,
          onChange: (e) => {
            setScore(e.target.value);
          }
        }
      ),
      /* @__PURE__ */ jsx(
        Button,
        {
          value: "Update",
          onClick: async () => {
            if (isNaN(scoreState) || scoreState == "") {
              addToast("Final Score needs to be a number.", toastType.ERROR);
            } else {
              const { data } = await axios.get(
                `/api/saveActivityOverrideGrades.php`,
                { params: { score: scoreState, doenetId, userId } }
              );
              let creditOverride = Number(scoreState) / (creditAchieved == null ? void 0 : creditAchieved.totalPointsOrPercent);
              if (data.success) {
                setEditMode(false);
                setCreditAchieved((prev) => {
                  let next = { ...prev };
                  next.creditForAssignment = creditOverride;
                  return next;
                });
                setOverview({ doenetId, userId, credit: `${creditOverride}` });
              }
            }
          }
        }
      )
    ] });
  }
  if (canViewAndModifyGrades == 1) {
    return /* @__PURE__ */ jsxs(ScoreContainer, { children: [
      /* @__PURE__ */ jsxs(ButtonGroup, { children: [
        "Final Score ",
        /* @__PURE__ */ jsx(Button, { value: "Edit", onClick: () => setEditMode(true) }),
        ":",
        " ",
        /* @__PURE__ */ jsx(ScoreOnRight, { "data-test": "Final Score", children: score })
      ] }),
      " "
    ] });
  }
  return /* @__PURE__ */ jsxs(ScoreContainer, { children: [
    "Final Score: ",
    /* @__PURE__ */ jsx(ScoreOnRight, { "data-test": "Final Score", children: score })
  ] });
}
function CreditAchieved() {
  const recoilAttemptNumber = Recoil_index_20(currentAttemptNumber);
  const recoilDoenetId = Recoil_index_20(searchParamAtomFamily("doenetId"));
  const recoilUserId = Recoil_index_20(searchParamAtomFamily("userId"));
  const recoilTool = Recoil_index_20(searchParamAtomFamily("tool"));
  Recoil_index_20(itemByDoenetId(recoilDoenetId));
  const itemWeights = Recoil_index_20(itemWeightsAtom);
  const currentPage = Recoil_index_20(currentPageAtom);
  const activityAttemptNumberSetUp = Recoil_index_20(
    activityAttemptNumberSetUpAtom
  );
  let { search } = useLocation();
  let navigate = useNavigate();
  const lastAttemptNumber = reactExports.useRef(null);
  let [disabled, setDisabled] = reactExports.useState(false);
  const {
    creditByItem,
    creditForAttempt,
    creditForAssignment,
    totalPointsOrPercent
  } = Recoil_index_20(creditAchievedAtom);
  const initialize = Recoil_index_31(
    ({ set }) => async (attemptNumber, doenetId, userId, tool) => {
      const { data } = await axios.get(
        `/api/loadAssessmentCreditAchieved.php`,
        { params: { attemptNumber, doenetId, userId, tool } }
      );
      if (data.success) {
        const creditByItem2 = data.creditByItem.map(Number);
        const creditForAssignment2 = Number(data.creditForAssignment);
        const creditForAttempt2 = Number(data.creditForAttempt);
        Number(data.creditOverride_for_assignment);
        const showCorrectness = data.showCorrectness === "1";
        const totalPointsOrPercent2 = Number(data.totalPointsOrPercent);
        if (!showCorrectness && tool.substring(0, 9) !== "gradebook") {
          setDisabled(true);
        } else {
          set(creditAchievedAtom, (was) => {
            let newObj = { ...was };
            newObj.creditByItem = creditByItem2;
            newObj.creditForAssignment = creditForAssignment2;
            newObj.creditForAttempt = creditForAttempt2;
            newObj.totalPointsOrPercent = totalPointsOrPercent2;
            return newObj;
          });
        }
        lastAttemptNumber.current = attemptNumber;
      }
    },
    []
  );
  if (!creditByItem) {
    return null;
  }
  if (!recoilAttemptNumber || !recoilDoenetId || !recoilTool) {
    return null;
  }
  if (activityAttemptNumberSetUp !== recoilAttemptNumber) {
    lastAttemptNumber.current = activityAttemptNumberSetUp;
    return null;
  }
  if (lastAttemptNumber.current !== recoilAttemptNumber) {
    initialize(recoilAttemptNumber, recoilDoenetId, recoilUserId, recoilTool);
    return null;
  }
  if (disabled) {
    return /* @__PURE__ */ jsx("div", { style: { fontSize: "20px", textAlign: "center" }, children: "Not Shown" });
  }
  let score = 0;
  if (creditForAssignment) {
    score = Math.round(creditForAssignment * totalPointsOrPercent * 100) / 100;
  }
  let creditByItemsJSX = creditByItem.map((x, i) => {
    let scoreDisplay;
    if (itemWeights[i] === 0) {
      scoreDisplay = x === 0 ? "Not started" : x === 1 ? "Complete" : "In progress";
    } else {
      scoreDisplay = (x ? Math.round(x * 1e3) / 10 : 0) + "%";
    }
    return /* @__PURE__ */ jsxs(
      ScoreContainer,
      {
        highlight: currentPage === i + 1,
        onClick: () => navigate(search + `#page${i + 1}`),
        isLink: true,
        children: [
          "Item ",
          i + 1,
          ":",
          " ",
          /* @__PURE__ */ jsx(ScoreOnRight, { "data-test": `Item ${i + 1} Credit`, children: scoreDisplay })
        ]
      },
      `creditByItem${i}`
    );
  });
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsxs(ScoreContainer, { children: [
      "Possible Points:",
      " ",
      /* @__PURE__ */ jsx(ScoreOnRight, { "data-test": "Possible Points", children: totalPointsOrPercent })
    ] }),
    /* @__PURE__ */ jsx(FinalScore, { score }),
    /* @__PURE__ */ jsx(Line, {}),
    /* @__PURE__ */ jsx("b", { children: "Credit For:" }),
    /* @__PURE__ */ jsxs(ScoreContainer, { "data-test": "Attempt Container", children: [
      "Attempt ",
      recoilAttemptNumber,
      ":",
      " ",
      /* @__PURE__ */ jsxs(ScoreOnRight, { "data-test": "Attempt Percent", children: [
        creditForAttempt ? Math.round(creditForAttempt * 1e3) / 10 : 0,
        "%"
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { style: { marginLeft: "15px" }, children: creditByItemsJSX }),
    /* @__PURE__ */ jsxs(ScoreContainer, { children: [
      "Assignment:",
      " ",
      /* @__PURE__ */ jsxs(ScoreOnRight, { "data-test": "Assignment Percent", children: [
        creditForAssignment ? Math.round(creditForAssignment * 1e3) / 10 : 0,
        "%"
      ] })
    ] })
  ] });
}
export {
  CreditAchieved as default
};
