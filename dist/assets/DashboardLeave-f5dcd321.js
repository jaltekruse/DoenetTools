import { a0 as Recoil_index_31, Z as selectedMenuPanelAtom } from "./PageViewer-d914b069.js";
import { c as clearDriveAndItemSelections, g as globalSelectedNodesAtom } from "./CourseToolHandler-1976a165.js";
import "./index-badc91d0.js";
import "./index-a634ad2f.js";
import "./index-72e7d0b2.js";
import "./index.esm-b50f3a4c.js";
import "./extends-d9a14db7.js";
import "./setPrototypeOf-be240aa9.js";
import "./inheritsLoose-000f9e77.js";
/* empty css               */import "./ButtonGroup-b585a5ef.js";
function DashboardLeave() {
  const setSelections = Recoil_index_31(({ set }) => () => {
    set(clearDriveAndItemSelections, null);
    set(globalSelectedNodesAtom, []);
    set(selectedMenuPanelAtom, "");
  });
  setSelections();
  return null;
}
export {
  DashboardLeave as default
};
