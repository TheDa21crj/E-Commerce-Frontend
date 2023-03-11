import React, { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    // document.title = "Online Shopping for Men & Women: The Da";
    // dispatch(seeload({ start: "false" }));
    DataGet();
  }, []);

  const DataGet = async () => {
    try {
      const res = await fetch(
        "https://coral-app-ogkbu.ondigitalocean.app/api/admin/Products/NewArival",
        {
          method: "GET",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          credentials: "include",
        }
      );

      const dataNA = await res.json();
      if (dataNA.errors) {
        return console.log("error");
      }
      if (dataNA) {
        console.log(dataNA);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return <div>Home</div>;
}
