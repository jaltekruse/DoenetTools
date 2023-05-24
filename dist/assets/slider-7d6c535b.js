import { R as React, bx as useDoenetRenderer, r as reactExports, o as Recoil_index_24, bC as rendererState, b as jsxs, j as jsx, s as styled, v as betterReactMathjax, by as Context } from "./PageViewer-d914b069.js";
import { A as ActionButton } from "./ActionButton-1e9c5f7a.js";
import { A as ActionButtonGroup } from "./ActionButtonGroup-f7bafe40.js";
let round_to_decimals = (x, n) => Context.round_numbers_to_decimals(x, n).tree;
const SliderContainer = styled.div`
  width: fit-content;
  height: ${(props) => props.labeled && props.noTicked ? "60px" : props.labeled ? "80px" : props.noTicked ? "40px" : "60px"};
  margin-bottom: 12px;
  &:focus {
    outline: 0;
  }
`;
const SubContainer2 = styled.div`
  padding-top: 10px;
  height: 50px;
`;
const StyledSlider = styled.div`
  position: relative;
  border-radius: 3px;
  background-color: var(--canvastext);
  height: 2px;
  width: ${(props) => props.width};
  user-select: none;
`;
const StyledValueLabel = styled.p`
  display: inline;
  user-select: none;
`;
const StyledThumb = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 5px;
  position: relative;
  top: -4px;
  opacity: 1;
  background: ${(props) => props.disabled ? "var(--mainGray)" : "var(--mainBlue)"}; // var(--mainBlue)?
  cursor: pointer;
`;
const Tick = styled.div`
  position: absolute;
  border-left: 2px solid var(--mainGray);
  height: 10px;
  top: 1px;
  z-index: -2;
  left: ${(props) => props.x};
  user-select: none;
`;
const Label = styled.p`
  position: absolute;
  left: ${(props) => props.x};
  color: var(--canvastext);
  font-size: 12px;
  top: 1px;
  user-select: none;
`;
function generateNumericLabels(points, div_width, point_start_val, SVs) {
  let maxValueWidth;
  let maxAbs = Math.max(Math.abs(SVs.firstItem), Math.abs(SVs.lastItem));
  let magnitudeOfMaxAbs = Math.round(Math.log(maxAbs) / Math.log(10));
  if (maxAbs === 0) {
    magnitudeOfMaxAbs = 1;
  }
  let roundDecimals = 5 - magnitudeOfMaxAbs;
  if (points.length === 0) {
    let pointsToTest = [
      round_to_decimals(SVs.firstItem, roundDecimals),
      round_to_decimals(SVs.lastItem, roundDecimals)
    ];
    let numToTest = Math.min(SVs.numItems, 100);
    let dInd = Math.floor(SVs.numItems / numToTest);
    for (let i = 1; i < numToTest; i++) {
      pointsToTest.push(
        round_to_decimals(SVs.from + SVs.step * i * dInd, roundDecimals)
      );
    }
    maxValueWidth = findMaxValueWidth(pointsToTest);
  } else {
    let pointsToTest = points.map((x) => round_to_decimals(x, roundDecimals));
    maxValueWidth = findMaxValueWidth(pointsToTest);
  }
  const numItems = SVs.numItems;
  if (SVs.width.size > maxValueWidth * numItems) {
    if (points.length === 0) {
      let ticks = [];
      let labels = [];
      let maxAbs2 = Math.max(Math.abs(SVs.firstItem), Math.abs(SVs.lastItem));
      let magnitudeOfMaxAbs2 = Math.round(Math.log(maxAbs2) / Math.log(10));
      if (maxAbs2 === 0) {
        magnitudeOfMaxAbs2 = 1;
      }
      let roundDecimals2 = 5 - magnitudeOfMaxAbs2;
      for (let index = 0; index < SVs.numItems; index++) {
        let point = round_to_decimals(
          SVs.from + SVs.step * index,
          roundDecimals2
        );
        ticks.push(/* @__PURE__ */ jsx(Tick, { x: `${index * div_width}px` }, point));
        labels.push(
          /* @__PURE__ */ jsx(Label, { x: `${index * div_width - 3}px`, children: point }, point)
        );
      }
      return [ticks, labels];
    } else {
      return [
        points.map((point, index) => /* @__PURE__ */ jsx(Tick, { x: `${index * div_width}px` }, point)),
        points.map((point, index) => /* @__PURE__ */ jsx(Label, { x: `${index * div_width - 3}px`, children: point }, point))
      ];
    }
  } else if (SVs.width.size < maxValueWidth) {
    let pointsCopy = [...points];
    if (points.length === 0) {
      for (let index = 0; index < Math.min(3, SVs.numItems); index++) {
        pointsCopy.push(SVs.from + SVs.step * index);
      }
    }
    return [
      pointsCopy.map((point, index) => {
        if (index == 0) {
          return /* @__PURE__ */ jsx(Tick, { x: `${index * div_width}px` }, point);
        } else {
          return "";
        }
      }),
      pointsCopy.map((point, index) => {
        if (index == 0) {
          return /* @__PURE__ */ jsx(Label, { x: `${index * div_width - 3}px`, children: point }, point);
        } else if (index == 2) {
          return /* @__PURE__ */ jsx(Label, { x: `${index * div_width - 3}px`, children: "..." }, point);
        }
      })
    ];
  } else if (SVs.width.size < maxValueWidth * numItems) {
    let tickIndices, tickValues;
    if (points.length === 0) {
      let desiredNumberOfTicks = Math.floor(SVs.width.size / maxValueWidth);
      let tickSpan = SVs.lastItem - SVs.firstItem;
      let desiredDTick = tickSpan / (desiredNumberOfTicks + 1);
      let maxAbs2 = Math.max(Math.abs(SVs.firstItem), Math.abs(SVs.lastItem));
      let magnitudeOfMaxAbs2 = Math.round(Math.log(maxAbs2) / Math.log(10));
      let roundDecimalsForTickSpacing = 1 - magnitudeOfMaxAbs2;
      let dTick = Math.max(
        round_to_decimals(desiredDTick, roundDecimalsForTickSpacing),
        10 ** -roundDecimalsForTickSpacing
      );
      let numberOfTicks = Math.floor(tickSpan / dTick) + 1;
      let roundDecimals2 = 5 - magnitudeOfMaxAbs2;
      tickValues = [...Array(numberOfTicks).keys()].map(
        (i) => SVs.from + dTick * i
      );
      tickIndices = tickValues.map(
        (x) => Math.round((x - SVs.from) / SVs.step)
      );
      tickValues = tickValues.map((x) => round_to_decimals(x, roundDecimals2));
    } else {
      let desiredNumberOfTicks = Math.max(
        2,
        Math.floor(SVs.width.size / maxValueWidth)
      );
      let dIndex = Math.ceil(
        (SVs.numItems - 1) / (desiredNumberOfTicks - 1) - 1e-10
      );
      let numberOfTicks = Math.floor((SVs.numItems - 1) / dIndex + 1e-10) + 1;
      tickIndices = [...Array(numberOfTicks).keys()].map(
        (i) => Math.round(dIndex * i)
      );
      let maxAbs2 = Math.max(Math.abs(SVs.firstItem), Math.abs(SVs.lastItem));
      let magnitudeOfMaxAbs2 = Math.round(Math.log(maxAbs2) / Math.log(10));
      let roundDecimals2 = 2 - magnitudeOfMaxAbs2;
      tickValues = tickIndices.map(
        (x) => round_to_decimals(points[x], roundDecimals2)
      );
    }
    return [
      tickIndices.map((x, i) => /* @__PURE__ */ jsx(Tick, { x: `${x * div_width}px` }, tickValues[i])),
      tickIndices.map((x, i) => /* @__PURE__ */ jsx(Label, { x: `${x * div_width}px`, children: tickValues[i] }, tickValues[i]))
    ];
  } else {
    return [
      points.map((point) => /* @__PURE__ */ jsx(Tick, { x: `${(point - point_start_val) * div_width}px` }, point)),
      points.map((point) => /* @__PURE__ */ jsx(Label, { x: `${(point - point_start_val) * div_width - 3}px`, children: point }, point))
    ];
  }
}
function findMaxValueWidth(points) {
  let currWidth = points.reduce(function(a, b) {
    return a > b.toString().length ? a : b.toString().length;
  });
  return currWidth * 12;
}
function generateTextLabels(points, div_width, SVs) {
  let maxValueWidth = findMaxValueWidth(points);
  const length = Object.keys(points).length;
  if (SVs.width.size > maxValueWidth * length) {
    return [
      points.map((point, index) => /* @__PURE__ */ jsx(Tick, { x: `${index * div_width}px` }, point)),
      points.map((point, index) => {
        return /* @__PURE__ */ jsx(Label, { x: `${index * div_width - 3}px`, children: point }, point);
      })
    ];
  } else if (SVs.width.size < maxValueWidth) {
    return [
      points.map((point, index) => {
        if (index == 0) {
          return /* @__PURE__ */ jsx(Tick, { x: `${index * div_width}px` }, point);
        } else {
          return "";
        }
      }),
      points.map((point, index) => {
        if (index == 0) {
          return /* @__PURE__ */ jsx(Label, { x: `${index * div_width - 3}px`, children: point }, point);
        } else if (index == 2) {
          return /* @__PURE__ */ jsx(Label, { x: `${index * div_width - 3}px`, children: "..." }, point);
        }
      })
    ];
  } else if (SVs.width.size < maxValueWidth * length) {
    return [
      points.map((point, index) => /* @__PURE__ */ jsx(Tick, { x: `${index * div_width}px` }, point)),
      points.map((point, index) => {
        if (index == 0 || length === index + 1) {
          return /* @__PURE__ */ jsx(Label, { x: `${index * div_width - 3}px`, children: point }, point);
        } else {
          return /* @__PURE__ */ jsx(Label, { x: `${index * div_width - 3}px`, children: point.length < 3 ? point : point.substr(0, 3) + "..." }, point);
        }
      })
    ];
  }
}
function xPositionToValue(ref, div_width, start_val) {
  return start_val + ref / div_width;
}
function nearestValue(refval, points, SVs) {
  let index = Math.max(
    0,
    Math.min(SVs.numItems - 1, Math.round(refval - SVs.firstItem))
  );
  let val;
  if (points.length === 0) {
    val = SVs.from + SVs.step * index;
  } else {
    val = points[index];
  }
  return [val, index];
}
const slider = React.memo(function Slider(props) {
  let { name, id, SVs, actions, ignoreUpdate, rendererName, callAction } = useDoenetRenderer(props);
  Slider.baseStateVariable = "index";
  const containerRef = reactExports.useRef(null);
  const setRendererState = Recoil_index_24(rendererState(rendererName));
  const [thumbXPos, setThumbXPos] = reactExports.useState(0);
  const isMouseDown = reactExports.useRef(false);
  const [offsetLeft, setOffsetLeft] = reactExports.useState(0);
  const startValue = SVs.type === "text" ? 0 : SVs.firstItem;
  let divisionWidth = SVs.width.size / (SVs.numItems - 1);
  const [index, setIndex] = reactExports.useState(0);
  reactExports.useEffect(() => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      setOffsetLeft(rect.left);
    }
  }, []);
  reactExports.useEffect(() => {
    if (!isMouseDown.current && !ignoreUpdate) {
      setIndex(SVs.index);
      if (!(SVs.type === "text")) {
        setThumbXPos(SVs.index / (SVs.numItems - 1) * SVs.width.size);
      } else {
        setThumbXPos(SVs.index * divisionWidth);
      }
    }
  }, [SVs.index]);
  if (SVs.hidden) {
    return null;
  }
  if (SVs.disabled) {
    let controls2 = "";
    if (SVs.showControls) {
      controls2 = /* @__PURE__ */ jsxs(ActionButtonGroup, { style: { marginBottom: "12px" }, children: [
        /* @__PURE__ */ jsx(
          ActionButton,
          {
            value: "Prev",
            onClick: (e) => handlePrevious(),
            disabled: true
          }
        ),
        /* @__PURE__ */ jsx(ActionButton, { value: "Next", onClick: (e) => handleNext(), disabled: true })
      ] });
    } else {
      controls2 = null;
    }
    let labels2 = "";
    if (SVs.type === "text") {
      labels2 = generateTextLabels(SVs.items, divisionWidth, SVs);
    } else {
      labels2 = generateNumericLabels(SVs.items, divisionWidth, startValue, SVs);
    }
    let ticksAndLabels2 = "";
    if (SVs.showTicks === false) {
      ticksAndLabels2 = null;
    } else {
      ticksAndLabels2 = labels2;
    }
    let myLabel2 = null;
    if (SVs.label) {
      let label = SVs.label;
      if (SVs.labelHasLatex) {
        label = /* @__PURE__ */ jsx(betterReactMathjax.MathJax, { hideUntilTypeset: "first", inline: true, dynamic: true, children: label });
      }
      if (SVs.showValue) {
        myLabel2 = /* @__PURE__ */ jsxs(StyledValueLabel, { children: [
          label,
          " = " + SVs.valueForDisplay
        ] });
      } else {
        myLabel2 = /* @__PURE__ */ jsx(StyledValueLabel, { children: label });
      }
    } else if (!SVs.label && SVs.showValue) {
      myLabel2 = /* @__PURE__ */ jsx(StyledValueLabel, { children: SVs.valueForDisplay });
    } else {
      myLabel2 = null;
    }
    return /* @__PURE__ */ jsxs(
      SliderContainer,
      {
        labeled: SVs.showControls || SVs.label,
        noTicked: SVs.showTicks === false,
        ref: containerRef,
        children: [
          /* @__PURE__ */ jsx(
            "div",
            {
              id: `${id}-label`,
              style: { height: SVs.label || SVs.showValue ? "20px" : "0px" },
              children: myLabel2
            }
          ),
          /* @__PURE__ */ jsx(SubContainer2, { children: /* @__PURE__ */ jsxs(StyledSlider, { width: `${SVs.width.size}px`, id, children: [
            /* @__PURE__ */ jsx(
              StyledThumb,
              {
                disabled: true,
                style: { left: `${thumbXPos - 4}px` },
                id: `${id}-handle`
              }
            ),
            ticksAndLabels2
          ] }) }),
          /* @__PURE__ */ jsx("div", { style: { height: SVs.showControls ? "20px" : "0px" }, children: controls2 })
        ]
      }
    );
  }
  function handleDragEnter(e) {
    isMouseDown.current = true;
    document.addEventListener("mousemove", handleDragThrough);
    document.addEventListener("mouseup", handleDragExit);
    setThumbXPos(e.nativeEvent.clientX - offsetLeft);
    if (!(SVs.type === "text")) {
      let refval = xPositionToValue(
        e.nativeEvent.clientX - offsetLeft,
        divisionWidth,
        startValue
      );
      let valindexpair = nearestValue(refval, SVs.items, SVs);
      setIndex(valindexpair[1]);
      setRendererState((was) => {
        let newObj = { ...was };
        newObj.ignoreUpdate = true;
        return newObj;
      });
      callAction({
        action: actions.changeValue,
        args: { value: valindexpair[0], transient: true },
        baseVariableValue: valindexpair[1]
      });
    } else {
      let i = Math.round((e.nativeEvent.clientX - offsetLeft) / divisionWidth);
      setIndex(i);
      setRendererState((was) => {
        let newObj = { ...was };
        newObj.ignoreUpdate = true;
        return newObj;
      });
      callAction({
        action: actions.changeValue,
        args: { value: SVs.items[i], transient: true },
        baseVariableValue: i
      });
    }
  }
  function handleDragExit(e) {
    document.removeEventListener("mousemove", handleDragThrough);
    document.removeEventListener("mouseup", handleDragExit);
    if (!isMouseDown.current) {
      return;
    }
    isMouseDown.current = false;
    if (!(SVs.type === "text")) {
      let xPositionToValue2 = function(ref, div_width, start_val) {
        return start_val + ref / div_width;
      };
      let refval = xPositionToValue2(
        e.clientX - offsetLeft,
        divisionWidth,
        startValue
      );
      let valindexpair = nearestValue(refval, SVs.items, SVs);
      setIndex(valindexpair[1]);
      setThumbXPos(valindexpair[1] * divisionWidth);
      setRendererState((was) => {
        let newObj = { ...was };
        newObj.ignoreUpdate = true;
        return newObj;
      });
      callAction({
        action: actions.changeValue,
        args: { value: valindexpair[0] },
        baseVariableValue: valindexpair[1]
      });
    } else {
      let i = Math.round((e.clientX - offsetLeft) / divisionWidth);
      i = Math.max(0, Math.min(SVs.numItems - 1, i));
      setIndex(i);
      setThumbXPos(i * divisionWidth);
      setRendererState((was) => {
        let newObj = { ...was };
        newObj.ignoreUpdate = true;
        return newObj;
      });
      callAction({
        action: actions.changeValue,
        args: { value: SVs.items[i] },
        baseVariableValue: i
      });
    }
  }
  function handleDragThrough(e) {
    if (isMouseDown.current) {
      setThumbXPos(
        Math.max(0, Math.min(SVs.width.size, e.clientX - offsetLeft))
      );
      if (!(SVs.type === "text")) {
        let refval = xPositionToValue(
          e.clientX - offsetLeft,
          divisionWidth,
          startValue
        );
        let valindexpair = nearestValue(refval, SVs.items, SVs);
        setIndex(valindexpair[1]);
        setRendererState((was) => {
          let newObj = { ...was };
          newObj.ignoreUpdate = true;
          return newObj;
        });
        callAction({
          action: actions.changeValue,
          args: { value: valindexpair[0], transient: true, skippable: true },
          baseVariableValue: valindexpair[1]
        });
      } else {
        let i = Math.round((e.clientX - offsetLeft) / divisionWidth);
        setIndex(i);
        setRendererState((was) => {
          let newObj = { ...was };
          newObj.ignoreUpdate = true;
          return newObj;
        });
        callAction({
          action: actions.changeValue,
          args: { value: SVs.items[i], transient: true, skippable: true },
          baseVariableValue: i
        });
      }
    }
  }
  function handleNext(e) {
    if (index === SVs.numItems - 1) {
      return;
    }
    let val;
    if (SVs.items.length === 0) {
      val = SVs.from + SVs.step * (index + 1);
    } else {
      val = SVs.items[index + 1];
    }
    setRendererState((was) => {
      let newObj = { ...was };
      newObj.ignoreUpdate = true;
      return newObj;
    });
    callAction({
      action: actions.changeValue,
      args: { value: val },
      baseVariableValue: index + 1
    });
    setIndex(index + 1);
  }
  function handlePrevious(e) {
    if (index === 0) {
      return;
    }
    let val;
    if (SVs.items.length === 0) {
      val = SVs.from + SVs.step * (index - 1);
    } else {
      val = SVs.items[index - 1];
    }
    setRendererState((was) => {
      let newObj = { ...was };
      newObj.ignoreUpdate = true;
      return newObj;
    });
    callAction({
      action: actions.changeValue,
      args: { value: val },
      baseVariableValue: index - 1
    });
    setIndex(index - 1);
  }
  function handleKeyDown(e) {
    if (e.key === "ArrowLeft") {
      return handlePrevious();
    } else if (e.key === "ArrowRight") {
      return handleNext();
    }
  }
  let labels = "";
  if (SVs.type === "text") {
    labels = generateTextLabels(SVs.items, divisionWidth, SVs);
  } else {
    labels = generateNumericLabels(SVs.items, divisionWidth, startValue, SVs);
  }
  let ticksAndLabels = "";
  if (SVs.showTicks === false) {
    ticksAndLabels = null;
  } else {
    ticksAndLabels = labels;
  }
  let controls = "";
  if (SVs.showControls) {
    controls = /* @__PURE__ */ jsxs(ActionButtonGroup, { style: { marginBottom: "12px" }, children: [
      /* @__PURE__ */ jsx(
        ActionButton,
        {
          value: "Prev",
          onClick: (e) => handlePrevious(),
          id: `${id}-prevbutton`
        }
      ),
      /* @__PURE__ */ jsx(
        ActionButton,
        {
          value: "Next",
          onClick: (e) => handleNext(),
          id: `${id}-nextbutton`
        }
      )
    ] });
  }
  if (SVs.showValue) {
    /* @__PURE__ */ jsxs("span", { style: { left: `${thumbXPos - 4}px`, userSelect: "none" }, children: [
      SVs.valueForDisplay,
      " "
    ] });
  }
  let myLabel = null;
  if (SVs.label) {
    let label = SVs.label;
    if (SVs.labelHasLatex) {
      label = /* @__PURE__ */ jsx(betterReactMathjax.MathJax, { hideUntilTypeset: "first", inline: true, dynamic: true, children: label });
    }
    if (SVs.showValue) {
      myLabel = /* @__PURE__ */ jsxs(StyledValueLabel, { children: [
        label,
        " = " + SVs.valueForDisplay
      ] });
    } else {
      myLabel = /* @__PURE__ */ jsx(StyledValueLabel, { children: label });
    }
  } else if (!SVs.label && SVs.showValue) {
    myLabel = /* @__PURE__ */ jsx(StyledValueLabel, { children: SVs.valueForDisplay });
  } else {
    myLabel = null;
  }
  return /* @__PURE__ */ jsxs(
    SliderContainer,
    {
      ref: containerRef,
      labeled: SVs.showControls || SVs.label,
      noTicked: SVs.showTicks === false,
      onKeyDown: handleKeyDown,
      tabIndex: "0",
      children: [
        /* @__PURE__ */ jsx(
          "div",
          {
            id: `${id}-label`,
            style: { height: SVs.label || SVs.showValue ? "20px" : "0px" },
            children: myLabel
          }
        ),
        /* @__PURE__ */ jsx(SubContainer2, { onMouseDown: handleDragEnter, children: /* @__PURE__ */ jsxs(StyledSlider, { width: `${SVs.width.size}px`, id, children: [
          /* @__PURE__ */ jsx(
            StyledThumb,
            {
              style: { left: `${thumbXPos - 4}px` },
              id: `${id}-handle`
            }
          ),
          ticksAndLabels
        ] }) }),
        /* @__PURE__ */ jsx("div", { style: { height: SVs.showControls ? "20px" : "0px" }, children: controls })
      ]
    }
  );
});
export {
  slider as default
};
