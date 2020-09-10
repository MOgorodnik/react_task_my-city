// import {rerenderTree} from './render'
import state, { subscribe } from './redux/state';
import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import { addCard, initialFormData } from "./redux/state";

const rootElement = document.getElementById("root");

let rerenderTree = () => {
  ReactDOM.render(
    <React.StrictMode>
      <App data={state.data} appState={state} addCard={addCard}  initialFormData={initialFormData} />
    </React.StrictMode>,
    rootElement
  );
};

rerenderTree(state);

subscribe(rerenderTree)