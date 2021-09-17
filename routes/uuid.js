const express = require("express");
const Uuid = require("uuid");
const router = express.Router();

router.get("/", (req, res) => {
  let id = Uuid.v4();
  res.json({ uuid: `${id}` });
});

router.all("*", (req, res) => {
  res.status(404);
  res.send("<h1>404 Not Found</h1>");
});
module.exports = router;
