
import "./Nav.css";
import Logo from "../ui/Logo/Logo";
import NavItem from "./NavItem/NavItem";

function Nav() {




  return (

    <nav className="Nav">
      <Logo /> 
        <ul>
          <NavItem url="/"active>Tables</NavItem>
          <NavItem url="/" >Chairs</NavItem>
          <NavItem url="/">Desks</NavItem>
          <NavItem url="/">About</NavItem>
          <NavItem url="/">Contacts</NavItem>
        </ul>
    </nav>

  );
}

export default Nav;