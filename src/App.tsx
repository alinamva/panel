import { createBrowserRouter, RouterProvider } from "react-router-dom";
import * as React from "react";
import Panel from "./admin-panel";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Panel />,
      children: [
        {
          index: true,
          path: "/panel",
          element: <Panel />,
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
