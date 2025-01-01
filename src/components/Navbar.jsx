import { ShoppingCart } from "lucide-react";
import { Link, NavLink } from "react-router-dom";
import PropTypes from "prop-types";

export function Navbar({ itemOnCart }) {
  let numOfItems = 0;
  const inactiveLink =
    "flex h-12 items-center justify-center transition-all px-4 hover:border-t-4";
  const activeLink =
    "flex h-12 items-center justify-center transition-all border-t-4 px-4";

  itemOnCart.forEach((item) => {
    numOfItems = numOfItems + item.amount;
  });

  return (
    <div className="fixed flex h-12 w-screen items-center justify-between bg-black px-8 text-white shadow-md">
      <Link to="/" className="hidden text-3xl font-bold sm:block">
        TheShop
      </Link>
      <nav className="flex h-full items-center justify-center text-xl">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? activeLink : inactiveLink)}
        >
          Home
        </NavLink>
        <NavLink
          to="/shop"
          className={({ isActive }) => (isActive ? activeLink : inactiveLink)}
        >
          Shop
        </NavLink>
      </nav>
      <Link to="/cart" className="w-11">
        <div className="flex cursor-pointer justify-end">
          {numOfItems > 0 && (
            <span className="relative flex size-5 items-center justify-center rounded-full bg-red-600 px-0.5 text-xs font-bold">
              {numOfItems}
            </span>
          )}
          <ShoppingCart />
        </div>
      </Link>
    </div>
  );
}

Navbar.propTypes = {
  itemOnCart: PropTypes.array,
};
