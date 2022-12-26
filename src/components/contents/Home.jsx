import React from "react";
import style from "./style/Home.module.css";

const Home = ({ setSelector }) => {
  return (
    <div className={style.Home}>
      <h3>방문해주셔서 감사합니다!</h3>
      <button onClick={() => setSelector(1)}>Click Me!</button>
    </div>
  );
};

export default Home;
