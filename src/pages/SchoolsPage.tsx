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
              {school.club.urls.map(url => (
                <Link key={url.name} to={url.url} className={clsx(styles.link, "striped-link")}>
                  {url.icon}
                </Link>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
