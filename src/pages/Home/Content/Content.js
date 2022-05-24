
import React from "react";
import homeImage from "../../../assets/Home.jpg";
import classes from "./Content.module.css";


function Content() {
  return (
    <>
      <div className={classes.Content}>
        <img src={homeImage} alt="img" />
        <section>
          <div>
             <h1>Your Office. Your Style.</h1>
             <div>Shop comfortable and stylish products you need to create an office you love.
          </div>
          </div>
          <button><a href="/">SHOP FOR HOME</a></button>
          <button><a href="/">SHOP FOR BUSINESS</a></button>
        </section>
      </div>
    </>
  );
}

export default Content;