import * as React from 'react'
import { render } from 'react-dom'
import { Provider } from 'mobx-react'

import { Stores } from './stores'
import { confMobx } from './stores/mobxConf'

import { Routes } from './routes'
import { Toaster } from './components/Toaster'

import './index.css'

export const stores = new Stores()

confMobx()

render(
  <Provider {...stores}>
    <Routes />
    <Toaster />
  </Provider>,
  document.getElementById('root')
)
/*
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Editor } from '@pm-react-example/full-v2';

// here is a basic functional component using hooks
// from here: https://reactjs.org/docs/hooks-overview.html
function Example() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}

console.log(Editor);
const root = ReactDOM.render(
    <Editor />,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
*/
