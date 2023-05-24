import { a0 as Recoil_index_31 } from "./PageViewer-d914b069.js";
import { processGradesAtom } from "./GradebookAssignment-9679e89e.js";
import "./Gradebook-7b015fa4.js";
import "./RoleDropdown-ece1f3f8.js";
import "./DropdownMenu-d8160745.js";
import "./defineProperty-2975ceb9.js";
import "./setPrototypeOf-be240aa9.js";
import "./extends-d9a14db7.js";
import "./emotion-react.browser.esm-dfafc3e8.js";
import "./emotion-element-6a883da9.browser.esm-2d3713e7.js";
import "./ButtonGroup-b585a5ef.js";
function GradebookAssignmentLeave() {
  const setProcess = Recoil_index_31(({ set }) => () => {
    set(processGradesAtom, "Assignment Table");
  });
  setProcess();
  return null;
}
export {
  GradebookAssignmentLeave as default
};
