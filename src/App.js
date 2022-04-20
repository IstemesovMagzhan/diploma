import Nav from "./components/Nav/Nav";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Tables from "./pages/Tables";
import Chairs from "./pages/Chairs";
import About from "./pages/About";
import Contacts from "./pages/Contacts";
import Desks from "./pages/Desks";

function App() {
  return (
    <div className="App">
      
      <Nav/>
      <Header />

      <Chairs />
      <Tables />
      <Desks />
      <About />
      <Contacts />
      
      <Footer />
    </div>
  );
}

export default App;
