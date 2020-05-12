import React from "react";
import Base from "@/layout/DashBoardBase";
import { Grid, Paper, makeStyles } from "@material-ui/core";
import Title from "@/ui/Title";
import Chart from "./chart";
const useStyles = makeStyles((theme) => ({
  depositContext: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column",
  },
}));

export default function Report({ page }) {
  const classes = useStyles();

  return (
    <Base>
      <Title>Recent Deposits</Title>
      <Grid container spacing={3}>
        <Grid item xs={12} md={12} lg={12}>
          <Paper className={classes.paper}>
            <Chart page={page} />
          </Paper>
        </Grid>
      </Grid>
    </Base>
  );
}
