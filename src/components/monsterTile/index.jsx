import React from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import "./index.css";


const srd = require("../../data/srd");


function MonsterTile() {
  return (
    <div>
      <Grid container spacing={2}>
        {srd.monsters.map((item, i) => (
          <Grid
            item
            key={i}
            sx={{
              height: 150,
              width: 150,
            }}
          >
            <Paper
              sx={{
                height: 140,
                width: 140,
              }}
            >
              <Typography data-source={item.name}>{item.name}</Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default MonsterTile;
