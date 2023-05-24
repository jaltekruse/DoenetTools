import { t as Recoil_index_20, W as searchParamAtomFamily, m as Recoil_index_22, j as jsx, B as Button, h as axios } from "./PageViewer-d914b069.js";
import { l as loadAssignmentSelector } from "./CourseToolHandler-1976a165.js";
import { numberOfAttemptsAllowedAdjustmentAtom, currentAttemptNumber, cidChangedAtom } from "./AssignmentViewer-40516027.js";
import "./index-badc91d0.js";
import "./index-a634ad2f.js";
import "./index-72e7d0b2.js";
import "./index.esm-b50f3a4c.js";
import "./extends-d9a14db7.js";
import "./setPrototypeOf-be240aa9.js";
import "./inheritsLoose-000f9e77.js";
/* empty css               */import "./ButtonGroup-b585a5ef.js";
import "./ActivityViewer-b51a59ab.js";
import "./activityUtils-7af1fc96.js";
import "./visibility-sensor-57589aaf.js";
import "./ActionButton-1e9c5f7a.js";
import "./RoleDropdown-ece1f3f8.js";
import "./DropdownMenu-d8160745.js";
import "./defineProperty-2975ceb9.js";
import "./emotion-react.browser.esm-dfafc3e8.js";
import "./emotion-element-6a883da9.browser.esm-2d3713e7.js";
function AssignmentNewAttempt() {
  const doenetId = Recoil_index_20(searchParamAtomFamily("doenetId"));
  const [
    numberOfAttemptsAllowedAdjustment,
    setNumberOfAttemptsAllowedAdjustment
  ] = Recoil_index_22(numberOfAttemptsAllowedAdjustmentAtom);
  const [attemptNumber, setAttemptNumber] = Recoil_index_22(currentAttemptNumber);
  const { numberOfAttemptsAllowed: baseNumberOfAttemptsAllowed } = Recoil_index_20(loadAssignmentSelector(doenetId));
  const cidChanged = Recoil_index_20(cidChangedAtom);
  let numberOfAttemptsAllowed = null;
  if (baseNumberOfAttemptsAllowed !== null) {
    numberOfAttemptsAllowed = Number(baseNumberOfAttemptsAllowed) + Number(numberOfAttemptsAllowedAdjustment);
  }
  const buttonEnabled = numberOfAttemptsAllowed === null || attemptNumber < numberOfAttemptsAllowed;
  const newAttempt = async function() {
    if (buttonEnabled) {
      if (cidChanged) {
        let resp = await axios.post(
          "/api/incrementAttemptsAllowedIfCidChanged.php",
          {
            doenetId
          }
        );
        if (resp.data.cidChanged) {
          setNumberOfAttemptsAllowedAdjustment(
            Number(resp.data.newNumberOfAttemptsAllowedAdjustment)
          );
        }
      }
      setAttemptNumber((was) => was + 1);
    }
  };
  return /* @__PURE__ */ jsx(
    Button,
    {
      value: "New Attempt",
      dataTest: "New Attempt",
      disabled: !buttonEnabled,
      onClick: newAttempt
    }
  );
}
export {
  AssignmentNewAttempt as default
};
