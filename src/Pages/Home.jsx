import React, { useEffect } from "react";
import Header from "../Components/Home/Header";
import NewArrival from "../Components/Home/NewArrival";
import TopSelling from "../Components/Home/TopSelling";
import MERCHANDISE from "../Components/Home/MERCHANDISE";
import CATEGORIES from "./../Components/Home/CATEGORIES";
import COLLECTIONS from "./../Components/Home/COLLECTIONS";
import Loading from "./Loading";
// redux
import { useSelector } from "react-redux";
import { seeload } from "../redux/loading";
import { addselling } from "../redux/selling";
import { useDispatch } from "react-redux";

export default function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    document.title = "Online Shopping for Men & Women: The Da";
    dispatch(seeload({ start: "false" }));
    DataGet();
  }, []);

  const DataGet = async () => {
    try {
      const res = await fetch("/api/admin/Products/NewArival", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
      });

      const dataNA = await res.json();
      if (dataNA.errors) {
        return console.log("error");
      }

      const res0 = await fetch("/api/admin/Products/TopSelling", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
      });

      const dataTS = await res0.json();
      if (dataNA.errors) {
        return console.log("error");
      }
      if (dataNA && dataTS) {
        dispatch(
          addselling({
            topselling: dataTS,
            newArrival: dataNA,
            loading: "false",
          })
        );
      }
    } catch (error) {
      console.log(error);
    }
  };

  const load = useSelector((state) => state.selling.loading);

  return (
    <div className="homeBodymDiv">
      {load === "true" ? (
        <Loading />
      ) : (
        <div>
          <Header />
          <NewArrival />
          <CATEGORIES />
          <TopSelling />
          {/* <COLLECTIONS /> */}
          <MERCHANDISE />
        </div>
      )}
    </div>
  );
}
