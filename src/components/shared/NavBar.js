import React, { useState } from "react";
import "./NavBar.css";
function NavBar(props) {
  const [statu, setStatu] = useState(true);
  const NewReleses = () => {
    props.onSubmit(statu);
    setStatu(true);
  };
  const TrandingMovies = () => {
    setStatu(false);
    props.onSubmit(statu);
  };
  const CommingSoon = () => {
    setStatu(false);
    props.onSubmit(statu);
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
