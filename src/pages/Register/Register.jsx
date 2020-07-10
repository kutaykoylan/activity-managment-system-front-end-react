import React, {useState} from "react";
import {Form, Col, Dropdown, Button, AccordionCollapse} from "react-bootstrap";
import axios from 'axios';
import SweetAlert from 'react-bootstrap-sweetalert';
import RegisterForm from "./components/RegisterForm";

const Register = () => {
    const [fullName, setFullName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [passwordRepeat, setPasswordRepeat] = useState("")
    const [successAlert, setSuccessAlert] = useState(false);
    const [unsuccessAlert, setUnsuccessAlert] = useState(false);

    const userObjectToPass={
        fullName: fullName
        ,email: email
        ,password: password
        ,passwordRepeat: passwordRepeat
    }
    const handleRegister = async () => {
        if (password === passwordRepeat && (password.length <= 20 && password.length >= 8) && (email.length !== 0 && fullName.length !== 0)) {
            /*
            const data = {
                email: email.toString(),
                name: fullName.toString(),
                password: password.toString()
            }
            try {
                const registerUser = await axios.post(process.env.REACT_APP_API_URL + 'auth/signup/', data);
            } catch (error) {

            }
            setSuccessAlert(true);
        } else
            setUnsuccessAlert(true)

             */
        }
    }

    const signInAndRedirect = async () => {
        setSuccessAlert(false);
        // const loginRequest = await axios.post(process.env.REACT_APP_API_URL + 'auth/signin/', {email, password});
        // const token = loginRequest.data.accessToken;
        // localStorage.setItem('token', token);
        // APIHelper.setAccessToken(token);
        //window.location.href = "/";
    }


    return (
        <div className="col-12 p-3 container">
            {
                successAlert && <SweetAlert success title="Good job!" onConfirm={signInAndRedirect}>
                    Registered Successfully!
                </SweetAlert>
            }
            {
                unsuccessAlert && <SweetAlert warning title="Some field mistaken!" confirmBtnBsStyle="danger"
                                              onConfirm={() => setUnsuccessAlert(false)}>
                    Please try again!
                </SweetAlert>
            }
            <RegisterForm userObjectToPass={userObjectToPass} handleRegister={handleRegister()} setFullName={setFullName} setEmail={setEmail} setPassword={setPassword} setPasswordRepeat={setPasswordRepeat}/>
        </div>
    );
}
export default Register;