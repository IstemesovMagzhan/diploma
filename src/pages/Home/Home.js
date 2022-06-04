import React from "react";
import Main from "../Home/Main/Main";
import Content from "./Content/Content";
import homeImage from "../../assets/Home.jpg";
import CategoryList from "../../components/CategoryList/CategoryList";
import { getCategories } from "../../data/categories";




function Home() {
  return (
    <>
      <Content image={ homeImage}/>

      <Main />

      <CategoryList categories={getCategories()}/>
    </>
  );
}

export default Home;