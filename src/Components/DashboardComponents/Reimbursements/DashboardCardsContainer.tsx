import "./CardsContainer.css"
import { Button, Table } from "react-bootstrap"
import { useEffect, useState } from "react";
import axios from "axios";
import { store } from "../../../GlobalData/store";
import { Reimbursement } from "../../../Types/Reimbursement";
import { UpdateReimbursements } from "./UpdateReimbursements";
export const DashboardCardsContainer: React.FC<{ isPending: boolean }> = ({ isPending }) => {
    const [reimbursements, setReimbursements] = useState<Reimbursement[]>([]);
    const [currentReimbursement, setCurrentReimbursement] = useState<Reimbursement | null>();
    const token = localStorage.getItem('authToken');
    const role = localStorage.getItem('role')
    const handleOpenModal = (reimbursement: Reimbursement) => {
        setCurrentReimbursement(reimbursement)
    }

    const handleCloseModal = () => {
        setCurrentReimbursement(null);
    }

    useEffect(() => {
        const getReimbursementsByUserRoleOrId = async () => {
            let requestParameter = "reimbursements"
            if (role === "MANAGER") {
                requestParameter += "/all"
            }
            if (isPending) {
                requestParameter += "/pending"
            }
            await axios.get(store.baseUrl + requestParameter, {
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
        getReimbursementsByUserRoleOrId();

    }, [isPending, token, role])


    return (
        <div className="cardsContainer">
            <Table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Status</th>
                        <th>Cost</th>
                        <th>Description</th>
                        {role === "EMPLOYEE" ? <th>Resolved By</th> : <th>Update Status</th>}
                    </tr>
                </thead>
                <tbody>
                    {reimbursements && reimbursements.length > 0 ? (
                        reimbursements.map((reimbursement: Reimbursement) => (
                            <tr key={reimbursement.id}>
                                <td>{reimbursement.submittedBy.username}</td>
                                <td>{reimbursement.status}</td>
                                <td>{reimbursement.amount}</td>
                                <td>{reimbursement.description}</td>
                                {role === "EMPLOYEE" ? <td>{reimbursement.resolvedBy?.username}</td> : <td><Button onClick={() => handleOpenModal(reimbursement)}>Update</Button></td>}
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan={5}>Loading...</td> {/* or any message you'd like to display while waiting */}
                        </tr>
                    )}
                </tbody>
            </Table>
            {currentReimbursement && <UpdateReimbursements reimbursement={currentReimbursement} closeModal={handleCloseModal}></UpdateReimbursements>}
        </div>
    )
}