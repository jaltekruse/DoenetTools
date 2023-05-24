import { u as useLoaderData, b as jsxs, F as Fragment, j as jsx } from "./PageViewer-d914b069.js";
import { B as Box, I as Image } from "./chunk-6CSUKJP7-68bf0450.js";
import "./chunk-QEVFQ4EU-828d9c2a.js";
import "./extends-d9a14db7.js";
import "./emotion-element-6a883da9.browser.esm-2d3713e7.js";
async function loader({ params }) {
  const doenetId = params.doenetId;
  const response = await fetch(
    `/api/getPortfolioActivityData.php?doenetId=${doenetId}`
  );
  const data = await response.json();
  return { activityData: data.activityData };
}
function PortfolioEditorInfoCap() {
  var _a, _b;
  let data = useLoaderData();
  let imagePath = "/activity_default.jpg";
  if ((_a = data == null ? void 0 : data.activityData) == null ? void 0 : _a.imagePath) {
    imagePath = (_b = data == null ? void 0 : data.activityData) == null ? void 0 : _b.imagePath;
  }
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      Box,
      {
        height: "130px",
        width: "100%",
        background: "black",
        overflow: "hidden",
        margin: "auto",
        children: /* @__PURE__ */ jsx(
          Image,
          {
            width: "100%",
            height: "100%",
            objectFit: "contain",
            src: imagePath,
            alt: "Activity Image"
          }
        )
      }
    ),
    /* @__PURE__ */ jsx("div", { style: { marginBottom: "5px", padding: "1px 5px" }, children: "Portfolio Activity Editor" })
  ] });
}
export {
  PortfolioEditorInfoCap as default,
  loader
};
