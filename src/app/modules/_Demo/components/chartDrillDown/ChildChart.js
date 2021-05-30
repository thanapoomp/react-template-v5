/* eslint-disable no-unused-vars */
/* eslint-disable no-restricted-imports */
import React from "react";
import Paper from "@material-ui/core/Paper";
import Chart from "react-apexcharts";

export default function ChildChart(props) {
  const [pie, pieOption] = React.useState({
    series: [0, 0, 0, 0],
    labels: ["Agent A", "Agent B", "Agent C", "Agent D"],
  });
  return (
    <Paper elevation={3}>
      PIE
      <Chart options={pie} series={pie.series} type="pie" width="100%" />
    </Paper>
  );
}
