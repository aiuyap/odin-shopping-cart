import { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Star } from "lucide-react";
import { Button } from "./ui/button";

export function Shop() {
  const [products, setProducts] = useState();

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        setProducts(json);
      });
  }, []);

  return (
    <div className="p-14">
      <Card className="max-w-lg">
        <CardHeader>
          <CardTitle>{products[0].title}</CardTitle>
          <CardDescription>{products[0].description}</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col items-center justify-center gap-2">
          <img src={products[0].image} className="w-48" />
          <p>
            ${products[0].price}
            <span className="flex items-end gap-1">
              <Star className="fill-yellow-300" />
              {products[0].rating.rate}
            </span>
          </p>
          <Button>Add to Cart</Button>
        </CardContent>
      </Card>
    </div>
  );
}
