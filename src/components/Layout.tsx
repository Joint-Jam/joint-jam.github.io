import { Footer } from "@website/components/Footer.tsx";
import { NavBar } from "@website/components/NavBar.tsx";
import { Outlet } from "react-router-dom";

import styles from "./Layout.module.scss";

declare const process: any;

export const Layout = () => {
  return (
    <div>
      {/* TODO: Remove the dev banner before shipping the website. */}
      {(process.env.NODE_ENV !== "development") && (
        <div className={styles.devBanner}>
          This Webpage is still in development. Some info may be incorrect or missing. Please check back later.
        </div>
      )}
      <header>
        <NavBar/>
      </header>
      <main className={styles.main}>
        <div className={styles.content}>
          <Outlet/>
        </div>
      </main>
      <footer>
        <Footer/>
      </footer>
    </div>
  )
}
