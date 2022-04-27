import Header from "../components/Header/Header";
import chairsImage from "../assets/chairs.jpg";

function Chairs() {
  
  return ( 
    <>
    <Header
      title="Executive & Conference Chairs"
      image={chairsImage}>
      <p>In a private office or in the conference room, CHAIR executive and conference seating helps you sit like you run the place.</p>
    </Header>
  </>
    
   );
}

export default Chairs;