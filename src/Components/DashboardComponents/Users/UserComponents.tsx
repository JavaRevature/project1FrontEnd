import { Button, Table } from "react-bootstrap"
import "./UserComponents.css"
import { useEffect, useState } from "react"
import { User } from "../../../Types/User";
import axios from "axios";
import { store } from "../../../GlobalData/store";
export const UserComponents: React.FC = () => {
    const [users, setUsers] = useState<User[]>();
    const token = localStorage.getItem('authToken')
    useEffect(() => {
        const getUsers = async () => {
            await axios.get(store.baseUrl + "users", {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }).then(
                (response) => {
                    setUsers(response.data)
                }
            ).catch(
                (error) => {
                    alert(error)
                }
            )
        }
        getUsers()
    }, [token])
    const handlePromote = async () => {

    }

    return (<div className="userComponents">
        <h3>User Management</h3>
        <Table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Role</th>
                    <th>Promote</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {users && users.length > 0 ? (
                    users.map((user: User) =>
                        <tr key={user.username}>
                            <td>{user.username}</td>
                            <td>{user.role}</td>
                            <td>{user.role === 'EMPLOYEE' && <Button variant="success" onClick={() => handlePromote()}>PROMOTE</Button>}</td>
                            <td><Button variant="danger">DELETE</Button></td>
                        </tr>
                    )
                ) : (
                    <tr>
                        <td colSpan={5}>Loading...</td>
                    </tr>)
                }
            </tbody>
        </Table>
    </div>
    )
}