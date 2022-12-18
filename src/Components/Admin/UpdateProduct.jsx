import React, { useState, useEffect } from "react";
import PCcss from "./Css/PostContent.module.css";
import UPCss from "./Css/Update.module.css";

export default function UpdateProduct() {
  const [showRes, SetRes] = useState("");
  const [showProduct, setProduct] = useState({
    _id: "",
    feild: "",
    value: "",
  });

  const DataInpProduct = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setProduct({ ...showProduct, [name]: value });
  };

  const PostData = async () => {
    const { _id, feild, value } = showProduct;

    if (_id === "" || feild === "" || value === "") {
      setTimeout(() => {
        SetRes("Enter All the Details");
        setTimeout(() => {
          SetRes("");
        }, 3000);
      });
      return;
    }

    const res = await fetch("/api/admin/Products/Update", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        _id,
        feild,
        value,
      }),
    });
    const r = await res.json();

    setTimeout(() => {
      SetRes(r.message);
      setTimeout(() => {
        SetRes("");
      }, 3000);
    });

    setProduct({
      _id: "",
      feild: "",
      value: "",
    });
  };

  return (
    <div className={UPCss.mDiv}>
      <input
        type="text"
        name="_id"
        id=""
        className={PCcss.ImpTag}
        placeholder="_id"
        value={showProduct.name}
        onChange={DataInpProduct}
      />
      <input
        type="text"
        name="field"
        id=""
        className={PCcss.ImpTag}
        placeholder="field"
        value={showProduct.name}
        onChange={DataInpProduct}
      />
      <input
        type="text"
        name="value"
        id=""
        className={PCcss.ImpTag}
        placeholder="value"
        value={showProduct.name}
        onChange={DataInpProduct}
      />
      <center>
        <button onClick={PostData} className={PCcss.PostBtn}>
          Post
        </button>
      </center>
    </div>
  );
}
