import { React } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";

import Nav from "../../../components/Nav";
import ChangeLog from "../../../components/Changelog";
import Characters from "../../../components/cSheet";
import MonsterTile from "../../../components/monsterTile";
import LocationList from "../../../components/locationList";

//import { nanoid } from "nanoid";
import appInf from "../../../../package.json";
//const store = require("store");

function handleClick() {
  console.log("You clicked a chip.");
}

//let sysInf = store.get("sys");

export function Desktop(props) {
  let SRD = props.srd;
  let SysInf = props.sysInf;
  let Campaign = props.campaign;
  return (
    <BrowserRouter>
      <div className="App">
        <Grid container spacing={2} className="wrapper">
          <Grid className="header" item xs={12} sm={12} md={12} lg={12} xl={12}>
            <Paper>
              <AppBar position="static" color="default">
                <Toolbar>
                  <Typography variant="h6" color="inherit">
                    Campaign Manager - {Campaign.title}
                  </Typography>
                </Toolbar>
              </AppBar>
            </Paper>
          </Grid>
        </Grid>
        <Grid container spacing={2} className="wrapper">
          <Grid item xs={3} sm={3} md={3} lg={3} xl={2} className="nav">
            <Paper>
              <Nav sysInf={SysInf} srd={SRD} campaign={Campaign} />
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
                  <Route path="characters" element={<Characters campaign={Campaign} />} />
                  <Route path="changelog" element={<ChangeLog />} />
                  <Route path="encounters" element={<MonsterTile srd={SRD} />} />
                  <Route
                    path="locations"
                    element={<LocationList data={SRD.monsters} />}
                  />
                </Routes>
              </div>
            </Paper>
          </Grid>
        </Grid>
        <div className="footer">
          <Link to={"/changelog"}>
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

export default Desktop;
