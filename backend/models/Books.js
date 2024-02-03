const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  name: String,
  author: String,
  rate: Number,
});

const bookModel = mongoose.model("book", bookSchema);

module.exports = bookModel;
