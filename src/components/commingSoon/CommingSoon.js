import React, { useEffect, useState } from "react";
import "../shared/Component.css";
import axios from "axios";

function CommingSoon() {
  const [movies, setMovies] = useState([]);

  const basePosterPath = "https://image.tmdb.org/t/p/original";

  const url =
    " https://api.themoviedb.org/3/movie/upcoming?api_key=7ecfa22ca8129111ace52f17f65b1c17&language=en-US&page=1";
  useEffect(() => {
    axios.get(url).then((res) => {
      // setMovies(res.data.results[0]);
      console.log("movies are", movies);

      setMovies(res.data.results);
    });
  });
  return (
    <div className="row">
      <h3 className="title "> New Relases Movies</h3>

      {movies.map((movie) => (
        <div
          className="card col-2 container "
          style={{ width: "12rem", backgroundColor: "#222b31" }}
          key={movie.id}
        >
          {" "}
          <div
            className={
              movie.vote_average > 6.5 ? "cercle-blue" : "cercle-orange"
            }
          >
            {movie.vote_average}
          </div>
          <img
            className="card-img-top poster image"
            src={basePosterPath + movie.poster_path}
            alt="Poster"
          />{" "}
          <div className="overlay ">
            <div className="overview m-2">{movie.overview}</div>
          </div>
          <div className="card-body">
            <p className="card-title title"> {movie.original_title}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CommingSoon;
