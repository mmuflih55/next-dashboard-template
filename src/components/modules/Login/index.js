import React, { useState } from "react";
import {
  Avatar,
  Button,
  Container,
  TextField,
  FormControlLabel,
  Checkbox,
  Link,
  Grid,
  Typography,
} from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import RegisterModal from "@/layout/Login/RegisterModal";
import { ModalProvider, useModal } from "~/context/ModalContext";
import Router from "next/router";

export default function SignIn() {
  const [loginState, setLoginState] = useState({ username: "", password: "" });
  const handleInputChange = (e) => {
    setLoginState({ ...loginState, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(e);
    // auth
    //   .signInWithEmailAndPassword(loginState.email, loginState.password)
    //   .then((v) => {
    //     console.log("login");
    //     console.log(v);
    //   })
    //   .catch(function (error) {
    //     // var errorCode = error.code;
    //     var errorMessage = error.message;
    //     if (errorMessage) alert(errorMessage);
    //   });
    const body = {
      username: loginState.email,
      password: loginState.password,
    };

    try {
      const res = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      if (res.status === 200) {
        Router.push("/");
      } else {
        throw new Error(await res.text());
      }
    } catch (error) {
      console.error("An unexpected error happened occurred:", error);
      console.log(error.message);
    }
  };

  const OpenModal = () => {
    const [_, dispatch] = useModal();
    return (
      <Link
        onClick={() => {
          dispatch({ type: "toggleModal" });
        }}
        variant="body2"
      >
        {"Don't have an account? Sign Up"}
      </Link>
    );
  };

  return (
    <ModalProvider>
      <Container component="main" maxWidth="xs">
        <div className="login-container">
          <div className="paper">
            <Avatar className="avatar">
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5"></Typography>
            <form className="form" onSubmit={handleSubmit}>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                type="email"
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                onChange={handleInputChange}
                autoFocus
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                onChange={handleInputChange}
                autoComplete="current-password"
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className="submit"
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <OpenModal />
                </Grid>
              </Grid>
            </form>
          </div>
        </div>
        <RegisterModal />
        <style jsx>{`
          .login-container {
            display: flex;
            align-items: center;
            justify-content: center;
            height: 80vh;
          }
          .paper {
            margin-top: 32px;
            display: flex;
            flex-direction: column;
            align-items: center;
          }
          .avatar {
            margin: 4px;
          }
          .form {
            width: 100%;
            margintop: 4px;
          }
          .submit {
            margin: 12px 0 8px;
          }
        `}</style>
      </Container>
    </ModalProvider>
  );
}
