import { r as reactExports, i as useNavigate, a6 as clearUsersInformationFromTheBrowser, j as jsx, b as jsxs, B as Button, k as checkIfUserClearedOut } from "./PageViewer-d914b069.js";
function SignOut() {
  const [isSignedOut, setIsSignedOut] = reactExports.useState(false);
  const [errorMessage, setErrorMessage] = reactExports.useState("");
  const navigate = useNavigate();
  reactExports.useEffect(() => {
    async function checkSignout() {
      let { userInformationIsCompletelyRemoved, messageArray } = await checkIfUserClearedOut();
      setIsSignedOut(userInformationIsCompletelyRemoved);
      setErrorMessage(
        messageArray.map((text, i) => /* @__PURE__ */ jsx("p", { children: text }, `error ${i}`))
      );
    }
    clearUsersInformationFromTheBrowser().then(() => {
      checkSignout();
    }).catch((error) => {
      checkSignout();
    });
  }, []);
  if (isSignedOut) {
    return /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs(
      "div",
      {
        style: {
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: "20"
        },
        children: [
          /* @__PURE__ */ jsx(
            "img",
            {
              style: { width: "250px", height: "250px" },
              src: "/Doenet_Logo_Frontpage.png",
              alt: "Chocolate glazed donut on a white cartoon cloud, sitting on a sky blue circle background"
            }
          ),
          /* @__PURE__ */ jsxs(
            "div",
            {
              style: {
                display: "flex",
                flexDirection: "column",
                alignItems: "center"
              },
              children: [
                /* @__PURE__ */ jsx("h2", { children: "You are Signed Out!" }),
                /* @__PURE__ */ jsx(
                  Button,
                  {
                    dataTest: "homepage button",
                    value: "Homepage",
                    onClick: () => navigate("/")
                  }
                )
              ]
            }
          )
        ]
      }
    ) });
  }
  if (errorMessage != "") {
    return /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs(
      "div",
      {
        style: {
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: "20"
        },
        children: [
          /* @__PURE__ */ jsx(
            "img",
            {
              style: { width: "250px", height: "250px" },
              src: "/Doenet_Logo_Frontpage.png",
              alt: "Chocolate glazed donut on a white cartoon cloud, sitting on a sky blue circle background"
            }
          ),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("h2", { children: "FAILED SIGN OUT" }),
            /* @__PURE__ */ jsx("p", { children: errorMessage }),
            /* @__PURE__ */ jsx("p", { children: "Please manually remove your cookies." })
          ] })
        ]
      }
    ) });
  }
  return /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs(
    "div",
    {
      style: {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: "20"
      },
      children: [
        /* @__PURE__ */ jsx(
          "img",
          {
            style: { width: "250px", height: "250px" },
            src: "/Doenet_Logo_Frontpage.png",
            alt: "Chocolate glazed donut on a white cartoon cloud, sitting on a sky blue circle background"
          }
        ),
        /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("h2", { children: "Signing you out..." }) })
      ]
    }
  ) });
}
export {
  SignOut as default
};
