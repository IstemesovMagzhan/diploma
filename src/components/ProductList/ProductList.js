import ProductItem from "./ProductItem/ProductItem";
import classes from "./ProductList.module.css";

function ProductList({ products }) {

  const productItem = Object.keys(products).map(id => (
    <ProductItem key={id} product={products[id]} />
  ));
  return (
    <div className={classes.ProductList}>
      {productItem}
    </div>
  );
}

export default ProductList;