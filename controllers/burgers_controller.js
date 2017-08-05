var express = require("express");
var router = express.Router();

var db = require("../models");


router.get("/", function(req, res) {
    db.burger.findAll({}).then(function(data) {
        var hbsObject = {
            burgers: data
        };
        res.render("index", hbsObject);
    });


});

router.post("/", function(req, res) {
    db.burger.create({
            burger_name: req.body.burger_name,
            devoured: req.body.devoured
        })
        .then(function() {
            res.redirect("/");
        });
});

router.put("/:id", function(req, res) {
    db.burger.update(req.body, {
            where: {
                id: req.params.id
            }
        })
        .then(function() {
            res.redirect("/");
        });
});

router.delete("/:id", function(req, res) {
    db.burger.destroy({
            where: {
                id: req.params.id
            }
        })
        .then(function() {
            res.redirect("/");
        });
});

module.exports = router;