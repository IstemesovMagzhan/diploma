import chairsCategoryImage from "../assets/category-chair.webp";
import descksCategoryImage from "../assets/category-descks2.webp";
import accessoriesCategoryImage from "../assets/category-accessories.webp";
import storageCategoryImage from "../assets/category-storage.webp";

const categories = [
  {
    
    categoryId: "chairs",
    title: "Chairs",
    image: chairsCategoryImage,
    discription: "1",
  },
  {
    categoryId: "descks",
    title: descksCategoryImage,
    discription: "b",
  },
  {
    categoryId: "storage",
    title: accessoriesCategoryImage,
    discription: "3",
  },
  {
    categoryId: "accessories",
    title: storageCategoryImage,
    discription: "4",
  }
];

export function getCategories() {
  return categories;
}


export function getCategory(categoryId) {
  return categories[
    categories.findIndex(
      category => category.categoryId === categoryId
    )
  ];
}