import { a0 as Recoil_index_31, Z as selectedMenuPanelAtom, a8 as itemByDoenetId, p as pageToolViewAtom, h as axios, j as jsx, r as reactExports, b as jsxs, ab as Ue, s as styled } from "./PageViewer-d914b069.js";
import { C as CourseNavigator } from "./CourseNavigator-3afd6a61.js";
import "./index.esm-b50f3a4c.js";
import "./extends-d9a14db7.js";
import "./setPrototypeOf-be240aa9.js";
import "./inheritsLoose-000f9e77.js";
/* empty css               */import "./RoleDropdown-ece1f3f8.js";
import "./DropdownMenu-d8160745.js";
import "./defineProperty-2975ceb9.js";
import "./emotion-react.browser.esm-dfafc3e8.js";
import "./emotion-element-6a883da9.browser.esm-2d3713e7.js";
import "./ButtonGroup-b585a5ef.js";
const movingGradient = Ue`
  0% { background-position: -250px 0; }
  100% { background-position: 250px 0; }
`;
const Table = styled.table`
  width: 850px;
  border-radius: 5px;
  margin-top: 50px;
  margin-left: 20px;
`;
const Tr = styled.tr``;
const Td = styled.td`
  height: 40px;
  vertical-align: middle;
  padding: 8px;
  /* border-bottom: 2px solid black; */

  &.Td2 {
    width: 50px;
  }

  &.Td3 {
    width: 400px;
  }
`;
const TBody = styled.tbody``;
const Td2Span = styled.span`
  display: block;
  background-color: var(--mainGray);
  width: 70px;
  height: 16px;
  border-radius: 5px;
`;
const Td3Span = styled.span`
  display: block;
  height: 14px;
  border-radius: 5px;
  background: linear-gradient(
    to right,
    var(--mainGray) 20%,
    var(--mainGray) 50%,
    var(--mainGray) 80%
  );
  background-size: 500px 100px;
  animation-name: ${movingGradient};
  animation-duration: 1s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  animation-fill-mode: forwards;
`;
function DataPanel() {
  const updateSelectMenu = Recoil_index_31(
    ({ set }) => async ({ selectedItems }) => {
      if (selectedItems.length > 0) {
        set(selectedMenuPanelAtom, "SelectedDataSources");
      } else {
        set(selectedMenuPanelAtom, null);
      }
    }
  );
  const doubleClickItem = Recoil_index_31(
    ({ set, snapshot }) => async ({ doenetId, courseId }) => {
      let clickedItem = await snapshot.getPromise(itemByDoenetId(doenetId));
      if (clickedItem.type == "section") {
        set(pageToolViewAtom, (prev) => {
          return {
            page: "course",
            tool: "data",
            view: prev.view,
            params: { sectionId: clickedItem.doenetId, courseId }
          };
        });
      } else {
        const resp = await axios.get(
          `/api/createSecretCode.php?courseId=${courseId}`
        );
        const { secretCode } = resp.data;
        window.open(
          `https://doenet.shinyapps.io/analyzer/?data=${doenetId}&code=${secretCode}`,
          "_blank"
        );
      }
    }
  );
  return /* @__PURE__ */ jsx(
    reactExports.Suspense,
    {
      fallback: /* @__PURE__ */ jsx(Table, { children: /* @__PURE__ */ jsxs(TBody, { children: [
        /* @__PURE__ */ jsxs(Tr, { children: [
          /* @__PURE__ */ jsx(Td, { className: "Td2", children: /* @__PURE__ */ jsx(Td2Span, {}) }),
          /* @__PURE__ */ jsx(Td, { className: "Td3", children: /* @__PURE__ */ jsx(Td3Span, {}) })
        ] }),
        /* @__PURE__ */ jsxs(Tr, { children: [
          /* @__PURE__ */ jsx(Td, { className: "Td2", children: /* @__PURE__ */ jsx(Td2Span, {}) }),
          /* @__PURE__ */ jsx(Td, { className: "Td3", children: /* @__PURE__ */ jsx(Td3Span, {}) })
        ] }),
        /* @__PURE__ */ jsxs(Tr, { children: [
          /* @__PURE__ */ jsx(Td, { className: "Td2", children: /* @__PURE__ */ jsx(Td2Span, {}) }),
          /* @__PURE__ */ jsx(Td, { className: "Td3", children: /* @__PURE__ */ jsx(Td3Span, {}) })
        ] })
      ] }) }),
      children: /* @__PURE__ */ jsx(Container, { children: /* @__PURE__ */ jsx(
        CourseNavigator,
        {
          updateSelectMenu,
          doubleClickItem,
          displayRole: "student"
        }
      ) })
    }
  );
}
function Container(props) {
  return /* @__PURE__ */ jsx(
    "div",
    {
      style: {
        maxWidth: "850px",
        margin: "10px 20px"
        // border: "1px red solid",
      },
      children: props.children
    }
  );
}
export {
  DataPanel as default
};
