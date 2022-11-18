import React from "react";
import styles from "./Home.module.css";
import { Link, useNavigate } from "react-router-dom";
import Card from "../../components/shared/Card/Card";
import Button from "../../components/shared/Button/Button";

const Home = () => {
  const signInLinkStyle = {
    color: "#0077FF",
    fontWeight: "bold",
    textDecoration: "none",
    marginLeft: "5px",
  };

  const navigate = useNavigate();

  function startRegister()  {
    navigate("/register");
  };

  return (
    <div className={styles.cardWrapper}>
        <Card title="😇 Welcome to CodersHouse" icon="logo">
            <p className={styles.text}>
              We're working hard to get CodersHouse ready for everyone! 
              While we wrap up the finishing touches, we're adding people 
              gradually to make sure nothing breaks.
            </p>

            <div>
              <Button onClick={startRegister} text="Get your username" />
            </div>

            <div className={styles.signinWrapper}>
              <span className={styles.hasInvite}>Have an invite text?</span>
              <Link style={signInLinkStyle} to="/login">Sign In</Link>
            </div>

        </Card>
    </div>
  );
}

export default Home;
