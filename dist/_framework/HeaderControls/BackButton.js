import React from "react";
import {useSetRecoilState} from "recoil";
import {pageToolViewAtom} from "../NewToolRoot.js";
import Button from "../../_reactComponents/PanelHeaderComponents/Button.js";
export default function BackButton() {
  const setPageToolView = useSetRecoilState(pageToolViewAtom);
  return /* @__PURE__ */ React.createElement(Button, {
    onClick: () => setPageToolView({back: true}),
    value: "Back"
  });
}
