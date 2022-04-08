import React from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import "./index.css";

const dnd = require("dnd5-srd");
//const monsters = dnd.data.monsters;
const srd = dnd.data;
//console.log("Aboleth HP "+aboleth.hit_points);
//console.log(srd);

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
              <Typography>{item.name}</Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default MonsterTile;
