var express = require("express");
var router = express.Router();

const Manager = require("../models/manager.js");

router.post("/auth", function (req, res) {
  let ad = req.body.Address.toUpperCase();
  console.log(ad);

  Manager.find(function (err, user) {
    if (err) {
      console.log(err);
    } else {
      console.log(user);
    }
  });

  Manager.findOne({ Address: ad }, function (err, user) {
    if (err) {
      console.log(err);
    } else {
      console.log(user);
      if (user) {
        res.json(user);
      } else {
        res.status(205).json({ err: "Address not found" });
      }
    }
  });
});

module.exports = router;
