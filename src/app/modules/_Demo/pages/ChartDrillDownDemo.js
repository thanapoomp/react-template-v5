import React from "react";
import ParentChart from "../components/chartDrillDown/ParentChart";
import ChildChart from "../components/chartDrillDown/ChildChart";
import { Grid } from "@material-ui/core";

function ChartDrillDownDemo() {
  return (
    <Grid container>
      <Grid item lg={6}>
        <ParentChart></ParentChart>
      </Grid>
      <Grid item lg={6}>
        <ChildChart></ChildChart>
      </Grid>
    </Grid>
  );
}

export default ChartDrillDownDemo;
