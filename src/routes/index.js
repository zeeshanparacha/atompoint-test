import { lazy, Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import Loader from "../components/Loader";

const Dashboard = lazy(() => import("./dashboard"));
const Login = lazy(() => import("./login"));
const SignUp = lazy(() => import("./signup"));
const ForgotPassword = lazy(() => import("./forgot-password"));
const ResetPassword = lazy(() => import("./reset-password"));

export const Routes = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path='/dashboard' component={Dashboard} />
        <Route exact path='/signup' component={SignUp} />
        <Route exact path='/forgot-password' component={ForgotPassword} />
        <Route exact path='/reset-password' component={ResetPassword} />
      </Switch>
    </Suspense>
  )
}