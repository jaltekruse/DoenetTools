import React from "react";
import {useToast, toastType} from "../Toast.js";
import {
  useRecoilValue
} from "recoil";
import {CopyToClipboard} from "react-copy-to-clipboard";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
  faExternalLinkAlt
} from "@fortawesome/free-solid-svg-icons";
import {
  faClipboard
} from "@fortawesome/free-regular-svg-icons";
import {searchParamAtomFamily} from "../NewToolRoot.js";
import {editorPageIdInitAtom} from "../../_sharedRecoil/EditorViewerRecoil.js";
export default function DoenetMLSettings(props) {
  const initializedDoenetId = useRecoilValue(editorPageIdInitAtom);
  const link = `http://${window.location.host}/content/#/?doenetId=${initializedDoenetId}`;
  const addToast = useToast();
  const paramDoenetId = useRecoilValue(searchParamAtomFamily("doenetId"));
  if (paramDoenetId !== initializedDoenetId) {
    return /* @__PURE__ */ React.createElement("div", {
      style: props.style
    });
  }
  return /* @__PURE__ */ React.createElement("div", {
    style: props.style
  }, /* @__PURE__ */ React.createElement("div", null, "DonetML Name (soon)"), /* @__PURE__ */ React.createElement("div", null, "Load time (soon) "), /* @__PURE__ */ React.createElement("div", null, "Most recent release "), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(CopyToClipboard, {
    onCopy: () => addToast("Link copied to clipboard!", toastType.SUCCESS),
    text: link
  }, /* @__PURE__ */ React.createElement("button", {
    onClick: () => {
    }
  }, "copy link ", /* @__PURE__ */ React.createElement(FontAwesomeIcon, {
    icon: faClipboard
  }))), /* @__PURE__ */ React.createElement("button", {
    onClick: () => window.open(link, "_blank")
  }, "visit ", /* @__PURE__ */ React.createElement(FontAwesomeIcon, {
    icon: faExternalLinkAlt
  }))));
}
