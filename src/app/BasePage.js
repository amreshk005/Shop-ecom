import React, { Suspense, lazy } from "react";
import { Redirect, Switch, Route } from "react-router-dom";
import { LayoutSplashScreen, ContentRoute } from "../_metronic/layout";
import { BuilderPage } from "./pages/BuilderPage";
import { DashboardPage } from "./pages/DashboardPage";
import OrderContinue from "./pages/orders/OrderContinue";
import OrdersPay from "./pages/orders/OrdersPay";
import OrderBulk from './pages/orders/OrdersBulk';
import OrdersModels from './pages/orders/OrdersModels';

const UserProfilepage = lazy(() => import("./modules/UserProfile/UserProfilePage"));
const UserSettingsPage = lazy(() => import("./pages/UserSettingsPage"));

export default function BasePage() {
  // useEffect(() => {
  //   console.log('Base page');
  // }, []) // [] - is required if you need only one call
  // https://reactjs.org/docs/hooks-reference.html#useeffect

  return (
    <Suspense fallback={<LayoutSplashScreen />}>
      <Switch>
        {
          /* Redirect from root URL to /dashboard. */
          <Redirect exact from="/" to="/dashboard" />
        }
        <ContentRoute path="/dashboard" component={DashboardPage} />
        <ContentRoute path="/builder" component={BuilderPage} />
        <ContentRoute path="/user-settings" component={UserSettingsPage} />
        <ContentRoute path="/order-pay" component={OrdersPay} />
<<<<<<< HEAD
        <ContentRoute path="/order-continue" component={OrderContinue} />

=======
        <ContentRoute path="/order-pay" component={OrdersPay} />
        <ContentRoute path="/order-bulk" component={OrderBulk} />
        <ContentRoute path="/order-models" component={OrdersModels} />
>>>>>>> 5e341129c13cb99d8e66a706d653f02a43a5e76e
        <Route path="/user-profile" component={UserProfilepage} />
        <Redirect to="error/error-v1" />
      </Switch>
    </Suspense>
  );
}
