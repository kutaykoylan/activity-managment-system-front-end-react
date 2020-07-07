import React from "react";
import {Navbar,Form,Nav,NavDropdown,FormControl,Button} from "react-bootstrap";
export const NavBar= () =>{
    return(
            <Navbar  bg="dark" variant="dark" expand="lg">
                <Navbar.Brand href="#home">Activite</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto mx-3">
                        <Nav.Link href="/home">Home</Nav.Link>
                        <Nav.Link href="/activity">Activity</Nav.Link>
                        <Nav.Link href="/map">Map</Nav.Link>
                    </Nav>
                    <Navbar.Collapse className="justify-content-end">
                        <Navbar.Text>
                            Signed in as: <a href="#login">Kerim Kutay Koylan</a>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Navbar.Collapse>
            </Navbar>
    )
}

export default NavBar;