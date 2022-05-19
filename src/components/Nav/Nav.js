
import "./Nav.css";
import Logo from "../ui/Logo/Logo";
import NavItem from "./NavItem/NavItem";

function Nav() {




  return (

    <nav className="Nav">
      <div className="container">
      <Logo /> 
        <ul>
          <NavItem url="/home"active>Home</NavItem>
          <NavItem url="/chairs" >Chairs</NavItem>
          <NavItem url="/desks">Desks</NavItem>
          <NavItem url="/storage">Storage</NavItem>
          <NavItem url="/accessories">Accessories</NavItem>
          <NavItem url="/contacts">Contacts</NavItem>
        </ul>
      </div>
    </nav>

  );
}

export default Nav;