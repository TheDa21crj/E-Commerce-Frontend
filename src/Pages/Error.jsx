import React, { useEffect } from "react";
import ErrCss from "./Css/Error.module.css";
import img404 from "./../Img/new-404.png";

export default function Error() {
  useEffect(() => {
    document.title = "Error 404";
  });
  return (
    <div>
      <div className={ErrCss.mDiv}>
        <div className={ErrCss.imgDiv}>
          <img src={img404} alt="" />
        </div>
        <h1 className={ErrCss.Oops}>Oops! This Page is Not Found.</h1>
        <p className={ErrCss.Therequested}>
          The requested page dose not exist.
        </p>
      </div>
    </div>
  );
}
