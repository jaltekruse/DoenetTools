import { EditorState } from 'prosemirror-state'
//import { PluginKey } from '../../../core/index.ts'
import { PluginKey } from '../../../core/pm/plugin.ts'
import { CommandDispatch } from '../../../core/index.ts'

export interface BaseState {
  activeNodes: string[]
  activeMarks: string[]
}

console.log(5);
console.log(PluginKey);
export const basePluginKey = new PluginKey('basePlugin')

export const getPluginState = (state: EditorState): BaseState =>
  basePluginKey.getState(state)

export const setPluginState = (stateProps: Object) => (
  state: EditorState,
  dispatch: CommandDispatch,
): boolean => {
  const pluginState = getPluginState(state)
  dispatch(
    state.tr.setMeta(basePluginKey, {
      ...pluginState,
      ...stateProps,
    }),
  )
  return true
}
