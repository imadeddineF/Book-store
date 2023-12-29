// Create server
const express = require("express");
const app = express();
app.use(express.json());
const cors = require("cors");

// Enable CORS for all routes
app.use(cors());

// Connect to DB
const mongoose = require("mongoose");
mongoose.connect(
  "mongodb+srv://imad-ed-fl:ufiesPI7sWeQacL9@cluster0.cyjtgvu.mongodb.net/book-store?retryWrites=true&w=majority"
);

// Import book model
const BookModel = require("./models/Books");

// GET
app.get("/books", async (req, res) => {
  const books = await BookModel.find();
  res.json(books);
});

// POST
app.post("/createBook", async (req, res) => {
  const newBook = new BookModel(req.body);
  await newBook.save();

  res.json(newBook);
});

app.listen("3001", () => {
  console.log("testing");
});
