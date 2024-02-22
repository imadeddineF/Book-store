import React, { useEffect, useState } from "react";
import { useEditBook } from "../store/store";

interface bookInfo {
  _id: string;
  name: string;
  author: string;
  rate: number;
  updateBook: (updatedBook: any) => void;
}

export const EditBookPopup = ({
  _id,
  name,
  author,
  rate,
  updateBook,
}: bookInfo) => {
  const [newName, setNewName] = useState(name);
  const [newAuthor, setNewAuthor] = useState(author);
  const [newRate, setNewRate] = useState(rate);
  const { edit, setEdit } = useEditBook();

  // Update book
  const handleUpdateBook = (e: React.FormEvent) => {
    e.preventDefault();
    // Axios.put(`${_api}/updateBook/${id}`).then((res) => {
    //   setBooksArr((prevBooks) =>
    //     prevBooks.map((book) => {
    //       if (book._id === id) {
    //         return res.data;
    //       }
    //       return book;
    //     })
    //   );
    // });
    const updatedBook = {
      _id,
      name: newName,
      author: newAuthor,
      rate: newRate,
    };
    console.log(updatedBook);
    setEdit(false);
  };

  return (
    <>
      {updateBook ? (
        <div>
          <div className="fixed top-0 left-0 z-50 w-full h-full bg-black/50"></div>
          <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white z-50 p-[20px] rounded-md">
            <h1 className="text-2xl font-bold mb-[20px]">Edit Book</h1>
            <form
              onSubmit={handleUpdateBook}
              className="grid grid-cols-12 gap-[10px]"
            >
              <input
                className="col-span-4 border border-gray-300 rounded-md py-[5px] px-[5px] outline-none"
                type="text"
                value={newName}
                placeholder="name"
                onChange={(e) => setNewName(e.target.value)}
              />
              <input
                className="col-span-4 border border-gray-300 rounded-md py-[5px] px-[5px] outline-none"
                type="text"
                value={newAuthor}
                placeholder="author"
                onChange={(e) => setNewAuthor(e.target.value)}
              />
              <input
                className="col-span-2 border border-gray-300 rounded-md py-[5px] px-[5px] outline-none"
                type="number"
                value={newRate}
                placeholder="rate"
                onChange={(e) => setNewRate(Number(e.target.value))}
              />
              <button
                className="col-span-2 bg-gray-200 transition-all duration-300 hover:bg-gray-300 border border-gray-300 rounded-md py-[5px] px-[5px] outline-none"
                type="submit"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      ) : null}
    </>
  );
};
