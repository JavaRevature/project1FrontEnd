import { Container, Form, Button } from "react-bootstrap"
import "./LoginCSS.css"
import { useState } from "react";
import { store } from "../../GlobalData/store";
import axios from "axios";
import { useNavigate } from "react-router-dom";
export const LoginComponent: React.FC = () => {

    const [username, setUsername] = useState<String>('');
    const [password, setPassword] = useState<String>('');

    const navigate = useNavigate()

    const handleLogin = async () => {
        await axios.post(store.baseUrl + "login", {
            username: username,
            password: password
        }
        ).then(
            (response) => {
                localStorage.setItem('authToken', response.data.jwtToken)
                localStorage.setItem('username', response.data.username)
                localStorage.setItem('role', response.data.role)
                alert(`Login Successfully! Welcome ${response.data.role} ${response.data.username}`)
                navigate("/dashboard")
            }
        ).catch((error) => {

            alert(error)
        }
        )
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
                <Button className="btn-success" onClick={() => { navigate("/register") }}>Register</Button>
            </div>
        </Container>
    )
}