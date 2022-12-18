import React, { useState, useEffect } from "react";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import Common from "./Css/Common.module.css";
import Loading from "./../../../Img/loading.gif";
import imgplus from "./../../../Img/plus.png";
import ProfileCss from "./../CSS/Profile.module.css";
import AddCss from "./../CSS/Address.module.css";
import DeleteAddress from "./../DeleteAddress";
import AddAddress from "./../AddAddress";
// redux
import { useSelector, useDispatch } from "react-redux";

export default function MyAddress(props) {
  const [showload, setload] = useState(true);
  const [show, set] = useState();
  const [showAdd, setAdd] = useState(false);
  const [showDelete, setDelete] = useState(false);
  const [showDeleteID, setDeleteID] = useState("");

  const dispatch = useDispatch();

  useEffect(() => {
    seeAddress();
  }, []);

  useEffect(() => {
    seeAddress();
  }, [showAdd]);

  const seeAddress = async () => {
    try {
      const res = await fetch("/api/Address", {
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
        if (data.message === "zero") {
          setload(false);
          return;
        } else {
          setload(false);
          set(data.message);
          dispatch({ address: data.message });
        }
      }
    } catch (error) {
      return;
    }
  };

  return (
    <>
      {showload ? (
        <div className={ProfileCss.LadingDiv}>
          <img src={Loading} alt="" />
        </div>
      ) : (
        <div className={Common.mdiv} id="overflowHide">
          <div>
            <KeyboardBackspaceIcon
              fontSize="large"
              onClick={() => props.state("")}
            />
          </div>
          <p className={Common.MyPTag}>My Address</p>
          <div className={AddCss.AddressRowDiv}>
            <div className={AddCss.mapPArent}>
              {" "}
              {show ? (
                <div className={AddCss.mapPArentDiv}>
                  <div
                    className={AddCss.AddAddressmDiv}
                    onClick={() => setAdd(true)}
                  >
                    <img src={imgplus} alt="" />
                    <p>ADD ADDRESS</p>
                  </div>
                  {show.map((value, key) => {
                    return (
                      <div key={value._id} className={AddCss.AmDiv}>
                        <p>
                          <b>name:</b> {value.name}
                        </p>
                        <p>
                          <b>address:</b> {value.address}
                        </p>
                        <p>
                          <b>pin Code:</b> {value.pinCode}
                        </p>
                        <p>
                          <b>Town:</b> {value.town}
                        </p>
                        <p>
                          <b>State:</b> {value.state}
                        </p>
                        <p>
                          <b>Country:</b> {value.country}
                        </p>
                        <p>
                          <b>Phone Number:</b> {value.phoneNumber}
                        </p>
                        <div className={AddCss.editHoverDiv}>
                          <p className={AddCss.editHoverEdit}>{/* Edit */}</p>
                          <p
                            className={AddCss.editHoverDelete}
                            onClick={() => {
                              setDelete(true);
                              setDeleteID(value._id);
                            }}
                          >
                            Delete
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              ) : (
                <div
                  className={AddCss.AddAddressmDiv}
                  onClick={() => setAdd(true)}
                >
                  <img src={imgplus} alt="" />
                  <p>ADD ADDRESS</p>
                </div>
              )}
            </div>
          </div>
          {showAdd ? <AddAddress state={setAdd} /> : ""}
          {showDelete ? (
            <DeleteAddress DeleteID={showDeleteID} state={set} />
          ) : (
            ""
          )}
        </div>
      )}
    </>
  );
}
