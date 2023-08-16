import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "../styles/ProductList.css";
import { moviesAction } from "../store/movieSlice";
import { Link } from "react-router-dom";

export default function ProductList() {
  const list = useSelector((state) => state.movies);
  const dispatch = useDispatch();
  const detailHadler = (id) => {
    dispatch(moviesAction.selectDetails(id));
  };
  return (
    <div className="product_container">
      {list.map((data) => (
        <div key={data.id} className="item_container">
          <div to="/productDetails" className="item_container_img">
            <img src={`https://image.tmdb.org/t/p/original/${data.poster_path}`} alt={data.original_title} />
          </div>
          <Link
            to="/productDetails"
            className="item_container_details"
            onClick={() => detailHadler(data.id)}
          >
            <h4>{data.original_title}</h4>
            <p>({data.vote_average})</p>
          </Link>
          <div className="item_container_desc">
            <p>{data.overview.substring(0, 60)}...</p>
          </div>
        </div>
      ))}
    </div>
  );
}
