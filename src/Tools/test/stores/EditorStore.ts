import { EditorContext } from '@core'
//import { EditorStateJSON } from '@pm-react-example/shared'
//import { PMDoc } from '../types/document'

import { Node as PMNode } from 'prosemirror-model'
  
 export type PMDoc = {
   [key: string]: any   
 }
 export interface IDBDocument {
   id: string
   title: string
   doc: PMDoc
 }


export class EditorStore {

  editorCtx?: EditorContext
  currentEditorState?: any

  setEditorContext = (ctx: EditorContext) => {
    this.editorCtx = ctx
  }

  getEditorState = () => {
    return this.editorCtx!.viewProvider.stateToJSON()
  }

  createEmptyDoc = () : PMDoc => {
    const json = JSON.parse('{"type":"doc","content":[{"type":"paragraph","content":[]}]}')
    const node = this.editorCtx?.viewProvider.editorView.state.schema.nodeFromJSON(json)
    node.check()
    return node.toJSON()
  }

  setCurrentDoc = (doc?: PMDoc) => {
    const pmDoc = doc ?? this.createEmptyDoc()
    this.editorCtx?.viewProvider.replaceState(pmDoc)
  }

  reset = () => {
    this.setCurrentDoc()
  }
}
