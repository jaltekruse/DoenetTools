import { a3 as useToast, t as Recoil_index_20, W as searchParamAtomFamily, m as Recoil_index_22, r as reactExports, a0 as Recoil_index_31, h as axios, a4 as toastType, b as jsxs, F as Fragment, j as jsx, B as Button, b0 as Recoil_index_10, b1 as Recoil_index_11, c as FontAwesomeIcon } from "./PageViewer-d914b069.js";
import { u as useDropzone } from "./index-9598b80e.js";
import { A as ActionButtonGroup } from "./ActionButtonGroup-f7bafe40.js";
import { A as ActionButton } from "./ActionButton-1e9c5f7a.js";
import { B as ButtonGroup } from "./ButtonGroup-b585a5ef.js";
import { C as CollapseSection } from "./CollapseSection-5f783e94.js";
import { l as lib } from "./index-badc91d0.js";
import { f as faClipboard } from "./index-72e7d0b2.js";
import "./index-a634ad2f.js";
function bytesToSize(bytes) {
  var sizes = ["Bytes", "KB", "MB", "GB", "TB"];
  if (bytes == 0)
    return "0 Byte";
  var i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)));
  return Math.round(bytes / Math.pow(1024, i), 2) + " " + sizes[i];
}
const supportingFilesAndPermissionByDoenetIdAtom = Recoil_index_10({
  key: "supportingFilesAndPermissionByDoenetId",
  default: Recoil_index_11({
    key: "supportingFilesAndPermissionByDoenetId/Default",
    get: (doenetId) => async () => {
      let { data } = await axios.get("/api/loadSupportingFileInfo.php", {
        params: { doenetId }
      });
      return data;
    }
  })
});
const supportingFilesAndPermissionByDoenetIdSelector = Recoil_index_11({
  get: (doenetId) => ({ get }) => {
    return get(supportingFilesAndPermissionByDoenetIdAtom(doenetId));
  },
  set: (doenetId) => ({ set }, newValue) => {
    set(supportingFilesAndPermissionByDoenetIdAtom(doenetId), newValue);
  }
});
function EditableText({ text, submit }) {
  if (!submit) {
    submit = () => {
    };
  }
  let [editingMode, setEditingMode] = reactExports.useState(false);
  let [editText, setText] = reactExports.useState(text);
  let displayText = text;
  if (!editingMode) {
    displayText = editText;
  }
  let textSpanStyle = {
    width: "110px",
    display: "inline-block",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap"
  };
  if (displayText === "") {
    displayText = " *Required";
    textSpanStyle["border"] = "solid 2px var(--mainRed)";
  }
  if (!editingMode) {
    return /* @__PURE__ */ jsx("span", { style: textSpanStyle, onClick: () => setEditingMode(true), children: displayText });
  }
  return /* @__PURE__ */ jsx(
    "input",
    {
      autoFocus: true,
      type: "text",
      style: { width: "116px" },
      value: editText,
      onChange: (e) => setText(e.target.value),
      onBlur: (e) => {
        setEditingMode(false);
        submit(editText);
      },
      onKeyDown: (e) => {
        if (e.key === "Enter") {
          setEditingMode(false);
          submit(editText);
        }
      }
    }
  );
}
function SupportingFilesMenu(props) {
  const addToast = useToast();
  const doenetId = Recoil_index_20(searchParamAtomFamily("doenetId"));
  const [
    {
      canUpload,
      userQuotaBytesAvailable,
      supportingFiles,
      quotaBytes,
      canEditContent
    },
    setSupportFileInfo
  ] = Recoil_index_22(supportingFilesAndPermissionByDoenetIdSelector(doenetId));
  let typesAllowed = ["text/csv", "image/jpeg", "image/png"];
  let [uploadProgress, setUploadProgress] = reactExports.useState([]);
  let numberOfFilesUploading = reactExports.useRef(0);
  const updateDescription = Recoil_index_31(
    ({ set }) => async (description, cid) => {
      await axios.get("/api/updateFileDescription.php", {
        params: { doenetId, cid, description }
      });
      set(supportingFilesAndPermissionByDoenetIdSelector(doenetId), (was) => {
        let newObj = { ...was };
        let newSupportingFiles = [...was.supportingFiles];
        newSupportingFiles.map((file, index) => {
          if (file.cid === cid) {
            newSupportingFiles[index] = { ...newSupportingFiles[index] };
            newSupportingFiles[index].description = description;
          }
        });
        newObj.supportingFiles = newSupportingFiles;
        return newObj;
      });
    },
    [doenetId]
  );
  const updateAsFileName = Recoil_index_31(
    ({ set }) => async (asFileName, cid) => {
      await axios.get("/api/updateFileAsFileName.php", {
        params: { doenetId, cid, asFileName }
      });
      set(supportingFilesAndPermissionByDoenetIdSelector(doenetId), (was) => {
        let newObj = { ...was };
        let newSupportingFiles = [...was.supportingFiles];
        newSupportingFiles.map((file, index) => {
          if (file.cid === cid) {
            newSupportingFiles[index] = { ...newSupportingFiles[index] };
            newSupportingFiles[index].asFileName = asFileName;
          }
        });
        newObj.supportingFiles = newSupportingFiles;
        return newObj;
      });
    },
    [doenetId]
  );
  const deleteFile = Recoil_index_31(
    ({ set }) => async (cid) => {
      var _a, _b, _c;
      try {
        let resp = await axios.get("/api/deleteFile.php", {
          params: { doenetId, cid }
        });
        if (resp.status < 300 && ((_a = resp == null ? void 0 : resp.data) == null ? void 0 : _a.success)) {
          addToast("File deleted.");
          let { userQuotaBytesAvailable: userQuotaBytesAvailable2 } = resp.data;
          set(
            supportingFilesAndPermissionByDoenetIdSelector(doenetId),
            (was) => {
              let newObj = { ...was };
              newObj.supportingFiles = was.supportingFiles.filter(
                (file) => file.cid !== cid
              );
              newObj.userQuotaBytesAvailable = userQuotaBytesAvailable2;
              return newObj;
            }
          );
        } else {
          if (((_b = resp == null ? void 0 : resp.data) == null ? void 0 : _b.success) == false) {
            addToast((_c = resp == null ? void 0 : resp.data) == null ? void 0 : _c.message, toastType.ERROR);
          } else {
            throw new Error(`response code: ${resp.status}`);
          }
        }
      } catch (err) {
        throw new Error(`Error deleting file ${err}`);
      }
    },
    [doenetId]
  );
  const onDrop = reactExports.useCallback((files) => {
    let success = true;
    let sizeOfUpload = 0;
    files.map((file) => {
      if (!typesAllowed.includes(file.type)) {
        addToast(
          `File '${file.name}' of type '${file.type}' is not allowed. No files uploaded.`,
          toastType.ERROR
        );
        success = false;
      }
      sizeOfUpload += file.size;
    });
    let uploadText = bytesToSize(sizeOfUpload);
    let overage = bytesToSize(sizeOfUpload - userQuotaBytesAvailable);
    if (sizeOfUpload > userQuotaBytesAvailable) {
      addToast(
        `Upload size ${uploadText} exceeds quota by ${overage}. No files uploaded.`,
        toastType.ERROR
      );
      success = false;
    }
    if (numberOfFilesUploading.current > 0) {
      addToast(
        `Already uploading files.  Please wait before sending more.`,
        toastType.ERROR
      );
      success = false;
    }
    files.map((file) => {
      if (file.size >= 1e6) {
        addToast(
          `File '${file.name}' is larger than 1MB. No files uploaded.`,
          toastType.ERROR
        );
        success = false;
      }
    });
    if (!success) {
      return;
    }
    numberOfFilesUploading.current = files.length;
    files.map((file) => {
      let initialFileInfo = {
        fileName: file.name,
        size: file.size,
        progressPercent: 0
      };
      setUploadProgress((was) => [...was, initialFileInfo]);
    });
    files.map((file, fileIndex) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onabort = () => {
      };
      reader.onerror = () => {
      };
      reader.onload = () => {
        const uploadData = new FormData();
        uploadData.append("file", file);
        uploadData.append("doenetId", doenetId);
        axios.post("/api/upload.php", uploadData, {
          onUploadProgress: (progressEvent) => {
            const totalLength = progressEvent.lengthComputable ? progressEvent.total : progressEvent.target.getResponseHeader("content-length") || progressEvent.target.getResponseHeader(
              "x-decompressed-content-length"
            );
            if (totalLength !== null) {
              let progressPercent = Math.round(
                progressEvent.loaded * 100 / totalLength
              );
              setUploadProgress((was) => {
                let newArray = [...was];
                newArray[fileIndex].progressPercent = progressPercent;
                return newArray;
              });
            }
          }
        }).then(({ data }) => {
          numberOfFilesUploading.current = numberOfFilesUploading.current - 1;
          if (numberOfFilesUploading.current < 1) {
            setUploadProgress([]);
          }
          let {
            success: success2,
            fileName,
            cid,
            asFileName,
            width,
            height,
            msg,
            userQuotaBytesAvailable: userQuotaBytesAvailable2
          } = data;
          if (msg) {
            if (success2) {
              addToast(msg, toastType.INFO);
            } else {
              addToast(msg, toastType.ERROR);
            }
          }
          if (success2) {
            setSupportFileInfo((was) => {
              let newObj = { ...was };
              let newSupportingFiles = [...was.supportingFiles];
              newSupportingFiles.push({
                cid,
                fileName,
                fileType: file.type,
                width,
                height,
                description: "",
                asFileName
              });
              newObj.supportingFiles = newSupportingFiles;
              newObj["userQuotaBytesAvailable"] = userQuotaBytesAvailable2;
              return newObj;
            });
          }
        });
      };
    });
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });
  let uploadProgressJSX = uploadProgress.map((info) => {
    return /* @__PURE__ */ jsxs("div", { children: [
      info.fileName,
      " - ",
      info.progressPercent,
      "%"
    ] }, `${info.fileName}`);
  });
  let uploadingSection = null;
  if (canUpload) {
    uploadingSection = /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsxs("div", { children: [
        userQuotaBytesAvailable,
        "/",
        quotaBytes,
        " Bytes"
      ] }),
      /* @__PURE__ */ jsxs("div", { ...getRootProps(), children: [
        /* @__PURE__ */ jsx("input", { ...getInputProps() }),
        isDragActive ? /* @__PURE__ */ jsx("p", { children: "Drop the files here" }) : /* @__PURE__ */ jsx(ButtonGroup, { vertical: true, children: /* @__PURE__ */ jsx(Button, { width: "menu", value: "Upload files" }) })
      ] }, "drop"),
      /* @__PURE__ */ jsx(CollapseSection, { title: "Accepted File Types", collapsed: true, children: /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("b", { children: "Image" }),
        ".jpg .png .csv"
      ] }) }),
      uploadProgressJSX
    ] });
  }
  let supportFilesJSX = [];
  supportingFiles.map(
    ({ cid, fileName, fileType, width, height, description, asFileName }) => {
      let doenetMLCode = "Error";
      let source = `doenet:cid=${cid}`;
      if (fileType === "image/jpeg" || fileType === "image/png") {
        doenetMLCode = `<image source='${source}' description='${description}' asfilename='${asFileName}' width='${width}' height='${height}' mimeType='${fileType}' />`;
        let description_required_css = {};
        supportFilesJSX.push(
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("span", { style: { width: "116px" }, children: "asFileName:" }),
              /* @__PURE__ */ jsx(
                EditableText,
                {
                  text: asFileName,
                  submit: (text) => {
                    updateAsFileName(text, cid);
                  }
                }
              )
            ] }),
            /* @__PURE__ */ jsxs("div", { style: description_required_css, children: [
              /* @__PURE__ */ jsx("span", { style: { width: "116px" }, children: "description:" }),
              /* @__PURE__ */ jsx(
                EditableText,
                {
                  text: description,
                  submit: (text) => {
                    updateDescription(text, cid);
                  }
                }
              )
            ] }),
            /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs(ActionButtonGroup, { width: "menu", children: [
              canUpload ? /* @__PURE__ */ jsx(
                ActionButton,
                {
                  alert: true,
                  value: "Delete",
                  onClick: () => {
                    deleteFile(cid);
                  }
                }
              ) : null,
              /* @__PURE__ */ jsx(
                lib.CopyToClipboard,
                {
                  onCopy: () => addToast("Code copied to clipboard!", toastType.SUCCESS),
                  text: doenetMLCode,
                  children: /* @__PURE__ */ jsx(
                    ActionButton,
                    {
                      disabled: description == "",
                      icon: /* @__PURE__ */ jsx(FontAwesomeIcon, { icon: faClipboard }),
                      value: "Copy Code"
                    }
                  )
                }
              )
            ] }) }),
            /* @__PURE__ */ jsx("hr", {})
          ] }, `${cid}`)
        );
      } else if (fileType === "text/csv") {
        doenetMLCode = `<dataFrame source='${source}' hasHeader="true" />`;
        supportFilesJSX.push(
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs("span", { style: { width: "116px" }, children: [
              "fileName:",
              " ",
              /* @__PURE__ */ jsx(
                EditableText,
                {
                  text: asFileName,
                  submit: (text) => {
                    updateAsFileName(text, cid);
                  }
                }
              )
            ] }) }),
            /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs(ActionButtonGroup, { width: "menu", children: [
              canUpload ? /* @__PURE__ */ jsx(
                ActionButton,
                {
                  alert: true,
                  value: "Delete",
                  onClick: () => {
                    deleteFile(cid);
                  }
                }
              ) : null,
              /* @__PURE__ */ jsx(
                lib.CopyToClipboard,
                {
                  onCopy: () => addToast("Code copied to clipboard!", toastType.SUCCESS),
                  text: doenetMLCode,
                  children: /* @__PURE__ */ jsx(
                    ActionButton,
                    {
                      icon: /* @__PURE__ */ jsx(FontAwesomeIcon, { icon: faClipboard }),
                      value: "Copy Code"
                    }
                  )
                }
              )
            ] }) }),
            /* @__PURE__ */ jsx("hr", {})
          ] }, `${cid}`)
        );
      }
    }
  );
  return /* @__PURE__ */ jsxs("div", { children: [
    uploadingSection,
    /* @__PURE__ */ jsx("br", {}),
    supportFilesJSX
  ] });
}
export {
  SupportingFilesMenu as default
};
