import React, {Component} from 'react';

export default class FormDemo1 extends Component {
    state = {
        username: ''
    }

    onChangeHandler = (event) => {
        this.setState({username: event.target.value});
    }

    onSubmitHandler = (event) => {
        event.preventDefault(); // default davranisi uygulama
        alert(this.state.username);
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmitHandler}>
                    <h3>Username</h3>
                    <input type="text" onChange={this.onChangeHandler}/>
                    <h3>Username is {this.state.username}</h3>
                    <input type="submit" value="Save"/>
                </form>
            </div>
        );
    }

}
