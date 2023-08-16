import React, { useState } from "react";
import { AiOutlineSearch, AiFillHome } from "react-icons/ai";
import "../styles/NavBar.css";
import { useDispatch, useSelector } from "react-redux";
import { moviesAction } from "../store/movieSlice";
export default function NavBar() {
  const dispatch = useDispatch();
  const list = useSelector((state) => state.movies);
  const [searched, setSearched] = useState('');
  const refresh = () => window.location.reload(true);
  const searchHandler = () => {
    if (searched !== "") {
      const filteredList = list.filter(
        (data) => data.original_title.toLowerCase().match(searched) !== null
      );
      dispatch(moviesAction.addList(filteredList));
    }
  };
  return (
    <div className="nav_container">
      <div className="NavInput">
        <button className="navBtn">
          <AiOutlineSearch className="searchBtn" onClick={searchHandler} />
        </button>
        <input
          type="text"
          placeholder="Search"
          value={searched}
          onChange={(e) => setSearched(e.target.value.toLowerCase())}
        />
      </div>
      <div to="/" className="navHomeBtn" onClick={refresh}>
        <AiFillHome className="homeBtn" />
      </div>
    </div>
  );
}
