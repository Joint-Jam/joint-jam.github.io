import { Schools } from "@website/data/Schools";
import { Link } from "react-router-dom";

import styles from "./SchoolsPage.module.scss";

export const SchoolsPage = () => {
  return (
    <div>
      <h1>Participating Schools</h1>
      {Schools.sort((a, b) => a.club.name.localeCompare(b.club.name)).map((school) => (
        <div key={school.key} className={styles.school}>
          <img src={school.club.logo} alt={school.club.name} className={styles.logo}/>
          <div>
            <h3>{school.club.name}</h3>
            <p>{school.name}</p>
            <div>
              {school.club.websiteUrl && <Link to={school.club.websiteUrl} className={"striped-button"}>Website</Link>}
              {school.club.discordUrl && <Link to={school.club.discordUrl} className={"striped-button"}>Discord</Link>}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
