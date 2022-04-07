import "./Nav.css";

function Nav() {




  return (

    <nav className="Nav">
      <div className="container">
        <div className="Logo">
          <div>CHAIR</div>
          <span>Make your space work</span>
        </div>
        
        <ul>
          <li><a href="/">Home Furniture</a></li>
          <li><a href="/">Office Furniture</a></li>
          <li><a href="/">Mattresses </a></li>
          <li><a href="/">Kids Furniture</a></li>
          <li><a href="/">Contacts</a></li>
        </ul>
      </div>
    </nav>

  );
}

export default Nav;