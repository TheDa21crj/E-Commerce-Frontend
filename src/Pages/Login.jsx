import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import LoginCss from "./Css/Login.module.css";
import { useNavigate } from "react-router-dom";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import img from "./../Img/sign.png";
// redux
import { toggleN } from "../redux/toggleNav";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

const Login = (props) => {
  useEffect(() => {
    document.title = "Login: The Da";
    check();
  });

  const _id = useSelector((state) => state.user._id);

  const check = async () => {
    if (_id !== "") {
      return navigate(
        "https://seashell-app-k5r84.ondigitalocean.app/my-account"
      );
    }
  };

  const [showUser, setUser] = useState({ email: "", password: "" });
  const [error, setError] = useState();
  const [showPassword, setPassword] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const DataInp = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setUser({ ...showUser, [name]: value });
  };

  const PostData = async () => {
    const { email, password } = showUser;

    const res = await fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    const r = await res.json();

    if (r.errors) {
      setTimeout(() => {
        setError("Invalid Credentials");
        setTimeout(() => {
          setError("");
        }, 3000);
      });
    } else if (!r.errors) {
      dispatch(toggleN({ toggle: "true" }));
      navigate("/my-account");
      window.location.reload();
    } else {
      setTimeout(() => {
        setError("Unwanted Error");
        setTimeout(() => {
          setError("");
        }, 3000);
      });
    }
  };

  return (
    <div className={LoginCss.LoginMDiv}>
      <div className={LoginCss.contentMDiv}>
        <div className={LoginCss.Div}>
          <div className={LoginCss.LeftDiv}>
            <p className={LoginCss.LoginPTag}>Login</p>
            <form action="" method="POST" className={LoginCss.LoginFormTag}>
              <input
                type="email"
                name="email"
                id={LoginCss.email}
                placeholder="Email"
                value={showUser.email}
                onChange={DataInp}
              />
              <div className={LoginCss.passwordDiv}>
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  id={LoginCss.password}
                  placeholder="Password"
                  value={showUser.password}
                  onChange={DataInp}
                />
                <div
                  id={LoginCss.ShowPasswordDiv}
                  onClick={() => {
                    setPassword(!showPassword);
                  }}
                >
                  {showPassword ? <RemoveRedEyeIcon /> : <VisibilityOffIcon />}
                </div>
              </div>
            </form>
            <div className={LoginCss.LoginDivBTN}>
              <button onClick={PostData} className={LoginCss.LoginBtn}>
                Login
              </button>
            </div>
            <br />
            <p className={LoginCss.AlreadyPTag}>
              Already have a Account? <Link to="/register">Register</Link>
            </p>
          </div>
          <div className={LoginCss.RightDiv}>
            <img src={img} alt="" className={LoginCss.ImgLogin} />
          </div>
        </div>
      </div>

      {error ? <p className={LoginCss.error}>{error}</p> : ""}
    </div>
  );
};

export default Login;
