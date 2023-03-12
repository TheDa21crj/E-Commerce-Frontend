import React from "react";
import BenifitsCss from "./CSS/Benifits.module.css";

export default function Benifits(props) {
  return (
    <div className={BenifitsCss.mDiv}>
      <div className={BenifitsCss.imgDiv}>
        <img src={props.img} alt="ImgHint" className={BenifitsCss.imgTag} />
      </div>
      <div className={BenifitsCss.ContentDivParent}>
        <div className={BenifitsCss.ContentDivBef}>
          <p className={BenifitsCss.titlePTag}>{props.title}</p>
        </div>
        <div className={BenifitsCss.LineDiv}>
          <div className={BenifitsCss.CircleDiv}></div>
        </div>
        <div className={BenifitsCss.contentDiv}>
          <p className={BenifitsCss.contentDivPTag}>
            <i>{props.content}</i>
          </p>
        </div>
      </div>
    </div>
  );
}
