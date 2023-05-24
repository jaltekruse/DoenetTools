import { r as reactExports, s as styled, b as jsxs, j as jsx, t as Recoil_index_20, X as coursePermissionsAndSettings, o as Recoil_index_24, Y as mainPanelClickAtom, Z as selectedMenuPanelAtom, m as Recoil_index_22, p as pageToolViewAtom, $ as useTransition, a0 as Recoil_index_31, a1 as courseIdAtom, a2 as animated } from "./PageViewer-d914b069.js";
import { d as drivecardSelectedNodesAtom } from "./CourseToolHandler-1976a165.js";
import "./index-badc91d0.js";
import "./index-a634ad2f.js";
import "./index-72e7d0b2.js";
import "./index.esm-b50f3a4c.js";
import "./extends-d9a14db7.js";
import "./setPrototypeOf-be240aa9.js";
import "./inheritsLoose-000f9e77.js";
/* empty css               */import "./ButtonGroup-b585a5ef.js";
function debounce(func, wait, immediate) {
  var timeout, args, context, timestamp, result;
  if (null == wait)
    wait = 100;
  function later() {
    var last = Date.now() - timestamp;
    if (last < wait && last >= 0) {
      timeout = setTimeout(later, wait - last);
    } else {
      timeout = null;
      if (!immediate) {
        result = func.apply(context, args);
        context = args = null;
      }
    }
  }
  var debounced = function() {
    context = this;
    args = arguments;
    timestamp = Date.now();
    var callNow = immediate && !timeout;
    if (!timeout)
      timeout = setTimeout(later, wait);
    if (callNow) {
      result = func.apply(context, args);
      context = args = null;
    }
    return result;
  };
  debounced.clear = function() {
    if (timeout) {
      clearTimeout(timeout);
      timeout = null;
    }
  };
  debounced.flush = function() {
    if (timeout) {
      result = func.apply(context, args);
      context = args = null;
      clearTimeout(timeout);
      timeout = null;
    }
  };
  return debounced;
}
debounce.debounce = debounce;
var debounce_1 = debounce;
function useMeasure(_temp) {
  let {
    debounce: debounce2,
    scroll,
    polyfill,
    offsetSize
  } = _temp === void 0 ? {
    debounce: 0,
    scroll: false,
    offsetSize: false
  } : _temp;
  const ResizeObserver = polyfill || (typeof window === "undefined" ? class ResizeObserver {
  } : window.ResizeObserver);
  if (!ResizeObserver) {
    throw new Error("This browser does not support ResizeObserver out of the box. See: https://github.com/react-spring/react-use-measure/#resize-observer-polyfills");
  }
  const [bounds, set] = reactExports.useState({
    left: 0,
    top: 0,
    width: 0,
    height: 0,
    bottom: 0,
    right: 0,
    x: 0,
    y: 0
  });
  const state = reactExports.useRef({
    element: null,
    scrollContainers: null,
    resizeObserver: null,
    lastBounds: bounds
  });
  const scrollDebounce = debounce2 ? typeof debounce2 === "number" ? debounce2 : debounce2.scroll : null;
  const resizeDebounce = debounce2 ? typeof debounce2 === "number" ? debounce2 : debounce2.resize : null;
  const mounted = reactExports.useRef(false);
  reactExports.useEffect(() => {
    mounted.current = true;
    return () => void (mounted.current = false);
  });
  const [forceRefresh, resizeChange, scrollChange] = reactExports.useMemo(() => {
    const callback = () => {
      if (!state.current.element)
        return;
      const {
        left,
        top,
        width,
        height,
        bottom,
        right,
        x,
        y
      } = state.current.element.getBoundingClientRect();
      const size = {
        left,
        top,
        width,
        height,
        bottom,
        right,
        x,
        y
      };
      if (state.current.element instanceof HTMLElement && offsetSize) {
        size.height = state.current.element.offsetHeight;
        size.width = state.current.element.offsetWidth;
      }
      Object.freeze(size);
      if (mounted.current && !areBoundsEqual(state.current.lastBounds, size))
        set(state.current.lastBounds = size);
    };
    return [callback, resizeDebounce ? debounce_1(callback, resizeDebounce) : callback, scrollDebounce ? debounce_1(callback, scrollDebounce) : callback];
  }, [set, offsetSize, scrollDebounce, resizeDebounce]);
  function removeListeners() {
    if (state.current.scrollContainers) {
      state.current.scrollContainers.forEach((element) => element.removeEventListener("scroll", scrollChange, true));
      state.current.scrollContainers = null;
    }
    if (state.current.resizeObserver) {
      state.current.resizeObserver.disconnect();
      state.current.resizeObserver = null;
    }
  }
  function addListeners() {
    if (!state.current.element)
      return;
    state.current.resizeObserver = new ResizeObserver(scrollChange);
    state.current.resizeObserver.observe(state.current.element);
    if (scroll && state.current.scrollContainers) {
      state.current.scrollContainers.forEach((scrollContainer) => scrollContainer.addEventListener("scroll", scrollChange, {
        capture: true,
        passive: true
      }));
    }
  }
  const ref = (node) => {
    if (!node || node === state.current.element)
      return;
    removeListeners();
    state.current.element = node;
    state.current.scrollContainers = findScrollContainers(node);
    addListeners();
  };
  useOnWindowScroll(scrollChange, Boolean(scroll));
  useOnWindowResize(resizeChange);
  reactExports.useEffect(() => {
    removeListeners();
    addListeners();
  }, [scroll, scrollChange, resizeChange]);
  reactExports.useEffect(() => removeListeners, []);
  return [ref, bounds, forceRefresh];
}
function useOnWindowResize(onWindowResize) {
  reactExports.useEffect(() => {
    const cb = onWindowResize;
    window.addEventListener("resize", cb);
    return () => void window.removeEventListener("resize", cb);
  }, [onWindowResize]);
}
function useOnWindowScroll(onScroll, enabled) {
  reactExports.useEffect(() => {
    if (enabled) {
      const cb = onScroll;
      window.addEventListener("scroll", cb, {
        capture: true,
        passive: true
      });
      return () => void window.removeEventListener("scroll", cb, true);
    }
  }, [onScroll, enabled]);
}
function findScrollContainers(element) {
  const result = [];
  if (!element || element === document.body)
    return result;
  const {
    overflow,
    overflowX,
    overflowY
  } = window.getComputedStyle(element);
  if ([overflow, overflowX, overflowY].some((prop) => prop === "auto" || prop === "scroll"))
    result.push(element);
  return [...result, ...findScrollContainers(element.parentElement)];
}
const keys = ["x", "y", "top", "bottom", "left", "right", "width", "height"];
const areBoundsEqual = (a, b) => keys.every((key) => a[key] === b[key]);
const DriveCardContainer = styled.figure`
  margin: 0px;
  position: relative;
  background-size: cover;
  background-position: center center;
  width: ${(props) => props.width ? props.width : "100%"};
  height: ${(props) => props.height ? props.height : "100%"};
  overflow: hidden;
  font-size: 10px;
  line-height: 12px;
  border-radius: 5px;
  display: flex; // added
  flex-direction: column; // added
  justify-content: space-between;
  border: 2px solid var(--canvastext);
  cursor: pointer;
  &:focus {
    outline: 2px solid var(--canvastext);
    outline-offset: 2px;
  }
`;
const Image = styled.img`
  height: 100%;
  //width: 100%;
  color: var(--mainRed);
  // display: none;
  background-image: ${(props) => props.url == "url(/drive_pictures/none)" ? "none" : props.url};
  background-color: ${(props) => props.color == "none" ? "none" : "#" + props.color};
  background-size: cover;
  background-position: center;
`;
const Info = styled.figcaption`
  border-radius: 0px 0px 5px 5px;
  // position: absolute;
  border-top: 2px solid var(--canvastext);
  height: 65px;
  width: inherit;
  background: var(--canvas);
`;
const LabelContainer = styled.p`
  text-transform: capitalize;
  text-align: ${(props) => props.textAlign ? props.textAlign : "left"};
  line-height: ${(props) => props.lineHeight ? props.lineHeight : "normal"};
  margin: 7px;
  width: 100%;
  color: var(--canvastext);
  font-family: helvetica;
  font-size: 12px;
  overflow: hidden;
  white-space: ${(props) => props.whiteSpace ? props.whiteSpace : "nowrap"};
  text-overflow: ellipsis;
`;
const DriveCard = (props) => {
  let imageURL = `url(/drive_pictures/${props.image})`;
  return /* @__PURE__ */ jsxs(
    DriveCardContainer,
    {
      className: "driveCard",
      "aria-labelledby": "card-label role-label",
      url: imageURL,
      color: props.color,
      width: props.width,
      height: props.height,
      children: [
        /* @__PURE__ */ jsx(Image, { url: imageURL, color: props.color }),
        /* @__PURE__ */ jsxs(
          Info,
          {
            style: {
              //color: props.isSelected ? 'black' : '',
              backgroundColor: props.isSelected ? "var(--lightBlue)" : ""
            },
            children: [
              /* @__PURE__ */ jsx(
                LabelContainer,
                {
                  id: "card-label",
                  textAlign: props.textAlign,
                  lineHeight: props.lineHeight,
                  whiteSpace: props.whiteSpace,
                  style: {
                    color: props.isSelected ? "black" : "var(--canvastext)"
                  },
                  children: /* @__PURE__ */ jsx("b", { "data-test": "driveCardLabel", children: props.label })
                }
              ),
              /* @__PURE__ */ jsx(
                LabelContainer,
                {
                  id: "role-label",
                  style: { color: props.isSelected ? "black" : "var(--canvastext)" },
                  children: props.roleLabel
                }
              )
            ]
          }
        )
      ]
    }
  );
};
function useMedia(queries, values, defaultValue) {
  const match = () => values[queries.findIndex((q) => matchMedia(q).matches)] || defaultValue;
  const [value, set] = reactExports.useState(match);
  reactExports.useEffect(() => {
    const handler = () => set(match);
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, []);
  return value;
}
const driveCardsStyle = "";
const DriveCardFocus = styled.div`
  border-radius: 5px;
  padding-right: 4px;
  padding-bottom: 4px;
  &:focus {
    outline: 2px solid var(--canvastext);
    outline-offset: 3px;
  }
`;
function CourseCards(props) {
  const courses = Recoil_index_20(coursePermissionsAndSettings);
  const setMainPanelClear = Recoil_index_24(mainPanelClickAtom);
  reactExports.useEffect(() => {
    setMainPanelClear((was) => [
      ...was,
      { atom: selectedMenuPanelAtom, value: null },
      // Anyone know what this is?
      // Deselect the selected card when onBlur in the main panel
      // Remain selected when onBlur in the side panel
      { atom: drivecardSelectedNodesAtom, value: [] }
    ]);
    return setMainPanelClear((was) => [
      ...was,
      { atom: selectedMenuPanelAtom, value: null }
    ]);
  }, [setMainPanelClear]);
  if (courses.length == 0) {
    return null;
  }
  let filteredCourses = courses.filter((course) => course.canViewCourse != "0");
  return /* @__PURE__ */ jsx("div", { style: props.style, children: /* @__PURE__ */ jsx(
    CourseCardWrapper,
    {
      courses: filteredCourses,
      drivePathSyncKey: "main",
      types: ["course"],
      isOneDriveSelect: false
    }
  ) });
}
const CourseCardWrapper = (props) => {
  const { isOneDriveSelect, courses, drivePathSyncKey, types } = props;
  const [drivecardSelectedValue, setDrivecardSelection] = Recoil_index_22(
    drivecardSelectedNodesAtom
  );
  const setPageToolView = Recoil_index_24(pageToolViewAtom);
  const columns = useMedia(
    ["(min-width: 1500px)", "(min-width: 1000px)", "(min-width: 600px)"],
    [5, 4, 3],
    2
  );
  const [ref, { width }] = useMeasure();
  let showCards = [];
  if (types[0] === "course" && width !== 0) {
    showCards = courses;
  }
  const [heights, driveCardItems] = reactExports.useMemo(() => {
    let heights2 = new Array(columns).fill(0);
    let driveCardItems2 = showCards.map((child) => {
      const column = heights2.indexOf(Math.min(...heights2));
      const x = width / columns * column + 20;
      const y = (heights2[column] += 270) - 270;
      return {
        ...child,
        x,
        y,
        width: width / columns - 40,
        height: 230,
        drivePathSyncKey
      };
    });
    return [heights2, driveCardItems2];
  }, [columns, showCards, width]);
  const transitions = useTransition(driveCardItems, {
    key: (item) => item.courseId,
    from: ({ x, y, width: width2, height }) => ({ opacity: 0, x, y, width: width2, height }),
    // Drive cards fade onto the screen when the page loads
    enter: { opacity: 1 },
    update: ({ x, y, width: width2, height }) => ({ x, y, width: width2, height }),
    leave: { height: 0, opacity: 0 },
    config: { mass: 5, tension: 500, friction: 100 },
    trail: 25
  });
  const setSelectedCourseMenu = Recoil_index_31(({ set }) => () => {
    set(selectedMenuPanelAtom, "SelectedCourse");
  });
  let tempSetDeleteMe = Recoil_index_24(courseIdAtom);
  const handleSelect = (e, item) => {
    tempSetDeleteMe(item.courseId);
    setPageToolView({
      page: "course",
      tool: "dashboard",
      view: "",
      params: {
        courseId: item.courseId
      }
    });
  };
  const drivecardselection = (e, item) => {
    e.preventDefault();
    e.stopPropagation();
    if (isOneDriveSelect) {
      if (!e.shiftKey && !e.metaKey) {
        setDrivecardSelection(() => [item]);
        setSelectedCourseMenu();
      }
    } else {
      if (!e.shiftKey && !e.metaKey) {
        setDrivecardSelection(() => [item]);
        setSelectedCourseMenu();
      } else if (e.shiftKey && !e.metaKey) {
        setDrivecardSelection((old) => {
          if (old.length > 0) {
            let finalArray = [];
            let initalDriveId = "";
            if (old.length === 1) {
              initalDriveId = old[0].driveId;
            } else {
              finalArray = [...old];
              initalDriveId = old[old.length - 1].driveId;
            }
            let firstDriveId = driveCardItems.findIndex(
              (j) => j.driveId === item.driveId
            );
            let lastDriveId = driveCardItems.findIndex(
              (k) => k.driveId === initalDriveId
            );
            if (firstDriveId > lastDriveId) {
              let slicedArr = driveCardItems.slice(
                lastDriveId,
                firstDriveId + 1
              );
              let filteredArr = slicedArr.map((l) => l);
              finalArray = [...finalArray, ...filteredArr];
            } else {
              let slicedArr = driveCardItems.slice(
                firstDriveId,
                lastDriveId + 1
              );
              let filteredArr = slicedArr.map((m) => m);
              finalArray = [...finalArray, ...filteredArr];
            }
            let outputArray = finalArray.reduce(
              (uniue, index) => uniue.find((el) => el.driveId == index.driveId ? true : false) ? uniue : [...uniue, index],
              []
            );
            return outputArray;
          } else {
            return [...old, item];
          }
        });
      } else if (!e.shiftKey && e.metaKey) {
        setDrivecardSelection((old) => {
          let alreadyAvaliable = old.filter((i) => i.driveId === item.driveId);
          if (alreadyAvaliable.length > 0) {
            const arr = [];
            for (let i = 0; i < old.length; i++) {
              if (old[i].driveId != item.driveId) {
                arr.push(old[i]);
              }
            }
            return arr;
          } else {
            return [...old, item];
          }
        });
      }
    }
  };
  const getSelectedCard = (cardItem) => {
    if (drivecardSelectedValue.length == 0) {
      return false;
    }
    let availableCard = drivecardSelectedValue.filter(
      (i) => i.courseId === cardItem.courseId && i.drivePathSyncKey === drivePathSyncKey
    );
    return availableCard.length > 0 ? true : false;
  };
  return /* @__PURE__ */ jsx("div", { className: "drivecardContainer", id: "test", children: /* @__PURE__ */ jsx(
    "div",
    {
      ref,
      className: "driveCardList",
      style: { height: Math.max(...heights) },
      children: transitions((style, item, t, index) => {
        let isSelected = getSelectedCard(item);
        return /* @__PURE__ */ jsx(animated.div, { style, children: /* @__PURE__ */ jsx(
          DriveCardFocus,
          {
            role: "button",
            style: { height: "100%" },
            tabIndex: "0",
            onClick: (e) => {
              e.preventDefault();
              e.stopPropagation();
              drivecardselection(e, item);
            },
            onKeyDown: (e) => {
              if (e.key === "Enter") {
                if (isSelected) {
                  handleSelect(e, item);
                } else {
                  drivecardselection(e, item);
                }
              }
            },
            onDoubleClick: (e) => {
              e.preventDefault();
              e.stopPropagation();
              handleSelect(e, item);
            },
            children: /* @__PURE__ */ jsx(
              DriveCard,
              {
                image: item.image,
                color: item.color,
                label: item.label,
                isSelected,
                roleLabel: item.roleLabel
              }
            )
          }
        ) });
      })
    }
  ) });
};
export {
  CourseCards as default
};
