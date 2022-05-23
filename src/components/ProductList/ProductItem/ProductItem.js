import classes from "./ProductItem.module.css";
import { Link } from "react-router-dom";

function ProductItem({product}) {
  return ( 
    <div className={classes.ProductItem}>
      <img src={product.image} />
      <div>
        <Link to={product.path}>{product.title}</Link>
        <div className={classes.price}>
          ${product.price}
        </div>
      </div>
    </div>
   );
}

export default ProductItem;