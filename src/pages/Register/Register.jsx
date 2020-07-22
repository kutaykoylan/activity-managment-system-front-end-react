import React, {useState} from "react";
import {Form, Col, Dropdown, Button, AccordionCollapse} from "react-bootstrap";
import {registerUser} from "../../helpers/UserAPI";
import SweetAlert from 'react-bootstrap-sweetalert';
import RegisterForm from "./components/RegisterForm";
import {Link} from "react-router-dom";

const Register = () => {
    const [name, setName] = useState("")
    const [surname, setSurname] = useState("")
    const [tcSecurityNumber, setTcSecurityNumber] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [passwordRepeat, setPasswordRepeat] = useState("")
    const [username, setUsername] = useState("")
    const [birthDate, setBirthDate] = useState(null)
    const [address, setAddress] = useState("")

    const [successAlert, setSuccessAlert] = useState(false);
    const [unsuccessAlert, setUnsuccessAlert] = useState(false);

    /*
    "username":"kutaykoylan"
   ,"password":"123456"
   ,"birthDate": "1998-09-22"
   ,"address": "Izmir/Esentepe"
     */
    const userObjectToPass = {
        name: name
        , surname: surname
        , tcSecurityNumber: tcSecurityNumber
        , username: username
        , birthDate: birthDate
        , address: address
        , email: email
        , password: password
        , passwordRepeat: passwordRepeat
    }
    const handleRegister = async () => {
        if (password === passwordRepeat && (password.length <= 20 && password.length >= 8) && (email.length !== 0 && name.length !== 0)) {
            console.log(birthDate)
            const data = {
                tcSecurityNumber:tcSecurityNumber
                , name: name
                , surname: surname
                , email: email
                , username: username
                , password: password
                , birthDate: birthDate.value
                , address: address
            }
            console.log(data)
            try {
                const response = await registerUser(data)
                setSuccessAlert(true);
            } catch (error) {
                setUnsuccessAlert(true)
            }
        } else
            setUnsuccessAlert(true)
    }
    /*
        const signInAndRedirect = async () => {
            setSuccessAlert(false);
            // const loginRequest = await axios.post(process.env.REACT_APP_API_URL + 'auth/signin/', {email, password});
            // const token = loginRequest.data.accessToken;
            // localStorage.setItem('token', token);
            // APIHelper.setAccessToken(token);
            //window.location.href = "/";
        }
     */
    const handleConfirm=()=>{
        setSuccessAlert(false);
        window.location.href = "/login";
    }


    return (
        <div className="col-12 p-3 container">
            {
                successAlert && <SweetAlert success title="Good job!" onConfirm={() => {handleConfirm()}}>
                    Registered Successfully!
                </SweetAlert>
            }
            {
                unsuccessAlert && <SweetAlert warning title="Some field mistaken!" confirmBtnBsStyle="danger"
                                              onConfirm={() => setUnsuccessAlert(false)}>
                    Please try again!
                </SweetAlert>
            }
            <RegisterForm userObjectToPass={userObjectToPass} handleRegister={()=>handleRegister()} setName={setName}
                          setBirthDate={setBirthDate} setAddress={setAddress} setSurname={setSurname}
                          setTcSecurityNumber={setTcSecurityNumber} setUsername={setUsername} setEmail={setEmail}
                          setPassword={setPassword} setPasswordRepeat={setPasswordRepeat}/>
        </div>
    );
}
export default Register;