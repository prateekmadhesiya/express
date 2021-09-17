const express = require("express");
const router = express.Router();

router.get("/:id", (req, res) => {
  let time = req.params.id;

  setTimeout(() => {
    res.send(`<h1>You have been waited for ${time} sec</h1>`);
  }, time * 1000);
});

router.all("*", (req, res) => {
  res.status(404);
  res.send("<h1>404 Not Found</h1>");
});

module.exports = router;
