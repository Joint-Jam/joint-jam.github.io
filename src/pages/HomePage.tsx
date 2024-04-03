import { Countdown } from "@website/components/Countdown";
import { FloridaMap } from "@website/components/FloridaMap";
import { Events } from "@website/data/Events";

import styles from "./HomePage.module.scss";

export const HomePage = () => {
  return (
    <div>
      <div className={styles.aboutContainer}>
        <div className={styles.left}>
          <h2>48 Hours...</h2>
          <p>...is how much time student game developers across Florida have to make a video game. Often the code is rushed, the designs are low-rez, and the cut corners are visible.</p>
          <p>But out of a weekend of hard work... <span className={"striped-text font-semibold"}>a video game</span>.</p>
          <p>Joint Jam '24 is a game jam hosted by the game development clubs across five Florida universities. It is open for all game developers to join.</p>
          <p>So far</p>
          <ul>
            <li>{Events.reduce((accumulator, event) => accumulator + event.submissions.length, 0)} games have been made</li>
            <li>{Events.reduce((accumulator, event) => accumulator + event.submissions.reduce((acc, submission) => acc + submission.authors.length, 0), 0)} participants have joined</li>
            <li>across {Events.length} consecutive years.</li>
          </ul>
        </div>
        <div className={styles.right}>
          <FloridaMap size={600}/>
        </div>
      </div>
    </div>
  )
}
