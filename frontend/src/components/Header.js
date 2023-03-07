import React from "react";
import style from "../styles/header.module.css";

const Header = ({ title, img }) => {
  return (
    <div
      className={style.headerContainer}
      style={{
        background: img,
      }}
    >
      <div
        className="container"
        style={{
          height: "100%",
        }}
      >
        <div className={style.headerWrapper}>
          <h1>{title}</h1>
        </div>
      </div>
    </div>
  );
};

export default Header;
