import styles from "./Home.module.css";
import { FloridaMap } from "@website/components/FloridaMap";

export const Home = () => {
  return (
    <>
      <FloridaMap size={400}/>
      <div className={styles.home}>
        <p>Styled with CSS Modules</p>
      </div>
      <div className={"bg-red-500"}>
        <p>Styled with Tailwind</p>
      </div>
    </>
  )
}
