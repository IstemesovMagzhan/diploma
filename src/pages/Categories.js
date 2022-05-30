import Header from "../components/Header/Header";
import chairsImage from "../assets/Office-Chairs.jpg";
import { getCategories} from "../data/categories";
import CategoryList from "../components/CategoryList/CategoryList";

function Categories() {
  
  return ( 
    <>
    <Header
      title="Shop by Category"
      image={chairsImage}>
      <p>Stay productive and comfortable all day long with ergonomic office chairs designed with you in mind.</p>
    </Header>
    
    
    <CategoryList categories={getCategories()} />

    
  </>
    
   );
}

export default Categories;