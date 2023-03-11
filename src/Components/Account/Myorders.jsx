import React, { useEffect, useState } from "react";
import ProfileCss from "./CSS/Profile.module.css";
import OrderCss from "./CSS/Orders.module.css";

export default function Myorders(props) {
  const [showData, setData] = useState([]);

  useEffect(() => {
    seeOrders();
  }, []);

  const seeOrders = async (e) => {
    try {
      const res = await fetch("/api/Order", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
      });
      const data = await res.json();
      if (data.errors) {
        return;
      }
      if (data) {
        setData(data);
      }
    } catch (error) {
      return;
    }
  };
  return (
    <div className={ProfileCss.mdiv}>
      <h1 className={OrderCss.h1}>My Orders</h1>
      {showData ? (
        <div className={OrderCss.showCheckDiv}>
          {" "}
          {showData.map((value, key) => {
            return (
              <div className={OrderCss.ShowDataMap}>
                <div className={OrderCss.OrderID}>Order ID # {value._id}</div>
                <div className={OrderCss.mapMDiv} key={value._id}>
                  <img
                    src={value.imageSrc}
                    alt=""
                    className={OrderCss.imgSrc}
                  />
                  <div className={OrderCss.detailsDiv}>
                    <p className={OrderCss.pTagName}>{value.name}</p>
                    <p>{value.price}</p>
                    <p className={OrderCss.SizeQtyPTag}>
                      Size: {value.size}{" "}
                      <span className={OrderCss.separator}>|</span> Qunatity:{" "}
                      {value.qunatity}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <p className={OrderCss.pTagMain}>No Orders</p>
      )}
    </div>
  );
}
