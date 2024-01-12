import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Panel from "./admin-panel";
import Cards from "./pages/cards";

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
    {
      path: "cards",
      element: <Cards />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
