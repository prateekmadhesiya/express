const express = require("express");
const router = express.Router();
const http = require("http");

router.get("/:id", (req, res) => {
  let id = req.params.id;
  let statusCode = http.STATUS_CODES;

  if (id in statusCode) {
    //res.status(id);
    res.send(`<h1>Code -- ${id} And Message --${statusCode[id]} </h1>`);
  } else {
    res.status(422);
    res.send(`<h1>Invalid status code --${id} </h1>`);
  }
});

router.all("*", (req, res) => {
  res.status(404);
  res.send("<h1>404 Not Found</h1>");
});

module.exports = router;
