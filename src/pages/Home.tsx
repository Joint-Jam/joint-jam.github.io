import { Countdown } from "@website/components/Countdown";
import { FloridaMap } from "@website/components/FloridaMap";

import styles from "./Home.module.scss";

export const Home = () => {
  return (
    <div>
      <div className={styles.centerContainer}>
        <Countdown/>
      </div>
      <div className={styles.aboutContainer}>
        <div className={styles.left}>
          <h1><span className="italic">48 Hours...</span></h1>
          <p className="mb-4 text-2xl text-white">
          ...is how much time student game developers at universities across Florida have to make an entire video game each year. Often, the code is terrible. Even the cut corners are visible, and low-rez. The designs make little sense. But out of thin air... <span className="striped-text">a video game.</span>
            <br></br><br></br>
          Joint Jam '24 is a combined game jam between the game development clubs at USF, UCF, FSU, ERAU, and UF for all game developers! 
            <br></br><br></br>
          For the last three years, Joint Jam has been the competition where students all across Florida have showed their skills and tested their mettle.
            <br></br><br></br>
          So far:
            <ul>
              <li>- [x amount] of games have been made</li>
              <li>- [y people] participants have joined</li>
              <li>- a third statistic</li>
            </ul>  
          </p>
        </div>
        <div className={styles.right}>
          <FloridaMap size={600}/>
        </div>
      </div>
    </div>
  )
}
