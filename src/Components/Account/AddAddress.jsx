import React, { useState, useEffect } from "react";
import AddCss from "./CSS/Add.module.css";
import CloseIcon from "@mui/icons-material/Close";
import Alert from "./Alert";

export default function AddAddress(props) {
  const [showHide, setHide] = useState(false);

  const [showUser, setUser] = useState({
    name: "",
    address: "",
    pinCode: "",
    town: "",
    state: "",
    country: "",
    phoneNumber: "",
  });

  const [showMsg, setMsg] = useState("");

  const PostData = async () => {
    const { name, address, pinCode, town, state, country, phoneNumber } =
      showUser;

    const res = await fetch("/api/Address/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        address,
        pinCode,
        town,
        state,
        country,
        phoneNumber,
      }),
    });

    const r = await res.json();
    if (r && r === "Address Added") {
      setMsg("Address Added");
    } else if (r && r.message === "same") {
      setMsg("Alredy Exists");
    }
  };

  const DataInp = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setUser({ ...showUser, [name]: value });
  };

  useEffect(() => {
    if (showMsg !== "") {
      setInterval(function () {
        setMsg("");
      }, 5000);
      if (showMsg === "Address Added") {
        props.state(false);
        setHide(false);
      }
    }
  }, [showMsg]);

  useEffect(() => {
    if (showHide) {
      document.getElementById("overflowHide").style.height = "91vh";
      document.getElementById("overflowHide").style.overflowX = "hidden";
      document.getElementById("overflowHide").style.overflowY = "scroll";
    } else {
      document.getElementById("overflowHide").style.height = "auto";
      document.getElementById("overflowHide").style.overflowX = "auto";
      document.getElementById("overflowHide").style.overflowY = "auto";
    }

    // console.log(d);
  }, [props.state]);

  return (
    <div className={AddCss.mDiv}>
      <div className={AddCss.ConDiv}>
        <p className={AddCss.AddAddress}>Add Address</p>
        <br />
        <CloseIcon
          onClick={() => props.state(false)}
          fontSize="large"
          className={AddCss.CloseIcon}
        />
        <div className={AddCss.inpDiv}>
          <input
            type="text"
            name="name"
            className={AddCss.impTag}
            onChange={DataInp}
            placeholder="Name"
          />
          <input
            type="number"
            name="pinCode"
            className={AddCss.impTag}
            onChange={DataInp}
            placeholder="Pin Code"
          />
          <input
            type="text"
            name="address"
            className={AddCss.impTag}
            onChange={DataInp}
            placeholder="Address"
          />
          <input
            type="text"
            name="town"
            className={AddCss.impTag}
            onChange={DataInp}
            placeholder="Town"
          />
          <input
            type="text"
            name="state"
            className={AddCss.impTag}
            onChange={DataInp}
            placeholder="State"
          />
          <input
            type="text"
            name="country"
            className={AddCss.impTag}
            onChange={DataInp}
            placeholder="Country"
          />
          <input
            type="text"
            name="phoneNumber"
            className={AddCss.impTag}
            onChange={DataInp}
            placeholder="Phone Number"
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
