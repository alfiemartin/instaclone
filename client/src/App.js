import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import Feed from "./components/Feed";
import NavBar from "./components/NavBar";
import "./index.css";

function App() {
  return (
    <Router>
      <div className="main">
        <NavBar />
        <Feed />
      </div>
    </Router>
  );
}

export default App;

//navbar

//feed
//messages
//discover
//notifications
//profile
