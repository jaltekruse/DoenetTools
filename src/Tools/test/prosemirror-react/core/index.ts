export { Editor } from './Editor'
export { EditorSimple } from './Editor'
export type { JSONEditorState } from './types/editor-view' 

export { PluginKey } from './pm/plugin'
export type { Command, CommandDispatch } from './types/command'

//export * as keymaps from './keymaps/index.ts'
export {bindKeymapWithCommand, toggleBlockQuote} from './keymaps/index.ts'

export { EventDispatcher } from './utils/EventDispatcher.ts'
export { parseRawValue } from './utils/document.ts'
