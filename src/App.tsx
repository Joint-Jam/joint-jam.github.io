import "@website/styles/globals.scss";

import { Layout } from "@website/components/Layout.tsx";
import { HomePage } from "@website/pages/HomePage";
import { createHashRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";

const router = createHashRouter(
  createRoutesFromElements(
    <Route element={<Layout/>}>
      <Route path={"/"} element={<HomePage/>}/>
    </Route>,
  ),
);

export const App = () => {
  return (
    <RouterProvider router={router}/>
  );
};
