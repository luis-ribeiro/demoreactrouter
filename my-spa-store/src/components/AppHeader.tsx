import React from "react";
import { Form, FormControl } from "react-bootstrap";
import Button from "react-bootstrap/esm/Button";
import Nav from "react-bootstrap/esm/Nav";
import Navbar from "react-bootstrap/esm/Navbar";

interface IAppHeaderProps {
    path?:string;
}

export default class AppHeader extends React.Component<IAppHeaderProps> {
    render() {
        return (
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="/">
                    My Store    
                </Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/products">Products</Nav.Link>
                    <Nav.Link href="/cart">Cart</Nav.Link>
                    <Nav.Link href="/myprofile">My profile</Nav.Link>
                </Nav>
            </Navbar>
        )
    }
}