import { useEffect, useState } from "react";
import { useEditBook } from "../store/store";
import axios from "axios";

export const EditBookPopup = () => {
  const _api = "http://localhost:3001";
  const {
    edit,
    editedBookId,
    editedBookName,
    editedBookAuthor,
    editedBookRate,
    setEdit,
  } = useEditBook();
  const [name, setName] = useState(editedBookName);
  const [author, setAuthor] = useState(editedBookAuthor);
  const [rate, setRate] = useState(editedBookRate);

  useEffect(() => {
    setName(editedBookName);
    setAuthor(editedBookAuthor);
    setRate(editedBookRate);
  }, [editedBookName, editedBookAuthor, editedBookRate]);

  // Update book
  const handleConfirmUpdateBook = async () => {
    setEdit(false);
    try {
      // Make a PUT request to update the book
      const response = await axios.put(`${_api}/books/${editedBookId}`, {
        name,
        author,
        rate,
      });

      // Check if the request was successful
      if (response.status === 200) {
        console.log("Book updated successfully:", response.data);
        // Close the popup
        setEdit(false);
      } else {
        console.error("Failed to update book:", response.statusText);
      }
    } catch (error: any) {
      console.error("Error updating book:", error.message);
    }
  };

  // Cancel update book
  const handleCancelUpdateBook = () => {
    setEdit(false);
  };

  // close the popup when click outside
  useEffect(() => {
    const closePopup = (e) => {
      if (e.target.classList.contains("bg-black/15")) {
        setEdit(false);
      }
    };
    window.addEventListener("click", closePopup);
    return () => window.removeEventListener("click", closePopup);
  }, [setEdit]);

  return (
    <>
      {edit ? (
        <div>
          <div className="fixed top-0 left-0 z-50 w-full h-full bg-black/15"></div>
          <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white z-50 p-[20px] rounded-md">
            <h1 className="text-2xl font-bold mb-[20px]">Edit Book</h1>

            <div className="grid grid-cols-12 gap-[10px]">
              <input
                className="col-span-4 border border-gray-300 rounded-md py-[5px] px-[5px] outline-none"
                type="text"
                value={name}
                placeholder="name"
                onChange={(e) => setName(e.target.value)}
              />
              <input
                className="col-span-4 border border-gray-300 rounded-md py-[5px] px-[5px] outline-none"
                type="text"
                value={author}
                placeholder="author"
                onChange={(e) => setAuthor(e.target.value)}
              />
              <input
                className="col-span-2 border border-gray-300 rounded-md py-[5px] px-[5px] outline-none"
                type="number"
                value={rate}
                placeholder="rate"
                onChange={(e) => setRate(e.target.value)}
              />
            </div>

            <div className="flex text-white justify-end gap-[10px] mt-[30px]">
              <button
                className="col-span-2 bg-red-400 transition-all duration-300 hover:bg-red-300 rounded-md py-[6px] px-[10px] outline-none"
                onClick={handleCancelUpdateBook}
              >
                Cancel
              </button>
              <button
                className="col-span-2 bg-green-400 transition-all duration-300 hover:bg-green-300 brder rounded-md py-[6px] px-[10px] outline-none"
                onClick={handleConfirmUpdateBook}
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};
