import Header from "../../components/Header/Header";
import dasksImage from "../../assets/desks.jpg";
import ProductList from "../../components/ProductList/ProductList";
import { getProducts } from "../../data/products";

function Desks() {
  return ( 
    <>
      <Header 
        title="Executive Desks"
        image={dasksImage}>
        <p>HON executive desks give you the space to call the shots in style. HON executive desks combine a hard-working space with a luxurious, sophisticated style that sends a message.</p>
      </Header>

      <ProductList products={getProducts()} />

    </>
   );
}

export default Desks;