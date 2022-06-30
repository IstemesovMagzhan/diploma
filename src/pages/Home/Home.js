import React from "react";
import Main from "../../components/Main/Main";
import CategoryList from "../../components/CategoryList/CategoryList";
import { getCategories } from "../../data/categories";
import Content from "../../components/Content/Content";
import home2Image from "../../assets/Home2.webp";
import homeImage from "../../assets/Home.jpg";
import DesignBlock from "../../components/DesignBlock/DesignBlock";




function Home() {
  return (
    <>
      <Content img={home2Image} img2={homeImage}/>

      <Main />

      <CategoryList categories={getCategories()}/>

      <DesignBlock />
      
    </>
  );
}

export default Home;