import { faDiscord, faGithub, faItchIo } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { PageUrls } from "@website/data/PageUrls.ts";
import clsx from "clsx";
import { Link } from "react-router-dom";

const NavItem = ({ children, to, className = "" }: {children: React.ReactNode; to: string; className?: string}) => {
  return (
    <Link to={to} className={clsx(
      "whitespace-no-wrap",
      "mx-2 sm:mx-2 max-sm:my-2",
      className,
    )}>
      {children}
    </Link>
  );
}

export const NavBar = () => {
  return (
    <nav>
      <div className={clsx(
        "flex flex-col items-center justify-between sm:flex-row sm:items-end",
        "max-w-screen-md",
        "mx-auto my-4 px-4",
        "border-b-2 border-solid border-accent",
      )}>
        <div className={"flex-none"}>
          <NavItem to={PageUrls.home()} className={"text-3xl font-bold"}>JOINT JAM</NavItem>
        </div>
        <div className={"flex text-center color-text-shadow"}>
          <NavItem className="color-text" to={PageUrls.home()}>PAST EVENTS</NavItem>
          <NavItem className="color-text" to={PageUrls.home()}>PARTICIPATING SCHOOLS</NavItem>
          <NavItem className="color-text" to={PageUrls.home()}>SPONSORS</NavItem>
        </div>
        <div className={"flex-none color-text"}>
          <NavItem to={"https://github.com/joint-jam"}><FontAwesomeIcon icon={faGithub}/></NavItem>
          <NavItem to={PageUrls.home()}><FontAwesomeIcon icon={faItchIo}/></NavItem>
          <NavItem to={PageUrls.home()}><FontAwesomeIcon icon={faDiscord}/></NavItem>
        </div>
      </div>
    </nav>
  );
}
