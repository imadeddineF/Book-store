import "./App.css";
import { useState, useEffect } from "react";
import Axios from "axios";

interface Book {
  name: string;
  author: string;
}

function App() {
  const [booksArr, setBooksArr] = useState<Book[]>([]);
  const [name, setName] = useState("");
  const [author, setAuthor] = useState("");

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
    }).then((res) => {
      console.log("book created");
      console.log(res.data);
      setBooksArr((prevBooks) => [...prevBooks, res.data]);
    });

    setName("");
    setAuthor("");
  };

  return (
    <>
      <h1>GET</h1>
      <ul>
        {booksArr.map((book, index) => (
          <li key={index}>
            <p>Name : {book.name}</p>
            <p>Author : {book.author}</p>
          </li>
        ))}
      </ul>

      <h1>POST</h1>
      <form onSubmit={handleAddBook}>
        <input
          type="text"
          placeholder="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        <button type="submit">Send</button>
      </form>
    </>
  );
}

export default App;
