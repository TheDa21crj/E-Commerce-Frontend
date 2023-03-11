import React, { useState, useEffect } from "react";
import MoBoDrop from "./MoBoDrop";
import DbmCss from "./Css/DropDownMobo.module.css";
import { Link } from "react-router-dom";

export default function DropDownMobo(props) {
  const [showMen, setMen] = useState(false);
  const [showWoMen, setWoMen] = useState(false);
  const [showKid, setKid] = useState(false);

  return (
    <div className={DbmCss.mDiv}>
      <ul className={DbmCss.ulTag}>
        <li>
          <p onClick={() => setMen(!showMen)} className={DbmCss.LiPTag}>
            Men
          </p>
          {showMen ? (
            <MoBoDrop
              h21="TOPWEAR"
              h22="BOTTOMWEAR"
              h23="Accessories"
              li1="T-Shirts"
              li2="Co-ord Sets New"
              li3="Drop-Cut T-Shirts"
              li4="Full Sleeve T-Shirts"
              li5="Oversized T-Shirts New"
              li6="Polos"
              li7="Shirts"
              li8="Tank Tops & Vests"
              li9="Hoodies & Sweatshirts"
              li10="Jackets"
              li11="Sweaters"
              li12="Cotton Pants New"
              li22="Joggers"
              li32="Shorts"
              li42="Pajamas"
              li52="Boxers"
              li13="Cotton Masks"
              li23="Socks"
              li33="Backpacks"
            />
          ) : (
            ""
          )}
        </li>
        <li>
          <p onClick={() => setWoMen(!showWoMen)} className={DbmCss.LiPTag}>
            Women
          </p>
          {showWoMen ? (
            <MoBoDrop
              h21="TOPWEAR"
              h22="BOTTOMWEAR"
              h23="Accessories"
              li1="Women's T-Shirts"
              li2="Dresses"
              li3="Unisex T-Shirts"
              li4="Shirts"
              li5="Tank Tops"
              li6="Shirts"
              li7="Hoodies & Sweatshirts"
              li8="Jackets"
              li9="Winterwear"
              li12="Joggers"
              li22="Pajamas"
              li32="All Day Pants"
              li42="Shorts"
              li52="Urban Leggings"
              li13="Cotton Masks"
              li23="Socks"
              li33="Backpacks"
            />
          ) : (
            ""
          )}
        </li>
        <li>
          <p onClick={() => setKid(!showKid)} className={DbmCss.LiPTag}>
            Kids
          </p>
          {showKid ? (
            <MoBoDrop
              h21="TOPWEAR"
              h22="BOTTOMWEAR"
              h23="Accessories"
              li1="T-Shirts"
              li2="Shirts"
              li3="Dresses"
              li4="Clothing Sets"
              li5="Ethnic Wear"
              li6="Shirts"
              li7="Hoodies & Sweatshirts"
              li8="Jackets"
              li9="Winterwear"
              li10="Jumpsuits"
              li11="Tops"
              li12m="Frok"
              li12="Shorts"
              li22="Jeans"
              li32="Trousers"
              li42="Skirts"
              li52="Tights & Leggings"
              li62="Capris"
              li13="Bags & Backpacks"
              li23="Watches"
              li33="Jewellery & Hair accessory"
              li43="Sunglasses"
              li53="Masks & Protective Gears"
              li63="Caps & Hats"
              li73="Cotton Masks"
              li83="Socks"
              li93="Backpacks"
            />
          ) : (
            ""
          )}
        </li>
        <li>
          <p className={DbmCss.LiPTag}>New</p>
        </li>
        <li>
          <p className={DbmCss.LiPTag}>Beauty</p>
        </li>
        <li>
          <Link to="/Membership" className="LinkStyle">
            <p className={DbmCss.LiPTag}>Membership</p>
          </Link>
        </li>
      </ul>
    </div>
  );
}
