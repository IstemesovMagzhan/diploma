
import Tables from "./pages/Tables";
import Chairs from "./pages/Chairs";
import About from "./pages/About";
import Contacts from "./pages/Contacts";
import Desks from "./pages/Desks";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/tables" element={<Tables />} />
          <Route path="/chairs" element={<Chairs />} />
          <Route path="/desks" element={<Desks />} />
          <Route path="/about" element={<About />} />
          <Route path="/contacts" element={<Contacts/>} />
        </Routes>
      </Layout>
      

    
      
      
    </div>
  );
}

export default App;
