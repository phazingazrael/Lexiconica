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
                  <Route path="/" element={<ChangeLog />}>
                    <Route path="characters" element={<Characters />} />
                    <Route path="changelog" element={<ChangeLog />} />
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
