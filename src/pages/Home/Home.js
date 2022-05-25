import React from "react";
import Main from "../Home/Main/Main";
import Content from "./Content/Content";
import homeImage from "../../assets/Home.jpg"



function Home() {
  return (
    <>
      <Content image={homeImage}/>

      <Main />
    </>
  );
}

export default Home;