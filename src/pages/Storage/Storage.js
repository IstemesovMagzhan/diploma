import Header from "../../components/Header/Header";
import chairsImage from "../../assets/Office-Chairs.jpg";

function Storage() {
  return ( 
    <>
    <Header
      title="Office Storage"
      image={chairsImage}>
      <p>Minimize your office clutter with storage solutions from pedestals to file cabinets that put your most-used items within reach, including your favorite mid-day snacks!</p>
    </Header>
  </>
   );
}

export default Storage;