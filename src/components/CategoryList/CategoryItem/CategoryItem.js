import classes from "./CategoryItem.module.css";
import { Link } from "react-router-dom";

function CategoryItem({category}) {
  return ( 
    <div className={classes.CategoryItem}>
        <img src={category.image} alt={category.title}/>
        <Link to={"/categories/" + category.categorytId}>{category.title}</Link>
    </div>
   );
}

export default CategoryItem;