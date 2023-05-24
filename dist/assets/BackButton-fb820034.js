import { i as useNavigate, j as jsx, B as Button } from "./PageViewer-d914b069.js";
function BackButton() {
  const navigate = useNavigate();
  return /* @__PURE__ */ jsx(Button, { onClick: () => navigate(-1), value: "Back" });
}
export {
  BackButton as default
};
