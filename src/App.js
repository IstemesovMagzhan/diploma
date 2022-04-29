
import Tables from "./pages/Tables";
import Chairs from "./pages/Chairs";
import About from "./pages/About";
import Contacts from "./pages/Contacts";
import Desks from "./pages/Desks";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";

function App() {
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path="/chairs" element={<Chairs />} />
          <Route path="/tables" element={<Tables />} />
          <Route path="/desks" element={<Desks />} />
          <Route path="/about" element={<About />} />
          <Route path="/contacts" element={<Contacts/>} />
        </Routes>
      </Layout>
      

    
      
      
    </div>
  );
}

export default App;
