import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import appInf from "../package.json";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import MedievalSharp from "./font/MedievalSharp.ttf";

const theme = createTheme({
  palette: {
    type: "light",
    primary: {
      main: "#544639",
    },
    secondary: {
      main: "#e8bdaa",
    },
    success: {
      main: "#C8FFBE",
    },
    info: {
      main: "#7BB2D9",
    },
    warning: {
      main: "#C3E991",
    },
    error: {
      main: "#E0479E",
    },
  },
  /* typography: {
    h6: {
      fontFamily: "MedievalSharp",
    },
    h5: {
      fontFamily: "MedievalSharp",
    },
    h4: {
      fontFamily: "MedievalSharp",
    },
    h3: {
      fontFamily: "MedievalSharp",
    },
    h2: {
      fontFamily: "MedievalSharp",
    },
    h1: {
      fontFamily: "MedievalSharp",
    },
  }, */
  props: {
    MuiList: {
      dense: true,
    },
    MuiMenuItem: {
      dense: true,
    },
    MuiTable: {
      size: "small",
    },
    MuiButton: {
      size: "small",
    },
    MuiButtonGroup: {
      size: "small",
    },
    MuiCheckbox: {
      size: "small",
    },
    MuiFab: {
      size: "small",
    },
    MuiFormControl: {
      margin: "dense",
      size: "small",
    },
    MuiFormHelperText: {
      margin: "dense",
    },
    MuiIconButton: {
      size: "small",
    },
    MuiInputBase: {
      margin: "dense",
    },
    MuiInputLabel: {
      margin: "dense",
    },
    MuiRadio: {
      size: "small",
    },
    MuiSwitch: {
      size: "small",
    },
    MuiTextField: {
      margin: "dense",
      size: "small",
    },
    MuiTooltip: {
      arrow: true,
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family: 'MedievalSharp';
          font-style: normal;
          font-display: swap;
          src: local('MedievalSharp'), local('MedievalSharp-Regular'), url(${MedievalSharp}) format('ttf');
        }
      `,
    },
  },
});

const container = document.getElementById("root");
const root = createRoot(container);

//defaultCampaign Data here
const defaultCampaign = require("./data/defaultCampaign.json");
const srdata = require("./data/srd/");

let store = require("store");

let sysInf = store.get("sys");
let srdb = store.get("srd");
let campaign = store.get("campaign");

let sysBase = {
  version: appInf.version,
  name: appInf.name,
  campaign: defaultCampaign.title,
  author: {
    email: appInf.author.email,
    name: appInf.author.name,
    url: appInf.author.url,
  },
  description: appInf.description,
};

if (sysInf === undefined) {
  let sys = sysBase;
  store.set("sys", sys);
}

if (sysInf.version !== sysBase.version) {
  let sys = sysBase;
  store.set("sys", sys);
}

if (sysInf !== sysBase) {
  sysInf = sysBase;
  store.set("sys", sysInf);
}

if (srdb === undefined) {
  store.set("srd", srdata);
}

if (campaign === undefined) {
  store.set("campaign", defaultCampaign);
}

function renderCallback() {
  let sys = store.get("sys");
  if (sys === undefined) {
    sys = sysBase;
    store.set("sys", sys);
  }
  store.set("sys", sys);
  return renderCallback;
}

setTimeout(
  () =>
    root.render(
      <ThemeProvider theme={theme}>
        <App>{renderCallback()}</App>
      </ThemeProvider>
    ),
  2000
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
