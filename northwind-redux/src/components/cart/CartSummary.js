import React, {Component} from 'react';
import {Badge, DropdownItem, DropdownMenu, DropdownToggle, NavItem, NavLink, UncontrolledDropdown} from "reactstrap";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as cartActions from "../../redux/actions/cartActions";

class CartSummary extends Component {
    renderEmpty() {
        return (
            <NavItem>
                <NavLink>Cart is empty.</NavLink>
            </NavItem>
        );
    }

    renderSummary() {
        return (
            <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                    Your Cart
                </DropdownToggle>
                <DropdownMenu right>
                    {
                        this.props.cart.map(cartItem => (
                            <DropdownItem key={cartItem.product.id}>
                                <Badge onClick={() => this.props.actions.removeFromCart(cartItem.product)}
                                       color="danger">X</Badge> {cartItem.product.productName} - <Badge
                                color="success">{cartItem.quantity}</Badge>
                            </DropdownItem>
                        ))
                    }
                    <DropdownItem divider/>
                    <DropdownItem>
                        Reset
                    </DropdownItem>
                </DropdownMenu>
            </UncontrolledDropdown>
        );
    }

    render() {
        return (
            <div>
                {this.props.cart.length > 0 ? this.renderSummary() : this.renderEmpty()}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        cart: state.cartReducer
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: {
            removeFromCart: bindActionCreators(cartActions.removeFromCart, dispatch)
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(CartSummary);