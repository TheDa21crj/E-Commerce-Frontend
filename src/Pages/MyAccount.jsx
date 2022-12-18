import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Profile from "../Components/Account/Profile";
import MyAddress from "../Components/Account/MyAddress";
import Myorders from "../Components/Account/Myorders";
import MACss from "./Css/MyAccount.module.css";
import "./Css/Product.css";
import ProfileMobo from "./../Components/Account/Mobile/Profile";
import MyAddressMobo from "./../Components/Account/Mobile/MyAddress";
import MyordersMobo from "./../Components/Account/Mobile/Myorders";
// redux
import { useSelector } from "react-redux";

export default function MyAccount() {
  useEffect(() => {
    document.title = "My Account";
  }, []);

  const [showProfileState, setProfileState] = useState("My Orders");
  const [showProfileStateDes, setProfileStateDes] = useState("");

  const ShowProfileState = async (e) => {
    setProfileState(e.target.innerHTML);
    setProfileStateDes(e.target.innerHTML);
  };

  const _id = useSelector((state) => state.user._id);
  const email = useSelector((state) => state.user.email);
  const imgSrc = useSelector((state) => state.user.imgSrc);
  const firstName = useSelector((state) => state.user.firstName);
  const LastName = useSelector((state) => state.user.LastName);
  const gender = useSelector((state) => state.user.gender);
  const PhoneNumber = useSelector((state) => state.user.PhoneNumber);

  return (
    <div>
      <div className={MACss.mdiv}>
        <div className={MACss.leftDiv}>
          <img src={imgSrc} alt="" className={MACss.ImgTag} />
          <p className={MACss.PTagEmail}>
            <span> {email}</span>
          </p>
          <p
            className={MACss.pTags}
            id={showProfileState === "Profile" ? "showshow" : ""}
            onClick={ShowProfileState}
          >
            Profile
          </p>
          <p
            className={MACss.pTags}
            id={showProfileState === "My Orders" ? "showshow" : ""}
            onClick={ShowProfileState}
          >
            My Orders
          </p>
          <p
            className={MACss.pTags}
            id={showProfileState === "My Addresses" ? "showshow" : ""}
            onClick={ShowProfileState}
          >
            My Addresses
          </p>
          <div className={MACss.LinkTagDiv}>
            <Link to="/logout" className="LinkStyle" id={MACss.LogoutLinkTag}>
              Logout
            </Link>
          </div>
        </div>
        <div
          className={MACss.rightDiv}
          id={showProfileState === "" ? "" : "showshowProfileState"}
        >
          {showProfileState === "Profile" && (
            <Profile
              email={email}
              id={_id}
              firstName={firstName}
              lastName={LastName}
              gender={gender}
              phone={PhoneNumber}
              state={setProfileState}
            />
          )}
          {showProfileState === "My Orders" && (
            <Myorders id={_id} state={setProfileState} />
          )}
          {showProfileState === "My Addresses" && (
            <MyAddress id={_id} state={setProfileState} />
          )}
        </div>
        <div
          className={MACss.MobomDiv}
          id={showProfileStateDes === "" ? "" : "showProfileStateDes"}
        >
          {showProfileStateDes === "Profile" && (
            <ProfileMobo
              email={email}
              id={_id}
              firstName={firstName}
              lastName={LastName}
              gender={gender}
              phone={PhoneNumber}
              state={setProfileStateDes}
            />
          )}
          {showProfileStateDes === "My Orders" && (
            <MyordersMobo id={_id} state={setProfileStateDes} />
          )}
          {showProfileStateDes === "My Addresses" && (
            <MyAddressMobo id={_id} state={setProfileStateDes} />
          )}
        </div>
      </div>
    </div>
  );
}
