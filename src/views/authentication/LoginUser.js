import React from "react";
import "./LoginUser.css";

function LoginUser() {
  return (
    <div className="container form-container ">
      <h2 className="title"> Registration</h2>
      <div class=" m-4">
        <label class="form-label">Email or username</label>
        <input
          type="email"
          className="form-control"
          placeholder="Name@email.com"
        />
      </div>
      <div className=" m-4">
        <label class="form-label">Password</label>
        <input
          type="password"
          className="form-control"
          placeholder="**********"
        />
      </div>
      <button className="btn login-button">Sign In</button>
    </div>
  );
}
export default LoginUser;
