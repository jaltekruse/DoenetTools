import { bu as useCreateCourse, j as jsx, B as Button } from "./PageViewer-d914b069.js";
import { B as ButtonGroup } from "./ButtonGroup-b585a5ef.js";
const CreateCourse = (props) => {
  const { createCourse } = useCreateCourse();
  return /* @__PURE__ */ jsx("div", { style: props.style, children: /* @__PURE__ */ jsx(ButtonGroup, { vertical: true, children: /* @__PURE__ */ jsx(
    Button,
    {
      width: "menu",
      value: "Create New Course",
      onClick: createCourse,
      "data-test": "createCourse",
      children: "Create New Course"
    }
  ) }) });
};
export {
  CreateCourse as default
};
