import { i as useNavigate, u as useLoaderData, j as jsx, r as reactExports, b as jsxs, B as Button, F as Fragment } from "./PageViewer-d914b069.js";
function PublicNavigation() {
  const navigate = useNavigate();
  const { signedIn, portfolioCourseId } = useLoaderData();
  return /* @__PURE__ */ jsx(reactExports.Suspense, { fallback: /* @__PURE__ */ jsx("div", { children: "loading Breadcrumbs..." }), children: /* @__PURE__ */ jsxs("div", { style: { display: "flex", columnGap: "4px", marginRight: "16px" }, children: [
    /* @__PURE__ */ jsx(
      Button,
      {
        value: "Home",
        onClick: () => {
          navigate("/");
        }
      }
    ),
    /* @__PURE__ */ jsx(
      Button,
      {
        value: "Community",
        onClick: () => {
          navigate("/community");
        }
      }
    ),
    signedIn ? /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx(
      Button,
      {
        value: "Portfolio",
        onClick: () => {
          navigate(`/portfolio/${portfolioCourseId}`);
        }
      }
    ) }) : null
  ] }) });
}
export {
  PublicNavigation as default
};
