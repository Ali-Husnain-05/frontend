import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";

function Navbar() {
    const isAuthenticated = false;
  return (
    <>
      <nav className={styles.navbar}>
        <NavLink to="/" className={`${styles.logo} ${styles.inActiveStyle}`}>
          CoinBounce
        </NavLink>

        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? styles.activeStyle : styles.inActiveStyle
          }
        >
          Home
        </NavLink>

        <NavLink
          to="crypto"
          className={({ isActive }) =>
            isActive ? styles.activeStyle : styles.inActiveStyle
          }
        >
          CryptoCurrencies
        </NavLink>

        <NavLink
          to="blogs"
          className={({ isActive }) =>
            isActive ? styles.activeStyle : styles.inActiveStyle
          }
        >
          Blogs
        </NavLink>

        <NavLink
          to="submit"
          className={({ isActive }) =>
            isActive ? styles.activeStyle : styles.inActiveStyle
          }
        >
          Submit a blog
        </NavLink>

        {isAuthenticated ? <div> <NavLink><button className={styles.signOutButton}>Sign Out</button></NavLink></div> : 
        <div><NavLink
          to="login"
          className={({ isActive }) =>
            isActive ? styles.activeStyle : styles.inActiveStyle
          }
        >
          {" "}
          <button className={styles.logInButton}>Log in</button>
        </NavLink>

        <NavLink
          to="signup"
          className={({ isActive }) =>
            isActive ? styles.activeStyle : styles.inActiveStyle
          }
        >
          {" "}
          <button className={styles.signUpButton}>Sign up</button>
        </NavLink></div>}
      </nav>
      <div className={styles.separator}></div>
    </>
  );
}

export default Navbar;
