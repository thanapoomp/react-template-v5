/* eslint-disable no-restricted-imports */
import React from "react";
import Paper from "@material-ui/core/Paper";
import Chart from "react-apexcharts";
import { chartData } from "./chartData";

export default function ParentChart(props) {
  const [chartSeries, setchartSeries] = React.useState([]);
  const [chartOption, setchartOption] = React.useState({});

  const handleClick = (config) => {
    // The last parameter config contains additional information like `seriesIndex` and `dataPointIndex` for cartesian charts
    let dataPointIndex = config.dataPointIndex;
    let seriesIndex = config.seriesIndex;
    if (dataPointIndex !== -1 && seriesIndex !== -1) {
      alert(`clicked data:${dataPointIndex} series:${seriesIndex}`);
    }
  };

  const prepareChartSeries = () => {
    let tempData = []

    // แปลงข้อมูล
    let tempHelper = {};
    tempData = chartData.reduce(function(r, o) {
      var key = o.branch + '-' + o.month;
      
      if(!tempHelper[key]) {
        tempHelper[key] = {branch: o.branch, month: o.month, total: o.total}; // create a copy of o
        r.push(tempHelper[key]);
      } else {
        tempHelper[key].total += o.total;
      }
      return r;
    }, []);

    // console.log(tempData);

    //จัดข้อมูลให้อยู่ในรูปแบบที่ chart ต้องการ
    let result = [];
    let resultHelper = {};
    result = tempData.reduce(function(r, o) {
      var key = o.branch;
      resultHelper.branch = o.branch

      if(!resultHelper[key]) {
        let data = []; //todo: get data
        tempData.forEach(function (obj) {
          if (obj.branch === o.branch) {
            data.push(obj.total);
          }
        });
        console.log(data)
        resultHelper[key] = { name: o.branch, data: data }; //
        r.push(resultHelper[key]);
      }
      return r;
    }, []);

    //prepare
    // console.log(result);
    return result;
  };

  const prepareXaxis = () => {
    const uniqueMonth = [...new Set(chartData.map(item => item.month))];
    let xaxis = { categories: uniqueMonth };
    return xaxis;
  };

  React.useEffect(() => {
    //prepare xaxis
    let xaxis = prepareXaxis();

    //prepare chart series
    let series = prepareChartSeries();

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
          click: (event, chartContext, config) => handleClick(config),
        },
      },
      xaxis: xaxis,
    });

    setchartSeries(series);
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
      {/* {JSON.stringify(chartData,2,null)} */}
    </Paper>
  );
}
