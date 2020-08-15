const express = require('express');
const app = express();
const PORT = process.env.PORT || 8000;
const exphbs = require("express-handlebars");
const db = require('./models')

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));


<<<<<<< HEAD
const routes = require('./controllers/dnd_controllers');
=======
const routes = require('./controllers/dnd_controller');
>>>>>>> 354c37ccf3f625d5fabc9041319c20e7b511bfb6
app.use(routes);
<<<<<<< HEAD
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars"); 
app.use(express.static("public"));
=======

>>>>>>> 9fd28f2d04107fb286add13269a7c88a676598b6
db.sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Great Success!`);
  });
});