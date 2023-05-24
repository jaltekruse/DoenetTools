import { t as Recoil_index_20, aj as selectedCourseItems, a8 as itemByDoenetId, W as searchParamAtomFamily, r as reactExports, q as useCourse, b as jsxs, j as jsx, c as FontAwesomeIcon, ap as faFileExport, F as Fragment, a5 as CheckboxButton, B as Button, s as styled } from "./PageViewer-d914b069.js";
import { B as ButtonGroup } from "./ButtonGroup-b585a5ef.js";
import { I as Increment } from "./IncrementMenu-19c70527.js";
import { D as DropdownMenu } from "./DropdownMenu-d8160745.js";
import "./defineProperty-2975ceb9.js";
import "./setPrototypeOf-be240aa9.js";
import "./extends-d9a14db7.js";
import "./emotion-react.browser.esm-dfafc3e8.js";
import "./emotion-element-6a883da9.browser.esm-2d3713e7.js";
const CheckboxLabelText = styled.span`
  font-size: 15px;
  line-height: 1.1;
`;
function SelectedOrder() {
  const doenetId = Recoil_index_20(selectedCourseItems)[0];
  const itemObj = Recoil_index_20(itemByDoenetId(doenetId));
  Recoil_index_20(itemByDoenetId(itemObj.parentDoenetId));
  const courseId = Recoil_index_20(searchParamAtomFamily("courseId"));
  const [behavior, setBehavior] = reactExports.useState(itemObj.behavior);
  const [numberToSelect, setNumberToSelect] = reactExports.useState(itemObj.numberToSelect);
  const [withReplacement, setWithReplacement] = reactExports.useState(
    itemObj.withReplacement
  );
  let { create, updateOrderBehavior, deleteItem } = useCourse(courseId);
  reactExports.useEffect(() => {
    if (itemObj.behavior != behavior) {
      setBehavior(itemObj.behavior);
    }
    if (itemObj.numberToSelect != numberToSelect) {
      setNumberToSelect(itemObj.numberToSelect);
    }
    if (itemObj.withReplacement != withReplacement) {
      setWithReplacement(itemObj.withReplacement);
    }
  }, [itemObj.doenetId]);
  let heading = /* @__PURE__ */ jsxs("h2", { "data-test": "infoPanelItemLabel", style: { margin: "16px 5px" }, children: [
    /* @__PURE__ */ jsx(FontAwesomeIcon, { icon: faFileExport }),
    " ",
    itemObj.label
  ] });
  let items = [
    ["sequence", "sequence"],
    ["shuffle", "shuffle"],
    ["select", "select"]
    // ['deepshuffle', 'deep shuffle'],
    // ['showuntil100', 'show until 100%'],
    // ['adaptive', 'adaptive'],
    // ['select from collection','select from collection'],
    // ['previousrequirements', 'previous requirements'],
  ];
  let defaultIndex = 0;
  for (let [i, item] of Object.entries(items)) {
    if (item[0] === behavior) {
      defaultIndex = Number(i) + 1;
      break;
    }
  }
  let selectionJSX = null;
  if (behavior == "select") {
    selectionJSX = /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx(
        Increment,
        {
          min: 0,
          label: "Number to select",
          vertical: true,
          value: numberToSelect,
          onChange: (value) => {
            let number = Number(value);
            if (isNaN(value)) {
              number = 0;
            }
            setNumberToSelect(number);
            updateOrderBehavior({
              doenetId,
              behavior,
              numberToSelect: number,
              withReplacement
            });
          }
        }
      ),
      /* @__PURE__ */ jsx(
        CheckboxButton,
        {
          style: { marginRight: "5px" },
          checked: withReplacement,
          onClick: (e) => {
            setWithReplacement((prev) => !prev);
            updateOrderBehavior({
              doenetId,
              behavior,
              numberToSelect,
              withReplacement: !withReplacement
            });
          }
        }
      ),
      /* @__PURE__ */ jsx(CheckboxLabelText, { children: "with replacement" }),
      /* @__PURE__ */ jsx("br", {}),
      /* @__PURE__ */ jsx("br", {})
    ] });
  }
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    heading,
    /* @__PURE__ */ jsx(
      DropdownMenu,
      {
        width: "menu",
        items,
        defaultIndex,
        onChange: ({ value }) => {
          setBehavior(value);
          updateOrderBehavior({
            doenetId,
            behavior: value,
            numberToSelect,
            withReplacement
          });
        }
      }
    ),
    /* @__PURE__ */ jsx("br", {}),
    selectionJSX,
    /* @__PURE__ */ jsxs(ButtonGroup, { vertical: true, children: [
      /* @__PURE__ */ jsx(
        Button,
        {
          width: "menu",
          onClick: () => create({ itemType: "page" }),
          value: "Add Page"
        }
      ),
      /* @__PURE__ */ jsx(
        Button,
        {
          width: "menu",
          onClick: () => create({ itemType: "order" }),
          value: "Add Order"
        }
      ),
      /* @__PURE__ */ jsx(
        Button,
        {
          width: "menu",
          onClick: () => create({ itemType: "collectionLink" }),
          value: "Add Collection Link",
          dataTest: "Add Collection Link"
        }
      )
    ] }),
    /* @__PURE__ */ jsx("br", {}),
    /* @__PURE__ */ jsx(
      Button,
      {
        width: "menu",
        value: "Delete Order",
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
  SelectedOrder as default
};
