import { ShoppingCart } from "lucide-react";
import { Button } from "./components/ui/button";

function App() {
  return (
    <>
      <div className="fixed flex h-12 w-screen items-center justify-between bg-black px-4 text-white shadow-md">
        <h1 className="text-3xl font-bold">Shoppee</h1>
        <nav className="flex justify-center gap-4 text-xl">
          <a href="/">Home</a>
          <a href="/">Shop</a>
        </nav>
        <ShoppingCart />
      </div>
      <div className="bg-home-bg bg-cover bg-center">
        <div className="px flex min-h-screen flex-col items-center justify-center gap-8 bg-black bg-opacity-60 px-10">
          <h1 className="text-4xl font-bold text-white">Shoppee!</h1>
          <p className="text-lg tracking-wide text-white">
            Discover the Best Deals, Trendy Styles, and Unmatched Quality—All in
            One Place.
          </p>
          <Button>Shop now!</Button>
        </div>
      </div>
    </>
  );
}

export default App;
