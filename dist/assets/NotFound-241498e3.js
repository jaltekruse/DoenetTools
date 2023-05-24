import { l as useLocation, j as jsx, b as jsxs } from "./PageViewer-d914b069.js";
function NotFound(props) {
  const location = useLocation();
  let urlParamsObj = Object.fromEntries(new URLSearchParams(location.search));
  return /* @__PURE__ */ jsx("div", { style: props.style, children: /* @__PURE__ */ jsxs("h1", { children: [
    'Sorry! "',
    urlParamsObj == null ? void 0 : urlParamsObj.path,
    '" was not found.'
  ] }) });
}
export {
  NotFound as default
};
