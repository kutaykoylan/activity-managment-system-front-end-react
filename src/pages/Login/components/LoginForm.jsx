import React from "react";
import {Button, Col, Form} from "react-bootstrap";
import {Link} from "react-router-dom";

const LoginForm = (props) => {
    return (
        <div>
            <Form className="col-6 mx-auto">
                <Form.Row>
                    <Form.Group as={Col} controlId="username">
                        <Form.Label className="d-flex justify-content-sm-start">Username</Form.Label>
                        <Form.Control type="string" className="p-3" placeholder="Username" value={props.loggedInUser.username}
                                      onChange={(e) => props.loggedInUser.setUsername(e.target.value)}/>
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
                <Link className ="d-flex justify-content-start" to="/register">
                    Click to create a new account
                </Link>
            </div>
        </div>
    );
}

export default LoginForm