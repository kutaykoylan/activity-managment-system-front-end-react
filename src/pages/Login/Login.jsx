import React, {useState} from "react";
import {Form, Col, Button, ButtonGroup} from "react-bootstrap";
import axios from 'axios';
import SweetAlert from 'react-bootstrap-sweetalert';
import {ArrowLeftOutlined, PlusOutlined} from "@ant-design/icons";
import {IconContext} from 'react-icons';
import LoginForm from "./components/LoginForm";
import {Link} from "react-router-dom";
import {ActivityAPIHelper} from "../../helpers/ActivityAPI";
import {login} from "../../helpers/UserAPI";
import {UserReduceHelper} from "../../helpers/UserReducer";


const Login = () => {
    const [successAlert, setSuccessAlert] = useState(false);
    const [unsuccessAlert, setUnsuccessAlert] = useState(false);
    const [username, setUsernam] = useState("")
    const [password, setPassword] = useState("")

    const loggedInUser={
        username:username,
        password:password,
        setUsername:setUsernam,
        setPassword:setPassword
    }
    const handleLogin = async () => {

        const loginRequest={
            username:username
            ,password:password
        }
        console.log(loginRequest)
        try {
            const loginResponse = await login(loginRequest);
            console.log(loginResponse)
            const token = loginResponse.data.token;
            if(token){
                localStorage.setItem('token',token);
                localStorage.setItem('username',username);
                ActivityAPIHelper.setAccessToken(token);
                setSuccessAlert(true);
            }
        } catch (error) {
            setUnsuccessAlert(true);
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
                    unsuccessAlert && <SweetAlert warning title="Username or password mistaken!" confirmBtnBsStyle="danger"
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
            <LoginForm loggedInUser={loggedInUser} handleLogin={()=>{handleLogin()}}/>
            </div>
        </div>
    );
}

export default Login