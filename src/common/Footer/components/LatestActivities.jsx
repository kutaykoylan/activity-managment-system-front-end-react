import React from "react";

const LatestActivities = () => {
    return (
        <div className="col-lg-4 col-md-6">
            <h3>Up-to-date Activities</h3>
            <div className="media">
                <a href="#" className="pull-left">
                    <img src="http://placehold.it/64x64" alt="" className="media-object"/>
                </a>
                <div className="media-body">
                    <h4 className="media-heading">Programming</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                </div>
            </div>

            <div className="media">
                <a href="#" className="pull-left">
                    <img src="http://placehold.it/64x64" alt="" className="media-object"/>
                </a>
                <div className="media-body">
                    <h4 className="media-heading d-flex justify-content-start">Coding</h4>
                    <p className="d-flex justify-content-start">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                </div>
            </div>

            <div className="media">
                <a href="#" className="pull-left">
                    <img src="http://placehold.it/64x64" alt="" className="media-object"/>
                </a>
                <div className="media-body">
                    <h4 className="media-heading">Web Sesign</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                </div>
            </div>

        </div>
    );
}

export default LatestActivities