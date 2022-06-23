import { useDispatch } from "react-redux";
import classes from "./CartButton.module.css"

export default function CartButton({ productId, children }) {
  const dispatch = useDispatch();

  function onAddToCart() {
    dispatch({ type: 'cart/add', payload: productId });
  }

  return (
    <button className={classes.CartButton} onClick={onAddToCart}>{children}</button>
  );
}