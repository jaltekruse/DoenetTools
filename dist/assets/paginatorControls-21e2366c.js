import { R as React, bx as useDoenetRenderer, b as jsxs, j as jsx } from "./PageViewer-d914b069.js";
const paginatorControls = React.memo(function PaginatorControls(props) {
  let { name, id, SVs, actions, callAction } = useDoenetRenderer(props, false);
  if (SVs.hidden) {
    return null;
  }
  return /* @__PURE__ */ jsxs("p", { id, children: [
    /* @__PURE__ */ jsx("a", { name: id }),
    /* @__PURE__ */ jsx(
      "button",
      {
        id: id + "_previous",
        onClick: () => {
          callAction({
            action: actions.setPage,
            args: { number: SVs.currentPage - 1 }
          });
        },
        disabled: SVs.disabled || !(SVs.currentPage > 1),
        children: SVs.previousLabel
      }
    ),
    " " + SVs.pageLabel,
    " ",
    SVs.currentPage,
    " of ",
    SVs.numPages + " ",
    /* @__PURE__ */ jsx(
      "button",
      {
        id: id + "_next",
        onClick: () => {
          callAction({
            action: actions.setPage,
            args: { number: SVs.currentPage + 1 }
          });
        },
        disabled: SVs.disabled || !(SVs.currentPage < SVs.numPages),
        children: SVs.nextLabel
      }
    )
  ] });
});
export {
  paginatorControls as default
};
