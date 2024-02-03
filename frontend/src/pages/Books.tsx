import React from "react";
import { useState, useEffect } from "react";
import Axios from "axios";
import BookCard from "../components/bookCard";

interface Book {
  name: string;
  author: string;
  rate: number;
}

const Books = () => {
  const [booksArr, setBooksArr] = useState<Book[]>([]);
  const [name, setName] = useState("");
  const [author, setAuthor] = useState("");
  const [rate, setRate] = useState(0);

  useEffect(() => {
    Axios.get("http://localhost:3001/books")
      .then((res) => {
        console.log(res.data);
        setBooksArr(res.data);
      })
      .catch(() => {
        console.log("Error!");
      });
  }, []);

  const handleAddBook = (event: React.FormEvent) => {
    event.preventDefault();
    Axios.post("http://localhost:3001/createBook", {
      name: name,
      author: author,
      rate: rate,
    }).then((res) => {
      console.log("book created");
      console.log(res.data);
      setBooksArr((prevBooks) => [...prevBooks, res.data]);
    });

    setName("");
    setAuthor("");
    setRate(0);
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
            {booksArr.map((book, index) => (
              <li className="col-span-3" key={index}>
                <BookCard
                  name={book.name}
                  author={book.author}
                  rate={book.rate}
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
