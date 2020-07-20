import React from "react";
import {Link} from "react-router-dom";
import {Navbar,Form,Nav,NavDropdown,FormControl,Button} from "react-bootstrap";
import {LoginOutlined} from "@ant-design/icons";
export const NavBar= (props) =>{
    return(
            <Navbar  bg="dark" variant="dark" expand="lg">
                <Navbar.Brand href="#home">Activite</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
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
                        <Button variant="outline-light mx-1 my-0" className ="d-flex" onClick={()=>{}}>
                            <LoginOutlined className="m-1"/>
                            <p className = "m-0" >Login</p>
                        </Button>
                    </Navbar.Collapse>
                </Navbar.Collapse>
            </Navbar>
    )
}

export default NavBar;