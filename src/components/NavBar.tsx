import { faDiscord, faGithub, faItchIo } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logoImage from "@website/assets/jointJamLogo.svg";
import { CurrentEvent } from "@website/data/Events";
import { PageUrls } from "@website/data/PageUrls.ts";
import clsx from "clsx";
import { Link } from "react-router-dom";

import styles from "./NavBar.module.scss";

export const NavBar = () => {
  return (
    <nav className={styles.nav2}>
      <Link to={PageUrls.home()} className={styles.logo}>
        <img alt="Joint Jam Logo" src={logoImage}></img>
      </Link>
      <div className={styles.content}>
        <div className={styles.left}>
          <Link to={PageUrls.home()} className={clsx(styles.home)}>Joint Jam</Link>
          <div className={styles.linkContainer}>
            <Link to={PageUrls.home()} className={clsx(styles.link, "striped-link")}>Past Events</Link>
            <Link to={PageUrls.schools()} className={clsx(styles.link, "striped-link")}>Participating Schools</Link>
            <Link to={PageUrls.home()} className={clsx(styles.link, "striped-link")}>Sponsors</Link>
          </div>
        </div>
        <div className={styles.right}>
          <Link to={PageUrls.external.github()} className={clsx(styles.link, "striped-link")}><FontAwesomeIcon icon={faGithub}/></Link>
          <Link to={CurrentEvent.itchUrl} className={clsx(styles.link, "striped-link")}><FontAwesomeIcon icon={faItchIo}/></Link>
          <Link to={PageUrls.external.discord()} className={clsx(styles.link, "striped-link")}><FontAwesomeIcon icon={faDiscord}/></Link>
        </div>
      </div>
      <div className={styles.after}></div>
    </nav>
  );
}
