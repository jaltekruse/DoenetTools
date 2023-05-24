import { r as reactExports, b as jsxs, j as jsx, c as FontAwesomeIcon, bb as faTimes, t as Recoil_index_20, W as searchParamAtomFamily, a1 as courseIdAtom, o as Recoil_index_24, a7 as suppressMenusAtom, m as Recoil_index_22, a0 as Recoil_index_31, ah as useSetCourseIdFromDoenetId, ai as useInitCourseItems, a8 as itemByDoenetId, l as useLocation, i as useNavigate, U as Recoil_index_21, V as profileAtom, p as pageToolViewAtom, h as axios, F as Fragment, B as Button, aA as Recoil_index_8, az as retrieveTextFileForCid } from "./PageViewer-d914b069.js";
import { s as saveStateToDBTimerIdAtom, A as ActivityViewer } from "./ActivityViewer-b51a59ab.js";
import { a as prng_alea, p as parseActivityDefinition, d as determineNumberOfActivityVariants } from "./activityUtils-7af1fc96.js";
import { A as ActionButton } from "./ActionButton-1e9c5f7a.js";
import { B as ButtonGroup } from "./ButtonGroup-b585a5ef.js";
import { e as effectivePermissionsByCourseId } from "./RoleDropdown-ece1f3f8.js";
import "./visibility-sensor-57589aaf.js";
import "./DropdownMenu-d8160745.js";
import "./defineProperty-2975ceb9.js";
import "./setPrototypeOf-be240aa9.js";
import "./extends-d9a14db7.js";
import "./emotion-react.browser.esm-dfafc3e8.js";
import "./emotion-element-6a883da9.browser.esm-2d3713e7.js";
function Banner(props) {
  const [bannerVisible, setBannerVisible] = reactExports.useState("flex");
  var banner = {
    padding: "10px",
    display: `${bannerVisible}`,
    alignItems: "center"
  };
  var bannerText = {
    flexGrow: "1",
    lineHeight: "1.4",
    fontFamily: "Open Sans",
    fontSize: "16px"
  };
  var closeButton = {
    background: "none",
    border: "0px",
    marginLeft: "5px",
    padding: "0px",
    value: "Label:",
    fontFamily: "Open Sans",
    fontSize: "14px",
    cursor: "pointer"
  };
  var container = {};
  switch (props.type) {
    case "ERROR":
      container.backgroundColor = "var(--mainRed)";
      container.color = "var(--canvas)";
      closeButton.color = "var(--canvas)";
      break;
    case "ALERT":
      container.backgroundColor = "var(--lightYellow)";
      break;
    case "ACTION":
      container.backgroundColor = "var(--lightBlue)";
      break;
    case "SUCCESS":
      container.backgroundColor = "var(--lightGreen)";
      break;
    default:
      container.backgroundColor = "var(--mainGreen)";
      break;
  }
  function clearBanner() {
    setBannerVisible("none");
  }
  if (props.allowClose) {
    container.closeButton = /* @__PURE__ */ jsx(
      "button",
      {
        "aria-label": "Close banner",
        style: closeButton,
        onClick: () => {
          clearBanner();
        },
        children: /* @__PURE__ */ jsx(FontAwesomeIcon, { icon: faTimes })
      }
    );
  }
  return /* @__PURE__ */ jsxs("div", { "aria-labelledby": "banner-text", children: [
    /* @__PURE__ */ jsx("div", { style: container, children: /* @__PURE__ */ jsxs("div", { style: banner, children: [
      /* @__PURE__ */ jsx("div", { style: bannerText, id: "banner-text", children: props.value }),
      container.closeButton
    ] }) }),
    /* @__PURE__ */ jsx("div", { style: { padding: "5px" } })
  ] });
}
const currentAttemptNumber = Recoil_index_8({
  key: "currentAttemptNumber",
  default: null
});
const creditAchievedAtom = Recoil_index_8({
  key: "creditAchievedAtom",
  default: {
    creditByItem: [],
    creditForAttempt: 0,
    creditForAssignment: 0,
    totalPointsOrPercent: 0
  }
});
const numberOfAttemptsAllowedAdjustmentAtom = Recoil_index_8({
  key: "numberOfAttemptsAllowedAdjustment",
  default: 0
});
const cidChangedAtom = Recoil_index_8({
  key: "cidChanged",
  default: false
});
function generateNewVariant({
  previousVariants,
  allPossibleVariants,
  individualize,
  userId,
  doenetId,
  attemptNumber
}) {
  let possible = [];
  let numRemaining = (attemptNumber - 1) % allPossibleVariants.length;
  let mostRecentPreviousVariants = [];
  if (numRemaining > 0) {
    for (let aNum = attemptNumber - numRemaining; aNum < attemptNumber; aNum++) {
      if (previousVariants[aNum - 1]) {
        mostRecentPreviousVariants.push(previousVariants[aNum - 1]);
      } else {
        let oldVariant = generateNewVariant({
          previousVariants: previousVariants.slice(0, aNum - 1),
          allPossibleVariants,
          individualize,
          userId,
          doenetId,
          attemptNumber: aNum
        });
        previousVariants[aNum - 1] = oldVariant;
        mostRecentPreviousVariants.push(oldVariant);
      }
    }
  }
  for (let variant of allPossibleVariants) {
    if (!mostRecentPreviousVariants.includes(variant)) {
      possible.push(variant);
    }
  }
  let seed = doenetId + "|" + attemptNumber;
  if (individualize) {
    seed += "|" + userId;
  }
  let rng = new prng_alea(seed);
  const ind = Math.floor(rng() * possible.length);
  const nextVariant = possible[ind];
  return nextVariant;
}
function AssignmentViewer() {
  const recoilDoenetId = Recoil_index_20(searchParamAtomFamily("doenetId"));
  const courseId = Recoil_index_20(courseIdAtom);
  const setSuppressMenus = Recoil_index_24(suppressMenusAtom);
  let [stage, setStage] = reactExports.useState("Initializing");
  let [message, setMessage] = reactExports.useState("");
  const [recoilAttemptNumber, setRecoilAttemptNumber] = Recoil_index_22(currentAttemptNumber);
  const [cidChanged, setCidChanged] = Recoil_index_22(cidChangedAtom);
  const [
    {
      requestedVariantIndex,
      attemptNumber,
      showCorrectness,
      paginate,
      showFinishButton,
      showFeedback,
      showHints,
      autoSubmit,
      cid,
      doenetId,
      solutionDisplayMode,
      baseNumberOfAttemptsAllowed
    },
    setLoad
  ] = reactExports.useState({});
  const [
    numberOfAttemptsAllowedAdjustment,
    setNumberOfAttemptsAllowedAdjustment
  ] = Recoil_index_22(numberOfAttemptsAllowedAdjustmentAtom);
  const [cidChangedMessageOpen, setCidChangedMessageOpen] = reactExports.useState(false);
  let allPossibleVariants = reactExports.useRef([]);
  let userId = reactExports.useRef(null);
  let individualize = reactExports.useRef(null);
  const getValueOfTimeoutWithoutARefresh = Recoil_index_31(
    ({ snapshot }) => async () => {
      return await snapshot.getPromise(saveStateToDBTimerIdAtom);
    },
    [saveStateToDBTimerIdAtom]
  );
  useSetCourseIdFromDoenetId(recoilDoenetId);
  useInitCourseItems(courseId);
  const effectivePermissions = Recoil_index_20(
    effectivePermissionsByCourseId(courseId)
  );
  let [itemObj, setItemObj] = Recoil_index_22(itemByDoenetId(recoilDoenetId));
  let label = itemObj.label;
  let { search, hash } = useLocation();
  let navigate = useNavigate();
  reactExports.useEffect(() => {
    const prevTitle = document.title;
    if (label) {
      document.title = `${label} - Doenet`;
    }
    return () => {
      document.title = prevTitle;
    };
  }, [label]);
  reactExports.useEffect(() => {
    if (Object.keys(itemObj).length > 0 && Object.keys(effectivePermissions).length > 0) {
      initializeValues(recoilDoenetId, itemObj);
    }
  }, [itemObj, recoilDoenetId, effectivePermissions]);
  const loadProfile = Recoil_index_21(profileAtom);
  userId.current = loadProfile.contents.userId;
  const initializeValues = Recoil_index_31(
    ({ snapshot, set }) => async (doenetId2, {
      type,
      timeLimit,
      assignedDate,
      dueDate,
      showCorrectness: showCorrectness2,
      showCreditAchievedMenu,
      paginate: paginate2,
      showFinishButton: showFinishButton2,
      showFeedback: showFeedback2,
      showHints: showHints2,
      autoSubmit: autoSubmit2,
      showSolution,
      proctorMakesAvailable,
      numberOfAttemptsAllowed: baseNumberOfAttemptsAllowed2
    }) => {
      if (type === void 0) {
        return;
      }
      let suppress = [];
      if (timeLimit === null) {
        suppress.push("TimerMenu");
      }
      if (!showCorrectness2 || !showCreditAchievedMenu || effectivePermissions.canViewUnassignedContent !== "0") {
        suppress.push("CreditAchieved");
      }
      setSuppressMenus(suppress);
      let solutionDisplayMode2 = "button";
      if (!showSolution && effectivePermissions.canViewUnassignedContent === "0") {
        solutionDisplayMode2 = "none";
      }
      if (proctorMakesAvailable) {
        const { page } = await snapshot.getPromise(pageToolViewAtom);
        if (page !== "exam") {
          setStage("Problem");
          setMessage("Assignment only available in a proctored setting.");
          return;
        } else {
          const { data } = await axios.get("/api/checkSEBheaders.php", {
            params: { doenetId: doenetId2 }
          });
          if (Number(data.legitAccessKey) !== 1) {
            setStage("Problem");
            setMessage("Browser not configured properly to take an exam.");
            return;
          }
        }
      }
      let cid2 = null;
      let resp = await axios.get(`/api/getCidForAssignment.php`, {
        params: { doenetId: doenetId2, latestAttemptOverrides: true }
      });
      if (!resp.data.success) {
        setStage("Problem");
        setMessage(`Error loading assignment: ${resp.data.message}`);
        return;
      } else if (!resp.data.cid) {
        setStage("Problem");
        setMessage("Assignment is not assigned.");
        return;
      } else {
        cid2 = resp.data.cid;
      }
      setCidChanged(resp.data.cidChanged);
      resp = await axios.get("/api/loadTakenVariants.php", {
        params: { doenetId: doenetId2 }
      });
      if (!resp.data.success) {
        setStage("Problem");
        if (resp.data.message) {
          setMessage(`Could not load assignment: ${resp.data.message}`);
        } else {
          setMessage(`Could not load assignment: ${resp.data}`);
        }
        return;
      }
      let usersVariantAttempts = resp.data.variants.map(Number);
      let attemptNumber2 = Math.max(...resp.data.attemptNumbers.map(Number));
      let needNewVariant = false;
      if (attemptNumber2 < 1) {
        attemptNumber2 = 1;
        needNewVariant = true;
      } else if (resp.data.variants[resp.data.variants.length - 1] === null) {
        needNewVariant = true;
      }
      set(currentAttemptNumber, attemptNumber2);
      resp = await axios.get("/api/loadAttemptsAllowedAdjustment.php", {
        params: { doenetId: doenetId2 }
      });
      if (!resp.data.success) {
        setStage("Problem");
        if (resp.data.message) {
          setMessage(`Could not load assignment: ${resp.data.message}`);
        } else {
          setMessage(`Could not load assignment: ${resp.data}`);
        }
        return;
      }
      let numberOfAttemptsAllowedAdjustment2 = Number(
        resp.data.numberOfAttemptsAllowedAdjustment
      );
      set(
        numberOfAttemptsAllowedAdjustmentAtom,
        numberOfAttemptsAllowedAdjustment2
      );
      let result = await returnNumberOfActivityVariants(cid2);
      if (!result.success) {
        setLoad({
          requestedVariantIndex: 0,
          attemptNumber: attemptNumber2,
          showCorrectness: showCorrectness2,
          paginate: paginate2,
          showFinishButton: showFinishButton2,
          showFeedback: showFeedback2,
          showHints: showHints2,
          autoSubmit: autoSubmit2,
          cid: cid2,
          doenetId: doenetId2,
          solutionDisplayMode: solutionDisplayMode2,
          baseNumberOfAttemptsAllowed: baseNumberOfAttemptsAllowed2
        });
        setStage("Problem");
        setMessage(result.message);
        return;
      }
      allPossibleVariants.current = [
        ...Array(result.numberOfVariants).keys()
      ].map((x) => x + 1);
      if (needNewVariant) {
        resp = await axios.get("/api/getIndividualizeForAssignment.php", {
          params: { doenetId: doenetId2 }
        });
        if (!resp.data.success) {
          setStage("Problem");
          if (resp.data.message) {
            setMessage(`Could not load assignment: ${resp.data.message}`);
          } else {
            setMessage(`Could not load assignment: ${resp.data}`);
          }
          return;
        }
        individualize.current = resp.data.individualize === "1";
        usersVariantAttempts = usersVariantAttempts.slice(
          0,
          attemptNumber2 - 1
        );
        usersVariantAttempts.push(
          generateNewVariant({
            previousVariants: usersVariantAttempts,
            allPossibleVariants: allPossibleVariants.current,
            individualize: individualize.current,
            userId: userId.current,
            doenetId: doenetId2,
            attemptNumber: attemptNumber2
          })
        );
      }
      let requestedVariantIndex2 = usersVariantAttempts[usersVariantAttempts.length - 1];
      console.log(`requestedVariantIndex: ${requestedVariantIndex2}`);
      setLoad({
        requestedVariantIndex: requestedVariantIndex2,
        attemptNumber: attemptNumber2,
        showCorrectness: showCorrectness2,
        paginate: paginate2,
        showFinishButton: showFinishButton2,
        showFeedback: showFeedback2,
        showHints: showHints2,
        autoSubmit: autoSubmit2,
        cid: cid2,
        doenetId: doenetId2,
        solutionDisplayMode: solutionDisplayMode2,
        baseNumberOfAttemptsAllowed: baseNumberOfAttemptsAllowed2
      });
      setStage("Ready");
    },
    [setSuppressMenus, effectivePermissions]
  );
  const setActivityAsCompleted = Recoil_index_31(
    ({ set }) => async () => {
      set(itemByDoenetId(doenetId), (prev) => {
        let next = { ...prev };
        next.completed = true;
        next.completedDate = /* @__PURE__ */ new Date();
        return next;
      });
    },
    [doenetId]
  );
  async function updateAttemptNumberAndRequestedVariant(newAttemptNumber, doenetId2) {
    if (hash && hash !== "#page1") {
      navigate(search, { replace: true });
    }
    let oldTimeoutId = await getValueOfTimeoutWithoutARefresh();
    if (oldTimeoutId !== null) {
      clearTimeout(oldTimeoutId);
    }
    let cid2 = null;
    let resp = await axios.get(`/api/getCidForAssignment.php`, {
      params: { doenetId: doenetId2, latestAttemptOverrides: false }
    });
    if (!resp.data.success) {
      setStage("Problem");
      setMessage(`Error loading assignment: ${resp.data.message}`);
      return;
    } else if (!resp.data.cid) {
      setStage("Problem");
      setMessage("Assignment is not assigned.");
      return;
    } else {
      cid2 = resp.data.cid;
    }
    console.log(`retrieved cid: ${cid2}`);
    const { data } = await axios.get("/api/loadTakenVariants.php", {
      params: { doenetId: doenetId2 }
    });
    if (!data.success) {
      setStage("Problem");
      if (data.message) {
        setMessage(`Could not load assignment: ${data.message}`);
      } else {
        setMessage(`Could not load assignment: ${data}`);
      }
      return;
    }
    let usersVariantAttempts = data.variants.map(Number).slice(0, newAttemptNumber - 1);
    if (individualize.current === null) {
      resp = await axios.get("/api/getIndividualizeForAssignment.php", {
        params: { doenetId: doenetId2 }
      });
      if (!resp.data.success) {
        setStage("Problem");
        if (resp.data.message) {
          setMessage(`Could not load assignment: ${resp.data.message}`);
        } else {
          setMessage(`Could not load assignment: ${resp.data}`);
        }
        return;
      }
      individualize.current = resp.data.individualize === "1";
      setStage("Ready");
    }
    usersVariantAttempts.push(
      generateNewVariant({
        previousVariants: usersVariantAttempts,
        allPossibleVariants: allPossibleVariants.current,
        individualize: individualize.current,
        userId: userId.current,
        doenetId: doenetId2,
        attemptNumber: newAttemptNumber
      })
    );
    let newRequestedVariantIndex = usersVariantAttempts[usersVariantAttempts.length - 1];
    setLoad((was) => {
      let newObj = { ...was };
      newObj.attemptNumber = newAttemptNumber;
      newObj.requestedVariantIndex = newRequestedVariantIndex;
      newObj.cid = cid2;
      return newObj;
    });
    setCidChanged(false);
  }
  const updateCreditAchieved = Recoil_index_31(
    ({ set }) => async ({
      creditByItem,
      creditForAssignment,
      creditForAttempt,
      totalPointsOrPercent
    }) => {
      set(creditAchievedAtom, {
        creditByItem,
        creditForAssignment,
        creditForAttempt,
        totalPointsOrPercent
      });
    }
  );
  function pageChanged(pageNumber) {
    console.log(`page changed to ${pageNumber}`);
  }
  async function incrementAttemptNumberAndAttemptsAllowed() {
    let resp = await axios.post(
      "/api/incrementAttemptsAllowedIfCidChanged.php",
      {
        doenetId
      }
    );
    if (resp.data.cidChanged) {
      setNumberOfAttemptsAllowedAdjustment(
        Number(resp.data.newNumberOfAttemptsAllowedAdjustment)
      );
      setRecoilAttemptNumber((was) => was + 1);
    }
  }
  if (recoilDoenetId === "") {
    return null;
  }
  console.log("stage", stage);
  if (courseId === "__not_found__") {
    return /* @__PURE__ */ jsx("h1", { children: "Content not found or no permission to view content" });
  } else if (stage === "Initializing") {
    return null;
  } else if (recoilAttemptNumber > attemptNumber) {
    updateAttemptNumberAndRequestedVariant(recoilAttemptNumber, recoilDoenetId);
    return null;
  } else if (stage === "Problem") {
    return /* @__PURE__ */ jsx("h1", { children: message });
  }
  if (!(itemObj == null ? void 0 : itemObj.canViewAfterCompleted) && itemObj.completed) {
    const totalNumberOfAttemptsAllowed = Number(itemObj.numberOfAttemptsAllowed) + Number(numberOfAttemptsAllowedAdjustment);
    if (totalNumberOfAttemptsAllowed > attemptNumber) {
      return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs("div", { style: { margin: "15px" }, children: [
        /* @__PURE__ */ jsx("h1", { children: "Assessment Complete" }),
        /* @__PURE__ */ jsx("p", { children: "You have completed this assessment. Would you like to begin another attempt?" }),
        /* @__PURE__ */ jsx("p", { children: /* @__PURE__ */ jsx(
          Button,
          {
            value: "Begin New Attempt",
            onClick: async () => {
              const { data } = await axios.get(`/api/saveCompleted.php`, {
                params: { doenetId }
              });
              if (data.success) {
                setRecoilAttemptNumber((was) => was + 1);
                setItemObj((prev) => {
                  let next = { ...prev };
                  next.completed = false;
                  return next;
                });
              } else {
                setStage("Problem");
                setMessage("Internal Error");
              }
            }
          }
        ) })
      ] }) });
    } else {
      return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs("div", { style: { margin: "15px" }, children: [
        /* @__PURE__ */ jsx("h1", { children: "Assessment Complete" }),
        /* @__PURE__ */ jsx("p", { children: "You have already completed this assessment and no additional attempts are available." })
      ] }) });
    }
  }
  let cidChangedAlert = null;
  if (cidChanged) {
    if (cidChangedMessageOpen) {
      let attemptNumberPhrase = null;
      if (baseNumberOfAttemptsAllowed > 1) {
        attemptNumberPhrase = " and the number of available attempts";
      }
      cidChangedAlert = /* @__PURE__ */ jsx(
        Banner,
        {
          type: "ACTION",
          value: /* @__PURE__ */ jsxs(
            "div",
            {
              style: {
                border: "var(--mainBorder)",
                borderRadius: "var(--mainBorderRadius)",
                padding: "5px",
                margin: "5px",
                display: "flex",
                flexFlow: "column wrap"
              },
              children: [
                "A new version of this activity is available. Do you want to start a new attempt using the new version? (This will reset the activity",
                attemptNumberPhrase,
                ".)",
                /* @__PURE__ */ jsx(
                  "div",
                  {
                    style: {
                      display: "flex",
                      justifyContent: "center",
                      padding: "5px"
                    },
                    children: /* @__PURE__ */ jsxs(ButtonGroup, { children: [
                      /* @__PURE__ */ jsx(
                        Button,
                        {
                          onClick: incrementAttemptNumberAndAttemptsAllowed,
                          dataTest: "ConfirmNewVersion",
                          value: "Yes"
                        }
                      ),
                      /* @__PURE__ */ jsx(
                        Button,
                        {
                          onClick: () => setCidChangedMessageOpen(false),
                          dataTest: "CancelNewVersion",
                          value: "No",
                          alert: true
                        }
                      )
                    ] })
                  }
                )
              ]
            }
          )
        }
      );
    } else {
      cidChangedAlert = /* @__PURE__ */ jsx(
        Banner,
        {
          type: "ACTION",
          value: /* @__PURE__ */ jsx("div", { style: { marginLeft: "1px", marginRight: "5px" }, children: /* @__PURE__ */ jsx(
            ActionButton,
            {
              onClick: () => setCidChangedMessageOpen(true),
              dataTest: "NewVersionAvailable",
              value: "New version available!"
            }
          ) })
        }
      );
    }
  }
  const allowLoadAndSave = effectivePermissions.canViewUnassignedContent === "0";
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    cidChangedAlert,
    /* @__PURE__ */ jsx(
      ActivityViewer,
      {
        cid,
        doenetId,
        flags: {
          showCorrectness,
          readOnly: false,
          solutionDisplayMode,
          showFeedback,
          showHints,
          autoSubmit,
          allowLoadState: allowLoadAndSave,
          allowSaveState: allowLoadAndSave,
          allowLocalState: allowLoadAndSave,
          allowSaveSubmissions: allowLoadAndSave,
          allowSaveEvents: allowLoadAndSave
        },
        attemptNumber,
        requestedVariantIndex,
        updateCreditAchievedCallback: updateCreditAchieved,
        updateAttemptNumber: setRecoilAttemptNumber,
        pageChangedCallback: pageChanged,
        paginate,
        showFinishButton,
        cidChangedCallback: () => setCidChanged(true),
        setActivityAsCompleted
      },
      `activityViewer${doenetId}`
    )
  ] });
}
async function returnNumberOfActivityVariants(cid) {
  let activityDefinitionDoenetML;
  try {
    activityDefinitionDoenetML = await retrieveTextFileForCid(cid);
  } catch (e) {
    return { success: false, message: "Could not retrieve file" };
  }
  let result = parseActivityDefinition(activityDefinitionDoenetML);
  if (!result.success) {
    return result;
  }
  try {
    result = await determineNumberOfActivityVariants(result.activityJSON);
  } catch (e) {
    return { success: false, message: e.message };
  }
  return { success: true, numberOfVariants: result.numberOfVariants };
}
export {
  cidChangedAtom,
  creditAchievedAtom,
  currentAttemptNumber,
  AssignmentViewer as default,
  numberOfAttemptsAllowedAdjustmentAtom
};
