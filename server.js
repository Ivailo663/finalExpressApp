const express = require("express");
const app = express();
const path = require('path')

const PORT = process.env.PORT || 5002;

// app.get("/", (req, res) => {
//   res.send("hello from server");
// });

app.use(express.static("./client/build/"));

app.get("*", (req, res) => {
  res.sendFile(express.static(path.join(__dirname, "./client/build/"))
});

app.listen(PORT, () => {
  console.log("listening....");
});
