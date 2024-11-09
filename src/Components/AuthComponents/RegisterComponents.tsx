import { Container, Form, Button } from "react-bootstrap"
import "./RegisterCSS.css"
import { useState } from "react";
import { store } from "../../GlobalData/store";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const RegisterComponent: React.FC = () => {
    const [username, setUsername] = useState<String>('');
    const [password, setPassword] = useState<String>('');

    const navigate = useNavigate()

    const handleLogin = async () => {
        const registerResponse = await axios.post(store.baseUrl + "register", {
            username: username,
            password: password
        }
        ).then(
            (response) => {
                store.authToken = response.data.jwtToken
                store.user.username = response.data.username
                store.user.role = response.data.role
                alert(`Register Successfully! Welcome ${store.user.role} ${store.user.username}`)
                navigate("/dashboard")
            }
        ).catch((error) => {

            alert(error)
        }
        )
    }
    return (
        <Container>
            <h3 >Register Your Account </h3>
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

            <Button className="registerButton" onClick={handleLogin}>Register</Button>

            <div className="login">
                Have a account?
                <Button onClick={() => { navigate("/") }}>Back To Login</Button>
            </div>
        </Container>
    )
}