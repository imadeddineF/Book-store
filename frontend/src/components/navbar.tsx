import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex top-0 right-0 w-full justify-between px-[25px] py-[10px] bg-slate-300">
      <div>
        <h1>Atlas Books</h1>
      </div>

      <div className="flex items-center gap-[15px]">
        <button className="border bg-gray-400 hover:bg-gray-300 duration-300 transition-all  rounded-md border-slate-700 py-[3px] px-[10px]">
          <Link to={`/signIn`}>Sign In</Link>
        </button>
        <button className="border bg-gray-400 hover:bg-gray-300 duration-300 transition-all  rounded-md border-slate-700 py-[3px] px-[10px]">
          <Link to={`/signUp`}>Sign Up</Link>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
