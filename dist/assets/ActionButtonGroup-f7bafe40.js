import { s as styled, R as React, j as jsx, F as Fragment, b as jsxs, a_ as Fe } from "./PageViewer-d914b069.js";
const Container = styled.div`
  /* margin-left: 3px; */
  display: ${(props) => props.vertical ? "static" : "flex"};
  overflow: auto;
  min-width: 0;
  /* flex-wrap: wrap; */
`;
const LabelContainer = styled.div`
  display: ${(props) => props.align};
  width: ${(props) => props.width == "menu" ? "var(--menuWidth)" : ""};
  align-items: ${(props) => props.alignItems};
`;
const Label = styled.p`
  font-size: 14px;
  display: ${(props) => props.labelVisible};
  margin-right: 5px;
  margin-bottom: ${(props) => props.align == "flex" ? "none" : "2px"};
`;
const actionGroup = {
  // margin: '0px -2px 0px -2px',
  borderRadius: "0",
  padding: "0px 12px 0px 10px",
  border: "1px solid var(--mainGray)",
  // Adds a light border around each button in the group
  outlineOffset: "-6px"
};
const verticalActionGroup = {
  margin: "0px 4px 0px 4px",
  borderRadius: "0",
  padding: "0px 10px 0px 10px",
  border: "1px solid var(--mainGray)",
  outlineOffset: "-6px"
};
const ActionButtonGroup = (props) => {
  let first_prop = props.vertical ? "first_vert" : "first";
  let last_prop = props.vertical ? "last_vert" : "last";
  let overflow_prop = props.width ? "no_overflow" : "overflow";
  let elem = React.Children.toArray(props.children);
  if (elem.length > 1) {
    elem = [
      React.cloneElement(elem[0], { num: first_prop, overflow: overflow_prop })
    ].concat(
      elem.slice(1, -1).map((x) => React.cloneElement(x, { overflow: overflow_prop }))
    ).concat(
      React.cloneElement(elem[elem.length - 1], {
        num: last_prop,
        overflow: overflow_prop
      })
    );
  }
  const labelVisible = props.label ? "static" : "none";
  var label = "";
  var align = "flex";
  var alignItems = "center";
  if (props.label) {
    label = props.label;
    if (props.verticalLabel) {
      align = "static";
    }
  }
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs(LabelContainer, { align, alignItems, width: props.width, children: [
    /* @__PURE__ */ jsx(Label, { labelVisible, align, children: label }),
    /* @__PURE__ */ jsx(Container, { vertical: props.vertical, children: /* @__PURE__ */ jsx(
      Fe,
      {
        theme: props.vertical ? verticalActionGroup : actionGroup,
        children: elem
      }
    ) })
  ] }) });
};
const ActionButtonGroup$1 = ActionButtonGroup;
export {
  ActionButtonGroup$1 as A
};
