import { faDiscord, faGithub, faItchIo } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logoImage from "@website/assets/jj24logo.png";
import { PageUrls } from "@website/data/PageUrls.ts";
import clsx from "clsx";
import { Link } from "react-router-dom";
import style from "./NavBar.module.scss";

export const NavBar = () => {
  return (
    <nav className={style.nav}>
      <Link to={PageUrls.home()} className={clsx(style.navItem, style.logo)}>
        <img alt="Joint Jam Logo" src={logoImage}></img>
      </Link>
      <div className="flex flex-col justify-center w-full">
        <div className={style.navContent}>
          <div className={style.centerText}>
            <Link to={PageUrls.home()} className={clsx(style.navItem, "color-text")}>Past Events</Link>
            <Link to={PageUrls.home()} className={clsx(style.navItem, "color-text")}>Participating Schools</Link>
            <Link to={PageUrls.home()} className={clsx(style.navItem, "color-text")}>Sponsors</Link>
          </div>
          <div className={style.icons}>
            <Link to={"https://github.com/joint-jam"} className={clsx(style.navItem, "color-text")}><FontAwesomeIcon icon={faGithub}/></Link>
            <Link to={PageUrls.home()} className={clsx(style.navItem, "color-text")}><FontAwesomeIcon icon={faItchIo}/></Link>
            <Link to={PageUrls.home()} className={clsx(style.navItem, "color-text")}><FontAwesomeIcon icon={faDiscord}/></Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
