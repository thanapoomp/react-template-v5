/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-restricted-imports */
import React from "react";
import { useFormik } from "formik";
import { Grid, Button } from "@material-ui/core/";
import FormikDropdown from "../../Common/components/CustomFormik/FormikDropdown";
import FormikTextField from "../../Common/components/CustomFormik/FormikTextField";
import FormikSwitch from "../../Common/components/CustomFormik/FormikSwitch";
import FormikCheckBox from "../../Common/components/CustomFormik/FormikCheckBox";
import FormikSlider from "../../Common/components/CustomFormik/FormikSlider";
import FormikRating from "../../Common/components/CustomFormik/FormikRating";
import FormikRadioGroup from "../../Common/components/CustomFormik/FormikRadioGroup";
import FormikCheckBoxGroup from "../../Common/components/CustomFormik/FormikCheckBoxGroup";
import FormikDatePicker from "../../Common/components/CustomFormik/FormikDatePicker";
import FormikDateTimePicker from "../../Common/components/CustomFormik/FormikDateTimePicker";
import FormikTimePicker from "../../Common/components/CustomFormik/FormikTimePicker";

function WithTextField() {
  const [title] = React.useState([
    { id: 1, name: "Mr." },
    { id: 2, name: "Mrs." },
  ]);

  const [gender] = React.useState([
    { id: "1", name: "Male" },
    { id: "2", name: "Female" },
    { id: "3", name: "Unknown" },
  ]);

  const [hobby] = React.useState([
    { id: 1, name: "Games" },
    { id: 2, name: "Shopping" },
    { id: 3, name: "Jogging" },
  ]);

  const [today] = React.useState(new Date(
        new Date().getFullYear(),
        new Date().getMonth(),
        new Date().getDate()
      )
  );

  const formik = useFormik({
    enableReinitialize: true,
    validate: (values) => {
      const errors = {};
      if (!values.titleId) {
        errors.titleId = "required";
      }

      if (!values.firstName) {
        errors.firstName='Required'
      }

      return errors;
    },
    initialValues: {
      titleId: 0,
      firstName: "",
      lastName: "",
      isActive: true,
      isAllow: true,
      score: 2,
      rating: 5,
      genderId: 0,
      hobbies: [2],
      birthDate: today,
      nextMeeting: today,
      breakfastTime: today,
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <Grid container spacing={3}>
        {/* Title */}
        <Grid item xs={12} lg={3}>
          <FormikDropdown
            formik={formik}
            name="titleId"
            label="Title"
            data={title}
            firstItemText="Select Title"
          />
        </Grid>

        {/* Start firstName */}
        <Grid item xs={12} lg={3}>
          <FormikTextField
            formik={formik}
            name="firstName"
            label="First Name"
          />
        </Grid>

        {/* Start lastname */}
        <Grid item xs={12} lg={3}>
          <FormikTextField formik={formik} name="lastName" label="Last Name" />
        </Grid>

        {/* Start birthDate */}
        <Grid item xs={12} lg={3}>
          <FormikDatePicker
            formik={formik}
            name="birthDate"
            label="BirthDate"
          />
        </Grid>

        {/* Start nextMeeting */}
        <Grid item xs={12} lg={3}>
          <FormikDateTimePicker
            formik={formik}
            name="nextMeeting"
            label="Next Meeting"
          />
        </Grid>

        {/* Start breakfastTime */}
        <Grid item xs={12} lg={3}>
          <FormikTimePicker
            formik={formik}
            name="breakfastTime"
            label="Breakfast Time:"
          />
        </Grid>

        {/* Gender */}
        <Grid item xs={12} lg={3}>
          <FormikRadioGroup
            formik={formik}
            name="genderId"
            label="Gender"
            data={gender}
          />
        </Grid>

        {/* Hobby */}
        <Grid item xs={12} lg={3}>
          <FormikCheckBoxGroup
            formik={formik}
            name="hobbies"
            label="Hobbies"
            data={hobby}
          />
        </Grid>

        {/* isActive */}
        <Grid item xs={12} lg={3}>
          <FormikSwitch formik={formik} name="isActive" label="Active" />
        </Grid>

        {/* isAllow */}
        <Grid item xs={12} lg={3}>
          <FormikCheckBox formik={formik} name="isAllow" label="Allow" />
        </Grid>

        {/* score */}
        <Grid item xs={12} lg={3}>
          <FormikSlider
            formik={formik}
            name="score"
            label="Score"
            min={0}
            max={20}
            step={0.5}
          />
        </Grid>

        {/* rating */}
        <Grid item xs={12} lg={3}>
          <FormikRating formik={formik} name="rating" label="Rating" />
        </Grid>

        {/* relatedToEmployee
        <Grid item xs={12} lg={3}>
          <FormikAutoComplete
          formik={formik}
          name="relatedToEmployee"
          label="Related"
          axiosGet={loadEmployee.bind(this)}
          valueFieldName="id"
          displayFieldName="firstName"
          minSearchLen={3}
          />
        </Grid> */}

        <Grid item xs={12} lg={3}>
          <Button type="submit" fullWidth variant="contained">
            Submit
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

export default WithTextField;
