import { DashboardCardsContainer } from "./DashboardCardsContainer"
import { NewReimbursements } from "./NewReimbursements"

export const DashboardComponent: React.FC = () => {
    return (
        <div>
            <h3>Dashboard</h3>
            <hr />
            <NewReimbursements></NewReimbursements>
            <DashboardCardsContainer></DashboardCardsContainer>
        </div>
    )
}