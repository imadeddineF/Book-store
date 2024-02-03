import React from "react";

interface Book {
  name: string;
  author: string;
  rate: number;
}

const BookCard = ({ name, author, rate }: Book) => {
  return (
    <div className="rounded-md shadow-md flex flex-col p-[10px] items-center">
      <h1 className="text-2xl font-bold">{name}</h1>
      <p className="text-lg">Author: {author}</p>
      <p className="text-lg">Rate: {rate}</p>
      <div className="flex gap-[15px]">
        <button className="bg-green-400 px-[15px] text-white rounded-md py-[3px] mt-[10px]">
          Edit
        </button>
        <button className="bg-red-400 px-[15px] text-white rounded-md py-[3px] mt-[10px]">
          Delete
        </button>
      </div>
    </div>
  );
};

export default BookCard;
