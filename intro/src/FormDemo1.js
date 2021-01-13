import React, {Component} from 'react';
import {Form} from "reactstrap";

export default class FormDemo1 extends Component {
    state = {
        username: ''
    }

    onChangeHandler = (event) => {
        this.setState({username: event.target.value});
    }

    render() {
        return (
            <div>
                <Form>
                    <h3>Username</h3>
                    <input type="text" onChange={this.onChangeHandler}/>
                    <h3>Username is {this.state.username}</h3>
                </Form>
            </div>
        );
    }

}
