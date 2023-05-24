import { s as styled, bc as Ce, r as reactExports, j as jsx, b as jsxs, q as useCourse, t as Recoil_index_20, b6 as courseRolesByCourseId, bd as useValidateEmail, B as Button, a3 as useToast, au as peopleByCourseId, F as Fragment, U as Recoil_index_21, b5 as courseRolePermissionsByCourseIdRoleId, a5 as CheckboxButton, a4 as toastType, o as Recoil_index_24, be as DateToDateString } from "./PageViewer-d914b069.js";
import { d as drivecardSelectedNodesAtom } from "./CourseToolHandler-1976a165.js";
import { B as ButtonGroup } from "./ButtonGroup-b585a5ef.js";
import { C as CollapseSection } from "./CollapseSection-5f783e94.js";
import { d as driveColors, a as driveImages } from "./util-2e804dda.js";
import { D as DateTime } from "./DateTime-4edca487.js";
import { D as DropdownMenu } from "./DropdownMenu-d8160745.js";
import { R as RelatedItems } from "./RelatedItems-8a9ec536.js";
import { R as RoleDropdown } from "./RoleDropdown-ece1f3f8.js";
import { T as Textfield } from "./Textfield-0be9f722.js";
const Display = styled.button`
  border-radius: var(--mainBorderRadius);
  border: none;
  height: 36px;
  width: 36px;
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  background-color: ${(props) => props.color || "var(--canvas)"};
  background-image: ${(props) => props.image || "none"};
  cursor: pointer;
  &:focus {
    outline: 2px solid var(--canvastext);
    outline-offset: 2px;
  }
`;
const Menu = styled.div`
  border: var(--mainBorder);
  border-radius: var(--mainBorderRadius);
  background-color: var(--canvas);
  height: 352px;
  width: 220px;
  display: none;
  position: relative;
  top: 40px;
  overflow: scroll;
  ${(props) => props.visible === "True" && Ce`
      display: block;
    `};
`;
const ColorSection = styled.div`
  display: grid;
  grid-template-columns: repeat(9, 24px);
  grid-template-rows: 20px;
  width: 224px;
  height: 24px;
`;
const ImageSection = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 54px);
  grid-template-rows: repeat(7, 54px);
  width: 224px;
  height: 140px;
  padding-bottom: 6px;
`;
const Color = styled.div`
  border-radius: var(--mainBorderRadius);
  height: 20px;
  width: 20px;
  margin: 4px;
  background-color: ${(props) => props.color || "var(--canvas)"};
`;
const Label = styled.p`
  display: static;
  margin-right: 5px;
  font-family: "Open Sans";
  margin-bottom: 6px;
`;
const Container = styled.div`
  display: static;
  width: auto;
`;
const Image = styled.div`
  border-radius: var(--mainBorderRadius);
  height: 50px;
  width: 50px;
  margin: 4px;
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  background-image: ${(props) => props.image || "none"};
`;
function ColorImagePicker(props) {
  const [menuOpen, setMenuOpen] = reactExports.useState("False");
  const [displayColor, setDisplayColor] = reactExports.useState(
    props.initialColor ? props.initialColor : "var(--canvas)"
  );
  const [displayImage, setDisplayImage] = reactExports.useState(
    props.initialImage ? props.initialImage : "none"
  );
  function handleClick(e) {
    if (menuOpen == "True") {
      setMenuOpen("False");
    } else if (menuOpen == "False") {
      setMenuOpen("True");
    }
  }
  function changeColor(newColor) {
    setDisplayColor(newColor);
    setDisplayImage("none");
    setMenuOpen("False");
    if (props.colorCallback)
      props.colorCallback(newColor);
  }
  function changeImage(newImage) {
    setDisplayImage(newImage);
    setDisplayColor("none");
    setMenuOpen("False");
    if (props.imageCallback)
      props.imageCallback(newImage);
  }
  var colorArray = [];
  for (let i = 0; i < driveColors.length; i++) {
    colorArray.push(
      /* @__PURE__ */ jsx(
        Color,
        {
          color: "#" + driveColors[i].Color,
          onClick: () => {
            changeColor(driveColors[i].Color);
          },
          "aria-label": driveColors[i].Name
        },
        i
      )
    );
  }
  var imageArray = [];
  for (let i = 0; i < driveImages.length; i++) {
    imageArray.push(
      /* @__PURE__ */ jsx(
        Image,
        {
          image: "url(/drive_pictures/" + driveImages[i].Image + ")",
          onClick: () => {
            changeImage(driveImages[i].Image);
          },
          "aria-label": driveImages[i].Name
        },
        i
      )
    );
  }
  return /* @__PURE__ */ jsxs(Container, { children: [
    /* @__PURE__ */ jsx(Label, { id: "color-image-picker-label", children: "Background Image" }),
    /* @__PURE__ */ jsx(
      Display,
      {
        "aria-labelledby": "color-image-picker-label",
        onClick: (e) => {
          handleClick();
        },
        color: "#" + displayColor,
        image: "url(/drive_pictures/" + displayImage + ")",
        children: /* @__PURE__ */ jsxs(Menu, { visible: menuOpen, children: [
          /* @__PURE__ */ jsx(ColorSection, { children: colorArray }),
          /* @__PURE__ */ jsx(ImageSection, { children: imageArray })
        ] })
      }
    )
  ] });
}
const InputWrapper = styled.div`
  margin: 10px 5px 0 5px;
  display: ${(props) => props.flex ? "flex" : "block"};
  align-items: ${(props) => props.flex && "center"};
`;
const CheckboxLabelText = styled.span`
  font-size: 15px;
  line-height: 1.1;
`;
const useSyncedTextfeildState = (syncCB, remoteValue = "") => {
  useToast();
  const [localValue, setLocalValue] = reactExports.useState(remoteValue);
  reactExports.useEffect(() => {
    setLocalValue(remoteValue);
  }, [remoteValue]);
  const sync = () => {
    let effectiveLabel = localValue;
    if (localValue === "") {
      effectiveLabel = remoteValue;
      if (remoteValue === "") {
        effectiveLabel = "Untitled Course";
      }
      setLocalValue(effectiveLabel);
    }
    if (remoteValue !== effectiveLabel) {
      syncCB(effectiveLabel);
    }
  };
  return [localValue, setLocalValue, sync];
};
function EditLabel({ courseId }) {
  const { modifyCourse, label: recoilLabel } = useCourse(courseId);
  const [localLabel, setLocalLabel, sync] = useSyncedTextfeildState(
    (newLabel) => {
      modifyCourse({ label: newLabel });
    },
    recoilLabel
  );
  return /* @__PURE__ */ jsx(
    Textfield,
    {
      label: "Label",
      vertical: true,
      width: "menu",
      value: localLabel,
      onChange: (e) => setLocalLabel(e.target.value),
      onKeyDown: (e) => {
        if (e.keyCode === 13)
          sync();
      },
      onBlur: sync
    }
  );
}
function EditImageAndColor({ courseId }) {
  const { modifyCourse, color, image } = useCourse(courseId);
  return /* @__PURE__ */ jsx(
    ColorImagePicker,
    {
      initialImage: image,
      initialColor: color,
      imageCallback: (newImage) => {
        modifyCourse({ image: newImage, color: "none" });
      },
      colorCallback: (newColor) => {
        modifyCourse({ color: newColor, image: "none" });
      }
    }
  );
}
const UserWithOptionsContainer = styled.div`
  display: grid;
  grid:
    "first last email button" 1fr
    "role empId . button" 1fr
    / 1fr 1fr 1fr 0.5fr;
  gap: 4px;
  max-width: 850px;
`;
const ButtonFlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  grid-area: button;
`;
function AddUserWithOptions({ courseId }) {
  const { defaultRoleId, addUser } = useCourse(courseId);
  const roles = Recoil_index_20(courseRolesByCourseId(courseId));
  const defaultData = {
    roleId: defaultRoleId,
    firstName: "",
    lastName: "",
    externalId: "",
    section: ""
  };
  const [userData, setUserData] = reactExports.useState(defaultData);
  const [emailInput, setEmailInput] = reactExports.useState("");
  const [isEmailValid, setIsEmailValid] = reactExports.useState(false);
  const validateEmail = useValidateEmail();
  reactExports.useLayoutEffect(() => {
    setIsEmailValid(validateEmail(emailInput));
  }, [emailInput, validateEmail]);
  const handleEmailChange = async () => {
    if (isEmailValid) {
      addUser(emailInput, userData, () => {
        setEmailInput("");
        setUserData(defaultData);
      });
    }
  };
  return /* @__PURE__ */ jsxs(UserWithOptionsContainer, { children: [
    /* @__PURE__ */ jsx(
      Textfield,
      {
        label: "First",
        dataTest: "First",
        width: "250px",
        value: userData.firstName,
        onChange: (e) => {
          setUserData((prev) => ({ ...prev, firstName: e.target.value }));
        },
        vertical: true
      }
    ),
    /* @__PURE__ */ jsx(
      Textfield,
      {
        label: "Last",
        dataTest: "Last",
        width: "250px",
        value: userData.lastName,
        onChange: (e) => {
          setUserData((prev) => ({ ...prev, lastName: e.target.value }));
        },
        vertical: true
      }
    ),
    /* @__PURE__ */ jsx(ButtonFlexContainer, { children: /* @__PURE__ */ jsx(
      Button,
      {
        width: "50px",
        value: "Add User",
        "data-test": "Add User",
        onClick: handleEmailChange,
        disabled: !isEmailValid,
        vertical: true
      }
    ) }),
    /* @__PURE__ */ jsx(
      Textfield,
      {
        label: "Email",
        dataTest: "Email",
        width: "250px",
        value: emailInput,
        onChange: (e) => {
          setEmailInput(e.target.value);
        },
        onKeyDown: (e) => {
          if (e.code === "Enter")
            handleEmailChange();
        },
        vertical: true,
        alert: emailInput !== "" && !isEmailValid
      }
    ),
    /* @__PURE__ */ jsx(
      Textfield,
      {
        label: "Section",
        dataTest: "Section",
        width: "250px",
        value: userData.section,
        onChange: (e) => {
          setUserData((prev) => ({ ...prev, section: e.target.value }));
        },
        vertical: true
      }
    ),
    /* @__PURE__ */ jsx(
      Textfield,
      {
        label: "External Id",
        dataTest: "External Id",
        width: "250px",
        value: userData.externalId,
        onChange: (e) => {
          setUserData((prev) => ({ ...prev, externalId: e.target.value }));
        },
        vertical: true
      }
    ),
    /* @__PURE__ */ jsx(
      DropdownMenu,
      {
        label: "Role",
        dataTest: "role",
        width: "190px",
        items: (
          //TODO reduce to hide roles as needed
          (roles == null ? void 0 : roles.map(({ roleLabel, roleId }) => [roleId, roleLabel])) ?? []
        ),
        onChange: ({ value: selectedRoleId }) => {
          setUserData((prev) => ({ ...prev, roleId: selectedRoleId }));
        },
        valueIndex: roles.findIndex(({ roleId }) => roleId == (userData == null ? void 0 : userData.roleId)) + 1,
        vertical: true,
        disabled: false
      }
    )
  ] });
}
function ManageUsers({ courseId, editable = false }) {
  var _a, _b;
  useToast();
  const { modifyUserRole } = useCourse(courseId);
  const courseUsersRecoil = Recoil_index_20(peopleByCourseId(courseId));
  const courseRolesRecoil = Recoil_index_20(courseRolesByCourseId(courseId));
  const [selectedUserData, setSelectedUserData] = reactExports.useState(null);
  const [selectedUserPermissions, setSelectedUserPermissions] = reactExports.useState(null);
  const handleRoleChange = async () => {
    modifyUserRole(
      selectedUserData == null ? void 0 : selectedUserData.email,
      selectedUserPermissions == null ? void 0 : selectedUserPermissions.roleId,
      () => {
        setSelectedUserData((prev) => ({
          ...prev,
          roleId: selectedUserPermissions.roleId,
          roleLabel: selectedUserPermissions.roleLabel,
          permissions: selectedUserPermissions
        }));
      },
      (err) => {
        setSelectedUserPermissions(selectedUserData.permissions);
      }
    );
  };
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      RelatedItems,
      {
        width: "menu",
        label: "Select User",
        options: (courseUsersRecoil == null ? void 0 : courseUsersRecoil.map((user, idx) => /* @__PURE__ */ jsxs("option", { value: idx, children: [
          user.screenName,
          " (",
          user.email,
          ")"
        ] }, user.email))) ?? [],
        onChange: ({ target: { value: idx } }) => {
          let user = courseUsersRecoil[idx];
          let permissions = (courseRolesRecoil == null ? void 0 : courseRolesRecoil.find(({ roleId }) => roleId === user.roleId)) ?? {};
          setSelectedUserData({ ...user, permissions });
          setSelectedUserPermissions(permissions);
        },
        vertical: true
      }
    ),
    /* @__PURE__ */ jsx(
      RoleDropdown,
      {
        label: "Assigned Role",
        title: "",
        onChange: ({ value: selectedRoleId }) => {
          setSelectedUserPermissions(
            (courseRolesRecoil == null ? void 0 : courseRolesRecoil.find(
              ({ roleId }) => roleId === selectedRoleId
            )) ?? null
          );
        },
        valueRoleId: selectedUserPermissions == null ? void 0 : selectedUserPermissions.roleId,
        disabled: ((_a = selectedUserData == null ? void 0 : selectedUserData.permissions) == null ? void 0 : _a.isOwner) === "1" || !editable,
        vertical: true
      }
    ),
    editable && /* @__PURE__ */ jsx(
      Button,
      {
        width: "menu",
        value: "Assign Role",
        onClick: handleRoleChange,
        disabled: ((_b = selectedUserData == null ? void 0 : selectedUserData.permissions) == null ? void 0 : _b.isOwner) === "1"
      }
    )
  ] });
}
function RolePermissionCheckbox({
  courseId,
  roleId,
  permissionKey,
  onClick,
  invert = false,
  parentPermissionKey = ""
}) {
  const {
    [permissionKey]: recoilValue,
    [parentPermissionKey]: overrideRecoilValue,
    isOwner
  } = Recoil_index_21(
    courseRolePermissionsByCourseIdRoleId({ courseId, roleId })
  ).getValue();
  const [localValue, setLocalValue] = reactExports.useState("0");
  reactExports.useEffect(() => {
    setLocalValue(
      isOwner === "1" && !invert || overrideRecoilValue === "1" || recoilValue === "1" ? "1" : "0"
    );
  }, [isOwner, overrideRecoilValue, recoilValue, invert]);
  return /* @__PURE__ */ jsxs(InputWrapper, { flex: true, children: [
    /* @__PURE__ */ jsx(
      CheckboxButton,
      {
        style: { marginRight: "5px" },
        checked: localValue === "1",
        onClick: (e) => {
          onClick({
            value: localValue,
            set: setLocalValue,
            event: e,
            permissionKey
          });
        },
        disabled: overrideRecoilValue === "1" || isOwner === "1"
      }
    ),
    /* @__PURE__ */ jsx(CheckboxLabelText, { children: permissionKey })
  ] });
}
function MangeRoles({ courseId }) {
  const addToast = useToast();
  const { modifyRolePermissions } = useCourse(courseId);
  const courseRolesRecoil = Recoil_index_20(courseRolesByCourseId(courseId));
  const [selectedRoleId, setSelectedRoleId] = reactExports.useState(
    courseRolesRecoil[0].roleId
  );
  const [selectedRolePermissions, setSelectedRolePermissions] = reactExports.useState(
    courseRolesRecoil[0]
  );
  reactExports.useEffect(() => {
    const permissions = courseRolesRecoil == null ? void 0 : courseRolesRecoil.find(
      ({ roleId }) => roleId === selectedRoleId
    );
    if (permissions) {
      setSelectedRolePermissions(permissions);
    } else {
      setSelectedRoleId(courseRolesRecoil[0].roleId);
    }
  }, [courseRolesRecoil, selectedRoleId]);
  const [permissionEdits, setPermissionEdits] = reactExports.useState({});
  const [edited, setEdited] = reactExports.useState(false);
  const handleSave = () => {
    modifyRolePermissions(
      selectedRolePermissions.roleId,
      permissionEdits,
      () => {
        setEdited(false);
        setPermissonEdits({});
      },
      (error) => {
        setSelectedRolePermissons(selectedRolePermissons);
      }
    );
  };
  const handleDelete = () => {
    modifyRolePermissions(
      selectedRolePermissions.roleId,
      { isDeleted: "1" },
      () => {
        setEdited(false);
        setPermissionEdits({});
      },
      (error) => {
        setSelectedRolePermissions(selectedRolePermissions);
        addToast(error, toastType.ERROR);
      }
    );
  };
  const handleCheckboxClick = ({ value, set, permissionKey }) => {
    let newValue = "0";
    if (value === "0") {
      newValue = "1";
    }
    setPermissionEdits((prev) => ({ ...prev, [permissionKey]: newValue }));
    set(newValue);
    if (!edited) {
      setEdited(true);
    }
  };
  return /* @__PURE__ */ jsxs(reactExports.Suspense, { fallback: /* @__PURE__ */ jsx("div", { children: "Loading roles..." }), children: [
    /* @__PURE__ */ jsx(
      RoleDropdown,
      {
        label: "Role",
        onChange: ({ value: selectedRoleId2 }) => {
          setSelectedRoleId(selectedRoleId2);
        },
        valueRoleId: selectedRoleId,
        maxMenuHeight: "200px",
        vertical: true
      }
    ),
    /* @__PURE__ */ jsx(
      Textfield,
      {
        label: "Label",
        width: "menu",
        value: (permissionEdits == null ? void 0 : permissionEdits.roleLabel) ?? selectedRolePermissions.roleLabel,
        vertical: true,
        onChange: (e) => {
          setPermissionEdits((prev) => ({
            ...prev,
            roleLabel: e.target.value
          }));
          if (!edited) {
            setEdited(true);
          }
        },
        disabled: selectedRolePermissions.isOwner === "1"
      }
    ),
    /* @__PURE__ */ jsx(
      RolePermissionCheckbox,
      {
        courseId,
        roleId: selectedRolePermissions.roleId,
        onClick: handleCheckboxClick,
        permissionKey: "isIncludedInGradebook",
        invert: true
      }
    ),
    /* @__PURE__ */ jsx(
      RolePermissionCheckbox,
      {
        courseId,
        roleId: selectedRolePermissions.roleId,
        onClick: handleCheckboxClick,
        permissionKey: "canViewContentSource",
        parentPermissionKey: "canEditContent"
      }
    ),
    /* @__PURE__ */ jsx(
      RolePermissionCheckbox,
      {
        courseId,
        roleId: selectedRolePermissions.roleId,
        onClick: handleCheckboxClick,
        permissionKey: "canViewUnassignedContent",
        parentPermissionKey: "canEditContent"
      }
    ),
    /* @__PURE__ */ jsx(
      RolePermissionCheckbox,
      {
        courseId,
        roleId: selectedRolePermissions.roleId,
        onClick: handleCheckboxClick,
        permissionKey: "canEditContent"
      }
    ),
    /* @__PURE__ */ jsx(
      RolePermissionCheckbox,
      {
        courseId,
        roleId: selectedRolePermissions.roleId,
        onClick: handleCheckboxClick,
        permissionKey: "canPublishContent"
      }
    ),
    /* @__PURE__ */ jsx(
      RolePermissionCheckbox,
      {
        courseId,
        roleId: selectedRolePermissions.roleId,
        onClick: handleCheckboxClick,
        permissionKey: "canProctor"
      }
    ),
    /* @__PURE__ */ jsx(
      RolePermissionCheckbox,
      {
        courseId,
        roleId: selectedRolePermissions.roleId,
        onClick: handleCheckboxClick,
        permissionKey: "canViewAndModifyGrades"
      }
    ),
    /* @__PURE__ */ jsx(
      RolePermissionCheckbox,
      {
        courseId,
        roleId: selectedRolePermissions.roleId,
        onClick: handleCheckboxClick,
        permissionKey: "canViewActivitySettings",
        parentPermissionKey: "canModifyActivitySettings"
      }
    ),
    /* @__PURE__ */ jsx(
      RolePermissionCheckbox,
      {
        courseId,
        roleId: selectedRolePermissions.roleId,
        onClick: handleCheckboxClick,
        permissionKey: "canModifyActivitySettings"
      }
    ),
    /* @__PURE__ */ jsx(
      RolePermissionCheckbox,
      {
        courseId,
        roleId: selectedRolePermissions.roleId,
        onClick: handleCheckboxClick,
        permissionKey: "canModifyCourseSettings"
      }
    ),
    /* @__PURE__ */ jsx(
      RolePermissionCheckbox,
      {
        courseId,
        roleId: selectedRolePermissions.roleId,
        onClick: handleCheckboxClick,
        permissionKey: "canViewCourse"
      }
    ),
    /* @__PURE__ */ jsx(
      DropdownMenu,
      {
        label: "Data Access Level",
        title: "",
        items: ["None", "Aggregated", "Anonymized", "Identified"].map(
          (value) => [value, value]
        ),
        onChange: ({ value: dataAccessPermission }) => {
          setPermissionEdits((prev) => ({ ...prev, dataAccessPermission }));
          if (!edited) {
            setEdited(true);
          }
        },
        valueIndex: ["None", "Aggregated", "Anonymized", "Identified"].findIndex(
          (value) => value === ((permissionEdits == null ? void 0 : permissionEdits.dataAccessPermission) ?? selectedRolePermissions.dataAccessPermission)
        ) + 1,
        vertical: true,
        disabled: selectedRolePermissions.isOwner === "1",
        width: "menu"
      }
    ),
    /* @__PURE__ */ jsx(
      RolePermissionCheckbox,
      {
        courseId,
        roleId: selectedRolePermissions.roleId,
        onClick: handleCheckboxClick,
        permissionKey: "canViewUsers",
        parentPermissionKey: "canManageUsers"
      }
    ),
    /* @__PURE__ */ jsx(
      RolePermissionCheckbox,
      {
        courseId,
        roleId: selectedRolePermissions.roleId,
        onClick: handleCheckboxClick,
        permissionKey: "canManageUsers",
        parentPermissionKey: "isAdmin"
      }
    ),
    /* @__PURE__ */ jsx(
      RolePermissionCheckbox,
      {
        courseId,
        roleId: selectedRolePermissions.roleId,
        onClick: handleCheckboxClick,
        permissionKey: "isAdmin"
      }
    ),
    edited && /* @__PURE__ */ jsx(ButtonGroup, { vertical: true, children: /* @__PURE__ */ jsx(
      Button,
      {
        width: "menu",
        value: "Save Role",
        alert: true,
        onClick: handleSave,
        onKeyDown: (e) => {
          if (e.keyCode === 13) {
            handleSave();
          }
        }
      }
    ) }),
    /* @__PURE__ */ jsx("br", {}),
    /* @__PURE__ */ jsx(CollapseSection, { width: "menu", title: "Delete Role", collapsed: true, children: /* @__PURE__ */ jsx(
      Button,
      {
        width: "menu",
        value: "Delete",
        alert: true,
        onClick: handleDelete,
        onKeyDown: (e) => {
          if (e.keyCode === 13) {
            handleDelete();
          }
        }
      }
    ) })
  ] });
}
function AddRole({ courseId }) {
  useToast();
  const roles = Recoil_index_20(courseRolesByCourseId(courseId));
  const { modifyRolePermissions } = useCourse(courseId);
  const handleSave = () => {
    modifyRolePermissions("", { roleLabel: `Role ${roles.length}` }, () => {
    });
  };
  return /* @__PURE__ */ jsx(
    Button,
    {
      width: "menu",
      value: "Create New Role",
      onClick: handleSave,
      onKeyDown: (e) => {
        if (e.keyCode === 13) {
          handleSave();
        }
      }
    }
  );
}
function DeleteCourse({ courseId }) {
  useToast();
  const { deleteCourse, label } = useCourse(courseId);
  const setCourseCardsSelection = Recoil_index_24(drivecardSelectedNodesAtom);
  const handelDelete = () => {
    deleteCourse(() => {
      setCourseCardsSelection([]);
    });
  };
  return /* @__PURE__ */ jsx(ButtonGroup, { vertical: true, children: /* @__PURE__ */ jsx(
    Button,
    {
      width: "menu",
      value: "Delete Course",
      alert: true,
      onClick: handelDelete,
      onKeyDown: (e) => {
        if (e.keyCode === 13) {
          handelDelete();
        }
      }
    }
  ) });
}
function DuplicateCourse({ courseId }) {
  useToast();
  const { duplicateCourse, label } = useCourse(courseId);
  const [showForm, setShowForm] = reactExports.useState(false);
  const [sourceDate, setSourceDate] = reactExports.useState("");
  const [newDate, setNewDate] = reactExports.useState("");
  const [newCourseLabel, setNewCourseLabel] = reactExports.useState("");
  let submitEnabled = false;
  let dateDifference = 0;
  if (newCourseLabel != "" && newDate != "" && sourceDate != "") {
    submitEnabled = true;
    let source = new Date(sourceDate);
    let newD = new Date(newDate);
    let timediff = newD.getTime() - source.getTime();
    dateDifference = timediff / (1e3 * 3600 * 24);
  }
  const handleDuplication = ({ dateDifference: dateDifference2, newLabel }) => {
    duplicateCourse({ dateDifference: dateDifference2, newLabel }, () => {
      console.log("Duplication Success callback");
      setShowForm(false);
    });
  };
  if (showForm) {
    return /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx("h2", { children: "Duplicate Course" }),
      /* @__PURE__ */ jsx("p", { children: "* - Required" }),
      /* @__PURE__ */ jsx(
        Textfield,
        {
          dataTest: "New Course Label Textfield",
          vertical: true,
          width: "menu",
          label: "New Course's Label *",
          onChange: (e) => {
            setNewCourseLabel(e.target.value);
          }
        }
      ),
      /* @__PURE__ */ jsx("p", { children: "Start Dates are used to adjust the new course's activity dates." }),
      /* @__PURE__ */ jsx(
        DateTime,
        {
          dataTest: "Duplication Start Date",
          offset: "-10px",
          width: "menu",
          timePicker: false,
          vertical: true,
          label: "Source Course's Start Date *",
          onChange: ({ valid, value }) => {
            if (valid) {
              let dateValue = DateToDateString(value._d);
              setSourceDate(dateValue);
            } else {
              setSourceDate("");
            }
          }
        }
      ),
      /* @__PURE__ */ jsx(
        DateTime,
        {
          dataTest: "Duplication End Date",
          offset: "-10px",
          width: "menu",
          timePicker: false,
          vertical: true,
          label: "New Course's End Date *",
          onChange: ({ valid, value }) => {
            if (valid) {
              let dateValue = DateToDateString(value._d);
              setNewDate(dateValue);
            } else {
              setNewDate("");
            }
          }
        }
      ),
      /* @__PURE__ */ jsx("br", {}),
      /* @__PURE__ */ jsx("br", {}),
      /* @__PURE__ */ jsxs(ButtonGroup, { children: [
        /* @__PURE__ */ jsx(
          Button,
          {
            alert: true,
            width: "100px",
            value: "Cancel",
            onClick: () => setShowForm(false),
            onKeyDown: (e) => {
              if (e.keyCode === 13) {
                setShowForm(false);
              }
            }
          }
        ),
        /* @__PURE__ */ jsx(
          Button,
          {
            dataTest: "Duplicate Action",
            width: "100px",
            value: "Duplicate",
            disabled: !submitEnabled,
            onClick: () => handleDuplication({ dateDifference, newLabel: newCourseLabel }),
            onKeyDown: (e) => {
              if (e.keyCode === 13) {
                handleDuplication({ dateDifference, newLabel: newCourseLabel });
              }
            }
          }
        )
      ] })
    ] });
  }
  return /* @__PURE__ */ jsx(ButtonGroup, { vertical: true, children: /* @__PURE__ */ jsx(
    Button,
    {
      dataTest: "Duplicate Course Button",
      width: "menu",
      value: "Duplicate Course",
      onClick: () => setShowForm(true),
      onKeyDown: (e) => {
        if (e.keyCode === 13) {
          setShowForm(true);
        }
      }
    }
  ) });
}
export {
  AddUserWithOptions as A,
  DeleteCourse as D,
  EditLabel as E,
  MangeRoles as M,
  AddRole as a,
  EditImageAndColor as b,
  DuplicateCourse as c,
  ManageUsers as d
};
