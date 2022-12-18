import React from "react";
import "./Css/MERCHANDISE.css";
import TSCss from "./Css/TopSelling.module.css";
import { Link } from "react-router-dom";
import Data from "./JSON/MERCHANDISE.json";

export default function MERCHANDISE() {
  return (
    <div className="MERCHANDISEmDiv">
      <div className={TSCss.H1Div}>
        <h1 className={TSCss.h1}>OFFICIAL MERCHANDISE</h1>
      </div>

      <div className="slideParentDiv">
        <div className="slider">
          <div className="slide-track">
            {Data.map((value, key) => {
              return (
                <div className="slide">
                  <Link
                    to={`/MERCHANDISE/${value.name}`}
                    key={key}
                    className={value.type}
                  >
                    <img alt="Image" src={value.src} className="img-fluid" />
                  </Link>
                </div>
              );
            })}
            {Data.map((value, key) => {
              return (
                <div className="slide">
                  <Link
                    to={`/MERCHANDISE/${value.name}`}
                    key={key}
                    className={value.type}
                  >
                    <img alt="Image" src={value.src} className="img-fluid" />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
