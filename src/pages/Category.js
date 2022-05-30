import { useParams } from "react-router-dom";
import Header from "../components/Header/Header";
import { getCategory } from "../data/categories";

function Category() {
  const params = useParams();
  const category = getCategory(params.categoryId);

  return (
    <>
      <Header
        title={category.title}
        image={category.image}>
          {category.discription}
      </Header>
    </>
  );
}

export default Category;