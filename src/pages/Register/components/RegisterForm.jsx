import React from "react";
import SweetAlert from "react-bootstrap-sweetalert";
import {Button, Col, Form, InputGroup} from "react-bootstrap";
import {Calendar} from "primereact/calendar";

const RegisterForm = (props) => {
    return (
        <div className="col-12 p-3 container">

            <Form className="col-6 mx-auto">
                <Form.Row>
                    <Form.Group as={Col} controlId="tcSecurityNumber">
                        <Form.Label className="d-flex justify-content-sm-start">T.C. Identification No.*</Form.Label>
                        <Form.Control type="text" className="p-3" placeholder="Enter your TC Identification no."
                                      value={props.userObjectToPass.tcSecurityNumber}
                                      onChange={(e) => props.setTcSecurityNumber(e.target.value)}/>
                    </Form.Group>
                </Form.Row>
                <Form.Row>
                    <Form.Group as={Col} controlId="name">
                        <Form.Label className="d-flex justify-content-sm-start">Name*</Form.Label>
                        <Form.Control type="text" className="p-3" placeholder="Enter your name"
                                      value={props.userObjectToPass.fullName}
                                      onChange={(e) => props.setName(e.target.value)}/>
                    </Form.Group>
                    <Form.Group as={Col} controlId="surname">
                        <Form.Label className="d-flex justify-content-sm-start">Surname*</Form.Label>
                        <Form.Control type="text" className="p-3" placeholder="Enter your surname"
                                      value={props.userObjectToPass.fullName}
                                      onChange={(e) => props.setSurname(e.target.value)}/>
                    </Form.Group>
                </Form.Row>
                <Form.Row>
                    <Form.Group as={Col} md="4" controlId="validationCustomUsername">
                        <Form.Label className="d-flex justify-content-sm-start">Username*</Form.Label>
                        <InputGroup>
                            <InputGroup.Prepend>
                                <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                            </InputGroup.Prepend>
                            <Form.Control
                                type="text"
                                placeholder="Username"
                                aria-describedby="inputGroupPrepend"
                                value={props.userObjectToPass.fullName}
                                onChange={(e) => props.setUsername(e.target.value)}
                                required
                            />
                            <Form.Control.Feedback type="invalid">
                                Please choose a username.
                            </Form.Control.Feedback>
                        </InputGroup>
                    </Form.Group>
                </Form.Row>
                <Form.Row>
                    <Form.Group as={Col} controlId="Email">
                        <Form.Label className="d-flex justify-content-sm-start">Email*</Form.Label>
                        <Form.Control type="email" className="p-3" placeholder="Email"
                                      value={props.userObjectToPass.email}
                                      onChange={(e) => props.setEmail(e.target.value)}/>
                    </Form.Group>
                </Form.Row>
                <Form.Row>
                    <Form.Group as={Col} controlId="Address">
                        <Form.Label className="d-flex justify-content-sm-start">Address*</Form.Label>
                        <Form.Control type="address" className="p-3" placeholder="Address"
                                      value={props.userObjectToPass.address}
                                      onChange={(e) => props.setAddress(e.target.value)}/>
                    </Form.Group>
                </Form.Row>
                <Form.Row>
                    <Form.Group as={Col} controlId="date">
                        <Form.Label className="d-flex justify-content-sm-start">BirthDate*</Form.Label>
                        <Calendar dateFormat="dd/mm/yy" className="d-flex justify-content-sm-start " placeholder="Enter your birth date"
                                  value={props.birthDate} onChange={(e) => {
                            props.setBirthDate(e)
                        }}
                                  showButtonBar={true}/>
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
                <Form.Group className="d-flex justify-content-sm-start">
                    <Form.Check
                        required
                        label="Agree to terms and conditions"
                        feedback="You must agree before registering."
                    />
                </Form.Group>
                <Button variant="outline-success" className="mx-0 " onClick={props.handleRegister}>
                    Register
                </Button>
            </Form>
        </div>
    );
}

export default RegisterForm