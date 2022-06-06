
import classes from "./Nav.module.css";
import NavItem from "./NavItem/NavItem";
import { BsChevronRight } from "react-icons/bs";

function Nav() {

  return (
  <ul className={classes.Nav}>
    <NavItem url="/home"active>Home <BsChevronRight className={classes.bs} /></NavItem>
    <NavItem url="/chairs" >Chairs<BsChevronRight className={classes.bs} /></NavItem>
    <NavItem url="/desks">Desks<BsChevronRight className={classes.bs} /></NavItem>
    <NavItem url="/storage">Storage<BsChevronRight className={classes.bs} /></NavItem>
    <NavItem url="/accessories">Accessories<BsChevronRight className={classes.bs} /></NavItem>
    <NavItem url="/contacts">Contacts<BsChevronRight className={classes.bs} /></NavItem>
  </ul>

  );
}

export default Nav;