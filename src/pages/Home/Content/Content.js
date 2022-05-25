
import React from "react";
import { Link } from "react-router-dom";
import classes from "./Content.module.css";


function Content({ image }) {
  return (
    <>
      <div className={classes.Content}>
        <img src={image} alt="img" />
        <section>
          <div>
            <h1>Your Office. Your Style.</h1>
            <div>Shop comfortable and stylish products you need to create an office you love.</div>
          </div>
          <button><Link to="/">SHOP FOR HOME</Link></button>
          <button><Link to="/">SHOP FOR BUSINESS</Link></button>
        </section>
      </div>
    </>
  );
}

export default Content;