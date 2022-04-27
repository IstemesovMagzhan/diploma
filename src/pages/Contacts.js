import Header from "../components/Header/Header";
import contactsImage from "../assets/contacts.jpg";


function Contacts() {
  return ( 
    <>
      <Header
        title="Make your space work"
        image={contactsImage}>
        <p>Contacts +996702700834</p>
      </Header>
    </>
   );
}

export default Contacts;