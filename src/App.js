import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

import NavBar from "./common/NavBar/NavBar";
import ActivityLayout from "./pages/Activity/ActivityLayout";
import MapShower from "./pages/Map/MapShower";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Home from "./pages/Home/Home";
import Footer from "./common/Footer/Footer";

function App() {
  return (
    <div className="App">
        <Router>
            <NavBar/>
            <Switch>
                <Route path="/map" component={MapShower}/>
                <Route path="/activities" component={ActivityLayout}/>
                <Route path="/login" component={Login} />
                <Route path="/register" component={Register}/>
                <Route path="/" component={Home}/>
            </Switch>
            <Footer/>
        </Router>
    </div>
  );
}

export default App;
