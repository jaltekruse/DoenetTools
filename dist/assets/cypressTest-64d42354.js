import { r as reactExports, m as Recoil_index_22, J as darkModeAtom, j as jsx, P as PageViewer, b as jsxs, C as createRoot, D as Recoil_index_5, K as BrowserRouter, M as Routes, Q as Route, S as DarkmodeController, v as betterReactMathjax, G as mathjaxConfig } from "./PageViewer-d914b069.js";
import { A as ActivityViewer } from "./ActivityViewer-b51a59ab.js";
import "./activityUtils-7af1fc96.js";
import "./visibility-sensor-57589aaf.js";
import "./ActionButton-1e9c5f7a.js";
import "./ButtonGroup-b585a5ef.js";
function Test() {

  let viewer = null;
  let doenetML = "<graph />";
  if (doenetML !== null) {
    viewer = /* @__PURE__ */ jsx(
      PageViewer,
      {
                    doenetML: doenetML,
                    flags: {
                      showCorrectness: true,
                      solutionDisplayMode: true,
                      showFeedback: true,
                      showHints: true,
                      autoSubmit: false,
                      allowLoadState: false,
                      allowSaveState: false,
                      allowLocalState: false,
                      allowSaveSubmissions: false,
                      allowSaveEvents: false,
                    },
                    // doenetId={doenetId}
                    attemptNumber:1,
                    generatedVariantCallback: function() {}, //TODO:Replace
                    requestedVariantIndex: 1,
                    // setIsInErrorState={setIsInErrorState}
                    pageIsActive: true
      },
      "pageviewer"
    );
  } else if (activityDefinition !== null) {
    viewer = /* @__PURE__ */ jsx(
      ActivityViewer,
      {
        activityDefinition,
        updateDataOnContentChange: true,
        flags: {
                      showCorrectness: true,
                      solutionDisplayMode: true,
                      showFeedback: true,
                      showHints: true,
                      autoSubmit: false,
                      allowLoadState: false,
                      allowSaveState: false,
                      allowLocalState: false,
                      allowSaveSubmissions: false,
                      allowSaveEvents: false,
        },
        attemptNumber:1,
        requestedVariantIndex: 1,
        // setIsInErrorState={setIsInErrorState}
        paginate: true,
        doenetId: "doenetIdFromCypress",
      },
      "activityViewer"
    );
  }
  return /* @__PURE__ */ jsxs(
    "div",
    {
      style: { backgroundColor: "var(--canvas)", color: "var(--canvastext)" },
      children: [
        viewer
      ]
    }
  );
}
const root = createRoot(document.getElementById("root"));
root.render(
  /* @__PURE__ */ jsx(Recoil_index_5, { children: /* @__PURE__ */ jsx(BrowserRouter, { children: /* @__PURE__ */ jsx(Routes, { children: /* @__PURE__ */ jsx(
    Route,
    {
      path: "*",
      element: /* @__PURE__ */ jsx(DarkmodeController, { children: /* @__PURE__ */ jsx(
        betterReactMathjax.MathJaxContext,
        {
          version: 2,
          config: mathjaxConfig,
          onStartup: (mathJax) => mathJax.Hub.processSectionDelay = 0,
          children: /* @__PURE__ */ jsx(Test, {})
        }
      ) })
    }
  ) }) }) })
);
