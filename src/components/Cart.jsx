import { Separator } from "./ui/separator";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { useOutletContext } from "react-router-dom";
import { Button } from "./ui/button";
import { Trash2 } from "lucide-react";

export function Cart() {
  const { products, itemOnCart, setItemOnCart } = useOutletContext();

  function removeItem(id) {
    setItemOnCart(itemOnCart.filter((item) => item.id !== id));
  }

  function changeItemAmount(id, isAdd) {
    const newArr = [...itemOnCart];
    newArr.forEach((item) => {
      if (item.id === id) {
        if (isAdd) item.amount = item.amount + 1;
        else item.amount = item.amount - 1;
      }
    });
    setItemOnCart(newArr);
  }

  return (
    <div className="flex justify-center p-14">
      <Card className="p-4">
        <CardHeader>
          <CardTitle className="text-2xl">MY CART</CardTitle>
          <Separator />
        </CardHeader>
        <CardContent className="grid gap-4">
          {itemOnCart.map((item) => {
            return (
              <div
                key={item.id}
                className="grid-cols-custom-grid grid items-center gap-4"
              >
                <img src={products[item.id - 1].image} className="w-14" />
                <div className="grid">
                  <h2>{products[item.id - 1].title}</h2>
                  <div className="flex items-center gap-4">
                    <p className="text-lg font-bold">
                      ${products[item.id - 1].price}
                    </p>
                    <div className="flex items-center">
                      <Button
                        variant="ghost"
                        onClick={() => changeItemAmount(item.id, false)}
                      >
                        -
                      </Button>
                      {item.amount}
                      <Button
                        variant="ghost"
                        onClick={() => changeItemAmount(item.id, true)}
                      >
                        +
                      </Button>
                    </div>
                  </div>
                </div>
                <div>
                  <Button
                    variant="destructive"
                    onClick={() => removeItem(item.id)}
                  >
                    <Trash2 />
                  </Button>
                </div>
              </div>
            );
          })}
        </CardContent>
        <CardHeader>
          <CardTitle className="text-2xl">TOTAL</CardTitle>
          <Separator />
        </CardHeader>
        <CardContent className="flex justify-between">
          <p className="text-3xl font-bold">$69.69</p>
          <Button>Checkout</Button>
        </CardContent>
      </Card>
    </div>
  );
}
