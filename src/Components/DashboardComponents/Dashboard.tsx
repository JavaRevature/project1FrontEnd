import { SideBar } from "./SideBar/SideBar"
import "./DashboardCSS.css"
import { DashboardComponent } from "./Reimbursements/DashboardComponent"
import { Route, Routes } from "react-router-dom"
import { UserComponents } from "./Users/UserComponents"

export const Dashboard: React.FC = () => {
    return (
        <div className="content">
            <SideBar></SideBar>
            <Routes>
                <Route path="" element={<DashboardComponent></DashboardComponent>}></Route>
                <Route path="users" element={<UserComponents></UserComponents>}></Route>
            </Routes>
        </div>
    )
}