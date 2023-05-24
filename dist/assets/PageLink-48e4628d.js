import { a3 as useToast, t as Recoil_index_20, W as searchParamAtomFamily, a1 as courseIdAtom, j as jsx, h as axios, a4 as toastType } from "./PageViewer-d914b069.js";
import { c as copyToClipboard } from "./index-a634ad2f.js";
import { A as ActionButton } from "./ActionButton-1e9c5f7a.js";
import { v as viewerDoenetMLAtom } from "./EditorViewerRecoil-84be9f2a.js";
function PageLink() {
  const addToast = useToast();
  const pageId = Recoil_index_20(searchParamAtomFamily("pageId"));
  const doenetId = Recoil_index_20(searchParamAtomFamily("doenetId"));
  const courseId = Recoil_index_20(courseIdAtom);
  const viewerDoenetML = Recoil_index_20(viewerDoenetMLAtom);
  async function savePageDoenetMLAndCopyLink() {
    let params = {
      doenetML: viewerDoenetML,
      pageId,
      courseId,
      saveAsCid: true
    };
    const { data } = await axios.post("/api/saveDoenetML.php", params);
    if (!data.success) {
      console.error(data.message);
      addToast(data.message, toastType.ERROR);
      return;
    }
    let pageCid = data.cid;
    let linkText = `<copy uri="doenet:doenetId=${doenetId}&pageId=${pageId}&cid=${pageCid}" />`;
    copyToClipboard(linkText);
  }
  return /* @__PURE__ */ jsx(
    ActionButton,
    {
      width: "menu",
      dataTest: "Copy Page Link",
      value: "Copy Page Link",
      onClick: savePageDoenetMLAndCopyLink
    }
  );
}
export {
  PageLink as default
};
