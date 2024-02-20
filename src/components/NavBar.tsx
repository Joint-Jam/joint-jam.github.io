import { faDiscord, faGithub, faItchIo } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { PageUrls } from "@website/data/PageUrls.ts";
import clsx from "clsx";
import { Link } from "react-router-dom";

const NavItem = ({children, to, className = ""}: {children: React.ReactNode, to: string, className?: string}) => {
  return (
    <Link to={to} className={clsx(
      "whitespace-no-wrap",
      "mx-2 sm:mx-4 max-sm:my-2",
      className
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
        "border-b-2 border-dashed border-accent",
      )}>
        <div className={"flex-none"}>
          <NavItem to={PageUrls.home()} className={"text-2xl font-bold"}>Joint Jam</NavItem>
        </div>
        <div className={"flex text-center"}>
          <NavItem to={PageUrls.home()}>Past Events</NavItem>
          <NavItem to={PageUrls.home()}>Participating Schools</NavItem>
          <NavItem to={PageUrls.home()}>Sponsors</NavItem>
        </div>
        <div className={"flex-none"}>
          <NavItem to={"https://github.com/joint-jam"}><FontAwesomeIcon icon={faGithub}/></NavItem>
          <NavItem to={PageUrls.home()}><FontAwesomeIcon icon={faItchIo}/></NavItem>
          <NavItem to={PageUrls.home()}><FontAwesomeIcon icon={faDiscord}/></NavItem>
        </div>
      </div>
    </nav>
  );
}
