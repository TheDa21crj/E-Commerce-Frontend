import React, { useState } from "react";
import AddCss from "./CSS/Add.module.css";
import CloseIcon from "@mui/icons-material/Close";
import Alert from "./Alert";

// redux
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { adduser } from "./../../redux/user";

export default function Update(props) {
  const [showUser, setUser] = useState({
    firstName: "",
    LastName: "",
    gender: "",
    PhoneNumber: "",
    dob: "",
  });

  const [showMsg, setMsg] = useState("");

  const _id = useSelector((state) => state.user._id);

  const dispatch = useDispatch();

  const DataInp = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setUser({ ...showUser, [name]: value });
  };

  const PostData = async () => {
    const { firstName, LastName, gender, PhoneNumber, dob } = showUser;

    if (firstName !== "" && LastName !== "" && gender !== "" && dob !== "") {
      if (PhoneNumber.length >= 10 && PhoneNumber.length <= 12) {
        console.log(showUser);

        const res = await fetch("/api/update", {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            _id,
            firstName,
            LastName,
            gender,
            PhoneNumber,
            dob,
          }),
        });

        const r = await res.json();
        console.log(r);

        setUser({
          firstName: "",
          LastName: "",
          gender: "",
          PhoneNumber: "",
          dob: "",
        });

        setMsg("");
        AuthMiddleware();
        props.state(false);
      } else {
        setMsg("Enter a valid Phone Number");
      }
    } else {
      setMsg("Please fill all the required feilds");
    }
  };

  const AuthMiddleware = async () => {
    try {
      const res = await fetch("/api/account", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
      });

      const data = await res.json();
      if (data.errors) {
        return;
      }
      if (data) {
        dispatch(
          adduser({
            _id: data.message._id,
            email: data.message.email,
            imgSrc: data.message.avatar,
            firstName: data.message.firstName,
            LastName: data.message.LastName,
            gender: data.message.gender,
            PhoneNumber: data.message.PhoneNumber,
          })
        );
      }
    } catch (error) {
      return;
    }
  };

  const changeSort = async (e) => {
    setUser({ ...showUser, gender: e.target.value });
  };

  return (
    <div className={AddCss.mDiv}>
      <div className={AddCss.ConDiv}>
        <p className={AddCss.AddAddress}>Update</p>
        <br />
        <CloseIcon
          onClick={() => props.state(false)}
          fontSize="large"
          className={AddCss.CloseIcon}
        />
        <div className={AddCss.inpDiv}>
          <input
            type="text"
            name="firstName"
            className={AddCss.impTag}
            onChange={DataInp}
            placeholder="First Name"
          />
          <input
            type="text"
            name="LastName"
            className={AddCss.impTag}
            onChange={DataInp}
            placeholder="Last Name"
          />
          <select name="gender" className={AddCss.impTag} onChange={changeSort}>
            <option value="Gender" selected disabled hidden>
              Gender
            </option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
          <input
            type="number"
            name="PhoneNumber"
            className={AddCss.impTag}
            onChange={DataInp}
            placeholder="Phone Number"
          />
          <input
            type="date"
            name="dob"
            className={AddCss.impTag}
            onChange={DataInp}
            placeholder="Date of Birth"
          />
          <button onClick={PostData} className={AddCss.LoginBtn}>
            ADD
          </button>
        </div>
      </div>
      {showMsg !== "" ? <Alert msg={showMsg} /> : ""}
    </div>
  );
}
