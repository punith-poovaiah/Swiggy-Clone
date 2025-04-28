import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import Details from "../Components/Details.jsx";

const appRoute = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/details/:id",
    element: <Details />,
  },
]);

createRoot(document.getElementById("root")).render(
  <>
    <RouterProvider router={appRoute} />
  </>
);
