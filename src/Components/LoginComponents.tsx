import { Container, Form, Button } from "react-bootstrap"
import "./LoginCSS.css"
import { useState } from "react";
export const LoginComponent: React.FC = () => {

    const [username, setUsername] = useState<String>('');
    const [password, setPassword] = useState<String>('');

    const handleLogin = () => {

    }
    return (
        <Container>
            <h3 >Login</h3>
            <Form>
                <Form.Group controlId="formBasicUsername">
                    <Form.Label>Username</Form.Label>
                    <Form.Control
                        type="username"
                        placeholder="Enter Username"
                        onChange={(e) => setUsername(e.target.value)}>
                    </Form.Control>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Enter Password"
                        onChange={(e) => setPassword(e.target.value)}>
                    </Form.Control>
                </Form.Group>
            </Form>

            <Button className="login" onClick={handleLogin}>Login</Button>

            <div className="register">
                Don't have account?
                <Button className="btn-success">Register</Button>
            </div>
        </Container>
    )
}