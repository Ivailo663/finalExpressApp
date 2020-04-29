const express = require("express");
const app = express();
const path = require("path");

const PORT = process.env.PORT || 5002;

app.use(express.static("./client/build/"));

app.get("*", (req, res) => {
  res.sendFile("index.html", { root: path.join(__dirname, "./client/build") });
});

app.listen(PORT, () => {
  console.log("listening....");
});
