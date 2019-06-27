import React, {PureComponent} from 'react';
import RegisterForm from './components/RegisterForm'
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col"
import Card from "react-bootstrap/Card";
import Logo from "../../components/Logo";

class RegisterPage extends PureComponent {

    render() {
        return (
            <div className="auth">
                <Container>
                    <Row className="justify-content-center">
                        <Col md={6}>
                            <Logo></Logo>
                            <Card>
                                <RegisterForm></RegisterForm>
                                <Card.Body>
                                    Already have an acocunt? <a href="/">Sign in</a>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default RegisterPage
