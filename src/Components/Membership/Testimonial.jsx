import React from "react";
import TeCss from "./CSS/Testimonial.module.css";
import Sliders from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Testimonial() {
  var settingT = {
    dots: true,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <div className={TeCss.mDiv}>
      <p className={TeCss.TestimonialtitlePTag}>Testimonial</p>
      <div>
        <Sliders {...settingT} className={TeCss.Hslide}>
          <div className={TeCss.SlidermDiv}>
            <div className={TeCss.SliderinsideDiv}>
              <p className={TeCss.SliderContentDiv}>
                The exclusive membership is great, it helps save so much money.
                You not only recover the money you've spent on it, but save so
                much more!
              </p>
              <p className={TeCss.SliderNameDiv}>Atharva, Pune</p>
            </div>
          </div>
          <div className={TeCss.SlidermDiv}>
            <div className={TeCss.SliderinsideDiv}>
              <p className={TeCss.SliderContentDiv}>
                The exclusive membership has definitely been worth the value.
                I've never had a bad experience with the membership and all
                these continuous discounts are very beneficial to the customer.
              </p>
              <p className={TeCss.SliderNameDiv}>Bhuvandeep, Bangalore</p>
            </div>
          </div>
          <div className={TeCss.SlidermDiv}>
            <div className={TeCss.SliderinsideDiv}>
              <p className={TeCss.SliderContentDiv}>
                The exclusive membership has been a real blessing, it gives you
                first preference for limited edition clothes, it also helps you
                save so much and it barely costs anything in comparison with
                what you save.
              </p>
              <p className={TeCss.SliderNameDiv}>Rahul, Pune</p>
            </div>
          </div>
        </Sliders>
      </div>
    </div>
  );
}
