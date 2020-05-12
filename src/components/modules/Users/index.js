import React from "react";
import dynamic from "next/dynamic";
import Base from "@/layout/DashBoardBase";
const UList = dynamic(import("./UserList"));
import { Grid, Paper, makeStyles } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  depositContext: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  fixedHeight: {
    height: 240,
  },
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column",
  },
}));

export default function Users() {
  const classes = useStyles();

  return (
    <Base>
      <Grid container spacing={3}>
        <Grid item xs={12} md={12} lg={12}>
          <Paper className={classes.paper}>
            <UList />
          </Paper>
        </Grid>
      </Grid>
    </Base>
  );
}
