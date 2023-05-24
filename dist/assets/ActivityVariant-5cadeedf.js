import { m as Recoil_index_22, o as Recoil_index_24, p as pageToolViewAtom, j as jsx } from "./PageViewer-d914b069.js";
import { I as Increment } from "./IncrementMenu-19c70527.js";
import { b as activityVariantPanelAtom } from "./PageViewerRecoil-d6d14f88.js";
function ActivityVariant(props) {
  const [variantPanel, setVariantPanel] = Recoil_index_22(
    activityVariantPanelAtom
  );
  const setPageToolView = Recoil_index_24(pageToolViewAtom);
  function updateVariantInfoAtom() {
    setPageToolView((was) => {
      let newObj = { ...was };
      if (newObj.params) {
        newObj.params = { ...newObj.params };
      } else {
        newObj.params = {};
      }
      newObj.params.requestedVariant = variantPanel.index && Number.isFinite(Number(variantPanel.index)) ? Number(variantPanel.index) : 1;
      return newObj;
    });
  }
  return /* @__PURE__ */ jsx("div", { style: props.style, children: /* @__PURE__ */ jsx(
    Increment,
    {
      min: 1,
      value: variantPanel.index,
      onBlur: () => updateVariantInfoAtom(),
      onKeyDown: (e) => {
        if (e.key === "Enter") {
          updateVariantInfoAtom();
        }
      },
      onChange: (value) => {
        setVariantPanel((was) => {
          let newObj = { ...was };
          newObj.index = value;
          return newObj;
        });
      }
    }
  ) });
}
export {
  ActivityVariant as default
};
