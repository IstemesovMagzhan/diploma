import { useParams } from "react-router-dom";
import CartButton from "../components/CartButton/CartButton";

import { getProduct } from "../data/products";

function Product() {
  const params = useParams();
  const product = getProduct(params.productId);

  if (!product) {
    return null;
  }

  const styles = {
    width: "300px",
  }
  return (
    <>
      {/* <Header
        title={product.title}
        image={product.image} 
        alt={product.title} 
        style={styles}>
        {product.discription}
      </Header> */}
      <div>
          <h1>{product.title}</h1>
          <img src={product.image} alt={product.title} style={styles} />
          <p>{product.discription}</p>
        </div>
      <CartButton productId={params.productId}>Add to cart</CartButton>
    </>
  );
}

export default Product;