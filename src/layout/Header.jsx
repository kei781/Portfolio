import React from "react";
import style from "./style/Header.module.css";

const Header = ({ setSelector }) => {
  return (
    <header className={style.InnerHeader}>
      <div className={style.Logo}>Noh</div>
      <div className={style.Menu}>
        <button onClick={() => setSelector(0)}>Home</button>
        <button onClick={() => setSelector(1)}>About</button>
        <button onClick={() => setSelector(2)}>Portfolio</button>
        <button onClick={() => setSelector(3)}>Techstack</button>
        <button onClick={() => setSelector(4)}>Contact</button>
      </div>
    </header>
  );
};

export default Header;
