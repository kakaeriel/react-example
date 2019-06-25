import React, {PureComponent} from 'react';
import RegisterForm from './components/RegisterForm'
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col"


class RegisterPage extends PureComponent {

    render() {
        return (
            <div id="register-form">
                <Container>
                    <Row className="justify-content-center">
                        <Col>
                            <RegisterForm></RegisterForm>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default RegisterPage
