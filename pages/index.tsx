import Head from "next/head";
import styles from "../styles/about.module.css";

export default function Home() {
  return (
    <div className={styles["container"]}>
      <Head>
        <title>Food Gym</title>
      </Head>

      <main>
        <p>To discover fascinating recipes, please log in.</p>
      </main>
    </div>
  );
}
