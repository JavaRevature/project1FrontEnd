import { DashboardCardsContainer } from "./DashboardCardsContainer"
import { SideBar } from "./SideBar"
import "./DashboardCSS.css"
import { DashboardComponent } from "./DashboardComponent"

export const Dashboard: React.FC = () => {
    return (
        <div className="content">
            <SideBar></SideBar>
            <DashboardComponent></DashboardComponent>
        </div>
    )
}