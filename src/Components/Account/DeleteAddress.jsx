import React, { useEffect } from "react";
import DeleteCss from "./CSS/Delete.module.css";

export default function DeleteAddress(props) {
  useEffect(() => {
    deleteAddressFun();
  }, [props.DeleteID]);

  const deleteAddressFun = async () => {
    try {
      const res = await fetch("/api/Address/delete", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          _id: props.DeleteID,
        }),
      });
      const data = await res.json();
      if (data.errors) {
        return;
      }
      if (data) {
      }
    } catch (error) {
      return;
    }
  };

  return <div className={DeleteCss.mdiv}>Delete Address</div>;
}
