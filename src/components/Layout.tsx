import { PageUrls } from "@website/data/PageUrls.ts";
import { Link, Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <div>
      <header className={"flex flex-row space-x-2"}>
        <p>Joint Jam</p>
        <Link to={PageUrls.home()}>Home</Link>
        <Link to={PageUrls.about()}>About</Link>
      </header>
      <main>
        <Outlet/>
      </main>
      <footer/>
    </div>
  )
}
