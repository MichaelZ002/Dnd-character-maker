const db = require("../models");

module.exports = function (app) {
  app.post("/api/characters", (req, res) => {
    db.Character.create(req.body)
      .then((data) => {res.json(data)})
      .catch((err) => {throw err});
  });

  app.get("/api/characters", function (req, res) {
    db.Character.findAll()
      .then((data) => {res.json(data)})
      .catch((err) => {throw err});
  });

  app.delete("/api/characters/:id", function (req, res) {
    const id = req.params.id;
    db.Character.destroy({ where: { id } })
      .then((data) => {res.json(data)})
      .catch((err) => {throw err});
  });

  //currently only had the ability to change name, possibly change more info if needed
  app.put("/api/characters", function (req, res) {
    const { id, name } = req.body;
    db.Character.update(name, { where: { id } })
      .then((data) => {res.json(data)})
      .catch((err) => {throw err});
  });
};
