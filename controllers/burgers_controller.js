var express = require("express");
var router = express.Router();

var db = require("../models");


router.get("/", function(req, res) {
    // burger.selectAll(function(data) {
    //     var hbsObject = {
    //         burgers: data
    //     };
    //     console.log(hbsObject);
    //     res.render("index", hbsObject);
    // });


    db.burger.findAll({}).then(function(data) {
        console.log('------------------------------------');
        console.log(data);
        console.log('------------------------------------');

        var hbsObject = {
            burgers: data
        };
        res.render("index", hbsObject);
    });


});

router.post("/", function(req, res) {
    // burger.insertOne([
    //     "burger_name", "devoured"
    // ], [
    //     req.body.burger_name, req.body.devoured
    // ], function() {
    //     res.redirect("/");
    // });

    db.burger.create({
            burger_name: req.body.burger_name,
            devoured: req.body.devoured
        })
        .then(function() {
            res.redirect("/");
        });


});

router.put("/:id", function(req, res) {
    // var condition = "id = " + req.params.id;

    // console.log("condition", condition);

    // burger.updateOne({
    //     devoured: req.body.devoured
    // }, condition, function() {
    //     res.redirect("/");
    // });


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
    // var condition = "id = " + req.params.id;
    // console.log('------------------------------------');
    // console.log("deleting");
    // console.log('------------------------------------');
    // burger.deleteOne(condition, function() {
    //     res.redirect("/");
    // });


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