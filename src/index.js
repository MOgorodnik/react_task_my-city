import state, { subscribe } from './redux/state';
// import {rerenderTree} from './render';

import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import { addCard } from "./redux/state";

const rootElement = document.getElementById("root");

export let rerenderTree = () => {
  ReactDOM.render(
    <React.StrictMode>
      <App data={state.data} appState={state} addCard={addCard} />
    </React.StrictMode>,
    rootElement
  );
};

rerenderTree(state)

subscribe(rerenderTree)