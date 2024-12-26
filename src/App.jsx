import { Outlet } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { useEffect, useState } from "react";

function App() {
  const [products, setProducts] = useState();
  const [itemOnCart, setItemOnCart] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        setProducts(json);
      });
  }, []);

  function addToCart(id, amount) {
    let exists = false;
    itemOnCart.forEach((item) => {
      if (item.id === id) {
        exists = true;
      }
    });

    if (exists) {
      const newArr = [...itemOnCart];
      newArr.forEach((item) => {
        if (item.id == id) item.amount = item.amount + amount;
      });
      setItemOnCart(newArr);
    } else {
      setItemOnCart((current) => [...current, { id, amount }]);
    }
  }

  console.log(itemOnCart);

  return (
    <>
      <Navbar itemOnCart={itemOnCart} />
      <Outlet
        context={{
          products: products,
          itemOnCart: itemOnCart,
          setItemOnCart: setItemOnCart,
          addToCart: addToCart,
        }}
      />
    </>
  );
}

export default App;
