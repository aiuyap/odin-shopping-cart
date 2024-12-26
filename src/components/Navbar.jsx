import { ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";

export function Navbar() {
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
      <ShoppingCart />
    </div>
  );
}
