import { DashboardCard } from "./DashboardCard"

export const DashboardCardsContainer: React.FC = () => {
    const sample = [1, 2, 3]
    return (

        <div>
            <h3>Here are all the reimbursements</h3>
            {sample.map((data) => (
                <DashboardCard sample={data}></DashboardCard>
            ))}
        </div>
    )
}