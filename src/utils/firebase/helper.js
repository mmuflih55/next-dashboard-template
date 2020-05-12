import React, { useState, useEffect } from "react";
import router from "next/router";
import { auth } from "./index";
import CircularProgress from "@material-ui/core/CircularProgress";

const useAuth = (Component, props) => {
  const [status, setStatus] = useState("LOADING");
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        setStatus("SIGNED_IN");
      } else {
        router.replace("/login");
      }
    });
  }, []);

  return (
    <React.Fragment>
      {status == "SIGNED_IN" ? (
        <Component {...props} />
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
export default useAuth;
