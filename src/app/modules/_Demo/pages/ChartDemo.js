/* eslint-disable no-unused-vars */
/* eslint-disable no-restricted-imports */
import React from 'react'
import Paper from '@material-ui/core/Paper';
import Chart from "react-apexcharts";
import { Grid } from '@material-ui/core';
import Link from '@material-ui/core/Link';

function Apexchart() {

	const [chartOption, setchartOption] = React.useState({})
	const [pie, pieOption] = React.useState({
		series: [44, 55, 13, 33],
		labels: ['Apple', 'Mango', 'Orange', 'Watermelon']
	})
	const [chartSeries, setchartSeries] = React.useState([])

	React.useEffect(() => {
		setchartOption({
			chart: {
				id: "basic-bar"
			},
			xaxis: {
				categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998],
			}
		});
		setchartSeries([
			{
				name: 'Demo',
				data: [30, 40, 45, 50, 49, 60, 70, 91],
			}
		]);
	}, [])


	return (
		<Grid spacing={3} container direction="row" alignItems="flex-start" style={{ padding: 10 }}>
			<Grid item xs={4} md={4} lg={4}>
				<Paper elevation={3}>
					Line
					<Chart
						options={chartOption}
						series={chartSeries}
						type="line"
						width="100%"
					/>
				</Paper>
			</Grid>
			<Grid item xs={4} md={4} lg={4}>
				<Paper elevation={3}>
					BAR
					<Chart
						options={chartOption}
						series={chartSeries}
						type="bar"
						width="100%"
					/>
				</Paper>
			</Grid>
			<Grid item xs={4} md={4} lg={4}>
				<Paper elevation={3}>
					PIE
					<Chart
						options={pie}
						series={pie.series}
						type="pie"
						width="100%"
					/>
				</Paper>
			</Grid>
			<Grid item xs={12} md={12} lg={12} style={{ marginLeft: 10, marginTop: 10 }}>

				<Link href="https://apexcharts.com/" color="textSecondary" target="_blank" rel="noopener">
					chart เราใช้ Apexcharts
				</Link>
			</Grid>
			<Grid item xs={12} md={12} lg={12} style={{ marginLeft: 10, marginTop: 10 }}>

				<Link href="https://apexcharts.com/docs/react-charts/" color="textSecondary" target="_blank" rel="noopener">
					ลิ้งตัวอย่าง
				</Link>
			</Grid>
		</Grid>

	)
}

export default Apexchart