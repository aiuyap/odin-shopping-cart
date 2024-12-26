import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "./ui/button";
import { Link, useOutletContext } from "react-router-dom";
import "./styles/Shop.css";

export function Shop() {
  const { products } = useOutletContext();

  return (
    <div className="grid gap-14 p-14 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {products ? (
        products.map((product) => {
          return (
            <Card className="grid min-w-min max-w-lg" key={product.id}>
              <CardHeader>
                <CardTitle>{product.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col items-center justify-center">
                <img src={product.image} className="max-w-32" />
              </CardContent>
              <CardFooter className="flex flex-col items-center justify-center gap-2">
                <p>
                  <span className="font-bold">${product.price}</span>
                </p>
                <div className="space-x-4">
                  <Link to={`/shop/${product.id}`}>
                    <Button variant="outline">View</Button>
                  </Link>
                  <Button>Add to Cart</Button>
                </div>
              </CardFooter>
            </Card>
          );
        })
      ) : (
        <div className="flex w-screen items-center justify-center px-14">
          <span className="loading"></span>
        </div>
      )}
    </div>
  );
}
