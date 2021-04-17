import { useContext } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { UserContextProvider, UserContext } from "./context/userContext";
import Landing from "./Pages/LandingPage";
import Signup from "./Pages/SignupPage";
import Login from "./Pages/LoginPage";
import Address from "./Pages/Address";
import Details from "./Pages/Details";
import ButtonAppBar from "./components/Nav-bar";
import AdminPage from "./components/admin/AdminPage";
import Booking from "./Pages/BookingPage";
import Hotels from "./Pages/Hotels";
import "./App.css";

const queryClient = new QueryClient();

const UnauthenticatedRoutes = ({ children: Children, ...rest }) => {
  const auth = useContext(UserContext);
  return (
    <Route
      {...rest}
      render={() =>
        !auth.isAuthenticated() ? <Children /> : <Redirect to="/" />
      }
    ></Route>
  );
};

const AuthenticatedRoute = ({ children: Children, ...rest }) => {
  const auth = useContext(UserContext);
  return (
    <Route
      {...rest}
      render={() =>
        auth.isAuthenticated() ? <Children /> : <Redirect to="/login" />
      }
    ></Route>
  );
};

const AdminRoute = ({ children: Children, ...rest }) => {
  const auth = useContext(UserContext);
  return (
    <Route
      {...rest}
      render={() => (auth.isAdmin() ? <Children /> : <Redirect to="/login" />)}
    ></Route>
  );
};

const AppRoutes = () => {
  return (
    <Switch>
      <AdminRoute path="/admin" exact>
        {AdminPage}
      </AdminRoute>
      <AuthenticatedRoute path="/" exact>
        {Landing}
      </AuthenticatedRoute>
      <AuthenticatedRoute path="/booking">{Booking}</AuthenticatedRoute>
      <AuthenticatedRoute path="/address">{Address}</AuthenticatedRoute>
      <AuthenticatedRoute path="/details">{Details}</AuthenticatedRoute>
      <AuthenticatedRoute path="/hotels">{Hotels}</AuthenticatedRoute>
      <UnauthenticatedRoutes path="/login">{Login}</UnauthenticatedRoutes>
      <UnauthenticatedRoutes path="/signup">{Signup}</UnauthenticatedRoutes>
    </Switch>
  );
};

function App() {
  return (
    <>
      <Router>
        <QueryClientProvider client={queryClient}>
          <UserContextProvider>
            <ButtonAppBar position="sticky" />
            <AppRoutes />
          </UserContextProvider>
        </QueryClientProvider>
      </Router>
    </>
  );
}

export default App;
