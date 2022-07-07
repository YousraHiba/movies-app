import React, { useState } from "react";
import "./NavBar.css";
function NavBar(props) {
  const [statu, setStatu] = useState(true);
  const [trendingMovies, setTrendingMovies] = useState(false);

  const NewReleses = () => {
    props.onSubmit(statu);
    setStatu(true);

    // console.log("NewReleasesStatu 1  ===>", NewReleasesStatu);
  };
  const TrandingMovies = () => {
    setStatu(false);
    props.onSubmit(statu);

    // props.onSubmit(trendingMovies);
    // console.log("NewReleasesStatu 2  ===>", NewReleasesStatu);
  };
  const CommingSoon = () => {
    setStatu(false);
    props.onSubmit(statu);

    // props.onSubmit(trendingMovies);
    // console.log("NewReleasesStatu 2  ===>", NewReleasesStatu);
  };
  return (
    <div className=" nav-bar  ">
      <div
        className={
          !statu
            ? "titles p-2 btn btn-link col-12"
            : "titles p-2 btn btn-link nav-bar-element-active col-12"
        }
        onClick={NewReleses}
      >
        New Relases
      </div>

      <div className="titles p-2 " onClick={TrandingMovies}>
        {" "}
        Trending
      </div>
      <div className="titles p-2" onClick={CommingSoon}>
        {" "}
        Coming Soon
      </div>
    </div>
  );
}

export default NavBar;
