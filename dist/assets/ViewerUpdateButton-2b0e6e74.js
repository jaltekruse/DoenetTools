import { j as jsx, B as Button } from "./PageViewer-d914b069.js";
import { u as useUpdateViewer } from "./EditorViewer-3eecf213.js";
import "./EditorViewerRecoil-84be9f2a.js";
import "./PageViewerRecoil-d6d14f88.js";
function ViewerUpdateButton(props) {
  const updateViewer = useUpdateViewer();
  return /* @__PURE__ */ jsx("div", { style: props.style, children: /* @__PURE__ */ jsx(
    Button,
    {
      "data-test": "Viewer Update Button",
      value: "Update",
      onClick: updateViewer
    }
  ) });
}
export {
  ViewerUpdateButton as default
};
