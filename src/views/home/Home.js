import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import NewReleases from "../../components/newReleases/NewReleases";
import TrendingMovies from "../../components/trending/TrendingMovies";
import LoginUser from "../authentication/LoginUser";

function Home() {
  const [NewReleasesStatu, setNewReleasesStatu] = useState(true);
  const [trendingMovies, settrendingMovies] = useState(false);

  const NewReleses = () => {
    setNewReleasesStatu(true);
    settrendingMovies(false);
  };
  const TrandingMovies = () => {
    setNewReleasesStatu(false);
    settrendingMovies(true);
  };
  return (
    <div className="App ">
      <div className="row">
        <div className="col-2">
          <div className=" nav-bar  ">
            <div
              className={
                !NewReleasesStatu
                  ? "titles  col-12 mt-5 p-2"
                  : "titles  nav-bar-element-active col-12 mt-5 p-2"
              }
              onClick={NewReleses}
            >
              New Relases
              {!NewReleasesStatu ? (
                ""
              ) : (
                <i className="fa-solid fa-arrow-right m-2 "></i>
              )}
            </div>

            <div
              className={
                !trendingMovies
                  ? "titles   col-12 p-2 "
                  : "titles   nav-bar-element-active col-12 p-2 "
              }
              onClick={TrandingMovies}
            >
              {" "}
              Trending
              {!trendingMovies ? (
                ""
              ) : (
                <i className="fa-solid fa-arrow-right m-2"></i>
              )}
            </div>
            <div className="titles "> Coming Soon</div>
            <div className="titles">favorites</div>
          </div>
        </div>

        <div className="col-10 mt-5 mb-5 ">
          {" "}
          {NewReleasesStatu === true && <NewReleases />}
          {trendingMovies === true && <TrendingMovies />}
        </div>
      </div>
    </div>
  );
}

export default Home;
