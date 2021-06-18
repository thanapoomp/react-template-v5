/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-restricted-imports */

import React from "react";
import { Grid } from "@material-ui/core";
import NumberFormat from "react-number-format";

function ColumnNumber(props) {

  return (
    <div>
      <Grid
        style={{ padding: 0, margin: 0 }}
        container
        direction="row"
        justify="flex-start"
        alignItems="center"
      >
        <NumberFormat {...props} value={props.Data} displayType="text" />
      </Grid>
    </div>
  );
}

export default ColumnNumber;
