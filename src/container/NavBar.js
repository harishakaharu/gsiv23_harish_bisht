import React from "react";
import { AiOutlineSearch, AiFillHome } from "react-icons/ai";
import "../styles/NavBar.css";

export default function NavBar() {
  return (
    <div className="nav_container">
      <div className="NavInput">
        <button className="navBtn">
          <AiOutlineSearch className="searchBtn" />
        </button>
        <input type="text" placeholder="Search" />
      </div>
      <button className="navHomeBtn">
        <AiFillHome className="homeBtn" />
      </button>
    </div>
  );
}
