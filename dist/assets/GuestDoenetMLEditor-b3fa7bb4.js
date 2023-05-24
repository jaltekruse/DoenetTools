import { o as Recoil_index_24, t as Recoil_index_20, r as reactExports, j as jsx } from "./PageViewer-d914b069.js";
import { t as textEditorDoenetMLAtom, u as updateTextEditorDoenetMLAtom } from "./EditorViewerRecoil-84be9f2a.js";
import { C as CodeMirror } from "./CodeMirror-4f017845.js";
function GuestDoenetMLEditor(props) {
  const setEditorDoenetML = Recoil_index_24(textEditorDoenetMLAtom);
  const updateInternalValue = Recoil_index_20(updateTextEditorDoenetMLAtom);
  let editorRef = reactExports.useRef(null);
  return /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(
    CodeMirror,
    {
      editorRef,
      setInternalValueTo: updateInternalValue,
      onBeforeChange: (value) => {
        setEditorDoenetML(value);
      }
    },
    "codemirror"
  ) });
}
export {
  GuestDoenetMLEditor as default
};
