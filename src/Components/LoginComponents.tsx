import { Container, Row, Col, Form } from "react-bootstrap"

export const LoginComponent: React.FC = () => {
    return (
        <Container>

            <h3 >Login</h3>
            <Form>
                <Form.Group controlId="formBasicUsername">
                    <Form.Label>Username</Form.Label>
                    <Form.Control
                        type="username"
                        placeholder="Enter Username">
                    </Form.Control>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Enter Password">
                    </Form.Control>
                </Form.Group>
            </Form>

        </Container>
    )
}