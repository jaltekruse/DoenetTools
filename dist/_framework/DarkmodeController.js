import React from "react";
import {atom, useRecoilValue} from "recoil";
export const darkModeAtom = atom({
  key: "darkModeAtom",
  default: JSON.parse(localStorage.getItem("theme")),
  effects: [
    ({onSet}) => {
      onSet((newValue) => {
        localStorage.setItem("theme", JSON.stringify(newValue));
      });
    }
  ]
});
export default function DarkmodeController({children}) {
  const atomPrefernce = useRecoilValue(darkModeAtom);
  return /* @__PURE__ */ React.createElement("div", {
    "data-theme": atomPrefernce
  }, children);
}
