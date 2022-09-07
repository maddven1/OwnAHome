const { response } = require("express");
var express = require("express");

const pinataSDK = require("@pinata/sdk");
const pinata = pinataSDK(
  "897dac02da4c04e82fde",
  "ff84b33e6edf34dea82ccf78afee513b7798954f641c059b535830b426e24876"
);

var router = express.Router();

// Load User model
const User = require("../models/originator");
const IPFSHash = require("../models/ipfsHashes");

// GET request
// Getting all the users
router.post("/", function (req, res) {
  if (req.body.type == "approved") {
    User.find({ approved: true }, function (err, users) {
      if (err) {
        console.log(err);
      } else {
        res.json(users);
      }
    });
  } else if (req.body.type == "pending") {
    User.find({ approved: false }, function (err, users) {
      if (err) {
        console.log(err);
      } else {
        res.json(users);
      }
    });
  }
});

router.post("/get", function (req, res) {
  if (req.body.type == "all") {
    User.find({}, function (err, users) {
      if (err) {
        console.log(err);
      } else {
        res.json(users);
      }
    });
  } else if (req.body.type == "one") {
    
    User.findOne({ _id: req.body.id }, function (err, user) {
      if (err) {
        console.log(err);
      } else {
        console.log(user);
        res.json(user);
      }
    });
  }
});

router.post("/update", function (req, res) {
  let data = req.body;
  delete data._id;
  User.updateOne({ _id: req.body.id }, { $set: data }, function (err, user) {
    if (err) {
      console.log(err);
    } else {
      User.findOne({ _id: req.body.id }, function (err, user) {
        if (err) {
          console.log(err);
        } else {
          const options = {
            pinataMetadata: {
              name: user.firstName,
            },
            pinataOptions: {
              cidVersion: 0,
            },
          };
          pinata.pinJSONToIPFS(user,options).then((hash) => {
            IPFSHash.findOne({ id: req.body.id }, function (err, ipfsHash) {
              if (err) {
                console.log(err);
              } else {
                if (ipfsHash) {
                  ipfsHash.hash = hash.IpfsHash;
                  ipfsHash.save();
                } else {
                  let ipfsHash = new IPFSHash({
                    id: req.body.id,
                    hash: hash.IpfsHash,
                  });
                  ipfsHash.save();
                }
              }
            });
          });
        }
      });
      res.json(user);
    }
  });
});

// NOTE: Below functions are just sample to show you API endpoints working, for the assignment you may need to edit them

// POST request
// Register a property
router.post("/register", (req, res) => {
  const newUser = new User({
    firstName: req.body.firstName,
    Address: req.body.Address,
    propertytype: req.body.propertytype,
    contactname: req.body.contactname,
    email: req.body.email,
    Area: req.body.Area,
    date: req.body.date,
    Description: req.body.Description,
  });

  // console.log(newUser.firstName);
  newUser
    .save()
    .then((user) => {
      res.status(200).json(user);
    })
    .catch((err) => {
      console.log(err);
      res.status(400).send(err);
    });
});

module.exports = router;
