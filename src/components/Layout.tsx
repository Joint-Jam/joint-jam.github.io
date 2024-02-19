import { Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <div>
      <header>
        Joint Jam
      </header>
      <main>
        <Outlet/>
      </main>
      <footer/>
    </div>
  )
}
