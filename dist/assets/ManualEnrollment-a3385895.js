import { o as Recoil_index_24, m as Recoil_index_22, t as Recoil_index_20, W as searchParamAtomFamily, j as jsx, b as jsxs, B as Button, aN as nanoid, h as axios } from "./PageViewer-d914b069.js";
import { processAtom, enrolllearnerAtom, peopleTableDataAtom } from "./LoadPeople-6141d57c.js";
import "./index-9598b80e.js";
import "./index-ab0d9fd5.js";
import "./ButtonGroup-b585a5ef.js";
import "./CollapseSection-5f783e94.js";
function ManualEnrollment(props) {
  Recoil_index_24(processAtom);
  const [enrolllearner, setEnrolllearner] = Recoil_index_22(enrolllearnerAtom);
  Recoil_index_24(peopleTableDataAtom);
  const driveId = Recoil_index_20(searchParamAtomFamily("driveId"));
  const enrollManual = (enrolllearner2, driveId2) => {
    if (enrolllearner2) {
      let payload = {
        email: enrolllearner2,
        userId: nanoid(),
        driveId: driveId2
      };
      console.log(">>>>payload", payload);
      axios.post("/api/manualEnrollment.php", payload).then((resp) => {
        console.log(">>>>resp", resp.data);
      });
    }
  };
  let manualEnroll = /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsxs("label", { children: [
      "Email",
      /* @__PURE__ */ jsx(
        "input",
        {
          required: true,
          type: "email",
          name: "email",
          value: enrolllearner,
          placeholder: "example@example.com",
          onChange: (e) => setEnrolllearner(e.currentTarget.value),
          onKeyDown: (e) => {
            if (e.key === "Enter") {
              enrollManual(enrolllearner, driveId);
            }
          }
        }
      )
    ] }),
    /* @__PURE__ */ jsx(
      Button,
      {
        value: "Enroll",
        onClick: () => enrollManual(enrolllearner, driveId)
      }
    )
  ] });
  return /* @__PURE__ */ jsx("div", { style: props.style, children: manualEnroll });
}
export {
  ManualEnrollment as default
};
