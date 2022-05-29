
import classes from "./Nav.module.css";
import NavItem from "./NavItem/NavItem";

function Nav() {

  return (
  <ul className={classes.Nav}>
    <NavItem url="/home"active>Home</NavItem>
    <NavItem url="/chairs" >Chairs</NavItem>
    <NavItem url="/desks">Desks</NavItem>
    <NavItem url="/storage">Storage</NavItem>
    <NavItem url="/accessories">Accessories</NavItem>
    <NavItem url="/contacts">Contacts</NavItem>
  </ul>

  );
}

export default Nav;