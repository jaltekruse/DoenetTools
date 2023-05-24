import { m as Recoil_index_22, j as jsx, b as jsxs } from "./PageViewer-d914b069.js";
import { a as pageVariantInfoAtom, p as pageVariantPanelAtom } from "./PageViewerRecoil-d6d14f88.js";
function PageVariant(props) {
  const [variantInfo, setVariantInfo] = Recoil_index_22(pageVariantInfoAtom);
  const [variantPanel, setVariantPanel] = Recoil_index_22(pageVariantPanelAtom);
  function updateVariantInfoAtom() {
    if (variantPanel.index === variantInfo.index) {
      return;
    }
    setVariantInfo((was) => {
      let newObj = { ...was };
      newObj.index = Number.isFinite(Number(variantPanel.index)) ? Number(variantPanel.index) : 0;
      return newObj;
    });
  }
  let allPossibleVariants = [];
  if (variantPanel.allPossibleVariants) {
    allPossibleVariants = variantPanel.allPossibleVariants;
  }
  let optionsList = allPossibleVariants.map(function(s, i) {
    return /* @__PURE__ */ jsx("option", { value: i + 1, children: s }, i + 1);
  });
  let style = { ...props.style };
  return /* @__PURE__ */ jsxs("div", { style, children: [
    /* @__PURE__ */ jsxs("div", { children: [
      "Number of variants: ",
      allPossibleVariants.length
    ] }),
    /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs("label", { children: [
      "Select variant Index",
      " ",
      /* @__PURE__ */ jsx(
        "input",
        {
          "data-test": "Variant Index Input",
          type: "text",
          value: variantPanel.index,
          onKeyDown: (e) => {
            if (e.key === "Enter") {
              updateVariantInfoAtom();
            }
          },
          onBlur: () => updateVariantInfoAtom(),
          onChange: (e) => {
            setVariantPanel((was) => {
              let newObj = { ...was };
              newObj.index = e.target.value;
              return newObj;
            });
          }
        }
      )
    ] }) }),
    /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs("label", { children: [
      "Select variant name",
      /* @__PURE__ */ jsx(
        "select",
        {
          "data-test": "Variant Name Input",
          style: {
            backgroundColor: "var(--canvas)",
            color: "var(--canvastext)",
            border: "var(--mainBorder)",
            borderRadius: "var(--mainBorderRadius)"
          },
          value: variantPanel.index,
          onChange: (e) => {
            setVariantInfo((was) => {
              let newObj = { ...was };
              newObj.index = e.target.value;
              return newObj;
            });
          },
          children: optionsList
        }
      )
    ] }) })
  ] });
}
export {
  PageVariant as default
};
