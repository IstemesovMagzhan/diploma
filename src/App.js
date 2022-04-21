import Nav from "./components/Nav/Nav";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Tables from "./pages/Tables";
import Chairs from "./pages/Chairs";
import About from "./pages/About";
import Contacts from "./pages/Contacts";
import Desks from "./pages/Desks";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      
      <Nav/>
      <Header />

      <Routes>
        <Route path="/chairs" element={<Chairs />} />
        <Route path="/tables" element={<Tables />} />
        <Route path="/desks" element={<Desks />} />
        <Route path="/about" element={<About />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>

    
      
      <Footer />
    </div>
  );
}

export default App;
