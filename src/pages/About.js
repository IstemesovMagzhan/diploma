import Header from "../components/Header/Header";
import aboutImage from "../assets/about.jpg";

function About() {
  return ( 
    <>
      <Header 
        title="Small Business NOW."
        image={aboutImage}>
        <p>We believe a thoughtfully designed work space sets the stage for better work…</p>
        
        
      </Header>
    </>
   );
}

export default About;