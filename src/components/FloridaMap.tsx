import styles from "@website/components/FloridaMap.module.css";
import type { School } from "@website/data/Schools";
import { Schools } from "@website/data/Schools";
import { Link } from "react-router-dom";

const SchoolPin = ({ school, size }: {school: School; size: number}) => {
  return (
    <div>
      <Link to={`/schools#${school.key}`} className={styles.schoolPin} style={{
        "--color1": school.colors[0],
        "--color2": school.colors[1],
        "--x": `${school.mapPos[0] * size}px`,
        "--y": `${school.mapPos[1] * size}px`,
        "--size": `${size / 20}px`,
      } as React.CSSProperties}></Link>
      <h2 className={styles.schoolPinLabel} style={{
        "--x": `${ size - (size / -80 + school.mapPos[0] * size ) }px`,
        "--y": `${school.mapPos[1] * size - size / 28}px`,
      } as React.CSSProperties}>{school.name}</h2>
    </div>
  );
}

export const FloridaMap = ({ size }: {size: number}) => {
  return (
    <div className={"relative"}>
      <div className={styles.floridaMap} style={{
        "--size": `${size}px`,
      } as React.CSSProperties}/>

      {Schools.map((school) => (
        <SchoolPin key={school.key} school={school} size={size}/>
      ))}
    </div>
  );
};
