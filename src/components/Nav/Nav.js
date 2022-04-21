
import "./Nav.css";
import Logo from "../ui/Logo/Logo";
import NavItem from "./NavItem/NavItem";

function Nav() {




  return (

    <nav className="Nav">
      <Logo /> 
        <ul>
          <NavItem url="/tables"active>Tables</NavItem>
          <NavItem url="/chairs" >Chairs</NavItem>
          <NavItem url="/desks">Desks</NavItem>
          <NavItem url="/about">About</NavItem>
          <NavItem url="/contacts">Contacts</NavItem>
        </ul>
    </nav>

  );
}

export default Nav;