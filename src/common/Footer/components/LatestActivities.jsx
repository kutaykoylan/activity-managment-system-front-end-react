import React from "react";

const LatestActivities = () => {
    return (
        <div className="col-lg-4 col-md-6">
            <h3>Up-to-date Activities</h3>
            <div className="media">
                <a href="#" className="pull-left">
                    <img src="http://lorempixel.com/64/64/city/3/" alt="" className="media-object mx-3"/>
                </a>
                <div className="media-body">
                    <h4 className="d-flex justify-content-start">Programming</h4>
                    <p className="d-flex justify-content-start">You may learn something that will be useful for you in the future.</p>
                </div>
            </div>

            <div className="media">
                <a href="#" className="pull-left">
                    <img src="http://lorempixel.com/64/64/city/4/" alt="" className="media-object mx-3"/>
                </a>
                <div className="media-body">
                    <h4 className="d-flex justify-content-start">Coding</h4>
                    <p className="d-flex justify-content-start">Future is codding.</p>
                </div>
            </div>

            <div className="media">
                <a href="#" className="pull-left">
                    <img src="http://lorempixel.com/64/64/city/5/" alt="" className="media-object mx-3"/>
                </a>
                <div className="media-body">
                    <h4 className="d-flex justify-content-start">Artificial Intelligence</h4>
                    <p className="d-flex justify-content-start">Robots want to kill you !</p>
                </div>
            </div>

        </div>
    );
}

export default LatestActivities