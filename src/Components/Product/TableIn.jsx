import React from "react";
import TCss from "./CSS/TableIn.module.css";

export default function Table() {
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
          <th>17.75</th>
          <th>38.0</th>
          <th>30.0</th>
        </tr>
        <tr>
          <th>M</th>
          <th>18.00</th>
          <th>40.0</th>
          <th>32.0</th>
        </tr>
        <tr>
          <th>L</th>
          <th>18.62</th>
          <th>42.0</th>
          <th>34.0</th>
        </tr>
        <tr>
          <th>XL</th>
          <th>19.25</th>
          <th>44.0</th>
          <th>36.0</th>
        </tr>
        <tr>
          <th>XXL</th>
          <th>19.87</th>
          <th>46.0</th>
          <th>38.0</th>
        </tr>
      </table>
    </div>
  );
}
