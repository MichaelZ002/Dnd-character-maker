const express = require("express");
const router = express.Router();
const db = require("../models");

router.get("/", (req, res) => {
  res.render("index");
});

router.get("/characters", async function (req, res) {
  let allCharacters = await db.Character.findAll({})
  console.log(allCharacters)
    res.render("characters", { character: allCharacters });
     });

router.get("/:name", async function(req, res){
  let name = req.params.name;
  console.log(name)
  const found = await db.Character.findOne({where: { name }});
  console.log(found)
  res.render("character", found);
});

router.get("/:classes", async function(req, res){
  let name = req.params.classes;
  console.log(classes)
  res.render("classes")
});
module.exports = router;
