const express = require("express");
const router = express.Router();
const db = require("../models");

router.get("/", (req, res) => {
  res.render("index");
});

router.get("/characters", function (req, res) {
  db.Character.findAll().then(function (results) {
    console.log(results);
    const newResults = results.map((result) => {
      return result;
    });
    res.render("characters", { characters: newResults });
  });
});

router.get("/:name", (req, res) => {
  let name = req.param.name;
  const found = db.Character.findOne({where: { name }});
  res.render("character", found);
});
module.exports = router;
