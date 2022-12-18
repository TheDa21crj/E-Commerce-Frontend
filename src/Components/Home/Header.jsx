import React from "react";
import Sliders from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import HeaderCss from "./Css/Header.module.css";
import "./Css/Header.css";

import img1 from "./../../Img/Header/woman.jpg";
import img2 from "./../../Img/Header/girl-lying-on-the-grass.jpg";
import img3 from "./../../Img/Header/christmas.jpg";

export default function Header() {
  var settings = {
    dots: false,
    infinite: true,
    arrows: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <div className={HeaderCss.SlideShow}>
      <div className={HeaderCss.slideDiv}>
        <Sliders {...settings} className={HeaderCss.Hslide}>
          <div className={HeaderCss.slide}>
            <img src={img1} className={HeaderCss.ImgHeader} />
          </div>
          <div className={HeaderCss.slide}>
            <img src={img2} className={HeaderCss.ImgHeader} />
          </div>
          <div className={HeaderCss.slide}>
            <img src={img3} className={HeaderCss.ImgHeader} />
          </div>
        </Sliders>
      </div>
    </div>
  );
}
