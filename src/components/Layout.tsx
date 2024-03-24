import { Footer } from "@website/components/Footer.tsx";
import { NavBar } from "@website/components/NavBar.tsx";
import { Outlet } from "react-router-dom";

import styles from "./Layout.module.scss";

const isDevelopment = process.env.NODE_ENV == "development";

export const Layout = () => {
  return (
    <div className={isDevelopment ? "debug-screens" : ""}>
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
