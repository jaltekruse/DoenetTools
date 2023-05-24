import { r as reactExports, u as useLoaderData, t as Recoil_index_20, W as searchParamAtomFamily, m as Recoil_index_22, a1 as courseIdAtom, o as Recoil_index_24, a8 as itemByDoenetId, a7 as suppressMenusAtom, V as profileAtom, ay as scrollableContainerAtom, l as useLocation, ah as useSetCourseIdFromDoenetId, ai as useInitCourseItems, a0 as Recoil_index_31, h as axios, z as cidFromText, j as jsx, P as PageViewer } from "./PageViewer-d914b069.js";
import { v as viewerDoenetMLAtom, e as editorPageIdInitAtom, r as refreshNumberAtom, a as editorViewerErrorStateAtom, u as updateTextEditorDoenetMLAtom, t as textEditorDoenetMLAtom, b as textEditorLastKnownCidAtom } from "./EditorViewerRecoil-84be9f2a.js";
import { a as pageVariantInfoAtom, p as pageVariantPanelAtom } from "./PageViewerRecoil-d6d14f88.js";
function useEventListener(eventType, callback, element = window) {
  const callbackRef = reactExports.useRef(callback);
  reactExports.useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);
  reactExports.useEffect(() => {
    if (element == null)
      return;
    const handler = (e) => callbackRef.current(e);
    element.addEventListener(eventType, handler);
    return () => element.removeEventListener(eventType, handler);
  }, [eventType, element]);
}
const useUpdateViewer = () => {
  const updateViewer = Recoil_index_31(({ snapshot, set }) => async () => {
    const textEditorDoenetML = await snapshot.getPromise(
      textEditorDoenetMLAtom
    );
    const isErrorState = await snapshot.getPromise(editorViewerErrorStateAtom);
    set(viewerDoenetMLAtom, textEditorDoenetML);
    if (isErrorState) {
      set(refreshNumberAtom, (was) => was + 1);
    }
  });
  return updateViewer;
};
function EditorViewer() {
  let data = useLoaderData();
  const dataCourseId = data == null ? void 0 : data.courseId;
  const loaderDoenetId = data == null ? void 0 : data.doenetId;
  const loaderPageId = data == null ? void 0 : data.pageDoenetId;
  const viewerDoenetML = Recoil_index_20(viewerDoenetMLAtom);
  const paramPageId = Recoil_index_20(searchParamAtomFamily("pageId"));
  const paramlinkPageId = Recoil_index_20(searchParamAtomFamily("linkPageId"));
  const doenetId = Recoil_index_20(searchParamAtomFamily("doenetId"));
  let effectivePageId = paramPageId;
  let effectiveDoenetId = doenetId;
  if (paramlinkPageId) {
    effectivePageId = paramlinkPageId;
    effectiveDoenetId = paramlinkPageId;
  }
  if (loaderDoenetId) {
    effectivePageId = loaderPageId;
    effectiveDoenetId = loaderDoenetId;
  }
  const [courseId, setCourseId] = Recoil_index_22(courseIdAtom);
  const initializedPageId = Recoil_index_20(editorPageIdInitAtom);
  const [variantInfo, setVariantInfo] = Recoil_index_22(pageVariantInfoAtom);
  const setVariantPanel = Recoil_index_24(pageVariantPanelAtom);
  const setEditorInit = Recoil_index_24(editorPageIdInitAtom);
  const refreshNumber = Recoil_index_20(refreshNumberAtom);
  const setIsInErrorState = Recoil_index_24(editorViewerErrorStateAtom);
  const [pageObj, setPageObj] = Recoil_index_22(itemByDoenetId(effectivePageId));
  const activityObj = Recoil_index_20(itemByDoenetId(doenetId));
  const setSuppressMenus = Recoil_index_24(suppressMenusAtom);
  const { canUpload } = Recoil_index_20(profileAtom);
  const updateViewer = useUpdateViewer();
  const setScrollableContainer = Recoil_index_24(scrollableContainerAtom);
  let location = useLocation();
  const previousLocations = reactExports.useRef({});
  const currentLocationKey = reactExports.useRef(null);
  useSetCourseIdFromDoenetId(effectiveDoenetId);
  useInitCourseItems(courseId);
  let pageInitiated = false;
  let label = null;
  if (Object.keys(pageObj).length > 0) {
    pageInitiated = true;
    if ((activityObj == null ? void 0 : activityObj.isSinglePage) && !paramlinkPageId) {
      label = activityObj == null ? void 0 : activityObj.label;
    } else {
      label = pageObj.label;
    }
  }
  reactExports.useEffect(() => {
    const prevTitle = document.title;
    if (label) {
      document.title = `${label} - Doenet`;
    }
    return () => {
      document.title = prevTitle;
    };
  }, [label]);
  let initDoenetML = Recoil_index_31(
    ({ snapshot, set }) => async (pageId) => {
      let { data: doenetML } = await axios.get(
        `/media/byPageId/${pageId}.doenet`
      );
      doenetML = doenetML.toString();
      let pageObj2 = await snapshot.getPromise(itemByDoenetId(pageId));
      let containingObj = await snapshot.getPromise(
        itemByDoenetId(pageObj2.containingDoenetId)
      );
      const cid = await cidFromText(doenetML);
      set(updateTextEditorDoenetMLAtom, doenetML);
      set(textEditorDoenetMLAtom, doenetML);
      set(viewerDoenetMLAtom, doenetML);
      set(editorPageIdInitAtom, pageId);
      set(textEditorLastKnownCidAtom, cid);
      let suppress = [];
      if (containingObj.type == "bank") {
        suppress.push("AssignmentSettingsMenu");
      }
      if (pageObj2.type == "pageLink") {
        suppress.push("AssignmentSettingsMenu");
        suppress.push("PageLink");
        suppress.push("SupportingFilesMenu");
      }
      if (canUpload !== "1")
        suppress.push("SupportingFilesMenu");
      setSuppressMenus(suppress);
    },
    [setSuppressMenus]
  );
  reactExports.useEffect(() => {
    if (effectivePageId !== "" && pageInitiated) {
      initDoenetML(effectivePageId);
    } else if (loaderPageId) {
      setCourseId(dataCourseId);
      setPageObj({
        containingDoenetId: loaderDoenetId,
        doenetId: loaderPageId,
        isSelected: false,
        label: "Untitled",
        parentDoenetId: loaderDoenetId,
        type: "page"
      });
    }
    return () => {
      setEditorInit("");
    };
  }, [
    dataCourseId,
    setCourseId,
    initDoenetML,
    setEditorInit,
    loaderPageId,
    effectivePageId,
    pageInitiated
  ]);
  useEventListener("keydown", (e) => {
    if (e.keyCode === 83 && e.metaKey || e.keyCode === 83 && e.ctrlKey) {
      e.preventDefault();
      updateViewer();
    }
  });
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
  if (courseId === "__not_found__") {
    return /* @__PURE__ */ jsx("h1", { children: "Content not found or no permission to view content" });
  } else if (effectivePageId !== initializedPageId) {
    return null;
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
  return /* @__PURE__ */ jsx(
    PageViewer,
    {
      doenetML: viewerDoenetML,
      flags: {
        showCorrectness: true,
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
const EditorViewer$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: EditorViewer,
  useUpdateViewer
}, Symbol.toStringTag, { value: "Module" }));
export {
  EditorViewer$1 as E,
  useEventListener as a,
  useUpdateViewer as u
};
