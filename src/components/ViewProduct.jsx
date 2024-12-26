import { Star } from "lucide-react";
import { useOutletContext, useParams } from "react-router-dom";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

export function ViewProduct() {
  const products = useOutletContext();
  const params = useParams();
  const id = Number(params.id) - 1;

  return (
    <div className="flex items-center justify-center">
      <div className="grid max-w-2xl gap-2 p-14">
        <h1 className="text-2xl font-bold">{products[id].title}</h1>
        <h3 className="text-sm text-gray-500">{products[id].category}</h3>
        <h2>{products[id].description}</h2>
        <img
          src={products[id].image}
          className="w-80 justify-self-center py-8"
        />
        <p className="text-xl font-bold">${products[id].price}</p>
        <p className="flex items-center gap-2">
          {products[id].rating.rate} <Star className="inline fill-yellow-300" />
          {products[id].rating.count} reviews
        </p>
        <div className="flex justify-center gap-2">
          <Button variant="outline">-</Button>
          <Input type="number" className="w-20" />
          <Button variant="outline">+</Button>
          <Button>Add to Cart</Button>
        </div>
      </div>
    </div>
  );
}
