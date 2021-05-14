/* eslint-disable no-restricted-imports */
/* eslint-disable no-unused-vars */
import React from "react";
import Button from "@material-ui/core/Button";
import { useHistory } from "react-router";

function FormDemo() {
  const history = useHistory();
  return (
    <div>
      <Button
        onClick={() => {
          history.push("/demo/formWithTextField");
        }}
      >
        TextFields
      </Button>

      <Button
        onClick={() => {
          history.push("/demo/formWithAutoComplete");
        }}
      >
        AutoComplete
      </Button>

      <Button
        onClick={() => {
          history.push("/demo/formWithCheckBox");
        }}
      >
        Checkbox
      </Button>

      <Button
        onClick={() => {
          history.push("/demo/formWithCheckboxGroup");
        }}
      >
        CheckboxGroup
      </Button>
    </div>
  );
}

export default FormDemo;
