import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {Navbar, Form, Nav, NavDropdown, FormControl, Button} from "react-bootstrap";
import {LoginOutlined} from "@ant-design/icons";
import {UserReduceHelper} from "../../helpers/UserReducer";
import {ActivityAPIHelper} from "../../helpers/ActivityAPI";

export const NavBar = () => {
    const logout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('username');
        ActivityAPIHelper.setAccessToken(null);
    }
    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Link className="nav-link" to="/">
                <Navbar.Brand>Activite</Navbar.Brand>
            </Link>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto mx-3">
                    <Nav.Item as="li">
                        <Link className="nav-link" to="/">
                            Home
                        </Link>
                    </Nav.Item>
                    <Nav.Item as="li">
                        <Link className="nav-link" to="/activities">
                            Activities
                        </Link>
                    </Nav.Item>
                    <Nav.Item as="li">
                        <Link className="nav-link" to="/map">
                            Map
                        </Link>
                    </Nav.Item>
                </Nav>
                <Navbar.Collapse className="justify-content-end">
                    {UserReduceHelper.username === "" || typeof UserReduceHelper.username ==='undefined' ?
                        <Link className="nav-link" to="/login">
                            <Button variant="outline-light mx-1 my-0" className="d-flex" onClick={() => {
                            }}>
                                <LoginOutlined className="m-1"/>
                                <p className="m-0">Login</p>
                            </Button>
                        </Link> :
                        <div className="d-flex">
                            <Navbar.Text>Hello {UserReduceHelper.username},</Navbar.Text>
                            <Link className="m-0 p-0" to="/">
                                <Nav.Link onClick={() => {
                                    logout()
                                }}>Logout</Nav.Link>
                            </Link>
                        </div>

                    }


                </Navbar.Collapse>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default NavBar;