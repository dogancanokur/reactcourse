import React, {useState} from 'react';
import {Collapse, Nav, Navbar, NavbarBrand, NavbarText, NavbarToggler, NavItem, NavLink} from 'reactstrap';
import CartSummary from "../cart/CartSummary";
import {Link} from "react-router-dom";

const Navi = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            <Navbar color="light" light expand="md">
                <NavbarBrand href={"/"}> Northwind App</NavbarBrand>
                <NavbarToggler onClick={toggle}/>
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <NavLink href="/components/">Components</NavLink>
                        </NavItem>
                        <CartSummary/>
                    </Nav>
                    <NavbarText>faecon</NavbarText>
                </Collapse>
            </Navbar>
        </div>
    );
}

export default Navi;