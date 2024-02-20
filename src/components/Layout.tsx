import { NavBar } from "@website/components/NavBar.tsx";
import { Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <div>
      <header>
        <NavBar/>
      </header>
      <main>
        <Outlet/>
      </main>
      <footer/>
    </div>
  )
}
