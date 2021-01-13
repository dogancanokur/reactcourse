import React, {Component} from 'react';
import {Button, Form, FormGroup, Input, Label} from "reactstrap";
import alertify from 'alertifyjs/build/alertify.min';

class FormDemo2 extends Component {
    state = {
        email: '',
        password: '',
        city: '',
        description: ''
    }

    onChangeHandler = event => {
        let name = event.target.name;
        let value = event.target.value;
        this.setState({
            [name]: value
        })
    }
    onSubmitHandler = event => {
        event.preventDefault();
        alertify.success('Email = ' + this.state.email + ' City = ' + this.state.city + ' Description = ' + this.state.description + ' Pass = ' + this.state.password);
    }

    render() {
        return (
            <div>
                <Form onSubmit={this.onSubmitHandler}>
                    <FormGroup>
                        <Label for="email">Email</Label>
                        <Input type="email" name="email" id="email" placeholder="email"
                               onChange={this.onChangeHandler}/>
                    </FormGroup>

                    <FormGroup>
                        <Label for="email">Password</Label>
                        <Input type="password" name="password" id="password" placeholder="password"
                               onChange={this.onChangeHandler}/>
                    </FormGroup>

                    <FormGroup>
                        <Label for="email">Description</Label>
                        <Input type="textarea" name="description" id="description"
                               onChange={this.onChangeHandler}/>
                    </FormGroup>

                    <FormGroup>
                        <Label for="city">
                            <Input type="select" name="city" id="city" onChange={this.onChangeHandler}>
                                <option value="">Select</option>
                                <option value="İstanbul">İstanbul</option>
                                <option value="Yalova">Yalova</option>
                                <option value="Ordu">Ordu</option>
                                <option value="Muğla">Muğla</option>
                            </Input>
                        </Label>
                    </FormGroup>

                    <Button type="submit" color="success">Save</Button>
                </Form>
            </div>
        );
    }
}

export default FormDemo2;