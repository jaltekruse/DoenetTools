import { t as Recoil_index_20, aj as selectedCourseItems, a8 as itemByDoenetId, W as searchParamAtomFamily, r as reactExports, q as useCourse, a3 as useToast, b as jsxs, j as jsx, c as FontAwesomeIcon, aq as faLink, F as Fragment, a5 as CheckboxButton, B as Button, bt as authorCollectionsByCourseId } from "./PageViewer-d914b069.js";
import "./ActionButton-1e9c5f7a.js";
import { T as Textfield } from "./Textfield-0be9f722.js";
import { R as RelatedItems } from "./RelatedItems-8a9ec536.js";
import { e as effectivePermissionsByCourseId } from "./RoleDropdown-ece1f3f8.js";
import "./DropdownMenu-d8160745.js";
import "./defineProperty-2975ceb9.js";
import "./setPrototypeOf-be240aa9.js";
import "./extends-d9a14db7.js";
import "./emotion-react.browser.esm-dfafc3e8.js";
import "./emotion-element-6a883da9.browser.esm-2d3713e7.js";
function CollectionSelectionOptions({ courseId, selectedDoenetId }) {
  let collectionNameAndDoenetIds = Recoil_index_20(
    authorCollectionsByCourseId(courseId)
  );
  let CollectionOptionsJSX = [];
  for (let [i, obj] of collectionNameAndDoenetIds.entries()) {
    if (selectedDoenetId == obj.doenetId) {
      CollectionOptionsJSX.push(
        /* @__PURE__ */ jsx("option", { selected: true, value: obj.doenetId, children: obj.label }, `CollectionOptions${i}`)
      );
    } else {
      CollectionOptionsJSX.push(
        /* @__PURE__ */ jsx("option", { value: obj.doenetId, children: obj.label }, `CollectionOptions${i}`)
      );
    }
  }
  return /* @__PURE__ */ jsx(Fragment, { children: CollectionOptionsJSX });
}
function PageOption({ selected, i, pageId }) {
  let pageObj = Recoil_index_20(itemByDoenetId(pageId));
  if (selected) {
    return /* @__PURE__ */ jsx("option", { selected: true, value: pageId, children: pageObj.label }, `PagesInACollection${i}`);
  } else {
    return /* @__PURE__ */ jsx("option", { value: pageId, children: pageObj.label }, `PagesInACollection${i}`);
  }
}
function SelectedCollectionLink() {
  const doenetId = Recoil_index_20(selectedCourseItems)[0];
  const itemObj = Recoil_index_20(itemByDoenetId(doenetId));
  const courseId = Recoil_index_20(searchParamAtomFamily("courseId"));
  const { canEditContent } = Recoil_index_20(
    effectivePermissionsByCourseId(courseId)
  );
  const [itemTextFieldLabel, setItemTextFieldLabel] = reactExports.useState(itemObj.label);
  let { deleteItem, updateCollectionLink, updateContentLinksToSources } = useCourse(courseId);
  reactExports.useEffect(() => {
    if (itemTextFieldLabel !== itemObj.label) {
      setItemTextFieldLabel(itemObj.label);
    }
  }, [doenetId]);
  const handelLabelModfication = () => {
    let effectiveItemLabel = itemTextFieldLabel;
    if (itemTextFieldLabel === "") {
      effectiveItemLabel = itemObj.label;
      if (itemObj.label === "") {
        effectiveItemLabel = "Untitled Collection Link";
      }
      setItemTextFieldLabel(effectiveItemLabel);
    }
    if (itemObj.label !== effectiveItemLabel) {
      console.log("Rename", doenetId, effectiveItemLabel);
      updateCollectionLink({
        courseId,
        doenetId,
        label: effectiveItemLabel,
        collectionDoenetId: itemObj.collectionDoenetId,
        isManuallyFiltered: itemObj.isManuallyFiltered,
        manuallyFilteredPages: itemObj.manuallyFilteredPages
      });
    }
  };
  useToast();
  let heading = /* @__PURE__ */ jsxs("h2", { "data-test": "infoPanelItemLabel", style: { margin: "16px 5px" }, children: [
    /* @__PURE__ */ jsx(FontAwesomeIcon, { icon: faLink }),
    " ",
    itemObj.label
  ] });
  if (canEditContent !== "1") {
    return null;
  }
  let collectionsInCourseJSX = /* @__PURE__ */ jsx(
    CollectionSelectionOptions,
    {
      courseId,
      selectedDoenetId: itemObj.collectionDoenetId
    }
  );
  let pageAliasesJSX = null;
  if (itemObj.collectionDoenetId) {
    let storedPageOptionsJSX = [];
    for (let [i, pageId] of Object.entries(
      itemObj.pagesByCollectionSource[itemObj.collectionDoenetId]
    )) {
      let selected = false;
      if ((itemObj == null ? void 0 : itemObj.manuallyFilteredPages) && itemObj.manuallyFilteredPages.includes(pageId)) {
        selected = true;
      }
      storedPageOptionsJSX.push(
        /* @__PURE__ */ jsx(PageOption, { selected, i, pageId })
      );
    }
    pageAliasesJSX = /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsxs("div", { style: { display: "flex" }, children: [
        /* @__PURE__ */ jsx(
          CheckboxButton,
          {
            style: { marginRight: "5px" },
            checked: itemObj.isManuallyFiltered,
            onClick: () => {
              updateCollectionLink({
                courseId,
                doenetId,
                collectionDoenetId: itemObj.collectionDoenetId,
                isManuallyFiltered: !itemObj.isManuallyFiltered,
                manuallyFilteredPages: itemObj.manuallyFilteredPages
              });
            }
          }
        ),
        "Filter Page Links"
      ] }),
      /* @__PURE__ */ jsx(
        RelatedItems,
        {
          width: "menu",
          options: storedPageOptionsJSX,
          disabled: !itemObj.isManuallyFiltered,
          onChange: (e) => {
            let values = Array.from(
              e.target.selectedOptions,
              (option) => option.value
            );
            updateCollectionLink({
              courseId,
              doenetId,
              collectionDoenetId: itemObj.collectionDoenetId,
              isManuallyFiltered: itemObj.isManuallyFiltered,
              manuallyFilteredPages: values
            });
          },
          multiple: true
        }
      ),
      /* @__PURE__ */ jsx("br", {})
    ] });
  }
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    heading,
    /* @__PURE__ */ jsx(
      Textfield,
      {
        label: "Label",
        vertical: true,
        width: "menu",
        dataTest: "Label Collection",
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
    /* @__PURE__ */ jsx("br", {}),
    /* @__PURE__ */ jsx("div", { children: "collection" }),
    /* @__PURE__ */ jsx(
      RelatedItems,
      {
        width: "menu",
        options: collectionsInCourseJSX,
        onChange: (e) => {
          updateCollectionLink({
            courseId,
            doenetId,
            collectionDoenetId: e.target.value,
            isManuallyFiltered: false,
            manuallyFilteredPages: []
          });
        }
      }
    ),
    /* @__PURE__ */ jsx("br", {}),
    pageAliasesJSX,
    /* @__PURE__ */ jsx("br", {}),
    /* @__PURE__ */ jsx(
      Button,
      {
        width: "menu",
        value: "Update Content to Sources",
        onClick: (e) => {
          e.preventDefault();
          e.stopPropagation();
          updateContentLinksToSources({
            collectionLinkObj: itemObj,
            pages: itemObj.pages
          });
        }
      }
    ),
    /* @__PURE__ */ jsx("br", {}),
    /* @__PURE__ */ jsx(
      Button,
      {
        width: "menu",
        value: "Delete Collection Link",
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
export {
  SelectedCollectionLink as default
};
