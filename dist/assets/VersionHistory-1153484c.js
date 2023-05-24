import { t as Recoil_index_20, W as searchParamAtomFamily, U as Recoil_index_21, a3 as useToast, a0 as Recoil_index_31, h as axios, a4 as toastType, aN as nanoid, z as cidFromText, b2 as DateToUTCDateString, j as jsx, b as jsxs, F as Fragment, B as Button, aA as Recoil_index_8 } from "./PageViewer-d914b069.js";
import { i as itemHistoryAtom, f as folderDictionary, b as buildTimestamp, C as ClipboardLinkButtons, R as RenameVersionControl } from "./CourseToolHandler-1976a165.js";
import { R as RelatedItems } from "./RelatedItems-8a9ec536.js";
import { e as editorPageIdInitAtom, t as textEditorDoenetMLAtom } from "./EditorViewerRecoil-84be9f2a.js";
import "./index-badc91d0.js";
import "./index-a634ad2f.js";
import "./index-72e7d0b2.js";
import "./index.esm-b50f3a4c.js";
import "./extends-d9a14db7.js";
import "./setPrototypeOf-be240aa9.js";
import "./inheritsLoose-000f9e77.js";
/* empty css               */import "./ButtonGroup-b585a5ef.js";
const currentDraftSelectedAtom = Recoil_index_8({
  key: "currentDraftSelectedAtom",
  default: true
});
const selectedVersionIdAtom = Recoil_index_8({
  key: "selectedVersionIdAtom",
  default: null
});
function VersionHistory(props) {
  var _a;
  console.log(">>>===VersionHistory");
  const doenetId = Recoil_index_20(searchParamAtomFamily("doenetId"));
  const path = decodeURIComponent(
    Recoil_index_20(searchParamAtomFamily("path"))
  );
  const versionHistory = Recoil_index_21(itemHistoryAtom(doenetId));
  const initializedDoenetId = Recoil_index_20(editorPageIdInitAtom);
  const selectedVersionId = Recoil_index_20(selectedVersionIdAtom);
  const addToast = useToast();
  const currentDraftSelected = Recoil_index_20(currentDraftSelectedAtom);
  const [driveId, folderId, itemId] = path.split(":");
  const setReleaseNamed = Recoil_index_31(
    ({ set, snapshot }) => async ({ doenetId: doenetId2, versionId, driveId: driveId2, folderId: folderId2, itemId: itemId2 }) => {
      const { data } = await axios.get("/api/releaseVersion.php", {
        params: { doenetId: doenetId2, versionId }
      });
      const { success, message, isReleased, title } = data;
      let actionName = "Retracted";
      if (isReleased === "1") {
        actionName = "Released";
      }
      if (success) {
        addToast(`"${title}" is ${actionName}`, toastType.SUCCESS);
      } else {
        addToast(message, toastType.ERROR);
      }
      set(itemHistoryAtom(doenetId2), (was) => {
        let newObj = { ...was };
        let newNamed = [...was.named];
        for (const [i, version2] of newNamed.entries()) {
          let newVersion = { ...version2 };
          if (version2.versionId === versionId) {
            newVersion.isReleased = isReleased;
            newNamed[i] = newVersion;
          } else {
            newVersion.isReleased = "0";
            newNamed[i] = newVersion;
          }
        }
        newObj.named = newNamed;
        return newObj;
      });
      set(folderDictionary({ driveId: driveId2, folderId: folderId2 }), (was) => {
        let newFolderInfo = { ...was };
        for (let testItemId of newFolderInfo.contentIds.defaultOrder) {
          if (newFolderInfo.contentsDictionary[testItemId].doenetId === doenetId2) {
            itemId2 = testItemId;
            break;
          }
        }
        newFolderInfo.contentsDictionary = { ...was.contentsDictionary };
        newFolderInfo.contentsDictionary[itemId2] = {
          ...was.contentsDictionary[itemId2]
        };
        newFolderInfo.contentsDictionary[itemId2].isReleased = isReleased;
        newFolderInfo.contentsDictionaryByDoenetId = {
          ...was.contentsDictionaryByDoenetId
        };
        newFolderInfo.contentsDictionaryByDoenetId[doenetId2] = {
          ...was.contentsDictionaryByDoenetId[doenetId2]
        };
        newFolderInfo.contentsDictionaryByDoenetId[doenetId2].isReleased = isReleased;
        return newFolderInfo;
      });
    }
  );
  const setAsCurrent = Recoil_index_31(
    ({ snapshot, set }) => async ({ doenetId: doenetId2, versionId }) => {
      const was = await snapshot.getPromise(itemHistoryAtom(doenetId2));
      let nameSaveWasDraft = { ...was.draft };
      nameSaveWasDraft.isDraft = "0";
      const title = `Save (current) ${was.named.length + 1}`;
      nameSaveWasDraft.title = title;
      nameSaveWasDraft.timestamp = buildTimestamp();
      let newDraft = {};
      for (let version2 of was.named) {
        if (version2.versionId === versionId) {
          newDraft = { ...version2 };
        }
      }
      const newDraftVersionId = nanoid();
      newDraft.versionId = newDraftVersionId;
      newDraft.isDraft = "1";
      newDraft.isNamed = "0";
      newDraft.isReleased = "0";
      let newItemHistory = { ...was };
      newItemHistory.named = [nameSaveWasDraft, ...was.named];
      newItemHistory.draft = newDraft;
      set(itemHistoryAtom(doenetId2), newItemHistory);
      set(currentDraftSelectedAtom, true);
      set(selectedVersionIdAtom, newDraftVersionId);
      let newDBVersion = {
        ...newDraft,
        isSetAsCurrent: "1",
        newDraftVersionId,
        newDraftContentId: newDraft.cid,
        doenetId: doenetId2,
        newTitle: title
      };
      axios.post("/api/saveNewVersion.php", newDBVersion);
    }
  );
  const saveVersion = Recoil_index_31(
    ({ snapshot, set }) => async (doenetId2) => {
      const doenetML = await snapshot.getPromise(textEditorDoenetMLAtom);
      const timestamp = buildTimestamp();
      const cid = await cidFromText(doenetML);
      const versionId = nanoid();
      const oldVersions = await snapshot.getPromise(
        itemHistoryAtom(doenetId2)
      );
      let newVersions = { ...oldVersions };
      const title = `Save ${oldVersions.named.length + 1}`;
      let newVersion = {
        title,
        versionId,
        timestamp,
        isReleased: "0",
        isDraft: "0",
        isNamed: "1",
        cid
      };
      let newDBVersion = { ...newVersion, doenetML, doenetId: doenetId2 };
      newVersions.named = [newVersion, ...oldVersions.named];
      set(itemHistoryAtom(doenetId2), newVersions);
      axios.post("/api/saveNewVersion.php", newDBVersion).then((resp) => {
        var _a2, _b;
        if ((_a2 = resp == null ? void 0 : resp.data) == null ? void 0 : _a2.success) {
          addToast("New Version Saved!", toastType.SUCCESS);
        } else {
          addToast("Version NOT Saved!", toastType.ERROR);
          console.error((_b = resp.data) == null ? void 0 : _b.message);
        }
      }).catch((err) => {
        addToast("Version NOT Saved!", toastType.ERROR);
      });
    }
  );
  const saveAndReleaseCurrent = Recoil_index_31(
    ({ snapshot, set }) => async ({ doenetId: doenetId2, driveId: driveId2, folderId: folderId2, itemId: itemId2 }) => {
      const doenetML = await snapshot.getPromise(textEditorDoenetMLAtom);
      const timestamp = DateToUTCDateString(/* @__PURE__ */ new Date());
      const cid = await cidFromText(doenetML);
      const versionId = nanoid();
      const { data } = await axios.post("/api/releaseDraft.php", {
        doenetId: doenetId2,
        doenetML,
        timestamp,
        versionId
      });
      const { success, message, title } = data;
      if (success) {
        addToast(`"${title}" is Released.`, toastType.SUCCESS);
      } else {
        addToast(message, toastType.ERROR);
      }
      set(itemHistoryAtom(doenetId2), (was) => {
        let newObj = { ...was };
        let newNamed = [...was.named];
        for (const [i, version2] of newNamed.entries()) {
          let newVersion2 = { ...version2 };
          newVersion2.isReleased = "0";
          newNamed[i] = newVersion2;
        }
        let newVersion = {
          title,
          versionId,
          timestamp,
          isReleased: "1",
          isDraft: "0",
          isNamed: "1",
          cid
        };
        newNamed.unshift(newVersion);
        newObj.named = newNamed;
        return newObj;
      });
      set(folderDictionary({ driveId: driveId2, folderId: folderId2 }), (was) => {
        let newFolderInfo = { ...was };
        for (let testItemId of newFolderInfo.contentIds.defaultOrder) {
          if (newFolderInfo.contentsDictionary[testItemId].doenetId === doenetId2) {
            itemId2 = testItemId;
            break;
          }
        }
        newFolderInfo.contentsDictionary = { ...was.contentsDictionary };
        newFolderInfo.contentsDictionary[itemId2] = {
          ...was.contentsDictionary[itemId2]
        };
        newFolderInfo.contentsDictionary[itemId2].isReleased = "1";
        newFolderInfo.contentsDictionaryByDoenetId = {
          ...was.contentsDictionaryByDoenetId
        };
        newFolderInfo.contentsDictionaryByDoenetId[doenetId2] = {
          ...was.contentsDictionaryByDoenetId[doenetId2]
        };
        newFolderInfo.contentsDictionaryByDoenetId[doenetId2].isReleased = "1";
        return newFolderInfo;
      });
    }
  );
  const setSelectedVersionId = Recoil_index_31(
    ({ snapshot, set }) => async ({ doenetId: doenetId2, versionId, isCurrentDraft }) => {
      set(selectedVersionIdAtom, versionId);
      set(currentDraftSelectedAtom, isCurrentDraft);
      const oldVersions = await snapshot.getPromise(
        itemHistoryAtom(doenetId2)
      );
      let newVersions = { ...oldVersions };
      let oldDraftContentId = oldVersions.draft.cid;
      if (!isCurrentDraft) {
        const wasDraftSelected = await snapshot.getPromise(
          currentDraftSelectedAtom
        );
        if (wasDraftSelected) {
          const newDraftDoenetML = await snapshot.getPromise(
            textEditorDoenetMLAtom
          );
          const newDraftContentId = await cidFromText(newDraftDoenetML);
          if (newDraftContentId !== oldDraftContentId) {
            let newDraft = { ...oldVersions.draft };
            newDraft.cid = newDraftContentId;
            newDraft.timestamp = buildTimestamp();
            newVersions.draft = newDraft;
            set(itemHistoryAtom(doenetId2), newVersions);
            let newDBVersion = {
              ...newDraft,
              doenetML: newDraftDoenetML,
              doenetId: doenetId2
            };
            try {
              const { data } = await axios.post(
                "/api/saveNewVersion.php",
                newDBVersion
              );
              if (data.success) {
              } else {
                console.log("ERROR", data.message);
              }
            } catch (error) {
              console.log("ERROR", error);
            }
          }
        }
      }
      newVersions.draft.cid;
      for (let version2 of newVersions.named) {
        if (version2.versionId === versionId) {
          version2.cid;
          break;
        }
      }
    }
  );
  if (initializedDoenetId !== doenetId) {
    return /* @__PURE__ */ jsx("div", { style: props.style });
  }
  if (!((_a = versionHistory == null ? void 0 : versionHistory.contents) == null ? void 0 : _a.named)) {
    return null;
  }
  let options = [];
  let versionsObj = {};
  let inUseVersionId = selectedVersionId;
  for (let version2 of versionHistory.contents.named) {
    versionsObj[version2.versionId] = version2;
    let selected = false;
    if (version2.versionId === inUseVersionId) {
      selected = true;
    }
    let released = "";
    if (version2.isReleased === "1") {
      released = "(Released)";
    }
    options.push(
      /* @__PURE__ */ jsxs(
        "option",
        {
          value: version2.versionId,
          selected,
          children: [
            released,
            " ",
            version2.title
          ]
        },
        `option${version2.versionId}`
      )
    );
  }
  const version = versionsObj[inUseVersionId];
  let releaseButtonText = "Release";
  if ((version == null ? void 0 : version.isReleased) === "1") {
    releaseButtonText = "Retract";
  }
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("div", { style: { padding: "6px 0px 6px 0px" }, children: /* @__PURE__ */ jsx(
      RelatedItems,
      {
        size: "2",
        width: "menu",
        onChange: (e) => {
          setSelectedVersionId({
            doenetId,
            versionId: e.target.value,
            isCurrentDraft: true
          });
        },
        options: /* @__PURE__ */ jsx(
          "option",
          {
            value: versionHistory.contents.draft.versionId,
            selected: currentDraftSelected,
            children: "Current Draft"
          }
        )
      }
    ) }),
    /* @__PURE__ */ jsx("div", { style: { margin: "0px 0px 6px 0px" }, children: /* @__PURE__ */ jsx(
      Button,
      {
        disabled: !currentDraftSelected,
        width: "menu",
        value: "Save Version",
        onClick: () => saveVersion(doenetId)
      }
    ) }),
    /* @__PURE__ */ jsx("div", { style: { margin: "6px 0px 6px 0px" }, children: /* @__PURE__ */ jsx(
      Button,
      {
        disabled: !currentDraftSelected,
        width: "menu",
        value: "Release Current",
        onClick: () => {
          saveAndReleaseCurrent({ doenetId, driveId, folderId, itemId });
        }
      }
    ) }),
    /* @__PURE__ */ jsx("div", { children: "History" }),
    /* @__PURE__ */ jsx(
      RelatedItems,
      {
        size: "8",
        width: "menu",
        onChange: (e) => {
          setSelectedVersionId({
            doenetId,
            versionId: e.target.value,
            isCurrentDraft: false
          });
        },
        options
      }
    ),
    /* @__PURE__ */ jsxs("div", { children: [
      "Name: ",
      version == null ? void 0 : version.title
    ] }),
    /* @__PURE__ */ jsx(
      ClipboardLinkButtons,
      {
        disabled: currentDraftSelected,
        cid: version == null ? void 0 : version.cid,
        doenetId
      }
    ),
    /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(
      RenameVersionControl,
      {
        disabled: currentDraftSelected,
        doenetId,
        title: version == null ? void 0 : version.title,
        versionId: version == null ? void 0 : version.versionId
      },
      version == null ? void 0 : version.versionId
    ) }),
    /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(
      Button,
      {
        disabled: currentDraftSelected,
        onClick: () => setAsCurrent({ doenetId, versionId: version.versionId }),
        value: "Set As Current"
      }
    ) }),
    /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(
      Button,
      {
        disabled: currentDraftSelected,
        onClick: () => setReleaseNamed({
          doenetId,
          versionId: version.versionId,
          driveId,
          folderId,
          itemId
        }),
        value: releaseButtonText
      }
    ) })
  ] });
}
export {
  currentDraftSelectedAtom,
  VersionHistory as default,
  selectedVersionIdAtom
};
