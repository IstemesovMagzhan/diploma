
import "./Nav.css";
import Logo from "../ui/Logo/Logo";

function Nav() {




  return (

    <nav className="Nav">
      <Logo /> 
        <ul>
          <li><a href="/">Chairs</a></li>
          <li><a href="/">Tables</a></li>
          <li><a href="/">Desks</a></li>
          <li><a href="/">About</a></li>
          <li><a href="/">Contacts</a></li>
        </ul>
    </nav>

  );
}

export default Nav;