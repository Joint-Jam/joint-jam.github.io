import { NavBar } from "@website/components/NavBar.tsx";
import { Outlet } from "react-router-dom";
import styles from "./Layout.module.scss";

export const Layout = () => {
  return (
    <div>
      <header>
        <NavBar/>
      </header>
      <main className={styles.main}>
        <div className={styles.content}>
          <Outlet/>
        </div>
      </main>
      <footer/>
    </div>
  )
}
