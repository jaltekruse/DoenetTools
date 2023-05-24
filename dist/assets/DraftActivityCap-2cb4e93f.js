import { t as Recoil_index_20, a1 as courseIdAtom, aa as coursePermissionsAndSettingsByCourseId, b as jsxs, j as jsx } from "./PageViewer-d914b069.js";
import { f as find_image_label, a as find_color_label } from "./util-b6992d9f.js";
import "./util-2e804dda.js";
function DraftActivityCap() {
  const courseId = Recoil_index_20(courseIdAtom);
  let course = Recoil_index_20(coursePermissionsAndSettingsByCourseId(courseId));
  if (!course || Object.keys(course).length == 0) {
    return null;
  }
  let color = course.color;
  let image = course.image;
  let accessible_name = "course";
  if (image != "none") {
    accessible_name = find_image_label(image);
    image = "./drive_pictures/" + image;
  }
  if (color != "none") {
    accessible_name = find_color_label(color);
    color = "#" + color;
  }
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx(
      "div",
      {
        style: {
          position: "relative",
          width: "100%",
          height: "165px",
          overflow: "hidden"
        },
        children: /* @__PURE__ */ jsx(
          "img",
          {
            "aria-label": accessible_name,
            src: image,
            style: {
              position: "absolute",
              width: "100%",
              top: "50%",
              transform: "translateY(-50%)"
            }
          }
        )
      }
    ),
    /* @__PURE__ */ jsx("b", { children: "Draft Activity" })
  ] });
}
export {
  DraftActivityCap as default
};
