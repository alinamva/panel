import axios from "axios";
import useSWR from "swr";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import * as React from "react";
import Panel from "./admin-panel";
import Products from "./admin-panel/products";

const fetcher = (url: string) => axios.get(url).then((res) => res.data);

function App() {
  const { data, error, isLoading } = useSWR(
    "https://fakestoreapi.com/products?sort=desc",
    fetcher
  );
  if (error) return "Error";
  if (isLoading) return "Loading ...";
  console.log(data);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Panel />,
      children: [
        {
          index: true,
          path: "/products",
          element: <Products />,
        },
      ],
    },
  ]);

  return (
    <>
      <React.StrictMode>
        <RouterProvider router={router} />
      </React.StrictMode>
    </>
  );
}

export default App;
