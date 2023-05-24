import { R as React, bx as useDoenetRenderer, r as reactExports, by as Context } from "./PageViewer-d914b069.js";
import { BoardContext, BASE_LAYER_OFFSET } from "./graph-8a8db909.js";
import "./css-5483d03f.js";
import "./visibility-sensor-57589aaf.js";
const pegboard = React.memo(function Pegboard(props) {
  var _a;
  let { name, id, SVs, actions, sourceOfUpdate, callAction } = useDoenetRenderer(props);
  Pegboard.ignoreActionsWithoutCore = () => true;
  const board = reactExports.useContext(BoardContext);
  let pegboardJXG = reactExports.useRef(null);
  let previousBounds = reactExports.useRef(null);
  let dx = reactExports.useRef(null);
  let dy = reactExports.useRef(null);
  let xoffset = reactExports.useRef(null);
  let yoffset = reactExports.useRef(null);
  dx.current = SVs.dx;
  dy.current = SVs.dy;
  xoffset.current = SVs.xoffset;
  yoffset.current = SVs.yoffset;
  let jsxPointAttributes = reactExports.useRef({
    visible: !SVs.hidden,
    fixed: true,
    withlabel: false,
    layer: 10 * SVs.layer + BASE_LAYER_OFFSET,
    fillColor: "darkgray",
    strokeColor: "darkgray",
    size: 0.1,
    face: "circle",
    highlight: false,
    showinfobox: false
  });
  jsxPointAttributes.current.visible = !SVs.hidden;
  jsxPointAttributes.current.layer = 10 * SVs.layer + BASE_LAYER_OFFSET;
  reactExports.useEffect(() => {
    return () => {
      deletePegboardJXG();
    };
  }, []);
  function createPegboardJXG() {
    let [xmin, ymax, xmax, ymin] = board.getBoundingBox();
    let xind1 = (xmin - xoffset.current) / dx.current;
    let xind2 = (xmax - xoffset.current) / dx.current;
    let yind1 = (ymin - yoffset.current) / dy.current;
    let yind2 = (ymax - yoffset.current) / dy.current;
    let minXind = Context.math.round(Math.min(xind1, xind2) + 1);
    let maxXind = Context.math.round(Math.max(xind1, xind2) - 1);
    let minYind = Context.math.round(Math.min(yind1, yind2) + 1);
    let maxYind = Context.math.round(Math.max(yind1, yind2) - 1);
    previousBounds.current = [minXind, maxXind, minYind, maxYind];
    if (Number.isFinite(minXind) && Number.isFinite(maxXind) && Number.isFinite(minYind) && Number.isFinite(maxYind)) {
      let pegs = [];
      for (let yind = minYind; yind <= maxYind; yind++) {
        let y = yind * SVs.dy + SVs.yoffset;
        let row = [];
        for (let xind = minXind; xind <= maxXind; xind++) {
          row.push(
            board.create(
              "point",
              [xind * SVs.dx + SVs.xoffset, y],
              jsxPointAttributes.current
            )
          );
        }
        pegs.push(row);
      }
      pegboardJXG.current = pegs;
    }
    board.on("boundingbox", () => {
      let [xmin2, ymax2, xmax2, ymin2] = board.getBoundingBox();
      let xind12 = (xmin2 - xoffset.current) / dx.current;
      let xind22 = (xmax2 - xoffset.current) / dx.current;
      let yind12 = (ymin2 - yoffset.current) / dy.current;
      let yind22 = (ymax2 - yoffset.current) / dy.current;
      let minXind2 = Context.math.round(Math.min(xind12, xind22) + 1);
      let maxXind2 = Context.math.round(Math.max(xind12, xind22) - 1);
      let minYind2 = Context.math.round(Math.min(yind12, yind22) + 1);
      let maxYind2 = Context.math.round(Math.max(yind12, yind22) - 1);
      let [prevXmin, prevXmax, prevYmin, prevYmax] = previousBounds.current;
      if (minXind2 !== prevXmin || maxXind2 !== prevXmax || minYind2 !== prevYmin || maxYind2 !== prevYmax) {
        recalculatePegboard(minXind2, maxXind2, minYind2, maxYind2);
      }
    });
  }
  function deletePegboardJXG() {
    if (pegboardJXG.current !== null) {
      for (let row of pegboardJXG.current) {
        for (let point of row) {
          board.removeObject(point);
        }
      }
    }
    pegboardJXG.current = null;
  }
  function recalculatePegboard(minXind, maxXind, minYind, maxYind) {
    if (pegboardJXG.current === null) {
      return createPegboardJXG();
    }
    if (!Number.isFinite(minXind) || !Number.isFinite(maxXind) || !Number.isFinite(minYind) || !Number.isFinite(maxYind)) {
      return deletePegboardJXG();
    }
    let [prevXmin, prevXmax, prevYmin, prevYmax] = previousBounds.current;
    let numRows = maxYind - minYind + 1;
    let prevNrows = prevYmax - prevYmin + 1;
    let numColumns = maxXind - minXind + 1;
    let prevNcols = prevXmax - prevXmin + 1;
    for (let i = 0; i < Math.min(numRows, prevNrows); i++) {
      let row = pegboardJXG.current[i];
      let y = (i + minYind) * dy.current + yoffset.current;
      for (let j = 0; j < Math.min(numColumns, prevNcols); j++) {
        let x = (j + minXind) * dx.current + xoffset.current;
        row[j].coords.setCoordinates(JXG.COORDS_BY_USER, [x, y]);
        row[j].needsUpdate = true;
        row[j].update();
      }
      if (prevNcols > numColumns) {
        for (let j = numColumns; j < prevNcols; j++) {
          let point = row.pop();
          board.removeObject(point);
        }
      } else if (prevNcols < numColumns) {
        for (let j = prevNcols; j < numColumns; j++) {
          let x = (j + minXind) * dx.current + xoffset.current;
          row.push(board.create("point", [x, y], jsxPointAttributes.current));
        }
      }
    }
    if (prevNrows > numRows) {
      for (let i = numRows; i < prevNrows; i++) {
        let row = pegboardJXG.current.pop();
        for (let j = 0; j < prevNcols; j++) {
          let point = row.pop();
          board.removeObject(point);
        }
      }
    } else if (prevNrows < numRows) {
      for (let i = prevNrows; i < numRows; i++) {
        let row = [];
        let y = (i + minYind) * dy.current + yoffset.current;
        for (let j = 0; j < numColumns; j++) {
          let x = (j + minXind) * dx.current + xoffset.current;
          row.push(board.create("point", [x, y], jsxPointAttributes.current));
        }
        pegboardJXG.current.push(row);
      }
    }
    previousBounds.current = [minXind, maxXind, minYind, maxYind];
    board.updateRenderer();
  }
  if (board) {
    if (pegboardJXG.current === null) {
      createPegboardJXG();
    } else {
      let [xmin, ymax, xmax, ymin] = board.getBoundingBox();
      let xind1 = (xmin - xoffset.current) / dx.current;
      let xind2 = (xmax - xoffset.current) / dx.current;
      let yind1 = (ymin - yoffset.current) / dy.current;
      let yind2 = (ymax - yoffset.current) / dy.current;
      let minXind = Context.math.round(Math.min(xind1, xind2) + 1);
      let maxXind = Context.math.round(Math.max(xind1, xind2) - 1);
      let minYind = Context.math.round(Math.min(yind1, yind2) + 1);
      let maxYind = Context.math.round(Math.max(yind1, yind2) - 1);
      recalculatePegboard(minXind, maxXind, minYind, maxYind);
      let firstPeg = (_a = pegboardJXG.current[0]) == null ? void 0 : _a[0];
      if (firstPeg) {
        let layer = 10 * SVs.layer + BASE_LAYER_OFFSET;
        let layerChanged = firstPeg.visProp.layer !== layer;
        if (layerChanged) {
          for (let row of pegboardJXG.current) {
            for (let peg of row) {
              peg.setAttribute({ layer });
            }
          }
        }
      }
    }
  }
  return null;
});
export {
  pegboard as default
};
