import { faDiscord, faGithub, faItchIo } from "@fortawesome/free-brands-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
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
        <Link to={PageUrls.home()} className={clsx(styles.home)}>Joint Jam</Link>
        <input type="checkbox" id="menuToggle" className={styles.menuToggle}/>
        {/* TODO: Figure out why this eslint-disable is necessary. I can't get it to not error. */}
        {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
        <label htmlFor="menuToggle" className={styles.menuLabel}><FontAwesomeIcon icon={faBars} size="2x"/></label>
        <div className={styles.menu}>
          <div className={styles.left}>
            <Link to={PageUrls.home()} className={clsx(styles.link, "striped-link")}>Past Events</Link>
            <Link to={PageUrls.schools()} className={clsx(styles.link, "striped-link")}>Participating Schools</Link>
            <Link to={PageUrls.home()} className={clsx(styles.link, "striped-link")}>Sponsors</Link>
          </div>
          <div className={styles.right}>
            <Link to={PageUrls.external.github()} className={clsx(styles.link, "striped-link")}><FontAwesomeIcon icon={faGithub}/></Link>
            <Link to={CurrentEvent.itchUrl} className={clsx(styles.link, "striped-link")}><FontAwesomeIcon icon={faItchIo}/></Link>
            <Link to={PageUrls.external.discord()} className={clsx(styles.link, "striped-link")}><FontAwesomeIcon icon={faDiscord}/></Link>
          </div>
        </div>
      </div>
      <div className={styles.after}></div>
    </nav>
  );
}
