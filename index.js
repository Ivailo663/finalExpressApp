const express = require("express");
const app = express();
const path = require("path");

const PORT = process.env.PORT || 3002;

// app.get("/", (req, res) => {
//   res.status(200).send("Hello from the server");
// });
// app.use("/static", express.static("client/public"));
app.use(express.static("./build"));

// app.get("/", function (req, res) {
//   res.sendFile("./client/build/");
// });

app.listen(PORT, () => {
  console.log("listening...");
});
