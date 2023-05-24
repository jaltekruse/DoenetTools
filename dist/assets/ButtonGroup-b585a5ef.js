import { s as styled, R as React, j as jsx, a_ as Fe } from "./PageViewer-d914b069.js";
const Container = styled.div`
  display: ${(props) => props.vertical ? "static" : "flex"};
  width: ${(props) => props.width == "menu" ? "var(--menuWidth)" : ""};
  /* flex-wrap: wrap; */
  // margin: 2px 0px 2px 0px
  /* overflow: clip; */
`;
function ButtonGroup(props) {
  const buttonGroup = {
    margin: "0px 2px 0px 2px",
    borderRadius: "0",
    padding: "0px 12px 0px 10px"
  };
  const verticalButtonGroup = {
    margin: "4px 4px 4px 4px",
    borderRadius: "0",
    padding: "0px 10px 0px 10px"
  };
  let elem = React.Children.toArray(props.children);
  return /* @__PURE__ */ jsx(Container, { vertical: props.vertical, width: props.width, children: /* @__PURE__ */ jsx(Fe, { theme: props.vertical ? verticalButtonGroup : buttonGroup, children: elem }) });
}
export {
  ButtonGroup as B
};
