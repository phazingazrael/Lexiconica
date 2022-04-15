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
//import { nanoid } from "nanoid";



//Begin import of 5e SRD data from the dnd5-srd package.
const srd = require("./data/srd/");
//console.log(srd);

//
//5e.tools data imported below. Still needs refining to work properly with this current system.
//const nonSRD = require("./data/usrd/index.js");
//console.log("5e Tools Data below");
//console.log(nonSRD);

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Grid container spacing={2} className="wrapper">
          <Grid className="header" item xs={12}>
            <Paper>
              <AppBar position="static" color="default">
                <Toolbar>
                  <Typography variant="h6" color="inherit">
                    <Link to={"/changelog"}>Campaign Manager</Link> - Campaign
                    name here
                  </Typography>
                </Toolbar>
              </AppBar>
            </Paper>
          </Grid>
          <Grid item xs={4} className="nav">
            <Paper>
              <Nav />
            </Paper>
          </Grid>
          <Grid item xs={8} className="contentWrapper">
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
      </div>
    </BrowserRouter>
  );
}

export default App;
