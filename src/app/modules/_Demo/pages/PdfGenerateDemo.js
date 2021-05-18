/* eslint-disable no-restricted-imports */
import React from 'react'
import Grid from "@material-ui/core/Grid";
import Fab from '@material-ui/core/Fab';
import LightBlue from "@material-ui/core/colors/lightBlue";
import { printPDF } from '../components/pdfPrint/pdfGenerate'
import Icon from "@material-ui/core/Icon";
import { useSelector } from 'react-redux'

function PdfGenerateDemo() {
	const policyReducer = useSelector(({ demo }) => demo)

	const lightBlue = LightBlue[400];
	const handleDownloadPDF = () => {
		printPDF(policyReducer.policyDetail);
	}
	return (
		<div>
			<Grid item xs={12} md={3} lg={3} style={{ marginLeft: 10 }}>
				<Fab
					style={{ backgroundColor: lightBlue, width: '100%' }}
					variant="extended"
					size="small"
					color="primary"
					aria-label="add"
					onClick={handleDownloadPDF}
				>
					PDE DEMO
            <Icon>download</Icon>
				</Fab>
			</Grid>
		</div>
	)
}

export default PdfGenerateDemo
