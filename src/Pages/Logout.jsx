import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
// redux
import { addWish } from "../redux/userSlice";
import { adduser } from "../redux/user";
import { useDispatch } from "react-redux";

export default function Logout() {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const logout = async () => {
    try {
      const res = await fetch("/api/logout", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
      });

      const data = await res.json();

      if (data.message) {
        console.log("data.message");
        console.log(data.message);
        dispatch(addWish({ length: 0, data: [null] }));
        dispatch(
          adduser({
            _id: "",
            email: "",
            imgSrc: "",
            firstName: "",
            LastName: "",
            gender: "",
            PhoneNumber: "",
          })
        );
        navigate("/");
        window.location.reload();
      }
      if (res.status !== 200) {
        const error = new Error(res.error);
        throw error;
      }
    } catch (error) {
      return;
    }
  };

  useEffect(() => {
    logout();
  }, []);

  return <div>Logout</div>;
}
