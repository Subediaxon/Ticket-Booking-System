import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Landing from "./Pages/LandingPage";
import Signup from "./Pages/SignupPage";
import Login from "./Pages/LoginPage";
import Address from "./Pages/Address";
import Details from "./Pages/Details";
import Navbar from "./components/Navbar";

import "./App.css";
import { BookingForm } from "./components/BookingForm";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Landing} />
          <Route path="/Login" component={Login} />
          <Route path="/Signup" component={Signup} />
          <Route path="/Booking" component={BookingForm} />
          <Route path="/Address" component={Address} />
          <Route path="/Details" component={Details} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
