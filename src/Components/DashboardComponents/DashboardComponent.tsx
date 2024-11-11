import { Form } from "react-bootstrap"
import { DashboardCardsContainer } from "./DashboardCardsContainer"
import { NewReimbursements } from "./NewReimbursements"
import { useState } from "react"

export const DashboardComponent: React.FC = () => {
    const [isSwitchedOn, setIsSwitchedOn] = useState(false)
    return (
        <div>
            <h3>Dashboard</h3>
            <hr />
            <NewReimbursements></NewReimbursements>
            <Form>
                <Form.Check
                    type="switch"
                    id="custom-switch"
                    label="See pending transactions only"
                    onChange={(e) => {
                        setIsSwitchedOn(e.target.checked)
                    }}
                />
            </Form>
            <DashboardCardsContainer isPending={isSwitchedOn}></DashboardCardsContainer>
        </div>
    )
}