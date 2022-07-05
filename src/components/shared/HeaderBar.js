import React from "react";
import { useNavigate } from "react-router-dom";

function HeaderBar() {
  const navigate = useNavigate();
  return (
    <div>
      <nav className="navbar row" style={{ backgroundColor: "#f83745" }}>
        <div className="col-2 ">
          <h6 style={{ color: "#ffffff" }}>MEDIA APP</h6>
        </div>
        <div className="col-6">
          {" "}
          <input
            className="form-control"
            type="text"
            placeholder="Search"
            aria-label="Search"
          />{" "}
        </div>
        <div className="col-4 ">
          <div
            className="text-decoration-underline"
            style={{ color: "#ffffff" }}
            onClick={() => navigate("/user")}
          >
            Sign In{" "}
          </div>
          <div
            className="text-decoration-underline"
            style={{ color: "#ffffff" }}
            onClick={() => navigate("/registration")}
          >
            Registration{" "}
          </div>
        </div>
      </nav>
    </div>
  );
}
export default HeaderBar;
