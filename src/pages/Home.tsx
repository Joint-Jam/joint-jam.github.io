import { FloridaMap } from "@website/components/FloridaMap";

import styles from "./Home.module.css";

export const Home = () => {
  return (
    <><div className="flex justify-center mx-32 ">
      <div className=" px-4 w-1/2">
        <h1 className="mb-4 text-8xl font-extrabold text-accent">florida is a state</h1>
        <p className="mb-4 text-2xl text-white">
        I'm baby jOMO viral photo booth, enim pariatur narwhal cliche same tbh coloring book authentic single-origin coffee tonx. Aliquip blue bottle la croix pug actually fugiat lorem affogato Brooklyn. Incididunt lumbersexual quinoa everyday carry, aesthetic schlitz dolore umami. Nulla woke in, art party bushwick everyday carry cupidatat mlkshk. Sustainable solarpunk chicharrones pitchfork meditation. Enim gorpcore DIY pabst intelligentsia, gluten-free pour-over slow-carb. Dolor veniam sint, franzen in jean shorts green juice lo-fi aesthetic glossier intelligentsia.
          <br></br><br></br>
        Narwhal green juice normcore culpa. Ascot mukbang messenger bag jianbing cray. IPhone keytar pug, single-origin coffee selfies ad ut portland id artisan yes plz raw denim tousled. Roof party iPhone snackwave vegan tonx cillum hoodie actually tote bag banjo pickled selfies tilde.
          <br></br><br></br>
        Dummy text? More like dummy thicc text, amirite?
        </p>
      </div>
      <FloridaMap size={1000}/>
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
