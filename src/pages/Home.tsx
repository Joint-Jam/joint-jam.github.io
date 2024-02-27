import { FloridaMap } from "@website/components/FloridaMap";

import styles from "./Home.module.css";

export const Home = () => {
  return (
    <><div className="flex justify-center">
      <FloridaMap size={400}/>
    </div>
    <div className={styles.home}>
      <p>Styled with CSS Modules</p>
    </div>
    <div className={"bg-red-500"}>
      <p>Styled with Tailwind</p>
    </div>
    </>
  )
}
