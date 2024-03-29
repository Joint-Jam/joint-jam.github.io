import styles from "@website/components/Countdown.module.scss";
import { CurrentEvent } from '@website/data/Events';
import { PageUrls } from "@website/data/PageUrls";
import clsx from "clsx";
import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";

const calculateTimeLeft = (): { isToEndOfJam: boolean; days: number; hours: number; minutes: number; seconds: number } => {
  const isToEndOfJam = new Date().getTime() > CurrentEvent.start.getTime();
  const targetTime = isToEndOfJam ? CurrentEvent.end.getTime() : CurrentEvent.start.getTime()
  const difference = targetTime - new Date().getTime();
  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((difference % (1000 * 60)) / 1000);

  return {
    isToEndOfJam: isToEndOfJam,
    days: days,
    hours: hours,
    minutes: minutes,
    seconds: seconds,
  };
};

export const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const headerText = timeLeft.isToEndOfJam ? "The Jam Ends In" : "The Jam Begins In";

  return (
    <div className={styles.countdownContainer}>
      <div className={styles.content}>
        <h2 className={styles.title}>{headerText}</h2>
        <div className={clsx(styles.countdown)}>
          <div className={styles.time}>
            <div className={clsx(styles.unit, "unityYellow")}>{timeLeft.days}</div>
            <div className={styles.label}>Days</div>
          </div>
          <div className={styles.time}>
            <div className={clsx(styles.unit, "unityGreen")}>{timeLeft.hours}</div>
            <div className={styles.label}>Hours</div>
          </div>
          <div className={styles.time}>
            <div className={clsx(styles.unit, "unityPurple")}>{timeLeft.minutes}</div>
            <div className={styles.label}>Minutes</div>
          </div>
          <div className={styles.time}>
            <div className={clsx(styles.unit, "unityRed")}>{timeLeft.seconds}</div>
            <div className={styles.label}>Seconds</div>
          </div>
        </div>
        <div className={styles.buttons}>
          <Link to={CurrentEvent.itchUrl} className={clsx("striped-button font-semibold")}>Sign Up on Itch.io</Link>
          <Link to={PageUrls.external.discord()} className={clsx("striped-button font-semibold")}>Join the Discord</Link>
        </div>
      </div>
    </div>
  );
};
