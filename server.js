const express = require("express");
const app = express();
const PORT = process.env.PORT || 8000;
const exphbs = require("express-handlebars");
const db = require("./models");
const compression = require('compression')
const routes = require("./controllers/dnd_controller");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
app.use(compression())

require("./routes/html-routes.js")(app);
require("./routes/api-routes.js")(app);


app.use(routes);
app.use(express.static("public"));

db.sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Great Success!`);
  });
});
