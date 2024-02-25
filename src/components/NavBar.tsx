import { faDiscord, faGithub, faItchIo } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logoimg from "@website/assets/jj24logo.png";
import { PageUrls } from "@website/data/PageUrls.ts";
import clsx from "clsx";
import { Link } from "react-router-dom";

const NavItem = ({ children, to, className = "" }: {children: React.ReactNode; to: string; className?: string}) => {
  return (
    <Link to={to} className={clsx(
      "whitespace-no-wrap",
      "mx-4 sm:mx-2 max-sm:my-2",
      "text-3xl",
      className,
    )}>
      {children}
    </Link>
  );
}

export const NavBar = () => {
  return (
    <div className="flex flex-row ml-4">
      <div className={"flex-none"}>
        <NavItem to={PageUrls.home()} className={"font-bold"}>
          <img alt="logo" className="w-64" src={ logoimg }></img>
        </NavItem>
      </div>
      <nav className="flex flex-col justify-center  ml-4 w-full">
        <div className="flex justify-between border-b-4 border-solid border-accent">
          <div className={"flex text-center color-text-shadow"}>
            <NavItem className="color-text" to={PageUrls.home()}>PAST EVENTS</NavItem>
            <NavItem className="color-text" to={PageUrls.home()}>PARTICIPATING SCHOOLS</NavItem>
            <NavItem className="color-text" to={PageUrls.home()}>SPONSORS</NavItem>
          </div>
          <div className={"flex-none"}>
            <NavItem className="color-text" to={"https://github.com/joint-jam"}><FontAwesomeIcon icon={faGithub}/></NavItem>
            <NavItem className="color-text" to={PageUrls.home()}><FontAwesomeIcon icon={faItchIo}/></NavItem>
            <NavItem className="color-text" to={PageUrls.home()}><FontAwesomeIcon icon={faDiscord}/></NavItem>
          </div>
        </div>
      </nav>
    </div>
  );
}
