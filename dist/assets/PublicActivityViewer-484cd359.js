import { t as Recoil_index_20, W as searchParamAtomFamily, r as reactExports, j as jsx, F as Fragment, h as axios } from "./PageViewer-d914b069.js";
import { A as ActivityViewer } from "./ActivityViewer-b51a59ab.js";
import "./activityUtils-7af1fc96.js";
import "./visibility-sensor-57589aaf.js";
import "./ActionButton-1e9c5f7a.js";
import "./ButtonGroup-b585a5ef.js";
function Public(props) {
  const doenetId = Recoil_index_20(searchParamAtomFamily("doenetId"));
  const [cid, setCid] = reactExports.useState(null);
  const [errMsg, setErrMsg] = reactExports.useState(null);
  reactExports.useEffect(() => {
    const prevTitle = document.title;
    const setTitle = async () => {
      let resp = await axios.get(`/api/getCidForAssignment.php`, {
        params: { doenetId, latestAttemptOverrides: false, publicOnly: true }
      });
      if (!resp.data.success || !resp.data.cid) {
        setCid(null);
        if (resp.data.cid) {
          setErrMsg(`Error loading activity: ${resp.data.message}`);
        } else {
          setErrMsg(`Error loading activity: public content not found`);
        }
      } else {
        setCid(resp.data.cid);
        setErrMsg(null);
        document.title = `${resp.data.label} - Doenet`;
      }
    };
    setTitle().catch(console.error);
    return () => {
      document.title = prevTitle;
    };
  }, doenetId);
  if (errMsg) {
    return /* @__PURE__ */ jsx("h1", { children: errMsg });
  }
  if (!cid) {
    return null;
  }
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx(
    ActivityViewer,
    {
      cid,
      doenetId,
      flags: {
        showCorrectness: true,
        readOnly: false,
        solutionDisplayMode: "button",
        showFeedback: true,
        showHints: true,
        autoSubmit: false,
        allowLoadState: false,
        allowSaveState: false,
        allowLocalState: false,
        allowSaveSubmissions: false,
        allowSaveEvents: false
      },
      paginate: true
    },
    `activityViewer${doenetId}`
  ) });
}
export {
  Public as default
};
