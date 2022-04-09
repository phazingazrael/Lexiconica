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

const dnd = require("dnd5-srd");
//const monsters = dnd.data.monsters;
const srd = dnd.data;
//console.log("Aboleth HP "+aboleth.hit_points);
//console.log(srd.monsters);

const nonSRD = require("./data/index.js");
//console.log("5e Tools Data below");
//console.log(nonSRD);

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Grid container spacing={24} className="wrapper">
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
                  <Route path="/" >
                    <Route path="characters" element={<Characters />} />
                    <Route path="changelog" element={<ChangeLog />} />
                    <Route path="locations" element={<MonsterTile />} />
                  </Route>
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
