import { t as Recoil_index_20, W as searchParamAtomFamily, r as reactExports, h as axios, b as jsxs, j as jsx, s as styled } from "./PageViewer-d914b069.js";
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
  background: var(--canvas);
  cursor: auto;
`;
function EndExamPanel() {
  const doenetId = Recoil_index_20(searchParamAtomFamily("doenetId"));
  const attemptNumber = Recoil_index_20(searchParamAtomFamily("attemptNumber"));
  const itemWeights = Recoil_index_20(searchParamAtomFamily("itemWeights")).split(",").map(Number);
  const [
    {
      creditByItem,
      creditForAssignment,
      creditForAttempt,
      totalPointsOrPercent
    },
    setCreditItems
  ] = reactExports.useState({
    creditByItem: [],
    creditForAssignment: null,
    creditForAttempt: null,
    totalPointsOrPercent: null
  });
  reactExports.useEffect(() => {
    axios.get(`/api/loadAssessmentCreditAchieved.php`, {
      params: { attemptNumber, doenetId, tool: "endExam" }
    }).then(({ data }) => {
      if (data.success) {
        setCreditItems({
          creditByItem: data.creditByItem.map(Number),
          creditForAssignment: Number(data.creditForAssignment),
          creditForAttempt: Number(data.creditForAttempt),
          totalPointsOrPercent: Number(data.totalPointsOrPercent)
        });
      }
    });
  }, [doenetId, attemptNumber]);
  let scoreResults = null;
  if (creditByItem.length > 0) {
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
      return /* @__PURE__ */ jsxs(ScoreContainer, { children: [
        "Item ",
        i + 1,
        ":",
        " ",
        /* @__PURE__ */ jsx(ScoreOnRight, { "data-test": `Item ${i + 1} Credit`, children: scoreDisplay })
      ] }, `creditByItem${i}`);
    });
    scoreResults = /* @__PURE__ */ jsxs("div", { style: { leftMargin: "100px", leftPadding: "100px" }, children: [
      /* @__PURE__ */ jsxs(ScoreContainer, { children: [
        "Possible Points:",
        " ",
        /* @__PURE__ */ jsx(ScoreOnRight, { "data-test": "Possible Points", children: totalPointsOrPercent })
      ] }),
      /* @__PURE__ */ jsxs(ScoreContainer, { children: [
        "Final Score:",
        " ",
        /* @__PURE__ */ jsx(ScoreOnRight, { "data-test": "Final Score", children: score })
      ] }),
      /* @__PURE__ */ jsx(Line, {}),
      /* @__PURE__ */ jsx("b", { children: "Credit For:" }),
      /* @__PURE__ */ jsxs(ScoreContainer, { "data-test": "Attempt Container", children: [
        "Attempt ",
        attemptNumber,
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
  return /* @__PURE__ */ jsxs(
    "div",
    {
      style: {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        // display: 'flex',
        justifyContent: "center",
        alignItems: "center",
        margin: "20"
      },
      children: [
        /* @__PURE__ */ jsxs("div", { style: { display: "flex", alignItems: "center" }, children: [
          /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(
            "img",
            {
              style: { width: "250px", height: "250px" },
              alt: "Doenet Logo",
              src: "/Doenet_Logo_Frontpage.png"
            }
          ) }),
          /* @__PURE__ */ jsx("h1", { children: "Exam is finished" })
        ] }),
        /* @__PURE__ */ jsx("div", { style: { display: "flex", justifyContent: "center" }, children: /* @__PURE__ */ jsx(
          "div",
          {
            style: { width: "230px", maxHeight: "340px", overflowY: "scroll" },
            children: scoreResults
          }
        ) })
      ]
    }
  );
}
export {
  EndExamPanel as default
};
