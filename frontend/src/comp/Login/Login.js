import React from "react";
import { makeStyles, TextField, Button } from "@material-ui/core";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useHistory } from "react-router";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Login() {
  const { register, handleSubmit, watch, errors } = useForm();
  let history = useHistory();
  const onSubmit = (data) => {
    axios
      .post("http://localhost:8080/api/auth/signin", data)
      .then((res) => {
        toast.success("logged in succesfully");
        localStorage.setItem("token", res.data.accessToken);
        history.push("/");
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
        <span className={classes.title}>Login</span>
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
            Login
          </Button>
        </div>
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
}));
