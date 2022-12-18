import React, { useState, useEffect } from "react";
import PCss from "./CSS/PriceCards.module.css";

export default function PriceCards(props) {
  const [show, set] = useState(props.popular);
  const [showP, setP] = useState(props.percentage);

  return (
    <div className={PCss.mDiv}>
      {show ? (
        <div className={PCss.popularDiv}>
          <p className={PCss.Mostpopular}>{props.popular}</p>
        </div>
      ) : (
        <div className={PCss.popularDiv}></div>
      )}

      <h2 className={PCss.monthNum}>{props.monthNum} Months</h2>
      <h4 className={PCss.monthPrice}>₹ {props.monthPrice}/Month</h4>
      <h2 className={PCss.price}>₹ {props.price}</h2>
      {showP ? (
        <h5 className={PCss.percentage}>Save {props.percentage} %</h5>
      ) : (
        <h4 className={PCss.percentage}></h4>
      )}
    </div>
  );
}
