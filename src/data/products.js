import productImage from "../assets/product.jpg";
import convergenceImage from "../assets/convergence.jpg";
import designerImage from "../assets/disigner.jpg";
import multiImage from "../assets/multi-chair.webp";

const products = [
  {
    image: productImage,
    productId: "Office Chair",
    title: "Office Chair",
    price: 150,
  },
  {
    image: convergenceImage,
    productId: "Convergence Office Chair",
    title: "Convergence Office Chair",
    price: 120,
  },
  {
    image: designerImage,
    productId: "Designer White Frame",
    title: "Cliq Office Chair | Designer White Frame",
    price: 80,
  },
  {
    image: multiImage,
    productId: "Multi-Purpose Stacking Chair",
    title: "Ignition Multi-Purpose Stacking Chair | Titanium Frame",
    price: 99,
  }
];

export function getProducts() {
  return products;
}