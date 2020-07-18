import React from "react";
import Navigators from "./components/Navigators";
import LatestActivities from "./components/LatestActivities";
import Activities from "./components/Activities";


const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="row">
                    <Navigators/>
                    <LatestActivities/>
                    <Activities/>
                </div>
            </div>
            <div className="copyright text-center">
                Copyright &copy; 2020 <span>3K Software</span>
            </div>
        </footer>
    );
}

export default Footer