/* eslint-disable no-restricted-imports */
import React from 'react';
import { Grid } from "@material-ui/core/";
import ChartDemo from "../../pages/ChartDemo"
export default class ComponentToPrint extends React.Component {

	render() {
		return (
			<div style={{ marginTop: 30 }}>
				<Grid item xs={12} lg={12} style={{ textAlign: 'center', marginBottom: 10 }}>
					<img
						alt="Google logo"
						src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
						width="80"
					/>
				</Grid>

				<Grid item xs={12} lg={12} style={{ marginBottom: 10 }}>
					<ChartDemo />
				</Grid>
			</div>
		);
	}
}
