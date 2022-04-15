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
import PublicIcon from "@mui/icons-material/PublicOutlined";
import ContactsIcon from "@mui/icons-material/ContactsOutlined";
import GroupIcon from "@mui/icons-material/GroupOutlined";
import FamilyRestroomIcon from "@mui/icons-material/FamilyRestroomOutlined";
import MenuBookOutlinedIcon from "@mui/icons-material/MenuBookOutlined";
import AssignmentLateOutlinedIcon from "@mui/icons-material/AssignmentLateOutlined";
import HistoryEduOutlinedIcon from "@mui/icons-material/HistoryEduOutlined";
import ArchitectureOutlinedIcon from "@mui/icons-material/ArchitectureOutlined";
import TodayOutlinedIcon from "@mui/icons-material/TodayOutlined";
import ApiOutlinedIcon from "@mui/icons-material/ApiOutlined";

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
      <ListItem button>
        <ListItemIcon>
          <PublicIcon />
        </ListItemIcon>
        <ListItemText primary="World" />
      </ListItem>
      <List component="div" disablePadding className="subNav">
        <Link to={"/characters"}>
          <ListItem sx={{ pl: 4 }}>
            <ListItemIcon>
              <ContactPageOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary="Players" />
          </ListItem>
        </Link>
        <Link to={"/locations"}>
          <ListItem sx={{ pl: 4 }}>
            <ListItemIcon>
              <MapIcon />
            </ListItemIcon>
            <ListItemText primary="Locations" />
          </ListItem>
        </Link>
        <Link to={"/npcs"}>
          <ListItem sx={{ pl: 4 }}>
            <ListItemIcon>
              <ContactsIcon />
            </ListItemIcon>
            <ListItemText primary="NPC's" />
          </ListItem>
        </Link>
        <Link to={"/organizations"}>
          <ListItem sx={{ pl: 4 }}>
            <ListItemIcon>
              <GroupIcon />
            </ListItemIcon>
            <ListItemText primary="Organizations" />
          </ListItem>
        </Link>
        <Link to={"/families"}>
          <ListItem sx={{ pl: 4 }}>
            <ListItemIcon>
              <FamilyRestroomIcon />
            </ListItemIcon>
            <ListItemText primary="Families" />
          </ListItem>
        </Link>
      </List>
      <Divider />
      <ListItem button>
        <ListItemIcon>
          <MenuBookOutlinedIcon />
        </ListItemIcon>
        <ListItemText primary="Campaign" />
      </ListItem>
      <List component="div" disablePadding className="subNav">
        <Link to={"/quests"}>
          <ListItem sx={{ pl: 4 }}>
            <ListItemIcon>
              <AssignmentLateOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary="Quests" />
          </ListItem>
        </Link>
        <Link to={"/journals"}>
          <ListItem sx={{ pl: 4 }}>
            <ListItemIcon>
              <HistoryEduOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary="Journals" />
          </ListItem>
        </Link>
        <Link to={"/items"}>
          <ListItem sx={{ pl: 4 }}>
            <ListItemIcon>
              <ArchitectureOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary="Items" />
          </ListItem>
        </Link>
        <Link to={"/events"}>
          <ListItem sx={{ pl: 4 }}>
            <ListItemIcon>
              <TodayOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary="Events" />
          </ListItem>
        </Link>
        <Link to={"/abilities"}>
          <ListItem sx={{ pl: 4 }}>
            <ListItemIcon>
              <ApiOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary="Abilities" />
          </ListItem>
        </Link>
      </List>
    </List>
  );
}

export default Name;
