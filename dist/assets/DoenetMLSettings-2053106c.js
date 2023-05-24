import { t as Recoil_index_20, a3 as useToast, W as searchParamAtomFamily, j as jsx, b as jsxs, a4 as toastType, c as FontAwesomeIcon, b3 as faExternalLinkAlt } from "./PageViewer-d914b069.js";
import { l as lib } from "./index-badc91d0.js";
import { f as faClipboard } from "./index-72e7d0b2.js";
import { e as editorPageIdInitAtom } from "./EditorViewerRecoil-84be9f2a.js";
import "./index-a634ad2f.js";
function DoenetMLSettings(props) {
  const initializedDoenetId = Recoil_index_20(editorPageIdInitAtom);
  const link = `http://${window.location.host}/content/#/?doenetId=${initializedDoenetId}`;
  const addToast = useToast();
  const paramDoenetId = Recoil_index_20(searchParamAtomFamily("doenetId"));
  if (paramDoenetId !== initializedDoenetId) {
    return /* @__PURE__ */ jsx("div", { style: props.style });
  }
  return /* @__PURE__ */ jsxs("div", { style: props.style, children: [
    /* @__PURE__ */ jsx("div", { children: "DonetML Name (soon)" }),
    /* @__PURE__ */ jsx("div", { children: "Load time (soon) " }),
    /* @__PURE__ */ jsx("div", { children: "Most recent release " }),
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx(
        lib.CopyToClipboard,
        {
          onCopy: () => addToast("Link copied to clipboard!", toastType.SUCCESS),
          text: link,
          children: /* @__PURE__ */ jsxs("button", { onClick: () => {
          }, children: [
            "copy link ",
            /* @__PURE__ */ jsx(FontAwesomeIcon, { icon: faClipboard })
          ] })
        }
      ),
      /* @__PURE__ */ jsxs("button", { onClick: () => window.open(link, "_blank"), children: [
        "visit ",
        /* @__PURE__ */ jsx(FontAwesomeIcon, { icon: faExternalLinkAlt })
      ] })
    ] })
  ] });
}
export {
  DoenetMLSettings as default
};
