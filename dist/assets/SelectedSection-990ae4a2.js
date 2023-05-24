import { t as Recoil_index_20, W as searchParamAtomFamily, aj as selectedCourseItems, a8 as itemByDoenetId, q as useCourse, r as reactExports, a3 as useToast, b as jsxs, F as Fragment, j as jsx, a4 as toastType, B as Button, c as FontAwesomeIcon, al as faFolderTree } from "./PageViewer-d914b069.js";
import { A as ActionButton } from "./ActionButton-1e9c5f7a.js";
import { e as effectivePermissionsByCourseId } from "./RoleDropdown-ece1f3f8.js";
import { T as Textfield } from "./Textfield-0be9f722.js";
import "./DropdownMenu-d8160745.js";
import "./defineProperty-2975ceb9.js";
import "./setPrototypeOf-be240aa9.js";
import "./extends-d9a14db7.js";
import "./emotion-react.browser.esm-dfafc3e8.js";
import "./emotion-element-6a883da9.browser.esm-2d3713e7.js";
function SelectedSection() {
  const courseId = Recoil_index_20(searchParamAtomFamily("courseId"));
  const doenetId = Recoil_index_20(selectedCourseItems)[0];
  const { canEditContent } = Recoil_index_20(
    effectivePermissionsByCourseId(courseId)
  );
  const { label: recoilLabel, isAssigned } = Recoil_index_20(
    itemByDoenetId(doenetId)
  );
  const { renameItem, deleteItem } = useCourse(courseId);
  const [itemTextFieldLabel, setItemTextFieldLabel] = reactExports.useState(recoilLabel);
  const { updateAssignItem } = useCourse(courseId);
  let assignSectionText = "Assign Section";
  if (isAssigned) {
    assignSectionText = "Unassign Section";
  }
  reactExports.useEffect(() => {
    setItemTextFieldLabel(recoilLabel);
  }, [recoilLabel]);
  const handelLabelModfication = () => {
    let effectiveItemLabel = itemTextFieldLabel;
    if (itemTextFieldLabel === "") {
      effectiveItemLabel = recoilLabel;
      if (recoilLabel === "") {
        effectiveItemLabel = "Untitled";
      }
      setItemTextFieldLabel(effectiveItemLabel);
    }
    if (recoilLabel !== effectiveItemLabel) {
      renameItem(doenetId, effectiveItemLabel);
    }
  };
  const addToast = useToast();
  let heading = /* @__PURE__ */ jsxs("h2", { "data-test": "infoPanelItemLabel", style: { margin: "16px 5px" }, children: [
    /* @__PURE__ */ jsx(FontAwesomeIcon, { icon: faFolderTree }),
    " ",
    recoilLabel
  ] });
  if (canEditContent === "1") {
    return /* @__PURE__ */ jsxs(Fragment, { children: [
      heading,
      /* @__PURE__ */ jsx(
        ActionButton,
        {
          width: "menu",
          value: assignSectionText,
          onClick: () => {
            let toastText = "Section Assigned.";
            if (isAssigned) {
              toastText = "Section Unassigned.";
            }
            updateAssignItem({
              doenetId,
              isAssigned: !isAssigned,
              successCallback: () => {
                addToast(toastText, toastType.INFO);
              }
            });
          }
        }
      ),
      /* @__PURE__ */ jsx(
        Textfield,
        {
          label: "Label",
          vertical: true,
          dataTest: "Label Section",
          width: "menu",
          value: itemTextFieldLabel,
          onChange: (e) => setItemTextFieldLabel(e.target.value),
          onKeyDown: (e) => {
            if (e.keyCode === 13)
              handelLabelModfication();
          },
          onBlur: handelLabelModfication
        }
      ),
      /* @__PURE__ */ jsx("br", {}),
      /* @__PURE__ */ jsx(
        Button,
        {
          width: "menu",
          value: "Delete Section",
          alert: true,
          onClick: (e) => {
            e.preventDefault();
            e.stopPropagation();
            deleteItem({ doenetId });
          }
        }
      )
    ] });
  }
  return /* @__PURE__ */ jsx(Fragment, { children: heading });
}
export {
  SelectedSection as default
};
