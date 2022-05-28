import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
const container = document.getElementById("root");
const root = createRoot(container);
const t0 = performance.now();
console.log(t0);

var store = require("store");
var sysInf = {
  time: "",
};

if (store.get("sys") === undefined) {
  console.log("NO sys");
  store.set("sys", sysInf);
} else {
  console.log("sys:" + JSON.stringify(store.get("sys")));
}

function renderCallback(e) {
  console.log("Rendering done?", e);
  const t1 = performance.now();
  console.log(`Mount took ~${(t1 - t0) / 1000} seconds.`);
  sysInf.time = (performance.now() - t0) / 1000;
  store.set("sys", sysInf);
  console.log("sys:" + JSON.stringify(store.get("sys")));
  return renderCallback;
}
root.render(<App>{renderCallback()}</App>);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
