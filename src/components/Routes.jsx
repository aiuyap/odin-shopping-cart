import App from "@/App";
import { Shop } from "./Shop";
import { Home } from "./Home";
import { ViewProduct } from "./ViewProduct";
import { Cart } from "./Cart";
import { ErrorPage } from "./ErrorPage";

export const routes = [
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "shop",
        element: <Shop />,
      },
      {
        path: "shop/:id",
        element: <ViewProduct />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
    ],
  },
];
