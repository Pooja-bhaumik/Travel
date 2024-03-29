import React, { useEffect } from "react";
import Header from "./components/Header.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Blog from "./components/Blog";
import SignForm from "./components/Sign-up.jsx";
import Footer from "./components/Footer.jsx";

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/home" exact component={Home} />
          <Route path="/about" exact component={About} />
          <Route path="/blog" exact component={Blog} />
          <Route path="/sign" exact component={SignForm} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
};

export default App;
