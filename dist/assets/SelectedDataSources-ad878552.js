import { r as reactExports, t as Recoil_index_20, aj as selectedCourseItems, W as searchParamAtomFamily, a0 as Recoil_index_31, a8 as itemByDoenetId, ak as studentCourseItemOrderByCourseIdBySection, a3 as useToast, b as jsxs, F as Fragment, j as jsx, a4 as toastType, h as axios } from "./PageViewer-d914b069.js";
import { A as ActionButton } from "./ActionButton-1e9c5f7a.js";
function SelectedDataSources() {
  const [assignedSelectedDoenetIds, setAssignedSelectedDoenetIds] = reactExports.useState(
    []
  );
  const selectedDoenetIds = Recoil_index_20(selectedCourseItems);
  const courseId = Recoil_index_20(searchParamAtomFamily("courseId"));
  const findAssignedDoenetIds = Recoil_index_31(
    ({ snapshot }) => async (selectedDoenetIds2) => {
      let foundDoenetIds = [];
      for (let doenetId of selectedDoenetIds2) {
        let itemObj = await snapshot.getPromise(itemByDoenetId(doenetId));
        if (itemObj.type == "activity" && itemObj.isAssigned) {
          foundDoenetIds.push(doenetId);
        } else if (itemObj.type == "section" && itemObj.isAssigned) {
          let sectionDoenetIds = await snapshot.getPromise(
            studentCourseItemOrderByCourseIdBySection({
              courseId,
              sectionId: doenetId
            })
          );
          let newDoenetIds = await findAssignedDoenetIds(sectionDoenetIds);
          foundDoenetIds = [...newDoenetIds, ...foundDoenetIds];
        }
      }
      foundDoenetIds = [...new Set(foundDoenetIds)];
      return foundDoenetIds;
    },
    [courseId]
  );
  reactExports.useEffect(() => {
    if (selectedDoenetIds.length > 0) {
      findAssignedDoenetIds(selectedDoenetIds).then((doenetIds) => {
        setAssignedSelectedDoenetIds(doenetIds);
      });
    } else {
      setAssignedSelectedDoenetIds([]);
    }
  }, [selectedDoenetIds]);
  const addToast = useToast();
  let heading = /* @__PURE__ */ jsx("h2", { "data-test": "selectedDataSourcesHeading", style: { margin: "16px 5px" }, children: "Event Data" });
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    heading,
    /* @__PURE__ */ jsxs("div", { children: [
      assignedSelectedDoenetIds.length,
      " ",
      assignedSelectedDoenetIds.length == 1 ? "Activity" : "Activities"
    ] }),
    /* @__PURE__ */ jsx("br", {}),
    /* @__PURE__ */ jsx(
      ActionButton,
      {
        width: "menu",
        value: "View on Shiny",
        disabled: assignedSelectedDoenetIds.length == 0,
        onClick: async () => {
          if (assignedSelectedDoenetIds.length == 0) {
            addToast(`No activities found`, toastType.INFO);
          } else {
            let searchParamsText = assignedSelectedDoenetIds.join("&data=");
            const resp = await axios.get(
              `/api/createSecretCode.php?courseId=${courseId}`
            );
            const { secretCode } = resp.data;
            window.open(
              `https://doenet.shinyapps.io/analyzer/?data=${searchParamsText}&code=${secretCode}`,
              "_blank"
            );
          }
        }
      }
    )
  ] });
}
export {
  SelectedDataSources as default
};
