import React, {useState} from "react";
import {Form, Col, Button, ButtonGroup} from "react-bootstrap";
import axios from 'axios';
import SweetAlert from 'react-bootstrap-sweetalert';
import {ArrowLeftOutlined, PlusOutlined} from "@ant-design/icons";
import {IconContext} from 'react-icons';
import LoginForm from "./components/LoginForm";
import {Link} from "react-router-dom";



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
                    <Link className ="d-flex justify-content-start" to="/">
                        <Button variant="outline-black">
                            <ArrowLeftOutlined className="m-1"/>
                        </Button>
                    </Link>
                    <hr/>
                </div>
            <LoginForm loggedInUser={loggedInUser} handleLogin={handleLogin()}/>
            </div>
        </div>
    );
}

export default Login