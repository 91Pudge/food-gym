import Link from "next/link";
import styles from "../styles/navBar.module.css";
import { signIn, signOut, useSession } from "next-auth/react";

const NavBar = () => {
  const { data: session } = useSession();
  return (
    <div className={styles.bar}>
      <h1>Gym food</h1>
      <div className={styles.nav}>
        <Link href={"/"}>Home</Link>
        <Link href={"/about"}>About</Link>
        <Link href={"/contact"}>Contact</Link>
        <div className={styles["login"]}>
          {!session && (
            <>
              Not signed in <br />
              <button onClick={() => signIn()}>Sign in</button>
            </>
          )}
          {session && (
            <div className={styles["login"]}>
              Signed in as {session.user?.email} <br />
              <button onClick={() => signOut()}>Sign out</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
