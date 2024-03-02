import { faDiscord, faGithub, faItchIo } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logoImage from "@website/assets/jj24logo.png";
import { PageUrls } from "@website/data/PageUrls.ts";
import clsx from "clsx";
import { Link } from "react-router-dom";

import styles from "./NavBar.module.scss";

export const NavBar = () => {
  return (
    <nav className={styles.nav}>
      <Link to={PageUrls.home()} className={clsx(styles.navItem, styles.logo)}>
        <img alt="Joint Jam Logo" src={logoImage}></img>
      </Link>
      <div className="flex flex-col justify-center w-full">
        <div className={styles.navContent}>
          <div className={styles.centerText}>
            <Link to={PageUrls.home()} className={clsx(styles.navItem, "color-text")}>Past Events</Link>
            <Link to={PageUrls.home()} className={clsx(styles.navItem, "color-text")}>Participating Schools</Link>
            <Link to={PageUrls.home()} className={clsx(styles.navItem, "color-text")}>Sponsors</Link>
          </div>
          <div className={styles.icons}>
            <Link to={"https://github.com/joint-jam"} className={clsx(styles.navItem, "color-text")}><FontAwesomeIcon icon={faGithub}/></Link>
            <Link to={PageUrls.home()} className={clsx(styles.navItem, "color-text")}><FontAwesomeIcon icon={faItchIo}/></Link>
            <Link to={PageUrls.home()} className={clsx(styles.navItem, "color-text")}><FontAwesomeIcon icon={faDiscord}/></Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
