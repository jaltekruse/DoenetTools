import { keymap } from 'prosemirror-keymap'
import { Plugin } from 'prosemirror-state'
//import { keymaps } from '../../../core/index.ts'
import { createNewBlockQuote } from '../commands'

import {bindKeymapWithCommand, toggleBlockQuote} from '../../../core/index.ts'


export const LEFT = 37;
export const RIGHT = 39;
export const UP = 38;
export const DOWN = 40;
export const KEY_0 = 48;
export const KEY_1 = 49;
export const KEY_2 = 50;
export const KEY_3 = 51;
export const KEY_4 = 52;
export const KEY_5 = 53;
export const KEY_6 = 54;
export const HEADING_KEYS = [KEY_0, KEY_1, KEY_2, KEY_3, KEY_4, KEY_5, KEY_6];
//console.log(JSON.stringify(keymaps));

//export const toggleBlockQuote = makeKeyMapWithCommon('Quote', 'Ctrl-Alt-b');
function makeKeyMapWithCommon(description: string, common: string): Keymap {
  const windows = common.replace(/Mod/i, 'Ctrl');
  const mac = common.replace(/Mod/i, 'Cmd');
  return makeKeymap(description, windows, mac, common);
}
//keymaps.toggleBlockQuote = toggleBlockQuote ;
//console.log(keymaps.bindKeymapWithCommand);

export function keymapPlugin(): Plugin {
  const keymapObj = {}

  bindKeymapWithCommand(
    toggleBlockQuote.common!,
    createNewBlockQuote(),
    keymapObj,
  )

  return keymap(keymapObj)
}
