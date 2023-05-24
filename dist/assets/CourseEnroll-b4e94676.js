import { a3 as useToast, b as jsxs, j as jsx, B as Button, a4 as toastType } from "./PageViewer-d914b069.js";
import { B as ButtonGroup } from "./ButtonGroup-b585a5ef.js";
function CourseEnroll(props) {
  const toast = useToast();
  return /* @__PURE__ */ jsxs("div", { style: props.style, children: [
    /* @__PURE__ */ jsx("div", { children: "Enter Enrollment code" }),
    /* @__PURE__ */ jsx(ButtonGroup, { vertical: true, children: /* @__PURE__ */ jsx(
      Button,
      {
        onClick: () => toast("Stub Enrolled in Course!", toastType.SUCCESS),
        value: "Enroll",
        children: "Enroll"
      }
    ) })
  ] });
}
export {
  CourseEnroll as default
};
