import { useEditBook } from "../store/store";
import { EditBookPopup } from "./editBookPopup";

interface Book {
  _id: string;
  name: string;
  author: string;
  rate: number;
  deleteBook: (id: string) => void;
}

const BookCard = ({ _id, name, author, rate, deleteBook }: Book) => {
  const { setEdit } = useEditBook();

  const handleEditBook = () => {
    setEdit(true, _id, name, author, rate);
  };

  return (
    <div
      id={_id}
      className="rounded-md shadow-md h-[200px] justify-between flex flex-col p-[10px] items-center"
    >
      <h1 className="text-lg font-bold">{name}</h1>
      <p className="text-lg">Author: {author}</p>
      <p className="text-lg">Rate: {rate}</p>
      <div className="flex gap-[15px]">
        <button
          onClick={handleEditBook}
          className="bg-green-400 px-[15px] text-white rounded-md py-[3px] mt-[10px]"
        >
          Edit
        </button>
        <button
          onClick={() => deleteBook(_id)}
          className="bg-red-400 px-[15px] text-white rounded-md py-[3px] mt-[10px]"
        >
          Delete
        </button>
      </div>

      {/* Edit book popup */}
      <EditBookPopup />
    </div>
  );
};

export default BookCard;
