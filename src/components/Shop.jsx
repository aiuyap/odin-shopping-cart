import { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
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
    <div className="grid gap-14 p-14 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {products &&
        products.map((product) => {
          return (
            <Card className="grid min-w-min max-w-lg" key={product.id}>
              <CardHeader>
                <CardTitle>{product.title}</CardTitle>
                <CardDescription className="line-clamp-3">
                  {product.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col items-center justify-center">
                <img src={product.image} className="max-w-32" />
              </CardContent>
              <CardFooter className="flex flex-col items-center justify-center gap-2">
                <p>
                  <span className="font-bold">${product.price}</span>
                  <span className="flex items-end gap-1">
                    <Star className="fill-yellow-300" />
                    {product.rating.rate}
                  </span>
                </p>
                <Button>Add to Cart</Button>
              </CardFooter>
            </Card>
          );
        })}
    </div>
  );
}
