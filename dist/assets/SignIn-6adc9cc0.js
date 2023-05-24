import { r as reactExports, a3 as useToast, h as axios, a4 as toastType, j as jsx, b as jsxs, B as Button, a5 as CheckboxButton } from "./PageViewer-d914b069.js";
import { T as Textfield } from "./Textfield-0be9f722.js";
var js_cookieExports = {};
var js_cookie = {
  get exports() {
    return js_cookieExports;
  },
  set exports(v) {
    js_cookieExports = v;
  }
};
/*!
 * JavaScript Cookie v2.2.1
 * https://github.com/js-cookie/js-cookie
 *
 * Copyright 2006, 2015 Klaus Hartl & Fagner Brack
 * Released under the MIT license
 */
(function(module, exports) {
  (function(factory) {
    var registeredInModuleLoader;
    {
      module.exports = factory();
      registeredInModuleLoader = true;
    }
    if (!registeredInModuleLoader) {
      var OldCookies = window.Cookies;
      var api = window.Cookies = factory();
      api.noConflict = function() {
        window.Cookies = OldCookies;
        return api;
      };
    }
  })(function() {
    function extend() {
      var i = 0;
      var result = {};
      for (; i < arguments.length; i++) {
        var attributes = arguments[i];
        for (var key in attributes) {
          result[key] = attributes[key];
        }
      }
      return result;
    }
    function decode(s) {
      return s.replace(/(%[0-9A-Z]{2})+/g, decodeURIComponent);
    }
    function init(converter) {
      function api() {
      }
      function set(key, value, attributes) {
        if (typeof document === "undefined") {
          return;
        }
        attributes = extend({
          path: "/"
        }, api.defaults, attributes);
        if (typeof attributes.expires === "number") {
          attributes.expires = new Date(/* @__PURE__ */ new Date() * 1 + attributes.expires * 864e5);
        }
        attributes.expires = attributes.expires ? attributes.expires.toUTCString() : "";
        try {
          var result = JSON.stringify(value);
          if (/^[\{\[]/.test(result)) {
            value = result;
          }
        } catch (e) {
        }
        value = converter.write ? converter.write(value, key) : encodeURIComponent(String(value)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent);
        key = encodeURIComponent(String(key)).replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent).replace(/[\(\)]/g, escape);
        var stringifiedAttributes = "";
        for (var attributeName in attributes) {
          if (!attributes[attributeName]) {
            continue;
          }
          stringifiedAttributes += "; " + attributeName;
          if (attributes[attributeName] === true) {
            continue;
          }
          stringifiedAttributes += "=" + attributes[attributeName].split(";")[0];
        }
        return document.cookie = key + "=" + value + stringifiedAttributes;
      }
      function get(key, json) {
        if (typeof document === "undefined") {
          return;
        }
        var jar = {};
        var cookies = document.cookie ? document.cookie.split("; ") : [];
        var i = 0;
        for (; i < cookies.length; i++) {
          var parts = cookies[i].split("=");
          var cookie = parts.slice(1).join("=");
          if (!json && cookie.charAt(0) === '"') {
            cookie = cookie.slice(1, -1);
          }
          try {
            var name = decode(parts[0]);
            cookie = (converter.read || converter)(cookie, name) || decode(cookie);
            if (json) {
              try {
                cookie = JSON.parse(cookie);
              } catch (e) {
              }
            }
            jar[name] = cookie;
            if (key === name) {
              break;
            }
          } catch (e) {
          }
        }
        return key ? jar[key] : jar;
      }
      api.set = set;
      api.get = function(key) {
        return get(
          key,
          false
          /* read as raw */
        );
      };
      api.getJSON = function(key) {
        return get(
          key,
          true
          /* read as json */
        );
      };
      api.remove = function(key, attributes) {
        set(key, "", extend(attributes, {
          expires: -1
        }));
      };
      api.defaults = {};
      api.withConverter = init;
      return api;
    }
    return init(function() {
    });
  });
})(js_cookie);
const Cookies = js_cookieExports;
function SignIn(props) {
  let [email, setEmail] = reactExports.useState("");
  let [nineCode, setNineCode] = reactExports.useState("");
  let [maxAge, setMaxAge] = reactExports.useState(0);
  let [signInStage, setSignInStage] = reactExports.useState("init");
  let [isSentEmail, setIsSentEmail] = reactExports.useState(false);
  let [deviceName, setDeviceName] = reactExports.useState("");
  let [sendEmailAlert, setSendEmailAlert] = reactExports.useState(false);
  let [signInAlert, setSignInAlert] = reactExports.useState(false);
  let [validEmail, setValidEmail] = reactExports.useState(false);
  let [validCode, setValidCode] = reactExports.useState(false);
  let [sendEmailDisabled, setSendEmailDisabled] = reactExports.useState(true);
  let [signInDisabled, setSignInDisabled] = reactExports.useState(true);
  let [firstName, setFirstName] = reactExports.useState("");
  let [lastName, setLastName] = reactExports.useState("");
  let [jwtLink, setJwtLink] = reactExports.useState("");
  const jwt = Cookies.get();
  const emailRef = reactExports.useRef(null);
  const codeRef = reactExports.useRef(null);
  const toast = useToast();
  function validateEmail(inputEmail) {
    if (/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(inputEmail)) {
      setSendEmailDisabled(false);
      setValidEmail(true);
      setSendEmailAlert(false);
    } else {
      setSendEmailDisabled(true);
      setValidEmail(false);
      setSendEmailAlert(true);
    }
  }
  reactExports.useEffect(() => {
    if (/\d{9}/.test(nineCode)) {
      setSignInDisabled(false);
      setValidCode(true);
      setSignInAlert(false);
    } else if (nineCode === "") {
      setSignInDisabled(true);
      setValidCode(false);
      setSignInAlert(false);
    } else {
      setSignInDisabled(true);
      setValidCode(false);
      setSignInAlert(true);
    }
    if (codeRef.current !== null && !validCode) {
      codeRef.current.focus();
    } else if (emailRef.current !== null && !validEmail) {
      emailRef.current.focus();
    }
  });
  if (Object.keys(jwt).includes("JWT_JS")) {
    axios.get("/api/loadProfile.php", { params: {} }).then((resp) => {
      localStorage.setItem("Profile", JSON.stringify(resp.data.profile));
      location.href = "/";
    }).catch((error) => {
      console.log(error);
    });
    return null;
  }
  if (signInStage === "check code") {
    const data = {
      emailaddress: email,
      nineCode,
      deviceName
    };
    const payload = {
      params: data
    };
    axios.get("/api/checkCredentials.php", payload).then((resp) => {
      if (resp.data.success) {
        let newAccount = "1";
        if (resp.data.existed) {
          newAccount = "0";
        }
        let stay = "0";
        if (maxAge > 0) {
          stay = "1";
        }
        if (resp.data.hasFullName == 0) {
          setSignInStage("Need Name Entered");
          setJwtLink(
            `/api/jwt.php?emailaddress=${encodeURIComponent(
              email
            )}&nineCode=${encodeURIComponent(
              nineCode
            )}&deviceName=${deviceName}&newAccount=${newAccount}&stay=${stay}`
          );
        } else {
          location.href = `/api/jwt.php?emailaddress=${encodeURIComponent(
            email
          )}&nineCode=${encodeURIComponent(
            nineCode
          )}&deviceName=${deviceName}&newAccount=${newAccount}&stay=${stay}`;
        }
      } else {
        if (resp.data.reason === "Code expired") {
          setSignInStage("Code expired");
        } else if (resp.data.reason === "Invalid Code") {
          setSignInStage("enter code");
          toast("Invalid code. Please try again.", toastType.ERROR);
        }
      }
    }).catch((error) => {
      console.error(error);
    });
    setSignInStage("Loading");
    return null;
  }
  if (signInStage === "Need Name Entered") {
    return /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs(
      "div",
      {
        style: {
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          margin: "20"
        },
        children: [
          /* @__PURE__ */ jsx("h2", { style: { textAlign: "center" }, children: "Please enter your first and last name." }),
          /* @__PURE__ */ jsxs(
            "div",
            {
              style: { display: "flex", flexDirection: "column", rowGap: "10px" },
              children: [
                /* @__PURE__ */ jsxs("div", { children: [
                  "First Name:",
                  " ",
                  /* @__PURE__ */ jsx(
                    "input",
                    {
                      type: "text",
                      value: firstName,
                      onChange: (e) => {
                        setFirstName(e.target.value);
                      }
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxs("div", { children: [
                  "Last Name:",
                  " ",
                  /* @__PURE__ */ jsx(
                    "input",
                    {
                      type: "text",
                      value: lastName,
                      onChange: (e) => {
                        setLastName(e.target.value);
                      }
                    }
                  )
                ] }),
                /* @__PURE__ */ jsx(
                  Button,
                  {
                    disabled: firstName == "" || lastName == "",
                    value: "Submit",
                    onClick: () => {
                      axios.get("/api/saveUsersName.php", {
                        params: { firstName, lastName, email }
                      }).then((resp) => {
                        location.href = jwtLink;
                      });
                    }
                  }
                )
              ]
            }
          )
        ]
      }
    ) });
  }
  if (signInStage === "Loading") {
    return /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(
      "div",
      {
        style: {
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          margin: "20"
        },
        children: /* @__PURE__ */ jsx("h2", { style: { textAlign: "center" }, children: "Signing in..." })
      }
    ) });
  }
  if (signInStage === "Code expired") {
    return /* @__PURE__ */ jsxs(
      "div",
      {
        style: {
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          margin: "20"
        },
        children: [
          /* @__PURE__ */ jsx("h2", { style: { textAlign: "center" }, children: "Code Expired" }),
          /* @__PURE__ */ jsx(
            Button,
            {
              onClick: () => {
                location.href = "/signin";
              },
              value: "Restart Signin"
            }
          )
        ]
      }
    );
  }
  if (signInStage === "enter code" || signInStage === "Invalid Code") {
    if (!isSentEmail) {
      const phpUrl = "/api/sendSignInEmail.php";
      const data = {
        emailaddress: email
      };
      const payload = {
        params: data
      };
      axios.get(phpUrl, payload).then((resp) => {
        setDeviceName(resp.data.deviceName);
      }).catch((error) => {
        this.setState({ error });
      });
      setIsSentEmail(true);
    }
    let heading = /* @__PURE__ */ jsx("h2", { style: { textAlign: "center" }, children: "Email Sent!" });
    if (signInStage === "Invalid Code") {
      heading = /* @__PURE__ */ jsx("h2", { style: { textAlign: "center" }, children: "Invalid Code. Try again." });
    }
    return /* @__PURE__ */ jsx("div", { style: props.style, children: /* @__PURE__ */ jsxs(
      "div",
      {
        style: {
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          margin: "20"
        },
        children: [
          heading,
          /* @__PURE__ */ jsxs("div", { style: { weight: "bold", fontSize: "14px" }, children: [
            "Device Name: ",
            deviceName
          ] }),
          /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("p", { style: { fontSize: "14px" }, children: "Check your email for a code to complete sign in." }) }),
          /* @__PURE__ */ jsx("p", { children: /* @__PURE__ */ jsx(
            Textfield,
            {
              label: "Code (9 digit code):",
              ref: codeRef,
              value: nineCode,
              dataTest: "signinCodeInput",
              alert: signInAlert,
              onKeyDown: (e) => {
                if (e.key === "Enter" && validCode) {
                  setSignInStage("check code");
                } else if (e.key === "Enter" && !validCode) {
                  toast(
                    "Invalid code format. Please enter 9 digits.",
                    toastType.ERROR
                  );
                }
              },
              onBlur: () => {
                if (!validCode && !signInAlert) {
                  toast(
                    "Invalid code format. Please enter 9 digits.",
                    toastType.ERROR
                  );
                }
              },
              onChange: (e) => {
                setNineCode(e.target.value);
              }
            }
          ) }),
          /* @__PURE__ */ jsx(
            Button,
            {
              disabled: signInDisabled,
              onClick: () => {
                if (validCode) {
                  setSignInStage("check code");
                }
              },
              dataTest: "signInButton",
              value: "Sign In"
            }
          )
        ]
      }
    ) });
  }
  if (signInStage === "init") {
    let stay = 0;
    if (maxAge > 0) {
      stay = 1;
    }
    return /* @__PURE__ */ jsx("div", { style: props.style, children: /* @__PURE__ */ jsxs(
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
              alt: "Doenet Logo",
              src: "/Doenet_Logo_Frontpage.png"
            }
          ),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("p", { style: { marginLeft: "2px" }, children: /* @__PURE__ */ jsx(
              Textfield,
              {
                dataTest: "email input",
                label: "Email Address:",
                ref: emailRef,
                value: email,
                alert: sendEmailAlert,
                onKeyDown: (e) => {
                  validateEmail(email);
                  if (e.key === "Enter" && validEmail) {
                    setSignInStage("enter code");
                  } else if (e.key === "Enter" && !validEmail) {
                    toast("Invalid email. Please try again.", toastType.ERROR);
                  }
                },
                onBlur: () => {
                  validateEmail(email);
                  if (!validEmail && !sendEmailAlert) {
                    toast("Invalid email. Please try again.", toastType.ERROR);
                  }
                },
                onChange: (e) => {
                  setEmail(e.target.value);
                }
              }
            ) }),
            /* @__PURE__ */ jsxs("p", { style: { fontSize: "14px" }, children: [
              /* @__PURE__ */ jsx(
                CheckboxButton,
                {
                  checked: stay,
                  onClick: (e) => {
                    if (!stay) {
                      setMaxAge(24e4);
                    } else {
                      setMaxAge(0);
                    }
                  }
                }
              ),
              " ",
              "Stay Logged In"
            ] }),
            /* @__PURE__ */ jsx(
              Button,
              {
                disabled: sendEmailDisabled,
                onClick: () => {
                  if (validEmail) {
                    setSignInStage("enter code");
                  }
                },
                dataTest: "sendEmailButton",
                value: "Send Email"
              }
            )
          ] })
        ]
      }
    ) });
  }
  return /* @__PURE__ */ jsx("div", { style: props.style, children: /* @__PURE__ */ jsx(
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
      children: /* @__PURE__ */ jsx("h2", { style: { textAlign: "center" }, children: "Loading..." })
    }
  ) });
}
export {
  SignIn as default
};
