import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="bg-zinc-400 flex justify-between  py-2 px-20 ">
      <Link to="/" className="font-bold text-xl text-white">
      <h1>React MySql</h1>
      </Link>
        
        <ul className="flex gap-x-1">
          <li>
            <Link className="text-white px-2 py-1 font-bold text-xl" to="/">Home</Link>
          </li>
          <li>
            <Link className="text-white px-2 py-1 font-bold text-xl" to="/new">Create Task</Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
