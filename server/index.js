const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send({Message: "Default Home Page"});
})



app.listen(3004, () => {
  console.log("Running on Port 3004");
})