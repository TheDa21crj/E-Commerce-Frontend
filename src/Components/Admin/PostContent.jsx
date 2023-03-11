import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import PCcss from "./Css/PostContent.module.css";

export default function PostContent() {
  const [showProduct, setProduct] = useState({
    name: "",
    imageSrc: "",
    des: "",
    rating: "",
    NumReview: "",
    price: "",
    gender: "",
    tags: "",
    stocks: "",
    sold: "",
  });
  const navigate = useNavigate();
  const [showRes, SetRes] = useState("");

  const AuthMiddleware = async () => {
    try {
      const res = await fetch("/api/admin/post", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
      });

      const data = await res.json();
      if (data.errors) {
        navigate("/");
      }
    } catch (error) {
      console.log(error);
      navigate("/");
    }
  };

  useEffect(() => {
    AuthMiddleware();
  }, []);

  const DataInpProduct = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setProduct({ ...showProduct, [name]: value });
  };

  const PostData = async () => {
    const {
      name,
      imageSrc,
      des,
      rating,
      NumReview,
      price,
      gender,
      tags,
      stocks,
      sold,
    } = showProduct;

    if (
      name === "" ||
      imageSrc === "" ||
      des === "" ||
      rating === "" ||
      NumReview === "" ||
      price === "" ||
      gender === "" ||
      tags === "" ||
      stocks === "" ||
      sold === ""
    ) {
      setTimeout(() => {
        SetRes("Enter All the Details");
        setTimeout(() => {
          SetRes("");
        }, 3000);
      });
      return;
    }

    const res = await fetch("/api/admin/Products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        imageSrc,
        des,
        rating,
        NumReview,
        price,
        gender,
        tags,
        stocks,
        sold,
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
      name: "",
      imageSrc: "",
      des: "",
      rating: "",
      NumReview: "",
      price: "",
      gender: "",
      tags: "",
      stocks: "",
      sold: "",
    });
  };

  return (
    <div>
      <div>
        <form action="" method="POST" className={PCcss.formTag}>
          <div className={PCcss.LeftFormDiv}>
            <div className={PCcss.LeftFormDivRowDiv}>
              <input
                type="text"
                name="name"
                id=""
                className={PCcss.ImpTag}
                placeholder="Name"
                value={showProduct.name}
                onChange={DataInpProduct}
              />
              <input
                type="number"
                name="sold"
                className={PCcss.ImpTag}
                placeholder="sold"
                value={showProduct.sold}
                onChange={DataInpProduct}
              />
            </div>
            <div className={PCcss.LeftFormDivRowDiv}>
              <input
                type="number"
                name="rating"
                id=""
                className={PCcss.ImpTag}
                placeholder="Rating"
                value={showProduct.rating}
                onChange={DataInpProduct}
              />
              <input
                type="number"
                name="NumReview"
                id=""
                className={PCcss.ImpTag}
                placeholder="Number of Reviews"
                value={showProduct.NumReview}
                onChange={DataInpProduct}
              />
            </div>
            <div className={PCcss.LeftFormDivRowDiv}>
              <input
                type="number"
                name="price"
                id=""
                className={PCcss.ImpTag}
                value={showProduct.price}
                placeholder="price"
                onChange={DataInpProduct}
              />
              <input
                type="text"
                name="gender"
                id=""
                className={PCcss.ImpTag}
                value={showProduct.gender}
                placeholder="gender"
                onChange={DataInpProduct}
              />
            </div>
            <div className={PCcss.LeftFormDivRowDiv}>
              <input
                type="text"
                name="tags"
                className={PCcss.ImpTag}
                placeholder="tags"
                value={showProduct.tags}
                onChange={DataInpProduct}
              />
              <input
                type="number"
                name="stocks"
                className={PCcss.ImpTag}
                placeholder="stocks"
                value={showProduct.stocks}
                onChange={DataInpProduct}
              />
            </div>
            <input
              type="text"
              name="imageSrc"
              id=""
              className={PCcss.ImpTag}
              placeholder="Image Src"
              value={showProduct.imageSrc}
              onChange={DataInpProduct}
            />
          </div>
          <div className={PCcss.RightFormDiv}>
            <textarea
              name="des"
              className={PCcss.ImpTagTextArea}
              cols="30"
              rows="18"
              value={showProduct.des}
              placeholder="des"
              onChange={DataInpProduct}
            ></textarea>
          </div>
        </form>

        <center>
          <button onClick={PostData} className={PCcss.PostBtn}>
            Post
          </button>
        </center>
      </div>
      {showRes ? <p className={PCcss.showResAlert}>{showRes}</p> : ""}
    </div>
  );
}
