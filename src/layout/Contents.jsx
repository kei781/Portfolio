import React from "react";
import style from "./style/Contents.module.css";

const Contents = ({ children }) => {
  return <div className={style.InnerContents}>{children}</div>;
};

export default Contents;
