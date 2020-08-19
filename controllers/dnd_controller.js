const express = require("express");
const router = express.Router();
const db = require("../models");

router.get("/", (req, res) => {
  res.render("index");
});

router.get("/characters", async function (req, res) {
  let allCharacters = await db.Character.findAll({})
  console.log(allCharacters)
  //   .then(function (results) {
  //   res.json(results)
  //   const newResults = results.map((result) => {
  //     return result;
  //   });
    res.render("characters", { character: allCharacters });
  // });
});

router.get("/:name", async function(req, res){
  let name = req.params.name;
  console.log(name)
  const found = await db.Character.findOne({where: { name }});
  console.log(found)
  res.render("character", found);
});
module.exports = router;
