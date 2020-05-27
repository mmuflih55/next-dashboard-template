import React, { useState, useEffect } from "react";
import Head from "next/head";
import router from "next/router";
import CircularProgress from "@material-ui/core/CircularProgress";
import Login from "@/modules/Login";
import { useUser } from "Utils/auth/hooks";

const LoginPage = (props) => {
  const user = useUser({ redirectIfFound: true, redirectTo: "/" });
  const [status, setStatus] = useState("LOADING");

  useEffect(() => {
    if (user) {
      setStatus("AUTH");
    } else {
      setStatus("UNAUTH");
    }
  }, [user]);

  return (
    <React.Fragment>
      <Head>
        <title>Next Template Dashboard</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {status !== "LOADING" && status !== "AUTH" ? (
        <Login />
      ) : (
        <div className="loading-container">
          <CircularProgress />
        </div>
      )}
      <style jsx>{`
        .loading-container {
          display: flex;
          align-items: center;
          justify-content: center;
          height: 80vh;
        }
      `}</style>
    </React.Fragment>
  );
};
export default LoginPage;
