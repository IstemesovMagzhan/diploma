import "./Header.css";
import headerImage from "../../assets/header.jpg";

function Header() {

  const style = {
    backgroundImage: `url(${headerImage})`,
    backgroundSize: "100% 100%"
  };
  
  return ( 
    <header style={style} className="Header" >
      <h1>CHAIRS</h1>
      <div>(207 Products)</div> 
      <p>Give a makeover to your home and create beautiful spaces with these elegant and thoughtfully designed chairs  Nilkamal. After a long and tiring day at work, all you need is to grab a Nilkamal</p>
    </header>
   );
}

export default Header; 