import "./index.css";
import * as React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import CloseIcon from "@mui/icons-material/Close";

import Nav from "../../../components/Nav";
import ChangeLog from "../../../components/Changelog";
import Characters from "../../../components/cSheet";
import MonsterTile from "../../../components/monsterTile";
import LocationList from "../../../components/locationList";

const drawerWidth = 240;

function Mobile(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const container =
    window !== undefined ? () => window().document.body : undefined;

  let SRD = props.srd;
  let SysInf = props.sysInf;
  let Campaign = props.campaign;

  return (
    <BrowserRouter>
      <div className="App">
        <Paper>
          <Box sx={{ display: "flex" }}>
            <AppBar
              position="fixed"
              sx={{
                width: { sm: `calc(100% - ${drawerWidth}px)` },
                ml: { sm: `${drawerWidth}px` },
              }}
            >
              <Toolbar>
                <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  edge="start"
                  onClick={handleDrawerToggle}
                  sx={{ mr: 2, display: { sm: "none" } }}
                >
                  <MenuIcon />
                </IconButton>
                <Typography variant="h6" noWrap component="div">
                  {Campaign.title}
                </Typography>
              </Toolbar>
            </AppBar>
            <Box
              component="nav"
              sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
              aria-label="mailbox folders"
            >
              {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
              <Drawer
                container={container}
                variant="temporary"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                ModalProps={{
                  keepMounted: true, // Better open performance on mobile.
                }}
                sx={{
                  display: { xs: "block", sm: "none" },
                  "& .MuiDrawer-paper": {
                    boxSizing: "border-box",
                    width: drawerWidth,
                  },
                }}
              >
                <Toolbar className="drawerClose">
                  <IconButton
                    color="inherit"
                    aria-label="close drawer"
                    edge="start"
                    onClick={handleDrawerToggle}
                    sx={{ mr: 2, display: { sm: "none" }, textAlign: "right" }}
                  >
                    Close <CloseIcon />
                  </IconButton>
                </Toolbar>
                <Nav />
              </Drawer>
              <Drawer
                variant="permanent"
                sx={{
                  display: { xs: "none", sm: "block" },
                  "& .MuiDrawer-paper": {
                    boxSizing: "border-box",
                    width: drawerWidth,
                  },
                }}
                open
              >
                <Toolbar>Lexiconica</Toolbar>
                <Nav />
              </Drawer>
            </Box>
            <Box
              component="main"
              sx={{
                flexGrow: 1,
                p: 3,
                width: { sm: `calc(100% - ${drawerWidth}px)` },
              }}
            >
              <Toolbar />
              <Grid container spacing={3}>
                <Grid item xs={12}>
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
                      element={<LocationList data={SRD.monsters} />}
                    />
                  </Routes>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Paper>
      </div>
    </BrowserRouter>
  );
}

export default Mobile;
