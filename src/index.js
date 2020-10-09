import React from "react";
import ReactDOM from "react-dom";

//import App from "./App";
import Exam from "./Exam/Exam";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <Exam />
  </React.StrictMode>,
  rootElement
);
