import React from "react";
import "./LoginUser.css";

function LoginUser() {
  return (
    <div className="container form-container ">
      <h2 className="title"> Sign In</h2>
      <div className=" m-4">
        <label className="form-label">Email or username</label>
        <input
          type="email"
          className="form-control"
          placeholder="Name@email.com"
        />
      </div>
      <div className=" m-4">
        <label className="form-label">Password</label>
        <input
          type="password"
          className="form-control"
          placeholder="**********"
        />
      </div>
      <div className="text-decoration-underline link-text m-3 ">
        <a href="/registration" className="link-danger">
          You don't Already have an account ? create a new one.
        </a>
      </div>
      <button className="btn login-button">Sign In</button>
    </div>
  );
}
export default LoginUser;
