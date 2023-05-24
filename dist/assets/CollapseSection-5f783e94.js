import { r as reactExports, b as jsxs, j as jsx, c as FontAwesomeIcon, bf as faCaretRight, s as styled } from "./PageViewer-d914b069.js";
const Section = styled.div`
  transition: height .25s;
  border-radius: .5em;
  margin: 0px 4px 0px 4px;
  width: ${(props) => props.width === "menu" ? "var(--menuWidth)" : ""}; // Menu prop
`;
const SectionHeader = styled.div`
  font-weight: bold;
  height: 24px;
  line-height: 1.5em;
  user-select: none;
  cursor: ${(props) => props.disabled ? "not-allowed" : "pointer"}; // Disabled prop
  overflow: auto;
  border: var(--mainBorder);
  display: block;
  text-align: center;
  background-color: var(--mainGray);
  color: var(--canvastext);
  &:focus {
    outline: 2px solid var(--canvastext);
    outline-offset: 2px;
  }
`;
const SectionContent = styled.div`
  padding: 1em;
  border-radius: 0 0 .5em .5em;
  border: var(--mainBorder);
  border-top: none;
  background-color: var(--canvas);
`;
const Label = styled.p` // Only visible with vertical label prop
  font-size: 14px;
  display: ${(props) => props.labelVisible};
  margin-right: 5px;
  margin-bottom: ${(props) => props.align == "flex" ? "none" : "2px"};
`;
function CollapseSection(props) {
  const [collapsed, setCollapsed] = reactExports.useState(Boolean(props.collapsed));
  const title = props.title ? String(props.title) : "Untitled Section";
  const labelVisible = props.label ? "static" : "none";
  const align = props.vertical ? "static" : "flex";
  const width = props.width ? props.width : null;
  const disabled = props.disabled ? props.disabled : null;
  const label = props.label ? props.label : null;
  let contentStyle = collapsed ? { display: "none" } : { display: "block" };
  let headerStyle = collapsed ? { borderRadius: ".5em" } : { borderRadius: ".5em .5em 0 0" };
  const arrowIcon = {
    // Styles the arrow icon
    marginRight: "7px",
    transition: "transform .25s",
    transform: `${collapsed ? "" : "rotate(90deg)"}`
  };
  return /* @__PURE__ */ jsxs(Section, { width, children: [
    /* @__PURE__ */ jsx(Label, { labelVisible, align, children: label }),
    /* @__PURE__ */ jsxs(
      SectionHeader,
      {
        "data-test": props.dataTest,
        "aria-label": title,
        "aria-labelledby": label,
        "aria-disabled": disabled,
        style: headerStyle,
        disabled,
        onClick: () => {
          disabled ? "" : setCollapsed(!collapsed);
        },
        onKeyDown: (e) => {
          disabled ? "" : e.key === "Enter" || e.key === "Spacebar" || e.key === " " ? setCollapsed(!collapsed) : "";
        },
        tabIndex: "0",
        children: [
          /* @__PURE__ */ jsx(FontAwesomeIcon, { icon: faCaretRight, style: arrowIcon }),
          title
        ]
      }
    ),
    /* @__PURE__ */ jsx(SectionContent, { style: contentStyle, children: props.children })
  ] });
}
export {
  CollapseSection as C
};
