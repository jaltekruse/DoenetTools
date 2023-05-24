import { R as React, bx as useDoenetRenderer, r as reactExports, j as jsx, b as jsxs } from "./PageViewer-d914b069.js";
import { s as sizeToCSS } from "./css-5483d03f.js";
import { V as VisibilitySensor } from "./visibility-sensor-57589aaf.js";
const embed = React.memo(function Figure(props) {
  let { name, id, SVs, actions, callAction } = useDoenetRenderer(props);
  let onChangeVisibility = (isVisible) => {
    callAction({
      action: actions.recordVisibilityChange,
      args: { isVisible }
    });
  };
  reactExports.useEffect(() => {
    return () => {
      callAction({
        action: actions.recordVisibilityChange,
        args: { isVisible: false }
      });
    };
  }, []);
  reactExports.useEffect(() => {
    if (SVs.encodedGeogebraContent) {
      let doenetSvData = SVs;
      let cName = id;
      let width2 = sizeToCSS(SVs.width);
      let height2 = sizeToCSS(SVs.height);
      window.MathJax.Hub.Register.StartupHook("End", function() {
        let parameters = {
          id: cName,
          width: width2,
          height: height2,
          showResetIcon: false,
          enableLabelDrags: false,
          useBrowserForJS: true,
          showMenubar: false,
          errorDialogsActive: true,
          showToolbar: false,
          showAlgebraicInput: false,
          enableShiftDragZoom: true,
          enableRightClick: true,
          showToolBarHelp: false,
          ggbBase64: doenetSvData.encodedGeogebraContent.trim(),
          language: "en",
          country: "US",
          isPreloader: false,
          screenshotGenerator: false,
          preventFocus: false,
          fixApplet: false,
          prerelease: false,
          playButtonAutoDecide: true,
          playButton: false,
          canary: false,
          allowUpscale: false
        };
        let applet = new window.GGBApplet(parameters, true);
        applet.setHTML5Codebase("/geogebra/HTML5/5.0/web/", "true");
        applet.inject("container_" + cName, "preferhtml5");
      });
    }
  }, []);
  if (SVs.hidden) {
    return null;
  }
  let width = sizeToCSS(SVs.width);
  let height = sizeToCSS(SVs.height);
  if (SVs.geogebra) {
    return /* @__PURE__ */ jsx(VisibilitySensor, { partialVisibility: true, onChange: onChangeVisibility, children: /* @__PURE__ */ jsxs("div", { className: "geogebra", id, children: [
      /* @__PURE__ */ jsx("a", { name: id }),
      /* @__PURE__ */ jsx(
        "iframe",
        {
          scrolling: "no",
          title: "",
          src: `https://www.geogebra.org/material/iframe/id/${SVs.geogebra}/width/${width}/height/${height}/border/888888/sfsb/true/smb/false/stb/false/stbh/false/ai/false/asb/false/sri/false/rc/false/ld/false/sdz/false/ctl/false`,
          width,
          height,
          style: { border: "0px" },
          children: " "
        }
      )
    ] }) });
  } else if (SVs.encodedGeogebraContent) {
    return /* @__PURE__ */ jsx(VisibilitySensor, { partialVisibility: true, onChange: onChangeVisibility, children: /* @__PURE__ */ jsx("div", { className: "javascriptapplet", id, children: /* @__PURE__ */ jsx(
      "div",
      {
        className: "geogebrawebapplet",
        id: "container_" + id,
        style: { minWidth: width, minHeight: height }
      }
    ) }) });
  }
  console.warn("Nothing specified to embed");
  return null;
});
export {
  embed as default
};
