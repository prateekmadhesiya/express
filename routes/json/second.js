const express = require("express");
const path = require("path");
const router = express.Router();

router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "data.json"));
});

router.all("*", (req, res) => {
  res.status(404);
  res.send("<h1>404 Not Found</h1>");
});

module.exports = router;
