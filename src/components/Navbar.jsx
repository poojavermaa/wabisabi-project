import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white text-black px-4 lg:px-36 md:px-[1rem] sm:px-[16rem] py-4 shadow-lg fixed top-0 left-0 w-full z-50">
      <div className="flex justify-between items-center">
        <Link to="/"><div className="text-xl font-bold font-mono">WABISABI PROJECT</div></Link>
        <div>
          <ul className="flex items-center">
            <Link to="/cart">
            <li className="px-4 cursor-pointer">
              <span className="material-symbols-outlined">shopping_cart</span>
            </li>
            </Link>
            <Link to="/login">
            <li className="px-4 cursor-pointer">
              <span className="material-symbols-outlined">login</span>
            </li>
            </Link>
            <li className="px-4">|</li>
            <li
              onClick={handleMenuClick}
              className="px-4 cursor-pointer relative">
              {isOpen ?  (<span className="text-2xl font-semibold">X</span>) : (<span className="material-symbols-outlined">menu</span>)}</li>
          </ul>
          {isOpen && (
            <ul className="absolute right-0 mt-2 w-48 bg-white text-gray-800 rounded-lg shadow-lg">
              <Link to="/">
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                WorkShops
              </li>
              </Link>
              <Link to="/collection">
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                Collections
              </li>
              </Link>
              <Link to="/notes">
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                Notes
              </li>
              </Link>
            </ul>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;