import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "../styles/ShowDetails.css";
import { AiFillHome } from "react-icons/ai";
import { Link } from "react-router-dom";
import LoadingSpinner from "./LoadingSpinner";

export default function ShowDetails() {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZWE4ZmYxNjFiOTZiMDU1YzIwZDI5Mzc3Mjc1NGI5NCIsInN1YiI6IjY0ZGFmYTBlMzcxMDk3MDEzOTQ2MzVlMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.hwM1zKVz35H4HmJYcrlsTNRcPhIEZt7uZwNjbd1r9qE",
    },
  };
  const movieId = useSelector((state) => state.selectedID);
  const [selected, setSelected] = useState({});
  const [cast, setCast] = useState({});
  const [flag, setFlag] = useState(false);
  useEffect(() => {
    const url = `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`;
    const url2 = `https://api.themoviedb.org/3/movie/${movieId}/credits?language=en-US`;
    const fetchData = async () => {
      await fetch(url, options)
        .then((response) => response.json())
        .then((response) => {
          setSelected(response);
        })
        .catch((err) => console.error(err));
    };
    const fetchData2 = async () => {
      await fetch(url2, options)
        .then((response) => response.json())
        .then((response) => {
          const castName = response.cast.filter(
            (data) => data.known_for_department === "Acting"
          );
          const director = response.crew.find(
            (data) => data.known_for_department === "Directing"
          );
          setCast({
            castValues: castName.map((data) => data.name),
            director: director.name,
          });
        })
        .catch((err) => console.error(err));
      setFlag(true);
    };
    fetchData();
    fetchData2();
  }, [movieId]);
  return (
    <div>
      <div className="detailsTitle">
        <h3>Movie Details</h3>
        <Link to="/" className="navHomeBtn">
          <AiFillHome className="homeBtn" />
        </Link>
      </div>
      {flag ? (
        <div className="details_content">
          <div className="details_content_img">
            <img src={selected.poster_path} alt={selected.original_title} />
          </div>
          <div className="details_content_details">
            <p className="details_content_details_title">
              {selected.original_title}
              <span className="details_content_details_rating">
                ({selected.vote_average})
              </span>
            </p>
            <p className="details_content_details_subtitle">
              Year : {selected.release_date.substring(0, 4)}| Length :{" "}
              {Math.floor(Number(selected.runtime) / 60)}Hours:
              {Number(selected.runtime) % 60}Minutes| Director: {cast.director}
            </p>
            <p>Cast : {cast.castValues.join(",")}</p>
            <p className="details_content_details_desc">
              Description: {selected.overview}
            </p>
          </div>
        </div>
      ) : (
        <LoadingSpinner />
      )}
    </div>
  );
}
