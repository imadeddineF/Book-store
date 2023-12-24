const express = require("express");
const app = express();
const mongoose = require("mongoose");
mongoose.connect(
  "mongodb+srv://imad-ed-fl:ufiesPI7sWeQacL9@cluster0.cyjtgvu.mongodb.net/book-store?retryWrites=true&w=majority"
);

app.get("/", (req, res) => {
  res.send("Hello from server!");
});

app.listen("3001", () => {
  console.log("hehe");
});
