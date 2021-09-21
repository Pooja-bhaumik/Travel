import React from "react";
import Navbar from "./components/Navbar.jsx";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route Path="/" exact />
        </Switch>
      </Router>
    </>
  );
};

export default App;
