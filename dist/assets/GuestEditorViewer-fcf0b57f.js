import { t as Recoil_index_20, W as searchParamAtomFamily, m as Recoil_index_22, o as Recoil_index_24, r as reactExports, ay as scrollableContainerAtom, l as useLocation, a0 as Recoil_index_31, az as retrieveTextFileForCid, j as jsx, P as PageViewer, h as axios, a9 as findFirstPageOfActivity } from "./PageViewer-d914b069.js";
import { u as useUpdateViewer, a as useEventListener } from "./EditorViewer-3eecf213.js";
import { p as parseActivityDefinition } from "./activityUtils-7af1fc96.js";
import { v as viewerDoenetMLAtom, e as editorPageIdInitAtom, r as refreshNumberAtom, a as editorViewerErrorStateAtom, u as updateTextEditorDoenetMLAtom, t as textEditorDoenetMLAtom } from "./EditorViewerRecoil-84be9f2a.js";
import { a as pageVariantInfoAtom, p as pageVariantPanelAtom } from "./PageViewerRecoil-d6d14f88.js";
function EditorViewer() {
  const viewerDoenetML = Recoil_index_20(viewerDoenetMLAtom);
  const doenetId = Recoil_index_20(searchParamAtomFamily("doenetId"));
  const [variantInfo, setVariantInfo] = Recoil_index_22(pageVariantInfoAtom);
  const setVariantPanel = Recoil_index_24(pageVariantPanelAtom);
  const setEditorInit = Recoil_index_24(editorPageIdInitAtom);
  const refreshNumber = Recoil_index_20(refreshNumberAtom);
  const setIsInErrorState = Recoil_index_24(editorViewerErrorStateAtom);
  const [pageCid, setPageCid] = reactExports.useState(null);
  const updateViewer = useUpdateViewer();
  const [errMsg, setErrMsg] = reactExports.useState(null);
  const setScrollableContainer = Recoil_index_24(scrollableContainerAtom);
  let location = useLocation();
  const previousLocations = reactExports.useRef({});
  const currentLocationKey = reactExports.useRef(null);
  reactExports.useEffect(() => {
    const prevTitle = document.title;
    const setTitle = async () => {
      let resp = await axios.get(`/api/getCidForAssignment.php`, {
        params: {
          doenetId,
          latestAttemptOverrides: false,
          publicOnly: true,
          userCanViewSourceOnly: true
        }
      });
      let activityCid;
      if (!resp.data.success || !resp.data.cid) {
        if (resp.data.cid) {
          setErrMsg(`Error loading activity: ${resp.data.message}`);
        } else {
          setErrMsg(
            `Error loading activity: public content with public source not found`
          );
        }
        return;
      } else {
        activityCid = resp.data.cid;
      }
      let activityDefinition;
      try {
        activityDefinition = await retrieveTextFileForCid(
          activityCid,
          "doenet"
        );
      } catch (e) {
        setErrMsg(`Error loading activity: activity file not found`);
        return;
      }
      let parseResult = parseActivityDefinition(activityDefinition);
      if (!parseResult.success) {
        setErrMsg(`Invalid activity definition: ${parseResult.message}`);
        return;
      }
      let activityJSON = parseResult.activityJSON;
      setPageCid(findFirstPageCidFromCompiledActivity(activityJSON.order));
      if (errMsg) {
        setErrMsg(null);
      }
      document.title = `${resp.data.label} - Doenet`;
    };
    setTitle().catch(console.error);
    return () => {
      document.title = prevTitle;
    };
  }, [doenetId]);
  reactExports.useEffect(() => {
    var _a, _b;
    if (currentLocationKey.current !== location.key) {
      if (((_a = location.state) == null ? void 0 : _a.previousScrollPosition) !== void 0 && currentLocationKey.current) {
        previousLocations.current[currentLocationKey.current].lastScrollPosition = location.state.previousScrollPosition;
      }
      if (previousLocations.current[location.key]) {
        if (((_b = previousLocations.current[location.key]) == null ? void 0 : _b.lastScrollPosition) !== void 0) {
          document.getElementById("mainPanel").scroll({
            top: previousLocations.current[location.key].lastScrollPosition
          });
        }
      }
      previousLocations.current[location.key] = { ...location };
      currentLocationKey.current = location.key;
    }
  }, [location]);
  reactExports.useEffect(() => {
    const mainPanel = document.getElementById("mainPanel");
    setScrollableContainer(mainPanel);
  }, []);
  let initDoenetML = Recoil_index_31(
    ({ snapshot, set }) => async (pageCid2) => {
      const doenetML = await retrieveTextFileForCid(pageCid2, "doenet");
      set(updateTextEditorDoenetMLAtom, doenetML);
      set(textEditorDoenetMLAtom, doenetML);
      set(viewerDoenetMLAtom, doenetML);
    },
    []
  );
  reactExports.useEffect(() => {
    if (pageCid) {
      initDoenetML(pageCid);
    }
    return () => {
      setEditorInit("");
    };
  }, [pageCid]);
  useEventListener("keydown", (e) => {
    if (e.keyCode === 83 && (navigator.platform.match("Mac") ? e.metaKey : e.ctrlKey)) {
      e.preventDefault();
      updateViewer();
    }
  });
  if (errMsg) {
    return /* @__PURE__ */ jsx("h1", { children: errMsg });
  }
  let attemptNumber = 1;
  let solutionDisplayMode = "button";
  function variantCallback(generatedVariantInfo, allPossibleVariants) {
    const cleanGeneratedVariant = JSON.parse(
      JSON.stringify(generatedVariantInfo)
    );
    setVariantPanel({
      index: cleanGeneratedVariant.index,
      allPossibleVariants
    });
    setVariantInfo({
      index: cleanGeneratedVariant.index
    });
  }
  if (!viewerDoenetML) {
    return null;
  }
  return /* @__PURE__ */ jsx(
    PageViewer,
    {
      doenetML: viewerDoenetML,
      flags: {
        showCorrectness: true,
        readOnly: false,
        solutionDisplayMode,
        showFeedback: true,
        showHints: true,
        autoSubmit: false,
        allowLoadState: false,
        allowSaveState: false,
        allowLocalState: false,
        allowSaveSubmissions: false,
        allowSaveEvents: false
      },
      doenetId,
      attemptNumber,
      generatedVariantCallback: variantCallback,
      requestedVariantIndex: variantInfo.index,
      setIsInErrorState,
      pageIsActive: true
    },
    `pageViewer${refreshNumber}`
  );
}
function findFirstPageCidFromCompiledActivity(orderObj) {
  if (!(orderObj == null ? void 0 : orderObj.content)) {
    return null;
  }
  if (orderObj.content.length == 0) {
    return null;
  }
  for (let item of orderObj.content) {
    if (item.type === "page") {
      return item.cid;
    } else {
      let nextOrderResponse = findFirstPageOfActivity(item.content);
      if (nextOrderResponse) {
        return nextOrderResponse;
      }
    }
  }
  return null;
}
export {
  EditorViewer as default
};
