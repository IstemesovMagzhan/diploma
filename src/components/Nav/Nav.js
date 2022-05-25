
import classes from "./Nav.module.css";
import Logo from "../ui/Logo/Logo";
import NavItem from "./NavItem/NavItem";
import NavToggle from "./NavToggle/NavToggle";

function Nav() {




  return (

    <nav className={classes.Nav}>
      <div className={classes.container}>
      <Logo /> 
        <ul>
          <NavItem url="/home"active>Home</NavItem>
          <NavItem url="/chairs" >Chairs</NavItem>
          <NavItem url="/desks">Desks</NavItem>
          <NavItem url="/storage">Storage</NavItem>
          <NavItem url="/accessories">Accessories</NavItem>
          <NavItem url="/contacts">Contacts</NavItem>
        </ul>
        <NavToggle />
      </div>
    </nav>

  );
}

export default Nav;