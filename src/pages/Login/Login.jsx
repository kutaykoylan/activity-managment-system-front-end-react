import React, {useState} from "react";
import {Form, Col, Button} from "react-bootstrap";
import axios from 'axios';
import SweetAlert from 'react-bootstrap-sweetalert';
import {FaGoogle} from 'react-icons/fa';
import {IconContext} from 'react-icons';
import LoginForm from "./components/LoginForm";


const Login = () => {
    const [successAlert, setSuccessAlert] = useState(false);
    const [unsuccessAlert, setUnsuccessAlert] = useState(false);
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const loggedInUser={
        email:email,
        password:password,
        setEmail:setEmail,
        setPassword:setPassword
    }
    const handleLogin = async () => {
        try {
            /**
             * TODO: Login request will be send here
             * And token will be set
             */
        } catch (error) {

        }

    }

    return (
        <div>
            <div className="col-12 p-3 container">
                {
                    successAlert && <SweetAlert success title="Good job!" onConfirm={() => window.location.href = "/"}>
                        Login Successfully!
                    </SweetAlert>
                }
                {
                    unsuccessAlert && <SweetAlert warning title="Email or password mistaken!" confirmBtnBsStyle="danger"
                                                  onConfirm={() => setUnsuccessAlert(false)}>
                        Please try again!
                    </SweetAlert>
                }
                <div className="col-6 mx-auto">
                    <a className="d-flex justify-content-sm-start" href="https://api.applyiz.tech/oauth2/authorize/google?redirect_uri=https://applyiz.tech">
                        <Button variant={"secondary"} className="googleSignInButton">
                            <IconContext.Provider value={{color: "#DD5347", className: "global-class-name mr-2"}}>
                                <FaGoogle/>
                            </IconContext.Provider>
                            Login via Google</Button>
                    </a>
                    <hr/>
                </div>
            <LoginForm loggedInUser={loggedInUser} handleLogin={handleLogin()}/>
            </div>
        </div>
    );
}

export default Login