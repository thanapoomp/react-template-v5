/* eslint-disable no-restricted-imports */
import React, { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import Grid from "@material-ui/core/Grid";
import Fab from '@material-ui/core/Fab';
import PrintIcon from '@material-ui/icons/Print';
import LightBlue from "@material-ui/core/colors/lightBlue";
import Link from '@material-ui/core/Link';
import { ComponentToPrint } from '../components/reactToPrint/pageToPrint';

function PrintComponent() {

	const componentRef = useRef();
	const lightBlue = LightBlue[400];
	const handlePrint = useReactToPrint({
		content: () => componentRef.current,
	});
	return (
		<Grid item xs={12} md={12} lg={12} style={{ marginLeft: 10, marginTop: 20 }}>
			<ComponentToPrint ref={componentRef} />
			<Fab
				style={{ backgroundColor: lightBlue, width: '100%' }}
				variant="extended"
				size="small"
				color="primary"
				aria-label="add"
				onClick={handlePrint}
			>
				PrintDemo
            <PrintIcon></PrintIcon>
			</Fab>
			<Grid item xs={12} md={12} lg={12} style={{ marginLeft: 10, marginTop: 20 }}>
				<Link href="https://github.com/gregnb/react-to-print" color="textSecondary" target="_blank" rel="noopener">
					react-to-print content (git hub)
				</Link>
			</Grid>

		</Grid>
	)
}

export default PrintComponent
