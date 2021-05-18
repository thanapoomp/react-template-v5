import React, { Suspense } from "react";
import { Redirect, Switch, Route } from "react-router-dom";
import { LayoutSplashScreen, ContentRoute } from "../_metronic/layout";
import PrivateRoute from "./modules/Auth/components/PrivateRoute";
import ErrorUnAuthorized from "./modules/Auth/pages/ErrorUnAuthorized";
import TokenHandler from "./modules/Auth/components/TokenHandler";
import { ROLES } from "../Constants";
import AlertDemo from "./modules/_Demo/pages/AlertDemo";
import Test from './pages/Test'
import ReduxDemo from './modules/_Demo/pages/ReduxDemo'
import FormDemo from "./modules/_Demo/pages/formComponents/FormDemo";
import FormWithTextField from './modules/_Demo/pages/formComponents/FormWithTextField'
import FormWithAutoComplete from "./modules/_Demo/pages/formComponents/FormWithAutoComplete";
import FormWithCheckBox from './modules/_Demo/pages/formComponents/FormWithCheckBox'
import FormWithCheckboxGroup from "./modules/_Demo/pages/formComponents/FormWithCheckboxGroup";
import FormWithDatePicker from "./modules/_Demo/pages/formComponents/FormWithDatePicker";
import FormWithDateTimePicker from "./modules/_Demo/pages/formComponents/FormWithDateTimePicker";
import FormWithDropdown from "./modules/_Demo/pages/formComponents/FormWithDropdown";
import FormWithDropdownCascade from "./modules/_Demo/pages/formComponents/FormWithDropdownCascade";
import FormWithRadioGroup from "./modules/_Demo/pages/formComponents/FormWithRadioGroup";
import FormWithRating from "./modules/_Demo/pages/formComponents/FormWithRating";
import FormWithSlider from "./modules/_Demo/pages/formComponents/FormWithSlider";
import FormWithSwitch from "./modules/_Demo/pages/formComponents/FormWithSwitch";
import FormWithTimePicker from "./modules/_Demo/pages/formComponents/FormWithTimePicker";
import pdfGenerrate from "./modules/_Demo/pages/PdfGenerateDemo";
import QRGenerateDemo from "./modules/_Demo/pages/QRGenerateDemo";

export default function BasePage(props) {

  return (
    <Suspense fallback={<LayoutSplashScreen />}>
      <Switch>
        {<Redirect exact from="/" to="/test" />}
        <ContentRoute exact path="/test" component={Test} />

        {/* Start Demo part สามารถ comment ได้ */}
        <ContentRoute exact path="/alert" component={AlertDemo} />
        <ContentRoute exact path="/reduxDemo" component={ReduxDemo} />
        <PrivateRoute exact path="/test" roles={[ROLES.admin, ROLES.developer]} component={Test} />
        <ContentRoute exact path="/demo/formDemo" component={FormDemo} />
        <ContentRoute exact path="/demo/formWithTextField" component={FormWithTextField} />
        <ContentRoute exact path="/demo/formWithAutoComplete" component={FormWithAutoComplete} />
        <ContentRoute exact path="/demo/formWithCheckBox" component={FormWithCheckBox} />
        <ContentRoute exact path="/demo/formWithCheckboxGroup" component={FormWithCheckboxGroup} />
        <ContentRoute exact path="/demo/formWithDatePicker" component={FormWithDatePicker} />
        <ContentRoute exact path="/demo/formWithDateTimePicker" component={FormWithDateTimePicker} />
        <ContentRoute exact path="/demo/formWithDropdown" component={FormWithDropdown} />
        <ContentRoute exact path="/demo/formWithDropdownCascade" component={FormWithDropdownCascade} />
        <ContentRoute exact path="/demo/formWithRadioGroup" component={FormWithRadioGroup} />
        <ContentRoute exact path="/demo/formWithRating" component={FormWithRating} />
        <ContentRoute exact path="/demo/formWithSlider" component={FormWithSlider} />
        <ContentRoute exact path="/demo/formWithSwitch" component={FormWithSwitch} />
        <ContentRoute exact path="/demo/formWithTimePicker" component={FormWithTimePicker} />
        <ContentRoute exact path="/demo/pdfGenerrate" component={pdfGenerrate} />
        <ContentRoute exact path="/demo/QRGenerateDemo" component={QRGenerateDemo} />
        {/* End Demo part สามารถ comment ได้ */}

        <Route
          path="/errorUnAuthorized"
          component={ErrorUnAuthorized}
        />

        {/* nothing match - redirect to error */}
        <Redirect to="/error" />
      </Switch>
      <TokenHandler></TokenHandler>
    </Suspense>
  );
}
