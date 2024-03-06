import { Countdown } from "@website/components/Countdown";
import { FloridaMap } from "@website/components/FloridaMap";

import styles from "./HomePage.module.scss";

export const HomePage = () => {
  return (
    <div>
      <div className={styles.centerContainer}>
        <Countdown/>
      </div>
      <div className={styles.aboutContainer}>
        <div className={styles.left}>
          <h2>48 Hours...</h2>
          <p>...is how much time student game developers across Florida have to make a video game. Often the code is rushed, the designs are low-rez, and the cut corners are visible.</p>
          <p>But out of a weekend of hard work... <span className={"striped-text"}>a video game</span>.</p>
          <p>Joint Jam '24 is a game jam hosted by the game development clubs across five Florida universities. It is open for all game developers to join.</p>
          <p>So far</p>
          <ul>
            <li>[x amount] of games have been made</li>
            <li>[y people] participants have joined</li>
            <li>across 3 consecutive years.</li>
          </ul>
        </div>
        <div className={styles.right}>
          <FloridaMap size={600}/>
        </div>
      </div>
    </div>
  )
}
