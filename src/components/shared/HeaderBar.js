import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./HeaderBar.css";

function HeaderBar() {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");

  return (
    <div>
      <nav className="navbar row" style={{ backgroundColor: "#f83745" }}>
        <div className="col-2 ">
          <h6
            className="logo"
            style={{ color: "#ffffff" }}
            onClick={() => navigate("/")}
          >
            MEDIA APP
          </h6>
        </div>
        <div className="col-6">
          {" "}
          <input
            className="form-control"
            type="text"
            placeholder="Search"
            aria-label="Search"
            onChange={(event) => setQuery(event.target.value)}
          />
        </div>
        <div
          className="text-decoration-underline link-title col-2"
          onClick={() => navigate("/user")}
        >
          Sign In{" "}
        </div>
        <div
          className="text-decoration-underline link-title col-2"
          onClick={() => navigate("/registration")}
        >
          Registration{" "}
        </div>
      </nav>
    </div>
  );
}
export default HeaderBar;
