import { r as reactExports, R as React, j as jsx, b as jsxs, a0 as Recoil_index_31, aA as Recoil_index_8, a$ as Recoil_index_9, b0 as Recoil_index_10, b1 as Recoil_index_11, a3 as useToast, b2 as DateToUTCDateString, aN as nanoid, h as axios, a4 as toastType, ag as UTCDateStringToDate, ab as Ue, s as styled, t as Recoil_index_20, m as Recoil_index_22, c as FontAwesomeIcon, ac as faCode, U as Recoil_index_21, ar as faCheck, F as Fragment, B as Button, b3 as faExternalLinkAlt } from "./PageViewer-d914b069.js";
import { l as lib } from "./index-badc91d0.js";
import { f as faClipboard } from "./index-72e7d0b2.js";
import "./index.esm-b50f3a4c.js";
/* empty css               */import { B as ButtonGroup } from "./ButtonGroup-b585a5ef.js";
const LOWER_BOUND_ALPHACODE = 96;
const UPPER_BOUND_ALPHACODE = 123;
const CHAR_A_ALPHACODE = 97;
const CHAR_B_ALPHACODE = 98;
const CHAR_Z_ALPHACODE = 122;
function getSortOrder(prev2, next) {
  let p, n, pos = 0, newOrder = "";
  while (p == n) {
    p = pos < prev2.length ? prev2.charCodeAt(pos) : LOWER_BOUND_ALPHACODE;
    n = pos < next.length ? next.charCodeAt(pos) : UPPER_BOUND_ALPHACODE;
    pos++;
  }
  newOrder = prev2.slice(0, pos - 1);
  if (p === LOWER_BOUND_ALPHACODE) {
    while (n === CHAR_A_ALPHACODE) {
      n = pos < next.length ? next.charCodeAt(pos++) : UPPER_BOUND_ALPHACODE;
      newOrder += "a";
    }
    if (n === CHAR_B_ALPHACODE) {
      newOrder += "a";
      n = UPPER_BOUND_ALPHACODE;
    }
  } else if (p + 1 === n) {
    newOrder += String.fromCharCode(p);
    n = UPPER_BOUND_ALPHACODE;
    p = pos < prev2.length ? prev2.charCodeAt(pos++) : LOWER_BOUND_ALPHACODE;
    while (p === CHAR_Z_ALPHACODE) {
      p = pos < prev2.length ? prev2.charCodeAt(pos++) : LOWER_BOUND_ALPHACODE;
      newOrder += "z";
    }
  }
  const middleCharacter = String.fromCharCode(Math.ceil(n - (n - p) / 2));
  newOrder += middleCharacter;
  return newOrder;
}
function useKeyPressedListener(targetKey) {
  const [keyPressed, setKeyPressed] = reactExports.useState(false);
  function downHandler({ key }) {
    if (key === targetKey) {
      setKeyPressed(true);
    }
  }
  const upHandler = ({ key }) => {
    if (key === targetKey) {
      setKeyPressed(false);
    }
  };
  reactExports.useEffect(() => {
    window.addEventListener("keydown", downHandler);
    window.addEventListener("keyup", upHandler);
    return () => {
      window.removeEventListener("keydown", downHandler);
      window.removeEventListener("keyup", upHandler);
    };
  }, []);
  return keyPressed;
}
const DropTargetsContext = React.createContext();
const WithDropTarget = ({
  children,
  id,
  registerDropTarget,
  unregisterDropTarget,
  dropCallbacks
}) => {
  const dropRef = reactExports.useRef();
  const { onDragOver, onDragHover, onDrop, onDragEnter, onDragExit } = dropCallbacks;
  reactExports.useEffect(() => {
    registerDropTarget({
      id,
      ref: dropRef.current,
      onDragOver,
      onDragHover,
      onDragEnter,
      onDragExit,
      onDrop
    });
    return () => {
      unregisterDropTarget(id);
    };
  }, [id, registerDropTarget, unregisterDropTarget]);
  return /* @__PURE__ */ jsx("div", { ref: dropRef, children });
};
const POSITION = { x: 0, y: 0 };
const Draggable = ({
  children,
  id,
  className = "",
  onDragStart,
  onDrag,
  onDragEnd,
  ghostElement = null
}) => {
  const [state, setState] = reactExports.useState({
    isDragging: false,
    origin: POSITION,
    translation: POSITION,
    actionType: null
  });
  const timerRef = reactExports.useRef(null);
  const targetEvent = reactExports.useRef(null);
  const [initializingDrag, setInitializingDrag] = reactExports.useState(false);
  const handleMouseDown = reactExports.useCallback(
    (ev) => {
      if (ev.button !== 0)
        return;
      setInitializingDrag(true);
      targetEvent.current = { ...ev };
      timerRef.current = setTimeout(() => {
        var _a, _b;
        let ev2 = targetEvent.current;
        let clientX = ev2.clientX, clientY = ev2.clientY, actionType = "mouse";
        if (ev2.type === "touchstart") {
          clientX = (_a = ev2.touches[0]) == null ? void 0 : _a.clientX;
          clientY = (_b = ev2.touches[0]) == null ? void 0 : _b.clientY;
          actionType = "touch";
        }
        setState((state2) => ({
          ...state2,
          isDragging: true,
          origin: { x: clientX, y: clientY },
          actionType
        }));
        onDragStart == null ? void 0 : onDragStart({
          ev: targetEvent.current
        });
        timerRef.current = null;
      }, 300);
    },
    [onDragStart, id]
  );
  const handleMouseUp = reactExports.useCallback(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    } else {
      setState((state2) => ({
        ...state2,
        isDragging: false,
        actionType: null
      }));
      onDragEnd == null ? void 0 : onDragEnd();
    }
    setInitializingDrag(false);
  }, [onDragEnd]);
  const handleMouseMove = reactExports.useCallback(
    (ev) => {
      var _a, _b;
      if (!state.isDragging)
        return;
      let clientX = ev.clientX, clientY = ev.clientY;
      if (ev.type === "touchmove") {
        clientX = (_a = ev.touches[0]) == null ? void 0 : _a.clientX;
        clientY = (_b = ev.touches[0]) == null ? void 0 : _b.clientY;
      }
      const translation = {
        x: clientX - state.origin.x,
        y: clientY - state.origin.y
      };
      setState((state2) => ({
        ...state2,
        translation
      }));
      onDrag == null ? void 0 : onDrag({ clientX, clientY, translation, id, ev });
    },
    [state.origin, onDrag, id]
  );
  reactExports.useEffect(() => {
    if (initializingDrag) {
      window.addEventListener("mouseup", handleMouseUp);
      window.addEventListener("touchend", handleMouseUp);
    } else {
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("touchend", handleMouseUp);
    }
    return () => {
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("touchend", handleMouseUp);
    };
  }, [initializingDrag, handleMouseUp]);
  reactExports.useEffect(() => {
    if (state.isDragging) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("touchmove", handleMouseMove);
    } else {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchmove", handleMouseMove);
      setState((state2) => ({ ...state2, translation: { x: 0, y: 0 } }));
    }
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchmove", handleMouseMove);
    };
  }, [state.isDragging, handleMouseMove]);
  const styles = {
    cursor: state.isDragging ? "-webkit-grabbing" : "-webkit-grab",
    // transform: state.isDragging
    //   ? `translate(${state.translation.x}px, ${state.translation.y}px)`
    //   : "",
    transition: state.isDragging ? "none" : "transform 500ms"
    // zIndex: state.isDragging ? 2 : 1,
    // position: state.isDragging ? "absolute" : "relative"
  };
  const ghostStyles = {
    cursor: state.isDragging ? "-webkit-grabbing" : "-webkit-grab",
    transform: state.isDragging ? `translate(${state.translation.x}px, ${state.translation.y}px)` : "",
    transition: state.isDragging ? "visibility 0s, opacity 0.2s linear" : "visibility 0s, opacity 0.2s linear, transform 500ms",
    zIndex: state.isDragging ? 2 : 1,
    opacity: state.isDragging ? 1 : 0,
    visibility: state.isDragging ? "visible" : "hidden",
    height: state.isDragging ? "auto" : "0",
    position: state.isDragging ? "absolute" : "relative",
    left: state.origin.x,
    top: state.origin.y
  };
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className,
      style: styles,
      onMouseDown: handleMouseDown,
      onTouchStart: handleMouseDown,
      children: [
        children,
        /* @__PURE__ */ jsx("div", { style: ghostStyles, children: ghostElement })
      ]
    },
    `draggable${id}`
  );
};
const dragShadowId = "dragShadow";
const useDragShadowCallbacks = () => {
  const replaceDragShadow = Recoil_index_31(({ snapshot }) => async () => {
    const { dragShadowDriveId, dragShadowParentId } = await snapshot.getPromise(
      dragStateAtom
    );
    const globalSelectedNodes = await snapshot.getPromise(
      globalSelectedNodesAtom
    );
    if (!dragShadowDriveId || !dragShadowParentId)
      return;
    let dragShadowParentFolderInfoObj = null;
    if (dragShadowDriveId && dragShadowParentId)
      dragShadowParentFolderInfoObj = await snapshot.getPromise(
        folderDictionary({
          driveId: dragShadowDriveId,
          folderId: dragShadowParentId
        })
      );
    let dragShadowParentDefaultOrder = dragShadowParentFolderInfoObj == null ? void 0 : dragShadowParentFolderInfoObj.contentIds[sortOptions.DEFAULT];
    let insertIndex = dragShadowParentDefaultOrder == null ? void 0 : dragShadowParentDefaultOrder.indexOf(dragShadowId);
    if (insertIndex < 0) {
      return {};
    }
    return {
      targetDriveId: dragShadowDriveId,
      targetFolderId: dragShadowParentId,
      index: insertIndex,
      numItems: globalSelectedNodes.length
    };
  });
  const insertDragShadow = Recoil_index_31(
    ({ snapshot, set }) => async ({ driveIdFolderId, position, parentId, itemId }) => {
      const {
        dragShadowDriveId,
        dragShadowParentId,
        draggedItemsId,
        copyMode
      } = await snapshot.getPromise(dragStateAtom);
      if (!copyMode && draggedItemsId && (draggedItemsId == null ? void 0 : draggedItemsId.has(itemId))) {
        removeDragShadow();
        return;
      }
      const dragShadow = {
        assignmentId: null,
        doenetId: null,
        cid: null,
        creationDate: "",
        isPublished: "0",
        itemId: dragShadowId,
        itemType: "DragShadow",
        label: "",
        parentFolderId: parentId,
        url: null,
        urlDescription: null,
        urlId: null
      };
      const insertPosition = position;
      const dropTargetParentId = parentId;
      let dragShadowParentFolderInfoObj = null;
      if (dragShadowDriveId && dragShadowParentId)
        dragShadowParentFolderInfoObj = await snapshot.getPromise(
          folderDictionary({
            driveId: dragShadowDriveId,
            folderId: dragShadowParentId
          })
        );
      if (dragShadowParentFolderInfoObj) {
        set(
          folderDictionary({
            driveId: dragShadowDriveId,
            folderId: dragShadowParentId
          }),
          (old) => {
            let newObj = { ...old };
            let newDefaultOrder = [...newObj.contentIds[sortOptions.DEFAULT]];
            newDefaultOrder = newDefaultOrder.filter(
              (itemId2) => itemId2 !== dragShadowId
            );
            const defaultOrderObj = {
              [sortOptions.DEFAULT]: newDefaultOrder
            };
            newObj.contentIds = defaultOrderObj;
            return newObj;
          }
        );
      }
      if (insertPosition === "intoCurrent") {
        if (draggedItemsId && (draggedItemsId == null ? void 0 : draggedItemsId.has(driveIdFolderId.folderId)))
          return;
        set(folderDictionary(driveIdFolderId), (old) => {
          let newObj = { ...old };
          let newContentsDictionary = { ...old.contentsDictionary };
          let newDefaultOrder = [...newObj.contentIds[sortOptions.DEFAULT]];
          newContentsDictionary[dragShadowId] = dragShadow;
          if (dragShadowParentId === dropTargetParentId)
            newDefaultOrder = newDefaultOrder.filter(
              (itemId2) => itemId2 !== dragShadowId
            );
          newDefaultOrder.splice(0, 0, dragShadowId);
          const defaultOrderObj = { [sortOptions.DEFAULT]: newDefaultOrder };
          newObj.contentIds = defaultOrderObj;
          newObj.contentsDictionary = newContentsDictionary;
          return newObj;
        });
        set(dragStateAtom, (old) => {
          return {
            ...old,
            dragShadowDriveId: driveIdFolderId.driveId,
            dragShadowParentId: driveIdFolderId.folderId
          };
        });
      } else {
        const isValidPosition = ({
          draggedItemsId: draggedItemsId2,
          contentIdsArr,
          index
        }) => {
          if ((draggedItemsId2 == null ? void 0 : draggedItemsId2.size) > 1)
            return true;
          let isValid2 = true;
          let nextItemId = null, prevItemId = null;
          if (contentIdsArr.length !== 0) {
            if (index <= 0) {
              nextItemId = contentIdsArr[0];
            } else if (index >= contentIdsArr.length) {
              prevItemId = contentIdsArr[contentIdsArr.length - 1];
            } else {
              prevItemId = contentIdsArr[index - 1];
              nextItemId = contentIdsArr[index];
            }
            if (prevItemId && (draggedItemsId2 == null ? void 0 : draggedItemsId2.has(prevItemId)))
              isValid2 = false;
            if (nextItemId && (draggedItemsId2 == null ? void 0 : draggedItemsId2.has(nextItemId)))
              isValid2 = false;
          }
          return isValid2;
        };
        let isValid = true;
        set(
          folderDictionary({
            driveId: driveIdFolderId.driveId,
            folderId: dropTargetParentId
          }),
          (old) => {
            let newObj = { ...old };
            let newContentsDictionary = { ...old.contentsDictionary };
            let newDefaultOrder = [...newObj.contentIds[sortOptions.DEFAULT]];
            newContentsDictionary[dragShadowId] = dragShadow;
            if (dragShadowParentId === dropTargetParentId)
              newDefaultOrder = newDefaultOrder.filter(
                (itemId2) => itemId2 !== dragShadowId
              );
            let index = newDefaultOrder.indexOf(itemId);
            if (insertPosition === "afterCurrent")
              index += 1;
            isValid = copyMode || isValidPosition({
              draggedItemsId,
              contentIdsArr: newDefaultOrder,
              index
            });
            if (isValid)
              newDefaultOrder.splice(index, 0, dragShadowId);
            const defaultOrderObj = {
              [sortOptions.DEFAULT]: newDefaultOrder
            };
            newObj.contentIds = defaultOrderObj;
            newObj.contentsDictionary = newContentsDictionary;
            return newObj;
          }
        );
        if (isValid) {
          set(dragStateAtom, (old) => {
            return {
              ...old,
              dragShadowDriveId: driveIdFolderId.driveId,
              dragShadowParentId: dropTargetParentId
            };
          });
        }
      }
    }
  );
  const removeDragShadow = Recoil_index_31(
    ({ snapshot, set }) => async () => {
      const { dragShadowDriveId, dragShadowParentId } = await snapshot.getPromise(dragStateAtom);
      if (!dragShadowDriveId || !dragShadowParentId)
        return;
      set(
        folderDictionary({
          driveId: dragShadowDriveId,
          folderId: dragShadowParentId
        }),
        (old) => {
          let newObj = { ...old };
          let newDefaultOrder = [...newObj.contentIds[sortOptions.DEFAULT]];
          newDefaultOrder = newDefaultOrder.filter(
            (itemId) => itemId !== dragShadowId
          );
          const defaultOrderObj = { [sortOptions.DEFAULT]: newDefaultOrder };
          newObj.contentIds = defaultOrderObj;
          return newObj;
        }
      );
      set(dragStateAtom, (old) => {
        return {
          ...old,
          dragShadowDriveId: null,
          dragShadowParentId: null
        };
      });
    }
  );
  const cleanUpDragShadow = Recoil_index_31(
    ({ snapshot, set }) => async () => {
      const { dragShadowDriveId, dragShadowParentId, openedFoldersInfo } = await snapshot.getPromise(dragStateAtom);
      let openedFolders = [...openedFoldersInfo];
      let filteredOpenedFolders = [];
      if (dragShadowDriveId && dragShadowParentId) {
        let foldersOnPath = await snapshot.getPromise(
          nodePathSelector({
            driveId: dragShadowDriveId,
            folderId: dragShadowParentId
          })
        );
        let folderOnPathSet = new Set(
          foldersOnPath.map((obj) => obj.folderId)
        );
        for (let openedFolder of openedFolders) {
          const notFolderOnPath = !(openedFolder.driveId === dragShadowDriveId && folderOnPathSet.has(openedFolder.itemId));
          if (notFolderOnPath) {
            filteredOpenedFolders.push(openedFolder);
          }
        }
      } else {
        filteredOpenedFolders = openedFolders;
      }
      for (let openedFolder of filteredOpenedFolders) {
        set(folderOpenAtom(openedFolder), false);
      }
    }
  );
  return {
    insertDragShadow,
    removeDragShadow,
    replaceDragShadow,
    cleanUpDragShadow
  };
};
const PACKET_TYPES = /* @__PURE__ */ Object.create(null);
PACKET_TYPES["open"] = "0";
PACKET_TYPES["close"] = "1";
PACKET_TYPES["ping"] = "2";
PACKET_TYPES["pong"] = "3";
PACKET_TYPES["message"] = "4";
PACKET_TYPES["upgrade"] = "5";
PACKET_TYPES["noop"] = "6";
const PACKET_TYPES_REVERSE = /* @__PURE__ */ Object.create(null);
Object.keys(PACKET_TYPES).forEach((key) => {
  PACKET_TYPES_REVERSE[PACKET_TYPES[key]] = key;
});
const ERROR_PACKET = { type: "error", data: "parser error" };
const withNativeBlob$1 = typeof Blob === "function" || typeof Blob !== "undefined" && Object.prototype.toString.call(Blob) === "[object BlobConstructor]";
const withNativeArrayBuffer$2 = typeof ArrayBuffer === "function";
const isView$1 = (obj) => {
  return typeof ArrayBuffer.isView === "function" ? ArrayBuffer.isView(obj) : obj && obj.buffer instanceof ArrayBuffer;
};
const encodePacket = ({ type, data }, supportsBinary, callback) => {
  if (withNativeBlob$1 && data instanceof Blob) {
    if (supportsBinary) {
      return callback(data);
    } else {
      return encodeBlobAsBase64(data, callback);
    }
  } else if (withNativeArrayBuffer$2 && (data instanceof ArrayBuffer || isView$1(data))) {
    if (supportsBinary) {
      return callback(data);
    } else {
      return encodeBlobAsBase64(new Blob([data]), callback);
    }
  }
  return callback(PACKET_TYPES[type] + (data || ""));
};
const encodeBlobAsBase64 = (data, callback) => {
  const fileReader = new FileReader();
  fileReader.onload = function() {
    const content = fileReader.result.split(",")[1];
    callback("b" + content);
  };
  return fileReader.readAsDataURL(data);
};
const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
const lookup$1 = typeof Uint8Array === "undefined" ? [] : new Uint8Array(256);
for (let i2 = 0; i2 < chars.length; i2++) {
  lookup$1[chars.charCodeAt(i2)] = i2;
}
const decode$1 = (base64) => {
  let bufferLength = base64.length * 0.75, len = base64.length, i2, p = 0, encoded1, encoded2, encoded3, encoded4;
  if (base64[base64.length - 1] === "=") {
    bufferLength--;
    if (base64[base64.length - 2] === "=") {
      bufferLength--;
    }
  }
  const arraybuffer = new ArrayBuffer(bufferLength), bytes = new Uint8Array(arraybuffer);
  for (i2 = 0; i2 < len; i2 += 4) {
    encoded1 = lookup$1[base64.charCodeAt(i2)];
    encoded2 = lookup$1[base64.charCodeAt(i2 + 1)];
    encoded3 = lookup$1[base64.charCodeAt(i2 + 2)];
    encoded4 = lookup$1[base64.charCodeAt(i2 + 3)];
    bytes[p++] = encoded1 << 2 | encoded2 >> 4;
    bytes[p++] = (encoded2 & 15) << 4 | encoded3 >> 2;
    bytes[p++] = (encoded3 & 3) << 6 | encoded4 & 63;
  }
  return arraybuffer;
};
const withNativeArrayBuffer$1 = typeof ArrayBuffer === "function";
const decodePacket = (encodedPacket, binaryType) => {
  if (typeof encodedPacket !== "string") {
    return {
      type: "message",
      data: mapBinary(encodedPacket, binaryType)
    };
  }
  const type = encodedPacket.charAt(0);
  if (type === "b") {
    return {
      type: "message",
      data: decodeBase64Packet(encodedPacket.substring(1), binaryType)
    };
  }
  const packetType = PACKET_TYPES_REVERSE[type];
  if (!packetType) {
    return ERROR_PACKET;
  }
  return encodedPacket.length > 1 ? {
    type: PACKET_TYPES_REVERSE[type],
    data: encodedPacket.substring(1)
  } : {
    type: PACKET_TYPES_REVERSE[type]
  };
};
const decodeBase64Packet = (data, binaryType) => {
  if (withNativeArrayBuffer$1) {
    const decoded = decode$1(data);
    return mapBinary(decoded, binaryType);
  } else {
    return { base64: true, data };
  }
};
const mapBinary = (data, binaryType) => {
  switch (binaryType) {
    case "blob":
      return data instanceof ArrayBuffer ? new Blob([data]) : data;
    case "arraybuffer":
    default:
      return data;
  }
};
const SEPARATOR = String.fromCharCode(30);
const encodePayload = (packets, callback) => {
  const length2 = packets.length;
  const encodedPackets = new Array(length2);
  let count = 0;
  packets.forEach((packet, i2) => {
    encodePacket(packet, false, (encodedPacket) => {
      encodedPackets[i2] = encodedPacket;
      if (++count === length2) {
        callback(encodedPackets.join(SEPARATOR));
      }
    });
  });
};
const decodePayload = (encodedPayload, binaryType) => {
  const encodedPackets = encodedPayload.split(SEPARATOR);
  const packets = [];
  for (let i2 = 0; i2 < encodedPackets.length; i2++) {
    const decodedPacket = decodePacket(encodedPackets[i2], binaryType);
    packets.push(decodedPacket);
    if (decodedPacket.type === "error") {
      break;
    }
  }
  return packets;
};
const protocol$1 = 4;
function Emitter(obj) {
  if (obj)
    return mixin(obj);
}
function mixin(obj) {
  for (var key in Emitter.prototype) {
    obj[key] = Emitter.prototype[key];
  }
  return obj;
}
Emitter.prototype.on = Emitter.prototype.addEventListener = function(event, fn) {
  this._callbacks = this._callbacks || {};
  (this._callbacks["$" + event] = this._callbacks["$" + event] || []).push(fn);
  return this;
};
Emitter.prototype.once = function(event, fn) {
  function on2() {
    this.off(event, on2);
    fn.apply(this, arguments);
  }
  on2.fn = fn;
  this.on(event, on2);
  return this;
};
Emitter.prototype.off = Emitter.prototype.removeListener = Emitter.prototype.removeAllListeners = Emitter.prototype.removeEventListener = function(event, fn) {
  this._callbacks = this._callbacks || {};
  if (0 == arguments.length) {
    this._callbacks = {};
    return this;
  }
  var callbacks = this._callbacks["$" + event];
  if (!callbacks)
    return this;
  if (1 == arguments.length) {
    delete this._callbacks["$" + event];
    return this;
  }
  var cb;
  for (var i2 = 0; i2 < callbacks.length; i2++) {
    cb = callbacks[i2];
    if (cb === fn || cb.fn === fn) {
      callbacks.splice(i2, 1);
      break;
    }
  }
  if (callbacks.length === 0) {
    delete this._callbacks["$" + event];
  }
  return this;
};
Emitter.prototype.emit = function(event) {
  this._callbacks = this._callbacks || {};
  var args = new Array(arguments.length - 1), callbacks = this._callbacks["$" + event];
  for (var i2 = 1; i2 < arguments.length; i2++) {
    args[i2 - 1] = arguments[i2];
  }
  if (callbacks) {
    callbacks = callbacks.slice(0);
    for (var i2 = 0, len = callbacks.length; i2 < len; ++i2) {
      callbacks[i2].apply(this, args);
    }
  }
  return this;
};
Emitter.prototype.emitReserved = Emitter.prototype.emit;
Emitter.prototype.listeners = function(event) {
  this._callbacks = this._callbacks || {};
  return this._callbacks["$" + event] || [];
};
Emitter.prototype.hasListeners = function(event) {
  return !!this.listeners(event).length;
};
const globalThisShim = (() => {
  if (typeof self !== "undefined") {
    return self;
  } else if (typeof window !== "undefined") {
    return window;
  } else {
    return Function("return this")();
  }
})();
function pick(obj, ...attr) {
  return attr.reduce((acc, k) => {
    if (obj.hasOwnProperty(k)) {
      acc[k] = obj[k];
    }
    return acc;
  }, {});
}
const NATIVE_SET_TIMEOUT = setTimeout;
const NATIVE_CLEAR_TIMEOUT = clearTimeout;
function installTimerFunctions(obj, opts) {
  if (opts.useNativeTimers) {
    obj.setTimeoutFn = NATIVE_SET_TIMEOUT.bind(globalThisShim);
    obj.clearTimeoutFn = NATIVE_CLEAR_TIMEOUT.bind(globalThisShim);
  } else {
    obj.setTimeoutFn = setTimeout.bind(globalThisShim);
    obj.clearTimeoutFn = clearTimeout.bind(globalThisShim);
  }
}
const BASE64_OVERHEAD = 1.33;
function byteLength(obj) {
  if (typeof obj === "string") {
    return utf8Length(obj);
  }
  return Math.ceil((obj.byteLength || obj.size) * BASE64_OVERHEAD);
}
function utf8Length(str) {
  let c = 0, length2 = 0;
  for (let i2 = 0, l = str.length; i2 < l; i2++) {
    c = str.charCodeAt(i2);
    if (c < 128) {
      length2 += 1;
    } else if (c < 2048) {
      length2 += 2;
    } else if (c < 55296 || c >= 57344) {
      length2 += 3;
    } else {
      i2++;
      length2 += 4;
    }
  }
  return length2;
}
class TransportError extends Error {
  constructor(reason, description, context) {
    super(reason);
    this.description = description;
    this.context = context;
    this.type = "TransportError";
  }
}
class Transport extends Emitter {
  /**
   * Transport abstract constructor.
   *
   * @param {Object} options.
   * @api private
   */
  constructor(opts) {
    super();
    this.writable = false;
    installTimerFunctions(this, opts);
    this.opts = opts;
    this.query = opts.query;
    this.readyState = "";
    this.socket = opts.socket;
  }
  /**
   * Emits an error.
   *
   * @param {String} reason
   * @param description
   * @param context - the error context
   * @return {Transport} for chaining
   * @api protected
   */
  onError(reason, description, context) {
    super.emitReserved("error", new TransportError(reason, description, context));
    return this;
  }
  /**
   * Opens the transport.
   *
   * @api public
   */
  open() {
    if ("closed" === this.readyState || "" === this.readyState) {
      this.readyState = "opening";
      this.doOpen();
    }
    return this;
  }
  /**
   * Closes the transport.
   *
   * @api public
   */
  close() {
    if ("opening" === this.readyState || "open" === this.readyState) {
      this.doClose();
      this.onClose();
    }
    return this;
  }
  /**
   * Sends multiple packets.
   *
   * @param {Array} packets
   * @api public
   */
  send(packets) {
    if ("open" === this.readyState) {
      this.write(packets);
    }
  }
  /**
   * Called upon open
   *
   * @api protected
   */
  onOpen() {
    this.readyState = "open";
    this.writable = true;
    super.emitReserved("open");
  }
  /**
   * Called with data.
   *
   * @param {String} data
   * @api protected
   */
  onData(data) {
    const packet = decodePacket(data, this.socket.binaryType);
    this.onPacket(packet);
  }
  /**
   * Called with a decoded packet.
   *
   * @api protected
   */
  onPacket(packet) {
    super.emitReserved("packet", packet);
  }
  /**
   * Called upon close.
   *
   * @api protected
   */
  onClose(details) {
    this.readyState = "closed";
    super.emitReserved("close", details);
  }
}
const alphabet = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_".split(""), length = 64, map = {};
let seed = 0, i = 0, prev;
function encode$1(num) {
  let encoded = "";
  do {
    encoded = alphabet[num % length] + encoded;
    num = Math.floor(num / length);
  } while (num > 0);
  return encoded;
}
function yeast() {
  const now = encode$1(+/* @__PURE__ */ new Date());
  if (now !== prev)
    return seed = 0, prev = now;
  return now + "." + encode$1(seed++);
}
for (; i < length; i++)
  map[alphabet[i]] = i;
function encode(obj) {
  let str = "";
  for (let i2 in obj) {
    if (obj.hasOwnProperty(i2)) {
      if (str.length)
        str += "&";
      str += encodeURIComponent(i2) + "=" + encodeURIComponent(obj[i2]);
    }
  }
  return str;
}
function decode(qs) {
  let qry = {};
  let pairs = qs.split("&");
  for (let i2 = 0, l = pairs.length; i2 < l; i2++) {
    let pair = pairs[i2].split("=");
    qry[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1]);
  }
  return qry;
}
let value = false;
try {
  value = typeof XMLHttpRequest !== "undefined" && "withCredentials" in new XMLHttpRequest();
} catch (err) {
}
const hasCORS = value;
function XHR(opts) {
  const xdomain = opts.xdomain;
  try {
    if ("undefined" !== typeof XMLHttpRequest && (!xdomain || hasCORS)) {
      return new XMLHttpRequest();
    }
  } catch (e) {
  }
  if (!xdomain) {
    try {
      return new globalThisShim[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP");
    } catch (e) {
    }
  }
}
function empty() {
}
const hasXHR2 = function() {
  const xhr = new XHR({
    xdomain: false
  });
  return null != xhr.responseType;
}();
class Polling extends Transport {
  /**
   * XHR Polling constructor.
   *
   * @param {Object} opts
   * @api public
   */
  constructor(opts) {
    super(opts);
    this.polling = false;
    if (typeof location !== "undefined") {
      const isSSL = "https:" === location.protocol;
      let port = location.port;
      if (!port) {
        port = isSSL ? "443" : "80";
      }
      this.xd = typeof location !== "undefined" && opts.hostname !== location.hostname || port !== opts.port;
      this.xs = opts.secure !== isSSL;
    }
    const forceBase64 = opts && opts.forceBase64;
    this.supportsBinary = hasXHR2 && !forceBase64;
  }
  /**
   * Transport name.
   */
  get name() {
    return "polling";
  }
  /**
   * Opens the socket (triggers polling). We write a PING message to determine
   * when the transport is open.
   *
   * @api private
   */
  doOpen() {
    this.poll();
  }
  /**
   * Pauses polling.
   *
   * @param {Function} callback upon buffers are flushed and transport is paused
   * @api private
   */
  pause(onPause) {
    this.readyState = "pausing";
    const pause = () => {
      this.readyState = "paused";
      onPause();
    };
    if (this.polling || !this.writable) {
      let total = 0;
      if (this.polling) {
        total++;
        this.once("pollComplete", function() {
          --total || pause();
        });
      }
      if (!this.writable) {
        total++;
        this.once("drain", function() {
          --total || pause();
        });
      }
    } else {
      pause();
    }
  }
  /**
   * Starts polling cycle.
   *
   * @api public
   */
  poll() {
    this.polling = true;
    this.doPoll();
    this.emitReserved("poll");
  }
  /**
   * Overloads onData to detect payloads.
   *
   * @api private
   */
  onData(data) {
    const callback = (packet) => {
      if ("opening" === this.readyState && packet.type === "open") {
        this.onOpen();
      }
      if ("close" === packet.type) {
        this.onClose({ description: "transport closed by the server" });
        return false;
      }
      this.onPacket(packet);
    };
    decodePayload(data, this.socket.binaryType).forEach(callback);
    if ("closed" !== this.readyState) {
      this.polling = false;
      this.emitReserved("pollComplete");
      if ("open" === this.readyState) {
        this.poll();
      }
    }
  }
  /**
   * For polling, send a close packet.
   *
   * @api private
   */
  doClose() {
    const close = () => {
      this.write([{ type: "close" }]);
    };
    if ("open" === this.readyState) {
      close();
    } else {
      this.once("open", close);
    }
  }
  /**
   * Writes a packets payload.
   *
   * @param {Array} data packets
   * @param {Function} drain callback
   * @api private
   */
  write(packets) {
    this.writable = false;
    encodePayload(packets, (data) => {
      this.doWrite(data, () => {
        this.writable = true;
        this.emitReserved("drain");
      });
    });
  }
  /**
   * Generates uri for connection.
   *
   * @api private
   */
  uri() {
    let query = this.query || {};
    const schema = this.opts.secure ? "https" : "http";
    let port = "";
    if (false !== this.opts.timestampRequests) {
      query[this.opts.timestampParam] = yeast();
    }
    if (!this.supportsBinary && !query.sid) {
      query.b64 = 1;
    }
    if (this.opts.port && ("https" === schema && Number(this.opts.port) !== 443 || "http" === schema && Number(this.opts.port) !== 80)) {
      port = ":" + this.opts.port;
    }
    const encodedQuery = encode(query);
    const ipv6 = this.opts.hostname.indexOf(":") !== -1;
    return schema + "://" + (ipv6 ? "[" + this.opts.hostname + "]" : this.opts.hostname) + port + this.opts.path + (encodedQuery.length ? "?" + encodedQuery : "");
  }
  /**
   * Creates a request.
   *
   * @param {String} method
   * @api private
   */
  request(opts = {}) {
    Object.assign(opts, { xd: this.xd, xs: this.xs }, this.opts);
    return new Request(this.uri(), opts);
  }
  /**
   * Sends data.
   *
   * @param {String} data to send.
   * @param {Function} called upon flush.
   * @api private
   */
  doWrite(data, fn) {
    const req = this.request({
      method: "POST",
      data
    });
    req.on("success", fn);
    req.on("error", (xhrStatus, context) => {
      this.onError("xhr post error", xhrStatus, context);
    });
  }
  /**
   * Starts a poll cycle.
   *
   * @api private
   */
  doPoll() {
    const req = this.request();
    req.on("data", this.onData.bind(this));
    req.on("error", (xhrStatus, context) => {
      this.onError("xhr poll error", xhrStatus, context);
    });
    this.pollXhr = req;
  }
}
class Request extends Emitter {
  /**
   * Request constructor
   *
   * @param {Object} options
   * @api public
   */
  constructor(uri, opts) {
    super();
    installTimerFunctions(this, opts);
    this.opts = opts;
    this.method = opts.method || "GET";
    this.uri = uri;
    this.async = false !== opts.async;
    this.data = void 0 !== opts.data ? opts.data : null;
    this.create();
  }
  /**
   * Creates the XHR object and sends the request.
   *
   * @api private
   */
  create() {
    const opts = pick(this.opts, "agent", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "autoUnref");
    opts.xdomain = !!this.opts.xd;
    opts.xscheme = !!this.opts.xs;
    const xhr = this.xhr = new XHR(opts);
    try {
      xhr.open(this.method, this.uri, this.async);
      try {
        if (this.opts.extraHeaders) {
          xhr.setDisableHeaderCheck && xhr.setDisableHeaderCheck(true);
          for (let i2 in this.opts.extraHeaders) {
            if (this.opts.extraHeaders.hasOwnProperty(i2)) {
              xhr.setRequestHeader(i2, this.opts.extraHeaders[i2]);
            }
          }
        }
      } catch (e) {
      }
      if ("POST" === this.method) {
        try {
          xhr.setRequestHeader("Content-type", "text/plain;charset=UTF-8");
        } catch (e) {
        }
      }
      try {
        xhr.setRequestHeader("Accept", "*/*");
      } catch (e) {
      }
      if ("withCredentials" in xhr) {
        xhr.withCredentials = this.opts.withCredentials;
      }
      if (this.opts.requestTimeout) {
        xhr.timeout = this.opts.requestTimeout;
      }
      xhr.onreadystatechange = () => {
        if (4 !== xhr.readyState)
          return;
        if (200 === xhr.status || 1223 === xhr.status) {
          this.onLoad();
        } else {
          this.setTimeoutFn(() => {
            this.onError(typeof xhr.status === "number" ? xhr.status : 0);
          }, 0);
        }
      };
      xhr.send(this.data);
    } catch (e) {
      this.setTimeoutFn(() => {
        this.onError(e);
      }, 0);
      return;
    }
    if (typeof document !== "undefined") {
      this.index = Request.requestsCount++;
      Request.requests[this.index] = this;
    }
  }
  /**
   * Called upon error.
   *
   * @api private
   */
  onError(err) {
    this.emitReserved("error", err, this.xhr);
    this.cleanup(true);
  }
  /**
   * Cleans up house.
   *
   * @api private
   */
  cleanup(fromError) {
    if ("undefined" === typeof this.xhr || null === this.xhr) {
      return;
    }
    this.xhr.onreadystatechange = empty;
    if (fromError) {
      try {
        this.xhr.abort();
      } catch (e) {
      }
    }
    if (typeof document !== "undefined") {
      delete Request.requests[this.index];
    }
    this.xhr = null;
  }
  /**
   * Called upon load.
   *
   * @api private
   */
  onLoad() {
    const data = this.xhr.responseText;
    if (data !== null) {
      this.emitReserved("data", data);
      this.emitReserved("success");
      this.cleanup();
    }
  }
  /**
   * Aborts the request.
   *
   * @api public
   */
  abort() {
    this.cleanup();
  }
}
Request.requestsCount = 0;
Request.requests = {};
if (typeof document !== "undefined") {
  if (typeof attachEvent === "function") {
    attachEvent("onunload", unloadHandler);
  } else if (typeof addEventListener === "function") {
    const terminationEvent = "onpagehide" in globalThisShim ? "pagehide" : "unload";
    addEventListener(terminationEvent, unloadHandler, false);
  }
}
function unloadHandler() {
  for (let i2 in Request.requests) {
    if (Request.requests.hasOwnProperty(i2)) {
      Request.requests[i2].abort();
    }
  }
}
const nextTick = (() => {
  const isPromiseAvailable = typeof Promise === "function" && typeof Promise.resolve === "function";
  if (isPromiseAvailable) {
    return (cb) => Promise.resolve().then(cb);
  } else {
    return (cb, setTimeoutFn) => setTimeoutFn(cb, 0);
  }
})();
const WebSocket = globalThisShim.WebSocket || globalThisShim.MozWebSocket;
const usingBrowserWebSocket = true;
const defaultBinaryType = "arraybuffer";
const isReactNative = typeof navigator !== "undefined" && typeof navigator.product === "string" && navigator.product.toLowerCase() === "reactnative";
class WS extends Transport {
  /**
   * WebSocket transport constructor.
   *
   * @api {Object} connection options
   * @api public
   */
  constructor(opts) {
    super(opts);
    this.supportsBinary = !opts.forceBase64;
  }
  /**
   * Transport name.
   *
   * @api public
   */
  get name() {
    return "websocket";
  }
  /**
   * Opens socket.
   *
   * @api private
   */
  doOpen() {
    if (!this.check()) {
      return;
    }
    const uri = this.uri();
    const protocols = this.opts.protocols;
    const opts = isReactNative ? {} : pick(this.opts, "agent", "perMessageDeflate", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "localAddress", "protocolVersion", "origin", "maxPayload", "family", "checkServerIdentity");
    if (this.opts.extraHeaders) {
      opts.headers = this.opts.extraHeaders;
    }
    try {
      this.ws = usingBrowserWebSocket && !isReactNative ? protocols ? new WebSocket(uri, protocols) : new WebSocket(uri) : new WebSocket(uri, protocols, opts);
    } catch (err) {
      return this.emitReserved("error", err);
    }
    this.ws.binaryType = this.socket.binaryType || defaultBinaryType;
    this.addEventListeners();
  }
  /**
   * Adds event listeners to the socket
   *
   * @api private
   */
  addEventListeners() {
    this.ws.onopen = () => {
      if (this.opts.autoUnref) {
        this.ws._socket.unref();
      }
      this.onOpen();
    };
    this.ws.onclose = (closeEvent) => this.onClose({
      description: "websocket connection closed",
      context: closeEvent
    });
    this.ws.onmessage = (ev) => this.onData(ev.data);
    this.ws.onerror = (e) => this.onError("websocket error", e);
  }
  /**
   * Writes data to socket.
   *
   * @param {Array} array of packets.
   * @api private
   */
  write(packets) {
    this.writable = false;
    for (let i2 = 0; i2 < packets.length; i2++) {
      const packet = packets[i2];
      const lastPacket = i2 === packets.length - 1;
      encodePacket(packet, this.supportsBinary, (data) => {
        const opts = {};
        try {
          if (usingBrowserWebSocket) {
            this.ws.send(data);
          }
        } catch (e) {
        }
        if (lastPacket) {
          nextTick(() => {
            this.writable = true;
            this.emitReserved("drain");
          }, this.setTimeoutFn);
        }
      });
    }
  }
  /**
   * Closes socket.
   *
   * @api private
   */
  doClose() {
    if (typeof this.ws !== "undefined") {
      this.ws.close();
      this.ws = null;
    }
  }
  /**
   * Generates uri for connection.
   *
   * @api private
   */
  uri() {
    let query = this.query || {};
    const schema = this.opts.secure ? "wss" : "ws";
    let port = "";
    if (this.opts.port && ("wss" === schema && Number(this.opts.port) !== 443 || "ws" === schema && Number(this.opts.port) !== 80)) {
      port = ":" + this.opts.port;
    }
    if (this.opts.timestampRequests) {
      query[this.opts.timestampParam] = yeast();
    }
    if (!this.supportsBinary) {
      query.b64 = 1;
    }
    const encodedQuery = encode(query);
    const ipv6 = this.opts.hostname.indexOf(":") !== -1;
    return schema + "://" + (ipv6 ? "[" + this.opts.hostname + "]" : this.opts.hostname) + port + this.opts.path + (encodedQuery.length ? "?" + encodedQuery : "");
  }
  /**
   * Feature detection for WebSocket.
   *
   * @return {Boolean} whether this transport is available.
   * @api public
   */
  check() {
    return !!WebSocket;
  }
}
const transports = {
  websocket: WS,
  polling: Polling
};
const re = /^(?:(?![^:@]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/;
const parts = [
  "source",
  "protocol",
  "authority",
  "userInfo",
  "user",
  "password",
  "host",
  "port",
  "relative",
  "path",
  "directory",
  "file",
  "query",
  "anchor"
];
function parse(str) {
  const src = str, b = str.indexOf("["), e = str.indexOf("]");
  if (b != -1 && e != -1) {
    str = str.substring(0, b) + str.substring(b, e).replace(/:/g, ";") + str.substring(e, str.length);
  }
  let m = re.exec(str || ""), uri = {}, i2 = 14;
  while (i2--) {
    uri[parts[i2]] = m[i2] || "";
  }
  if (b != -1 && e != -1) {
    uri.source = src;
    uri.host = uri.host.substring(1, uri.host.length - 1).replace(/;/g, ":");
    uri.authority = uri.authority.replace("[", "").replace("]", "").replace(/;/g, ":");
    uri.ipv6uri = true;
  }
  uri.pathNames = pathNames(uri, uri["path"]);
  uri.queryKey = queryKey(uri, uri["query"]);
  return uri;
}
function pathNames(obj, path) {
  const regx = /\/{2,9}/g, names = path.replace(regx, "/").split("/");
  if (path.slice(0, 1) == "/" || path.length === 0) {
    names.splice(0, 1);
  }
  if (path.slice(-1) == "/") {
    names.splice(names.length - 1, 1);
  }
  return names;
}
function queryKey(uri, query) {
  const data = {};
  query.replace(/(?:^|&)([^&=]*)=?([^&]*)/g, function($0, $1, $2) {
    if ($1) {
      data[$1] = $2;
    }
  });
  return data;
}
let Socket$1 = class Socket extends Emitter {
  /**
   * Socket constructor.
   *
   * @param {String|Object} uri or options
   * @param {Object} opts - options
   * @api public
   */
  constructor(uri, opts = {}) {
    super();
    if (uri && "object" === typeof uri) {
      opts = uri;
      uri = null;
    }
    if (uri) {
      uri = parse(uri);
      opts.hostname = uri.host;
      opts.secure = uri.protocol === "https" || uri.protocol === "wss";
      opts.port = uri.port;
      if (uri.query)
        opts.query = uri.query;
    } else if (opts.host) {
      opts.hostname = parse(opts.host).host;
    }
    installTimerFunctions(this, opts);
    this.secure = null != opts.secure ? opts.secure : typeof location !== "undefined" && "https:" === location.protocol;
    if (opts.hostname && !opts.port) {
      opts.port = this.secure ? "443" : "80";
    }
    this.hostname = opts.hostname || (typeof location !== "undefined" ? location.hostname : "localhost");
    this.port = opts.port || (typeof location !== "undefined" && location.port ? location.port : this.secure ? "443" : "80");
    this.transports = opts.transports || ["polling", "websocket"];
    this.readyState = "";
    this.writeBuffer = [];
    this.prevBufferLen = 0;
    this.opts = Object.assign({
      path: "/engine.io",
      agent: false,
      withCredentials: false,
      upgrade: true,
      timestampParam: "t",
      rememberUpgrade: false,
      rejectUnauthorized: true,
      perMessageDeflate: {
        threshold: 1024
      },
      transportOptions: {},
      closeOnBeforeunload: true
    }, opts);
    this.opts.path = this.opts.path.replace(/\/$/, "") + "/";
    if (typeof this.opts.query === "string") {
      this.opts.query = decode(this.opts.query);
    }
    this.id = null;
    this.upgrades = null;
    this.pingInterval = null;
    this.pingTimeout = null;
    this.pingTimeoutTimer = null;
    if (typeof addEventListener === "function") {
      if (this.opts.closeOnBeforeunload) {
        this.beforeunloadEventListener = () => {
          if (this.transport) {
            this.transport.removeAllListeners();
            this.transport.close();
          }
        };
        addEventListener("beforeunload", this.beforeunloadEventListener, false);
      }
      if (this.hostname !== "localhost") {
        this.offlineEventListener = () => {
          this.onClose("transport close", {
            description: "network connection lost"
          });
        };
        addEventListener("offline", this.offlineEventListener, false);
      }
    }
    this.open();
  }
  /**
   * Creates transport of the given type.
   *
   * @param {String} transport name
   * @return {Transport}
   * @api private
   */
  createTransport(name) {
    const query = Object.assign({}, this.opts.query);
    query.EIO = protocol$1;
    query.transport = name;
    if (this.id)
      query.sid = this.id;
    const opts = Object.assign({}, this.opts.transportOptions[name], this.opts, {
      query,
      socket: this,
      hostname: this.hostname,
      secure: this.secure,
      port: this.port
    });
    return new transports[name](opts);
  }
  /**
   * Initializes transport to use and starts probe.
   *
   * @api private
   */
  open() {
    let transport;
    if (this.opts.rememberUpgrade && Socket.priorWebsocketSuccess && this.transports.indexOf("websocket") !== -1) {
      transport = "websocket";
    } else if (0 === this.transports.length) {
      this.setTimeoutFn(() => {
        this.emitReserved("error", "No transports available");
      }, 0);
      return;
    } else {
      transport = this.transports[0];
    }
    this.readyState = "opening";
    try {
      transport = this.createTransport(transport);
    } catch (e) {
      this.transports.shift();
      this.open();
      return;
    }
    transport.open();
    this.setTransport(transport);
  }
  /**
   * Sets the current transport. Disables the existing one (if any).
   *
   * @api private
   */
  setTransport(transport) {
    if (this.transport) {
      this.transport.removeAllListeners();
    }
    this.transport = transport;
    transport.on("drain", this.onDrain.bind(this)).on("packet", this.onPacket.bind(this)).on("error", this.onError.bind(this)).on("close", (reason) => this.onClose("transport close", reason));
  }
  /**
   * Probes a transport.
   *
   * @param {String} transport name
   * @api private
   */
  probe(name) {
    let transport = this.createTransport(name);
    let failed = false;
    Socket.priorWebsocketSuccess = false;
    const onTransportOpen = () => {
      if (failed)
        return;
      transport.send([{ type: "ping", data: "probe" }]);
      transport.once("packet", (msg) => {
        if (failed)
          return;
        if ("pong" === msg.type && "probe" === msg.data) {
          this.upgrading = true;
          this.emitReserved("upgrading", transport);
          if (!transport)
            return;
          Socket.priorWebsocketSuccess = "websocket" === transport.name;
          this.transport.pause(() => {
            if (failed)
              return;
            if ("closed" === this.readyState)
              return;
            cleanup();
            this.setTransport(transport);
            transport.send([{ type: "upgrade" }]);
            this.emitReserved("upgrade", transport);
            transport = null;
            this.upgrading = false;
            this.flush();
          });
        } else {
          const err = new Error("probe error");
          err.transport = transport.name;
          this.emitReserved("upgradeError", err);
        }
      });
    };
    function freezeTransport() {
      if (failed)
        return;
      failed = true;
      cleanup();
      transport.close();
      transport = null;
    }
    const onerror = (err) => {
      const error = new Error("probe error: " + err);
      error.transport = transport.name;
      freezeTransport();
      this.emitReserved("upgradeError", error);
    };
    function onTransportClose() {
      onerror("transport closed");
    }
    function onclose() {
      onerror("socket closed");
    }
    function onupgrade(to) {
      if (transport && to.name !== transport.name) {
        freezeTransport();
      }
    }
    const cleanup = () => {
      transport.removeListener("open", onTransportOpen);
      transport.removeListener("error", onerror);
      transport.removeListener("close", onTransportClose);
      this.off("close", onclose);
      this.off("upgrading", onupgrade);
    };
    transport.once("open", onTransportOpen);
    transport.once("error", onerror);
    transport.once("close", onTransportClose);
    this.once("close", onclose);
    this.once("upgrading", onupgrade);
    transport.open();
  }
  /**
   * Called when connection is deemed open.
   *
   * @api private
   */
  onOpen() {
    this.readyState = "open";
    Socket.priorWebsocketSuccess = "websocket" === this.transport.name;
    this.emitReserved("open");
    this.flush();
    if ("open" === this.readyState && this.opts.upgrade && this.transport.pause) {
      let i2 = 0;
      const l = this.upgrades.length;
      for (; i2 < l; i2++) {
        this.probe(this.upgrades[i2]);
      }
    }
  }
  /**
   * Handles a packet.
   *
   * @api private
   */
  onPacket(packet) {
    if ("opening" === this.readyState || "open" === this.readyState || "closing" === this.readyState) {
      this.emitReserved("packet", packet);
      this.emitReserved("heartbeat");
      switch (packet.type) {
        case "open":
          this.onHandshake(JSON.parse(packet.data));
          break;
        case "ping":
          this.resetPingTimeout();
          this.sendPacket("pong");
          this.emitReserved("ping");
          this.emitReserved("pong");
          break;
        case "error":
          const err = new Error("server error");
          err.code = packet.data;
          this.onError(err);
          break;
        case "message":
          this.emitReserved("data", packet.data);
          this.emitReserved("message", packet.data);
          break;
      }
    }
  }
  /**
   * Called upon handshake completion.
   *
   * @param {Object} data - handshake obj
   * @api private
   */
  onHandshake(data) {
    this.emitReserved("handshake", data);
    this.id = data.sid;
    this.transport.query.sid = data.sid;
    this.upgrades = this.filterUpgrades(data.upgrades);
    this.pingInterval = data.pingInterval;
    this.pingTimeout = data.pingTimeout;
    this.maxPayload = data.maxPayload;
    this.onOpen();
    if ("closed" === this.readyState)
      return;
    this.resetPingTimeout();
  }
  /**
   * Sets and resets ping timeout timer based on server pings.
   *
   * @api private
   */
  resetPingTimeout() {
    this.clearTimeoutFn(this.pingTimeoutTimer);
    this.pingTimeoutTimer = this.setTimeoutFn(() => {
      this.onClose("ping timeout");
    }, this.pingInterval + this.pingTimeout);
    if (this.opts.autoUnref) {
      this.pingTimeoutTimer.unref();
    }
  }
  /**
   * Called on `drain` event
   *
   * @api private
   */
  onDrain() {
    this.writeBuffer.splice(0, this.prevBufferLen);
    this.prevBufferLen = 0;
    if (0 === this.writeBuffer.length) {
      this.emitReserved("drain");
    } else {
      this.flush();
    }
  }
  /**
   * Flush write buffers.
   *
   * @api private
   */
  flush() {
    if ("closed" !== this.readyState && this.transport.writable && !this.upgrading && this.writeBuffer.length) {
      const packets = this.getWritablePackets();
      this.transport.send(packets);
      this.prevBufferLen = packets.length;
      this.emitReserved("flush");
    }
  }
  /**
   * Ensure the encoded size of the writeBuffer is below the maxPayload value sent by the server (only for HTTP
   * long-polling)
   *
   * @private
   */
  getWritablePackets() {
    const shouldCheckPayloadSize = this.maxPayload && this.transport.name === "polling" && this.writeBuffer.length > 1;
    if (!shouldCheckPayloadSize) {
      return this.writeBuffer;
    }
    let payloadSize = 1;
    for (let i2 = 0; i2 < this.writeBuffer.length; i2++) {
      const data = this.writeBuffer[i2].data;
      if (data) {
        payloadSize += byteLength(data);
      }
      if (i2 > 0 && payloadSize > this.maxPayload) {
        return this.writeBuffer.slice(0, i2);
      }
      payloadSize += 2;
    }
    return this.writeBuffer;
  }
  /**
   * Sends a message.
   *
   * @param {String} message.
   * @param {Function} callback function.
   * @param {Object} options.
   * @return {Socket} for chaining.
   * @api public
   */
  write(msg, options, fn) {
    this.sendPacket("message", msg, options, fn);
    return this;
  }
  send(msg, options, fn) {
    this.sendPacket("message", msg, options, fn);
    return this;
  }
  /**
   * Sends a packet.
   *
   * @param {String} packet type.
   * @param {String} data.
   * @param {Object} options.
   * @param {Function} callback function.
   * @api private
   */
  sendPacket(type, data, options, fn) {
    if ("function" === typeof data) {
      fn = data;
      data = void 0;
    }
    if ("function" === typeof options) {
      fn = options;
      options = null;
    }
    if ("closing" === this.readyState || "closed" === this.readyState) {
      return;
    }
    options = options || {};
    options.compress = false !== options.compress;
    const packet = {
      type,
      data,
      options
    };
    this.emitReserved("packetCreate", packet);
    this.writeBuffer.push(packet);
    if (fn)
      this.once("flush", fn);
    this.flush();
  }
  /**
   * Closes the connection.
   *
   * @api public
   */
  close() {
    const close = () => {
      this.onClose("forced close");
      this.transport.close();
    };
    const cleanupAndClose = () => {
      this.off("upgrade", cleanupAndClose);
      this.off("upgradeError", cleanupAndClose);
      close();
    };
    const waitForUpgrade = () => {
      this.once("upgrade", cleanupAndClose);
      this.once("upgradeError", cleanupAndClose);
    };
    if ("opening" === this.readyState || "open" === this.readyState) {
      this.readyState = "closing";
      if (this.writeBuffer.length) {
        this.once("drain", () => {
          if (this.upgrading) {
            waitForUpgrade();
          } else {
            close();
          }
        });
      } else if (this.upgrading) {
        waitForUpgrade();
      } else {
        close();
      }
    }
    return this;
  }
  /**
   * Called upon transport error
   *
   * @api private
   */
  onError(err) {
    Socket.priorWebsocketSuccess = false;
    this.emitReserved("error", err);
    this.onClose("transport error", err);
  }
  /**
   * Called upon transport close.
   *
   * @api private
   */
  onClose(reason, description) {
    if ("opening" === this.readyState || "open" === this.readyState || "closing" === this.readyState) {
      this.clearTimeoutFn(this.pingTimeoutTimer);
      this.transport.removeAllListeners("close");
      this.transport.close();
      this.transport.removeAllListeners();
      if (typeof removeEventListener === "function") {
        removeEventListener("beforeunload", this.beforeunloadEventListener, false);
        removeEventListener("offline", this.offlineEventListener, false);
      }
      this.readyState = "closed";
      this.id = null;
      this.emitReserved("close", reason, description);
      this.writeBuffer = [];
      this.prevBufferLen = 0;
    }
  }
  /**
   * Filters upgrades, returning only those matching client transports.
   *
   * @param {Array} server upgrades
   * @api private
   *
   */
  filterUpgrades(upgrades) {
    const filteredUpgrades = [];
    let i2 = 0;
    const j = upgrades.length;
    for (; i2 < j; i2++) {
      if (~this.transports.indexOf(upgrades[i2]))
        filteredUpgrades.push(upgrades[i2]);
    }
    return filteredUpgrades;
  }
};
Socket$1.protocol = protocol$1;
function url(uri, path = "", loc) {
  let obj = uri;
  loc = loc || typeof location !== "undefined" && location;
  if (null == uri)
    uri = loc.protocol + "//" + loc.host;
  if (typeof uri === "string") {
    if ("/" === uri.charAt(0)) {
      if ("/" === uri.charAt(1)) {
        uri = loc.protocol + uri;
      } else {
        uri = loc.host + uri;
      }
    }
    if (!/^(https?|wss?):\/\//.test(uri)) {
      if ("undefined" !== typeof loc) {
        uri = loc.protocol + "//" + uri;
      } else {
        uri = "https://" + uri;
      }
    }
    obj = parse(uri);
  }
  if (!obj.port) {
    if (/^(http|ws)$/.test(obj.protocol)) {
      obj.port = "80";
    } else if (/^(http|ws)s$/.test(obj.protocol)) {
      obj.port = "443";
    }
  }
  obj.path = obj.path || "/";
  const ipv6 = obj.host.indexOf(":") !== -1;
  const host = ipv6 ? "[" + obj.host + "]" : obj.host;
  obj.id = obj.protocol + "://" + host + ":" + obj.port + path;
  obj.href = obj.protocol + "://" + host + (loc && loc.port === obj.port ? "" : ":" + obj.port);
  return obj;
}
const withNativeArrayBuffer = typeof ArrayBuffer === "function";
const isView = (obj) => {
  return typeof ArrayBuffer.isView === "function" ? ArrayBuffer.isView(obj) : obj.buffer instanceof ArrayBuffer;
};
const toString = Object.prototype.toString;
const withNativeBlob = typeof Blob === "function" || typeof Blob !== "undefined" && toString.call(Blob) === "[object BlobConstructor]";
const withNativeFile = typeof File === "function" || typeof File !== "undefined" && toString.call(File) === "[object FileConstructor]";
function isBinary(obj) {
  return withNativeArrayBuffer && (obj instanceof ArrayBuffer || isView(obj)) || withNativeBlob && obj instanceof Blob || withNativeFile && obj instanceof File;
}
function hasBinary(obj, toJSON) {
  if (!obj || typeof obj !== "object") {
    return false;
  }
  if (Array.isArray(obj)) {
    for (let i2 = 0, l = obj.length; i2 < l; i2++) {
      if (hasBinary(obj[i2])) {
        return true;
      }
    }
    return false;
  }
  if (isBinary(obj)) {
    return true;
  }
  if (obj.toJSON && typeof obj.toJSON === "function" && arguments.length === 1) {
    return hasBinary(obj.toJSON(), true);
  }
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key) && hasBinary(obj[key])) {
      return true;
    }
  }
  return false;
}
function deconstructPacket(packet) {
  const buffers = [];
  const packetData = packet.data;
  const pack = packet;
  pack.data = _deconstructPacket(packetData, buffers);
  pack.attachments = buffers.length;
  return { packet: pack, buffers };
}
function _deconstructPacket(data, buffers) {
  if (!data)
    return data;
  if (isBinary(data)) {
    const placeholder = { _placeholder: true, num: buffers.length };
    buffers.push(data);
    return placeholder;
  } else if (Array.isArray(data)) {
    const newData = new Array(data.length);
    for (let i2 = 0; i2 < data.length; i2++) {
      newData[i2] = _deconstructPacket(data[i2], buffers);
    }
    return newData;
  } else if (typeof data === "object" && !(data instanceof Date)) {
    const newData = {};
    for (const key in data) {
      if (Object.prototype.hasOwnProperty.call(data, key)) {
        newData[key] = _deconstructPacket(data[key], buffers);
      }
    }
    return newData;
  }
  return data;
}
function reconstructPacket(packet, buffers) {
  packet.data = _reconstructPacket(packet.data, buffers);
  packet.attachments = void 0;
  return packet;
}
function _reconstructPacket(data, buffers) {
  if (!data)
    return data;
  if (data && data._placeholder === true) {
    const isIndexValid = typeof data.num === "number" && data.num >= 0 && data.num < buffers.length;
    if (isIndexValid) {
      return buffers[data.num];
    } else {
      throw new Error("illegal attachments");
    }
  } else if (Array.isArray(data)) {
    for (let i2 = 0; i2 < data.length; i2++) {
      data[i2] = _reconstructPacket(data[i2], buffers);
    }
  } else if (typeof data === "object") {
    for (const key in data) {
      if (Object.prototype.hasOwnProperty.call(data, key)) {
        data[key] = _reconstructPacket(data[key], buffers);
      }
    }
  }
  return data;
}
const protocol = 5;
var PacketType;
(function(PacketType2) {
  PacketType2[PacketType2["CONNECT"] = 0] = "CONNECT";
  PacketType2[PacketType2["DISCONNECT"] = 1] = "DISCONNECT";
  PacketType2[PacketType2["EVENT"] = 2] = "EVENT";
  PacketType2[PacketType2["ACK"] = 3] = "ACK";
  PacketType2[PacketType2["CONNECT_ERROR"] = 4] = "CONNECT_ERROR";
  PacketType2[PacketType2["BINARY_EVENT"] = 5] = "BINARY_EVENT";
  PacketType2[PacketType2["BINARY_ACK"] = 6] = "BINARY_ACK";
})(PacketType || (PacketType = {}));
class Encoder {
  /**
   * Encoder constructor
   *
   * @param {function} replacer - custom replacer to pass down to JSON.parse
   */
  constructor(replacer) {
    this.replacer = replacer;
  }
  /**
   * Encode a packet as a single string if non-binary, or as a
   * buffer sequence, depending on packet type.
   *
   * @param {Object} obj - packet object
   */
  encode(obj) {
    if (obj.type === PacketType.EVENT || obj.type === PacketType.ACK) {
      if (hasBinary(obj)) {
        obj.type = obj.type === PacketType.EVENT ? PacketType.BINARY_EVENT : PacketType.BINARY_ACK;
        return this.encodeAsBinary(obj);
      }
    }
    return [this.encodeAsString(obj)];
  }
  /**
   * Encode packet as string.
   */
  encodeAsString(obj) {
    let str = "" + obj.type;
    if (obj.type === PacketType.BINARY_EVENT || obj.type === PacketType.BINARY_ACK) {
      str += obj.attachments + "-";
    }
    if (obj.nsp && "/" !== obj.nsp) {
      str += obj.nsp + ",";
    }
    if (null != obj.id) {
      str += obj.id;
    }
    if (null != obj.data) {
      str += JSON.stringify(obj.data, this.replacer);
    }
    return str;
  }
  /**
   * Encode packet as 'buffer sequence' by removing blobs, and
   * deconstructing packet into object with placeholders and
   * a list of buffers.
   */
  encodeAsBinary(obj) {
    const deconstruction = deconstructPacket(obj);
    const pack = this.encodeAsString(deconstruction.packet);
    const buffers = deconstruction.buffers;
    buffers.unshift(pack);
    return buffers;
  }
}
class Decoder extends Emitter {
  /**
   * Decoder constructor
   *
   * @param {function} reviver - custom reviver to pass down to JSON.stringify
   */
  constructor(reviver) {
    super();
    this.reviver = reviver;
  }
  /**
   * Decodes an encoded packet string into packet JSON.
   *
   * @param {String} obj - encoded packet
   */
  add(obj) {
    let packet;
    if (typeof obj === "string") {
      if (this.reconstructor) {
        throw new Error("got plaintext data when reconstructing a packet");
      }
      packet = this.decodeString(obj);
      if (packet.type === PacketType.BINARY_EVENT || packet.type === PacketType.BINARY_ACK) {
        this.reconstructor = new BinaryReconstructor(packet);
        if (packet.attachments === 0) {
          super.emitReserved("decoded", packet);
        }
      } else {
        super.emitReserved("decoded", packet);
      }
    } else if (isBinary(obj) || obj.base64) {
      if (!this.reconstructor) {
        throw new Error("got binary data when not reconstructing a packet");
      } else {
        packet = this.reconstructor.takeBinaryData(obj);
        if (packet) {
          this.reconstructor = null;
          super.emitReserved("decoded", packet);
        }
      }
    } else {
      throw new Error("Unknown type: " + obj);
    }
  }
  /**
   * Decode a packet String (JSON data)
   *
   * @param {String} str
   * @return {Object} packet
   */
  decodeString(str) {
    let i2 = 0;
    const p = {
      type: Number(str.charAt(0))
    };
    if (PacketType[p.type] === void 0) {
      throw new Error("unknown packet type " + p.type);
    }
    if (p.type === PacketType.BINARY_EVENT || p.type === PacketType.BINARY_ACK) {
      const start = i2 + 1;
      while (str.charAt(++i2) !== "-" && i2 != str.length) {
      }
      const buf = str.substring(start, i2);
      if (buf != Number(buf) || str.charAt(i2) !== "-") {
        throw new Error("Illegal attachments");
      }
      p.attachments = Number(buf);
    }
    if ("/" === str.charAt(i2 + 1)) {
      const start = i2 + 1;
      while (++i2) {
        const c = str.charAt(i2);
        if ("," === c)
          break;
        if (i2 === str.length)
          break;
      }
      p.nsp = str.substring(start, i2);
    } else {
      p.nsp = "/";
    }
    const next = str.charAt(i2 + 1);
    if ("" !== next && Number(next) == next) {
      const start = i2 + 1;
      while (++i2) {
        const c = str.charAt(i2);
        if (null == c || Number(c) != c) {
          --i2;
          break;
        }
        if (i2 === str.length)
          break;
      }
      p.id = Number(str.substring(start, i2 + 1));
    }
    if (str.charAt(++i2)) {
      const payload = this.tryParse(str.substr(i2));
      if (Decoder.isPayloadValid(p.type, payload)) {
        p.data = payload;
      } else {
        throw new Error("invalid payload");
      }
    }
    return p;
  }
  tryParse(str) {
    try {
      return JSON.parse(str, this.reviver);
    } catch (e) {
      return false;
    }
  }
  static isPayloadValid(type, payload) {
    switch (type) {
      case PacketType.CONNECT:
        return typeof payload === "object";
      case PacketType.DISCONNECT:
        return payload === void 0;
      case PacketType.CONNECT_ERROR:
        return typeof payload === "string" || typeof payload === "object";
      case PacketType.EVENT:
      case PacketType.BINARY_EVENT:
        return Array.isArray(payload) && payload.length > 0;
      case PacketType.ACK:
      case PacketType.BINARY_ACK:
        return Array.isArray(payload);
    }
  }
  /**
   * Deallocates a parser's resources
   */
  destroy() {
    if (this.reconstructor) {
      this.reconstructor.finishedReconstruction();
    }
  }
}
class BinaryReconstructor {
  constructor(packet) {
    this.packet = packet;
    this.buffers = [];
    this.reconPack = packet;
  }
  /**
   * Method to be called when binary data received from connection
   * after a BINARY_EVENT packet.
   *
   * @param {Buffer | ArrayBuffer} binData - the raw binary data received
   * @return {null | Object} returns null if more binary data is expected or
   *   a reconstructed packet object if all buffers have been received.
   */
  takeBinaryData(binData) {
    this.buffers.push(binData);
    if (this.buffers.length === this.reconPack.attachments) {
      const packet = reconstructPacket(this.reconPack, this.buffers);
      this.finishedReconstruction();
      return packet;
    }
    return null;
  }
  /**
   * Cleans up binary packet reconstruction variables.
   */
  finishedReconstruction() {
    this.reconPack = null;
    this.buffers = [];
  }
}
const parser = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Decoder,
  Encoder,
  get PacketType() {
    return PacketType;
  },
  protocol
}, Symbol.toStringTag, { value: "Module" }));
function on(obj, ev, fn) {
  obj.on(ev, fn);
  return function subDestroy() {
    obj.off(ev, fn);
  };
}
const RESERVED_EVENTS = Object.freeze({
  connect: 1,
  connect_error: 1,
  disconnect: 1,
  disconnecting: 1,
  // EventEmitter reserved events: https://nodejs.org/api/events.html#events_event_newlistener
  newListener: 1,
  removeListener: 1
});
class Socket2 extends Emitter {
  /**
   * `Socket` constructor.
   */
  constructor(io, nsp, opts) {
    super();
    this.connected = false;
    this.receiveBuffer = [];
    this.sendBuffer = [];
    this.ids = 0;
    this.acks = {};
    this.flags = {};
    this.io = io;
    this.nsp = nsp;
    if (opts && opts.auth) {
      this.auth = opts.auth;
    }
    if (this.io._autoConnect)
      this.open();
  }
  /**
   * Whether the socket is currently disconnected
   *
   * @example
   * const socket = io();
   *
   * socket.on("connect", () => {
   *   console.log(socket.disconnected); // false
   * });
   *
   * socket.on("disconnect", () => {
   *   console.log(socket.disconnected); // true
   * });
   */
  get disconnected() {
    return !this.connected;
  }
  /**
   * Subscribe to open, close and packet events
   *
   * @private
   */
  subEvents() {
    if (this.subs)
      return;
    const io = this.io;
    this.subs = [
      on(io, "open", this.onopen.bind(this)),
      on(io, "packet", this.onpacket.bind(this)),
      on(io, "error", this.onerror.bind(this)),
      on(io, "close", this.onclose.bind(this))
    ];
  }
  /**
   * Whether the Socket will try to reconnect when its Manager connects or reconnects.
   *
   * @example
   * const socket = io();
   *
   * console.log(socket.active); // true
   *
   * socket.on("disconnect", (reason) => {
   *   if (reason === "io server disconnect") {
   *     // the disconnection was initiated by the server, you need to manually reconnect
   *     console.log(socket.active); // false
   *   }
   *   // else the socket will automatically try to reconnect
   *   console.log(socket.active); // true
   * });
   */
  get active() {
    return !!this.subs;
  }
  /**
   * "Opens" the socket.
   *
   * @example
   * const socket = io({
   *   autoConnect: false
   * });
   *
   * socket.connect();
   */
  connect() {
    if (this.connected)
      return this;
    this.subEvents();
    if (!this.io["_reconnecting"])
      this.io.open();
    if ("open" === this.io._readyState)
      this.onopen();
    return this;
  }
  /**
   * Alias for {@link connect()}.
   */
  open() {
    return this.connect();
  }
  /**
   * Sends a `message` event.
   *
   * This method mimics the WebSocket.send() method.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/API/WebSocket/send
   *
   * @example
   * socket.send("hello");
   *
   * // this is equivalent to
   * socket.emit("message", "hello");
   *
   * @return self
   */
  send(...args) {
    args.unshift("message");
    this.emit.apply(this, args);
    return this;
  }
  /**
   * Override `emit`.
   * If the event is in `events`, it's emitted normally.
   *
   * @example
   * socket.emit("hello", "world");
   *
   * // all serializable datastructures are supported (no need to call JSON.stringify)
   * socket.emit("hello", 1, "2", { 3: ["4"], 5: Uint8Array.from([6]) });
   *
   * // with an acknowledgement from the server
   * socket.emit("hello", "world", (val) => {
   *   // ...
   * });
   *
   * @return self
   */
  emit(ev, ...args) {
    if (RESERVED_EVENTS.hasOwnProperty(ev)) {
      throw new Error('"' + ev.toString() + '" is a reserved event name');
    }
    args.unshift(ev);
    const packet = {
      type: PacketType.EVENT,
      data: args
    };
    packet.options = {};
    packet.options.compress = this.flags.compress !== false;
    if ("function" === typeof args[args.length - 1]) {
      const id = this.ids++;
      const ack = args.pop();
      this._registerAckCallback(id, ack);
      packet.id = id;
    }
    const isTransportWritable = this.io.engine && this.io.engine.transport && this.io.engine.transport.writable;
    const discardPacket = this.flags.volatile && (!isTransportWritable || !this.connected);
    if (discardPacket)
      ;
    else if (this.connected) {
      this.notifyOutgoingListeners(packet);
      this.packet(packet);
    } else {
      this.sendBuffer.push(packet);
    }
    this.flags = {};
    return this;
  }
  /**
   * @private
   */
  _registerAckCallback(id, ack) {
    const timeout = this.flags.timeout;
    if (timeout === void 0) {
      this.acks[id] = ack;
      return;
    }
    const timer = this.io.setTimeoutFn(() => {
      delete this.acks[id];
      for (let i2 = 0; i2 < this.sendBuffer.length; i2++) {
        if (this.sendBuffer[i2].id === id) {
          this.sendBuffer.splice(i2, 1);
        }
      }
      ack.call(this, new Error("operation has timed out"));
    }, timeout);
    this.acks[id] = (...args) => {
      this.io.clearTimeoutFn(timer);
      ack.apply(this, [null, ...args]);
    };
  }
  /**
   * Sends a packet.
   *
   * @param packet
   * @private
   */
  packet(packet) {
    packet.nsp = this.nsp;
    this.io._packet(packet);
  }
  /**
   * Called upon engine `open`.
   *
   * @private
   */
  onopen() {
    if (typeof this.auth == "function") {
      this.auth((data) => {
        this.packet({ type: PacketType.CONNECT, data });
      });
    } else {
      this.packet({ type: PacketType.CONNECT, data: this.auth });
    }
  }
  /**
   * Called upon engine or manager `error`.
   *
   * @param err
   * @private
   */
  onerror(err) {
    if (!this.connected) {
      this.emitReserved("connect_error", err);
    }
  }
  /**
   * Called upon engine `close`.
   *
   * @param reason
   * @param description
   * @private
   */
  onclose(reason, description) {
    this.connected = false;
    delete this.id;
    this.emitReserved("disconnect", reason, description);
  }
  /**
   * Called with socket packet.
   *
   * @param packet
   * @private
   */
  onpacket(packet) {
    const sameNamespace = packet.nsp === this.nsp;
    if (!sameNamespace)
      return;
    switch (packet.type) {
      case PacketType.CONNECT:
        if (packet.data && packet.data.sid) {
          const id = packet.data.sid;
          this.onconnect(id);
        } else {
          this.emitReserved("connect_error", new Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));
        }
        break;
      case PacketType.EVENT:
      case PacketType.BINARY_EVENT:
        this.onevent(packet);
        break;
      case PacketType.ACK:
      case PacketType.BINARY_ACK:
        this.onack(packet);
        break;
      case PacketType.DISCONNECT:
        this.ondisconnect();
        break;
      case PacketType.CONNECT_ERROR:
        this.destroy();
        const err = new Error(packet.data.message);
        err.data = packet.data.data;
        this.emitReserved("connect_error", err);
        break;
    }
  }
  /**
   * Called upon a server event.
   *
   * @param packet
   * @private
   */
  onevent(packet) {
    const args = packet.data || [];
    if (null != packet.id) {
      args.push(this.ack(packet.id));
    }
    if (this.connected) {
      this.emitEvent(args);
    } else {
      this.receiveBuffer.push(Object.freeze(args));
    }
  }
  emitEvent(args) {
    if (this._anyListeners && this._anyListeners.length) {
      const listeners = this._anyListeners.slice();
      for (const listener of listeners) {
        listener.apply(this, args);
      }
    }
    super.emit.apply(this, args);
  }
  /**
   * Produces an ack callback to emit with an event.
   *
   * @private
   */
  ack(id) {
    const self2 = this;
    let sent = false;
    return function(...args) {
      if (sent)
        return;
      sent = true;
      self2.packet({
        type: PacketType.ACK,
        id,
        data: args
      });
    };
  }
  /**
   * Called upon a server acknowlegement.
   *
   * @param packet
   * @private
   */
  onack(packet) {
    const ack = this.acks[packet.id];
    if ("function" === typeof ack) {
      ack.apply(this, packet.data);
      delete this.acks[packet.id];
    }
  }
  /**
   * Called upon server connect.
   *
   * @private
   */
  onconnect(id) {
    this.id = id;
    this.connected = true;
    this.emitBuffered();
    this.emitReserved("connect");
  }
  /**
   * Emit buffered events (received and emitted).
   *
   * @private
   */
  emitBuffered() {
    this.receiveBuffer.forEach((args) => this.emitEvent(args));
    this.receiveBuffer = [];
    this.sendBuffer.forEach((packet) => {
      this.notifyOutgoingListeners(packet);
      this.packet(packet);
    });
    this.sendBuffer = [];
  }
  /**
   * Called upon server disconnect.
   *
   * @private
   */
  ondisconnect() {
    this.destroy();
    this.onclose("io server disconnect");
  }
  /**
   * Called upon forced client/server side disconnections,
   * this method ensures the manager stops tracking us and
   * that reconnections don't get triggered for this.
   *
   * @private
   */
  destroy() {
    if (this.subs) {
      this.subs.forEach((subDestroy) => subDestroy());
      this.subs = void 0;
    }
    this.io["_destroy"](this);
  }
  /**
   * Disconnects the socket manually. In that case, the socket will not try to reconnect.
   *
   * If this is the last active Socket instance of the {@link Manager}, the low-level connection will be closed.
   *
   * @example
   * const socket = io();
   *
   * socket.on("disconnect", (reason) => {
   *   // console.log(reason); prints "io client disconnect"
   * });
   *
   * socket.disconnect();
   *
   * @return self
   */
  disconnect() {
    if (this.connected) {
      this.packet({ type: PacketType.DISCONNECT });
    }
    this.destroy();
    if (this.connected) {
      this.onclose("io client disconnect");
    }
    return this;
  }
  /**
   * Alias for {@link disconnect()}.
   *
   * @return self
   */
  close() {
    return this.disconnect();
  }
  /**
   * Sets the compress flag.
   *
   * @example
   * socket.compress(false).emit("hello");
   *
   * @param compress - if `true`, compresses the sending data
   * @return self
   */
  compress(compress) {
    this.flags.compress = compress;
    return this;
  }
  /**
   * Sets a modifier for a subsequent event emission that the event message will be dropped when this socket is not
   * ready to send messages.
   *
   * @example
   * socket.volatile.emit("hello"); // the server may or may not receive it
   *
   * @returns self
   */
  get volatile() {
    this.flags.volatile = true;
    return this;
  }
  /**
   * Sets a modifier for a subsequent event emission that the callback will be called with an error when the
   * given number of milliseconds have elapsed without an acknowledgement from the server:
   *
   * @example
   * socket.timeout(5000).emit("my-event", (err) => {
   *   if (err) {
   *     // the server did not acknowledge the event in the given delay
   *   }
   * });
   *
   * @returns self
   */
  timeout(timeout) {
    this.flags.timeout = timeout;
    return this;
  }
  /**
   * Adds a listener that will be fired when any event is emitted. The event name is passed as the first argument to the
   * callback.
   *
   * @example
   * socket.onAny((event, ...args) => {
   *   console.log(`got ${event}`);
   * });
   *
   * @param listener
   */
  onAny(listener) {
    this._anyListeners = this._anyListeners || [];
    this._anyListeners.push(listener);
    return this;
  }
  /**
   * Adds a listener that will be fired when any event is emitted. The event name is passed as the first argument to the
   * callback. The listener is added to the beginning of the listeners array.
   *
   * @example
   * socket.prependAny((event, ...args) => {
   *   console.log(`got event ${event}`);
   * });
   *
   * @param listener
   */
  prependAny(listener) {
    this._anyListeners = this._anyListeners || [];
    this._anyListeners.unshift(listener);
    return this;
  }
  /**
   * Removes the listener that will be fired when any event is emitted.
   *
   * @example
   * const catchAllListener = (event, ...args) => {
   *   console.log(`got event ${event}`);
   * }
   *
   * socket.onAny(catchAllListener);
   *
   * // remove a specific listener
   * socket.offAny(catchAllListener);
   *
   * // or remove all listeners
   * socket.offAny();
   *
   * @param listener
   */
  offAny(listener) {
    if (!this._anyListeners) {
      return this;
    }
    if (listener) {
      const listeners = this._anyListeners;
      for (let i2 = 0; i2 < listeners.length; i2++) {
        if (listener === listeners[i2]) {
          listeners.splice(i2, 1);
          return this;
        }
      }
    } else {
      this._anyListeners = [];
    }
    return this;
  }
  /**
   * Returns an array of listeners that are listening for any event that is specified. This array can be manipulated,
   * e.g. to remove listeners.
   */
  listenersAny() {
    return this._anyListeners || [];
  }
  /**
   * Adds a listener that will be fired when any event is emitted. The event name is passed as the first argument to the
   * callback.
   *
   * Note: acknowledgements sent to the server are not included.
   *
   * @example
   * socket.onAnyOutgoing((event, ...args) => {
   *   console.log(`sent event ${event}`);
   * });
   *
   * @param listener
   */
  onAnyOutgoing(listener) {
    this._anyOutgoingListeners = this._anyOutgoingListeners || [];
    this._anyOutgoingListeners.push(listener);
    return this;
  }
  /**
   * Adds a listener that will be fired when any event is emitted. The event name is passed as the first argument to the
   * callback. The listener is added to the beginning of the listeners array.
   *
   * Note: acknowledgements sent to the server are not included.
   *
   * @example
   * socket.prependAnyOutgoing((event, ...args) => {
   *   console.log(`sent event ${event}`);
   * });
   *
   * @param listener
   */
  prependAnyOutgoing(listener) {
    this._anyOutgoingListeners = this._anyOutgoingListeners || [];
    this._anyOutgoingListeners.unshift(listener);
    return this;
  }
  /**
   * Removes the listener that will be fired when any event is emitted.
   *
   * @example
   * const catchAllListener = (event, ...args) => {
   *   console.log(`sent event ${event}`);
   * }
   *
   * socket.onAnyOutgoing(catchAllListener);
   *
   * // remove a specific listener
   * socket.offAnyOutgoing(catchAllListener);
   *
   * // or remove all listeners
   * socket.offAnyOutgoing();
   *
   * @param [listener] - the catch-all listener (optional)
   */
  offAnyOutgoing(listener) {
    if (!this._anyOutgoingListeners) {
      return this;
    }
    if (listener) {
      const listeners = this._anyOutgoingListeners;
      for (let i2 = 0; i2 < listeners.length; i2++) {
        if (listener === listeners[i2]) {
          listeners.splice(i2, 1);
          return this;
        }
      }
    } else {
      this._anyOutgoingListeners = [];
    }
    return this;
  }
  /**
   * Returns an array of listeners that are listening for any event that is specified. This array can be manipulated,
   * e.g. to remove listeners.
   */
  listenersAnyOutgoing() {
    return this._anyOutgoingListeners || [];
  }
  /**
   * Notify the listeners for each packet sent
   *
   * @param packet
   *
   * @private
   */
  notifyOutgoingListeners(packet) {
    if (this._anyOutgoingListeners && this._anyOutgoingListeners.length) {
      const listeners = this._anyOutgoingListeners.slice();
      for (const listener of listeners) {
        listener.apply(this, packet.data);
      }
    }
  }
}
function Backoff(opts) {
  opts = opts || {};
  this.ms = opts.min || 100;
  this.max = opts.max || 1e4;
  this.factor = opts.factor || 2;
  this.jitter = opts.jitter > 0 && opts.jitter <= 1 ? opts.jitter : 0;
  this.attempts = 0;
}
Backoff.prototype.duration = function() {
  var ms = this.ms * Math.pow(this.factor, this.attempts++);
  if (this.jitter) {
    var rand = Math.random();
    var deviation = Math.floor(rand * this.jitter * ms);
    ms = (Math.floor(rand * 10) & 1) == 0 ? ms - deviation : ms + deviation;
  }
  return Math.min(ms, this.max) | 0;
};
Backoff.prototype.reset = function() {
  this.attempts = 0;
};
Backoff.prototype.setMin = function(min) {
  this.ms = min;
};
Backoff.prototype.setMax = function(max) {
  this.max = max;
};
Backoff.prototype.setJitter = function(jitter) {
  this.jitter = jitter;
};
class Manager extends Emitter {
  constructor(uri, opts) {
    var _a;
    super();
    this.nsps = {};
    this.subs = [];
    if (uri && "object" === typeof uri) {
      opts = uri;
      uri = void 0;
    }
    opts = opts || {};
    opts.path = opts.path || "/socket.io";
    this.opts = opts;
    installTimerFunctions(this, opts);
    this.reconnection(opts.reconnection !== false);
    this.reconnectionAttempts(opts.reconnectionAttempts || Infinity);
    this.reconnectionDelay(opts.reconnectionDelay || 1e3);
    this.reconnectionDelayMax(opts.reconnectionDelayMax || 5e3);
    this.randomizationFactor((_a = opts.randomizationFactor) !== null && _a !== void 0 ? _a : 0.5);
    this.backoff = new Backoff({
      min: this.reconnectionDelay(),
      max: this.reconnectionDelayMax(),
      jitter: this.randomizationFactor()
    });
    this.timeout(null == opts.timeout ? 2e4 : opts.timeout);
    this._readyState = "closed";
    this.uri = uri;
    const _parser = opts.parser || parser;
    this.encoder = new _parser.Encoder();
    this.decoder = new _parser.Decoder();
    this._autoConnect = opts.autoConnect !== false;
    if (this._autoConnect)
      this.open();
  }
  reconnection(v) {
    if (!arguments.length)
      return this._reconnection;
    this._reconnection = !!v;
    return this;
  }
  reconnectionAttempts(v) {
    if (v === void 0)
      return this._reconnectionAttempts;
    this._reconnectionAttempts = v;
    return this;
  }
  reconnectionDelay(v) {
    var _a;
    if (v === void 0)
      return this._reconnectionDelay;
    this._reconnectionDelay = v;
    (_a = this.backoff) === null || _a === void 0 ? void 0 : _a.setMin(v);
    return this;
  }
  randomizationFactor(v) {
    var _a;
    if (v === void 0)
      return this._randomizationFactor;
    this._randomizationFactor = v;
    (_a = this.backoff) === null || _a === void 0 ? void 0 : _a.setJitter(v);
    return this;
  }
  reconnectionDelayMax(v) {
    var _a;
    if (v === void 0)
      return this._reconnectionDelayMax;
    this._reconnectionDelayMax = v;
    (_a = this.backoff) === null || _a === void 0 ? void 0 : _a.setMax(v);
    return this;
  }
  timeout(v) {
    if (!arguments.length)
      return this._timeout;
    this._timeout = v;
    return this;
  }
  /**
   * Starts trying to reconnect if reconnection is enabled and we have not
   * started reconnecting yet
   *
   * @private
   */
  maybeReconnectOnOpen() {
    if (!this._reconnecting && this._reconnection && this.backoff.attempts === 0) {
      this.reconnect();
    }
  }
  /**
   * Sets the current transport `socket`.
   *
   * @param {Function} fn - optional, callback
   * @return self
   * @public
   */
  open(fn) {
    if (~this._readyState.indexOf("open"))
      return this;
    this.engine = new Socket$1(this.uri, this.opts);
    const socket = this.engine;
    const self2 = this;
    this._readyState = "opening";
    this.skipReconnect = false;
    const openSubDestroy = on(socket, "open", function() {
      self2.onopen();
      fn && fn();
    });
    const errorSub = on(socket, "error", (err) => {
      self2.cleanup();
      self2._readyState = "closed";
      this.emitReserved("error", err);
      if (fn) {
        fn(err);
      } else {
        self2.maybeReconnectOnOpen();
      }
    });
    if (false !== this._timeout) {
      const timeout = this._timeout;
      if (timeout === 0) {
        openSubDestroy();
      }
      const timer = this.setTimeoutFn(() => {
        openSubDestroy();
        socket.close();
        socket.emit("error", new Error("timeout"));
      }, timeout);
      if (this.opts.autoUnref) {
        timer.unref();
      }
      this.subs.push(function subDestroy() {
        clearTimeout(timer);
      });
    }
    this.subs.push(openSubDestroy);
    this.subs.push(errorSub);
    return this;
  }
  /**
   * Alias for open()
   *
   * @return self
   * @public
   */
  connect(fn) {
    return this.open(fn);
  }
  /**
   * Called upon transport open.
   *
   * @private
   */
  onopen() {
    this.cleanup();
    this._readyState = "open";
    this.emitReserved("open");
    const socket = this.engine;
    this.subs.push(on(socket, "ping", this.onping.bind(this)), on(socket, "data", this.ondata.bind(this)), on(socket, "error", this.onerror.bind(this)), on(socket, "close", this.onclose.bind(this)), on(this.decoder, "decoded", this.ondecoded.bind(this)));
  }
  /**
   * Called upon a ping.
   *
   * @private
   */
  onping() {
    this.emitReserved("ping");
  }
  /**
   * Called with data.
   *
   * @private
   */
  ondata(data) {
    try {
      this.decoder.add(data);
    } catch (e) {
      this.onclose("parse error", e);
    }
  }
  /**
   * Called when parser fully decodes a packet.
   *
   * @private
   */
  ondecoded(packet) {
    nextTick(() => {
      this.emitReserved("packet", packet);
    }, this.setTimeoutFn);
  }
  /**
   * Called upon socket error.
   *
   * @private
   */
  onerror(err) {
    this.emitReserved("error", err);
  }
  /**
   * Creates a new socket for the given `nsp`.
   *
   * @return {Socket}
   * @public
   */
  socket(nsp, opts) {
    let socket = this.nsps[nsp];
    if (!socket) {
      socket = new Socket2(this, nsp, opts);
      this.nsps[nsp] = socket;
    }
    return socket;
  }
  /**
   * Called upon a socket close.
   *
   * @param socket
   * @private
   */
  _destroy(socket) {
    const nsps = Object.keys(this.nsps);
    for (const nsp of nsps) {
      const socket2 = this.nsps[nsp];
      if (socket2.active) {
        return;
      }
    }
    this._close();
  }
  /**
   * Writes a packet.
   *
   * @param packet
   * @private
   */
  _packet(packet) {
    const encodedPackets = this.encoder.encode(packet);
    for (let i2 = 0; i2 < encodedPackets.length; i2++) {
      this.engine.write(encodedPackets[i2], packet.options);
    }
  }
  /**
   * Clean up transport subscriptions and packet buffer.
   *
   * @private
   */
  cleanup() {
    this.subs.forEach((subDestroy) => subDestroy());
    this.subs.length = 0;
    this.decoder.destroy();
  }
  /**
   * Close the current socket.
   *
   * @private
   */
  _close() {
    this.skipReconnect = true;
    this._reconnecting = false;
    this.onclose("forced close");
    if (this.engine)
      this.engine.close();
  }
  /**
   * Alias for close()
   *
   * @private
   */
  disconnect() {
    return this._close();
  }
  /**
   * Called upon engine close.
   *
   * @private
   */
  onclose(reason, description) {
    this.cleanup();
    this.backoff.reset();
    this._readyState = "closed";
    this.emitReserved("close", reason, description);
    if (this._reconnection && !this.skipReconnect) {
      this.reconnect();
    }
  }
  /**
   * Attempt a reconnection.
   *
   * @private
   */
  reconnect() {
    if (this._reconnecting || this.skipReconnect)
      return this;
    const self2 = this;
    if (this.backoff.attempts >= this._reconnectionAttempts) {
      this.backoff.reset();
      this.emitReserved("reconnect_failed");
      this._reconnecting = false;
    } else {
      const delay = this.backoff.duration();
      this._reconnecting = true;
      const timer = this.setTimeoutFn(() => {
        if (self2.skipReconnect)
          return;
        this.emitReserved("reconnect_attempt", self2.backoff.attempts);
        if (self2.skipReconnect)
          return;
        self2.open((err) => {
          if (err) {
            self2._reconnecting = false;
            self2.reconnect();
            this.emitReserved("reconnect_error", err);
          } else {
            self2.onreconnect();
          }
        });
      }, delay);
      if (this.opts.autoUnref) {
        timer.unref();
      }
      this.subs.push(function subDestroy() {
        clearTimeout(timer);
      });
    }
  }
  /**
   * Called upon successful reconnect.
   *
   * @private
   */
  onreconnect() {
    const attempt = this.backoff.attempts;
    this._reconnecting = false;
    this.backoff.reset();
    this.emitReserved("reconnect", attempt);
  }
}
const cache = {};
function lookup(uri, opts) {
  if (typeof uri === "object") {
    opts = uri;
    uri = void 0;
  }
  opts = opts || {};
  const parsed = url(uri, opts.path || "/socket.io");
  const source = parsed.source;
  const id = parsed.id;
  const path = parsed.path;
  const sameNamespace = cache[id] && path in cache[id]["nsps"];
  const newConnection = opts.forceNew || opts["force new connection"] || false === opts.multiplex || sameNamespace;
  let io;
  if (newConnection) {
    io = new Manager(source, opts);
  } else {
    if (!cache[id]) {
      cache[id] = new Manager(source, opts);
    }
    io = cache[id];
  }
  if (parsed.query && !opts.query) {
    opts.query = parsed.queryKey;
  }
  return io.socket(parsed.path, opts);
}
Object.assign(lookup, {
  Manager,
  Socket: Socket2,
  io: lookup,
  connect: lookup
});
const socketManger = Recoil_index_8({
  key: "socketManger",
  default: Recoil_index_9({
    key: "socketManger/Default",
    get: () => {
      return new Manager("http://localhost:81", {
        withCredentials: true
      });
    },
    dangerouslyAllowMutability: true
  }),
  dangerouslyAllowMutability: true
});
Recoil_index_10({
  key: "socketStore",
  default: Recoil_index_11({
    key: "socketStore/Default",
    get: (nsp) => ({ get }) => {
      const manager = get(socketManger);
      const socket = manager.socket(`/${nsp}`);
      return socket;
    },
    dangerouslyAllowMutability: true
  }),
  dangerouslyAllowMutability: true
});
const itemType$1 = Object.freeze({
  FOLDER: "Folder",
  DOENETML: "DoenetML",
  URL: "Url",
  COLLECTION: "Collection"
});
function useSockets(nsp) {
  const addToast = useToast();
  const dragShadowId2 = "dragShadow";
  const { acceptAddItem, acceptDeleteItem, acceptMoveItems, acceptRenameItem } = useAcceptBindings();
  const addItem = Recoil_index_31(
    ({ snapshot }) => (
      /**
       * Create a new item
       * @param {addOptions} param0 configuration for new Item
       */
      async ({ driveIdFolderId, type, label = "Untitled", selectedItemId = null, url: url2 = null }) => {
        const dt = /* @__PURE__ */ new Date();
        const creationDate = DateToUTCDateString(dt);
        const itemId = nanoid();
        const doenetId = nanoid();
        const versionId = nanoid();
        const fInfo = await snapshot.getPromise(
          folderDictionary(driveIdFolderId)
        );
        let newObj = JSON.parse(JSON.stringify(fInfo));
        let newDefaultOrder = [...newObj.contentIds[sortOptions.DEFAULT]];
        let index = newDefaultOrder.indexOf(selectedItemId);
        const newOrder = getLexicographicOrder({
          index,
          nodeObjs: newObj.contentsDictionary,
          defaultFolderChildrenIds: newDefaultOrder
        });
        let payload = {
          driveId: driveIdFolderId.driveId,
          parentFolderId: driveIdFolderId.folderId,
          doenetId,
          itemId,
          versionId,
          type,
          label,
          sortOrder: newOrder,
          selectedItemId,
          creationDate,
          url: url2
        };
        if (type === "DoenetML") {
          payload = {
            ...payload,
            assignedDate: null,
            attemptAggregation: "m",
            dueDate: null,
            gradeCategory: "",
            individualize: true,
            isAssigned: "0",
            isPublished: "0",
            cid: "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855",
            numberOfAttemptsAllowed: "1",
            showFinishButton: false,
            proctorMakesAvailable: false,
            autoSubmit: false,
            showCorrectness: true,
            showFeedback: true,
            showHints: true,
            showSolution: true,
            showSolutionInGradebook: true,
            timeLimit: null,
            totalPointsOrPercent: "10",
            assignment_isPublished: "0"
          };
        }
        if (type === itemType$1.COLLECTION) {
          payload = {
            ...payload,
            assignedDate: null,
            attemptAggregation: "m",
            dueDate: null,
            gradeCategory: "",
            individualize: true,
            isAssigned: "0",
            isPublished: "0",
            cid: "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855",
            numberOfAttemptsAllowed: "1",
            showFinishButton: false,
            proctorMakesAvailable: false,
            autoSubmit: false,
            showCorrectness: true,
            showFeedback: true,
            showHints: true,
            showSolution: true,
            showSolutionInGradebook: true,
            timeLimit: null,
            totalPointsOrPercent: "10",
            assignment_isPublished: "0"
          };
        }
        try {
          const resp = await axios.post("/api/addItem.php", payload);
          console.log("resp from add item", resp);
          if (resp.data.success) {
            acceptAddItem(payload);
          } else {
            addToast(`Add item error: ${resp.data.message}`, toastType.ERROR);
          }
        } catch (error) {
          console.error(error);
        }
      }
    )
  );
  const deleteItem = Recoil_index_31(
    () => async ({ driveIdFolderId, driveInstanceId = null, itemId, label }) => {
      const payload = {
        driveId: driveIdFolderId.driveId,
        parentFolderId: driveIdFolderId.folderId,
        itemId,
        label,
        driveInstanceId
      };
      try {
        const resp = await axios.get("/api/deleteItem.php", {
          params: payload
        });
        if (resp.data.success) {
          acceptDeleteItem(payload);
        } else {
          addToast(
            `Delete item error: ${resp.data.message}`,
            toastType.ERROR
          );
        }
      } catch (error) {
        console.log(error);
      }
    }
  );
  const moveItems = Recoil_index_31(
    ({ snapshot, set }) => (
      /**
       * @param {moveOptions} param0 -
       */
      async ({ targetDriveId, targetFolderId, index }) => {
        var _a, _b;
        const globalSelectedNodes = await snapshot.getPromise(
          globalSelectedNodesAtom
        );
        let destinationFolderObj = await snapshot.getPromise(
          folderDictionary({
            driveId: targetDriveId,
            folderId: targetFolderId
          })
        );
        if (globalSelectedNodes.length === 0) {
          throw "No items selected";
        }
        for (let gItem of globalSelectedNodes) {
          const sourceFolderInfo = await snapshot.getPromise(
            folderDictionary({
              driveId: gItem.driveId,
              folderId: gItem.parentFolderId
            })
          );
          if (gItem.itemId === targetFolderId) {
            throw "Cannot move folder into itself";
          } else if (destinationFolderObj.folderInfo.itemType === itemType$1.COLLECTION && sourceFolderInfo.contentsDictionary[gItem.itemId].itemType !== itemType$1.DOENETML) {
            addToast(
              `Can not ${sourceFolderInfo.contentsDictionary[gItem.itemId].itemType}s into a Collection`,
              toastType.ERROR
            );
            throw `Can not ${sourceFolderInfo.contentsDictionary[gItem.itemId].itemType}s into a Collection`;
          }
        }
        let newDestinationFolderObj = JSON.parse(
          JSON.stringify(destinationFolderObj)
        );
        let editedCache = {};
        let driveIdChanged = [];
        const insertIndex = index ?? 0;
        let newSortOrder = "";
        for (let gItem of globalSelectedNodes) {
          let selectedItem = {
            driveId: gItem.driveId,
            driveInstanceId: gItem.driveInstanceId,
            itemId: gItem.itemId
          };
          set(selectedDriveItemsAtom(selectedItem), false);
          const oldSourceFInfo = await snapshot.getPromise(
            folderDictionary({
              driveId: gItem.driveId,
              folderId: gItem.parentFolderId
            })
          );
          let newSourceFInfo = (_a = editedCache[gItem.driveId]) == null ? void 0 : _a[gItem.parentFolderId];
          if (!newSourceFInfo)
            newSourceFInfo = JSON.parse(JSON.stringify(oldSourceFInfo));
          if (gItem.parentFolderId !== targetFolderId) {
            let index2 = newSourceFInfo["contentIds"]["defaultOrder"].indexOf(
              gItem.itemId
            );
            newSourceFInfo["contentIds"]["defaultOrder"].splice(index2, 1);
            newDestinationFolderObj["contentsDictionary"][gItem.itemId] = {
              ...newSourceFInfo["contentsDictionary"][gItem.itemId]
            };
            if (!newDestinationFolderObj["contentsDictionaryByDoenetId"]) {
              newDestinationFolderObj["contentsDictionaryByDoenetId"] = {};
            }
            newDestinationFolderObj["contentsDictionaryByDoenetId"][newSourceFInfo["contentsDictionary"][gItem.itemId].doenetId] = { ...newSourceFInfo["contentsDictionary"][gItem.itemId] };
            delete newSourceFInfo["contentsDictionaryByDoenetId"][newSourceFInfo["contentsDictionary"][gItem.itemId].doenetId];
            delete newSourceFInfo["contentsDictionary"][gItem.itemId];
            if (!editedCache[gItem.driveId])
              editedCache[gItem.driveId] = {};
            editedCache[gItem.driveId][gItem.parentFolderId] = newSourceFInfo;
            newDestinationFolderObj["contentIds"]["defaultOrder"].splice(
              insertIndex,
              0,
              gItem.itemId
            );
          } else {
            newDestinationFolderObj.contentIds.defaultOrder.splice(
              insertIndex,
              0,
              dragShadowId2
            );
            newDestinationFolderObj.contentIds.defaultOrder = newDestinationFolderObj.contentIds.defaultOrder.filter(
              (itemId) => itemId !== gItem.itemId
            );
            newDestinationFolderObj.contentIds.defaultOrder.splice(
              newDestinationFolderObj.contentIds.defaultOrder.indexOf(
                dragShadowId2
              ),
              1,
              gItem.itemId
            );
          }
          const cleanDefaultOrder = newDestinationFolderObj.contentIds.defaultOrder.filter(
            (itemId) => itemId !== dragShadowId2
          );
          newSortOrder = getLexicographicOrder({
            index: insertIndex,
            nodeObjs: newDestinationFolderObj.contentsDictionary,
            defaultFolderChildrenIds: cleanDefaultOrder
          });
          newDestinationFolderObj["contentsDictionary"][gItem.itemId].sortOrder = newSortOrder;
          newDestinationFolderObj["contentsDictionary"][gItem.itemId].parentFolderId = targetFolderId;
          if (oldSourceFInfo["contentsDictionary"][gItem.itemId].itemType === "Folder") {
            const gItemFolderInfoObj = await snapshot.getPromise(
              folderDictionary({
                driveId: gItem.driveId,
                folderId: gItem.itemId
              })
            );
            set(
              folderDictionary({
                driveId: targetDriveId,
                folderId: gItem.itemId
              }),
              () => {
                let newFolderInfo = { ...gItemFolderInfoObj };
                newFolderInfo.folderInfo = { ...gItemFolderInfoObj.folderInfo };
                newFolderInfo.folderInfo.parentFolderId = targetFolderId;
                return newFolderInfo;
              }
            );
          }
          if (gItem.driveId !== targetDriveId) {
            driveIdChanged.push(gItem.itemId);
            if (oldSourceFInfo["contentsDictionary"][gItem.itemId].itemType === "Folder") {
              let gItemChildIds = [];
              let queue = [gItem.itemId];
              while (queue.length) {
                let size = queue.length;
                for (let i2 = 0; i2 < size; i2++) {
                  let currentNodeId = queue.shift();
                  const folderInfoObj = await snapshot.getPromise(
                    folderDictionary({
                      driveId: gItem.driveId,
                      folderId: currentNodeId
                    })
                  );
                  gItemChildIds.push(currentNodeId);
                  for (let childId of (_b = folderInfoObj == null ? void 0 : folderInfoObj.contentIds) == null ? void 0 : _b[sortOptions.DEFAULT]) {
                    if ((folderInfoObj == null ? void 0 : folderInfoObj.contentsDictionary[childId].itemType) === "Folder") {
                      const childFolderInfoObj = await snapshot.getPromise(
                        folderDictionary({
                          driveId: gItem.driveId,
                          folderId: childId
                        })
                      );
                      set(
                        folderDictionary({
                          driveId: targetDriveId,
                          folderId: childId
                        }),
                        childFolderInfoObj
                      );
                      queue.push(childId);
                    } else {
                      gItemChildIds.push(childId);
                    }
                  }
                }
              }
              driveIdChanged = [...driveIdChanged, ...gItemChildIds];
            }
          }
        }
        let selectedItemIds = [];
        for (let item of globalSelectedNodes) {
          selectedItemIds.push(item.itemId);
        }
        const payload = {
          sourceDriveId: globalSelectedNodes[0].driveId,
          destinationDriveId: targetDriveId,
          destinationItemId: targetFolderId,
          newSortOrder,
          selectedItemIds,
          selectedItemChildrenIds: driveIdChanged
          // destinationParentFolderId:
          //   destinationFolderObj.folderInfo.parentFolderId,
        };
        try {
          const resp = await axios.post("/api/moveItems.php", payload);
          if (resp.data.success) {
            acceptMoveItems(payload, newDestinationFolderObj, editedCache);
          } else {
            addToast(`Move item(s) error: ${resp.data.message}`, toastType.ERROR);
          }
        } catch (error) {
          console.log(error);
        }
      }
    )
  );
  const renameItem = Recoil_index_31(
    () => async ({ driveIdFolderId, itemId, itemType: itemType2, newLabel }) => {
      const payload = {
        instruction: "rename",
        driveId: driveIdFolderId.driveId,
        folderId: driveIdFolderId.folderId,
        itemId,
        label: newLabel,
        type: itemType2
      };
      try {
        const resp = await axios.get("/api/updateItem.php", {
          params: payload
        });
        if (resp.data.success) {
          acceptRenameItem(payload);
        } else {
          addToast(
            `Rename item error: ${resp.data.message}`,
            toastType.ERROR
          );
        }
      } catch (error) {
        console.log(error);
      }
    }
  );
  const copyItems = Recoil_index_31(
    ({ snapshot, set }) => async ({ items = [], targetDriveId, targetFolderId, index }) => {
      if (items.length === 0) {
        throw "No items to be copied";
      }
      let destinationFolderObj = await snapshot.getPromise(
        folderDictionary({
          driveId: targetDriveId,
          folderId: targetFolderId
        })
      );
      let newDestinationFolderObj = JSON.parse(
        JSON.stringify(destinationFolderObj)
      );
      const insertIndex = index ?? 0;
      let newSortOrder = "";
      const dt = /* @__PURE__ */ new Date();
      const creationTimestamp = formatDate(dt);
      let globalDictionary = {};
      let globalContentIds = {};
      for (let item of items) {
        if (!item.driveId || !item.driveInstanceId || !item.itemId)
          throw "Invalid arguments error";
        let selectedItem = {
          driveId: item.driveId,
          driveInstanceId: item.driveInstanceId,
          itemId: item.itemId
        };
        set(selectedDriveItemsAtom(selectedItem), false);
        const { newItemId, newItem } = await cloneItem({
          snapshot,
          globalDictionary,
          globalContentIds,
          creationTimestamp,
          item,
          targetDriveId,
          targetFolderId
        });
        if (item.driveId === targetDriveId) {
          const newItemLabel = `Copy of ${newItem.label}`;
          newItem.label = newItemLabel;
        }
        const cleanDefaultOrder = newDestinationFolderObj["contentIds"]["defaultOrder"].filter((itemId) => itemId !== dragShadowId2);
        newSortOrder = getLexicographicOrder({
          index: insertIndex,
          nodeObjs: newDestinationFolderObj.contentsDictionary,
          defaultFolderChildrenIds: cleanDefaultOrder
        });
        newItem.sortOrder = newSortOrder;
        newDestinationFolderObj["contentsDictionary"][newItemId] = newItem;
        newDestinationFolderObj["contentIds"]["defaultOrder"].splice(
          insertIndex,
          0,
          newItemId
        );
      }
      set(globalSelectedNodesAtom, []);
      let promises = [];
      for (let newItemId of Object.keys(globalDictionary)) {
        let newItem = globalDictionary[newItemId];
        const addItemsParams = {
          driveId: targetDriveId,
          parentFolderId: newItem.parentFolderId,
          itemId: newItemId,
          doenetId: newItem.doenetId,
          versionId: newItem.versionId,
          label: newItem.label,
          type: newItem.itemType,
          sortOrder: newItem.sortOrder,
          isNewCopy: "1"
        };
        if (newItem.itemType === "DoenetML") {
          const newDoenetML = cloneDoenetML({
            item: newItem,
            timestamp: creationTimestamp
          });
          promises.push(axios.post("/api/saveNewVersion.php", newDoenetML));
        }
        const result2 = axios.get("/api/addItem.php", {
          params: addItemsParams
        });
        promises.push(result2);
      }
      Promise.allSettled(promises).then(([result2]) => {
        var _a, _b;
        if ((_b = (_a = result2.value) == null ? void 0 : _a.data) == null ? void 0 : _b.success) {
          set(
            folderDictionary({
              driveId: targetDriveId,
              folderId: targetFolderId
            }),
            newDestinationFolderObj
          );
          for (let newItemId of Object.keys(globalDictionary)) {
            let newItem = globalDictionary[newItemId];
            if (newItem.itemType === "Folder") {
              let queue = [newItemId];
              while (queue.length) {
                const size = queue.length;
                for (let i2 = 0; i2 < size; i2++) {
                  const currentItemId = queue.shift();
                  const currentItem = globalDictionary[currentItemId];
                  if (currentItem.itemType !== "Folder")
                    continue;
                  let contentsDictionary = {};
                  for (let childContentId of globalContentIds[currentItemId]) {
                    contentsDictionary = {
                      ...contentsDictionary,
                      [childContentId]: globalDictionary[childContentId]
                    };
                  }
                  const currentFolderInfoObj = {
                    folderInfo: currentItem,
                    contentsDictionary,
                    contentIds: {
                      [sortOptions.DEFAULT]: globalContentIds[currentItemId]
                    }
                  };
                  set(
                    folderDictionary({
                      driveId: targetDriveId,
                      folderId: currentItemId
                    }),
                    currentFolderInfoObj
                  );
                  queue = [...queue, ...globalContentIds[currentItemId]];
                }
              }
            }
          }
          set(
            folderCacheDirtyAtom({
              driveId: targetDriveId,
              folderId: targetFolderId
            }),
            true
          );
        }
      }).catch((err) => {
        console.error(err);
      });
      const result = await Promise.allSettled(promises);
      return result;
    }
  );
  const cloneItem = async ({
    snapshot,
    globalDictionary = {},
    globalContentIds = {},
    creationTimestamp,
    item,
    targetDriveId,
    targetFolderId
  }) => {
    const itemParentFolder = await snapshot.getPromise(
      folderDictionary({
        driveId: item.driveId,
        folderId: item.parentFolderId
      })
    );
    const itemInfo = itemParentFolder["contentsDictionary"][item.itemId];
    const newItem = { ...itemInfo };
    const newItemId = nanoid();
    newItem.itemId = newItemId;
    newItem.doenetId = nanoid();
    newItem.versionId = nanoid();
    newItem.previousDoenetId = itemInfo.doenetId;
    if (itemInfo.itemType === "Folder") {
      const { contentIds } = await snapshot.getPromise(
        folderDictionary({ driveId: item.driveId, folderId: item.itemId })
      );
      globalContentIds[newItemId] = [];
      for (let cid of contentIds[sortOptions.DEFAULT]) {
        let subItem = {
          ...item,
          parentFolderId: item.itemId,
          itemId: cid
        };
        let result = await cloneItem({
          snapshot,
          globalDictionary,
          globalContentIds,
          creationTimestamp,
          item: subItem,
          targetFolderId: newItemId,
          targetDriveId
        });
        const newSubItemId = result.newItemId;
        globalContentIds[newItemId].push(newSubItemId);
      }
    }
    newItem.parentFolderId = targetFolderId;
    newItem.creationDate = creationTimestamp;
    globalDictionary[newItemId] = newItem;
    return { newItemId, newItem };
  };
  const cloneDoenetML = ({ item, timestamp }) => {
    let newVersion = {
      title: item.label,
      doenetId: item.doenetId,
      // doenetId: nanoid(),
      cid: item.cid,
      versionId: item.versionId,
      timestamp,
      isDraft: "0",
      isNamed: "1",
      isNewCopy: "1",
      doenetML: item.doenetML,
      previousDoenetId: item.previousDoenetId
    };
    return newVersion;
  };
  return {
    addItem,
    deleteItem,
    moveItems,
    renameItem,
    copyItems
  };
}
function useAcceptBindings() {
  const addToast = useToast();
  const acceptAddItem = Recoil_index_31(
    ({ snapshot, set }) => async ({
      driveId,
      parentFolderId,
      doenetId,
      versionId,
      itemId,
      type,
      label,
      sortOrder,
      creationDate,
      url: url2,
      selectedItemId
    }) => {
      const newItem = {
        parentFolderId,
        doenetId,
        versionId,
        itemId,
        itemType: type,
        label,
        sortOrder,
        creationDate,
        //get this from sever??
        isPublished: "0",
        url: url2,
        urlDescription: null,
        urlId: null
      };
      const fInfo = await snapshot.getPromise(
        folderDictionary({
          driveId,
          folderId: parentFolderId
        })
      );
      let newObj = JSON.parse(JSON.stringify(fInfo));
      let newDefaultOrder = [...newObj.contentIds[sortOptions.DEFAULT]];
      let index = newDefaultOrder.indexOf(selectedItemId);
      newDefaultOrder.splice(index + 1, 0, itemId);
      newObj.contentIds[sortOptions.DEFAULT] = newDefaultOrder;
      newObj.contentsDictionary[itemId] = newItem;
      newObj.contentsDictionaryByDoenetId[doenetId] = newItem;
      set(
        folderDictionary({
          driveId,
          folderId: parentFolderId
        }),
        newObj
      );
      if (type === "Folder" || type === "Collection") {
        set(
          folderDictionary({
            driveId,
            folderId: itemId
          }),
          {
            folderInfo: newItem,
            contentsDictionary: {},
            contentIds: { [sortOptions.DEFAULT]: [] }
          }
        );
      }
      addToast(`Add new item 'Untitled'`, toastType.SUCCESS);
    },
    [addToast]
  );
  const acceptDeleteItem = Recoil_index_31(
    ({ snapshot, set }) => async ({ driveId, parentFolderId, itemId, driveInstanceId, label }) => {
      const fInfo = await snapshot.getPromise(
        folderDictionary({ driveId, folderId: parentFolderId })
      );
      const globalSelectedNodes = await snapshot.getPromise(
        globalSelectedNodesAtom
      );
      const item = {
        driveId,
        driveInstanceId,
        itemId
      };
      const selectedDriveItems = await snapshot.getPromise(
        selectedDriveItemsAtom(item)
      );
      if (selectedDriveItems) {
        set(selectedDriveItemsAtom(item), false);
        let newGlobalItems = [];
        for (let gItem of globalSelectedNodes) {
          if (gItem.itemId !== itemId) {
            newGlobalItems.push(gItem);
          }
        }
        set(globalSelectedNodesAtom, newGlobalItems);
      }
      let newFInfo = { ...fInfo };
      newFInfo["contentsDictionary"] = { ...fInfo.contentsDictionary };
      newFInfo["contentsDictionaryByDoenetId"] = {
        ...fInfo.contentsDictionaryByDoenetId
      };
      delete newFInfo["contentsDictionaryByDoenetId"][newFInfo["contentsDictionary"][itemId].doenetId];
      delete newFInfo["contentsDictionary"][itemId];
      newFInfo.folderInfo = { ...fInfo.folderInfo };
      newFInfo.contentIds = {};
      newFInfo.contentIds[sortOptions.DEFAULT] = [
        ...fInfo.contentIds[sortOptions.DEFAULT]
      ];
      const index = newFInfo.contentIds[sortOptions.DEFAULT].indexOf(itemId);
      newFInfo.contentIds[sortOptions.DEFAULT].splice(index, 1);
      set(
        folderDictionary({
          driveId,
          folderId: parentFolderId
        }),
        newFInfo
      );
      addToast(`Deleted item '${label}'`, toastType.SUCCESS);
    }
  );
  const acceptMoveItems = Recoil_index_31(
    ({ set }) => (payload, newDestinationFolderObj, editedCache) => {
      set(globalSelectedNodesAtom, []);
      set(
        folderDictionary({
          driveId: payload.destinationDriveId,
          folderId: payload.destinationItemId
        }),
        newDestinationFolderObj
      );
      for (let driveId of Object.keys(editedCache)) {
        for (let parentFolderId of Object.keys(editedCache[driveId])) {
          set(
            folderDictionary({
              driveId,
              folderId: parentFolderId
            }),
            editedCache[driveId][parentFolderId]
          );
          set(
            folderCacheDirtyAtom({
              driveId,
              folderId: parentFolderId
            }),
            true
          );
        }
      }
      set(
        folderCacheDirtyAtom({
          driveId: payload.destinationDriveId,
          folderId: payload.destinationItemId
        }),
        true
      );
    },
    []
  );
  const acceptRenameItem = Recoil_index_31(
    ({ snapshot, set }) => async ({ driveId, folderId, itemId, label, type }) => {
      const fInfo = await snapshot.getPromise(
        folderDictionary({ driveId, folderId })
      );
      let newFInfo = { ...fInfo };
      newFInfo["contentsDictionary"] = { ...fInfo.contentsDictionary };
      newFInfo["contentsDictionaryByDoenetId"] = {
        ...fInfo.contentsDictionaryByDoenetId
      };
      newFInfo["contentsDictionary"][itemId] = {
        ...fInfo.contentsDictionary[itemId]
      };
      newFInfo["contentsDictionary"][itemId].label = label;
      newFInfo["contentsDictionaryByDoenetId"][newFInfo["contentsDictionary"][itemId].doenetId] = {
        ...fInfo.contentsDictionary[itemId]
      };
      newFInfo["contentsDictionaryByDoenetId"][newFInfo["contentsDictionary"][itemId].doenetId].label = label;
      set(
        folderDictionary({
          driveId,
          folderId
        }),
        newFInfo
      );
      if (type === "Folder" || type === "Collection") {
        set(
          folderDictionary({
            driveId,
            folderId: itemId
          }),
          (old) => {
            let newFolderInfo = { ...old };
            newFolderInfo.folderInfo = { ...old.folderInfo };
            newFolderInfo.folderInfo.label = label;
            return newFolderInfo;
          }
        );
      }
      addToast(`Renamed item to '${label}'`, toastType.SUCCESS);
    }
  );
  return {
    acceptAddItem,
    acceptDeleteItem,
    acceptMoveItems,
    acceptRenameItem
  };
}
const formatDate = (dt) => {
  const formattedDate = `${dt.getFullYear().toString().padStart(2, "0")}-${(dt.getMonth() + 1).toString().padStart(2, "0")}-${dt.getDate().toString().padStart(2, "0")} ${dt.getHours().toString().padStart(2, "0")}:${dt.getMinutes().toString().padStart(2, "0")}:${dt.getSeconds().toString().padStart(2, "0")}`;
  return formattedDate;
};
reactExports.createContext({});
const loadAssignmentAtomFamily = Recoil_index_10({
  key: "loadAssignmentAtomFamily",
  default: Recoil_index_11({
    key: "loadAssignmentAtomFamily/Default",
    get: (doenetId) => async () => {
      const { data } = await axios.get("/api/getAllAssignmentSettings.php", {
        params: { doenetId }
      });
      let assignment = { ...data.assignment };
      if (assignment.assignedDate) {
        assignment.assignedDate = UTCDateStringToDate(
          assignment.assignedDate
        ).toLocaleString();
      }
      if (assignment.dueDate) {
        assignment.dueDate = UTCDateStringToDate(
          assignment.dueDate
        ).toLocaleString();
      }
      if (assignment.pinnedAfterDate) {
        assignment.pinnedAfterDate = UTCDateStringToDate(
          assignment.pinnedAfterDate
        ).toLocaleString();
      }
      if (assignment.pinnedUntilDate) {
        assignment.pinnedUntilDate = UTCDateStringToDate(
          assignment.pinnedUntilDate
        ).toLocaleString();
      }
      return assignment;
    }
  })
});
const loadAssignmentSelector = Recoil_index_11({
  key: "loadAssignmentSelector",
  get: (doenetId) => async ({ get }) => {
    return await get(loadAssignmentAtomFamily(doenetId));
  },
  set: (doenetId) => ({ set }, newValue) => {
    set(loadAssignmentAtomFamily(doenetId), newValue);
  }
});
const itemType = Object.freeze({
  DOENETML: "DoenetML",
  FOLDER: "Folder",
  COLLECTION: "Collection"
});
const fetchDriveUsersQuery = Recoil_index_10({
  key: "fetchDriveUsersQuery",
  default: Recoil_index_11({
    key: "fetchDriveUsersQuery/Default",
    get: (driveId) => async () => {
      const payload = { params: { driveId } };
      const { data } = await axios.get("/api/loadDriveUsers.php", payload);
      return data;
    }
  })
});
Recoil_index_11({
  key: "fetchDriveUsers",
  get: (driveId) => ({ get }) => {
    return get(fetchDriveUsersQuery(driveId));
  },
  set: (driveId) => ({ get, set }, instructions) => {
    let payload = {
      params: {
        email: instructions.email,
        type: instructions.type,
        driveId,
        userId: instructions.userId
      }
    };
    switch (instructions.type) {
      case "Add Owner":
        axios.get("/api/saveUserToDrive.php", payload).then((resp) => {
          instructions.callback(resp.data);
        });
        break;
      case "Add Owner step 2":
        set(fetchDriveUsersQuery(driveId), (was) => {
          let newDriveUsers = { ...was };
          let newOwners = [...was.owners];
          newOwners.push({
            email: instructions.email,
            isUser: false,
            screenName: instructions.screenName,
            userId: instructions.userId
          });
          newDriveUsers["owners"] = newOwners;
          return newDriveUsers;
        });
        break;
      case "Add Admin":
        axios.get("/api/saveUserToDrive.php", payload).then((resp) => {
          instructions.callback(resp.data);
        });
        break;
      case "Add Admin step 2":
        set(fetchDriveUsersQuery(driveId), (was) => {
          let newDriveUsers = { ...was };
          let newAdmins = [...was.admins];
          newAdmins.push({
            email: instructions.email,
            isUser: false,
            screenName: instructions.screenName,
            userId: instructions.userId
          });
          newDriveUsers["admins"] = newAdmins;
          return newDriveUsers;
        });
        break;
      case "Remove User":
        set(fetchDriveUsersQuery(driveId), (was) => {
          let newDriveUsers = { ...was };
          if (instructions.userRole === "owner") {
            let newOwners = [...was.owners];
            for (let x = 0; x < instructions.userId.length; x++) {
              for (let [i2, owner] of newOwners.entries()) {
                if (owner.userId === instructions.userId[x].userId) {
                  newOwners.splice(i2, 1);
                  break;
                }
              }
            }
            newDriveUsers["owners"] = newOwners;
          }
          if (instructions.userRole === "admin") {
            let newAdmins = [...was.admins];
            for (let x = 0; x < instructions.userId.length; x++) {
              for (let [i2, admin] of newAdmins.entries()) {
                if (admin.userId === instructions.userId[x].userId) {
                  newAdmins.splice(i2, 1);
                  break;
                }
              }
            }
            newDriveUsers["admins"] = newAdmins;
          }
          return newDriveUsers;
        });
        axios.get("/api/saveUserToDrive.php", payload);
        break;
      case "To Owner":
        set(fetchDriveUsersQuery(driveId), (was) => {
          let newDriveUsers = { ...was };
          let userEntry = [];
          let newAdmins = [...was.admins];
          for (let x = 0; x < instructions.userId.length; x++) {
            for (let [i2, admin] of newAdmins.entries()) {
              if (admin.userId === instructions.userId[x].userId) {
                userEntry.push(admin);
                newAdmins.splice(i2, 1);
                break;
              }
            }
          }
          newDriveUsers["admins"] = newAdmins;
          let newOwners = [...was.owners, ...userEntry];
          newDriveUsers["owners"] = newOwners;
          return newDriveUsers;
        });
        axios.get("/api/saveUserToDrive.php", payload);
        break;
      case "To Admin":
        set(fetchDriveUsersQuery(driveId), (was) => {
          let newDriveUsers = { ...was };
          let userEntry = [];
          let newOwners = [...was.owners];
          for (let x = 0; x < instructions.userId.length; x++) {
            for (let [i2, owner] of newOwners.entries()) {
              if (owner.userId === instructions.userId[x].userId) {
                if (owner.isUser) {
                  newDriveUsers.usersRole = "admin";
                }
                userEntry.push(owner);
                newOwners.splice(i2, 1);
                break;
              }
            }
          }
          newDriveUsers["owners"] = newOwners;
          let newAdmins = [...was.admins, ...userEntry];
          newDriveUsers["admins"] = newAdmins;
          return newDriveUsers;
        });
        axios.get("/api/saveUserToDrive.php", payload);
        break;
      default:
        console.log(`type ${instructions.type} not handled`);
    }
  }
});
const sortOptions = Object.freeze({
  DEFAULT: "defaultOrder",
  LABEL_ASC: "label ascending",
  LABEL_DESC: "label descending",
  CREATION_DATE_ASC: "creation date ascending",
  CREATION_DATE_DESC: "creation date descending"
});
const globalSelectedNodesAtom = Recoil_index_8({
  key: "globalSelectedNodesAtom",
  default: []
});
Recoil_index_8({
  key: "selectedDriveAtom",
  default: ""
});
const dragStateAtom = Recoil_index_8({
  key: "dragStateAtom",
  default: {
    isDragging: false,
    draggedItemsId: null,
    draggedOverDriveId: null,
    initialDriveId: null,
    isDraggedOverBreadcrumb: false,
    dragShadowDriveId: null,
    dragShadowParentId: null,
    openedFoldersInfo: null,
    copyMode: false
  }
});
const movingGradient = Ue`
  0% { background-position: -250px 0; }
  100% { background-position: 250px 0; }
`;
styled.table`
  width: 850px;
  border-radius: 5px;
`;
styled.tr`
  border-bottom: 2px solid black;
`;
styled.td`
  height: 40px;
  vertical-align: middle;
  padding: 8px;

  &.Td2 {
    width: 50px;
  }

  &.Td3 {
    width: 400px;
  }
`;
styled.tbody``;
styled.span`
  background-color: var(--mainGray);
  width: 70px;
  height: 16px;
  border-radius: 5px;
`;
styled.span`
  height: 14px;
  border-radius: 5px;
  background: linear-gradient(
    to right,
    var(--mainGray) 20%,
    var(--mainGray) 50%,
    var(--mainGray) 80%
  );
  background-size: 500px 100px;
  animation-name: ${movingGradient};
  animation-duration: 1s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  animation-fill-mode: forwards;
`;
const loadDriveInfoQuery = Recoil_index_11({
  key: "loadDriveInfoQuery",
  get: (driveId) => async ({ get, set }) => {
    const { data } = await axios.get(
      `/api/loadFolderContent.php?driveId=${driveId}&init=true`
    );
    return data;
  }
});
Recoil_index_10({
  key: "driveInstanceIdDictionary",
  default: []
});
const folderDictionary = Recoil_index_10({
  key: "folderDictionary",
  default: Recoil_index_11({
    key: "folderDictionary/Default",
    get: (driveIdFolderId) => ({ get }) => {
      if (driveIdFolderId.driveId === "") {
        return { folderInfo: {}, contentsDictionary: {}, contentIds: {} };
      }
      const driveInfo = get(loadDriveInfoQuery(driveIdFolderId.driveId));
      let defaultOrder = [];
      let contentsDictionary = {};
      const contentsDictionaryByDoenetId = {};
      let contentIds = {};
      let folderInfo = {};
      for (let item of driveInfo.results) {
        if (item.parentFolderId === driveIdFolderId.folderId) {
          defaultOrder.push(item.itemId);
          contentsDictionary[item.itemId] = item;
          contentsDictionaryByDoenetId[item.doenetId] = item;
        }
        if (item.itemId === driveIdFolderId.folderId) {
          folderInfo = item;
        }
      }
      defaultOrder = sortItems({
        sortKey: sortOptions.DEFAULT,
        nodeObjs: contentsDictionary,
        defaultFolderChildrenIds: defaultOrder
      });
      contentIds[sortOptions.DEFAULT] = defaultOrder;
      return {
        folderInfo,
        contentsDictionary,
        contentIds,
        contentsDictionaryByDoenetId
      };
    }
  })
});
const folderDictionaryFilterAtom = Recoil_index_10({
  key: "folderDictionaryFilterAtom",
  default: Recoil_index_11({
    key: "folderDictionaryFilterAtom/Default",
    get: () => () => {
      return "All";
    }
  })
});
const folderDictionaryFilterSelector = Recoil_index_11({
  get: (driveIdFolderId) => ({ get }) => {
    const filter = get(
      folderDictionaryFilterAtom({ driveId: driveIdFolderId.driveId })
    );
    const fD = get(folderDictionary(driveIdFolderId));
    let fDreturn = { ...fD };
    fDreturn.contentIds = { ...fD.contentIds };
    if (filter === "Released Only") {
      let newDefaultOrder = [];
      for (let cid of fD.contentIds.defaultOrder) {
        if (fD.contentsDictionary[cid].isReleased === "1" || fD.contentsDictionary[cid].itemType === "Folder") {
          newDefaultOrder.push(cid);
        }
      }
      fDreturn.contentIds.defaultOrder = newDefaultOrder;
    } else if (filter === "Assigned Only") {
      let newDefaultOrder = [];
      for (let cid of fD.contentIds.defaultOrder) {
        if (fD.contentsDictionary[cid].isAssigned === "1" || fD.contentsDictionary[cid].itemType === "Folder") {
          newDefaultOrder.push(cid);
        }
      }
      fDreturn.contentIds.defaultOrder = newDefaultOrder;
    }
    return fDreturn;
  }
});
const folderSortOrderAtom = Recoil_index_10({
  key: "folderSortOrderAtom",
  default: sortOptions.DEFAULT
});
const folderCacheDirtyAtom = Recoil_index_10({
  key: "foldedCacheDirtyAtom",
  default: false
});
Recoil_index_11({
  get: (driveIdInstanceIdFolderId) => ({ get }) => {
    const { driveId, folderId } = driveIdInstanceIdFolderId;
    const { folderInfo, contentsDictionary, contentIds } = get(
      folderDictionaryFilterSelector({ driveId, folderId })
    );
    const folderSortOrder = get(
      folderSortOrderAtom(driveIdInstanceIdFolderId)
    );
    let contentIdsArr = contentIds[folderSortOrder] ?? [];
    const sortedContentIdsNotInCache = !contentIdsArr.length && contentIds[sortOptions.DEFAULT].length;
    if (sortedContentIdsNotInCache) {
      contentIdsArr = sortItems({
        sortKey: folderSortOrder,
        nodeObjs: contentsDictionary,
        defaultFolderChildrenIds: contentIds[sortOptions.DEFAULT]
      });
    }
    let newFolderInfo = { ...folderInfo };
    newFolderInfo.sortBy = folderSortOrder;
    return { folderInfo: newFolderInfo, contentsDictionary, contentIdsArr };
  }
});
const sortItems = ({ sortKey, nodeObjs, defaultFolderChildrenIds }) => {
  let tempArr = [...defaultFolderChildrenIds];
  switch (sortKey) {
    case sortOptions.DEFAULT:
      tempArr.sort((a, b) => {
        return nodeObjs[a].sortOrder.localeCompare(nodeObjs[b].sortOrder);
      });
      break;
    case sortOptions.LABEL_ASC:
      tempArr.sort((a, b) => {
        return nodeObjs[a].label.localeCompare(nodeObjs[b].label);
      });
      break;
    case sortOptions.LABEL_DESC:
      tempArr.sort((b, a) => {
        return nodeObjs[a].label.localeCompare(nodeObjs[b].label);
      });
      break;
    case sortOptions.CREATION_DATE_ASC:
      tempArr.sort((a, b) => {
        return new Date(nodeObjs[a].creationDate) - new Date(nodeObjs[b].creationDate);
      });
      break;
    case sortOptions.CREATION_DATE_DESC:
      tempArr.sort((b, a) => {
        return new Date(nodeObjs[a].creationDate) - new Date(nodeObjs[b].creationDate);
      });
      break;
  }
  return tempArr;
};
const getLexicographicOrder = ({
  index,
  nodeObjs,
  defaultFolderChildrenIds = []
}) => {
  var _a, _b;
  let prevItemId = "";
  let nextItemId = "";
  let prevItemOrder = "";
  let nextItemOrder = "";
  if (defaultFolderChildrenIds.length !== 0) {
    if (index <= 0) {
      nextItemId = defaultFolderChildrenIds[0];
    } else if (index >= defaultFolderChildrenIds.length) {
      prevItemId = defaultFolderChildrenIds[defaultFolderChildrenIds.length - 1];
    } else {
      prevItemId = defaultFolderChildrenIds[index - 1];
      nextItemId = defaultFolderChildrenIds[index];
    }
    if (nodeObjs[prevItemId])
      prevItemOrder = ((_a = nodeObjs == null ? void 0 : nodeObjs[prevItemId]) == null ? void 0 : _a.sortOrder) ?? "";
    if (nodeObjs[nextItemId])
      nextItemOrder = ((_b = nodeObjs == null ? void 0 : nodeObjs[nextItemId]) == null ? void 0 : _b.sortOrder) ?? "";
  }
  const sortOrder = getSortOrder(prevItemOrder, nextItemOrder);
  return sortOrder;
};
const fetchCoursesQuery = Recoil_index_8({
  key: "fetchCoursesQuery",
  default: Recoil_index_9({
    key: "fetchCoursesQuery/Default",
    get: async () => {
      const { data: oldData } = await axios.get(`/api/loadAvailableDrives.php`);
      return oldData;
    }
  })
});
Recoil_index_9({
  key: "fetchDrivesSelector",
  get: ({ get }) => {
    return get(fetchCoursesQuery);
  },
  set: ({ get, set }, labelTypeDriveIdColorImage) => {
    let driveData = get(fetchCoursesQuery);
    let newDriveData = { ...driveData };
    newDriveData.driveIdsAndLabels = [...driveData.driveIdsAndLabels];
    let params = {
      driveId: labelTypeDriveIdColorImage.newDriveId,
      label: labelTypeDriveIdColorImage.label,
      type: labelTypeDriveIdColorImage.type,
      image: labelTypeDriveIdColorImage.image,
      color: labelTypeDriveIdColorImage.color
    };
    let newDrive;
    if (labelTypeDriveIdColorImage.type === "new content drive") {
      newDrive = {
        driveId: labelTypeDriveIdColorImage.newDriveId,
        isShared: "0",
        label: labelTypeDriveIdColorImage.label,
        type: "content"
      };
      newDriveData.driveIdsAndLabels.unshift(newDrive);
      set(fetchCoursesQuery, newDriveData);
      const payload = { params };
      axios.get("/api/addDrive.php", payload).then((resp) => console.log(">>>resp", resp.data));
    } else if (labelTypeDriveIdColorImage.type === "new course drive") {
      newDrive = {
        driveId: labelTypeDriveIdColorImage.newDriveId,
        isShared: "0",
        label: labelTypeDriveIdColorImage.label,
        type: "course",
        image: labelTypeDriveIdColorImage.image,
        color: labelTypeDriveIdColorImage.color,
        subType: "Administrator"
      };
      newDriveData.driveIdsAndLabels.unshift(newDrive);
      set(fetchCoursesQuery, newDriveData);
      const payload = { params };
      axios.get("/api/addDrive.php", payload);
    } else if (labelTypeDriveIdColorImage.type === "update drive label") {
      for (let [i2, drive] of newDriveData.driveIdsAndLabels.entries()) {
        if (drive.driveId === labelTypeDriveIdColorImage.newDriveId) {
          let newDrive2 = { ...drive };
          newDrive2.label = labelTypeDriveIdColorImage.label;
          newDriveData.driveIdsAndLabels[i2] = newDrive2;
          break;
        }
      }
      set(fetchCoursesQuery, newDriveData);
      const payload = { params };
      axios.get("/api/updateDrive.php", payload);
    } else if (labelTypeDriveIdColorImage.type === "update drive color") {
      for (let [i2, drive] of newDriveData.driveIdsAndLabels.entries()) {
        if (drive.driveId === labelTypeDriveIdColorImage.newDriveId) {
          let newDrive2 = { ...drive };
          newDrive2.color = labelTypeDriveIdColorImage.color;
          newDrive2.image = labelTypeDriveIdColorImage.image;
          newDriveData.driveIdsAndLabels[i2] = newDrive2;
          break;
        }
      }
      set(fetchCoursesQuery, newDriveData);
      const payload = { params };
      axios.get("/api/updateDrive.php", payload);
    } else if (labelTypeDriveIdColorImage.type === "update drive image") {
      for (let [i2, drive] of newDriveData.driveIdsAndLabels.entries()) {
        if (drive.driveId === labelTypeDriveIdColorImage.newDriveId) {
          let newDrive2 = { ...drive };
          newDrive2.image = labelTypeDriveIdColorImage.image;
          newDrive2.color = labelTypeDriveIdColorImage.color;
          newDriveData.driveIdsAndLabels[i2] = newDrive2;
          break;
        }
      }
      set(fetchCoursesQuery, newDriveData);
      const payload = { params };
      axios.get("/api/updateDrive.php", payload);
    } else if (labelTypeDriveIdColorImage.type === "delete drive") {
      let driveIdsAndLabelsLength = newDriveData.driveIdsAndLabels;
      for (let i2 = 0; i2 < driveIdsAndLabelsLength.length; i2++) {
        for (let x = 0; x < labelTypeDriveIdColorImage.newDriveId.length; x++) {
          if (driveIdsAndLabelsLength[i2].driveId === labelTypeDriveIdColorImage.newDriveId[x]) {
            newDriveData.driveIdsAndLabels.splice(i2, 1);
            i2 = i2 == 0 ? i2 : i2 - 1;
          }
        }
      }
      set(fetchCoursesQuery, newDriveData);
      const payload = { params };
      axios.get("/api/updateDrive.php", payload);
    }
  }
});
const folderOpenAtom = Recoil_index_10({
  key: "folderOpenAtom",
  default: false
});
Recoil_index_11({
  key: "folderOpenSelector",
  get: (driveInstanceIdItemId) => ({ get }) => {
    return get(folderOpenAtom(driveInstanceIdItemId));
  },
  set: (driveInstanceIdDriveIdItemId) => ({ get, set }) => {
    const isOpen = get(folderOpenAtom(driveInstanceIdDriveIdItemId));
    if (isOpen) {
      const folder = get(
        folderDictionaryFilterSelector({
          driveId: driveInstanceIdDriveIdItemId.driveId,
          folderId: driveInstanceIdDriveIdItemId.itemId
        })
      );
      const itemIds = folder.contentIds.defaultOrder;
      const globalItemsSelected = get(globalSelectedNodesAtom);
      let newGlobalSelected = [];
      for (let itemObj of globalItemsSelected) {
        if (itemIds.includes(itemObj.itemId)) {
          const { parentFolderId, ...atomFormat } = itemObj;
          set(selectedDriveItemsAtom(atomFormat), false);
        } else {
          newGlobalSelected.push(itemObj);
        }
      }
      set(globalSelectedNodesAtom, newGlobalSelected);
    }
    set(folderOpenAtom(driveInstanceIdDriveIdItemId), !isOpen);
  }
});
Recoil_index_10({
  key: "drivePathSyncFamily",
  default: {
    driveId: "",
    parentFolderId: "",
    itemId: "",
    type: ""
  }
});
React.memo(function Node() {
  return /* @__PURE__ */ jsx(
    "div",
    {
      style: {
        // width: "840px",
        padding: "8px",
        marginLeft: "47.5%"
      },
      children: /* @__PURE__ */ jsx("div", { className: "noselect", style: { justifyContent: "center" }, children: "EMPTY" })
    }
  );
});
React.memo(function Node2(props) {
  const indentPx = 30;
  return /* @__PURE__ */ jsx(
    "div",
    {
      "data-test": "dragShadow",
      style: {
        width: "100%",
        height: "33px",
        marginLeft: `${props.indentLevel * indentPx}px`,
        padding: "0px",
        backgroundColor: "var(--mainGray)",
        color: "var(--mainGray)",
        boxShadow: "0 0 3px var(--canvastext)",
        border: "2px dotted var(--solidLightBlue)"
      },
      children: /* @__PURE__ */ jsx("div", { className: "noselect", children: "." })
    }
  );
});
const selectedDriveItemsAtom = Recoil_index_10({
  key: "selectedDriveItemsAtom",
  default: false
});
const clearDriveAndItemSelections = Recoil_index_9({
  key: "clearDriveAndItemSelections",
  get: () => null,
  set: ({ get, set }) => {
    const globalItemsSelected = get(globalSelectedNodesAtom);
    for (let itemObj of globalItemsSelected) {
      const { parentFolderId, ...atomFormat } = itemObj;
      set(selectedDriveItemsAtom(atomFormat), false);
    }
    if (globalItemsSelected.length > 0) {
      set(globalSelectedNodesAtom, []);
    }
    const globalDrivesSelected = get(drivecardSelectedNodesAtom);
    if (globalDrivesSelected.length > 0) {
      set(drivecardSelectedNodesAtom, []);
    }
  }
});
const driveInstanceParentFolderIdAtom = Recoil_index_10({
  key: "driveInstanceParentFolderIdAtom",
  default: Recoil_index_11({
    key: "driveInstanceParentFolderIdAtom/Default",
    get: (driveInstanceId) => () => {
      return driveInstanceId;
    }
  })
});
Recoil_index_11({
  key: "selectedDriveItems",
  // get:(driveIdDriveInstanceIdItemId) =>({get})=>{
  //   return get(selectedDriveItemsAtom(driveIdDriveInstanceIdItemId));
  // },
  set: (driveIdDriveInstanceIdItemId) => ({ get, set }, instruction) => {
    const globalSelected = get(globalSelectedNodesAtom);
    const isSelected = get(
      selectedDriveItemsAtom(driveIdDriveInstanceIdItemId)
    );
    const { driveId, driveInstanceId, itemId } = driveIdDriveInstanceIdItemId;
    let lastSelectedItem = globalSelected[globalSelected.length - 1];
    function buildItemIdsAndParentIds({
      parentFolderId,
      driveInstanceId: driveInstanceId2,
      driveId: driveId2,
      itemIdArr = [],
      parentFolderIdArr = []
    }) {
      const folderObj = get(
        folderDictionaryFilterSelector({ driveId: driveId2, folderId: parentFolderId })
      );
      for (let itemId2 of folderObj.contentIds.defaultOrder) {
        itemIdArr.push(itemId2);
        parentFolderIdArr.push(parentFolderId);
        if (folderObj.contentsDictionary[itemId2].itemType === "Folder" || folderObj.contentsDictionary[itemId2].itemType === "Collection") {
          const isOpen = get(
            folderOpenAtom({ driveInstanceId: driveInstanceId2, driveId: driveId2, itemId: itemId2 })
          );
          if (isOpen) {
            const [folderItemIdArr, folderParentFolderIdsArr] = buildItemIdsAndParentIds({
              parentFolderId: itemId2,
              driveInstanceId: driveInstanceId2,
              driveId: driveId2
            });
            itemIdArr = [...itemIdArr, ...folderItemIdArr];
            parentFolderIdArr = [
              ...parentFolderIdArr,
              ...folderParentFolderIdsArr
            ];
          }
        }
      }
      return [itemIdArr, parentFolderIdArr];
    }
    let itemInfo = { ...driveIdDriveInstanceIdItemId };
    switch (instruction.instructionType) {
      case "one item":
        globalSelected.forEach((itemObj) => {
          if (driveIdDriveInstanceIdItemId.itemId !== itemObj.itemId) {
            let itemInfo2 = { ...itemObj };
            delete itemInfo2["parentFolderId"];
            set(selectedDriveItemsAtom(itemInfo2), false);
          }
        });
        set(selectedDriveItemsAtom(driveIdDriveInstanceIdItemId), true);
        itemInfo["parentFolderId"] = instruction.parentFolderId;
        set(globalSelectedNodesAtom, [itemInfo]);
        break;
      case "add item":
        if (isSelected) {
          set(selectedDriveItemsAtom(driveIdDriveInstanceIdItemId), false);
          let newGlobalSelected = [...globalSelected];
          let index;
          for (const [i2, obj] of newGlobalSelected.entries()) {
            if (obj.driveId === driveId && obj.itemId === itemId && obj.driveInstanceId === driveInstanceId) {
              index = i2;
              break;
            }
          }
          newGlobalSelected.splice(index, 1);
          set(globalSelectedNodesAtom, newGlobalSelected);
        } else {
          set(selectedDriveItemsAtom(driveIdDriveInstanceIdItemId), true);
          itemInfo["parentFolderId"] = instruction.parentFolderId;
          set(globalSelectedNodesAtom, [...globalSelected, itemInfo]);
        }
        break;
      case "range to item":
        if (globalSelected.length === 0 || (lastSelectedItem == null ? void 0 : lastSelectedItem.driveInstanceId) !== driveInstanceId) {
          set(selectedDriveItemsAtom(driveIdDriveInstanceIdItemId), true);
          itemInfo["parentFolderId"] = instruction.parentFolderId;
          set(globalSelectedNodesAtom, [itemInfo]);
        } else {
          const driveInstanceParentFolderId = get(
            driveInstanceParentFolderIdAtom(driveInstanceId)
          );
          let [arrayOfItemIds, parentFolderIds] = buildItemIdsAndParentIds({
            parentFolderId: driveInstanceParentFolderId,
            driveInstanceId,
            driveId
          });
          let foundClickedItem = false;
          let foundLastItem = false;
          let addToGlobalSelected = [];
          let needToReverseOrder = false;
          for (const [i2, testItemId] of arrayOfItemIds.entries()) {
            if (!foundLastItem && testItemId === lastSelectedItem.itemId) {
              foundLastItem = true;
              if (foundClickedItem) {
                needToReverseOrder = true;
              }
            }
            if (!foundClickedItem && testItemId === itemId) {
              foundClickedItem = true;
            }
            if (foundClickedItem || foundLastItem) {
              const isSelected2 = get(
                selectedDriveItemsAtom({
                  driveId,
                  driveInstanceId,
                  itemId: testItemId
                })
              );
              if (!isSelected2) {
                set(
                  selectedDriveItemsAtom({
                    driveId,
                    driveInstanceId,
                    itemId: testItemId
                  }),
                  true
                );
                addToGlobalSelected.push({
                  driveId,
                  driveInstanceId,
                  itemId: testItemId,
                  parentFolderId: parentFolderIds[i2]
                });
              }
              if (foundClickedItem && foundLastItem) {
                break;
              }
            }
          }
          if (needToReverseOrder) {
            addToGlobalSelected.reverse();
          }
          set(globalSelectedNodesAtom, [
            ...globalSelected,
            ...addToGlobalSelected
          ]);
        }
        break;
      case "clear all":
        for (let itemObj of globalSelected) {
          const { parentFolderId, ...atomFormat } = itemObj;
          set(selectedDriveItemsAtom(atomFormat), false);
        }
        set(globalSelectedNodesAtom, []);
        break;
      default:
        console.warn(`Can't handle instruction ${instruction}`);
        break;
    }
  }
});
function ColumnJSX(columnType, item) {
  const assignmentInfoSettings = Recoil_index_21(
    loadAssignmentSelector(item.doenetId)
  );
  let aInfo = {};
  if ((assignmentInfoSettings == null ? void 0 : assignmentInfoSettings.state) === "hasValue") {
    aInfo = assignmentInfoSettings == null ? void 0 : assignmentInfoSettings.contents;
  }
  if (columnType === "Released" && item.isReleased === "1") {
    return /* @__PURE__ */ jsx("span", { style: { textAlign: "center" }, children: /* @__PURE__ */ jsx(FontAwesomeIcon, { icon: faCheck }) });
  } else if (columnType === "Assigned" && item.isAssigned === "1") {
    return /* @__PURE__ */ jsx("span", { style: { textAlign: "center" }, children: /* @__PURE__ */ jsx(FontAwesomeIcon, { icon: faCheck }) });
  } else if (columnType === "Public" && item.isPublic === "1") {
    return /* @__PURE__ */ jsx("span", { style: { textAlign: "center" }, children: /* @__PURE__ */ jsx(FontAwesomeIcon, { icon: faCheck }) });
  } else if (columnType === "Due Date" && item.isReleased === "1") {
    return /* @__PURE__ */ jsx("span", { style: { textAlign: "center" }, children: aInfo == null ? void 0 : aInfo.dueDate });
  } else if (columnType === "Assigned Date" && item.isReleased === "1") {
    return /* @__PURE__ */ jsx("span", { style: { textAlign: "center" }, children: aInfo == null ? void 0 : aInfo.assignedDate });
  }
  return /* @__PURE__ */ jsx("span", {});
}
React.memo(function DoenetML2(props) {
  var _a, _b;
  const isSelected = Recoil_index_20(
    selectedDriveItemsAtom({
      driveId: props.driveId,
      driveInstanceId: props.driveInstanceId,
      itemId: props.item.itemId
    })
  );
  const [dragState] = Recoil_index_22(dragStateAtom);
  const {
    onDragStart,
    onDrag,
    onDragEnd,
    renderDragGhost,
    registerDropTarget,
    unregisterDropTarget
  } = useDnDCallbacks();
  const globalSelectedNodes = Recoil_index_20(globalSelectedNodesAtom);
  const parentFolderSortOrder = Recoil_index_20(
    folderSortOrderAtom({
      driveId: props.driveId,
      instanceId: props.driveInstanceId,
      folderId: (_a = props.item) == null ? void 0 : _a.parentFolderId
    })
  );
  const parentFolderSortOrderRef = reactExports.useRef(parentFolderSortOrder);
  const { insertDragShadow } = useDragShadowCallbacks();
  const indentPx = 30;
  let woIndent = 250 - props.indentLevel * indentPx;
  let columns = `${woIndent}px repeat(4,1fr)`;
  if (props.numColumns === 4) {
    columns = `${woIndent}px repeat(3,1fr)`;
  } else if (props.numColumns === 3) {
    columns = `${woIndent}px 1fr 1fr`;
  } else if (props.numColumns === 2) {
    columns = `${woIndent}px 1fr`;
  } else if (props.numColumns === 1) {
    columns = "100%";
  }
  let bgcolor = "var(--canvas)";
  let widthSize = "auto";
  let marginSize = "0";
  let column2 = ColumnJSX(props.columnTypes[0], props.item);
  let column3 = ColumnJSX(props.columnTypes[1], props.item);
  let column4 = ColumnJSX(props.columnTypes[2], props.item);
  let column5 = ColumnJSX(props.columnTypes[3], props.item);
  let label = (_b = props.item) == null ? void 0 : _b.label;
  if (props.isNav) {
    widthSize = "224px";
    marginSize = "0px";
    column2 = null;
    column3 = null;
    column4 = null;
    column5 = null;
    columns = "1fr";
  }
  if (isSelected || props.isNav && props.item.itemId === props.pathItemId) {
    bgcolor = "var(--lightBlue)";
  }
  if (isSelected && dragState.isDragging) {
    bgcolor = "var(--mainGray)";
  }
  reactExports.useEffect(() => {
    parentFolderSortOrderRef.current = parentFolderSortOrder;
  }, [parentFolderSortOrder]);
  const onDragOver = ({ x, y, dropTargetRef }) => {
    const dropTargetTopY = dropTargetRef == null ? void 0 : dropTargetRef.offsetTop;
    const dropTargetHeight = dropTargetRef == null ? void 0 : dropTargetRef.clientHeight;
    const cursorY = y;
    const cursorArea = (cursorY - dropTargetTopY) / dropTargetHeight;
    if (parentFolderSortOrderRef.current === sortOptions.DEFAULT) {
      if (cursorArea < 0.5) {
        insertDragShadow({
          driveIdFolderId: { driveId: props.driveId, folderId: props.driveId },
          position: "beforeCurrent",
          itemId: props.item.itemId,
          parentId: props.item.parentFolderId
        });
      } else if (cursorArea < 1) {
        insertDragShadow({
          driveIdFolderId: { driveId: props.driveId, folderId: props.driveId },
          position: "afterCurrent",
          itemId: props.item.itemId,
          parentId: props.item.parentFolderId
        });
      }
    }
  };
  let doenetMLJSX = /* @__PURE__ */ jsx(
    "div",
    {
      "data-doenet-driveinstanceid": props.driveInstanceId,
      role: "button",
      "data-test": "driveItem",
      tabIndex: "0",
      className: "noselect nooutline",
      style: {
        cursor: "pointer",
        padding: "8px",
        border: "0px",
        borderBottom: "2px solid var(--canvas)",
        backgroundColor: bgcolor,
        width: widthSize,
        // boxShadow: borderSide,
        marginLeft: marginSize
      },
      onKeyDown: (e) => {
      },
      onClick: (e) => {
        var _a2, _b2, _c;
        e.preventDefault();
        e.stopPropagation();
        if (!e.shiftKey && !e.metaKey) {
          (_a2 = props == null ? void 0 : props.clickCallback) == null ? void 0 : _a2.call(props, {
            driveId: props.driveId,
            parentFolderId: props.item.parentFolderId,
            itemId: props.item.itemId,
            driveInstanceId: props.driveInstanceId,
            type: "DoenetML",
            instructionType: "one item"
          });
        } else if (e.shiftKey && !e.metaKey) {
          (_b2 = props == null ? void 0 : props.clickCallback) == null ? void 0 : _b2.call(props, {
            driveId: props.driveId,
            parentFolderId: props.item.parentFolderId,
            itemId: props.item.itemId,
            driveInstanceId: props.driveInstanceId,
            type: "DoenetML",
            instructionType: "range to item"
          });
        } else if (!e.shiftKey && e.metaKey) {
          (_c = props == null ? void 0 : props.clickCallback) == null ? void 0 : _c.call(props, {
            driveId: props.driveId,
            parentFolderId: props.item.parentFolderId,
            itemId: props.item.itemId,
            driveInstanceId: props.driveInstanceId,
            type: "DoenetML",
            instructionType: "add item"
          });
        }
      },
      onDoubleClick: (e) => {
        var _a2;
        e.preventDefault();
        e.stopPropagation();
        (_a2 = props == null ? void 0 : props.doubleClickCallback) == null ? void 0 : _a2.call(props, {
          driveId: props.driveId,
          item: props.item,
          driveInstanceId: props.driveInstanceId,
          route: props.route,
          isNav: props.isNav,
          pathItemId: props.pathItemId,
          type: "DoenetML"
        });
      },
      children: /* @__PURE__ */ jsxs(
        "div",
        {
          style: {
            marginLeft: `${props.indentLevel * indentPx}px`,
            display: "grid",
            gridTemplateColumns: columns,
            gridTemplateRows: "1fr",
            alignContent: "center"
          },
          children: [
            /* @__PURE__ */ jsxs("p", { style: { display: "inline", margin: "0px" }, children: [
              /* @__PURE__ */ jsx("span", { "data-test": "doenetMLIcon", children: /* @__PURE__ */ jsx(FontAwesomeIcon, { icon: faCode }) }),
              /* @__PURE__ */ jsxs("span", { "data-test": "doenetMLLabel", children: [
                label,
                " "
              ] })
            ] }),
            props.numColumns >= 2 ? column2 : null,
            props.numColumns >= 3 ? column3 : null,
            props.numColumns >= 4 ? column4 : null,
            props.numColumns >= 5 ? column5 : null
          ]
        }
      )
    }
  );
  if (!props.isNav) {
    const onDragStartCallback = () => {
      var _a2, _b2;
      if (globalSelectedNodes.length === 0 || !isSelected) {
        (_a2 = props == null ? void 0 : props.clickCallback) == null ? void 0 : _a2.call(props, {
          instructionType: "clear all",
          type: itemType.DOENETML
        });
        (_b2 = props == null ? void 0 : props.clickCallback) == null ? void 0 : _b2.call(props, {
          driveId: props.driveId,
          parentFolderId: props.item.parentFolderId,
          itemId: props.item.itemId,
          driveInstanceId: props.driveInstanceId,
          instructionType: "one item",
          type: itemType.DOENETML
        });
      }
    };
    if (!props.isViewOnly) {
      let draggableClassName = "";
      doenetMLJSX = /* @__PURE__ */ jsx(
        Draggable,
        {
          id: props.item.itemId,
          className: draggableClassName,
          onDragStart: ({ ev }) => onDragStart({
            ev,
            nodeId: props.item.itemId,
            driveId: props.driveId,
            onDragStartCallback
          }),
          onDrag,
          onDragEnd,
          ghostElement: renderDragGhost(props.item.itemId, doenetMLJSX),
          children: doenetMLJSX
        },
        `dnode${props.driveInstanceId}${props.item.itemId}`
      );
      doenetMLJSX = /* @__PURE__ */ jsx(
        WithDropTarget,
        {
          id: props.item.itemId,
          registerDropTarget,
          unregisterDropTarget,
          dropCallbacks: {
            onDragOver
          },
          children: doenetMLJSX
        },
        `wdtnode${props.driveInstanceId}${props.item.itemId}`
      );
    }
  }
  return doenetMLJSX;
});
function useDnDCallbacks() {
  const { dropState, dropActions } = reactExports.useContext(DropTargetsContext);
  const [dragState, setDragState] = Recoil_index_22(dragStateAtom);
  const globalSelectedNodes = Recoil_index_20(globalSelectedNodesAtom);
  const { replaceDragShadow, removeDragShadow, cleanUpDragShadow } = useDragShadowCallbacks();
  const { moveItems, copyItems } = useSockets();
  const numItems = Recoil_index_20(globalSelectedNodesAtom).length;
  const optionKeyPressed = useKeyPressedListener("Alt");
  const optionKeyPressedRef = reactExports.useRef(optionKeyPressed);
  reactExports.useEffect(() => {
    setDragState((dragState2) => ({
      ...dragState2,
      copyMode: optionKeyPressed
    }));
    optionKeyPressedRef.current = optionKeyPressed;
  }, [optionKeyPressed, setDragState]);
  const onDragStart = ({ ev = null, nodeId, driveId, onDragStartCallback }) => {
    let draggedItemsId = /* @__PURE__ */ new Set();
    if (globalSelectedNodes.length === 0) {
      draggedItemsId.add(nodeId);
    } else {
      const globalSelectedNodeIds = [];
      for (let globalSelectedNode of globalSelectedNodes)
        globalSelectedNodeIds.push(globalSelectedNode.itemId);
      draggedItemsId = new Set(globalSelectedNodeIds);
    }
    let copyMode = false;
    if (ev && ev.altKey)
      copyMode = true;
    setDragState((dragState2) => ({
      ...dragState2,
      isDragging: true,
      draggedOverDriveId: driveId,
      initialDriveId: driveId,
      draggedItemsId,
      openedFoldersInfo: [],
      copyMode
    }));
    onDragStartCallback == null ? void 0 : onDragStartCallback();
  };
  const onDrag = ({ clientX, clientY, translation, id, ev }) => {
    dropActions.handleDrag(clientX, clientY);
  };
  const onDragOverContainer = ({ id, driveId, isBreadcrumb = false }) => {
    setDragState((dragState2) => {
      const { draggedOverDriveId, initialDriveId, copyMode } = dragState2;
      let newDraggedOverDriveId = draggedOverDriveId;
      let newCopyMode = copyMode;
      if (draggedOverDriveId !== driveId) {
        newDraggedOverDriveId = driveId;
      }
      newCopyMode = initialDriveId !== driveId;
      return {
        ...dragState2,
        draggedOverDriveId: newDraggedOverDriveId,
        isDraggedOverBreadcrumb: isBreadcrumb,
        copyMode: newCopyMode
      };
    });
  };
  const onDragEnd = () => {
    replaceDragShadow().then((replaceDragShadowResp) => {
      if (!replaceDragShadowResp || Object.keys(replaceDragShadowResp).length === 0)
        return;
      const { targetDriveId, targetFolderId, index } = replaceDragShadowResp;
      const draggingAcrossDrives = (globalSelectedNodes == null ? void 0 : globalSelectedNodes[0].driveId) !== targetDriveId;
      const copyMode = dragState.copyMode || draggingAcrossDrives;
      if (copyMode) {
        copyItems({
          items: globalSelectedNodes,
          targetDriveId,
          targetFolderId,
          index
        });
      } else {
        moveItems(replaceDragShadowResp);
      }
    });
    cleanUpDragShadow();
    removeDragShadow();
    setDragState((dragState2) => ({
      ...dragState2,
      isDragging: false,
      draggedOverDriveId: null,
      initialDriveId: null,
      draggedItemsId: null,
      openedFoldersInfo: [],
      copyMode: false
    }));
    dropActions.handleDrop();
  };
  const onDragExit = ({ driveId, itemId }) => {
    setDragState((dragState2) => {
      const { initialDriveId, copyMode } = dragState2;
      let newCopyMode = copyMode;
      if (initialDriveId !== driveId) {
        newCopyMode = false;
      }
      newCopyMode |= optionKeyPressedRef.current;
      return {
        ...dragState2,
        copyMode: newCopyMode
      };
    });
  };
  const onDragEnterInvalidArea = () => {
  };
  function renderDragGhost(id, element) {
    const dragGhostId = `drag-ghost-${id}`;
    return /* @__PURE__ */ jsx(
      DragGhost,
      {
        id: dragGhostId,
        numItems,
        element,
        copyMode: dragState.copyMode
      }
    );
  }
  return {
    onDragStart,
    onDrag,
    onDragOverContainer,
    onDragEnd,
    onDragExit,
    onDragEnterInvalidArea,
    renderDragGhost,
    registerDropTarget: dropActions.registerDropTarget,
    unregisterDropTarget: dropActions.unregisterDropTarget
  };
}
const nodePathSelector = Recoil_index_11({
  key: "nodePathSelector",
  get: (driveIdFolderId) => ({ get }) => {
    const { driveId, folderId } = driveIdFolderId;
    if (!driveId || !folderId)
      return [];
    let path = [];
    let currentNode = folderId;
    while (currentNode && currentNode !== driveId) {
      const folderInfoObj = get(
        folderDictionaryFilterSelector({ driveId, folderId: currentNode })
      );
      path.push({
        folderId: currentNode,
        label: folderInfoObj.folderInfo.label
      });
      currentNode = folderInfoObj.folderInfo.parentFolderId;
    }
    return path;
  }
});
Recoil_index_11({
  key: "nodePathSelector",
  get: (driveIdFolderId) => ({ get }) => {
    var _a;
    const { driveId, folderId } = driveIdFolderId;
    if (!driveId || !folderId)
      return [];
    let children = [];
    let queue = [folderId];
    while (queue.length) {
      let size = queue.length;
      for (let i2 = 0; i2 < size; i2++) {
        let currentNodeId = queue.shift();
        const folderInfoObj = get(
          folderDictionaryFilterSelector({
            driveId,
            folderId: currentNodeId
          })
        );
        children.push(currentNodeId);
        for (let childId of (_a = folderInfoObj == null ? void 0 : folderInfoObj.contentIds) == null ? void 0 : _a[sortOptions.DEFAULT]) {
          queue.push(childId);
        }
      }
    }
    return children;
  }
});
const DragGhost = ({ id, element, numItems, copyMode = false }) => {
  const containerStyle = {
    transform: "rotate(-5deg)",
    zIndex: "10",
    background: "var(--mainGray)",
    width: "40vw",
    border: "2px solid var(--canvastext)",
    padding: "0px",
    height: "38px",
    overflow: "hidden"
  };
  const singleItemStyle = {
    boxShadow: "rgba(0, 0, 0, 0.20) 5px 5px 3px 3px",
    borderRadius: "2px solid var(--canvastext)",
    animation: "dragAnimation 2s",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "var(--mainGray)"
    // marginLeft: "-60px"
  };
  const multipleItemsNumCircleContainerStyle = {
    position: "absolute",
    zIndex: "5",
    top: "6px",
    right: "5px",
    borderRadius: "25px",
    background: "var(--mainBlue)",
    fontSize: "12px",
    color: "var(--canvas)",
    width: "25px",
    height: "25px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  };
  const copyModeIndicatorCircleContainerStyle = {
    position: "absolute",
    zIndex: "5",
    top: "6px",
    left: "5px",
    borderRadius: "25px",
    background: "var(--mainGreen)",
    fontSize: "23px",
    color: "var(--canvas)",
    width: "25px",
    height: "25px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  };
  let dragGhost = /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx("div", { style: singleItemStyle, children: element }) });
  if (numItems >= 2) {
    const numItemsIndicator = /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx("div", { style: multipleItemsNumCircleContainerStyle, children: numItems }) });
    dragGhost = /* @__PURE__ */ jsxs(Fragment, { children: [
      numItemsIndicator,
      dragGhost
    ] });
  }
  if (copyMode) {
    const copyModeIndicator = /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx("div", { style: copyModeIndicatorCircleContainerStyle, children: "+" }) });
    dragGhost = /* @__PURE__ */ jsxs(Fragment, { children: [
      copyModeIndicator,
      dragGhost
    ] });
  }
  dragGhost = /* @__PURE__ */ jsx("div", { id, "data-test": "dragGhost", style: containerStyle, children: dragGhost });
  return dragGhost;
};
const itemHistoryAtom = Recoil_index_10({
  key: "itemHistoryAtom",
  default: Recoil_index_11({
    key: "itemHistoryAtom/Default",
    get: (doenetId) => async () => {
      let draft = {};
      let named = [];
      let autoSaves = [];
      if (!doenetId) {
        return { draft, named, autoSaves };
      }
      const { data } = await axios.get(
        `/api/loadVersions.php?doenetId=${doenetId}`
      );
      draft = data.versions[0];
      for (let version of data.versions) {
        if (version.isDraft === "1") {
          continue;
        }
        if (version.isNamed === "1") {
          named.push(version);
          continue;
        }
        autoSaves.push(version);
      }
      return { draft, named, autoSaves };
    }
  })
});
const drivecardSelectedNodesAtom = Recoil_index_8({
  key: "drivecardSelectedNodesAtom",
  default: []
});
const assignmentDictionary = Recoil_index_10({
  key: "assignmentDictionary",
  default: Recoil_index_11({
    key: "assignmentDictionary/Default",
    get: (driveIditemIddoenetIdparentFolderId) => async ({ get }, instructions) => {
      ({
        driveId: driveIditemIddoenetIdparentFolderId.driveId,
        folderId: driveIditemIddoenetIdparentFolderId.folderId
      });
      if (driveIditemIddoenetIdparentFolderId.doenetId) {
        const aInfo = await get(
          loadAssignmentSelector(
            driveIditemIddoenetIdparentFolderId.doenetId
          )
        );
        if (aInfo) {
          return aInfo;
        } else
          return null;
      } else
        return null;
    }
  })
});
Recoil_index_11({
  key: "assignmentDictionarySelector",
  get: (driveIditemIddoenetIdparentFolderId) => ({ get }) => {
    return get(assignmentDictionary(driveIditemIddoenetIdparentFolderId));
  }
});
function buildTimestamp() {
  const dt = /* @__PURE__ */ new Date();
  return `${dt.getFullYear().toString().padStart(2, "0")}-${(dt.getMonth() + 1).toString().padStart(2, "0")}-${dt.getDate().toString().padStart(2, "0")} ${dt.getHours().toString().padStart(2, "0")}:${dt.getMinutes().toString().padStart(2, "0")}:${dt.getSeconds().toString().padStart(2, "0")}`;
}
function ClipboardLinkButtons(props) {
  const addToast = useToast();
  let link = `http://localhost/#/content?doenetId=${props.doenetId}`;
  if (props.cid) {
    link = `http://localhost/#/content?cid=${props.cid}`;
  }
  let linkData = [];
  if (props.cid) {
    linkData.push(`cid=${props.cid}`);
  }
  if (props.doenetId) {
    linkData.push(`doenetId=${props.doenetId}`);
  }
  let embedLink = `<copy uri="doenet:${linkData.join("&")}" />`;
  return /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs(ButtonGroup, { children: [
    /* @__PURE__ */ jsx(
      lib.CopyToClipboard,
      {
        onCopy: () => addToast("Link copied to clipboard!", toastType.SUCCESS),
        text: link,
        children: /* @__PURE__ */ jsx(
          Button,
          {
            disabled: props.disabled,
            icon: /* @__PURE__ */ jsx(FontAwesomeIcon, { icon: faClipboard }),
            value: "copy link"
          }
        )
      }
    ),
    /* @__PURE__ */ jsx(
      lib.CopyToClipboard,
      {
        onCopy: () => addToast("Embed link copied to clipboard!", toastType.SUCCESS),
        text: embedLink,
        children: /* @__PURE__ */ jsx(
          Button,
          {
            disabled: props.disabled,
            icon: /* @__PURE__ */ jsx(FontAwesomeIcon, { icon: faClipboard }),
            value: "copy embed link"
          }
        )
      }
    ),
    /* @__PURE__ */ jsx(
      Button,
      {
        icon: /* @__PURE__ */ jsx(FontAwesomeIcon, { icon: faExternalLinkAlt }),
        value: "visit",
        disabled: props.disabled,
        onClick: () => window.open(link, "_blank")
      }
    )
  ] }) });
}
function RenameVersionControl(props) {
  let [textFieldFlag, setTextFieldFlag] = reactExports.useState(false);
  let [currentTitle, setCurrentTitle] = reactExports.useState(props.title);
  const renameVersion = Recoil_index_31(
    ({ set }) => async (doenetId, versionId, newTitle) => {
      set(itemHistoryAtom(doenetId), (was) => {
        let newHistory = { ...was };
        newHistory.named = [...was.named];
        let newVersion;
        for (const [i2, version] of newHistory.named.entries()) {
          if (versionId === version.versionId) {
            newVersion = { ...version };
            newVersion.title = newTitle;
            newHistory.named.splice(i2, 1, newVersion);
          }
        }
        let newDBVersion = { ...newVersion, isNewTitle: "1", doenetId };
        axios.post("/api/saveNewVersion.php", newDBVersion);
        return newHistory;
      });
    }
  );
  function renameIfChanged() {
    setTextFieldFlag(false);
    if (props.title !== currentTitle) {
      renameVersion(props.doenetId, props.versionId, currentTitle);
    }
  }
  if (!textFieldFlag) {
    return /* @__PURE__ */ jsx(
      Button,
      {
        disabled: props.disabled,
        onClick: () => setTextFieldFlag(true),
        value: "Rename"
      }
    );
  }
  return /* @__PURE__ */ jsx(
    "input",
    {
      type: "text",
      autoFocus: true,
      value: currentTitle,
      onChange: (e) => {
        setCurrentTitle(e.target.value);
      },
      onKeyDown: (e) => {
        if (e.key === "Enter") {
          renameIfChanged();
        }
      },
      onBlur: () => {
        renameIfChanged();
      }
    }
  );
}
export {
  ClipboardLinkButtons as C,
  RenameVersionControl as R,
  buildTimestamp as b,
  clearDriveAndItemSelections as c,
  drivecardSelectedNodesAtom as d,
  folderDictionary as f,
  globalSelectedNodesAtom as g,
  itemHistoryAtom as i,
  loadAssignmentSelector as l
};
