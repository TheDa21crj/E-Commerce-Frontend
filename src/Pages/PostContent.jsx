import React, { useState } from "react";
import PostContentCom from "../Components/Admin/PostContent";
import UpdateProduct from "../Components/Admin/UpdateProduct";
import TagAdd from "../Components/Admin/TagAdd";
import PCcs from "./Css/PostContent.module.css";

export default function PostContent() {
  const [change, setchange] = useState("2");
  return (
    <div>
      <div className={PCcs.headdiv}>
        {/* <Link to="/" className={PCcs.titleNav}>
          <h1>The Da</h1>
        </Link>
        Logout */}
      </div>
      <h1 className={PCcs.h1WelAdmin}>Welcome Admin</h1>
      <div className={PCcs.postPDiv}>
        <p
          className={PCcs.postPTag}
          id={change === "2" ? "Details" : ""}
          onClick={() => setchange("2")}
        >
          Post New Product
        </p>
        <p
          className={PCcs.postPTag}
          id={change === "1" ? "Details" : ""}
          onClick={() => setchange("1")}
        >
          Update a Product
        </p>
        <p
          className={PCcs.postPTag}
          id={change === "3" ? "Details" : ""}
          onClick={() => setchange("3")}
        >
          Add a Tag
        </p>
      </div>
      {change === "1" ? <UpdateProduct /> : ""}
      {change === "2" ? <PostContentCom /> : ""}
      {change === "3" ? <TagAdd /> : ""}
    </div>
  );
}
