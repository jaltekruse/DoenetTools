import { u as useLoaderData, o as Recoil_index_24, t as Recoil_index_20, W as searchParamAtomFamily, a1 as courseIdAtom, r as reactExports, j as jsx } from "./PageViewer-d914b069.js";
import { C as CodeMirror } from "./CodeMirror-4f017845.js";
import { u as useSaveDraft } from "./useSaveDraft-b85dfaeb.js";
import { t as textEditorDoenetMLAtom, u as updateTextEditorDoenetMLAtom, v as viewerDoenetMLAtom, e as editorPageIdInitAtom } from "./EditorViewerRecoil-84be9f2a.js";
function DoenetMLEditor() {
  let data = useLoaderData();
  const loaderPageId = data == null ? void 0 : data.pageDoenetId;
  const setEditorDoenetML = Recoil_index_24(textEditorDoenetMLAtom);
  const updateInternalValue = Recoil_index_20(updateTextEditorDoenetMLAtom);
  const viewerDoenetML = Recoil_index_20(viewerDoenetMLAtom);
  const paramPageId = Recoil_index_20(searchParamAtomFamily("pageId"));
  const paramlinkPageId = Recoil_index_20(searchParamAtomFamily("linkPageId"));
  let effectivePageId = paramPageId;
  let readOnly = false;
  if (paramlinkPageId) {
    readOnly = true;
    effectivePageId = paramlinkPageId;
  }
  if (loaderPageId) {
    effectivePageId = loaderPageId;
  }
  const courseId = Recoil_index_20(courseIdAtom);
  const initializedPageId = Recoil_index_20(editorPageIdInitAtom);
  let editorRef = reactExports.useRef(null);
  let timeout = reactExports.useRef(null);
  let backupOldDraft = reactExports.useRef(true);
  const { saveDraft } = useSaveDraft();
  reactExports.useEffect(() => {
    return () => {
      if (initializedPageId !== "") {
        saveDraft({
          pageId: initializedPageId,
          courseId,
          backup: backupOldDraft.current
        });
        if (timeout.current !== null) {
          clearTimeout(timeout.current);
        }
        timeout.current = null;
      }
    };
  }, [initializedPageId, saveDraft, courseId]);
  reactExports.useEffect(() => {
    if (initializedPageId !== "") {
      saveDraft({
        pageId: initializedPageId,
        courseId,
        backup: backupOldDraft.current
      }).then(({ success }) => {
        if (success) {
          backupOldDraft.current = false;
        }
      });
      if (timeout.current !== null) {
        clearTimeout(timeout.current);
      }
      timeout.current = null;
    }
  }, [viewerDoenetML]);
  if (effectivePageId !== initializedPageId) {
    backupOldDraft.current = true;
    return null;
  }
  return /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(
    CodeMirror,
    {
      readOnly,
      editorRef,
      setInternalValueTo: updateInternalValue,
      onBeforeChange: (value) => {
        setEditorDoenetML(value);
        clearTimeout(timeout.current);
        timeout.current = setTimeout(function() {
          saveDraft({
            pageId: initializedPageId,
            courseId,
            backup: backupOldDraft.current
          }).then(({ success }) => {
            if (success) {
              backupOldDraft.current = false;
            }
          });
          timeout.current = null;
        }, 3e3);
      },
      paddingBottom: "50vh"
    },
    "codemirror"
  ) });
}
export {
  DoenetMLEditor as default
};
