import React from "react";
import img from "./../../Img/clothes.jpg";
import Sliders from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import HMCss from "./CSS/Header.module.css";

export default function HeaderM() {
  var settingM = {
    dots: true,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <div>
      <div className={HMCss.HeaderDiv}>
        <img src={img} alt="" className={HMCss.imgTag} />
        <div className={HMCss.headerOverlayDiv}>
          <div>
            <p className={HMCss.SAVEBIG}>SAVE BIG</p>
            <div className={HMCss.onAllDiv}>
              <p className={HMCss.ONALLPRODUCTS}>ON ALL PRODUCTS. EVERY DAY.</p>
            </div>
          </div>
          <div className={HMCss.FunFactsDiv}>
            <p className={HMCss.FunFactsPTag}>Fun Facts</p>
          </div>
          <div className={HMCss.slideDiv}>
            <Sliders {...settingM} className={HMCss.Hslide}>
              <div className={HMCss.slideComDiv}>
                <div className={HMCss.slideDivMain}>
                  <p>
                    Add the membership to your cart
                    <br />
                    and get the discount on this order itself.
                  </p>
                </div>
              </div>
              <div className={HMCss.slideComDiv}>
                <div className={HMCss.slideDivMain}>
                  <p>
                    Most people save the membership fee on their first order.
                  </p>
                </div>
              </div>
              <div className={HMCss.slideComDiv}>
                <div className={HMCss.slideDivMain}>
                  <p>The average exclusive member SAVES Rs. 2600/year.</p>
                </div>
              </div>
              <div className={HMCss.slideComDiv}>
                <div className={HMCss.slideDivMain}>
                  <p>Most people become members and don’t pay full price.</p>
                </div>
              </div>
            </Sliders>
          </div>
        </div>
      </div>
    </div>
  );
}
