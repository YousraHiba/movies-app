import React from "react";

function RegistrationUser() {
  return (
    <div className="container form-container ">
      <h2 className="title"> Registration</h2>
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
      <div className=" m-4">
        <label className="form-label">Confirm your password</label>
        <input
          type="password"
          className="form-control"
          placeholder="**********"
        />
      </div>
      <div className="text-decoration-underline link-text m-3 ">
        <a href="/user" className="link-danger">
          You Already have an account ? Sign In.
        </a>
      </div>
      <button className="btn login-button">Registration</button>
    </div>
  );
}

export default RegistrationUser;
