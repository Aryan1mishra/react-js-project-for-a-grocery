import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./index.css";
import Home from "./project2/Home/Home";
import Navbar from "./project2/NavBar/Navbar";
import Grocery from "./project2/Grocery/Grocery";
import Dairy from "./project2/Dairy/Dairy";
import Contact from "./project2/Contact/Contact";
import Login from "./project2/Login/Login";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/grocery">
          <Grocery />
        </Route>
        <Route path="/dairy">
          <Dairy />
        </Route>
        <Route path="/contact">
          <Contact/>
        </Route>
        <Route path="/login">
          <Login/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
