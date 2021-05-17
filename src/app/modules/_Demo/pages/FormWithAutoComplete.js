/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-restricted-imports */
import React from "react";
import { useFormik } from "formik";
import { Grid, Button } from "@material-ui/core/";
import { useHistory } from "react-router";
import FormikAutoComplete from "../../Common/components/CustomFormik/FormikAutoComplete";
import * as demoAxios from "../_redux/demoAxios";

function FormWithAutoComplete() {
  const history = useHistory();
  const [state, setState] = React.useState({
    relatedEmployee: null,
  });

  const loadEmployee = (firstName) => {
    return demoAxios.getEmployeeFilter(
      "firstName",
      true,
      1,
      50,
      "",
      firstName,
      ""
    );
  };

  React.useEffect(() => {
    // ตัวอย่าง สำหรับ load ข้อมูลเพื่อ show 
    let id = "e1b57a9c-23e3-409f-1c6a-08d8bcedf819";
    demoAxios
      .getEmployee(id)
      .then((res) => {
        if (res.data.isSuccess) {
            let relatedEmployeeToSet = {id: res.data.data.id,firstName: res.data.data.firstName}
          setState({
            ...state,
            relatedEmployee: relatedEmployeeToSet,
          });
        } else alert(res.data.message);
      })
      .catch((err) => {
        alert(err.message);
      });
  }, []);

  const formik = useFormik({
    enableReinitialize: true,
    validate: (values) => {
      const errors = {};

      if (!values.relatedEmployee) {
        errors.relatedEmployee = "Required";
      }

      return errors;
    },
    initialValues: {
      relatedEmployee: state.relatedEmployee,
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
      formik.setSubmitting(false);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <Grid container spacing={3}>
        {/* relatedEmployee */}
        <Grid item xs={12} lg={3}>
          <FormikAutoComplete
            formik={formik}
            name="relatedEmployee"
            label="Related"
            axiosGet={loadEmployee.bind(this)}
            valueFieldName="id"
            displayFieldName="firstName"
            minSearchLen={3}
          />
        </Grid>

        <Grid item xs={12} lg={3}>
          <Button
            disabled={formik.isSubmitting}
            type="submit"
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

export default FormWithAutoComplete;
