import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

import NavBar from "./common/NavBar/NavBar";
import ActivityLayout from "./pages/Activity/ActivityLayout";

function App() {
  return (
    <div className="App">
        <Router>
            <NavBar/>
            <Switch>
                <Route path="/map" component={()=>{}}/>
                <Route path="/activities" component={ActivityLayout}/>
                <Route path="/" component={()=>{}}/>
            </Switch>
        </Router>
    </div>
  );
}

export default App;
