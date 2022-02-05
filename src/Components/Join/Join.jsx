import React from "react";
import { Link } from "react-router-dom";
import { ImGoogle } from "react-icons/im";
import { ImAppleinc } from "react-icons/im";
import "./join.css";
const Join = (props) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("sub");
    props.history.replace("/dachboard");
  };
  return (
    <div className="join-container container-fluid">
      <header className="join-header">
        <img
          src="https://1000logos.net/wp-content/uploads/2017/03/Linkedin-Logo.png"
          alt=""
        />
      </header>
      <div className="form">
        <form onSubmit={(e) => handleSubmit(e)}>
          <label htmlFor="useremail">Email:</label>
          <br />
          <input
            placeholder="just click continue"
            type="email"
            id="useremail"
          />
          <br />
          <label htmlFor="pass">Password (6 or more characters):</label>
          <br />
          <input type="password" id="pass" />
          <br />
          <button className="submit">Continue</button>
          <hr />
          <div className="text-center">or</div>
          <div className="regis-links">
            <Link to="/withgoogle">
              <ImGoogle className="m-2 fs-2" /> Join with Google
            </Link>
            <Link to="/withapple">
              <ImAppleinc className="m-2 fs-2" /> Join with Apple
            </Link>
          </div>
          <div className="sign text-center">
            Aready have an account?
            <Link to="/signin">Sign in</Link>
          </div>
        </form>
        <h5 className="text-center">
          Looking to create a page for a business?
          <Link to="/help">Get help</Link>
        </h5>
      </div>
    </div>
  );
};

export default Join;
