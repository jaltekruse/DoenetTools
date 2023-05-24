import { j as jsx, b as jsxs, s as styled, o as Recoil_index_24, p as pageToolViewAtom, t as Recoil_index_20, W as searchParamAtomFamily, a7 as suppressMenusAtom, U as Recoil_index_21, V as profileAtom, r as reactExports, aa as coursePermissionsAndSettingsByCourseId, c as FontAwesomeIcon, ac as faCode, ad as faUser, ae as faChartPie, af as faTasks } from "./PageViewer-d914b069.js";
import { N as Next7Days } from "./Next7Days-583735fe.js";
import { e as effectivePermissionsByCourseId } from "./RoleDropdown-ece1f3f8.js";
import "./CourseToolHandler-1976a165.js";
import "./index-badc91d0.js";
import "./index-a634ad2f.js";
import "./index-72e7d0b2.js";
import "./index.esm-b50f3a4c.js";
import "./extends-d9a14db7.js";
import "./setPrototypeOf-be240aa9.js";
import "./inheritsLoose-000f9e77.js";
/* empty css               */import "./ButtonGroup-b585a5ef.js";
import "./DropdownMenu-d8160745.js";
import "./defineProperty-2975ceb9.js";
import "./emotion-react.browser.esm-dfafc3e8.js";
import "./emotion-element-6a883da9.browser.esm-2d3713e7.js";
const CardStyling = styled.button`
  background-image: linear-gradient(
    to bottom left,
    var(--canvas),
    var(--canvas),
    var(--canvas),
    var(--solidLightBlue)
  );
  border-radius: 5px;
  width: 190px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--canvastext);
  border: 2px solid
    ${(props) => props.alert ? "var(--mainRed)" : props.disabled ? "var(--mainGray)" : "var(--canvastext)"};
  cursor: ${(props) => props.disabled ? "not-allowed" : "pointer"};

  &:focus {
    outline: 2px solid
      ${(props) => props.alert ? "var(--mainRed)" : props.disabled ? "var(--mainGray)" : "var(--canvastext)"};
    outline-offset: 2px;
  }
`;
function Card(props) {
  const labelVisible = props.label ? "static" : "none";
  const align = props.vertical ? "static" : "flex";
  var title = {
    value: "Card",
    fontSize: "24px",
    fontFamily: "Open Sans",
    margin: "0"
  };
  var label = {
    value: "Label:",
    fontSize: "14px",
    marginRight: "5px",
    display: `${labelVisible}`,
    margin: "0px 5px 2px 0px"
  };
  var container = {
    display: `${align}`,
    alignItems: "center"
  };
  if (props.value) {
    title.value = props.value;
  }
  var icon = "";
  if (props.icon) {
    icon = props.icon;
  }
  const iconVisible = props.icon ? /* @__PURE__ */ jsx("div", { style: { padding: "8px", fontSize: "20px" }, children: icon }) : "";
  if (props.label) {
    label.value = props.label;
  }
  function handleClick(e) {
    if (props.onClick)
      props.onClick(e);
  }
  return /* @__PURE__ */ jsxs("div", { style: container, children: [
    /* @__PURE__ */ jsx("p", { style: label, children: label.value }),
    /* @__PURE__ */ jsxs(
      CardStyling,
      {
        "data-test": props.dataTest,
        alert: props.alert,
        disabled: props.disabled,
        "aria-labelledby": label,
        "aria-label": title.value,
        onClick: (e) => {
          handleClick(e);
        },
        children: [
          /* @__PURE__ */ jsx("h4", { style: title, children: /* @__PURE__ */ jsx("b", { children: title.value }) }),
          iconVisible
        ]
      }
    )
  ] });
}
function Dashboard(props) {
  const setPageToolView = Recoil_index_24(pageToolViewAtom);
  const courseId = Recoil_index_20(searchParamAtomFamily("courseId"));
  const {
    canModifyCourseSettings,
    canManageUsers,
    dataAccessPermission,
    canViewAndModifyGrades
  } = Recoil_index_20(effectivePermissionsByCourseId(courseId));
  const setSuppressMenus = Recoil_index_24(suppressMenusAtom);
  const loadProfile = Recoil_index_21(profileAtom);
  let profile = loadProfile.contents;
  reactExports.useEffect(() => {
    setSuppressMenus(canModifyCourseSettings === "1" ? [] : ["ClassTimes"]);
  }, [canModifyCourseSettings, setSuppressMenus]);
  let course = Recoil_index_20(coursePermissionsAndSettingsByCourseId(courseId));
  if ((course == null ? void 0 : course.canViewCourse) == "0") {
    return /* @__PURE__ */ jsx("h1", { children: "No Access to view this page." });
  }
  return /* @__PURE__ */ jsxs("div", { style: (props == null ? void 0 : props.style) ?? {}, children: [
    /* @__PURE__ */ jsxs("div", { style: { marginLeft: "10px", marginRight: "10px" }, children: [
      /* @__PURE__ */ jsx("h1", { children: "Welcome!" }),
      /* @__PURE__ */ jsxs(
        "div",
        {
          style: {
            display: "grid",
            gridAutoFlow: "column dense",
            gridAutoColumns: "min-content",
            gap: "30px",
            width: "850px"
          },
          children: [
            /* @__PURE__ */ jsx(
              Card,
              {
                dataTest: "Dashboard Content Card",
                name: "Content",
                icon: /* @__PURE__ */ jsx(FontAwesomeIcon, { icon: faCode }),
                value: "Content",
                onClick: () => {
                  setPageToolView((was) => {
                    return { ...was, tool: "navigation" };
                  });
                }
              }
            ),
            canManageUsers === "1" ? /* @__PURE__ */ jsx(
              Card,
              {
                dataTest: "Dashboard People Card",
                name: "People",
                icon: /* @__PURE__ */ jsx(FontAwesomeIcon, { icon: faUser }),
                value: "People",
                onClick: () => setPageToolView({
                  page: "course",
                  tool: "people",
                  view: "",
                  params: { courseId }
                })
              }
            ) : null,
            (dataAccessPermission ?? "None") !== "None" ? /* @__PURE__ */ jsx(
              Card,
              {
                dataTest: "Dashboard Data Card",
                name: "Data",
                icon: /* @__PURE__ */ jsx(FontAwesomeIcon, { icon: faChartPie }),
                value: "Data",
                onClick: () => setPageToolView({
                  page: "course",
                  tool: "data",
                  view: "",
                  params: { courseId }
                })
              }
            ) : null,
            canViewAndModifyGrades === "1" ? /* @__PURE__ */ jsx(
              Card,
              {
                dataTest: "Dashboard Gradebook Card",
                name: "Gradebook",
                icon: /* @__PURE__ */ jsx(FontAwesomeIcon, { icon: faTasks }),
                value: "Gradebook",
                onClick: () => setPageToolView((was) => {
                  return {
                    page: "course",
                    tool: "gradebook",
                    view: was.view,
                    params: { courseId }
                  };
                })
              }
            ) : /* @__PURE__ */ jsx(
              Card,
              {
                name: "Gradebook",
                icon: /* @__PURE__ */ jsx(FontAwesomeIcon, { icon: faTasks }),
                style: { marginLeft: "-600px" },
                value: "Gradebook",
                onClick: () => setPageToolView((was) => {
                  return {
                    page: "course",
                    tool: "gradebookStudent",
                    view: was.view,
                    params: { courseId, userId: profile.userId }
                  };
                })
              }
            )
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsx("div", { style: { marginTop: "10px", margin: "10px" }, children: /* @__PURE__ */ jsx(Next7Days, { courseId }) })
  ] });
}
export {
  Dashboard as default
};
