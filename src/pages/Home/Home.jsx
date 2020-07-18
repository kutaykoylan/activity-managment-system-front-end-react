import React from "react";
import image1 from '../../homePagePic.jpeg';

const Home = () => {
    return (
        <div>
            <div className="position-absolute col-12" style={{color:"white",top:"300px"}}>
                <h1 className="d-flex justify-content-center">Welcome to Activate</h1>
            </div>
            <img className="img-fit " src={ image1 } />
        </div>
    );
}

export default Home;