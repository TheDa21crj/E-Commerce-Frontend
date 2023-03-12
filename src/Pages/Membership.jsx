import React, { useEffect } from "react";
import "./Css/Member.css";
import HeaderM from "../Components/Membership/HeaderM";
import Excusive from "../Components/Membership/Excusive";
import Member from "../Components/Membership/Member";
import Testimonial from "../Components/Membership/Testimonial";

export default function Membership() {
  useEffect(() => {
    document.title =
      "Join The Da Store Exclusive Membership & Shop At Discounted Prices";
  });

  return (
    <div>
      <HeaderM />
      <div>
        <Excusive />
        <Member />
        <Testimonial />
      </div>
    </div>
  );
}
