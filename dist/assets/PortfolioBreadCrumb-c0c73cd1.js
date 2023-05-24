import { i as useNavigate, u as useLoaderData, j as jsx, r as reactExports } from "./PageViewer-d914b069.js";
import { B as BreadCrumb } from "./BreadCrumb-20c00d72.js";
function PortfolioBreadCrumb() {
  const navigate = useNavigate();
  let data = useLoaderData();
  const { activityData } = data;
  const { label, courseId } = activityData;
  return /* @__PURE__ */ jsx(reactExports.Suspense, { fallback: /* @__PURE__ */ jsx("div", { children: "Loading Breadcrumb..." }), children: /* @__PURE__ */ jsx(
    BreadCrumb,
    {
      crumbs: [
        {
          label: "Portfolio",
          onClick: () => {
            navigate(`/portfolio/${courseId}`);
          }
        },
        {
          label,
          onClick: () => {
            console.log("Rename?");
          }
        }
      ],
      offset: 68
    }
  ) });
}
export {
  PortfolioBreadCrumb as default
};
