import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import Feed from "./components/Feed";

function App() {
  return (
    <Router>
      <div className="main">
        <nav>
          <ul>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </nav>
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
