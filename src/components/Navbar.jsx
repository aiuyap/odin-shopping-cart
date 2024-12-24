import { ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";

export function Navbar() {
  return (
    <div className="fixed flex h-12 w-screen items-center justify-between bg-black px-8 text-white shadow-md">
      <Link to="/" className="text-3xl font-bold">
        Shoppee
      </Link>
      <nav className="flex justify-center gap-4 text-xl">
        <Link to="/">Home</Link>
        <Link to="/shop">Shop</Link>
      </nav>
      <ShoppingCart />
    </div>
  );
}
