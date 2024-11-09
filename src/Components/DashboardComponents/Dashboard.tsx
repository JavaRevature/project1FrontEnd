import { Container } from "react-bootstrap"
import { DashboardCardsContainer } from "./DashboardCardsContainer"
import { NavBar } from "./NavBar"
import { SideBar } from "./SideBar"
import "./DashboardCSS.css"

export const Dashboard: React.FC = () => {
    return (
        <Container>
            <div className="header">
                <NavBar></NavBar>
            </div>
            <div className="content">
                <SideBar></SideBar>
                <DashboardCardsContainer></DashboardCardsContainer>
            </div>

        </Container>
    )
}