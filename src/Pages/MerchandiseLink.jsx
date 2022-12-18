import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import GenCss from "./Css/Gender.module.css";
import TSCss from "./../Components/Home/Css/TopSelling.module.css";
import StarIcon from "@mui/icons-material/Star";

export default function MerchandiseLink() {
  const [showGender, setGender] = useState();

  const { link } = useParams();

  const AuthMiddleware = async () => {
    try {
      const res = await fetch("/api/admin/Products/MERCHANDISE", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          tag: link,
        }),
      });

      const data = await res.json();
      if (data.errors) {
      } else {
        setGender(data);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    AuthMiddleware();
  }, []);

  return (
    <div>
      {showGender ? (
        <div className={GenCss.MapPDiv}>
          {showGender.map((value, key) => {
            return (
              <div key={value._id} className={GenCss.MapMDiv}>
                <Link to={`/products/${value._id}`} className="LinkStyle">
                  <div>
                    <img
                      src={value.imageSrc}
                      alt={value.name}
                      className={GenCss.ImgSrc}
                    />
                  </div>
                  <div className={TSCss.DetailsDiv}>
                    <p className={TSCss.Name}> {value.name} </p>
                    <p className={TSCss.Rating}>
                      <StarIcon fontSize="small" className={TSCss.StarIcon} />
                      <span> {value.rating} </span>
                    </p>
                    <p className={TSCss.price}> ₹{value.price} </p>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
