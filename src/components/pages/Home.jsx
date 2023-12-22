import React from "react";
import Navbar from "../blocks/Navbar";
import Header from "../layout/Header";
import Main from "../layout/Main";

function Home() {
  return (
    <div className="row m-0">
      <Header />
      <Main />
      <div className="absolute">a</div>
    </div>
  );
}

export default Home;
