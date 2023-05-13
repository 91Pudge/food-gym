import Link from "next/link";
import styles from "../styles/navBar.module.css";
import { signIn, signOut, useSession } from "next-auth/react";
import { useEffect } from "react";
import Router, { NextRouter } from "next/router";

const NavBar = () => {
  const { data: session } = useSession();

  useEffect(() => {
    if (session) {
      // Redirect to a different page if the user is signed in
      Router.push("/recipe-page");
    }
  }, [session]);
  return (
    <div className={styles["bar"]}>
      <h1>Food Gym</h1>
      <div className={styles["nav"]}>
        {session && (
          <>
            <Link href={"/recipe-page"}>Search</Link>
            <Link href={"/stored-recipes"}>Stored Recipes</Link>
          </>
        )}
        <Link href={"/"}>Home</Link>
        <Link href={"/about"}>About</Link>
        <Link href={"/contact"}>Contact</Link>
      </div>
      <div className={styles["container"]}>
        <div className={styles["login"]}>
          {!session && (
            <>
              <p>
                Not signed in
                <br />{" "}
              </p>
              <button onClick={() => signIn()}>Sign in</button>
            </>
          )}
          {session && (
            <div className={styles["login"]}>
              <p>
                Signed in as:
                <br /> {session.user?.email}
              </p>
              <button onClick={() => signOut()}>Sign out</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
