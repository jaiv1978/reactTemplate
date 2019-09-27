import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'

const MenuBar = (props) => {

    return(
        <Navbar expand="lg" bg="dark" variant="dark">
            <Navbar.Brand href="#home">Brand</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="#item1">item 1</Nav.Link>
                    <Nav.Link href="#item2">item 2</Nav.Link>
                    <Nav.Link href="#item3">item 3</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default MenuBar;