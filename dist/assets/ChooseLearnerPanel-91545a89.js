import { t as Recoil_index_20, W as searchParamAtomFamily, r as reactExports, a3 as useToast, a0 as Recoil_index_31, h as axios, p as pageToolViewAtom, b as jsxs, j as jsx, F as Fragment, B as Button, ag as UTCDateStringToDate, av as formatAMPM, s as styled, a6 as clearUsersInformationFromTheBrowser, k as checkIfUserClearedOut } from "./PageViewer-d914b069.js";
import { B as ButtonGroup } from "./ButtonGroup-b585a5ef.js";
import { l as Searchbar } from "./SearchBar-da506fb1.js";
import "./emotion-element-6a883da9.browser.esm-2d3713e7.js";
import "./extends-d9a14db7.js";
import "./chunk-QEVFQ4EU-828d9c2a.js";
import "./emotion-react.browser.esm-dfafc3e8.js";
const Styles = styled.div`
  padding: 1rem;
  table {
    /* border-collapse: collapse; */
    border-spacing: 0;
    width: 100%;
    margin-bottom: 20vh;

    thead {
      position: sticky;
      top: 43px;
      box-shadow: 0 2px 0 0px var(--canvastext);
    }

    a {
      text-decoration: var(--mainBlue) underline;
    }

    .sortIcon {
      padding-left: 4px;
    }

    tbody tr:not(:last-child) {
      border-bottom: 1px solid var(--mainGray);
    }

    td:first-child {
      text-align: left;
      max-width: 15rem;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
    }

    th {
      position: sticky;
      top: 0;
      background: var(--canvas);
      user-select: none;
      max-width: 4rem;
      //word-wrap: break-word;
      padding: 2px;
      max-height: 10rem;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
    }

    th:first-child {
      vertical-align: bottom;
      max-width: 15rem;
      p {
        margin: 5px;
      }
    }

    /* th > p {
      height: 100%;
    } */

    tr:first-child th > p {
      margin: 0px 0px 4px 0px;
      padding: 0px;
    }

    tr:not(:first-child) th:not(:first-child) > p {
      /* writing-mode: vertical-rl; */
      text-align: left;
      /* transform: rotate(180deg); */
      /* max-height: 160px; */
    }

    tr:nth-child(even) {
      background-color: var(--mainGray);
    }

    thead tr:only-child th:not(:first-child) > p {
      /* writing-mode: vertical-rl; */
      text-align: left;
      /* transform: rotate(180deg); */
      /* max-height: 160px; */
    }

    td {
      /* user-select: none; */
      text-align: center;
      max-width: 5rem;
    }
    td,
    th {
      border-right: 2px solid var(--canvastext);
      :last-child {
        border-right: 0;
      }
    }

    tfoot {
      font-weight: bolder;
      position: sticky;
      bottom: 0;
      background-color: var(--canvas);
      box-shadow: inset 0 2px 0 var(--canvastext);
    }
  }
`;
function ChooseLearnerPanel(props) {
  const doenetId = Recoil_index_20(searchParamAtomFamily("doenetId"));
  const courseId = Recoil_index_20(searchParamAtomFamily("courseId"));
  let [stage, setStage] = reactExports.useState("request password");
  let [code, setCode] = reactExports.useState("");
  let [learners, setLearners] = reactExports.useState([]);
  let [exams, setExams] = reactExports.useState([]);
  let [examsById, setExamsById] = reactExports.useState({});
  let [choosenLearner, setChoosenLearner] = reactExports.useState(null);
  let [filter, setFilter] = reactExports.useState("");
  let [resumeAttemptFlag, setResumeAttemptFlag] = reactExports.useState(false);
  let [message, setMessage] = reactExports.useState("");
  let [selectedExamLabel, setSelectedExamLabel] = reactExports.useState("");
  let clearingUserRef = reactExports.useRef(false);
  let [clearingMessageJSX, setClearingMessageJSX] = reactExports.useState(null);
  const addToast = useToast();
  const newAttempt = Recoil_index_31(
    ({ set, snapshot }) => async (doenetId2, code2, userId, resumeAttemptFlag2) => {
      if (!resumeAttemptFlag2) {
        await axios.get(
          "/api/incrementAttemptNumberForExam.php",
          {
            params: { doenetId: doenetId2, code: code2, userId }
          }
        );
      }
      location.href = `/api/examjwt.php?userId=${encodeURIComponent(
        choosenLearner.userId
      )}&doenetId=${encodeURIComponent(doenetId2)}&code=${encodeURIComponent(
        code2
      )}`;
    }
  );
  const setDoenetId = Recoil_index_31(
    ({ set }) => async (doenetId2, courseId2) => {
      set(pageToolViewAtom, (was) => {
        let newObj = { ...was };
        if (doenetId2) {
          newObj.params = { doenetId: doenetId2, courseId: courseId2 };
        } else {
          newObj.params = { courseId: courseId2 };
        }
        return newObj;
      });
    }
  );
  async function clearOutUser() {
    while (clearingUserRef.current) {
      await clearUsersInformationFromTheBrowser();
      let { userInformationIsCompletelyRemoved, messageArray } = await checkIfUserClearedOut();
      setClearingMessageJSX(
        messageArray.map((text, i) => /* @__PURE__ */ jsx("p", { children: text }, `error ${i}`))
      );
      if (userInformationIsCompletelyRemoved) {
        setStage("choose exam");
        clearingUserRef.current = false;
        break;
      }
    }
  }
  if (stage === "request password" || stage === "problem with code") {
    return /* @__PURE__ */ jsxs(
      "div",
      {
        style: {
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: "20"
        },
        children: [
          /* @__PURE__ */ jsx(
            "img",
            {
              style: { width: "250px", height: "250px" },
              alt: "Doenet Logo",
              src: "/Doenet_Logo_Frontpage.png"
            }
          ),
          /* @__PURE__ */ jsxs("div", { style: { leftPadding: "10px" }, children: [
            /* @__PURE__ */ jsxs("label", { children: [
              /* @__PURE__ */ jsx("div", { style: { weight: "bold" }, children: "Enter Passcode " }),
              /* @__PURE__ */ jsx(
                "input",
                {
                  type: "password",
                  value: code,
                  "data-test": "signinCodeInput",
                  onKeyDown: (e) => {
                    if (e.key === "Enter") {
                      setStage("check code");
                    }
                  },
                  onChange: (e) => {
                    setCode(e.target.value);
                  }
                }
              )
            ] }),
            /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(
              "button",
              {
                style: {},
                onClick: () => setStage("check code"),
                "data-test": "signInButton",
                children: "Submit"
              }
            ) })
          ] })
        ]
      }
    );
  }
  if (stage === "check code") {
    const checkCode = async (code2) => {
      let { data } = await axios.get("/api/checkPasscode.php", {
        params: { code: code2, doenetId, courseId }
      });
      if (data.success) {
        clearingUserRef.current = true;
        clearOutUser();
        setStage("clearing past user");
        setLearners(data.learners);
        setExams(data.exams);
        let nextExamsById = {};
        for (let examInfo of data.exams) {
          nextExamsById[examInfo.doenetId] = examInfo;
        }
        setExamsById(nextExamsById);
      } else {
        addToast(data.message);
        setStage("problem with code");
      }
    };
    checkCode(code);
  }
  if (stage === "clearing past user") {
    return /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx("h1", { children: "Clearing out past user..." }),
      clearingMessageJSX,
      /* @__PURE__ */ jsx(
        Button,
        {
          value: "Cancel",
          onClick: () => {
            clearingUserRef.current = false;
            setStage("choose exam");
          }
        }
      )
    ] });
  }
  if (stage === "choose exam") {
    if (exams.length < 1) {
      return /* @__PURE__ */ jsx("h1", { children: "No Exams Available!" });
    }
    let examRows = [];
    for (let exam of exams) {
      examRows.push(
        /* @__PURE__ */ jsxs("tr", { children: [
          /* @__PURE__ */ jsx("td", { style: { textAlign: "center" }, children: exam.label }),
          /* @__PURE__ */ jsx("td", { style: { textAlign: "center" }, children: /* @__PURE__ */ jsx(
            "button",
            {
              onClick: async () => {
                const { data } = await axios.get("/api/checkSEBheaders.php", {
                  params: { doenetId: exam.doenetId }
                });
                if (Number(data.legitAccessKey) !== 1) {
                  setStage("Problem");
                  setMessage(
                    "Browser not configured properly to take an exam."
                  );
                  return;
                } else {
                  setDoenetId(exam.doenetId, courseId);
                  setSelectedExamLabel(exam.label);
                  setStage("choose learner");
                }
              },
              children: "Choose"
            }
          ) })
        ] })
      );
    }
    return /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs("table", { children: [
      /* @__PURE__ */ jsxs("thead", { children: [
        /* @__PURE__ */ jsx("th", { style: { width: "200px" }, children: "Exam" }),
        /* @__PURE__ */ jsx("th", { style: { width: "100px" }, children: "Choose" })
      ] }),
      /* @__PURE__ */ jsx("tbody", { children: examRows })
    ] }) });
  }
  if (stage === "choose learner") {
    if (!doenetId) {
      return null;
    }
    if (learners.length < 1) {
      return /* @__PURE__ */ jsx("h1", { children: "No One is Enrolled!" });
    }
    let learnerRows = [];
    let examTimeLimit = examsById[doenetId].timeLimit;
    for (let learner of learners) {
      if (!learner.firstName.toLowerCase().includes(filter.toLowerCase()) && !learner.lastName.toLowerCase().includes(filter.toLowerCase())) {
        continue;
      }
      let timeZoneCorrectLastExamDate = null;
      let allowResume = false;
      if (learner == null ? void 0 : learner.exam_to_date[doenetId]) {
        let lastExamDT = UTCDateStringToDate(learner == null ? void 0 : learner.exam_to_date[doenetId]);
        allowResume = examTimeLimit === null;
        let minutesRemainingPhrase = null;
        if (!allowResume) {
          let users_timeLimit_minutes = Number(examTimeLimit) * Number(learner.timeLimitMultiplier);
          let minutes_remaining;
          if (users_timeLimit_minutes) {
            let users_exam_end_DT = new Date(
              lastExamDT.getTime() + users_timeLimit_minutes * 60 * 1e3
            );
            let now = /* @__PURE__ */ new Date();
            minutes_remaining = (users_exam_end_DT.getTime() - now.getTime()) / (1e3 * 60);
          }
          if (minutes_remaining && minutes_remaining > 1) {
            allowResume = true;
            minutesRemainingPhrase = `${Math.round(
              minutes_remaining
            )} mins remain`;
          }
        }
        if (allowResume) {
          if (!minutesRemainingPhrase) {
            let time = formatAMPM(lastExamDT);
            minutesRemainingPhrase = `${lastExamDT.getMonth() + 1}/${lastExamDT.getDate()} ${time}`;
          }
          timeZoneCorrectLastExamDate = /* @__PURE__ */ jsxs(ButtonGroup, { children: [
            /* @__PURE__ */ jsx(
              Button,
              {
                value: "Resume",
                onClick: () => {
                  setChoosenLearner(learner);
                  setStage("student final check");
                  setResumeAttemptFlag(true);
                }
              }
            ),
            minutesRemainingPhrase
          ] });
        } else if (lastExamDT) {
          let time = formatAMPM(lastExamDT);
          timeZoneCorrectLastExamDate = `${lastExamDT.getMonth() + 1}/${lastExamDT.getDate()} ${time}`;
        }
      }
      learnerRows.push(
        /* @__PURE__ */ jsxs("tr", { children: [
          /* @__PURE__ */ jsx("td", { style: { textAlign: "center" }, children: learner.firstName }),
          /* @__PURE__ */ jsx("td", { style: { textAlign: "center" }, children: learner.lastName }),
          /* @__PURE__ */ jsx("td", { style: { textAlign: "center" }, children: learner.studentId }),
          /* @__PURE__ */ jsx("td", { style: { textAlign: "center" }, children: timeZoneCorrectLastExamDate }),
          /* @__PURE__ */ jsx("td", { style: { display: "block", margin: "4px auto" }, children: /* @__PURE__ */ jsx(
            Button,
            {
              width: "menu",
              value: "Start",
              onClick: () => {
                setChoosenLearner(learner);
                setStage("student final check");
                setResumeAttemptFlag(false);
              }
            }
          ) })
        ] })
      );
    }
    return /* @__PURE__ */ jsxs(Styles, { children: [
      /* @__PURE__ */ jsxs(
        "div",
        {
          style: {
            background: "var(--canvas)",
            top: 0,
            position: "sticky",
            paddingLeft: "50px",
            paddingBottom: "15px",
            display: "flex"
          },
          children: [
            /* @__PURE__ */ jsxs("div", { style: { marginRight: "15px", fontSize: "16pt" }, children: [
              "Exam: ",
              selectedExamLabel
            ] }),
            " ",
            /* @__PURE__ */ jsx(Searchbar, { autoFocus: true, onChange: setFilter, width: "100%" })
          ]
        }
      ),
      /* @__PURE__ */ jsxs("table", { children: [
        /* @__PURE__ */ jsxs("thead", { children: [
          /* @__PURE__ */ jsx("th", { style: { width: "200px" }, children: "First Name" }),
          /* @__PURE__ */ jsx("th", { style: { width: "200px" }, children: "Last Name" }),
          /* @__PURE__ */ jsx("th", { style: { width: "200px" }, children: "Student ID" }),
          /* @__PURE__ */ jsx("th", { style: { width: "240px" }, children: "Last Exam" }),
          /* @__PURE__ */ jsx("th", { style: { width: "60px" }, children: "Choose" })
        ] }),
        /* @__PURE__ */ jsx("tbody", { children: learnerRows })
      ] })
    ] });
  }
  if (stage === "student final check") {
    let yesButtonText = "Yes It's me. Start Exam.";
    if (resumeAttemptFlag) {
      yesButtonText = "Yes It's me. Resume Exam.";
    }
    return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs(
      "div",
      {
        style: {
          fontSize: "1.5em",
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          justifyContent: "center",
          alignItems: "center",
          margin: "20"
        },
        children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsxs("div", { style: { marginRight: "15px", fontSize: "16pt" }, children: [
              "Exam: ",
              selectedExamLabel
            ] }),
            /* @__PURE__ */ jsx("div", {}),
            /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("b", { children: "Is this you?" }) }),
            /* @__PURE__ */ jsxs("div", { children: [
              "Name: ",
              choosenLearner.firstName,
              " ",
              choosenLearner.lastName
            ] }),
            /* @__PURE__ */ jsxs("div", { children: [
              "ID: ",
              choosenLearner.studentId
            ] })
          ] }),
          /* @__PURE__ */ jsxs(ButtonGroup, { children: [
            /* @__PURE__ */ jsx(
              Button,
              {
                alert: true,
                value: "No",
                onClick: () => {
                  setStage("request password");
                  setCode("");
                  setChoosenLearner(null);
                  setDoenetId(null, courseId);
                  setResumeAttemptFlag(false);
                }
              }
            ),
            /* @__PURE__ */ jsx(
              Button,
              {
                value: yesButtonText,
                onClick: () => {
                  newAttempt(
                    doenetId,
                    code,
                    choosenLearner.userId,
                    resumeAttemptFlag
                  );
                }
              }
            )
          ] })
        ]
      }
    ) });
  }
  if (stage === "Problem") {
    return /* @__PURE__ */ jsx("h1", { children: message });
  }
  return null;
}
export {
  Styles,
  ChooseLearnerPanel as default
};
