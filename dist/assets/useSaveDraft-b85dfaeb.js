import { a3 as useToast, a0 as Recoil_index_31, h as axios, aL as fileByPageId, z as cidFromText } from "./PageViewer-d914b069.js";
import { t as textEditorDoenetMLAtom, b as textEditorLastKnownCidAtom } from "./EditorViewerRecoil-84be9f2a.js";
function useSaveDraft() {
  const addToast = useToast();
  const saveDraft = Recoil_index_31(
    ({ snapshot, set }) => async ({ pageId, courseId, backup = false, doenetML, lastKnownCid }) => {
      if (doenetML == void 0) {
        doenetML = await snapshot.getPromise(textEditorDoenetMLAtom);
      }
      if (lastKnownCid == void 0) {
        lastKnownCid = await snapshot.getPromise(textEditorLastKnownCidAtom);
      }
      try {
        const params = {
          doenetML,
          pageId,
          courseId,
          backup,
          lastKnownCid
        };
        const {
          data: { success, message }
        } = await axios.post("/api/saveDoenetML.php", params);
        if (!success)
          throw new Error(message);
        set(fileByPageId(pageId), doenetML);
        const cid = await cidFromText(doenetML);
        set(textEditorLastKnownCidAtom, cid);
        return { success, cid };
      } catch (error) {
        alert(error.message);
        return { success: false };
      }
    },
    [addToast]
  );
  return { saveDraft };
}
export {
  useSaveDraft as u
};
