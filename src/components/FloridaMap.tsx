import type { School } from "@website/data/Schools";
import { Schools } from "@website/data/Schools";
import { HashLink } from 'react-router-hash-link';

import styles from "./FloridaMap.module.scss";

const SchoolPin = ({ school, size }: {school: School; size: number}) => {
  return (
    <div>
      <HashLink to={`/schools#${school.key}`} className={styles.schoolPin} style={{
        "--color1": school.colors[0],
        "--color2": school.colors[1],
        "--x": `${school.mapPos[0] * size}px`,
        "--y": `${school.mapPos[1] * size}px`,
        "--size": `${size / 20}px`,
      } as React.CSSProperties}></HashLink>
      <p className={styles.schoolPinLabel} style={{
        "--x": `${ size - (size / -80 + school.mapPos[0] * size ) }px`,
        "--y": `${school.mapPos[1] * size - size / 28}px`,
        "--fsize": `${size / 40}px`,
      } as React.CSSProperties}>{school.name}</p>
    </div>
  );
}

export const FloridaMap = ({ size }: {size: number}) => {
  return (
    <div className={styles.map} style={{ "--neg-half-size": `${-size / 2}px` } as React.CSSProperties}>
      <div className={styles.mapImage} style={{ "--size": `${size}px` } as React.CSSProperties}/>

      {Schools.map((school) => (
        <SchoolPin key={school.key} school={school} size={size}/>
      ))}
    </div>
  );
};
