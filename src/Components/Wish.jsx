import React from "react";
import NavCss from "./Css/Nav.module.css";

export default function Wish(props) {
  return (
    <div className={NavCss.ValueDiv}>
      <p>{props.value}</p>
    </div>
  );
}
