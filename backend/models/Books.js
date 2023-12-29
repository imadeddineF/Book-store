const mongoose = require("mongoose");

const bookSchema = mongoose.Schema({
  name: String,
  author: String,
});

const bookModel = mongoose.model("book", bookSchema);

module.exports = bookModel;
