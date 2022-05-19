import Header from "../../components/Header/Header";
import contactsImage from "../../assets/contacts.jpg";


function Contacts() {
  return ( 
    <>
      <Header
        title="Make your space work"
        image={contactsImage}>
        
      </Header>
      <main>
        <div>Contacts +996702700834</div>
      </main>
    </>
   );
}

export default Contacts;