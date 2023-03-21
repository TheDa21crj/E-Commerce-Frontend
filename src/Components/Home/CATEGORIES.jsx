import React from "react";
import { Link } from "react-router-dom";
import TSCss from "./Css/TopSelling.module.css";
import CatCss from "./Css/CATEGORIES.css";
import data from "./JSON/data.json";

export default function CATEGORIES() {
  return (
    <div>
      <div className={TSCss.H1Div}>
        <h1 className={TSCss.h1}>CATEGORIES</h1>
      </div>

      <div className="datamapPDiv">
        {data.map((value, key) => {
          return (
            <Link
              to={`categories/${value.gender}/${value.link}`}
              key={value.id}
              className={value.type}
            >
              <img src={value.src} alt="" className="categoryImgTag" />
            </Link>
          );
        })}
      </div>
    </div>
  );
}
