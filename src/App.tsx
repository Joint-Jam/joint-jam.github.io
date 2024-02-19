import "@website/styles/globals.css";

import { About } from "@website/pages/About.tsx";
import { Home } from "@website/pages/Home.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/about",
    element: <About/>,
  },
]);

export const App = () => {
  return (
    <RouterProvider router={router}/>
  );
};
