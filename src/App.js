import Navbar from "./components/navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Home from "./pages/home/Home";
import styles from "./App.module.css";
import Protected from "./components/protected/protected";
import Error from "./pages/error/Error";
import Login from "./pages/Login/Login";

function App() {
  const isAuth = true;
  return (
    <div className={styles.container}>
      <BrowserRouter>
        <div className={styles.layout}>
          <Navbar />
          <Routes>
            <Route
              path="/"
              exact
              element={
                <div className={styles.main}>
                  <Home />
                </div>
              }
            />

            <Route
              
              path="crypto"
              exact
              element={<div className={styles.main}>crypto page</div>}
            />

            <Route
              path="blogs"
              exact
              element={<Protected isAuth={isAuth}><div className={styles.main}>blogs page</div></Protected>}
            />

            <Route
              path="submit"
              exact
              element={<Protected isAuth={isAuth}><div className={styles.main}>submit a blog page</div></Protected>}
            />

            <Route
              path="signup"
              exact
              element={<div className={styles.main}>sign-up page</div>}
            />

            <Route
              path="login"
              exact
              element={<div className={styles.main}><Login /></div>}
            />
            <Route
              path="*"
              element={<div className={styles.main}><Error /></div>}
            />
          </Routes>

          <Footer />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
