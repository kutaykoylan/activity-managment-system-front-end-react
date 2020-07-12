import React from "react";
import image1 from '../../homePagePic.jpeg';

const Home = () => {
    return (
        <div className="d-flex">
            <img src={ image1 } />
            <div style={{color:"white"}}>
                <h1>Welcome to Activate</h1>
            </div>
        </div>
    );
}

export default Home;