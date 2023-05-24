import { t as Recoil_index_20, W as searchParamAtomFamily, a1 as courseIdAtom, o as Recoil_index_24, r as reactExports, ah as useSetCourseIdFromDoenetId, ai as useInitCourseItems, a8 as itemByDoenetId, a0 as Recoil_index_31, h as axios, j as jsx, F as Fragment } from "./PageViewer-d914b069.js";
import { A as ActivityViewer } from "./ActivityViewer-b51a59ab.js";
import { r as returnNumberOfActivityVariantsForCid } from "./activityUtils-7af1fc96.js";
import { b as activityVariantPanelAtom } from "./PageViewerRecoil-d6d14f88.js";
import "./visibility-sensor-57589aaf.js";
import "./ActionButton-1e9c5f7a.js";
import "./ButtonGroup-b585a5ef.js";
function DraftAssignmentViewer() {
  const recoilDoenetId = Recoil_index_20(searchParamAtomFamily("doenetId"));
  const courseId = Recoil_index_20(courseIdAtom);
  const requestedVariantParam = Recoil_index_20(
    searchParamAtomFamily("requestedVariant")
  );
  const requestedVariantIndex = requestedVariantParam && Number.isFinite(Number(requestedVariantParam)) ? Number(requestedVariantParam) : 1;
  const setVariantPanel = Recoil_index_24(activityVariantPanelAtom);
  let [stage, setStage] = reactExports.useState("Initializing");
  let [message, setMessage] = reactExports.useState("");
  const [
    {
      showCorrectness,
      paginate,
      showFeedback,
      showHints,
      autoSubmit,
      cid,
      doenetId,
      solutionDisplayMode
    },
    setLoad
  ] = reactExports.useState({});
  let allPossibleVariants = reactExports.useRef([]);
  useSetCourseIdFromDoenetId(recoilDoenetId);
  useInitCourseItems(courseId);
  let itemObj = Recoil_index_20(itemByDoenetId(recoilDoenetId));
  let label = itemObj.label;
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
    initializeValues(recoilDoenetId, itemObj);
  }, [itemObj, recoilDoenetId]);
  function variantCallback(variantIndex, numberOfVariants) {
    setVariantPanel({
      index: variantIndex,
      numberOfVariants
    });
  }
  const initializeValues = Recoil_index_31(
    ({ snapshot, set }) => async (doenetId2, {
      type,
      timeLimit,
      assignedDate,
      dueDate,
      showCorrectness: showCorrectness2,
      showCreditAchievedMenu,
      paginate: paginate2,
      showFeedback: showFeedback2,
      showHints: showHints2,
      autoSubmit: autoSubmit2,
      showSolution,
      proctorMakesAvailable
    }) => {
      if (type === void 0) {
        return;
      }
      let solutionDisplayMode2 = "button";
      if (!showSolution) {
        solutionDisplayMode2 = "none";
      }
      let cid2 = null;
      let resp = await axios.get(`/api/getCidForAssignment.php`, {
        params: { doenetId: doenetId2, latestAttemptOverrides: false, getDraft: true }
      });
      if (!resp.data.success || !resp.data.cid) {
        setStage("Problem");
        setMessage(`Error loading assignment: ${resp.data.message}`);
        return;
      } else {
        cid2 = resp.data.cid;
      }
      let result = await returnNumberOfActivityVariantsForCid(cid2);
      if (!result.success) {
        setStage("Problem");
        setMessage(result.message);
        return;
      }
      allPossibleVariants.current = [
        ...Array(result.numberOfVariants).keys()
      ].map((x) => x + 1);
      setLoad({
        showCorrectness: showCorrectness2,
        paginate: paginate2,
        showFeedback: showFeedback2,
        showHints: showHints2,
        autoSubmit: autoSubmit2,
        cid: cid2,
        doenetId: doenetId2,
        solutionDisplayMode: solutionDisplayMode2
      });
      setStage("Ready");
    },
    []
  );
  if (recoilDoenetId === "") {
    return null;
  }
  if (courseId === "__not_found__") {
    return /* @__PURE__ */ jsx("h1", { children: "Content not found or no permission to view content" });
  } else if (stage === "Initializing") {
    return null;
  } else if (stage === "Problem") {
    return /* @__PURE__ */ jsx("h1", { children: message });
  }
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx(
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
        allowLoadState: false,
        allowSaveState: false,
        allowLocalState: false,
        allowSaveSubmissions: false,
        allowSaveEvents: false
      },
      requestedVariantIndex,
      generatedVariantCallback: variantCallback,
      paginate
    },
    `activityViewer${doenetId}`
  ) });
}
export {
  DraftAssignmentViewer as default
};
