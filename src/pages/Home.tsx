import styles from "./Home.module.css";

export const Home = () => {
  return (
    <>
      <div className={styles.home}>
        <p>Styled with CSS Modules</p>
      </div>
      <div className={"bg-red-500"}>
        <p>Styled with Tailwind</p>
      </div>
    </>
  )
}
