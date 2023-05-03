import Link from "next/link";
import styles from "../styles/navBar.module.css";

const NavBar = () => {
  return (
    <div className={styles.bar}>
      <h1>Gym food</h1>
      <div className={styles.nav}>
        <Link href={"/"}>Home</Link>
        <Link href={"/about"}>About</Link>
        <Link href={"/contact"}>Contact</Link>
      </div>
    </div>
  );
};

export default NavBar;
