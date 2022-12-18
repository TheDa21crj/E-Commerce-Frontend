import React, { useEffect, useState } from "react";
import SCCss from "./../../Pages/Css/ShopCart.module.css";
import successful_purchase from "./../../Img/successful_purchase.svg";

export default function CheckoutSuccess() {
  const [sendID, setID] = useState([]);

  useEffect(() => {
    deleteWish();
  }, []);

  useEffect(() => {
    addOrder();
  }, [sendID]);

  const deleteWish = async (deleteID) => {
    let id = deleteID;
    if (id === "") {
      return;
    } else {
      try {
        const res = await fetch("/api/Shoping/delete/product/all", {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        });

        let r = await res.json();

        setID(r[0].List);
        console.table(r[0].List);
      } catch (error) {
        console.log(error);
      }
    }
  };

  const addOrder = async () => {
    console.log(sendID);

    for (var i = 0; i < sendID.length; i++) {
      try {
        const res = await fetch("/api/Order/add", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            id: sendID[i].id,
            price: sendID[i].price,
            qunatity: sendID[i].qunatity,
            size: sendID[i].size,
            imageSrc: sendID[i].imageSrc,
            name: sendID[i].name,
          }),
        });
        let r = await res.json();

        console.log(r);
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <div className={SCCss.FalseDiv}>
      <img src={successful_purchase} alt="" className={SCCss.empty_cart} />
      <p className={SCCss.MainPTag}>Order was Placed</p>
    </div>
  );
}
