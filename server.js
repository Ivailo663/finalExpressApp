const express = require("express");
const app = express();
const path = require("path");
const dotenv = require("dotenv");
const env = process.env.NODE_ENV;

dotenv.config();

const PORT = process.env.PORT || 5002;

if (env === "dev") {
  app.use(express.static("./client/build/"));
  app.get("*", (req, res) => {
    res.sendFile("index.html", {
      root: path.join(__dirname, "./client/build"),
    });
  });
}

app.listen(PORT, () => {
  console.log(process.env.NODE_ENV);
});
