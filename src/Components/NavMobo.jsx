import React, { useState, useEffect } from "react";
import NCss from "./Css/NavMobo.module.css";
import PersonIcon from "@mui/icons-material/Person";
import DropDownMobo from "./DropDownMobo";
import CloseIcon from "@mui/icons-material/Close";
import "./Css/Nav.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function NavMobo() {
  const [show, setShow] = useState(false);
  const [showimg, setimg] = useState("");

  useEffect(() => {
    if (show) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [show]);

  const toggle = useSelector((state) => state.toggle.toggle);
  const imgSrc = useSelector((state) => state.user.imgSrc);

  return (
    <div className={NCss.mDiv}>
      <div className={NCss.ChilDiv}>
        <div className={NCss.HamBurger} onClick={() => setShow(!show)}>
          {show ? (
            <CloseIcon fontSize="large" />
          ) : (
            <div>
              <div className={NCss.burger1}></div>
              <div className={NCss.burger2}></div>
              <div className={NCss.burger3}></div>
            </div>
          )}
        </div>
        <div>
          <Link to="/" className="LinkStyle">
            <h1 className={NCss.h1}>The Da</h1>
          </Link>
        </div>
        <div>
          <div className={NCss.PersonIcon}>
            {/* <PersonIcon fontSize="large" /> */}
            {/*  */}
            {imgSrc == "" ? (
              <PersonIcon fontSize="large" className={NCss.IconsClass0} />
            ) : (
              <img src={imgSrc} alt="" className={NCss.UserIcon} />
            )}
            {/*  */}
            <div className={NCss.SoWDivPersonIcon}>
              <div className={NCss.arrow}></div>
              {toggle == "true" ? (
                <div>
                  <div id={NCss.LinkTagPDiv}>
                    <Link to="/my-account" className="LinkStyle">
                      My Account
                    </Link>
                  </div>
                  <div id={NCss.LinkTagPDiv}>
                    <Link to="/ShopCart" className="LinkStyle">
                      Cart
                    </Link>
                  </div>
                  <div id={NCss.LinkTagPDiv}>
                    <Link to="/wishlist" className="LinkStyle">
                      Wishlist
                    </Link>
                  </div>
                  <div id={NCss.logoutPDiv}>
                    <Link to="/logout" className="LinkStyle">
                      Logout
                    </Link>
                  </div>
                </div>
              ) : (
                <Link to="/login" className="LinkStyle">
                  Login/Register
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className={NCss.DropDownMobo} id={show ? "show" : "hide"}>
        {show ? <DropDownMobo /> : ""}
      </div>
    </div>
  );
}
