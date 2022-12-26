import React from "react";
import style from "./style/Layout.module.css";

const Layout = ({ children }) => {
  return (
    <div className={style.WrapLayout}>
      <div className={style.InnerLayout}>{children}</div>
    </div>
  );
};

export default Layout;
