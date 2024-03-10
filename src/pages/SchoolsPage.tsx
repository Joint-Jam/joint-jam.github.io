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
          <div
            id={school.key}
            className={styles.school}
          >
            <img
              className={styles.logo}
              src={school.club.logo}
              alt={school.club.name}
            />

            <div
              className={styles.left}
            >
              <Heading>{school.club.name}</Heading>
              <p>{school.name}</p>
            </div>

            <div className={styles.expand}/>

            <div
              className={styles.links}
            >
              {school.club.urls.map(url => (
                <Link key={url.name} to={url.url} className={clsx(styles.link, "striped-link")}>
                  {url.icon} {url.name}
                </Link>
              ))}
            </div>
          </div>
        </HeadingLevel>
      ))}
    </div>
  );
}
