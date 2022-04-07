import "./Header.css";
import headerImage from "../../assets/header.jpg";

function Header() {

  const style = {
    backgroundImage: `url(${headerImage})`,
  };
  
  return ( 
    <header style={style} className="Header" >
      <h1>CHAIRS</h1>
      <div>(More than 200 Products)</div> 
    </header>
   );
}

export default Header; 