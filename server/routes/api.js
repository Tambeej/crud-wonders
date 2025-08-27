const express = require("express");
const router = express.Router();

router.get("/sanity", function (req, res) {
  res.end("Server is up and running");
});

// router.put("/wonder/:name", function (req, res) {
//   console.log("Someone's trying to make a PUT request");
//   let wonder = req.params.name;
//   console.log(wonder);
//   wonders.find((w) => w.name === wonder).visited = true;
//   res.end();
// });

// router.get("/wonders", function (req, res) {
//   res.send(wonders);
// });

// router.delete("/wonder/:name", function (req, res) {
//   console.log("Someone's trying to make a DELETE request");
//   let wonder = req.params.name;
//   console.log(wonder);
//   let wondersIndex = wonders.findIndex((w) => w.name === wonder);
//   wonders.splice(wondersIndex, 1);
//   res.end();
// });

module.exports = router;
