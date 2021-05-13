import React, { Suspense } from "react";
import { Redirect, Switch, Route } from "react-router-dom";
import { LayoutSplashScreen, ContentRoute } from "../_metronic/layout";
import PrivateRoute from "./modules/Auth/components/PrivateRoute";
import ErrorUnAuthorized from "./modules/Auth/pages/ErrorUnAuthorized";
import TokenHandler from "./modules/Auth/components/TokenHandler";
import { ROLES } from "../Constants";
import Alert from "./modules/_Demo/Alert";
import Test from  './pages/Test'
import ReduxDemo from './modules/_Demo/pages/ReduxDemo'
import UseFormikWithTextField from './modules/_FormikUseFormik/pages/WithTextField'
import UseFormikWithDropdownCascade from './modules/_FormikUseFormik/pages/WithDropdownCascade'
import WithAllComponents from "./modules/_FormikUseFormik/pages/WithAllComponents";

export default function BasePage(props) {
  // useEffect(() => {
  //   console.log('Base page');
  // }, []) // [] - is required if you need only one call
  // https://reactjs.org/docs/hooks-reference.html#useeffect

  return (
    <Suspense fallback={<LayoutSplashScreen />}>
      <Switch>
        {<Redirect exact from="/" to="/test" />}
        <ContentRoute exact path="/test" component={Test} />

        {/* Start Demo part สามารถ comment ได้ */}
        <ContentRoute exact path="/alert" component={Alert} />
        <ContentRoute exact path="/reduxDemo" component={ReduxDemo} />
        <PrivateRoute exact path="/test" roles={[ROLES.admin,ROLES.developer]} component={Test} />
        <ContentRoute exact path="/useFormik/textfield" component={UseFormikWithTextField} />
        <ContentRoute exact path="/useFormik/dropdown" component={UseFormikWithDropdownCascade} />
        <ContentRoute exact path="/useFormik/all" component={WithAllComponents} />
        {/* End Demo part สามารถ comment ได้ */}

        <Route
          path="/errorUnAuthorized"
          component={ErrorUnAuthorized}
        />

        {/* nothing match - redirect to error */}
        <Redirect to="/error"/>
      </Switch>
      <TokenHandler></TokenHandler>
    </Suspense>
  );
}
