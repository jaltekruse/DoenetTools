import { b as jsxs, j as jsx } from "./PageViewer-d914b069.js";
function EndPlacementExamPanel() {
  return /* @__PURE__ */ jsxs(
    "div",
    {
      style: {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        // display: 'flex',
        justifyContent: "center",
        alignItems: "center",
        margin: "20"
      },
      children: [
        /* @__PURE__ */ jsx("div", { style: { display: "flex", alignItems: "center" }, children: /* @__PURE__ */ jsx("h1", { children: "Exam is finished" }) }),
        /* @__PURE__ */ jsx("div", { style: { alignItems: "center", maxWidth: "400px" }, children: /* @__PURE__ */ jsx("p", { children: "You have completed the MathPlacementExam. It may take 24 hours for your results to show on the New Student Orientation Checklist. Further information about the math placement process can be found on the New Student Orientation Checklist." }) })
      ]
    }
  );
}
export {
  EndPlacementExamPanel as default
};
