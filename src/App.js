import Home from "./pages/Home/Home";
import Chairs from "./pages/Chairs/Chairs";
import Desks from "./pages/Dasks/Desks";
import Storage from "./pages/Storage/Storage";
import Accessories from "./pages/Accessories/Accessories";
import Contacts from "./pages/Contacts/Contacts";

import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Product from "./pages/Product";
import Categories from "./pages/Categories";
import Category from "./pages/Category";


function App() {
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path="/home" element={<Home />} />


          <Route path="/chairs" element={<Chairs />} />
          <Route path="/products/:productId" element={<Product />} />

          <Route path="/categories" element={<Categories />} />
          <Route path="/categories/:categoryId" element={<Category />} />

          {/* <Route path="/categoryId/:category" element={<SubCategory />} /> */}



          <Route path="/desks" element={<Desks />} />
          <Route path="/storage" element={<Storage />} />
          <Route path="/accessories" element={<Accessories />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
      </Layout>





    </div>
  );
}

export default App;
