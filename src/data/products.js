import productImage from "../assets/product.jpg";
import convergenceImage from "../assets/convergence.jpg";
import designerImage from "../assets/disigner.jpg";
import multiImage from "../assets/multi-chair.webp";

const products = [
  {
    image: productImage,
    productId: "Office Chair",
    categoryId: "chairs",
    title: "Office Chair",
    discription: `People come in all sorts of shapes and sizes, so why choose an office chair that's one-size-fits-all? It doesn't matter if you're big or small, Ignition® 2.0 is designed to fit your body, your environment, your style, and the way you get things done. With customized adjustability and remarkable intuition, this seating solution delivers superior support, exceptional comfort, and sleek style, all day, every day. Make your space work with Ignition® 2.0.`,
    price: 150,
  },
  {
    image: convergenceImage,
    productId: "Convergence Office Chair",
    categoryId: "chairs",
    title: "Convergence Office Chair",
    discription: `What happens when support and affordability come together? Convergence. This is the task chair that is as attainable as is it comfortable, with customizable features not often found on similarly priced products.`,
    price: 120,
  },
  {
    image: designerImage,
    productId: "Designer White Frame",
    categoryId: "chairs",
    title: "Cliq Office Chair | ",
    discription: `Have you ever immediately felt a connection after meeting someone new? Often our best and most enduring relationships begin on an instinctive level. Cliq seating was designed with that kind of intuition in mind: a chair that just “gets” you. The way you sit. The way you work. The way you get it all done. Make your space work with Cliq.`,
    price: 80,
  },
  {
    image: multiImage,
    productId: "Multi-Purpose Stacking Chair",
    categoryId: "chairs",
    title: "Ignition Multi-Purpose Stacking Chair | ",
    discription: `Multipurpose areas require a multifaceted seating solution. HON Ignition stacking chairs are the perfect answer for a variety of uses, and even better when the room isn't being used at all. The Black 4-way stretch mesh back can make even the longest meeting more pleasurable, and the foam seat cushioning delivers all-day comfort for an all-day training session. When you need to clear valuable floor space, the lightweight four-leg frame stacks four high. All-surface casters move as fast as you can, making rearranging a whole room a task for one. Out of the way when you want it, right in your comfort zone when you need it. Fabric and frame colors are Platinum.`,
    price: 99,
  },
  {
    image: productImage,
    productId: "Office Chair",
    categoryId: "chairs",
    title: "Office Chair",
    discription: `People come in all sorts of shapes and sizes, so why choose an office chair that's one-size-fits-all? It doesn't matter if you're big or small, Ignition® 2.0 is designed to fit your body, your environment, your style, and the way you get things done. With customized adjustability and remarkable intuition, this seating solution delivers superior support, exceptional comfort, and sleek style, all day, every day. Make your space work with Ignition® 2.0.`,
    price: 150,
  },
  {
    image: convergenceImage,
    productId: "Convergence Office Chair",
    categoryId: "chairs",
    title: "Convergence Office Chair",
    discription: `What happens when support and affordability come together? Convergence. This is the task chair that is as attainable as is it comfortable, with customizable features not often found on similarly priced products.`,
    price: 120,
  },
];

export function getProducts(categoryId) {
  if (categoryId) {
    return products.filter(product => product.categoryId === categoryId);
  }
  return products;
}


export function getProduct(productId) {
  return products[
    products.findIndex(
      product => product.productId === productId
    )
  ];
}