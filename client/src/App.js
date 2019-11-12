import React from "react";
import { withRouter, Route, Link } from "react-router-dom";
import { axiosWithAuth } from "./utils/axiosWithAuth";
import PrivateRoute from "./components/PrivateRoute";
import { BubblePage } from "./components/BubblePage";
import Login from "./components/Login";
import "./styles.scss";

function App() {
  const loggedIn = axiosWithAuth();

  return (
    <div className="wrapper">
      <nav>
        {!loggedIn && <Link to="/">Log In</Link>}
        {/* {loggedIn && <Link to="/bubblepage">Bubble Page</Link>} */}
      </nav>

      <Route exact path="/" component={Login} />
      <PrivateRoute exact path="/bubblepage" component={BubblePage} />
      {/* 
          Build a PrivateRoute component that will 
          display BubblePage when you're authenticated 
        */}
    </div>
  );
}

export default withRouter(App);
