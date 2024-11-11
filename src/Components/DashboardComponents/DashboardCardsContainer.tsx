import "./CardsContainer.css"
import { Table } from "react-bootstrap"
import { useEffect, useState } from "react";
import { User } from "../../Types/User";
import axios from "axios";
import { store } from "../../GlobalData/store";
export const DashboardCardsContainer: React.FC = () => {
    const [user, setUser] = useState<User>();
    const [reimbursements, setReimbursements] = useState<any>([]);
    const token = localStorage.getItem('authToken');

    useEffect(() => {
        if (localStorage.getItem('username') && localStorage.getItem('role')) {
            setUser(
                {
                    username: localStorage.getItem('username'),
                    role: localStorage.getItem('role')
                }
            )
        }

    }, [])

    useEffect(() => {
        const getReimbursementsByUserRoleOrId = async () => {

            if (user?.role === "MANAGER") {
                await axios.get(store.baseUrl + "reimbursements/all", {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                })
                    .then((response) => {
                        setReimbursements(response.data)
                    }).catch((error) => {
                        alert(error)
                    })
            }
            else if (user?.role === "EMPLOYEE") {
                await axios.get(store.baseUrl + "reimbursements", {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                })
                    .then((response) => {
                        setReimbursements(response.data)
                    }).catch((error) => {
                        alert(error)
                    })
            }

        }
        getReimbursementsByUserRoleOrId();

    }, [user, token])


    return (
        <div className="cardsContainer">
            <Table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Status</th>
                        <th>Cost</th>
                        <th>Description</th>
                        <th>Approved By</th>
                    </tr>
                </thead>
                <tbody>
                    {reimbursements && reimbursements.length > 0 ? (
                        reimbursements.map((reimbursement: any) => (
                            <tr key={reimbursement.id}>
                                <td>{reimbursement.submittedBy.username}</td>
                                <td>{reimbursement.status}</td>
                                <td>{reimbursement.amount}</td>
                                <td>{reimbursement.description}</td>
                                <td>{reimbursement.approvedBy}</td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan={5}>Loading...</td> {/* or any message you'd like to display while waiting */}
                        </tr>
                    )}
                </tbody>
            </Table>
        </div>
    )
}