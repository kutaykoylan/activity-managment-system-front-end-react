import React from "react";
import SweetAlert from "react-bootstrap-sweetalert";
import {Button, Col, Form} from "react-bootstrap";

const RegisterForm = (props) => {
    return (
        <div className="col-12 p-3 container">

            <Form className="col-6 mx-auto">
                <Form.Row>
                    <Form.Group as={Col} controlId="fullName">
                        <Form.Label className="d-flex justify-content-sm-start">Full Name*</Form.Label>
                        <Form.Control type="text" className="p-3" placeholder="Enter your full-name" value={props.userObjectToPass.fullName}
                                      onChange={(e) => props.setFullName(e.target.value)}/>
                    </Form.Group>
                </Form.Row>
                <Form.Row>
                    <Form.Group as={Col} controlId="Email">
                        <Form.Label className="d-flex justify-content-sm-start">Email*</Form.Label>
                        <Form.Control type="email" className="p-3" placeholder="Email" value={props.userObjectToPass.email}
                                      onChange={(e) => props.setEmail(e.target.value)}/>
                    </Form.Group>
                </Form.Row>
                <Form.Row>
                    <Form.Label htmlFor="inputPassword5">Password</Form.Label>
                    <Form.Control
                        type="password"
                        id="inputPassword5"
                        className="p-3"
                        aria-describedby="passwordHelpBlock"
                        placeholder="password"
                        value={props.userObjectToPass.password}
                        onChange={(e) => props.setPassword(e.target.value)}
                    />
                    <Form.Text id="passwordHelpBlock" muted className="m-3">
                        Your password must be 8-20 characters long.
                    </Form.Text>
                </Form.Row>
                <Form.Row>
                    <Form.Label htmlFor="inputPassword5">Re-password</Form.Label>
                    <Form.Control
                        type="password"
                        id="inputPassword5"
                        className="p-3"
                        aria-describedby="passwordHelpBlock"
                        placeholder="re-password"
                        value={props.userObjectToPass.passwordRepeat}
                        onChange={(e) => props.setPasswordRepeat(e.target.value)}
                    />
                    <Form.Text id="passwordHelpBlock" muted className="m-3">
                        Your password must be 8-20 characters long.
                    </Form.Text>
                </Form.Row>
                <Button variant="outline-success" className="mx-0 " onClick={props.handleRegister}>
                    Register
                </Button>
            </Form>
        </div>
    );
}

export default RegisterForm