import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import appInf from "../package.json";
import { isMobile } from "react-device-detect";

const container = document.getElementById("root");
const root = createRoot(container);

//defaultCampaign Data here
const defaultCampaign = require("./data/defaultCampaign.json");
const srdata = require("./data/srd/");

let sysBase = {
  version: appInf.version,
  name: appInf.name,
  Date: new Date(),
  isMobile: isMobile,
  time: new Date().getTime(),
};

let store = require("store");

let sysInf = store.get("sys");
let srdb = store.get("srd");
let campaign = store.get("campaign");

if (sysInf === undefined) {
  //console.log("Unknown System");
  let sys = {
    version: appInf.version,
    name: appInf.name,
    loadTime: null,
    Date: new Date(),
    isMobile: isMobile,
    time: new Date().getTime(),
  };
  store.set("sys", sys);
} else {
  //console.log("System Info Loaded");
}

if (sysInf.version !== sysBase.version) {
  //console.log("Known System");
  let sys = {
    version: appInf.version,
    name: appInf.name,
    loadTime: null,
    Date: new Date(),
    isMobile: isMobile,
    time: new Date().getTime(),
  };
  store.set("sys", sys);
} else {
  //console.log("System Info Refreshed");
}

if (srdb === undefined) {
  //console.log("NO SRD");
  store.set("srd", srdata);
} else {
  //console.log("SRD Loaded");
  //console.log(srdb);
}

if (campaign === undefined) {
  //console.log("NO CAMPAIGN");
  store.set("campaign", defaultCampaign);
} else {
  //console.log("Campaign Loaded");
  //console.log(campaign);
}

function renderCallback(e) {
  let sys = store.get("sys");
  //console.log("Current store.get('sys'): " + sys);
  if (sys === undefined) {
    //console.log("NO System");
    let Sys = {
      version: appInf.version,
      name: appInf.name,
      Date: new Date(),
      isMobile: isMobile,
      time: new Date().getTime(),
    };
    store.set("sys", Sys);
  } else {
    //console.log("no system check passed");
    //console.log("System Loaded");
  }
  store.set("sys", sys);
  return renderCallback;
}
root.render(<App>{renderCallback()}</App>);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
