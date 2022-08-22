import React from "react";
import { Link } from "react-router-dom";
import "./mobile.css";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import InfoIcon from "@mui/icons-material/Info";

function MobileNav(props) {
  let sysInf = props.sysInf;

  return (
    <List
      component="nav"
      className="navMenu MobNav"
      xs={4}
      sm={4}
      md={4}
      lg={4}
      xl={4}
    >
      <Link to={"/"}>
        <ListItem>
          <ListItemText primary="Home" />
        </ListItem>
      </Link>
      <Divider />
      <List component="div" disablePadding className="subNav">
        <ListItem>
          <ListItemText primary="World" />
        </ListItem>
        <Link to={"/characters"}>
          <ListItem
            sx={{
              pl: 4,
              paddingLeft: { xs: "16px", sm: "16px", md: "32px" },
            }}
          >
            <ListItemText primary="Players" />
          </ListItem>
        </Link>
        <Link to={"/locations"}>
          <ListItem
            sx={{
              pl: 4,
              paddingLeft: { xs: "16px", sm: "16px", md: "32px" },
            }}
          >
            <ListItemText primary="Locations" />
          </ListItem>
        </Link>
        <Link to={"/npcs"}>
          <ListItem
            sx={{
              pl: 4,
              paddingLeft: { xs: "16px", sm: "16px", md: "32px" },
            }}
          >
            <ListItemText primary="NPC's" />
          </ListItem>
        </Link>
        <Link to={"/organizations"}>
          <ListItem
            sx={{
              pl: 4,
              paddingLeft: { xs: "16px", sm: "16px", md: "32px" },
            }}
          >
            <ListItemText primary="Organizations" />
          </ListItem>
        </Link>
        <Link to={"/families"}>
          <ListItem
            sx={{
              pl: 4,
              paddingLeft: { xs: "16px", sm: "16px", md: "32px" },
            }}
          >
            <ListItemText primary="Families" />
          </ListItem>
        </Link>
      </List>
      <Divider />
      <List component="div" disablePadding className="subNav">
        <ListItem>
          <ListItemText primary="Campaign" />
        </ListItem>
        <Link to={"/quests"}>
          <ListItem
            sx={{
              pl: 4,
              paddingLeft: { xs: "16px", sm: "16px", md: "32px" },
            }}
          >
            <ListItemText primary="Quests" />
          </ListItem>
        </Link>
        <Link to={"/journals"}>
          <ListItem
            sx={{
              pl: 4,
              paddingLeft: { xs: "16px", sm: "16px", md: "32px" },
            }}
          >
            <ListItemText primary="Journals" />
          </ListItem>
        </Link>
        <Link to={"/items"}>
          <ListItem
            sx={{
              pl: 4,
              paddingLeft: { xs: "16px", sm: "16px", md: "32px" },
            }}
          >
            <ListItemText primary="Items" />
          </ListItem>
        </Link>
        <Link to={"/events"}>
          <ListItem
            sx={{
              pl: 4,
              paddingLeft: { xs: "16px", sm: "16px", md: "32px" },
            }}
          >
            <ListItemText primary="Events" />
          </ListItem>
        </Link>
        <Link to={"/abilities"}>
          <ListItem
            sx={{
              pl: 4,
              paddingLeft: { xs: "16px", sm: "16px", md: "32px" },
            }}
          >
            <ListItemText primary="Abilities" />
          </ListItem>
        </Link>
      </List>
      <Divider />
      <List>
        <Link to={"/changelog"}>
          <ListItem className="changelog">
            <InfoIcon />
            {"Lexiconica v" + sysInf.version}
          </ListItem>
        </Link>
      </List>
    </List>
  );
}

export default MobileNav;
