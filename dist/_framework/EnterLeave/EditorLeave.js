import {useRecoilCallback} from "recoil";
import {currentDraftSelectedAtom, selectedVersionIdAtom} from "../Menus/VersionHistory.js";
export default function EditorLeave() {
  const resetToCurrent = useRecoilCallback(({set}) => () => {
    set(currentDraftSelectedAtom, true);
    set(selectedVersionIdAtom, null);
  });
  resetToCurrent();
  return null;
}
