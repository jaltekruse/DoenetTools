import { t as Recoil_index_20, W as searchParamAtomFamily, U as Recoil_index_21, j as jsx } from "./PageViewer-d914b069.js";
import { specificAttemptData } from "./Gradebook-7b015fa4.js";
import "./RoleDropdown-ece1f3f8.js";
import "./DropdownMenu-d8160745.js";
import "./defineProperty-2975ceb9.js";
import "./setPrototypeOf-be240aa9.js";
import "./extends-d9a14db7.js";
import "./emotion-react.browser.esm-dfafc3e8.js";
import "./emotion-element-6a883da9.browser.esm-2d3713e7.js";
function GradebookDoenetMLView(props) {
  let doenetId = Recoil_index_20(searchParamAtomFamily("doenetId"));
  let userId = Recoil_index_20(searchParamAtomFamily("userId"));
  let attemptNumber = Recoil_index_20(searchParamAtomFamily("attemptNumber"));
  let specificAttempt = Recoil_index_21(
    specificAttemptData({ doenetId, userId, attemptNumber })
  );
  console.log(specificAttempt.state, specificAttempt.contents);
  specificAttempt.state;
  return specificAttempt.state === "hasValue" ? /* @__PURE__ */ jsx("p", { children: specificAttempt.contents.doenetML }) : /* @__PURE__ */ jsx("p", { children: specificAttempt.state });
}
export {
  GradebookDoenetMLView as default
};
