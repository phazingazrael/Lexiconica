const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const level = require("level");
const sub = require("subleveldown");
const cors = require("cors");

const db = level("db");

const srd = sub(db, "srd", { valueEncoding: "json" });
const usrd = sub(db, "usrd", { valueEncoding: "json" });
const campaign = sub(db, "campaign", { valueEncoding: "json" });

const srdData = require("./src/data/srd/");
const usrdData = require("./src/data/usrd/");
var defaultCampaign = {
  title: "Example Campaign",
  author: "",
  world: [
    {
      name: "Players",
      description: "Player Characters within the campaign",
      players: [],
    },
    {
      name: "Locations",
      description: "World Locations",
    },
    {
      name: "NPCs",
      description: "Non-Player Characters within the campaign",
      npcs: [],
    },
    {
      name: "Organizations",
      description: "Any Factions or Organizations",
    },
    {
      name: "Families",
      description: "NPC Or Player Families and their connections",
    },
  ],
  campaign: [
    {
      name: "Quests",
      description: "Player Characters within the campaign",
    },
    {
      name: "Notes",
      description: "Player Characters within the campaign",
    },
    {
      name: "Items",
      description: "Player Characters within the campaign",
    },
    {
      name: "Events",
      description: "Player Characters within the campaign",
    },
    {
      name: "Abilities",
      description: "Player Characters within the campaign",
    },
  ],
};

const app = express();
const port = process.env.PORT || 5000;

var whitelist = [
  "http://localhost:5000",
  "http://localhost:3000",
  "localhost:5000",
  "localhost:3000",
];
var corsOptions = {
  origin: [
    "http://localhost:5000",
    "http://localhost:3000",
    "localhost:5000",
    "localhost:3000",
  ],
};

app.use(cors(corsOptions));
app.options("/api/srd", cors()); // enable pre-flight request
app.options("/api/usrd", cors()); // enable pre-flight request
app.options("/api/campaign", cors()); // enable pre-flight request

app.use(bodyParser.json({ limit: "150mb", extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));

//default post/get routes.
app.get("/", (req, res) => {
  return res.send("Received a GET HTTP method");
});

app.post("/", (req, res) => {
  return res.send("Received a POST HTTP method");
});

app.put("/", (req, res) => {
  return res.send("Received a PUT HTTP method");
});

app.delete("/", (req, res) => {
  return res.send("Received a DELETE HTTP method");
});

//srd api routes
//example api calls
// app.get("/api/teams", (req, res) => {
//   console.log("sending teams");
//   teamsDb.get("teams", function (err, teams) {
//     res.send(teams);
//   });
// });
//
// app.post("/api/teams", (req, res) => {
//   console.log(req.body);
//   teamsDb.put("teams", req.body, function (err) {
//     teamsDb.get("teams", function (err, teams) {
//       console.log(JSON.stringify(teams));
//       console.log("team posted");
//     });
//   });
//   res.send(`${JSON.stringify(req.body)}`);
// });
//
// app.delete("/api/teams", (req, res) => {
//   console.log(req.body);
//   teamsDb.del("teams", function (err) {
//     if (err)
//       // handle I/O or other error
//       console.log(err);
//   });
// });

app.get("/api/srd", (req, res) => {
  console.log("sending SRD");
  db.get("srd", function (err, srd) {
    res.send(srd);
  });
  return res.send(srdData);
});

app.get("/api/usrd", (req, res) => {
  return res.send(usrdData);
});

app.get("/api/campaign", (req, res) => {
  return res.send(defaultCampaign);
});

app.post("/api/campaign", (req, res) => {
  campaign.put(defaultCampaign);
  res.send("campaign-put");
  srd.put(srdData);
  res.send("srd-put");
  usrd.put(usrdData);
  res.send("usrd-put");
  return res.send(defaultCampaign);
});


if (process.env.NODE_ENV === "production") {
  // Serve any static files
  app.use(express.static(path.join(__dirname, "client/build")));

  // Handle React routing, return all requests to React app
  app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "client/build", "index.html"));
    //dexDb.clear();
  });
}


app.listen(port, () => console.log(`Listening on port ${port}`));
