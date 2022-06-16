import Nav from "../Nav/Nav";
import classes from "./Drawer.module.css";
import { FiX } from "react-icons/fi";
import { BsCart3 } from "react-icons/bs";
import { Link } from "react-router-dom";

function Drawer({ open, toggle }) {
  const classNames = [classes.Drawer];
  if (open) {
    classNames.push(classes.open);
  }




  return ( 
    <div className={classNames.join(" ")}>
      <div onClick={toggle} className={classes.backdrop}><div><Link to="/"><BsCart3 /></Link> <FiX /></div></div>
      <div onClick={toggle} className={classes.content}>
         <Nav />
      </div>
      
    </div>
   );
}

export default Drawer;