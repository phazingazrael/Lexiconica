import { React } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import ChangeLog from "./components/Changelog";
import Characters from "./components/cSheet";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Nav from "./components/Nav";
import MonsterTile from "./components/monsterTile";
import LocationList from "./components/locationList";
import Chip from "@mui/material/Chip";

//import { nanoid } from "nanoid";
import appInf from "../package.json";

//Begin import of 5e SRD data from the dnd5-srd package.
const srd = require("./data/srd/");
//5e.tools data imported below. Still needs refining to work properly with this current system.
const usrd = require("./data/usrd/");
//defaultCampaign Data here
const defaultCampaign = require("./data/defaultCampaign.json");

var store = require("store");

if (store.get("srd") === undefined) {
  console.log("NO SRD");
  store.set("srd", srd);
} else {
  console.log("SRD:" + JSON.stringify(store.get("srd")));
}

if (store.get("usrd") === undefined) {
  console.log("NO USRD");
  //store.set('usrd', usrd);
  console.log("uSRD: " + usrd);
} else {
  console.log("uSRD:" + JSON.stringify(store.get("srd")));
}

if (store.get("campaign") === undefined) {
  console.log("NO CAMPAIGN");
  store.set("campaign", defaultCampaign);
} else {
  console.log("Campaign: " + JSON.stringify(store.get("campaign")));
}

const sysInf = store.get('sys');

function handleClick() {}

function App(sysInf) {
  
  return (
    <BrowserRouter>
      <div className="App">
        <Grid container spacing={2} className="wrapper">
          <Grid className="header" item xs={12} sm={12} md={12} lg={12} xl={12}>
            <Paper>
              <AppBar position="static" color="default">
                <Toolbar>
                  <Typography variant="h6" color="inherit">
                    Campaign Manager - Campaign name here
                  </Typography>
                </Toolbar>
              </AppBar>
            </Paper>
          </Grid>
        </Grid>
        <Grid container spacing={2} className="wrapper">
          <Grid item xs={3} sm={3} md={3} lg={3} xl={2} className="nav">
            <Paper>
              <Nav />
            </Paper>
          </Grid>
          <Grid
            item
            xs={8}
            sm={true}
            md={true}
            lg={true}
            xl={true}
            className="contentWrapper"
          >
            <Paper>
              <div className="content">
                <Routes>
                  <Route
                    path="/"
                    element={
                      <div>
                        <p>
                          <img
                            src="https://raw.githubusercontent.com/phazingazrael/phazingazrael/main/github-metrics.svg"
                            alt="github metrics for developer"
                          ></img>
                          <img
                            src="https://github-readme-stats.vercel.app/api?username=phazingazrael&show_icons=true&theme=omni"
                            alt="github metrics for developer"
                          ></img>
                        </p>
                      </div>
                    }
                  />
                  <Route path="characters" element={<Characters />} />
                  <Route path="changelog" element={<ChangeLog />} />
                  <Route path="encounters" element={<MonsterTile />} />
                  <Route
                    path="locations"
                    element={<LocationList data={{ srd }} />}
                  />
                </Routes>
              </div>
            </Paper>
          </Grid>
        </Grid>
        <div className="footer">
          <Link to={"/changelog"}>
          <Chip>{sysInf.time}</Chip>
            <Chip
              onClick={handleClick}
              label={"Lexiconica v " + appInf.version}
            />
          </Link>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
