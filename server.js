const express = require("express");
const app = express();
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Hello World, Welcome to a Electron app");
});

app.use("/", router);

app.listen(process.env.port || 2048);

console.log("Web Server is listening at port " + (process.env.port || 2048));
