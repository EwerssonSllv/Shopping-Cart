import { Home } from "./pages/home";
import { Cart } from "./pages/cart";
import { createBrowserRouter } from "react-router";
import { Layout } from "./components/layout";
import { Details } from "./pages/details";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [{
      path: "/",
      element: <Home />
    },
    {
      path: "/cart",
      element: <Cart />
    },
    {
      path: "details/:id",
      element: <Details />
    }]
  }
])

export { router }