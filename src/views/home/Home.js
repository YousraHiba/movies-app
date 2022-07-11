import { useState } from "react";
import NewReleases from "../../components/newReleases/NewReleases";
import TrendingMovies from "../../components/trending/TrendingMovies";
import CommingSoon from "../../components/commingSoon/CommingSoon";
import LatestTvShow from "../../components/latestTvShow/LatestTvShow";
import PopularShow from "../../components/popularShow/PopularShow";

function Home() {
  const [NewReleasesStatu, setNewReleasesStatu] = useState(true);
  const [trendingMovies, settrendingMovies] = useState(false);
  const [commingMovies, setCommingMovies] = useState(false);
  const [latestTv, setLatestTv] = useState(false);
  const [popularTv, setPopularTv] = useState(false);
  const NewReleses = () => {
    setNewReleasesStatu(true);
    settrendingMovies(false);
    setCommingMovies(false);
    setPopularTv(false);
    setLatestTv(false);
  };
  const TrandingMovies = () => {
    setNewReleasesStatu(false);
    settrendingMovies(true);
    setCommingMovies(false);
    setPopularTv(false);
    setLatestTv(false);
  };
  const CommingMovies = () => {
    setNewReleasesStatu(false);
    settrendingMovies(false);
    setCommingMovies(true);
    setPopularTv(false);
    setLatestTv(false);
  };
  const ShowLatestTv = () => {
    setNewReleasesStatu(false);
    settrendingMovies(false);
    setCommingMovies(false);
    setPopularTv(false);
    setLatestTv(true);
  };
  const PopularTvShow = () => {
    setNewReleasesStatu(false);
    settrendingMovies(false);
    setCommingMovies(false);
    setLatestTv(false);
    setPopularTv(true);
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
            <div
              className={
                !commingMovies
                  ? "titles   col-12 p-2 "
                  : "titles   nav-bar-element-active col-12 p-2 "
              }
              onClick={CommingMovies}
            >
              {" "}
              Coming Soon
              {!commingMovies ? (
                ""
              ) : (
                <i className="fa-solid fa-arrow-right m-2"></i>
              )}
            </div>
            <div
              className={
                !latestTv
                  ? "titles   col-12 p-2 "
                  : "titles   nav-bar-element-active col-12 p-2 "
              }
              onClick={ShowLatestTv}
            >
              {" "}
              Latest Tv Shows
              {!latestTv ? "" : <i className="fa-solid fa-arrow-right m-2"></i>}
            </div>
            <div
              className={
                !popularTv
                  ? "titles   col-12 p-2 "
                  : "titles   nav-bar-element-active col-12 p-2 "
              }
              onClick={PopularTvShow}
            >
              {" "}
              Popular Tv Shows
              {!popularTv ? (
                ""
              ) : (
                <i className="fa-solid fa-arrow-right m-2"></i>
              )}
            </div>
          </div>
        </div>
        <div className="col-10 mt-5 mb-5 ">
          {NewReleasesStatu === true && <NewReleases />}
          {trendingMovies === true && <TrendingMovies />}
          {commingMovies === true && <CommingSoon />}
          {latestTv === true && <LatestTvShow />}
          {popularTv === true && <PopularShow />}
        </div>
      </div>
    </div>
  );
}

export default Home;
