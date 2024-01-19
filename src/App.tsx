import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Panel from "./admin-panel";
import Cards from "./pages/cards";
import Deletes from "./pages/deletes";
import Layout from "./components/Layout/Layout";
import Adds from "./pages/adds";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          path: "/panel",
          element: <Panel />,
        },
        {
          path: "/deletes",
          element: <Deletes />,
        },
        {
          path: "/adds",
          element: <Adds />,
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
