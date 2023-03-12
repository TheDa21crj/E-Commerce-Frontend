import React, { useState } from "react";
import PriceCards from "./PriceCards";
import MemCss from "./CSS/Member.module.css";

export default function Member() {
  const [selected, setSelect] = useState("1");
  return (
    <div className={MemCss.mDiv}>
      <p className={MemCss.titlePtag}>Become An Exclusive Member</p>
      <div className={MemCss.CarsPricemDiv}>
        <div
          id={selected == "1" ? "Selected" : "notSelected"}
          onClick={() => {
            setSelect("1");
          }}
        >
          <PriceCards
            monthNum="12"
            monthPrice="25"
            popular="Most Popular"
            price="299"
            percentage="87.50"
          />
        </div>
        <div
          id={selected == "2" ? "Selected" : "notSelected"}
          onClick={() => {
            setSelect("2");
          }}
          className={MemCss.cardsDiv}
        >
          <PriceCards
            monthNum="3"
            monthPrice="83"
            price="249"
            percentage="58"
          />
        </div>
        <div
          id={selected == "3" ? "Selected" : "notSelected"}
          onClick={() => {
            setSelect("3");
          }}
          className={MemCss.cardsDiv}
        >
          <PriceCards monthNum="1" monthPrice="199" price="199" />
        </div>
      </div>
      <button className={MemCss.AddMembership}>Add Membership to Cart</button>
    </div>
  );
}
