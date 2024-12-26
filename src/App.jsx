import { Outlet } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { useEffect, useState } from "react";

function App() {
  const [products, setProducts] = useState();
  const [itemOnCart, setItemOnCart] = useState(0);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        setProducts(json);
      });
  }, []);

  return (
    <>
      <Navbar itemOnCart={itemOnCart} />
      <Outlet
        context={{
          products: products,
          itemOnCart: itemOnCart,
          setItemOnCart: setItemOnCart,
        }}
      />
    </>
  );
}

export default App;
