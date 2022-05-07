const actions = require("./actions.json");
const adventure = require("./adventures.json");
const adventures = require("./adventure/index.js");
const backgrounds = require("./backgrounds.json");
const backgroundsFluff = require("./fluff-backgrounds.json");
const bestiary = require("./bestiary/index.js");
const book = require("./books.json");
const books = require("./book/index.js");
const charOpts = require("./charcreationoptions.json");
const charOptsFluff = require("./fluff-charcreationoptions.json");
const classes = require('./class/index.js');
const conDisFluff = require("./fluff-conditionsdiseases.json");
const conditionsDisease = require("./conditionsdiseases.json");
const cultsBoons = require("./cultsboons.json");
const deities = require("./deities.json");
const encounters = require("./encounters.json");
const feats = require("./feats.json");
const items = require("./items.json");
const itemsBase = require("./items-base.json");
const itemsFluff = require("./fluff-items.json");
const lang = require("./languages.json");
const langFluff = require("./fluff-languages.json");
const life = require("./life.json");
const loot = require("./loot.json");
const magicVariants = require("./magicvariants.json");
const masterCR = require("./msbcr.json");
const monsterfeatures = require("./monsterfeatures.json");
const monstertraits = require("./creaturetraits.json");
const names = require("./names.json");
const objects = require("./objects.json");
const optionalfeatures = require("./optionalfeatures.json");
const psionics = require("./psionics.json");
const races = require("./races.json");
const racesFluff = require("./fluff-races.json");
const recipeFluff = require("./fluff-recipes.json");
const recipes = require("./recipes.json");
const rewards = require("./rewards.json");
const spells = require('./spells/index.js');
const tables = require("./tables.json");
const trapsHazards = require("./trapshazards.json");
const variantrules = require("./variantrules.json");

module.exports = {
  actions,
  adventure,
  adventures,
  backgrounds,
  backgroundsFluff,
  bestiary,
  book,
  books,
  charOpts,
  charOptsFluff,
  classes,
  conditionsDisease,
  conDisFluff,
  cultsBoons,
  deities,
  encounters,
  feats,
  items,
  itemsFluff,
  itemsBase,
  lang,
  langFluff,
  life,
  loot,
  magicVariants,
  monsterfeatures,
  monstertraits,
  masterCR,
  names,
  objects,
  optionalfeatures,
  psionics,
  races,
  racesFluff,
  recipes,
  recipeFluff,
  rewards,
  spells,
  tables,
  trapsHazards,
  variantrules,
};
