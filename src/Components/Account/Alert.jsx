import React from "react";
import AlCss from "./CSS/Alert.module.css";

export default function Alert(props) {
  return <div className={AlCss.MDiv}>{props.msg}</div>;
}
