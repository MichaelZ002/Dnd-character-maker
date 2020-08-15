const express = require('express');
const router = express.Router();
const db = require("../models");

router.get("/", (req, res) => {
    res.render('index');
});

router.get("/:name", (req, res) => {
    let id = req.param.name
    const found = db.character.find(character => character.name === targetChar)
    res.render("character", found )
})
module.exports = router