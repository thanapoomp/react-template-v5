/* eslint-disable no-restricted-imports */
import React from "react";
import Paper from "@material-ui/core/Paper";
import Chart from "react-apexcharts";

export default function ParentChart(props) {
  const [chartSeries, setchartSeries] = React.useState([]);
  const [chartOption, setchartOption] = React.useState({});

  React.useEffect(() => {
    setchartOption({
      chart: {
        id: "basic-bar",
        toolbar: {
          show: true,
          tools: {
            download: false,
            selection: false,
            zoom: false,
            zoomin: false,
            zoomout: false,
            pan: false,
            reset: true,
            customIcons: [],
          },
          autoSelected: "zoom",
        },
        events: {
          click: function(event, chartContext, config) {
            // The last parameter config contains additional information like `seriesIndex` and `dataPointIndex` for cartesian charts
            debugger;
            let dataPointIndex = config.dataPointIndex;
            let seriesIndex = config.seriesIndex;
            if (dataPointIndex !== -1 && seriesIndex !== -1) {
              alert(`clicked data:${dataPointIndex} series:${seriesIndex}`);
            }
          },
        },
      },
      xaxis: {
        categories: ["jan", "feb", "mar", "april", "may", "jun", "jul", "aug"],
      },
    });
    setchartSeries([
      {
        name: "สาขา A",
        data: [30, 40, 45, 50, 49, 60, 70, 91],
      },
      {
        name: "สาขา B",
        data: [20, 41, 30, 55, 34, 60, 40, 80],
      },
    ]);
  }, []);
  return (
    <Paper elevation={3}>
      BAR
      <Chart
        options={chartOption}
        series={chartSeries}
        type="bar"
        width="100%"
      />
    </Paper>
  );
}
