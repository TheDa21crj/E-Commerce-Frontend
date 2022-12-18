import React, { useState, useEffect } from "react";
import PCcss from "./Css/PostContent.module.css";
import UPCss from "./Css/Update.module.css";

export default function TagAdd() {
  const [showRes, SetRes] = useState("");

  const [showProduct, setProduct] = useState({
    _id: "",
    name: "",
  });

  const DataInpProduct = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setProduct({ ...showProduct, [name]: value });
  };

  const PostData = async () => {
    const { _id, name } = showProduct;

    if (_id === "" || name === "") {
      setTimeout(() => {
        SetRes("Enter All the Details");
        setTimeout(() => {
          SetRes("");
        }, 3000);
      });
      return;
    }

    const res = await fetch("/api/admin/Products/UpdateTag", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        _id,
        name,
      }),
    });
    const r = await res.json();

    setTimeout(() => {
      SetRes("Product Updated");
      setTimeout(() => {
        SetRes("");
      }, 3000);
    });

    setProduct({
      _id: "",
      name: "",
    });
  };

  return (
    <div className={UPCss.mDiv}>
      <input
        type="text"
        name="_id"
        className={PCcss.ImpTag}
        placeholder="product _id"
        value={showProduct._id}
        onChange={DataInpProduct}
      />
      <input
        type="text"
        name="name"
        className={PCcss.ImpTag}
        placeholder="tag name"
        value={showProduct.name}
        onChange={DataInpProduct}
      />

      <center>
        <button onClick={PostData} className={PCcss.PostBtn}>
          Post
        </button>
      </center>
      {showRes ? <p className={PCcss.showResAlert}>{showRes}</p> : ""}
    </div>
  );
}
