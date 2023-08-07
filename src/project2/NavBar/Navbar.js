import React, { useState } from "react";
import "./Navbar.css";
import {
  AiOutlineMenu,
  AiOutlineClose,
  AiOutlineHome,
  AiOutlineShoppingCart,
  AiOutlineLogin,
  AiOutlineContacts,
} from "react-icons/ai";
import { BiCheese } from "react-icons/bi";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav === true);
  };
  return (
    <div
      id="nav"
      className=" flex justify-between items-center h-24 max-w-[1240px] mx-auto text-blue-900 uppercase  text-xl font-semibold"
    >
      <Link to="/" className="w-full text-3xl text-red-500 font-bold">
        ONDC
      </Link>
      <ul className=" hidden md:flex px-3 h-4 font-bold">
        <div className="list">
          <i className=" cursor-pointe px-4">
            <AiOutlineHome />
          </i>
          <span className="bg-blue-200 rounded-full px-4">
            <Link to="/">HOME</Link>
          </span>
        </div>
      </ul>
      <ul className=" hidden md:flex px-3 h-4 font-bold">
        <div className="list">
          <i className=" cursor-pointer px-4">
            <AiOutlineShoppingCart />
          </i>
          <span className="bg-blue-200 rounded-full px-4">
            <Link to="/grocery">GROCERY</Link>
          </span>
        </div>
      </ul>
      <ul className=" hidden md:flex px-3 h-4 font-bold">
        <div className="list">
          <i className=" cursor-pointer px-4">
            <BiCheese />
          </i>
          <span className="bg-blue-200 rounded-full px-4">
            <Link to="/dairy">DAIRY</Link>
          </span>
        </div>
      </ul>
      <ul className=" hidden md:flex px-3 h-4 font-bold">
        <div className="list">
          <i className=" cursor-pointer px-4">
            <AiOutlineContacts />
          </i>
          <span className="bg-blue-200 rounded-full px-4">
            <Link to="/contact">CONTACT</Link>
          </span>
        </div>
      </ul>
      <ul className=" hidden md:flex px-3 h-4 font-bold">
        <div className="list">
          <i className=" cursor-pointer px-4">
            <AiOutlineLogin />
          </i>
          <span className="bg-blue-200 rounded-full px-4">
            <Link to="/login">LOGIN</Link>
          </span>
        </div>
      </ul>
      {/* code for mobile */}
      <div className="cursor-pointer block md:hidden " onClick={handleNav}>
        {!nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <div
        className={
          !nav
            ? "md:hidden fixed left-0 top-0 w-[60%]  border-r-blue-100 bg-blue-200 ease-in-out duration-500 "
            : "fixed left-[-100%]"
        }
      >
        <h1 className="w-full text-3xl font-bold m-4 text-blue-900">ONDC</h1>
        <ul className=" p-2 m-2 w-full">
          <li className="p-2 border-b bg-blue-200">
            <Link to="/">HOME</Link>
          </li>
          <li className="p-2 border-b bg-blue-200">
            <Link to="/grocery">GROCERY</Link>
          </li>
          <li className="p-2 border-b bg-blue-200">
            <Link to="/dairy">DAIRY</Link>
          </li>
          <li className="p-2 border-b bg-blue-200">
            <Link to="/contact">CONTACT</Link>
          </li>
          <li className="p-2 border-b bg-blue-200">
            <Link to="/login">LOGIN</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
