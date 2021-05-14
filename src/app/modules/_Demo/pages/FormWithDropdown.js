/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-restricted-imports */
import React from "react";
import { useFormik } from "formik";
import { Grid, Button } from "@material-ui/core/";
import FormikDropdown from "../../Common/components/CustomFormik/FormikDropdown";
import { useHistory } from "react-router";

function FormWithDropdown() {
  const history = useHistory();
  const [state] = React.useState({
    title: [
      { id: 1, name: "Mr." },
      { id: 2, name: "Mrs." },
    ],
    branch: [
        { id: 1, name: "Bangkok" },
        { id: 2, name: "Chiangrai" },
      ],
    selectedTitleId: 0,
    selectedBranchId: 0
  });

  const formik = useFormik({
    enableReinitialize: true,
    validate: (values) => {
      const errors = {};

      if (!values.titleId) {
          errors.titleId='Required'
      }

      return errors;
    },
    initialValues: {
      titleId: state.selectedTitleId,
      branchId: state.selectedBranchId,
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
      formik.setSubmitting(false);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <Grid container spacing={3}>
        {/* Title */}
        <Grid item xs={12} lg={3}>
          <FormikDropdown
            formik={formik}
            disableFirstItem
            name="titleId"
            label="Title"
            data={state.title}
            firstItemText="กรุณาเลือก"
          />
        </Grid>

        {/* Branch */}
        <Grid item xs={12} lg={3}>
          <FormikDropdown
            formik={formik}
            disableFirstItem={false}
            name="branchId"
            label="เลือกสาขา"
            data={state.branch}
            firstItemText="ทุกสาขา"
          />
        </Grid>

        <Grid item xs={12} lg={3}>
          <Button
            type="submit"
            disabled={formik.isSubmitting}
            fullWidth
            color="primary"
            variant="contained"
          >
            Submit
          </Button>
        </Grid>

        <Grid item xs={12} lg={3}>
          <Button
            fullWidth
            onClick={() => {
              history.push("/demo/formDemo");
            }}
            variant="contained"
          >
            Back
          </Button>
        </Grid>
      </Grid>
      <br></br>
      values: {JSON.stringify(formik.values)}
      <br></br>
      error: {JSON.stringify(formik.errors)}
      <br></br>
      touched: {JSON.stringify(formik.touched)}
    </form>
  );
}

export default FormWithDropdown;
