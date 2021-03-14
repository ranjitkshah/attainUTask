import React from "react";
import { makeStyles, TextField, Button } from "@material-ui/core";
import { Link, useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function SignUp() {
  const { register, handleSubmit, watch, errors } = useForm();
  let history = useHistory();
  const onSubmit = (data) => {
    axios
      .post("http://localhost:8080/api/auth/signup", data)
      .then((res) => {
        console.log(res);
        toast.success("signed up successfully");
        history.push("/login");
      })
      .catch((err) => {
        console.log(err);
        toast.error("something went wrong");
      });
  };

  const classes = useStyles();
  return (
    <div className={classes.root}>
      <ToastContainer />
      <form onSubmit={handleSubmit(onSubmit)} className={classes.card}>
        <span className={classes.title}>Sign up form</span>
        <TextField
          variant="outlined"
          label="Username"
          name="username"
          className={classes.TextField}
          inputRef={register}
          required
          placeholder="Enter your username"
        />
        <TextField
          variant="outlined"
          label="Email"
          name="email"
          className={classes.TextField}
          type="email"
          inputRef={register}
          required
          placeholder="Enter your email"
        />
        <TextField
          variant="outlined"
          label="Password"
          name="password"
          className={classes.TextField}
          type="password"
          inputRef={register}
          required
          placeholder="Enter your password"
        />
        <div className={classes.Button}>
          <Button variant="contained" type="submit" color="primary">
            Sign Up
          </Button>
        </div>
        <span className={classes.text}>
          already registered ?
          <Link to="/login" style={{ textDecoration: "none" }}>
            login here
          </Link>
        </span>
      </form>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  card: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "Column",
    margin: 20,
    backgroundColor: "aliceblue",
    padding: 10,
    width: "50%",
  },
  title: {
    margin: 20,
    fontSize: 28,
  },
  root: {
    height: "100vh",
    width: "100vw",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  TextField: {
    margin: "20px 10px",
  },
  Button: {
    alignSelf: "center",
  },
  text: {
    margin: 20,
    textAlign: "center",
  },
}));
