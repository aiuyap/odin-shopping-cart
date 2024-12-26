import { ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export function Navbar({ itemOnCart }) {
  let numOfItems = 0;

  itemOnCart.forEach((item) => {
    numOfItems = numOfItems + item.amount;
  });

  return (
    <div className="fixed flex h-12 w-screen items-center justify-between bg-black px-8 text-white shadow-md">
      <Link to="/" className="text-3xl font-bold">
        TheShop
      </Link>
      <nav className="flex justify-center gap-4 text-xl">
        <Link to="/" className="hover:underline active:underline">
          Home
        </Link>
        <Link to="/shop" className="hover:underline active:underline">
          Shop
        </Link>
      </nav>
      <div className="flex cursor-pointer">
        {numOfItems > 0 && (
          <span className="relative flex size-5 items-center justify-center rounded-full bg-red-600 px-0.5 text-xs font-bold">
            {numOfItems}
          </span>
        )}
        <ShoppingCart />
      </div>
    </div>
  );
}

Navbar.propTypes = {
  itemOnCart: PropTypes.array,
};
