import React from "react";
import image1 from '../../homePagePic.jpeg';
import {ActivityAPIHelper} from "../../helpers/APIHelpers/ActivityAPI";
import {UsersActivityAPIHelper} from "../../helpers/APIHelpers/UsersActivitiesAPI";
import {Button, ButtonGroup, Container} from "react-bootstrap";
import {Link} from "react-router-dom";
import {HomeOutlined, CarOutlined} from "@ant-design/icons/lib";

const Home = () => {
    if (localStorage.getItem('token') !== null) {
        ActivityAPIHelper.setAccessToken(localStorage.getItem('token'));
        UsersActivityAPIHelper.setAccessToken(localStorage.getItem('token'))
    } else {
        ActivityAPIHelper.setAccessToken("");
        UsersActivityAPIHelper.setAccessToken("")
    }
    return (
        <div >
            <Container className="position-absolute col-12 m-0 p-0 row-cols-5 justify-content-center align-items-center bg-dark" style={{background:"#33333",opacity:"0.8",color: "white", top: "300px"}}>
                <h1 className="d-flex justify-content-center my-5 col-12">Welcome to Activite</h1>
                    <Link to="/">
                        <Button
                            variant="outline-black align-items-start border-white border-left-0 border-top-0 border-bottom-0">
                            <i className="pi pi-home m-1" style={{color: "white", fontSize: "4em"}}></i>
                            <h3 style={{color: "white"}}>Home</h3>
                            <p style={{color: "white"}}>
                                Explore the world!
                            </p>
                        </Button>
                    </Link>
                    <Link to="/activities">
                        <Button
                            variant="outline-black align-items-start border-white border-left-0 border-top-0 border-bottom-0">
                            <i className="pi pi-ticket m-1" style={{color: "white", fontSize: "4em"}}></i>
                            <h3 style={{color: "white"}}>Activity</h3>
                            <p style={{color: "white"}}>
                                See various activities
                                <br/>
                                that may be exciting for you!
                            </p>
                        </Button>
                    </Link>
                    <Link to="/map">
                        <Button variant="outline-black align-items-start">
                            <i className="pi pi-compass m-1" style={{color: "white", fontSize: "4em"}}></i>
                            <h3 style={{color: "white"}}>Map</h3>
                            <p style={{color: "white"}}>
                                Exact locations of Activite
                                <br/>
                                is one tap further!
                            </p>
                        </Button>
                    </Link>
                <br/>
                <br/>
                <ButtonGroup className="justify-content-center m-3">
                    <Link to="/register">
                        <Button variant="info" size="lg">
                            Get Started
                        </Button>
                    </Link>
                </ButtonGroup>
            </Container>
            <img className="img-fit" style={{ filter: "blur(50%)",backgroundSize:"cover"}} src={image1}/>
        </div>
    );
}

export default Home;