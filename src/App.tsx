import "@website/styles/globals.scss";

import { HeadingLevel } from "@ariakit/react";
import { Layout } from "@website/components/Layout.tsx";
import { PageUrls } from "@website/data/PageUrls";
import { HomePage } from "@website/pages/HomePage";
import { SchoolsPage } from "@website/pages/SchoolsPage";
import { SponsorsPage } from "@website/pages/SponsorsPage.tsx";
import { createHashRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";

const router = createHashRouter(
  createRoutesFromElements(
    <Route element={<Layout/>}>
      <Route path={PageUrls.home()} element={<HomePage/>}/>
      <Route path={PageUrls.schools()} element={<SchoolsPage/>}/>
      <Route path={PageUrls.sponsors()} element={<SponsorsPage/>}/>
    </Route>,
  ),
);

export const App = () => {
  return (
    <HeadingLevel>
      <RouterProvider router={router}/>
    </HeadingLevel>
  );
};
