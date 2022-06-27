import classes from "./ProductItem.module.css";
import { BsCart3 } from "react-icons/bs";
import { Link, useParams } from "react-router-dom";


function ProductItem({ product }) {
  const params = useParams();
  return (
    <div className={classes.ProductItem}>
      <div className={classes.wrapper}>
        <div className={classes.container}>
          <div className={classes.top}>
            <img src={product.image} alt="img" />
          </div>
          <div className={classes.bottom}>
            <div className={classes.left}>
              <Link to={"/products/" + product.productId}>
                <div className={classes.details}>
                  <section>{product.title}</section>
                  <p>${product.price}</p>
                </div>
              </Link>
              <div className={classes.buy}><i><BsCart3 className={classes.bs} /></i></div>

            </div>
          </div>
        </div>


        <div className={classes.inside}>
          <div className={classes.icon}><i class={`${classes.material} ${classes.icons}`}>info_outline</i></div>
          <div className={classes.contents}>
            <table>
              <tr>
                <th>Width</th>
                <th>Height</th>
              </tr>
              <tr>
                <td>3000mm</td>
                <td>4000mm</td>
              </tr>
              <tr>
                <th>Something</th>
                <th>Something</th>
              </tr>
              <tr>
                <td>200mm</td>
                <td>200mm</td>
              </tr>
              <tr>
                <th>Something</th>
                <th>Something</th>
              </tr>
              <tr>
                <td>200mm</td>
                <td>200mm</td>
              </tr>
              <tr>
                <th>Something</th>
                <th>Something</th>
              </tr>
              <tr>
                <td>200mm</td>
                <td>200mm</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </div>
    // <div className={classes.ProductItem}>
    //   <img src={product.image} />
    //   <div>
    //     <Link to={"/products/" + product.productId}>{product.title}</Link>
    //     <div className={classes.price}>
    //       ${product.price}
    //     </div>
    //   </div>
    // </div>
  );
}

export default ProductItem;