import { o as Recoil_index_24, p as pageToolViewAtom, t as Recoil_index_20, aj as selectedCourseItems, a8 as itemByDoenetId, W as searchParamAtomFamily, q as useCourse, r as reactExports, a3 as useToast, b as jsxs, j as jsx, c as FontAwesomeIcon, ac as faCode, F as Fragment, B as Button } from "./PageViewer-d914b069.js";
import { T as Textfield } from "./Textfield-0be9f722.js";
import { B as ButtonGroup } from "./ButtonGroup-b585a5ef.js";
import { A as ActionButton } from "./ActionButton-1e9c5f7a.js";
import { A as ActionButtonGroup } from "./ActionButtonGroup-f7bafe40.js";
function SelectedPage() {
  const setPageToolView = Recoil_index_24(pageToolViewAtom);
  const pageId = Recoil_index_20(selectedCourseItems)[0];
  const pageObj = Recoil_index_20(itemByDoenetId(pageId));
  const containingObj = Recoil_index_20(
    itemByDoenetId(pageObj.containingDoenetId)
  );
  containingObj.parentDoenetId;
  const doenetId = containingObj.doenetId;
  const courseId = Recoil_index_20(searchParamAtomFamily("courseId"));
  const {
    create,
    renameItem,
    compileActivity,
    deleteItem,
    copyItems,
    cutItems
  } = useCourse(courseId);
  const [itemTextFieldLabel, setItemTextFieldLabel] = reactExports.useState(pageObj.label);
  useToast();
  reactExports.useEffect(() => {
    if (itemTextFieldLabel !== pageObj.label) {
      setItemTextFieldLabel(pageObj.label);
    }
  }, [pageId]);
  const handelLabelModfication = () => {
    let effectiveItemLabel = itemTextFieldLabel;
    if (itemTextFieldLabel === "") {
      effectiveItemLabel = pageObj.label;
      if (pageObj.label === "") {
        effectiveItemLabel = "Untitled";
      }
      setItemTextFieldLabel(effectiveItemLabel);
    }
    if (pageObj.label !== effectiveItemLabel) {
      renameItem(pageId, effectiveItemLabel);
    }
  };
  let heading = /* @__PURE__ */ jsxs("h2", { "data-test": "infoPanelItemLabel", style: { margin: "16px 5px" }, children: [
    /* @__PURE__ */ jsx(FontAwesomeIcon, { icon: faCode }),
    " ",
    pageObj.label
  ] });
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    heading,
    /* @__PURE__ */ jsx(ActionButtonGroup, { vertical: true, children: /* @__PURE__ */ jsx(
      ActionButton,
      {
        width: "menu",
        value: "Edit Page",
        dataTest: "Edit Page",
        onClick: () => {
          setPageToolView({
            page: "course",
            tool: "editor",
            view: "",
            params: {
              pageId,
              doenetId
            }
          });
        }
      }
    ) }),
    /* @__PURE__ */ jsx(
      Textfield,
      {
        label: "Label",
        dataTest: "Label Page",
        vertical: true,
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
    /* @__PURE__ */ jsxs(ButtonGroup, { vertical: true, children: [
      /* @__PURE__ */ jsx(
        Button,
        {
          width: "menu",
          onClick: () => create({ itemType: "page" }),
          value: "Add Page",
          dataTest: "Add Page"
        }
      ),
      containingObj.type == "activity" ? /* @__PURE__ */ jsx(
        Button,
        {
          width: "menu",
          onClick: () => create({ itemType: "order" }),
          value: "Add Order",
          dataTest: "Add Order"
        }
      ) : null
    ] }),
    /* @__PURE__ */ jsx("br", {}),
    /* @__PURE__ */ jsx(
      Button,
      {
        width: "menu",
        value: "Delete Page",
        dataTest: "Delete Page",
        alert: true,
        onClick: (e) => {
          e.preventDefault();
          e.stopPropagation();
          deleteItem({ doenetId: pageId });
        }
      }
    )
  ] });
}
export {
  SelectedPage as default
};
