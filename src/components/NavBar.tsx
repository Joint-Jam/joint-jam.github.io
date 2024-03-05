import { faDiscord, faGithub, faItchIo } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logoImage from "@website/assets/jointJamLogo.svg";
import { PageUrls } from "@website/data/PageUrls.ts";
import clsx from "clsx";
import { Link } from "react-router-dom";

import styles from "./NavBar.module.scss";

export const NavBar = () => {
  return (
    <nav className={styles.nav}>
      {/* this is horrible and really bad someone please destroy this */}
      <div className="flex flex-col justify-center w-10">
        <div className={styles.navContent}>
          <Link to={PageUrls.home()} className={clsx(styles.navItem, styles.transparent)}>. </Link>
        </div>
      </div>
      <Link to={PageUrls.home()} className={clsx(styles.navItem, styles.logo)}>
        <img alt="Joint Jam Logo" src={logoImage}></img>
      </Link>
      <div className="flex flex-col justify-center w-full">
        <div className={styles.navContent}>
          <div className={styles.centerText}>
            <Link to={PageUrls.home()} className={clsx(styles.navItem, "striped-link")}>Past Events</Link>
            <Link to={PageUrls.home()} className={clsx(styles.navItem, "striped-link")}>Participating Schools</Link>
            <Link to={PageUrls.home()} className={clsx(styles.navItem, "striped-link")}>Sponsors</Link>
          </div>
          <div className={styles.icons}>
            <Link to={"https://github.com/joint-jam"} className={clsx(styles.navItem, "striped-link")}><FontAwesomeIcon icon={faGithub}/></Link>
            <Link to={PageUrls.home()} className={clsx(styles.navItem, "striped-link")}><FontAwesomeIcon icon={faItchIo}/></Link>
            <Link to={PageUrls.home()} className={clsx(styles.navItem, "striped-link")}><FontAwesomeIcon icon={faDiscord}/></Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
