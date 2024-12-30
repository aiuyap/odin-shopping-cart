import { Separator } from "./ui/separator";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { useOutletContext } from "react-router-dom";
import { Button } from "./ui/button";
import { Trash2 } from "lucide-react";

export function Cart() {
  const { products, itemOnCart } = useOutletContext();

  return (
    <div className="flex p-14">
      <Card className="p-4">
        <CardHeader>
          <CardTitle className="text-2xl">MY CART</CardTitle>
          <Separator />
        </CardHeader>
        <CardContent>
          <div className="flex items-center gap-4">
            <img src={products[itemOnCart[0].id - 1].image} className="w-14" />
            <div className="grid">
              <h2>{products[itemOnCart[0].id - 1].title}</h2>
              <p className="text-xl font-bold">
                ${products[itemOnCart[0].id - 1].price}
              </p>
            </div>
            <div>
              <Button variant="destructive">
                <Trash2 />
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
