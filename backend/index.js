// Create server
const express = require("express");
const app = express();
const _PORT = 3001;

// Enable CORS for all routes
const cors = require("cors");
app.use(cors());

// Middleware to Parse JSON
app.use(express.json());

const userName = "imad-ed-fl";
const password = "ufiesPI7sWeQacL9";
const db = "book-store";

// Connect to MongoDB
const mongoose = require("mongoose");
mongoose.connect(
  `mongodb+srv://${userName}:${password}@cluster0.cyjtgvu.mongodb.net/${db}?retryWrites=true&w=majority`
);

// Import book model
const BookModel = require("./models/Books");

// GET Endpoint to Retrieve Books
app.get("/books", async (req, res) => {
  const books = await BookModel.find();
  res.json(books);
  console.log("connected");
});

// POST Endpoint to Create a Book
app.post("/createBook", async (req, res) => {
  const newBook = new BookModel(req.body);
  await newBook.save();
  res.json(newBook);
});

// DELETE Endpoint to Delete a Book
app.delete("/deleteBook/:id", async (req, res) => {
  const id = req.params.id;
  await BookModel.findByIdAndDelete(id);
  res.json("Book Deleted");
});

// Start the Server
app.listen(_PORT, () => {
  console.log("testing");
});
