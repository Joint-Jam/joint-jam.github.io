import { Footer } from "@website/components/Footer.tsx";
import { NavBar } from "@website/components/NavBar.tsx";
import { Outlet } from "react-router-dom";

import styles from "./Layout.module.scss";

const isDevelopment = process.env.NODE_ENV == "development";

export const Layout = () => {
  return (
    <div className={isDevelopment ? "debug-screens" : ""}>
      {/* TODO: Remove the dev banner before shipping the website. */}
      {!isDevelopment && (
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
