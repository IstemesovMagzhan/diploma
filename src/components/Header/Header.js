import "./Header.css";

function Header({ image, title, children,}) {
 
  return ( 
    
    <header className="Header" >
      <img src={image} />
      <section>
        <h1>{title}</h1>
        <div>{children}</div>
      </section> 
    </header>
   );
}

export default Header; 