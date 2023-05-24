import { o as Recoil_index_24, p as pageToolViewAtom, r as reactExports, U as Recoil_index_21, V as profileAtom, k as checkIfUserClearedOut, j as jsx, b as jsxs, F as Fragment, B as Button } from "./PageViewer-d914b069.js";
const doenet = "";
function DoenetProfile(props) {
  var _a;
  const setPageToolView = Recoil_index_24(pageToolViewAtom);
  const [signedIn, setSignedIn] = reactExports.useState(null);
  let checkingCookie = reactExports.useRef(false);
  const profile = Recoil_index_21(profileAtom);
  if (profile.state === "loading") {
    return null;
  }
  if (profile.state === "hasError") {
    console.error(profile.contents);
    return null;
  }
  let email = (_a = profile == null ? void 0 : profile.contents) == null ? void 0 : _a.email;
  if (!checkingCookie.current) {
    checkingCookie.current = true;
    checkIfUserClearedOut().then(({ cookieRemoved }) => {
      setSignedIn(cookieRemoved);
    });
  }
  if (signedIn == null) {
    return null;
  }
  let messageJSX = null;
  if (signedIn) {
    messageJSX = /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx("h2", { children: "You are NOT signed in" }),
      /* @__PURE__ */ jsx(
        Button,
        {
          value: "Sign in",
          onClick: () => {
            setPageToolView({ page: "signout", tool: "", view: "" });
            window.location.href = "/signin";
          }
        }
      )
    ] });
  } else {
    messageJSX = /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx("h2", { children: "You are signed in" }),
      /* @__PURE__ */ jsxs("p", { children: [
        "Email: ",
        email
      ] }),
      /* @__PURE__ */ jsx(
        Button,
        {
          dataTest: "sign out button",
          value: "Sign out",
          onClick: () => {
            setPageToolView({ page: "signout", tool: "", view: "" });
          }
        }
      )
    ] });
  }
  return /* @__PURE__ */ jsx("div", { style: props.style, children: /* @__PURE__ */ jsx(
    "div",
    {
      style: {
        ...props.style,
        border: "1px solid var(--mainGray)",
        borderRadius: "20px",
        margin: "auto",
        marginTop: "10%",
        padding: "10px",
        width: "50%"
      },
      children: /* @__PURE__ */ jsx(
        "div",
        {
          style: {
            display: "flex",
            flexDirection: "column",
            textAlign: "center",
            alignItems: "center",
            marginBottom: "20px"
          },
          children: messageJSX
        }
      )
    }
  ) });
}
export {
  DoenetProfile as default
};
