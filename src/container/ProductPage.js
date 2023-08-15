import React from "react";
import { useEffect, useState, useMemo } from "react";
import NavBar from "../container/NavBar";
import ProductList from "../container/ProductList";
import { moviesAction } from "../store/movieSlice";
import { useDispatch } from "react-redux";
import LoadingSpinner from "./LoadingSpinner";
const authKey = process.env.REACT_APP_AUTH_KEY;
export default function ProductPage() {
  const options = useMemo(
    () => ({
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: authKey,
      },
    }),
    []
  );
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
  }, [pages, dispatch, options]);
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
