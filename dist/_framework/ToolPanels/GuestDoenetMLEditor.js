import React, {useRef} from "react";
import {
  useRecoilValue,
  useSetRecoilState
} from "recoil";
import {textEditorDoenetMLAtom, updateTextEditorDoenetMLAtom} from "../../_sharedRecoil/EditorViewerRecoil.js";
import CodeMirror from "../CodeMirror.js";
export default function GuestDoenetMLEditor(props) {
  const setEditorDoenetML = useSetRecoilState(textEditorDoenetMLAtom);
  const updateInternalValue = useRecoilValue(updateTextEditorDoenetMLAtom);
  let editorRef = useRef(null);
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(CodeMirror, {
    key: "codemirror",
    editorRef,
    setInternalValue: updateInternalValue,
    onBeforeChange: (value) => {
      setEditorDoenetML(value);
    }
  }));
}
