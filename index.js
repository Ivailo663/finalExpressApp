const express = require("express");
const app = express();

const PORT = process.env.PORT || 5002;

app.get("/", (req, res) => {
  res.send("hello from server");
});

app.listen(PORT, () => {
  console.log("listening....");
});
