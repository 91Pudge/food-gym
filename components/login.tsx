import styles from "../styles/login.module.css";

const Login = () => {
  return (
    <>
      <div className={styles["container"]}>
        <form id="login">
          <div className={styles["form-group"]}>
            <label htmlFor={"username"}>Username</label>
            <input type="text" id={"username"} name="username"></input>
          </div>
          <div className={styles["form-group"]}>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password"></input>
          </div>
          <div className={styles["buttonHolder"]}>
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
