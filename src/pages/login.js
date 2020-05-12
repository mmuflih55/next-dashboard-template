import React, { useState, useEffect } from "react";
import router from "next/router";
import { auth } from "Utils/firebase";
import CircularProgress from "@material-ui/core/CircularProgress";
import Login from "@/modules/Login";

const LoginPage = (props) => {
  const [status, setStatus] = useState("LOADING");
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        router.replace("/");
      } else {
        setStatus("UNAUTH");
      }
    });
  }, []);

  return (
    <React.Fragment>
      {status !== "LOADING" ? (
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
