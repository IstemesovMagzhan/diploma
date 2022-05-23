import Header from "../../components/Header/Header";
import chairsImage from "../../assets/Office-Chairs.jpg";
import ProductList from "../../components/ProductList/ProductList";
import productImage from "../../assets/product.jpg";
import convergenceImage from "../../assets/convergence.jpg";
import designerImage from "../../assets/disigner.jpg";
import multiImage from "../../assets/multi-chair.webp";

function Chairs() {
  
  const products = {
    Office: {
      image: productImage,
      path: "/",
      title: "Office Chair",
      price: 150,
    },
    convergence: {
      image: convergenceImage,
      path: "/",
      title: "Convergence Office Chair",
      price: 120,
    },
    designer: {
      image: designerImage,
      path: "/",
      title: "Cliq Office Chair | Designer White Frame",
      price: 80,
    },
    multi: {
      image: multiImage,
      path: "/",
      title: "Ignition Multi-Purpose Stacking Chair | Titanium Frame",
      price: 99,
    }
  }; //temporarily


  return ( 
    <>
    <Header
      title="Office Chairs"
      image={chairsImage}>
      <p>Stay productive and comfortable all day long with ergonomic office chairs designed with you in mind.</p>
    </Header>
    
    
    <ProductList products={products} />
  </>
    
   );
}

export default Chairs;