import { Button, makeStyles } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import City from "../City/City";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Home() {
  const classes = useStyles();
  const [isLoggedIn, setisLoggedIn] = useState(false);
  const checkLogIn = () => {
    if (localStorage.getItem("token")) {
      setisLoggedIn(true);
    } else {
      setisLoggedIn(false);
    }
  };
  const logout = () => {
    localStorage.clear();
    setisLoggedIn(false);
    toast.success('logout succesfully')
  };
  useEffect(() => {
    checkLogIn();
  }, [isLoggedIn]);
  return (
    <div>
      <ToastContainer />
      <h2 className={classes.title}>Welcome to attain U</h2>
      {isLoggedIn ? (
        <>
          <Button
            className={classes.Button}
            variant="contained"
            onClick={logout}
            color="secondary"
          >
            logout
          </Button>
          <City />
        </>
      ) : (
        <Link to="/signup" style={{ textDecoration: "none" }}>
          <Button
            className={classes.Button}
            variant="contained"
            color="secondary"
          >
            Sign Up
          </Button>
        </Link>
      )}
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  title: {
    textAlign: "center",
  },
  Button: {
    margin: "10px 20px",
  },
}));
