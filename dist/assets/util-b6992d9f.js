import { a as driveImages, d as driveColors } from "./util-2e804dda.js";
function find_image_label(image) {
  const regexp = /\d/gm;
  const array = [...image.matchAll(regexp)];
  var num_string = array[0][0];
  if (array[1] !== void 0) {
    num_string += array[1][0];
  }
  const num = parseInt(num_string);
  return driveImages[num - 1].Name;
}
function find_color_label(color) {
  for (let i = 0; i < driveColors.length; i++) {
    if (driveColors[i].Color == color) {
      return driveColors[i].Name;
    }
  }
  return "some color";
}
export {
  find_color_label as a,
  find_image_label as f
};
