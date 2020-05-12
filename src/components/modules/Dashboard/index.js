import React from "react";
import Base from "@/layout/DashBoardBase";
import dynamic from "next/dynamic";
const Deposit = dynamic(import("@/modules/Deposit"));
import { Grid } from "@material-ui/core";
export default function Dashboard() {
  return (
    <Base>
      <Grid container spacing={3}>
        <Grid item xs={12} md={4} lg={3}>
          <Deposit />
        </Grid>
      </Grid>
    </Base>
  );
}
