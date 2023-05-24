import { t as Recoil_index_20, W as searchParamAtomFamily, o as Recoil_index_24, p as pageToolViewAtom, h as axios, aw as clear } from "./PageViewer-d914b069.js";
function SignInRedirector() {
  const doenetId = Recoil_index_20(searchParamAtomFamily("doenetId"));
  const setPageToolView = Recoil_index_24(pageToolViewAtom);
  axios.get(`/api/umn/shibToJWT.php`, { params: { doenetId } }).then(({ data }) => {
    console.log("data", data);
    if (data.success) {
      if (!data.isEnrolled) {
        console.log("ERROR!");
        return null;
      }
      if (data.needToClearOutPreviousUser) {
        localStorage.clear();
        clear().then(() => {
          setPageToolView({
            page: "placementexam",
            tool: "exam",
            view: "",
            params: {
              doenetId
            }
          });
        });
      } else {
        setPageToolView({
          page: "placementexam",
          tool: "exam",
          view: "",
          params: {
            doenetId
          }
        });
      }
    }
  });
  return null;
}
export {
  SignInRedirector as default
};
