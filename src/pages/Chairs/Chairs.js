import Header from "../../components/Header/Header";
import chairsImage from "../../assets/Office-Chairs.jpg";

function Chairs() {
  
  return ( 
    <>
    <Header
      title="Office Chairs"
      image={chairsImage}>
      <p>Stay productive and comfortable all day long with ergonomic office chairs designed with you in mind.</p>
    </Header>
  </>
    
   );
}

export default Chairs;