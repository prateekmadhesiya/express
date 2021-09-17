const express = require("express");
const path = require("path");
const app = express();
const port = 8080;

app.use(express.static(path.join(__dirname, "public")));

app.use("/html", require(path.join(__dirname, "routes/html/quotes.js")));
app.use("/json", require(path.join(__dirname, "routes/json/second.js")));
app.use("/uuid", require(path.join(__dirname, "routes/uuid.js")));
app.use("/status", require(path.join(__dirname, "routes/status.js")));
app.use("/delay", require(path.join(__dirname, "routes/delay.js")));

app.all("*", (req, res) => {
  res.status(404);
  res.send("<h1>404 Not Found</h1>");
});

app.listen(port, () => {
  console.log(`Listening to port ${port}`);
});
