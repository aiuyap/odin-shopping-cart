import { ShoppingCart } from "lucide-react";

export function Navbar() {
  return (
    <div className="fixed flex h-12 w-screen items-center justify-between bg-black px-4 text-white shadow-md">
      <h1 className="text-3xl font-bold">Shoppee</h1>
      <nav className="flex justify-center gap-4 text-xl">
        <a href="/">Home</a>
        <a href="/">Shop</a>
      </nav>
      <ShoppingCart />
    </div>
  );
}
