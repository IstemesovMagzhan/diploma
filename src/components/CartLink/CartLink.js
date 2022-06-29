import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import classes from "./CartLink.module.css";
import { BsCart3 } from "react-icons/bs";

export default function CartLink() {
  const number = useSelector(store => {
    return Object.values(store.cart.items).reduce((sum, number) => sum + number, 0);
  });

  return (
    <NavLink to="/cart" className={classes.CartLink}> <BsCart3 className="BsCart3" /> ({number})</NavLink>
  );
}