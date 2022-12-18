import React from "react";
import { Link } from "react-router-dom";
import FootCss from "./Css/Footer.module.css";

export default function Footer() {
  return (
    <div className={FootCss.mDiv}>
      <div>
        <ul>
          <li> About Us </li>
        </ul>
      </div>
      <div>
        <Link to="/admin/login" className="LinkStyle">
          Admin
        </Link>
      </div>
    </div>
  );
}
