import classes from "./Logo.module.css";

function Logo() {
  return ( 
    <div className={classes.Logo}>
      <div><a href="/home">CHAIR</a></div>
      <span>Make your space work</span>
      <div className={classes.callback}></div>
    </div>
   );
}

export default Logo;