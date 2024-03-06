import "@website/styles/globals.scss";

import { Layout } from "@website/components/Layout.tsx";
import { PageUrls } from "@website/data/PageUrls";
import { HomePage } from "@website/pages/HomePage";
import { SchoolsPage } from "@website/pages/SchoolsPage";
import { createHashRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";

const router = createHashRouter(
  createRoutesFromElements(
    <Route element={<Layout/>}>
      <Route path={PageUrls.home()} element={<HomePage/>}/>
      <Route path={PageUrls.schools()} element={<SchoolsPage/>}/>
    </Route>,
  ),
);

export const App = () => {
  return (
    <RouterProvider router={router}/>
  );
};
