var express = require("express");
var router = express.Router();

const User = require("../models/originator");


router.get("/graph_data", function (req, res) {
  data = {
    time: [1, 2, 3, 4, 5, 6, 7, 8, 9],
    value: [20, 21, 22, 23, 24, 25, 26, 27, 28],
  };
  res.json(data);
});

router.post("/", function (req, res) {
  data = [
    {
      metadata: [],
      url: "https://api.coingecko.com/api/v3/coins/nft-token",
      name: "NFT1",
      //random image
      img_src: "https://source.unsplash.com/random/",
      id: "1",
      details: "this is nft 1",
    },
    {
      metadata: [],
      url: "https://api.coingecko.com/api/v3/coins/nft-token",
      name: "NFT2",
      img_src: "https://source.unsplash.com/random/",
      id: "2",
      details: "this is nft 2",
    },
    {
      metadata: [],
      url: "https://api.coingecko.com/api/v3/coins/nft-token",
      name: "NFT3",
      img_src: "https://source.unsplash.com/random/",
      id: "3",
      details: "this is nft 3",
    },
  ];

  if (req.body.type == "all") {
    res.json(data);
  } else if (req.body.type == "one") {
    if (!req.body.id) {
      res.status(404).json({ err: "id not found" });
    } else {
      response_data = null;
      for (let i = 0; i < data.length; i++) {
        if (data[i].id == req.body.id) {
          response_data = data[i];
          break;
        }
      }
      if (response_data == null) {
        res.status(404).json({ err: "id not found" });
      } else {
        res.json(response_data);
      }
    }
  }
});

module.exports = router;
