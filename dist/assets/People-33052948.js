import { t as Recoil_index_20, W as searchParamAtomFamily, au as peopleByCourseId, q as useCourse, r as reactExports, m as Recoil_index_22, b as jsxs, j as jsx, B as Button, a5 as CheckboxButton, s as styled } from "./PageViewer-d914b069.js";
import { A as AddUserWithOptions } from "./SettingComponents-71d0c77d.js";
import { M as Measure } from "./index.esm-b50f3a4c.js";
import { R as RoleDropdown } from "./RoleDropdown-ece1f3f8.js";
import { processAtom, headersAtom, entriesAtom, csvPeopleProcess, validHeaders } from "./LoadPeople-6141d57c.js";
import { B as ButtonGroup } from "./ButtonGroup-b585a5ef.js";
import "./CourseToolHandler-1976a165.js";
import "./index-badc91d0.js";
import "./index-a634ad2f.js";
import "./index-72e7d0b2.js";
/* empty css               */import "./CollapseSection-5f783e94.js";
import "./util-2e804dda.js";
import "./DateTime-4edca487.js";
import "./moment-feb1c730.js";
import "./DropdownMenu-d8160745.js";
import "./defineProperty-2975ceb9.js";
import "./setPrototypeOf-be240aa9.js";
import "./extends-d9a14db7.js";
import "./emotion-react.browser.esm-dfafc3e8.js";
import "./emotion-element-6a883da9.browser.esm-2d3713e7.js";
import "./RelatedItems-8a9ec536.js";
import "./Textfield-0be9f722.js";
import "./inheritsLoose-000f9e77.js";
import "./index-9598b80e.js";
import "./index-ab0d9fd5.js";
const InputWrapper = styled.div`
  margin: 0 5px 10px 5px;
  display: ${(props) => props.flex ? "flex" : "block"};
  align-items: ${(props) => props.flex && "center"};
  gap: 4px;
`;
const CheckboxLabelText = styled.span`
  font-size: 15px;
  line-height: 1.1;
`;
function People() {
  const courseId = Recoil_index_20(searchParamAtomFamily("courseId"));
  const {
    recoilUnWithdraw,
    recoilWithdraw,
    recoilMergeData,
    value: peopleTableData
  } = Recoil_index_20(peopleByCourseId(courseId));
  const { modifyUserRole, defaultRoleId } = useCourse(courseId);
  let [showWithdrawn, setShowWithdrawn] = reactExports.useState(false);
  const [numberOfVisibleColumns, setNumberOfVisibleColumns] = reactExports.useState(1);
  const [process, setProcess] = Recoil_index_22(processAtom);
  const headers = Recoil_index_20(headersAtom);
  const entries = Recoil_index_20(entriesAtom);
  const [selectedRoleId, setSelectedRoleId] = reactExports.useState(defaultRoleId);
  if (!courseId) {
    return null;
  }
  const enrollLearners = (e, enrollLearner) => {
    e.preventDefault();
    recoilUnWithdraw(enrollLearner);
  };
  const withDrawLearners = (e, withdrewLearner) => {
    e.preventDefault();
    recoilWithdraw(withdrewLearner);
  };
  if (process === csvPeopleProcess.PREVIEW) {
    return /* @__PURE__ */ jsxs("div", { style: { padding: "8px" }, children: [
      /* @__PURE__ */ jsx("h2", { children: "Preview CSV People" }),
      /* @__PURE__ */ jsx(
        RoleDropdown,
        {
          label: "Assigned Role",
          valueRoleId: selectedRoleId ?? defaultRoleId,
          onChange: ({ value: roleId }) => {
            setSelectedRoleId(roleId);
          },
          maxMenuHeight: "200px",
          vertical: true
        }
      ),
      /* @__PURE__ */ jsx(
        PeopleTabelHeader,
        {
          columnLabels: headers.filter((head) => validHeaders[head] ?? false),
          numberOfVisibleColumns,
          setNumberOfVisibleColumns
        }
      ),
      entries.map((entry, idx) => /* @__PURE__ */ jsx(
        PreviewTableRow,
        {
          numberOfVisibleColumns,
          entryData: entry,
          headers
        },
        `${entry[0]} ${idx}`
      )),
      /* @__PURE__ */ jsx("br", {}),
      /* @__PURE__ */ jsxs(ButtonGroup, { children: [
        /* @__PURE__ */ jsx(
          Button,
          {
            onClick: () => {
              setProcess(csvPeopleProcess.IDLE);
            },
            value: "Cancel",
            "data-test": "Cancel"
          }
        ),
        /* @__PURE__ */ jsx(
          Button,
          {
            onClick: () => {
              const mergePayload = {
                roleId: selectedRoleId ?? defaultRoleId,
                mergeHeads: headers,
                mergeExternalId: [],
                mergeFirstName: [],
                mergeLastName: [],
                mergeSection: [],
                mergeEmail: []
              };
              for (const entry of entries) {
                entry.map((candidateData, colIdx) => {
                  if (validHeaders[headers[colIdx]])
                    mergePayload[`merge${headers[colIdx]}`].push(candidateData);
                });
              }
              recoilMergeData(mergePayload, () => {
                setProcess(csvPeopleProcess.IDLE);
              });
            },
            value: "Merge",
            "data-test": "Merge",
            alert: true
          }
        )
      ] })
    ] });
  }
  return /* @__PURE__ */ jsxs("div", { style: { padding: "8px" }, children: [
    /* @__PURE__ */ jsx("h2", { children: "Add Person" }),
    /* @__PURE__ */ jsx(AddUserWithOptions, { courseId }),
    /* @__PURE__ */ jsx("h2", { children: "Current People" }),
    peopleTableData.length > 0 ? /* @__PURE__ */ jsxs(InputWrapper, { flex: true, children: [
      /* @__PURE__ */ jsx(
        CheckboxButton,
        {
          onClick: () => {
            setShowWithdrawn(!showWithdrawn);
          },
          dataTest: "Show Withdrawn",
          checked: showWithdrawn
        }
      ),
      /* @__PURE__ */ jsx(CheckboxLabelText, { children: "Show Withdrawn" })
    ] }) : null,
    /* @__PURE__ */ jsx(
      PeopleTabelHeader,
      {
        columnLabels: ["Name", "Email", "Role", "Date Added"],
        numberOfVisibleColumns,
        setNumberOfVisibleColumns
      }
    ),
    /* @__PURE__ */ jsx("div", { "data-test": "People Table", children: peopleTableData.map(
      ({
        email,
        firstName,
        lastName,
        screenName,
        dateEnrolled,
        roleId,
        withdrew
      }) => {
        const columnsJSX = [
          email,
          /* @__PURE__ */ jsx(
            RoleDropdown,
            {
              valueRoleId: roleId,
              onChange: ({ value: newRoleId }) => {
                modifyUserRole(email, newRoleId, () => {
                });
              },
              width: "150px"
            },
            "role"
          ),
          dateEnrolled,
          /* @__PURE__ */ jsx(
            Button,
            {
              value: withdrew === "0" ? "Withdraw" : "Enroll",
              "data-test": withdrew === "0" ? `Withdraw ${email}` : `Enroll ${email}`,
              onClick: (e) => {
                if (withdrew === "0") {
                  withDrawLearners(e, email);
                } else {
                  enrollLearners(e, email);
                }
              }
            },
            "withdraw"
          )
        ];
        if (!showWithdrawn && withdrew === "1")
          return null;
        return /* @__PURE__ */ jsx(
          PeopleTableRow,
          {
            label: `${firstName} ${lastName} (${screenName})`,
            numberOfVisibleColumns,
            columnsJSX
          },
          email
        );
      }
    ) }),
    peopleTableData.length === 0 ? /* @__PURE__ */ jsx("p", { children: "No Students are currently enrolled in the course" }) : null
  ] });
}
function PeopleTabelHeader({
  columnLabels,
  numberOfVisibleColumns,
  setNumberOfVisibleColumns
}) {
  const updateNumColumns = reactExports.useCallback(
    (width) => {
      const maxColumns = columnLabels.length + 1;
      const breakpoints = [375, 500, 650, 800];
      if (width >= breakpoints[3] && numberOfVisibleColumns !== 5) {
        const nextNumberOfVisibleColumns = Math.min(maxColumns, 5);
        setNumberOfVisibleColumns == null ? void 0 : setNumberOfVisibleColumns(nextNumberOfVisibleColumns);
      } else if (width < breakpoints[3] && width >= breakpoints[2] && numberOfVisibleColumns !== 4) {
        const nextNumberOfVisibleColumns = Math.min(maxColumns, 4);
        setNumberOfVisibleColumns == null ? void 0 : setNumberOfVisibleColumns(nextNumberOfVisibleColumns);
      } else if (width < breakpoints[2] && width >= breakpoints[1] && numberOfVisibleColumns !== 3) {
        const nextNumberOfVisibleColumns = Math.min(maxColumns, 3);
        setNumberOfVisibleColumns == null ? void 0 : setNumberOfVisibleColumns(nextNumberOfVisibleColumns);
      } else if (width < breakpoints[1] && width >= breakpoints[0] && numberOfVisibleColumns !== 2) {
        const nextNumberOfVisibleColumns = Math.min(maxColumns, 2);
        setNumberOfVisibleColumns == null ? void 0 : setNumberOfVisibleColumns(nextNumberOfVisibleColumns);
      } else if (width < breakpoints[0] && numberOfVisibleColumns !== 1) {
        setNumberOfVisibleColumns == null ? void 0 : setNumberOfVisibleColumns(1);
      } else if (numberOfVisibleColumns > maxColumns) {
        setNumberOfVisibleColumns == null ? void 0 : setNumberOfVisibleColumns(maxColumns);
      }
    },
    [columnLabels, numberOfVisibleColumns, setNumberOfVisibleColumns]
  );
  let columnsCSS = getColumnsCSS(numberOfVisibleColumns);
  return /* @__PURE__ */ jsx(
    Measure,
    {
      bounds: true,
      onResize: (contentRect) => {
        const width = contentRect.bounds.width;
        updateNumColumns(width);
      },
      children: ({ measureRef }) => /* @__PURE__ */ jsx(
        "div",
        {
          ref: measureRef,
          className: "noselect nooutline",
          style: {
            padding: "8px",
            border: "0px",
            borderBottom: "1px solid var(--canvastext)",
            maxWidth: "850px",
            margin: "0px"
          },
          children: /* @__PURE__ */ jsxs(
            "div",
            {
              style: {
                display: "grid",
                gridTemplateColumns: columnsCSS,
                gridTemplateRows: "1fr",
                alignContent: "center",
                gap: "4px"
              },
              children: [
                /* @__PURE__ */ jsx("span", { children: columnLabels[0] }),
                numberOfVisibleColumns >= 2 && columnLabels[1] ? /* @__PURE__ */ jsx("span", { style: { textAlign: "center" }, children: columnLabels[1] }) : null,
                numberOfVisibleColumns >= 3 && columnLabels[2] ? /* @__PURE__ */ jsx("span", { style: { textAlign: "center" }, children: columnLabels[2] }) : null,
                numberOfVisibleColumns >= 4 && columnLabels[3] ? /* @__PURE__ */ jsx("span", { style: { textAlign: "center" }, children: columnLabels[3] }) : null,
                numberOfVisibleColumns >= 5 && columnLabels[4] ? /* @__PURE__ */ jsx("span", { style: { textAlign: "center" }, children: columnLabels[4] }) : null
              ]
            }
          )
        }
      )
    }
  );
}
function PeopleTableRow({ numberOfVisibleColumns, label, columnsJSX = [] }) {
  let columnsCSS = getColumnsCSS(numberOfVisibleColumns);
  return /* @__PURE__ */ jsx(
    "div",
    {
      className: "navigationRow noselect nooutline",
      style: {
        // cursor: 'pointer',
        padding: "8px",
        border: "0px",
        borderBottom: "2px solid var(--canvastext)",
        backgroundColor: "var(--canvas)",
        color: "var(--canvastext)",
        width: "auto",
        // marginLeft: marginSize,
        maxWidth: "850px"
      },
      children: /* @__PURE__ */ jsxs(
        "div",
        {
          style: {
            display: "grid",
            gridTemplateColumns: columnsCSS,
            gridTemplateRows: "1fr",
            alignContent: "center",
            gap: "4px"
          },
          children: [
            /* @__PURE__ */ jsx("span", { className: "navigationColumn1", children: /* @__PURE__ */ jsx(
              "p",
              {
                style: {
                  display: "inline",
                  margin: "0px"
                },
                children: /* @__PURE__ */ jsxs("span", { style: { marginLeft: "4px" }, "data-test": "rowLabel", children: [
                  label,
                  " "
                ] })
              }
            ) }),
            columnsJSX.map(
              (value, idx) => numberOfVisibleColumns > idx + 1 ? /* @__PURE__ */ jsx(
                "span",
                {
                  className: `navigationColumn${idx + 1}`,
                  style: { textAlign: "left" },
                  children: value
                },
                idx
              ) : null
            )
          ]
        }
      )
    }
  );
}
function PreviewTableRow({ numberOfVisibleColumns, entryData, headers }) {
  let columnsCSS = getColumnsCSS(numberOfVisibleColumns);
  const columnsJSX = [];
  entryData.map((candidateData, colIdx) => {
    if (validHeaders[headers[colIdx]])
      columnsJSX.push(candidateData);
  });
  return /* @__PURE__ */ jsx(
    "div",
    {
      className: "navigationRow noselect nooutline",
      style: {
        // cursor: 'pointer',
        padding: "8px",
        border: "0px",
        borderBottom: "2px solid var(--canvastext)",
        backgroundColor: "var(--canvas)",
        color: "var(--canvastext)",
        width: "auto",
        // marginLeft: marginSize,
        maxWidth: "850px"
      },
      children: /* @__PURE__ */ jsx(
        "div",
        {
          style: {
            display: "grid",
            gridTemplateColumns: columnsCSS,
            gridTemplateRows: "1fr",
            alignContent: "center",
            gap: "4px"
          },
          children: columnsJSX.map(
            (value, idx) => numberOfVisibleColumns > idx ? /* @__PURE__ */ jsx(
              "span",
              {
                className: `navigationColumn${idx + 1}`,
                style: { textAlign: idx + 1 > 1 ? "center" : "left" },
                children: value
              },
              idx
            ) : null
          )
        }
      )
    }
  );
}
function getColumnsCSS(numberOfVisibleColumns) {
  let columnsCSS = `repeat(${numberOfVisibleColumns},minmax(150px, 1fr))`;
  return columnsCSS;
}
export {
  People as default
};
