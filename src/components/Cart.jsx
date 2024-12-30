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
        else if (item.amount > 1) item.amount = item.amount - 1;
      }
    });
    setItemOnCart(newArr);
  }

  function calculateItemSubtotal(price, amount) {
    return (price * amount).toFixed(2);
  }

  function calculateTotal() {
    return itemOnCart.reduce((total, item) => {
      return (
        total +
        Number(calculateItemSubtotal(products[item.id - 1].price, item.amount))
      );
    }, 0);
  }

  return (
    <div className="flex justify-center p-14">
      <Card className="min-w-80 p-4">
        <CardHeader>
          <CardTitle className="text-2xl">MY CART</CardTitle>
          <Separator />
        </CardHeader>
        <CardContent className="grid gap-4">
          {itemOnCart.length === 0 ? (
            <p className="text-gray-400"> Nothing in your cart yet :( </p>
          ) : (
            itemOnCart.map((item) => {
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
                        $
                        {calculateItemSubtotal(
                          products[item.id - 1].price,
                          item.amount,
                        )}
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
            })
          )}
        </CardContent>
        <CardHeader>
          <CardTitle className="text-2xl">TOTAL</CardTitle>
          <Separator />
        </CardHeader>
        <CardContent className="flex justify-between">
          <p className="text-3xl font-bold">
            ${itemOnCart.length === 0 ? "0.00" : calculateTotal().toFixed(2)}
          </p>
          <Button
            onClick={() =>
              alert(
                `Total amount to be paid is $${calculateTotal().toFixed(2)}. Checkout complete, wohoo!`,
              )
            }
          >
            Checkout
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
