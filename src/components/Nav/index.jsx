import React from "react";
import { Link } from "react-router-dom";
import "./index.css";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import MapIcon from "@mui/icons-material/MapOutlined";
import HomeIcon from "@mui/icons-material/HomeOutlined";
import ContactPageOutlinedIcon from "@mui/icons-material/ContactPageOutlined";
import NoiseAwareOutlinedIcon from "@mui/icons-material/NoiseAwareOutlined";

function Name() {
  return (
    <List component="nav" className="navMenu">
      <Link to={"/"}>
        <ListItem button>
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItem>
      </Link>
      <Divider />
      <Link to={"/characters"}>
        <ListItem button>
          <ListItemIcon>
            <ContactPageOutlinedIcon />
          </ListItemIcon>
          <ListItemText primary="Players" />
        </ListItem>
      </Link>
      <Divider />
      <Link to={"/encounters"}>
        <ListItem button>
          <ListItemIcon>
            <NoiseAwareOutlinedIcon />
          </ListItemIcon>
          <ListItemText primary="Encounters" />
        </ListItem>
      </Link>
      <Divider />
      <Link to={"/locations"}>
        <ListItem button>
          <ListItemIcon>
            <MapIcon />
          </ListItemIcon>
          <ListItemText primary="Locations" />
        </ListItem>
      </Link>
    </List>
  );
}

export default Name;
