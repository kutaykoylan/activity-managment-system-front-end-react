import React from "react";
import image1 from '../../homePagePic.jpeg';
import {ActivityAPIHelper} from "../../helpers/ActivityAPI";
import { UsersActivityAPIHelper } from "../../helpers/UsersActivitiesAPI";

const Home = () => {
    if(localStorage.getItem('token')!==null){
        ActivityAPIHelper.setAccessToken(localStorage.getItem('token'));
        UsersActivityAPIHelper.setAccessToken(localStorage.getItem('token'))
    }
    else{
        ActivityAPIHelper.setAccessToken("");
        UsersActivityAPIHelper.setAccessToken("")
    }
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