import React, {Component} from 'react';
import {Collapse, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink,} from "reactstrap";
import CartSummary from "./CartSummary";

export default class Navi extends Component {
    isOpen;
    toggle;

    render() {
        return (
            <div>
                {/*<h2>Navi Component</h2>*/}
                <Navbar color="light" light expand="md">
                    <NavbarBrand href="/">Northwind App</NavbarBrand>
                    <NavbarToggler onClick={this.toggle}/>
                    <Collapse isOpen={this.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            {/*ml => saga - mr => sola  yaslar*/}
                            <NavItem>
                                <NavLink href="/components/">Components</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
                            </NavItem>
                            <CartSummary cart={this.props.cart}/>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}