import { useParams } from "react-router-dom";
import Header from "../components/Header/Header";
import { getProduct } from "../data/products";

function Product() {
  const params = useParams();
  const product = getProduct(params.productId);

  return (
    <>
      <Header
        title={product.title}
        image={product.image}>
        {product.discription}
      </Header>
    </>
  );
}

export default Product;