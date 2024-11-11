import { Button, Modal, ModalBody, ModalFooter, ModalHeader, ModalTitle } from "react-bootstrap"
import { Reimbursement } from "../../../Types/Reimbursement"
import axios from "axios";
import { store } from "../../../GlobalData/store";

export const UpdateReimbursements: React.FC<{ reimbursement: Reimbursement, closeModal: () => void }> = ({ reimbursement, closeModal }) => {
    const token = localStorage.getItem('authToken');

    const handleUpdate = async (status: string) => {

        await axios.patch(store.baseUrl + "reimbursements/" + reimbursement.id,
            JSON.stringify(status)
            ,
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'application/json' // Ensure JSON format
                }
            }
        ).then(() => {
            alert("Successfully Updated Status")
            closeModal()
            window.location.reload();
        }
        ).catch((error) => {
            alert(error)
            closeModal()
        })
    }
    return (
        <Modal show={true} onHide={() => closeModal()}>
            <ModalHeader>
                <ModalTitle>Update Reimbursement</ModalTitle>
            </ModalHeader>
            <ModalBody>
                <h3>Reimbursement ID: {reimbursement.id}</h3>
                <p>Reimbursement Status: {reimbursement.status}</p>
                <p>Reimbursement Amount: {reimbursement.amount}</p>
                <p>Reimbursement Description: {reimbursement.description}</p>
                <p>Reimbursement SubmittedBy: {reimbursement.submittedBy.username}</p>
                <p>Reimbursement ResolvedBy: {reimbursement.resolvedBy?.username}</p>
            </ModalBody>
            <ModalFooter>
                <Button variant="success" onClick={() => { handleUpdate("APPROVED") }}>Approve</Button>
                <Button variant="danger" onClick={() => { handleUpdate("DENIED") }}>Deny</Button>
            </ModalFooter>
        </Modal>
    )
}