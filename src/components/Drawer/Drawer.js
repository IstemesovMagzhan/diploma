import Nav from "../Nav/Nav";
import classes from "./Drawer.module.css";
import { FiX } from "react-icons/fi";
import { BsCart3 } from "react-icons/bs";

function Drawer({open, toggle}) {
  const classNames = [classes.Drawer];
  if (open) {
    classNames.push(classes.open);
  }




  return ( 
    <div className={classNames.join(" ")}>
      <div onClick={toggle} className={classes.backdrop}><div><a href="#"><BsCart3 /></a> <FiX /></div></div>
      <div onClick={toggle} className={classes.content}>
         <Nav />
      </div>
      
    </div>
   );
}

export default Drawer;