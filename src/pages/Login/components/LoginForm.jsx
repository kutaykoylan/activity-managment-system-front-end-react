import React from "react";
import {Button, Col, Form} from "react-bootstrap";

const LoginForm = (props) => {
    return (
        <div>
            <Form className="col-6 mx-auto">
                <Form.Row>
                    <Form.Group as={Col} controlId="Email">
                        <Form.Label className="d-flex justify-content-sm-start">Email</Form.Label>
                        <Form.Control type="email" className="p-3" placeholder="Email" value={props.loggedInUser.email}
                                      onChange={(e) => props.loggedInUser.setEmail(e.target.value)}/>
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
                        value={props.loggedInUser.password}
                        onChange={(e) => props.loggedInUser.setPassword(e.target.value)}
                    />
                </Form.Row>

                <Button variant="danger" className="mx-0 mt-3" onClick={props.handleLogin}>
                    Sign In
                </Button>
            </Form>

            <div className="col-6 mx-auto">
                <hr/>

                <a className="d-flex justify-content-sm-start" href="/register">
                    Click to create a new account (without using google)
                </a>
            </div>
        </div>
    );
}

export default LoginForm