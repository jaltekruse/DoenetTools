import { R as React, bx as useDoenetRenderer, r as reactExports, j as jsx, b as jsxs, F as Fragment } from "./PageViewer-d914b069.js";
const footnote = React.memo(function Footnote(props) {
  let { name, id, SVs } = useDoenetRenderer(props, false);
  let [isVisible, setIsVisible] = reactExports.useState(false);
  if (SVs.hidden) {
    return null;
  }
  const footnoteMessageStyle = {
    padding: "10px",
    borderRadius: "5px",
    backgroundColor: "#e2e2e2",
    display: `static`
  };
  let footnoteMessage = "";
  if (isVisible) {
    footnoteMessage = /* @__PURE__ */ jsx("div", { style: footnoteMessageStyle, children: SVs.text });
  }
  const buttonStyle = {
    backgroundColor: "white",
    border: "none"
  };
  const footnoteStyle = {
    textDecoration: "none",
    color: "#1A5A99"
  };
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs("span", { id, children: [
      /* @__PURE__ */ jsx("a", { name: id }),
      /* @__PURE__ */ jsx("sup", { children: /* @__PURE__ */ jsx(
        "button",
        {
          style: buttonStyle,
          onClick: () => setIsVisible((was) => !was),
          children: /* @__PURE__ */ jsxs("a", { href: "#", title: SVs.text, style: footnoteStyle, children: [
            "[",
            SVs.footnoteTag,
            "]"
          ] })
        }
      ) })
    ] }),
    footnoteMessage
  ] });
});
export {
  footnote as default
};
