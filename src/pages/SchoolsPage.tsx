import { Heading, HeadingLevel } from "@ariakit/react";
import { Schools } from "@website/data/Schools";
import clsx from "clsx";
import { Link } from "react-router-dom";

import styles from "./SchoolsPage.module.scss";

export const SchoolsPage = () => {
  return (
    <div>
      <Heading>Participating Schools</Heading>
      {Schools.sort((a, b) => a.club.name.localeCompare(b.club.name)).map((school) => (
        <HeadingLevel key={school.key}>
          <div id={school.key} className={styles.school}>
            <img src={school.club.logo} alt={school.club.name} className={styles.logo}/>
            <div>
              <div>
                <Heading>{school.club.name}</Heading>
                <p className={styles.info}>{school.name}</p>
              </div>
              <div>
                <div className={styles.links}>
                  {school.club.urls.map(url => (
                    <Link key={url.name} to={url.url} className={clsx(styles.link, "striped-link")}>
                      {url.icon}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </HeadingLevel>
      ))}
    </div>
  );
}
