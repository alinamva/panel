import axios from "axios";
import useSWR from "swr";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import * as React from "react";
import Panel from "./admin-panel";

const fetcher = (url: string) => axios.get(url).then((res) => res.data);

function App() {
  const { data, error, isLoading } = useSWR(
    "https://fakestoreapi.com/products?sort=desc",
    fetcher
  );
  if (error) return "Error";
  if (isLoading) return "Loading ...";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Panel data={data} />,
      children: [
        {
          index: true,
          path: "/panel",
          element: <Panel data={data} />,
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
