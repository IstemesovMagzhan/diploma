import classes from "./Logo.module.css";

function Logo() {
  return ( 
    <div className={classes.Logo}>
      <div><a href="/Home">CHAIR</a></div>
      <span>Make your space work</span>
    </div>
   );
}

export default Logo;