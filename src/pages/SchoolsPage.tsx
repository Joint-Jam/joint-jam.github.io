import { faDiscord, faItchIo } from "@fortawesome/free-brands-svg-icons";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Schools } from "@website/data/Schools";
import clsx from "clsx";
import { Link } from "react-router-dom";

import styles from "./SchoolsPage.module.scss";

export const SchoolsPage = () => {
  return (
    <div>
      <h1>Participating Schools</h1>
      {Schools.sort((a, b) => a.club.name.localeCompare(b.club.name)).map((school) => (
        <div key={school.key} id={school.key} className={styles.school}>
          <img src={school.club.logo} alt={school.club.name} className={styles.logo}/>
          <div>
            <h3>{school.club.name}</h3>
            <p className={styles.info}>{school.name}</p>
            <div className={styles.links}>
              {school.club.websiteUrl &&
                <Link to={school.club.websiteUrl} className={clsx(styles.link, "striped-link")}>
                  <FontAwesomeIcon icon={faArrowUpRightFromSquare}/>
                </Link>
              }
              {school.club.discordUrl &&
                <Link to={school.club.discordUrl} className={clsx(styles.link, "striped-link")}>
                  <FontAwesomeIcon icon={faDiscord}/>
                </Link>
              }
              {school.club.itchUrl &&
                <Link to={school.club.itchUrl} className={clsx(styles.link, "striped-link")}>
                  <FontAwesomeIcon icon={faItchIo}/>
                </Link>
              }
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
