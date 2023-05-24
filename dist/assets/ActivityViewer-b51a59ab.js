import { aA as Recoil_index_8, a3 as useToast, o as Recoil_index_24, p as pageToolViewAtom, r as reactExports, m as Recoil_index_22, ay as scrollableContainerAtom, l as useLocation, i as useNavigate, a0 as Recoil_index_31, aN as nanoid, aO as set, h as axios, a4 as toastType, b as jsxs, j as jsx, P as PageViewer, z as cidFromText, az as retrieveTextFileForCid, aP as get, c as FontAwesomeIcon, aQ as faExclamationCircle, B as Button } from "./PageViewer-d914b069.js";
import { p as parseActivityDefinition, c as calculateOrderAndVariants } from "./activityUtils-7af1fc96.js";
import { V as VisibilitySensor } from "./visibility-sensor-57589aaf.js";
import { A as ActionButton } from "./ActionButton-1e9c5f7a.js";
import { B as ButtonGroup } from "./ButtonGroup-b585a5ef.js";
const saveStateToDBTimerIdAtom = Recoil_index_8({
  key: "saveStateToDBTimerIdAtom",
  default: null
});
const currentPageAtom = Recoil_index_8({
  key: "currentPageAtom",
  default: 0
});
const activityAttemptNumberSetUpAtom = Recoil_index_8({
  key: "activityAttemptNumberSetUpAtom",
  default: 0
});
const itemWeightsAtom = Recoil_index_8({
  key: "itemWeightsAtom",
  default: []
});
function ActivityViewer(props) {
  var _a;
  const toast = useToast();
  const setPageToolView = Recoil_index_24(pageToolViewAtom);
  const [errMsg, setErrMsg] = reactExports.useState(null);
  const [
    {
      cidFromProps,
      activityDefinitionFromProps,
      attemptNumber,
      requestedVariantIndex
    },
    setInfoFromProps
  ] = reactExports.useState({
    cidFromProps: null,
    activityDefinitionFromProps: null,
    attemptNumber: null,
    requestedVariantIndex: null
  });
  const attemptNumberRef = reactExports.useRef(null);
  attemptNumberRef.current = attemptNumber;
  const [cid, setCid] = reactExports.useState(null);
  const cidRef = reactExports.useRef(null);
  cidRef.current = cid;
  const activityDefinitionDoenetML = reactExports.useRef(null);
  const [activityDefinition, setActivityDefinition] = reactExports.useState(null);
  const [variantIndex, setVariantIndex] = reactExports.useState(null);
  const variantIndexRef = reactExports.useRef(null);
  variantIndexRef.current = variantIndex;
  const [stage, setStage] = reactExports.useState("initial");
  const stageRef = reactExports.useRef(null);
  stageRef.current = stage;
  const settingUp = reactExports.useRef(true);
  const [activityContentChanged, setActivityContentChanged] = reactExports.useState(false);
  const [order, setOrder] = reactExports.useState(null);
  const [flags, setFlags] = reactExports.useState(props.flags);
  const [currentPage, setCurrentPage] = reactExports.useState(0);
  const setRecoilCurrentPage = Recoil_index_24(currentPageAtom);
  const currentPageRef = reactExports.useRef(currentPage);
  currentPageRef.current = currentPage;
  const setActivityAttemptNumberSetUp = Recoil_index_24(
    activityAttemptNumberSetUpAtom
  );
  const [nPages, setNPages] = reactExports.useState(0);
  const [variantsByPage, setVariantsByPage] = reactExports.useState(null);
  const [itemWeights, setItemWeights] = Recoil_index_22(itemWeightsAtom);
  const previousComponentTypeCountsByPage = reactExports.useRef([]);
  const serverSaveId = reactExports.useRef(null);
  const activityStateToBeSavedToDatabase = reactExports.useRef(null);
  const changesToBeSaved = reactExports.useRef(false);
  const setSaveStateToDBTimerId = Recoil_index_24(saveStateToDBTimerIdAtom);
  const [scrollableContainer, setScrollableContainer] = Recoil_index_22(
    scrollableContainerAtom
  );
  const activityInfo = reactExports.useRef(null);
  const activityInfoString = reactExports.useRef(null);
  const pageAtPreviousSave = reactExports.useRef(null);
  const pageAtPreviousSaveToDatabase = reactExports.useRef(null);
  const [pageInfo, setPageInfo] = reactExports.useState({
    pageIsVisible: [],
    pageIsActive: [],
    pageCoreWorker: [],
    waitingForPagesCore: null
  });
  const [renderedPages, setRenderedPages] = reactExports.useState([]);
  const allPagesRendered = reactExports.useRef(false);
  const nodeRef = reactExports.useRef(null);
  const ignoreNextScroll = reactExports.useRef(false);
  const stillNeedToScrollTo = reactExports.useRef(null);
  let location = useLocation();
  let hash = location.hash;
  const previousLocations = reactExports.useRef({});
  const currentLocationKey = reactExports.useRef(null);
  const viewerWasUnmounted = reactExports.useRef(false);
  const [finishAssessmentMessageOpen, setFinishAssessmentMessageOpen] = reactExports.useState(false);
  const [processingSubmitAll, setProcessingSubmitAll] = reactExports.useState(false);
  let navigate = useNavigate();
  reactExports.useEffect(() => {
    return () => {
      saveState({ overrideThrottle: true });
      viewerWasUnmounted.current = true;
    };
  }, []);
  reactExports.useEffect(() => {
    let newFlags = { ...props.flags };
    if (props.userId) {
      newFlags.allowLocalState = false;
      newFlags.allowSaveState = false;
    } else if (newFlags.allowSaveState) {
      newFlags.allowLoadState = true;
    }
    setFlags(newFlags);
  }, [props.userId, props.flags]);
  reactExports.useEffect(() => {
    window.returnActivityData = function() {
      return {
        activityDefinition,
        requestedVariantIndex,
        variantIndex,
        cid,
        order,
        currentPage,
        nPages,
        variantsByPage,
        itemWeights
      };
    };
  }, [
    activityDefinition,
    requestedVariantIndex,
    variantIndex,
    cid,
    order,
    currentPage,
    nPages,
    variantsByPage,
    itemWeights
  ]);
  reactExports.useEffect(() => {
    if (nodeRef.current) {
      let newScrollableContainer = nodeRef.current.parentNode.id === "mainPanel" ? nodeRef.current.parentNode : window;
      setScrollableContainer(newScrollableContainer);
      if (!props.paginate && nPages > 1) {
        newScrollableContainer.addEventListener("scroll", (event) => {
          if (ignoreNextScroll.current) {
            ignoreNextScroll.current = false;
          } else {
            let topPage;
            for (let ind = 0; ind < nPages - 1; ind++) {
              let thePage = document.getElementById(`page${ind + 1}`);
              if (thePage) {
                let { bottom } = thePage.getBoundingClientRect();
                if (bottom < 50) {
                  topPage = ind + 2;
                } else if (!topPage) {
                  topPage = 1;
                }
              }
            }
            if (topPage && topPage !== currentPageRef.current) {
              setCurrentPage(topPage);
              setRecoilCurrentPage(topPage);
            }
          }
        });
      }
    }
  }, [nodeRef.current, nPages]);
  reactExports.useEffect(() => {
    var _a2;
    (_a2 = props.pageChangedCallback) == null ? void 0 : _a2.call(props, currentPage);
  }, [currentPage]);
  reactExports.useEffect(() => {
    if (hash && nPages) {
      let match = hash.match(/^#page(\d+)/);
      if (match) {
        let newPage = Math.max(1, Math.min(nPages, match[1]));
        if (newPage !== currentPage) {
          setCurrentPage(newPage);
          setRecoilCurrentPage(newPage);
        }
      }
    }
  }, [hash, nPages]);
  reactExports.useEffect(() => {
    var _a2, _b;
    if (currentPage > 0 && nPages > 1) {
      let hashPage = Number((_a2 = hash == null ? void 0 : hash.match(/^#page(\d+)/)) == null ? void 0 : _a2[1]);
      if (hashPage !== currentPage) {
        let pageAnchor = `#page${currentPage}`;
        let navigateAttrs = { replace: true };
        if (!props.paginate) {
          navigateAttrs.state = { doNotScroll: true };
        }
        navigate(location.search + pageAnchor, navigateAttrs);
      }
      if (stillNeedToScrollTo.current) {
        (_b = document.getElementById(stillNeedToScrollTo.current)) == null ? void 0 : _b.scrollIntoView();
        stillNeedToScrollTo.current = null;
      }
    }
  }, [currentPage, nPages]);
  reactExports.useEffect(() => {
    var _a2;
    if (allPagesRendered.current && !props.paginate && (hash == null ? void 0 : hash.match(/^#page(\d+)$/))) {
      ignoreNextScroll.current = true;
      (_a2 = document.getElementById(hash.slice(1))) == null ? void 0 : _a2.scrollIntoView();
    }
  }, [allPagesRendered.current]);
  reactExports.useEffect(() => {
    var _a2, _b, _c, _d, _e;
    let foundNewInPrevious = false;
    if (currentLocationKey.current !== location.key) {
      if (((_a2 = location.state) == null ? void 0 : _a2.previousScrollPosition) !== void 0 && currentLocationKey.current) {
        previousLocations.current[currentLocationKey.current].lastScrollPosition = location.state.previousScrollPosition;
      }
      if (previousLocations.current[location.key]) {
        foundNewInPrevious = true;
        if (((_b = previousLocations.current[location.key]) == null ? void 0 : _b.lastScrollPosition) !== void 0) {
          scrollableContainer.scroll({
            top: previousLocations.current[location.key].lastScrollPosition
          });
        }
      }
      previousLocations.current[location.key] = { ...location };
      currentLocationKey.current = location.key;
    }
    stillNeedToScrollTo.current = null;
    if (!((_c = location.state) == null ? void 0 : _c.doNotScroll) && (location.key === "default" || !foundNewInPrevious)) {
      let scrollTo = hash.slice(1);
      if (props.paginate && hash.match(/^#page(\d+)$/)) {
        scrollTo = "activityTop";
      }
      if (props.paginate && Number((_d = hash.match(/^#page(\d+)/)) == null ? void 0 : _d[1]) !== currentPage) {
        stillNeedToScrollTo.current = scrollTo;
      } else {
        (_e = document.getElementById(scrollTo)) == null ? void 0 : _e.scrollIntoView();
      }
    }
  }, [location]);
  const getValueOfTimeoutWithoutARefresh = Recoil_index_31(
    ({ snapshot }) => async () => {
      return await snapshot.getPromise(saveStateToDBTimerIdAtom);
    },
    [saveStateToDBTimerIdAtom]
  );
  function resetActivity({ changedOnDevice, newCid, newAttemptNumber }) {
    console.log("resetActivity", changedOnDevice, newCid, newAttemptNumber);
    if (newAttemptNumber !== attemptNumber) {
      if (props.updateAttemptNumber) {
        toast(
          `Reverted activity as attempt number changed on other device`,
          toastType.ERROR
        );
        props.updateAttemptNumber(newAttemptNumber);
      } else {
        if (props.setIsInErrorState) {
          props.setIsInErrorState(true);
        }
        setErrMsg(
          "how to reset attempt number when not given updateAttemptNumber function?"
        );
      }
    } else if (newCid !== cid) {
      if (props.setIsInErrorState) {
        props.setIsInErrorState(true);
      }
      setErrMsg("Content changed unexpectedly!");
    } else
      ;
  }
  function calculateCidDefinition() {
    if (activityDefinitionFromProps) {
      if (cidFromProps) {
        cidFromText(JSON.stringify(activityDefinitionFromProps)).then(
          (calcCid) => {
            if (calcCid === cidFromProps) {
              setCid(cidFromProps);
              activityDefinitionDoenetML.current = activityDefinitionFromProps;
              let result = parseActivityDefinition(activityDefinitionFromProps);
              if (result.success) {
                setActivityDefinition(result.activityJSON);
                setStage("continue");
              } else {
                if (props.setIsInErrorState) {
                  props.setIsInErrorState(true);
                }
                setErrMsg(result.message);
              }
            } else {
              if (props.setIsInErrorState) {
                props.setIsInErrorState(true);
              }
              setErrMsg(
                `activity definition did not match specified cid: ${cidFromProps}`
              );
            }
          }
        );
      } else {
        cidFromText(JSON.stringify(activityDefinitionFromProps)).then((cid2) => {
          setCid(cid2);
          activityDefinitionDoenetML.current = activityDefinitionFromProps;
          let result = parseActivityDefinition(activityDefinitionFromProps);
          if (result.success) {
            setActivityDefinition(result.activityJSON);
            setStage("continue");
          } else {
            if (props.setIsInErrorState) {
              props.setIsInErrorState(true);
            }
            setErrMsg(result.message);
          }
        });
      }
    } else {
      retrieveTextFileForCid(cidFromProps, "doenet").then((retrievedActivityDefinition) => {
        setCid(cidFromProps);
        activityDefinitionDoenetML.current = retrievedActivityDefinition;
        let result = parseActivityDefinition(retrievedActivityDefinition);
        if (result.success) {
          setActivityDefinition(result.activityJSON);
          setStage("continue");
        } else {
          if (props.setIsInErrorState) {
            props.setIsInErrorState(true);
          }
          setErrMsg(result.message);
        }
      }).catch((e) => {
        if (props.setIsInErrorState) {
          props.setIsInErrorState(true);
        }
        setErrMsg(`activity definition not found for cid: ${cidFromProps}`);
      });
    }
  }
  async function loadState() {
    let loadedState = false;
    let newItemWeights;
    let newVariantIndex;
    let loadedFromInitialState = false;
    if (props.flags.allowLocalState) {
      let localInfo;
      try {
        localInfo = await get(`${props.doenetId}|${attemptNumber}|${cid}`);
      } catch (e) {
      }
      if (localInfo) {
        if (props.flags.allowSaveState) {
          let result = await saveLoadedLocalStateToDatabase(localInfo);
          if (result.changedOnDevice) {
            if (Number(result.newAttemptNumber) !== attemptNumber) {
              resetActivity({
                changedOnDevice: result.changedOnDevice,
                newCid: result.newCid,
                newAttemptNumber: Number(result.newAttemptNumber)
              });
              return;
            } else if (result.newCid !== cid) {
              if (props.setIsInErrorState) {
                props.setIsInErrorState(true);
              }
              setErrMsg(`content changed unexpectedly!`);
            }
            localInfo = result.newLocalInfo;
          }
        }
        serverSaveId.current = localInfo.saveId;
        if (!(hash == null ? void 0 : hash.match(/^#page(\d+)/))) {
          setCurrentPage(localInfo.activityState.currentPage);
          setRecoilCurrentPage(localInfo.activityState.currentPage);
        }
        let newActivityInfo = localInfo.activityInfo;
        newVariantIndex = localInfo.variantIndex;
        setVariantIndex(newVariantIndex);
        setNPages(newActivityInfo.orderWithCids.length);
        setOrder(newActivityInfo.orderWithCids);
        setVariantsByPage(newActivityInfo.variantsByPage);
        setItemWeights(newActivityInfo.itemWeights);
        newItemWeights = newActivityInfo.itemWeights;
        previousComponentTypeCountsByPage.current = newActivityInfo.previousComponentTypeCounts || [];
        activityInfo.current = newActivityInfo;
        activityInfoString.current = JSON.stringify(activityInfo.current);
        loadedState = true;
      }
    }
    if (!loadedState) {
      const payload = {
        params: {
          cid,
          attemptNumber,
          doenetId: props.doenetId,
          userId: props.userId,
          allowLoadState: props.flags.allowLoadState
        }
      };
      let resp;
      try {
        resp = await axios.get("/api/loadActivityState.php", payload);
        if (!resp.data.success) {
          if (props.flags.allowLoadState) {
            if (props.setIsInErrorState) {
              props.setIsInErrorState(true);
            }
            setErrMsg(`Error loading activity state: ${resp.data.message}`);
            return;
          } else {
          }
        }
      } catch (e) {
        if (props.flags.allowLoadState) {
          if (props.setIsInErrorState) {
            props.setIsInErrorState(true);
          }
          setErrMsg(`Error loading activity state: ${e.message}`);
          return;
        }
      }
      if (resp.data.loadedState) {
        let newActivityInfo = JSON.parse(resp.data.activityInfo);
        let activityState = JSON.parse(resp.data.activityState);
        if (!(hash == null ? void 0 : hash.match(/^#page(\d+)/))) {
          setCurrentPage(activityState.currentPage);
          setRecoilCurrentPage(activityState.currentPage);
        }
        newVariantIndex = resp.data.variantIndex;
        setVariantIndex(newVariantIndex);
        setNPages(newActivityInfo.orderWithCids.length);
        setOrder(newActivityInfo.orderWithCids);
        setVariantsByPage(newActivityInfo.variantsByPage);
        setItemWeights(newActivityInfo.itemWeights);
        newItemWeights = newActivityInfo.itemWeights;
        previousComponentTypeCountsByPage.current = newActivityInfo.previousComponentTypeCounts || [];
        activityInfo.current = newActivityInfo;
        activityInfoString.current = JSON.stringify(activityInfo.current);
      } else {
        loadedFromInitialState = true;
        if (!(hash == null ? void 0 : hash.match(/^#page(\d+)/))) {
          setCurrentPage(1);
          setRecoilCurrentPage(1);
        }
        let results;
        results = await calculateOrderAndVariants({
          activityDefinition,
          requestedVariantIndex
        });
        if (!results.success) {
          if (props.setIsInErrorState) {
            props.setIsInErrorState(true);
          }
          setErrMsg(`Error initializing activity state: ${results.message}`);
          return;
        }
        newVariantIndex = results.variantIndex;
        setVariantIndex(newVariantIndex);
        setNPages(results.order.length);
        setOrder(results.order);
        setVariantsByPage(results.variantsByPage);
        setItemWeights(results.itemWeights);
        newItemWeights = results.itemWeights;
        previousComponentTypeCountsByPage.current = results.previousComponentTypeCounts || [];
        activityInfo.current = results.activityInfo;
        activityInfoString.current = JSON.stringify(activityInfo.current);
      }
    }
    return { newItemWeights, newVariantIndex, loadedFromInitialState };
  }
  async function saveLoadedLocalStateToDatabase(localInfo) {
    let serverSaveId2 = await get(
      `${props.doenetId}|${attemptNumber}|${cid}|ServerSaveId`
    );
    let activityStateToBeSavedToDatabase2 = {
      cid,
      activityInfo: JSON.stringify(localInfo.activityInfo),
      activityState: JSON.stringify(localInfo.activityState),
      variantIndex: localInfo.variantIndex,
      attemptNumber,
      doenetId: props.doenetId,
      saveId: localInfo.saveId,
      serverSaveId: serverSaveId2,
      updateDataOnContentChange: props.updateDataOnContentChange
    };
    let resp;
    try {
      console.log(
        "first one saveActivityState activityStateToBeSavedToDatabase",
        activityStateToBeSavedToDatabase2
      );
      resp = await axios.post(
        "/api/saveActivityState.php",
        activityStateToBeSavedToDatabase2
      );
    } catch (e) {
      return { localInfo, cid, attemptNumber };
    }
    if (resp.data.cidChanged === true) {
      props.cidChangedCallback();
    }
    let data = resp.data;
    if (!data.success) {
      return { localInfo, cid, attemptNumber };
    }
    await set(
      `${props.doenetId}|${attemptNumber}|${cid}|ServerSaveId`,
      data.saveId
    );
    if (data.stateOverwritten) {
      let newLocalInfo = {
        activityState: JSON.parse(data.activityState),
        activityInfo: JSON.parse(data.activityInfo),
        saveId: data.saveId,
        variantIndex: data.variantIndex
      };
      await set(
        `${props.doenetId}|${data.attemptNumber}|${data.cid}`,
        newLocalInfo
      );
      return {
        changedOnDevice: data.device,
        newLocalInfo,
        newCid: data.cid,
        newAttemptNumber: data.attemptNumber
      };
    }
    return { localInfo, cid, attemptNumber };
  }
  async function saveState({
    overrideThrottle = false,
    overrideStage = false
  } = {}) {
    if (!props.flags.allowSaveState && !props.flags.allowLocalState) {
      return;
    }
    if (stageRef.current !== "saving" && !overrideStage || !overrideThrottle && currentPageRef.current === pageAtPreviousSave.current || overrideThrottle && currentPageRef.current === pageAtPreviousSaveToDatabase.current) {
      return;
    }
    pageAtPreviousSave.current = currentPageRef.current;
    let saveId = nanoid();
    if (props.flags.allowLocalState) {
      await set(
        `${props.doenetId}|${attemptNumberRef.current}|${cidRef.current}`,
        {
          activityInfo: activityInfo.current,
          activityState: { currentPage: currentPageRef.current },
          saveId,
          variantIndex: variantIndexRef.current
        }
      );
    }
    if (!props.flags.allowSaveState) {
      return;
    }
    activityStateToBeSavedToDatabase.current = {
      cid: cidRef.current,
      activityInfo: activityInfoString.current,
      activityState: JSON.stringify({ currentPage: currentPageRef.current }),
      variantIndex: variantIndexRef.current,
      attemptNumber: attemptNumberRef.current,
      doenetId: props.doenetId,
      saveId,
      serverSaveId: serverSaveId.current,
      updateDataOnContentChange: props.updateDataOnContentChange
    };
    changesToBeSaved.current = true;
    await saveChangesToDatabase(overrideThrottle);
  }
  async function saveChangesToDatabase(overrideThrottle) {
    if (!changesToBeSaved.current) {
      return;
    }
    let oldTimeoutId = await getValueOfTimeoutWithoutARefresh();
    if (oldTimeoutId !== null) {
      if (overrideThrottle) {
        clearTimeout(oldTimeoutId);
      } else {
        return;
      }
    }
    changesToBeSaved.current = false;
    pageAtPreviousSaveToDatabase.current = currentPageRef.current;
    let newTimeoutId = setTimeout(() => {
      setSaveStateToDBTimerId(null);
      saveChangesToDatabase();
    }, 6e4);
    setSaveStateToDBTimerId(newTimeoutId);
    let resp;
    try {
      console.log(
        "activity state params",
        activityStateToBeSavedToDatabase.current
      );
      resp = await axios.post(
        "/api/saveActivityState.php",
        activityStateToBeSavedToDatabase.current
      );
    } catch (e) {
      console.log(
        `sending toast: Error synchronizing data.  Changes not saved to the server.`
      );
      toast(
        "Error synchronizing data.  Changes not saved to the server.",
        toastType.ERROR
      );
      return;
    }
    console.log("result from saving activity to database:", resp.data);
    if (resp.status === null) {
      console.log(
        `sending toast: Error synchronizing data.  Changes not saved to the server.  Are you connected to the internet?`
      );
      toast(
        "Error synchronizing data.  Changes not saved to the server.  Are you connected to the internet?",
        toastType.ERROR
      );
      return;
    }
    let data = resp.data;
    if (!data.success) {
      console.log(`sending toast: ${data.message}`);
      toast(data.message, toastType.ERROR);
      return;
    }
    serverSaveId.current = data.saveId;
    if (props.flags.allowLocalState) {
      await set(
        `${props.doenetId}|${attemptNumberRef.current}|${cidRef.current}|ServerSaveId`,
        data.saveId
      );
    }
    if (data.stateOverwritten) {
      if (attemptNumberRef.current !== Number(data.attemptNumber)) {
        resetActivity({
          changedOnDevice: data.device,
          newCid: data.cid,
          newAttemptNumber: Number(data.attemptNumber)
        });
      } else if (cidRef.current !== data.cid) {
        if (props.setIsInErrorState) {
          props.setIsInErrorState(true);
        }
        setErrMsg("Content changed unexpectedly!");
        return;
      }
    }
  }
  async function initializeUserAssignmentTables(newItemWeights) {
    if (flags.allowSaveSubmissions) {
      try {
        let resp = await axios.post("/api/initAssignmentAttempt.php", {
          doenetId: props.doenetId,
          weights: newItemWeights,
          attemptNumber
        });
        if (resp.status === null) {
          toast(
            `Could not initialize assignment tables.  Are you connected to the internet?`,
            toastType.ERROR
          );
        } else if (!resp.data.success) {
          toast(
            `Could not initialize assignment tables: ${resp.data.message}.`,
            toastType.ERROR
          );
        }
      } catch (e) {
        toast(
          `Could not initialize assignment tables: ${e.message}.`,
          toastType.ERROR
        );
      }
    }
  }
  async function receivedSaveFromPage() {
    if (stage !== "saving" && !settingUp.current) {
      setStage("saving");
    }
    try {
      let resp = await axios.get("/api/checkForChangedAssignment.php", {
        params: {
          currentCid: cid,
          doenetId: props.doenetId
        }
      });
      if (resp.data.cidChanged === true) {
        props.cidChangedCallback();
      }
    } catch (e) {
    }
    if (viewerWasUnmounted.current) {
      await saveState({ overrideThrottle: true, overrideStage: true });
    }
  }
  function clickNext() {
    setCurrentPage((was) => Math.min(nPages, was + 1));
    setRecoilCurrentPage((was) => Math.min(nPages, was + 1));
    let event = {
      verb: "interacted",
      object: { objectType: "button", objectname: "next page button" },
      result: { newPage: Math.min(nPages, currentPage + 1) },
      context: { oldPage: currentPage }
    };
    recordEvent(event);
  }
  function clickPrevious() {
    setCurrentPage((was) => Math.max(1, was - 1));
    setRecoilCurrentPage((was) => Math.max(1, was - 1));
    let event = {
      verb: "interacted",
      object: { objectType: "button", objectname: "previous page button" },
      result: { newPage: Math.max(1, currentPage - 1) },
      context: { oldPage: currentPage }
    };
    recordEvent(event);
  }
  function recordEvent(event) {
    if (!flags.allowSaveEvents) {
      return;
    }
    const payload = {
      doenetId: props.doenetId,
      activityCid: cid,
      attemptNumber,
      activityVariantIndex: variantIndex,
      timestamp: (/* @__PURE__ */ new Date()).toISOString().slice(0, 19).replace("T", " "),
      version: "0.1.1",
      verb: event.verb,
      object: JSON.stringify(event.object),
      result: JSON.stringify(event.result),
      context: JSON.stringify(event.context)
    };
    axios.post("/api/recordEvent.php", payload).then((resp) => {
    }).catch((e) => {
      console.error(`Error saving event: ${e.message}`);
    });
  }
  function onChangeVisibility(isVisible, pageInd) {
    if (!props.paginate) {
      setPageInfo((was) => {
        let newObj = { ...was };
        let newVisible = [...newObj.pageIsVisible];
        newVisible[pageInd] = isVisible;
        newObj.pageIsVisible = newVisible;
        if (!isVisible && newObj.pageIsActive[pageInd]) {
          let newActive = [...newObj.pageIsActive];
          newActive[pageInd] = false;
          newObj.pageIsActive = newActive;
          if (newObj.waitingForPagesCore === pageInd) {
            newObj.waitingForPagesCore = null;
          }
        }
        return newObj;
      });
    }
  }
  function coreCreatedCallback(pageInd, coreWorker) {
    setPageInfo((was) => {
      let newObj = { ...was };
      if (newObj.waitingForPagesCore === pageInd) {
        newObj.waitingForPagesCore = null;
      }
      let newPageCoreWorker = [...newObj.pageCoreWorker];
      newPageCoreWorker[pageInd] = coreWorker;
      newObj.pageCoreWorker = newPageCoreWorker;
      return newObj;
    });
  }
  function pageRenderedCallback(pageInd) {
    let newRenderedPages;
    setRenderedPages((was) => {
      newRenderedPages = [...was];
      newRenderedPages[pageInd] = true;
      return newRenderedPages;
    });
    if ((newRenderedPages == null ? void 0 : newRenderedPages.length) === nPages && newRenderedPages.every((x) => x)) {
      allPagesRendered.current = true;
    }
  }
  async function submitAllAndFinishAssessment() {
    setProcessingSubmitAll(true);
    let terminatePromises = [];
    for (let coreWorker of pageInfo.pageCoreWorker) {
      if (coreWorker) {
        let actionId = nanoid();
        let resolveTerminatePromise;
        terminatePromises.push(
          new Promise((resolve, reject) => {
            resolveTerminatePromise = resolve;
          })
        );
        coreWorker.onmessage = function(e) {
          if (e.data.messageType === "resolveAction" && e.data.args.actionId === actionId) {
            coreWorker.postMessage({
              messageType: "terminate"
            });
          } else if (e.data.messageType === "terminated") {
            resolveTerminatePromise();
          }
        };
        coreWorker.postMessage({
          messageType: "submitAllAnswers",
          args: { actionId }
        });
      }
    }
    await Promise.all(terminatePromises);
    await saveState({ overrideThrottle: true });
    if (!activityInfo.canViewAfterCompleted)
      ;
    let resp = await axios.get("/api/saveCompleted.php", {
      params: { doenetId: props.doenetId, isCompleted: true }
    });
    if (resp.data.success) {
      props == null ? void 0 : props.setActivityAsCompleted();
      setPageToolView((prev) => {
        return {
          page: prev.page,
          tool: "endExam",
          view: "",
          params: {
            doenetId: props.doenetId,
            attemptNumber,
            itemWeights: itemWeights.join(",")
          }
        };
      });
    }
  }
  if (errMsg !== null) {
    let errorIcon = /* @__PURE__ */ jsx("span", { style: { fontSize: "1em", color: "#C1292E" }, children: /* @__PURE__ */ jsx(FontAwesomeIcon, { icon: faExclamationCircle }) });
    return /* @__PURE__ */ jsxs("div", { style: { fontSize: "1.3em", marginLeft: "20px", marginTop: "20px" }, children: [
      errorIcon,
      " ",
      errMsg
    ] });
  }
  if (pageInfo.waitingForPagesCore === null) {
    if (currentPage) {
      for (let pageInd of [currentPage - 1, ...Array(nPages).keys()]) {
        let isVisible = pageInfo.pageIsVisible[pageInd];
        if ((isVisible || currentPage === pageInd + 1) && !pageInfo.pageIsActive[pageInd]) {
          let waitingAgain = !pageInfo.pageCoreWorker[pageInd];
          setPageInfo((was) => {
            let newObj = { ...was };
            let newActive = [...newObj.pageIsActive];
            newActive[pageInd] = true;
            newObj.pageIsActive = newActive;
            if (!newObj.pageCoreWorker[pageInd]) {
              newObj.waitingForPagesCore = pageInd;
            }
            return newObj;
          });
          if (waitingAgain) {
            break;
          }
        }
      }
    }
  }
  let propAttemptNumber = props.attemptNumber;
  if (propAttemptNumber === void 0) {
    propAttemptNumber = 1;
  }
  let adjustedRequestedVariantIndex = props.requestedVariantIndex;
  if (adjustedRequestedVariantIndex === void 0) {
    adjustedRequestedVariantIndex = propAttemptNumber;
  }
  if (activityDefinitionFromProps !== props.activityDefinition || cidFromProps !== props.cid || propAttemptNumber !== attemptNumber || requestedVariantIndex !== adjustedRequestedVariantIndex) {
    settingUp.current = true;
    setInfoFromProps({
      activityDefinitionFromProps: props.activityDefinition,
      cidFromProps: props.cid,
      attemptNumber: propAttemptNumber,
      requestedVariantIndex: adjustedRequestedVariantIndex
    });
    setStage("recalcParams");
    setActivityContentChanged(true);
    return null;
  }
  if (stage === "wait") {
    return null;
  }
  if (stage === "recalcParams") {
    setStage("wait");
    calculateCidDefinition();
    return null;
  }
  if (((_a = activityDefinition == null ? void 0 : activityDefinition.type) == null ? void 0 : _a.toLowerCase()) !== "activity") {
    if (props.setIsInErrorState) {
      props.setIsInErrorState(true);
    }
    setErrMsg("Invalid activity definition: type is not activity");
    return null;
  }
  if (activityContentChanged) {
    setActivityContentChanged(false);
    setActivityAttemptNumberSetUp(0);
    previousComponentTypeCountsByPage.current = [];
    setStage("wait");
    loadState().then(async (results) => {
      var _a2;
      if (results) {
        if (results.loadedFromInitialState) {
          await initializeUserAssignmentTables(results.newItemWeights);
        }
        setStage("continue");
        setActivityAttemptNumberSetUp(attemptNumber);
        (_a2 = props.generatedVariantCallback) == null ? void 0 : _a2.call(
          props,
          results.newVariantIndex,
          activityInfo.current.numberOfVariants
        );
      }
      settingUp.current = false;
    });
    return null;
  }
  saveState();
  let title = /* @__PURE__ */ jsx("h1", { children: activityDefinition.title });
  let pages = [];
  if (order && variantsByPage) {
    for (let [ind, page] of order.entries()) {
      let thisPageIsActive = false;
      if (props.paginate) {
        if (ind === currentPage - 1) {
          thisPageIsActive = true;
        } else if (pageInfo.pageCoreWorker[currentPage - 1] && ind === currentPage) {
          thisPageIsActive = true;
        } else if (pageInfo.pageCoreWorker[currentPage - 1] && (currentPage === nPages || pageInfo.pageCoreWorker[currentPage]) && ind === currentPage - 2) {
          thisPageIsActive = true;
        }
      } else {
        thisPageIsActive = pageInfo.pageIsActive[ind];
      }
      let prefixForIds = nPages > 1 ? `page${ind + 1}` : "";
      let pageViewer = /* @__PURE__ */ jsx(
        PageViewer,
        {
          userId: props.userId,
          doenetId: props.doenetId,
          activityCid: cid,
          cid: page.cid,
          doenetML: page.doenetML,
          pageNumber: (ind + 1).toString(),
          previousComponentTypeCounts: previousComponentTypeCountsByPage.current[ind],
          pageIsActive: thisPageIsActive,
          pageIsCurrent: ind === currentPage - 1,
          itemNumber: ind + 1,
          attemptNumber,
          forceDisable: props.forceDisable,
          forceShowCorrectness: props.forceShowCorrectness,
          forceShowSolution: props.forceShowSolution,
          forceUnsuppressCheckwork: props.forceUnsuppressCheckwork,
          flags,
          activityVariantIndex: variantIndex,
          requestedVariantIndex: variantsByPage[ind],
          updateCreditAchievedCallback: props.updateCreditAchievedCallback,
          setIsInErrorState: props.setIsInErrorState,
          updateAttemptNumber: props.updateAttemptNumber,
          saveStateCallback: receivedSaveFromPage,
          updateDataOnContentChange: props.updateDataOnContentChange,
          coreCreatedCallback: (coreWorker) => coreCreatedCallback(ind, coreWorker),
          renderersInitializedCallback: () => pageRenderedCallback(ind),
          hideWhenNotCurrent: props.paginate,
          prefixForIds
        }
      );
      if (!props.paginate) {
        pageViewer = /* @__PURE__ */ jsx(
          VisibilitySensor,
          {
            partialVisibility: true,
            offset: { top: -200, bottom: -200 },
            requireContentsSize: false,
            onChange: (isVisible) => onChangeVisibility(isVisible, ind),
            children: /* @__PURE__ */ jsx("div", { children: pageViewer })
          }
        );
      }
      pages.push(
        /* @__PURE__ */ jsx("div", { id: `page${ind + 1}`, children: pageViewer }, `page${ind + 1}`)
      );
    }
  }
  let pageControlsTop = null;
  let pageControlsBottom = null;
  if (props.paginate && nPages > 1) {
    pageControlsTop = /* @__PURE__ */ jsxs("div", { style: { display: "flex", alignItems: "center", marginLeft: "5px" }, children: [
      /* @__PURE__ */ jsx(
        Button,
        {
          dataTest: "previous",
          disabled: currentPage === 1,
          onClick: clickPrevious,
          value: "Previous page"
        }
      ),
      /* @__PURE__ */ jsxs("p", { style: { margin: "5px" }, children: [
        " Page ",
        currentPage,
        " of ",
        nPages,
        " "
      ] }),
      /* @__PURE__ */ jsx(
        Button,
        {
          dataTest: "next",
          disabled: currentPage === nPages,
          onClick: clickNext,
          value: "Next page"
        }
      )
    ] });
    if (renderedPages[currentPage - 1]) {
      pageControlsBottom = /* @__PURE__ */ jsxs(
        "div",
        {
          style: { display: "flex", alignItems: "center", marginLeft: "5px" },
          children: [
            /* @__PURE__ */ jsx(
              Button,
              {
                dataTest: "previous-bottom",
                disabled: currentPage === 1,
                onClick: clickPrevious,
                value: "Previous page"
              }
            ),
            /* @__PURE__ */ jsxs("p", { style: { margin: "5px" }, children: [
              " Page ",
              currentPage,
              " of ",
              nPages,
              " "
            ] }),
            /* @__PURE__ */ jsx(
              Button,
              {
                dataTest: "next-bottom",
                disabled: currentPage === nPages,
                onClick: clickNext,
                value: "Next page"
              }
            )
          ]
        }
      );
    }
  }
  let finishAssessmentPrompt = null;
  if (props.showFinishButton) {
    if (finishAssessmentMessageOpen) {
      finishAssessmentPrompt = /* @__PURE__ */ jsxs(
        "div",
        {
          style: {
            marginLeft: "1px",
            marginRight: "5px",
            marginBottom: "5px",
            marginTop: "80px",
            border: "var(--mainBorder)",
            borderRadius: "var(--mainBorderRadius)",
            padding: "5px",
            display: "flex",
            flexFlow: "column wrap"
          },
          children: [
            /* @__PURE__ */ jsx(
              "div",
              {
                style: {
                  display: "flex",
                  justifyContent: "center",
                  padding: "5px"
                },
                children: "Are you sure you want to finish this assessment?"
              }
            ),
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
                      onClick: submitAllAndFinishAssessment,
                      dataTest: "ConfirmFinishAssessment",
                      value: "Yes",
                      disabled: processingSubmitAll
                    }
                  ),
                  /* @__PURE__ */ jsx(
                    Button,
                    {
                      onClick: () => setFinishAssessmentMessageOpen(false),
                      dataTest: "CancelFinishAssessment",
                      value: "No",
                      alert: true,
                      disabled: processingSubmitAll
                    }
                  )
                ] })
              }
            )
          ]
        }
      );
    } else {
      finishAssessmentPrompt = /* @__PURE__ */ jsx(
        "div",
        {
          style: {
            marginLeft: "1px",
            marginRight: "5px",
            marginBottom: "5px",
            marginTop: "80px"
          },
          children: /* @__PURE__ */ jsx(
            "div",
            {
              "data-test": "centerone",
              style: { display: "flex", justifyContent: "center" },
              children: /* @__PURE__ */ jsx("div", { style: { width: "240px" }, children: /* @__PURE__ */ jsx(
                ActionButton,
                {
                  onClick: () => setFinishAssessmentMessageOpen(true),
                  dataTest: "FinishAssessmentPrompt",
                  value: "Finish assessment"
                }
              ) })
            }
          )
        }
      );
    }
  }
  return /* @__PURE__ */ jsxs("div", { style: { paddingBottom: "50vh" }, id: "activityTop", ref: nodeRef, children: [
    pageControlsTop,
    title,
    pages,
    pageControlsBottom,
    finishAssessmentPrompt
  ] });
}
export {
  ActivityViewer as A,
  activityAttemptNumberSetUpAtom as a,
  currentPageAtom as c,
  itemWeightsAtom as i,
  saveStateToDBTimerIdAtom as s
};
