import { h as axios, bI as cidFromArrayBuffer, R as React, bx as useDoenetRenderer, r as reactExports, by as Context, j as jsx, b as jsxs } from "./PageViewer-d914b069.js";
import { BoardContext, IMAGE_LAYER_OFFSET } from "./graph-8a8db909.js";
import { s as sizeToCSS } from "./css-5483d03f.js";
import { V as VisibilitySensor } from "./visibility-sensor-57589aaf.js";
async function retrieveMediaForCid(cid, mimeType) {
  try {
    return await retrieveMediaFromIPFS(cid);
  } catch (e) {
  }
  if (!mimeType) {
    let { data } = await axios.get("/api/getMimeType.php", {
      params: { cid }
    });
    mimeType = data["mime-type"];
  }
  return retrieveMediaFromServer(cid, mimeType);
}
async function retrieveMediaFromIPFS(cid) {
  let controller = new AbortController();
  let signal = controller.signal;
  let timeoutId = setTimeout(() => {
    controller.abort();
  }, 1e3);
  try {
    let response = await fetch(`https://${cid}.ipfs.dweb.link/`, { signal });
    clearTimeout(timeoutId);
    if (response.ok) {
      let mediaBlob = await response.blob();
      let CidRetrieved = await cidFromArrayBuffer(
        await mediaBlob.arrayBuffer()
      );
      if (CidRetrieved === cid) {
        let mediaURL = URL.createObjectURL(mediaBlob);
        return { mediaBlob, mediaURL };
      } else {
        return Promise.reject(new Error("cid mismatch"));
      }
    } else {
      return Promise.reject(new Error(`cid not found: ${cid}`));
    }
  } catch (e) {
    return Promise.reject(new Error(`cid not found: ${cid}`));
  }
}
async function retrieveMediaFromServer(cid, mimeType) {
  try {
    let extension = extensionFromMimeType(mimeType);
    let response = await fetch(`/media/${cid}.${extension}`);
    if (response.ok) {
      let mediaBlob = await response.blob();
      let CidRetrieved = await cidFromArrayBuffer(
        await mediaBlob.arrayBuffer()
      );
      if (CidRetrieved === cid) {
        let mediaURL = URL.createObjectURL(mediaBlob);
        return { mediaBlob, mediaURL };
      } else {
        return Promise.reject(new Error("cid mismatch"));
      }
    } else {
      return Promise.reject(new Error(`cid not found: ${cid}`));
    }
  } catch (e) {
    return Promise.reject(new Error(`cid not found: ${cid}`));
  }
}
function extensionFromMimeType(mimeType) {
  if (mimeType === "image/png") {
    return "png";
  } else if (mimeType === "image/jpeg") {
    return "jpg";
  } else if (mimeType === "text/csv") {
    return "csv";
  } else {
    return "txt";
  }
}
const image = React.memo(function Image(props) {
  var _a;
  let { name, id, SVs, actions, callAction } = useDoenetRenderer(props, false);
  let [url, setUrl] = reactExports.useState(null);
  Image.ignoreActionsWithoutCore = () => true;
  let imageJXG = reactExports.useRef(null);
  let anchorPointJXG = reactExports.useRef(null);
  const board = reactExports.useContext(BoardContext);
  let pointerAtDown = reactExports.useRef(null);
  let pointAtDown = reactExports.useRef(null);
  let pointerIsDown = reactExports.useRef(false);
  let pointerMovedSinceDown = reactExports.useRef(false);
  let dragged = reactExports.useRef(false);
  let calculatedX = reactExports.useRef(null);
  let calculatedY = reactExports.useRef(null);
  let lastPositionFromCore = reactExports.useRef(null);
  let previousPositionFromAnchor = reactExports.useRef(null);
  let currentSize = reactExports.useRef(null);
  let currentOffset = reactExports.useRef(null);
  let rotationTransform = reactExports.useRef(null);
  let lastRotate = reactExports.useRef(SVs.rotate);
  let fixed = reactExports.useRef(false);
  let fixLocation = reactExports.useRef(false);
  fixed.current = SVs.fixed;
  fixLocation.current = !SVs.draggable || SVs.fixLocation || SVs.fixed;
  const urlOrSource = (SVs.cid ? url : SVs.source) || "";
  let onChangeVisibility = (isVisible) => {
    callAction({
      action: actions.recordVisibilityChange,
      args: { isVisible }
    });
  };
  reactExports.useEffect(() => {
    return () => {
      callAction({
        action: actions.recordVisibilityChange,
        args: { isVisible: false }
      });
    };
  }, []);
  reactExports.useEffect(() => {
    if (SVs.cid) {
      retrieveMediaForCid(SVs.cid, SVs.mimeType).then((result) => {
        setUrl(result.mediaURL);
      }).catch((e) => {
      });
    }
  }, []);
  reactExports.useEffect(() => {
    return () => {
      if (imageJXG.current !== null) {
        deleteImageJXG();
      }
      if (board) {
        board.off("move", boardMoveHandler);
      }
    };
  }, []);
  reactExports.useEffect(() => {
    if (board) {
      board.on("move", boardMoveHandler);
    }
  }, [board]);
  function createImageJXG() {
    var _a2;
    let jsxImageAttributes = {
      visible: !SVs.hidden,
      fixed: fixed.current,
      layer: 10 * SVs.layer + IMAGE_LAYER_OFFSET,
      highlight: !fixLocation.current
    };
    let newAnchorPointJXG;
    try {
      let anchor = Context.fromAst(SVs.anchor);
      let anchorCoords = [
        anchor.get_component(0).evaluate_to_constant(),
        anchor.get_component(1).evaluate_to_constant()
      ];
      if (!Number.isFinite(anchorCoords[0])) {
        anchorCoords[0] = 0;
        jsxImageAttributes["visible"] = false;
      }
      if (!Number.isFinite(anchorCoords[1])) {
        anchorCoords[1] = 0;
        jsxImageAttributes["visible"] = false;
      }
      newAnchorPointJXG = board.create("point", anchorCoords, {
        visible: false
      });
    } catch (e) {
      jsxImageAttributes["visible"] = false;
      newAnchorPointJXG = board.create("point", [0, 0], { visible: false });
    }
    jsxImageAttributes.anchor = newAnchorPointJXG;
    let width = ((_a2 = SVs.widthForGraph) == null ? void 0 : _a2.size) || 1;
    let height = width / (SVs.aspectRatio || 1);
    if (!(Number.isFinite(width) && Number.isFinite(height))) {
      width = 0;
      height = 0;
    }
    let offset;
    if (SVs.positionFromAnchor === "center") {
      offset = [-width / 2, -height / 2];
    } else if (SVs.positionFromAnchor === "lowerleft") {
      offset = [-width, -height];
    } else if (SVs.positionFromAnchor === "lowerright") {
      offset = [0, -height];
    } else if (SVs.positionFromAnchor === "upperleft") {
      offset = [-width, 0];
    } else if (SVs.positionFromAnchor === "upperright") {
      offset = [0, 0];
    } else if (SVs.positionFromAnchor === "bottom") {
      offset = [-width / 2, -height];
    } else if (SVs.positionFromAnchor === "top") {
      offset = [-width / 2, 0];
    } else if (SVs.positionFromAnchor === "right") {
      offset = [0, -height / 2];
    } else {
      offset = [-width, -height / 2];
    }
    currentOffset.current = offset;
    let newImageJXG = board.create(
      "image",
      [urlOrSource, offset, [width, height]],
      jsxImageAttributes
    );
    newImageJXG.isDraggable = !fixLocation.current;
    var tOff = board.create(
      "transform",
      [
        function() {
          return -newImageJXG.X() - newImageJXG.W() * 0.5;
        },
        function() {
          return -newImageJXG.Y() - newImageJXG.H() * 0.5;
        }
      ],
      { type: "translate" }
    );
    var tOffInverse = board.create(
      "transform",
      [
        function() {
          return newImageJXG.X() + newImageJXG.W() * 0.5;
        },
        function() {
          return newImageJXG.Y() + newImageJXG.H() * 0.5;
        }
      ],
      { type: "translate" }
    );
    var tRot = board.create("transform", [SVs.rotate], { type: "rotate" });
    tOff.bindTo(newImageJXG);
    tRot.bindTo(newImageJXG);
    tOffInverse.bindTo(newImageJXG);
    rotationTransform.current = tRot;
    lastRotate.current = SVs.rotate;
    newImageJXG.on("down", function(e) {
      pointerAtDown.current = [e.x, e.y];
      pointAtDown.current = [...newAnchorPointJXG.coords.scrCoords];
      dragged.current = false;
      pointerIsDown.current = true;
      pointerMovedSinceDown.current = false;
      if (!fixed.current) {
        callAction({
          action: actions.imageFocused,
          args: { name }
          // send name so get original name if adapted
        });
      }
    });
    newImageJXG.on("hit", function(e) {
      pointAtDown.current = [...newAnchorPointJXG.coords.scrCoords];
      dragged.current = false;
      callAction({
        action: actions.imageFocused,
        args: { name }
        // send name so get original name if adapted
      });
    });
    newImageJXG.on("up", function(e) {
      if (dragged.current) {
        callAction({
          action: actions.moveImage,
          args: {
            x: calculatedX.current,
            y: calculatedY.current
          }
        });
        dragged.current = false;
      } else if (!pointerMovedSinceDown.current && !fixed.current) {
        callAction({
          action: actions.imageClicked,
          args: { name }
          // send name so get original name if adapted
        });
      }
      pointerIsDown.current = false;
    });
    newImageJXG.on("keyfocusout", function(e) {
      if (dragged.current) {
        callAction({
          action: actions.moveImage,
          args: {
            x: calculatedX.current,
            y: calculatedY.current
          }
        });
        dragged.current = false;
      }
    });
    newImageJXG.on("drag", function(e) {
      let viaPointer = e.type === "pointermove";
      if (!viaPointer || Math.abs(e.x - pointerAtDown.current[0]) > 0.1 || Math.abs(e.y - pointerAtDown.current[1]) > 0.1) {
        dragged.current = true;
      }
      let [xmin, ymax, xmax, ymin] = board.getBoundingBox();
      let xminAdjusted = xmin + 0.01 * (xmax - xmin) - currentOffset.current[0] - currentSize.current[0];
      let xmaxAdjusted = xmax - 0.01 * (xmax - xmin) - currentOffset.current[0];
      let yminAdjusted = ymin + 0.01 * (ymax - ymin) - currentOffset.current[1] - currentSize.current[1];
      let ymaxAdjusted = ymax - 0.01 * (ymax - ymin) - currentOffset.current[1];
      if (viaPointer) {
        var o = board.origin.scrCoords;
        calculatedX.current = (pointAtDown.current[1] + e.x - pointerAtDown.current[0] - o[1]) / board.unitX;
        calculatedY.current = (o[2] - (pointAtDown.current[2] + e.y - pointerAtDown.current[1])) / board.unitY;
      } else {
        calculatedX.current = newAnchorPointJXG.X() + newImageJXG.relativeCoords.usrCoords[1] - currentOffset.current[0];
        calculatedY.current = newAnchorPointJXG.Y() + newImageJXG.relativeCoords.usrCoords[2] - currentOffset.current[1];
      }
      calculatedX.current = Math.min(
        xmaxAdjusted,
        Math.max(xminAdjusted, calculatedX.current)
      );
      calculatedY.current = Math.min(
        ymaxAdjusted,
        Math.max(yminAdjusted, calculatedY.current)
      );
      callAction({
        action: actions.moveImage,
        args: {
          x: calculatedX.current,
          y: calculatedY.current,
          transient: true,
          skippable: true
        }
      });
      newImageJXG.relativeCoords.setCoordinates(
        JXG.COORDS_BY_USER,
        currentOffset.current
      );
      newAnchorPointJXG.coords.setCoordinates(
        JXG.COORDS_BY_USER,
        lastPositionFromCore.current
      );
    });
    newImageJXG.on("keydown", function(e) {
      if (e.key === "Enter") {
        if (dragged.current) {
          callAction({
            action: actions.moveImage,
            args: {
              x: calculatedX.current,
              y: calculatedY.current
            }
          });
          dragged.current = false;
        }
        callAction({
          action: actions.imageClicked,
          args: { name }
          // send name so get original name if adapted
        });
      }
    });
    imageJXG.current = newImageJXG;
    anchorPointJXG.current = newAnchorPointJXG;
    previousPositionFromAnchor.current = SVs.positionFromAnchor;
    currentSize.current = [width, height];
    imageJXG.current.fullUpdate();
  }
  function boardMoveHandler(e) {
    if (pointerIsDown.current) {
      if (Math.abs(e.x - pointerAtDown.current[0]) > 0.1 || Math.abs(e.y - pointerAtDown.current[1]) > 0.1) {
        pointerMovedSinceDown.current = true;
      }
    }
  }
  function deleteImageJXG() {
    imageJXG.current.off("drag");
    imageJXG.current.off("down");
    imageJXG.current.off("hit");
    imageJXG.current.off("up");
    imageJXG.current.off("keyfocusout");
    imageJXG.current.off("keydown");
    board.removeObject(imageJXG.current);
    imageJXG.current = null;
  }
  if (board) {
    let anchorCoords;
    try {
      let anchor = Context.fromAst(SVs.anchor);
      anchorCoords = [
        anchor.get_component(0).evaluate_to_constant(),
        anchor.get_component(1).evaluate_to_constant()
      ];
    } catch (e) {
      anchorCoords = [NaN, NaN];
    }
    lastPositionFromCore.current = anchorCoords;
    if (imageJXG.current === null) {
      if (SVs.cid && !url) {
        return null;
      }
      createImageJXG();
    } else {
      anchorPointJXG.current.coords.setCoordinates(
        JXG.COORDS_BY_USER,
        anchorCoords
      );
      let visible = !SVs.hidden;
      if (Number.isFinite(anchorCoords[0]) && Number.isFinite(anchorCoords[1])) {
        let actuallyChangedVisibility = imageJXG.current.visProp["visible"] !== visible;
        imageJXG.current.visProp["visible"] = visible;
        imageJXG.current.visPropCalc["visible"] = visible;
        if (actuallyChangedVisibility) {
          imageJXG.current.setAttribute({ visible });
        }
      } else {
        imageJXG.current.visProp["visible"] = false;
        imageJXG.current.visPropCalc["visible"] = false;
      }
      let layer = 10 * SVs.layer + IMAGE_LAYER_OFFSET;
      let layerChanged = imageJXG.current.visProp.layer !== layer;
      if (layerChanged) {
        imageJXG.current.setAttribute({ layer });
      }
      imageJXG.current.visProp.highlight = !fixLocation.current;
      imageJXG.current.visProp.fixed = fixed.current;
      imageJXG.current.isDraggable = !fixLocation.current;
      imageJXG.current.needsUpdate = true;
      let width = ((_a = SVs.widthForGraph) == null ? void 0 : _a.size) || 1;
      let height = width / (SVs.aspectRatio || 1);
      if (!(Number.isFinite(width) && Number.isFinite(height))) {
        width = 0;
        height = 0;
      }
      let sizeChanged = width !== currentSize.current[0] || height !== currentSize.current[1];
      if (sizeChanged) {
        imageJXG.current.setSize(width, height);
        currentSize.current = [width, height];
      }
      if (SVs.rotate != lastRotate.current) {
        rotationTransform.current.setMatrix(board, "rotate", [SVs.rotate]);
        lastRotate.current = SVs.rotate;
      }
      if (SVs.positionFromAnchor !== previousPositionFromAnchor.current || sizeChanged) {
        let offset;
        if (SVs.positionFromAnchor === "center") {
          offset = [-width / 2, -height / 2];
        } else if (SVs.positionFromAnchor === "lowerleft") {
          offset = [-width, -height];
        } else if (SVs.positionFromAnchor === "lowerright") {
          offset = [0, -height];
        } else if (SVs.positionFromAnchor === "upperleft") {
          offset = [-width, 0];
        } else if (SVs.positionFromAnchor === "upperright") {
          offset = [0, 0];
        } else if (SVs.positionFromAnchor === "bottom") {
          offset = [-width / 2, -height];
        } else if (SVs.positionFromAnchor === "top") {
          offset = [-width / 2, 0];
        } else if (SVs.positionFromAnchor === "right") {
          offset = [0, -height / 2];
        } else {
          offset = [-width, -height / 2];
        }
        imageJXG.current.relativeCoords.setCoordinates(
          JXG.COORDS_BY_USER,
          offset
        );
        previousPositionFromAnchor.current = SVs.positionFromAnchor;
        currentOffset.current = offset;
        imageJXG.current.fullUpdate();
      } else {
        imageJXG.current.relativeCoords.setCoordinates(
          JXG.COORDS_BY_USER,
          currentOffset.current
        );
        imageJXG.current.update();
      }
      anchorPointJXG.current.needsUpdate = true;
      anchorPointJXG.current.update();
      board.updateRenderer();
    }
    return /* @__PURE__ */ jsx("a", { name: id });
  }
  if (SVs.hidden)
    return null;
  let outerStyle = {};
  if (SVs.displayMode === "inline") {
    outerStyle = {
      display: "inline-block",
      verticalAlign: "middle",
      margin: "12px 0"
    };
  } else {
    outerStyle = {
      display: "flex",
      justifyContent: SVs.horizontalAlign,
      margin: "12px 0"
    };
  }
  let imageStyle = {
    maxWidth: "100%",
    width: sizeToCSS(SVs.width)
  };
  if (SVs.aspectRatio > 0) {
    imageStyle.aspectRatio = String(SVs.aspectRatio);
  }
  if (!urlOrSource) {
    imageStyle.border = "var(--mainBorder)";
  }
  return /* @__PURE__ */ jsx(VisibilitySensor, { partialVisibility: true, onChange: onChangeVisibility, children: /* @__PURE__ */ jsxs("div", { style: outerStyle, children: [
    /* @__PURE__ */ jsx("a", { name: id }),
    urlOrSource ? /* @__PURE__ */ jsx(
      "img",
      {
        id,
        src: urlOrSource,
        style: imageStyle,
        alt: SVs.description
      }
    ) : /* @__PURE__ */ jsx("div", { id, style: imageStyle, children: SVs.description })
  ] }) });
});
export {
  image as default
};
