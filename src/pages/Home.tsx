import { FloridaMap } from "@website/components/FloridaMap";

import styles from "./Home.module.scss";

export const Home = () => {
  return (
    <div className={styles.aboutContainer}>
      <div className={styles.left}>
        <h1>Joint Jam</h1>
        <p className="mb-4 text-2xl text-white">
          I'm baby jOMO viral photo booth, enim pariatur narwhal cliche same tbh coloring book authentic single-origin coffee tonx. Aliquip blue bottle la croix pug actually fugiat lorem affogato Brooklyn. Incididunt lumbersexual quinoa everyday carry, aesthetic schlitz dolore umami. Nulla woke in, art party bushwick everyday carry cupidatat mlkshk. Sustainable solarpunk chicharrones pitchfork meditation. Enim gorpcore DIY pabst intelligentsia, gluten-free pour-over slow-carb. Dolor veniam sint, franzen in jean shorts green juice lo-fi aesthetic glossier intelligentsia.
        </p>
      </div>
      <div className={styles.right}>
        <FloridaMap size={600}/>
      </div>
    </div>
  )
}
