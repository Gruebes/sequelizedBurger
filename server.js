var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");
var exphbs = require("express-handlebars");
var db = require("./models");


var port = process.env.PORT || 8080;
var app = express();


// app.use(express.static("public"));
app.use(express.static("public/assets"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.use(methodOverride("_method"));

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var routes = require("./controllers/burgers_controller.js");

app.use("/", routes);

// app.listen(port, function() {
//     console.log("App listening on port " + port);
// });

db.sequelize.sync().then(function() {
    app.listen(port, function() {
        console.log("App listening on PORT " + port);
    });
});