import React from "react";
import { useEffect, useState } from "react";
import NavBar from "../container/NavBar";
import ProductList from "../container/ProductList";
import { moviesAction } from "../store/movieSlice";
import { useDispatch } from "react-redux";
import LoadingSpinner from "./LoadingSpinner";

export default function ProductPage() {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZWE4ZmYxNjFiOTZiMDU1YzIwZDI5Mzc3Mjc1NGI5NCIsInN1YiI6IjY0ZGFmYTBlMzcxMDk3MDEzOTQ2MzVlMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.hwM1zKVz35H4HmJYcrlsTNRcPhIEZt7uZwNjbd1r9qE",
    },
  };
  const [pages, setPages] = useState(1);
  const [flag, setFlag] = useState(false);
  const prevHandler = () => {
    if (pages > 1) {
      setPages((prev) => --prev);
    }
  };
  const nextHandler = () => {
    if (pages <= 100) {
      setPages((prev) => ++prev);
    }
  };
  const dispatch = useDispatch();
  useEffect(() => {
    setFlag(false);
    const url = `https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=${pages}`;
    const fetchData = async () => {
      await fetch(url, options)
        .then((response) => response.json())
        .then((response) => {
          const res = response.results;
          const sortedList = res.sort(
            (data1, data2) =>
              Number(new Date(data1.release_date)) -
              Number(new Date(data2.release_date))
          );
          dispatch(moviesAction.addList(sortedList));
          setFlag(true);
        })
        .catch((err) => console.error(err));
    };
    fetchData();
  }, [pages, dispatch]);
  return (
    <div>
      <NavBar />
      <div>
        {flag ? <ProductList /> : <LoadingSpinner />}
        <div className="buttons">
          <button onClick={prevHandler} disabled={pages === 1}>
            Prev
          </button>
          <button onClick={nextHandler}>Next</button>
        </div>
      </div>
    </div>
  );
}
