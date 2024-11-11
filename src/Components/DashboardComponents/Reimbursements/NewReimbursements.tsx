import axios from "axios";
import { useState } from "react"
import { Button, Form, FormControl, FormGroup, FormLabel, Modal, ModalBody, ModalFooter, ModalHeader } from "react-bootstrap"
import { store } from "../../../GlobalData/store";

export const NewReimbursements: React.FC = () => {
    const [showForm, setShowForm] = useState(false);
    const [amount, setAmount] = useState<number>();
    const [description, setDescription] = useState<String>();
    const token = localStorage.getItem('authToken');

    const handleSubmit = async () => {
        await axios.post(store.baseUrl + "reimbursements",
            {
                amount: amount,
                description: description
            },
            {
                headers: {
                    Authorization: `Bearer ${token}`
                }

            }).then(() => {
                alert("Successful! Please wait for approval")
                setShowForm(false)
                window.location.reload();
            }).catch((error) => {
                alert(error)
                setShowForm(false)
            })
    }

    return (
        <>
            <Button variant="dark" onClick={() => setShowForm(true)}>
                Submit New Request
            </Button>
            <Modal show={showForm} onHide={() => setShowForm(false)}>
                <ModalHeader closeButton>
                    <Modal.Title>New Reimbursements Request</Modal.Title>
                </ModalHeader>
                <ModalBody>
                    <Form>
                        <FormGroup controlId="Amount">
                            <FormLabel>Amount</FormLabel>
                            <FormControl type="number" placeholder="Enter Amount" onChange={(e) => setAmount(Number(e.target.value))}></FormControl>
                        </FormGroup>
                        <FormGroup controlId="Description">
                            <FormLabel>Description</FormLabel>
                            <FormControl type="text" placeholder="Enter Description" onChange={(e) => setDescription(e.target.value)} ></FormControl>
                        </FormGroup>
                    </Form>
                </ModalBody>
                <ModalFooter>
                    <Button variant="secondary" onClick={() => setShowForm(false)}>Close</Button>
                    <Button variant="success" onClick={handleSubmit}>Submit</Button>
                </ModalFooter>
            </Modal >
        </>
    )
}