import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import AdminCss from "./Css/AdminLogin.module.css";
import img from "./../Img/adminLogo.png";

export default function AdminLogin() {
  const [showUser, setUser] = useState({ username: "", password: "" });

  const navigate = useNavigate();

  const DataInp = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setUser({ ...showUser, [name]: value });
  };

  const PostData = async () => {
    const { username, password } = showUser;

    const res = await fetch("/api/admin/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
      }),
    });

    const r = await res.json();
    console.log(r);

    if (r.errors) {
      console.log("Error");
    } else if (!r.errors) {
      console.log("Login Admin");
      navigate("/admin/post-content");
    } else {
      console.log("Unwanted Error");
    }
  };

  return (
    <div className={AdminCss.mDiv}>
      <div className={AdminCss.ContDiv}>
        <form action="" method="POST">
          <div className={AdminCss.UsernameDiv}>
            <input
              type="text"
              name="username"
              id=""
              placeholder="username"
              value={showUser.username}
              onChange={DataInp}
              autoComplete="off"
            />
          </div>
          <div className={AdminCss.PasswordDiv}>
            <input
              type="password"
              name="password"
              id=""
              placeholder="password"
              value={showUser.password}
              onChange={DataInp}
              autoComplete="off"
            />
          </div>
        </form>
        <button onClick={PostData} className={AdminCss.LoginBtn}>
          Login
        </button>
        <div className={AdminCss.logoDiv}>
          <img src={img} alt="" className={AdminCss.adminLogoDiv} />
        </div>
      </div>
      <Link to="/" className="LinkStyle" id={AdminCss.navigateDiv}>
        Home
      </Link>
    </div>
  );
}
