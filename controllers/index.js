var express = require("express");
var router = new express.Router();
var path = require('path');
var films = require('../client/src/models/films')();

router.use("/films", require("./films"))
router.use("/index", require("./films"))
router.use("/:id", require("./films"))


router.get("/", function(req, res){
  res.sendFile(path.join(__dirname + "../../client/build/index.html"))
})


module.exports = router;
