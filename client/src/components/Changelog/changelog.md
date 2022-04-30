# Changelog

All notable changes to this project will be documented in this file.

## Planned features

#### Main Categories:

- Characters/party
- Session Notes
- World locations
  - Countries
    - Towns
- Plot line formation
- More?

Key features:

- Have it so that any creature / item / magic item when hovered over shows a stat Block
  - if clicked it should expand and show the stat block until it or another is clicked, possibly even a popout window.
- easily relate specific 'pages' to others, ex: if character has a connection to a faction have it click to link to said faction.
- encounter builder including an automated CR calculation that then generates Loot and displays it.

### TODO list

- setup desired layouts for various pages.
- generate a monster population with bootstrapped tiles
- mirror layout for character sheets.

### Feature ideas list
- export data to comprehensive pdf with auto generated table of contents

---

## Unreleased

## Changed

## 0.1.5b - 2022-04-14

### Changes
- Modified layout to be more responsive to screen sizing.
- Removed unnecessary packages.
- Moved Development packages to the correct section.
- Organization of package.json file.
- Relocated the Changelog link location and implemented package.json version display for changelog link.
- Implemented base level api using [ExpressJS](https://expressjs.com/).

### Planned Steps
- Implement some form of backend / api for database. Likely using Express.
- Implement base data model for site.
- Begin designing data model for each additional item within the site.

## 0.1.5 - 2022-04-05

### Changes

- Initiated rewrite of code.
- Recreated base source from Create React App.
- Added [BlueprintJS](https://www.blueprintjs.com/)
- Added [Material-ui](https://www.mui.com/)
- Added [Markdown-to-JSX](https://www.github.com/probablyup/markdown-to-jsx) by ProbablyUp
- Implemented Changelog display functionality
- Re-implemented base layout of application and basic routing for pages.
- Modified layout to include current list of potential pages. 
- Implemented 5E SRD data import and display for some things.
- Created layout list display, currently rendering off SRD Monster data.
- Created Monster Tile display, Currently a simple square with monster's name.
- Created specific display route for Changelog, activation location to change.
- Added [React-Social-Icons](https://github.com/jaketrent/react-social-icons) by jaketrent.
- Added [Fantasy-Content-Generator](https://github.com/thomascgray/fantasy-content-generator) by thomascgray.
- Added [DND-Character-Sheets](https://github.com/DarylBuckle/dnd-character-sheets) by DarylBuckle and generated basic data template.

## 0.1.3 - 2018-12-22

### Added

- Added [React-Markdown](https://github.com/rexxars/react-markdown) by Rexxars
- Initiated rendering of changelog.md file at the route of /changelog
- Added blueprintjs/core - might remove, will see.
- Added TinyMCE - might remove, will see.

## 0.1.2 - 2018-12-21

### Added

- Added [React JSONschema Form](https://github.com/mozilla-services/react-jsonschema-form) by Mozilla Services

## 0.1.1 - 2018-12-16

### Added

- Added [RPG Awesome](https://nagoshiashumari.github.io/Rpg-Awesome/)
- Added [Material-ui](https://mui.com/)

## 0.1.0 - 2018-11-20

### Added

- Added [statblock5e](https://github.com/Valloric/statblock5e) by Valloric
- Added a basic js/html Character sheet from codepen [here](https://codepen.io/anon/pen/dWKdvm) from [Reddit](https://www.reddit.com/r/dndnext/comments/6b8gv5/5e_character_sheet_with_pure_htmlcss/dhmc7o6) by [/u/ConDar15](https://www.reddit.com/user/ConDar15)
