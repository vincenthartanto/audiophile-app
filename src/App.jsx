import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./Page/RootLayout";
import Homepage from "./Page/Homepage";
import CategoryPage from "./Page/CategoryPage";
import EarphoneCategory from "./Components/CategoryPage/EarphoneCategory";
import HeadphoneCategory from "./Components/CategoryPage/HeadphoneCategory";
import SpeakersCategory from "./Components/CategoryPage/SpeakersCategory";
import ProductPage from "./Page/ProductPage";
import CheckOutPage from "./Page/CheckOutPage";

function App() {
  const [count, setCount] = useState(0);
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout></RootLayout>,
      children: [
        {
          index: true,
          path: "",
          element: <Homepage> </Homepage>,
        },
        {
          path: "/category",
          element: <CategoryPage></CategoryPage>,
          children: [
            {
              path: "headphones",
              element: <HeadphoneCategory></HeadphoneCategory>,
              children: [],
            },
            {
              path: "earphones",
              element: <EarphoneCategory></EarphoneCategory>,
              children: [],
            },
            {
              path: "speakers",
              element: <SpeakersCategory></SpeakersCategory>,
              children: [],
            },
            {
              path: ":name/:id",
              element: <ProductPage></ProductPage>,
            },
          ],
        },
        {
          path: "/checkout",
          element: <CheckOutPage></CheckOutPage>,
        },
      ],
    },
  ]);
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
