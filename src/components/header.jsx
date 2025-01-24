import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
 const [dropDown,setDropDown] = useState(false);

 
 
  return (
    <header className="w-full bg-black flex flex-row justify-between h-32 border-black absolute items-center">
      <div className="ml-20 ">
        <a href="../pages/App.jsx" className="">
          <img src="/logo-1.png" alt="log" className=" w-32 h-" />
        </a>
      </div>
      <ul className="text-green-600 flex flex-row space-x-3 mx-20 font-league-gothic">
        {/* Replace <a> with <Link> for each navigation link */}
        <li>
          <Link
            to="/contact"
            className="text-xl bg-white rounded-md p-3 hover:bg-gray-100"
          >
            Contact
          </Link>
        </li>
        <li>
          <Link
            to="/login"
            className="text-xl bg-white rounded-md p-3 hover:bg-gray-100"
          >
            Login
          </Link>
        </li>
        <li>
          <Link
            to="/cart"
            className="text-xl bg-white rounded-md p-3 hover:bg-gray-100"
          >
            Cart
          </Link>
        </li>
      </ul>
    </header>
  );
};
export default Header;
