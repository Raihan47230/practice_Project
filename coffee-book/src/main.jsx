import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Components/Home";
import Deshboard from "./Components/Deshboard";
import Coffees from "./Components/Coffees";
import Root from "./Components/Root/Root";
import Cards from "./Components/Cards/Cards";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader:()=>fetch('pleace.json'),
        children:[
          {
            path:'/cards/:category',
            element:<Cards></Cards>
          }
        ]
      },
      {
        path: "/coffee",
        element: <Coffees></Coffees>,
        loader: () => fetch("Coffees.json"),
      },
      {
        path: "/deshboard",
        element: <Deshboard></Deshboard>,
      },
    ],
  },
  
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
);
