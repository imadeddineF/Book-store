import React from "react";
import { useState, useEffect } from "react";
import Axios from "axios";
import BookCard from "../components/bookCard";

interface Book {
  name: string;
  author: string;
  rate: number;
  _id: string;
}

const Books = () => {
  const [booksArr, setBooksArr] = useState<Book[]>([]);
  const [name, setName] = useState("");
  const [author, setAuthor] = useState("");
  const [rate, setRate] = useState(0);
  const _api = "http://localhost:3001";

  // Get all books
  useEffect(() => {
    Axios.get(`${_api}/books`)
      .then((res) => {
        setBooksArr(res.data);
      })
      .catch(() => {
        console.log("Error!");
      });
  }, []);

  // Add a book
  const handleAddBook = (event: React.FormEvent) => {
    event.preventDefault();
    if (name && author && rate) {
      Axios.post(`${_api}/createBook`, { name, author, rate }).then((res) => {
        setBooksArr((prevBooks) => [...prevBooks, res.data]);
      });
    }
    setName("");
    setAuthor("");
    setRate(0);
  };

  // Delete a book
  const handleDeleteBook = (id: string) => {
    Axios.delete(`${_api}/deleteBook/${id}`).then(() => {
      setBooksArr((prevBooks) => prevBooks.filter((book) => book._id !== id));
    });
  };

  // Update a book
  const handleUpdateBook = (id: string) => {
    console.log("Update book with id: ", id);
  };

  return (
    <div className="min-h-screen ">
      <div className="pt-[30px] pb-[50px] px-[40px]">
        <div>
          <h1 className="font-bold text-red-400">POST</h1>
          <form
            onSubmit={handleAddBook}
            className="grid grid-cols-12 gap-[10px]"
          >
            <input
              className="col-span-4 border border-gray-300 rounded-md py-[5px] px-[5px] outline-none"
              type="text"
              placeholder="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              className="col-span-4 border border-gray-300 rounded-md py-[5px] px-[5px] outline-none"
              type="text"
              placeholder="author"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
            />
            <input
              className="col-span-2 border border-gray-300 rounded-md py-[5px] px-[5px] outline-none"
              type="number"
              placeholder="rate"
              value={rate}
              onChange={(e) => setRate(e.target.valueAsNumber)}
            />
            <button
              className="col-span-2 bg-gray-200 transition-all duration-300 hover:bg-gray-300 border border-gray-300 rounded-md py-[5px] px-[5px] outline-none"
              type="submit"
            >
              Send
            </button>
          </form>
        </div>

        <div>
          <h1 className="font-bold text-red-400 mt-[20px]">GET</h1>
          <ul className="grid grid-cols-12 gap-[20px]">
            {booksArr.map(({ name, author, rate, _id }) => (
              <li className="col-span-3" key={_id}>
                <BookCard
                  name={name}
                  author={author}
                  rate={rate}
                  _id={_id}
                  deleteBook={handleDeleteBook}
                  updateBook={handleUpdateBook}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Books;
