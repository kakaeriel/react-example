import React, {ChangeEvent, Component} from 'react';
import axios from 'axios';

interface State {
    formControls: {
        email: string,
        firstName: string,
        lastName: string,
        password: string,
        passwordConfirm: string
    }
}

class RegisterForm extends React.Component<{}, State> {

    constructor() {
        super({});
        this.state = {
            formControls: {
                email: '',
                firstName: '',
                lastName: '',
                password: '',
                passwordConfirm: '',
            }
        }
    }

    handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const name = event.target.name;
        const value = event.target.value;

        this.setState({
            formControls: {
                ...this.state.formControls,
                [name]: value
            }
        });

        return true;
    };

    handleSubmit = (event: Event) => {
        event.preventDefault();

        axios.post('https://reqres.in/api/register', this.state.formControls)
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label>Email</label>
                    <input
                        name="email"
                        id="email"
                        className="form-control"
                        type="email"
                        placeholder="Email"
                        value={this.state.formControls.email}
                        onChange={this.handleChange}/>
                </div>
                <div className="form-group">
                    <label>First Name</label>
                    <input
                        name="firstName"
                        className="form-control"
                        type="text"
                        placeholder="First Name"
                        value={this.state.formControls.firstName}
                        onChange={this.handleChange}/>
                </div>
                <div className="form-group">
                    <label>Last Name</label>
                    <input
                        name="lastName"
                        className="form-control"
                        type="text"
                        placeholder="Last Name"
                        value={this.state.formControls.lastName}
                        onChange={this.handleChange}/>
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input
                        name="password"
                        className="form-control"
                        type="password"
                        placeholder="Password"
                        value={this.state.formControls.password}
                        onChange={this.handleChange}/>
                </div>
                <div className="form-group">
                    <label>Password Confirmation</label>
                    <input
                        name="passwordConfirm"
                        className="form-control"
                        type="password"
                        placeholder="Password Confirmation"
                        value={this.state.formControls.passwordConfirm}
                        onChange={this.handleChange}/>
                </div>
                <div className="form-group form-check">
                    <input type="checkbox" className="form-check-input" id="registerAgree"/>
                    <label className="form-check-label" htmlFor="registerAgree">
                        I agree to the terms and conditions
                    </label>
                </div>
                <button type="submit" className="btn btn-primary btn-block">Register</button>
            </form>
        )
    }
}

export default RegisterForm;
