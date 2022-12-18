import React from "react";
import TCss from "./CSS/TableIn.module.css";

export default function TableCm() {
  return (
    <div>
      <table>
        <tr>
          <th className={TCss.th1}>Size</th>
          <th className={TCss.th1}>Shoulder</th>
          <th className={TCss.th1}>Chest</th>
          <th className={TCss.th1}>Waist</th>
        </tr>
        <tr>
          <th>S</th>
          <th>44.0</th>
          <th>96.0</th>
          <th>76.0</th>
        </tr>
        <tr>
          <th>M</th>
          <th>45.5</th>
          <th>101.0</th>
          <th>81.0</th>
        </tr>
        <tr>
          <th>L</th>
          <th>47.00</th>
          <th>106.0</th>
          <th>86.0</th>
        </tr>
        <tr>
          <th>XL</th>
          <th>48.5</th>
          <th>111.0</th>
          <th>91.0</th>
        </tr>
        <tr>
          <th>XXL</th>
          <th>50.0</th>
          <th>116.0</th>
          <th>96.0</th>
        </tr>
      </table>
    </div>
  );
}
