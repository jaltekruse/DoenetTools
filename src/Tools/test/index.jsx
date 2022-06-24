import React from 'react';
import ReactDOM from 'react-dom';
import DoenetTest from './DoenetTest.jsx';
import {RecoilRoot} from 'recoil';
 import {schema} from "prosemirror-schema-basic"
 import {EditorState} from "prosemirror-state"
 import {EditorView} from "prosemirror-view"
 import {undo, redo, history} from "prosemirror-history"
 import {keymap} from "prosemirror-keymap"
 import {baseKeymap} from "prosemirror-commands"
 import {Schema, DOMParser} from "prosemirror-model"
 import {addListNodes} from "prosemirror-schema-list"
 import {exampleSetup} from "prosemirror-example-setup"
import {Editor} from "@core"

/*
 // Mix the nodes from prosemirror-schema-list into the basic schema to
 // create a schema with list support.
 const mySchema = new Schema({
   nodes: addListNodes(schema.spec.nodes, "paragraph block*", "block"),
   marks: schema.spec.marks
 })                  
 
 window.view = new EditorView(document.getElementById('root'), {
   state: EditorState.create({
     doc: DOMParser.fromSchema(mySchema).parse(""),// document.querySelector("#content")),
     plugins: exampleSetup({schema: mySchema})
   })
 });
 */
 


ReactDOM.render(
  <RecoilRoot>
    <Editor />
  </RecoilRoot>,
  document.getElementById('root'),
);
