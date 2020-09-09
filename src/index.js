import React from "react";
import ReactDOM from "react-dom";

import App from "./App";

let test = "some text";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <App test={test} />
  </React.StrictMode>,
  rootElement
);
