const express = require("express");
const app = express();

const Datastore = require("happn-nedb");
const srd = new Datastore({ filename: "./public/data/srd", autoload: true });
const usrd = new Datastore({ filename: "./public/data/usrd", autoload: false });
const campaign = new Datastore({
  filename: "./public/data/campaign",
  autoload: true,
});
// You can issue commands right away

const srdData = require("./src/data/usrd/");

//default post/get routes.

app.get("/", (req, res) => {
  return res.send("Received a GET HTTP method");
  //return res.send(srd);
});

app.post("/", (req, res) => {
  //const srd = new Datastore({ filename: './public/data/srd', autoload: true });
  var doc = {
    actions: {},
    adventure: {},
    adventures: {},
    backgrounds: {},
    backgroundsFluff: {},
    bestiary: {},
    book: {},
    books: {},
    charOpts: {},
    charOptsFluff: {},
    classes: {},
    conDisFluff: {},
    conditionsDisease: {},
    cultsBoons: {},
    deities: {},
    encounters: {},
    feats: {},
    items: {},
    itemsBase: {},
    itemsFluff: {},
    lang: {},
    langFluff: {},
    life: {},
    loot: {},
    magicVariants: {},
    masterCR: {},
    monsterfeatures: {},
    monstertraits: {},
    names: {},
    objects: {},
    optionalfeatures: {},
    psionics: {},
    races: {},
    racesFluff: {},
    recipeFluff: {},
    recipes: {},
    rewards: {},
    spells: {},
    tables: {},
    trapsHazards: {},
    variantrules: {},
  };
  usrd.insert(doc);

  return res.send(srdData);
});

app.put("/", (req, res) => {
  return res.send("Received a PUT HTTP method");
});

app.delete("/", (req, res) => {
  return res.send("Received a DELETE HTTP method");
});

//srd api routes

app.get("/srd", (req, res) => {
  //return res.send('Received a GET HTTP method');
  return res.send(srd);
});

app.get("/usrd", (req, res) => {
  //return res.send('Received a GET HTTP method');
  return res.send(usrd);
});

app.listen(process.env.port || 2048);

console.log("Web Server is listening at port " + (process.env.port || 2048));
