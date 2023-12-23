const express = require("express");
const cors = require("cors");
const multer = require("multer");
const path = require("path");
const mongoose = require("mongoose");

const app = express();
const storage = multer.memoryStorage();
const upload = multer({storage: storage});
app.use(express.json());
app.use(cors());


app.get("/", (req, res) => {
  res.send({Message: "Default Home Page"});
})

app.post("/upload", upload.single(""), (req, res) => {
  res.send("Thanks Bobby");
})



app.listen(3004, () => {
  console.log("Running on Port 3004");
})