// import React from "react";
import React, {useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
  const [details, setDetails] = useState({
    userid: "",
    password: "",
  });

  const navigate = useNavigate();
  async function onsubmits(e) {
    e.preventDefault(e);
    const { userid, password } = details;

    axios
      .post("http://localhost:6000/api/users/login", {
        email: userid,
        password: password,
      })
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("userid", res.data.details.userid);
        localStorage.setItem("name", res.data.details.email);
        navigate("/Blog App");
      })
      .catch((err) => alert("Enter valid crendentials"));
  }


  return (
    <form onSubmit={(e) => onsubmits(e)}>
    <div className="container">
      <div className="login">
        <img
          id="logo"
          className="login-items"
          alt="logo"
          src="https://www.google.com/url?sa=i&url=https%3A%2F%2Ficons8.com%2Ficons%2Fset%2Fblog&psig=AOvVaw3r2WoxsQV-_HixD_yKBv1a&ust=1672316313782000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCMjA5u-lnPwCFQAAAAAdAAAAABAE"
        />
        <span id="credential-signin" className="login-items">
          Enter your credentials to access your account
        </span>
        <input
          type="text"
          id="userid"
          value={details.userid}
          onChange={(e) => setDetails({ ...details, userid: e.target.value })}
          className="login-items"
          placeholder="Email ID"
        />
        <input
          type="password"
          value={details.password}
          onChange={(e) => setDetails({ ...details, password: e.target.value })}
          className="login-items"
          placeholder="Password"
        />
        <button id="signin" className="login-items" onClick={(e)=>{onsubmits(e)}}>
          Sign In
        </button>
        <Link to="/signup" id="link">
          <span id="signup" className="login-items">
            Sign Up
          </span>
        </Link>
      </div>

      <p className="extra-info">
        Need an account? <span id="extra-span">Sign up</span>
      </p>
    </div>
    </form>
  );
}

export default Login;










