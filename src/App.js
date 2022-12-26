import Contents from "./layout/Contents";
import Header from "./layout/Header";
import Layout from "./layout/Layout";
import "./App.css";
import React, { useState } from "react";
import Home from "./components/contents/Home";
import About from "./components/contents/About";
import Portfolio from "./components/contents/Portfolio";
import Techstack from "./components/contents/Techstack";
import Contact from "./components/contents/Contact";
function App() {
  const [selector, setSelector] = useState([0]);
  const contents = {
    0: <Home setSelector={setSelector} />,
    1: <About />,
    2: <Portfolio />,
    3: <Techstack />,
    4: <Contact />,
  };
  return (
    <>
      <Layout>
        <Header setSelector={setSelector} />
        <Contents>{contents[selector]}</Contents>
      </Layout>
    </>
  );
}

export default App;
