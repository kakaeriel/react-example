import React, {Component} from 'react';
import Form from "react-bootstrap/Form";

class RegisterForm extends Component {

    render() {
        return (
            <Form>
                <Form.Group>
                    <Form.Label column="2">Email</Form.Label>
                    <Form.Control type="email" placeholder="Email"/>
                </Form.Group>
            </Form>
        )
    }
}

export default RegisterForm;
