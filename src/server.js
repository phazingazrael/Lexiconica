const express = require("express");
const app = express();
const port = process.env.PORT || 5000;

const JsonDB = require("node-json-db");
const Config = require("node-json-db/dist/lib/JsonDBConfig");

const srdb = new JsonDB(new Config("SRDB", true, false, "/"));

// This displays message that the server running and listening to specified port
app.listen(port, () => console.log(`Listening on port ${port}`));

// create a GET route
app.get("/express_backend", (req, res) => {
  res.send({ express: "YOUR EXPRESS BACKEND IS CONNECTED TO REACT" });
});
