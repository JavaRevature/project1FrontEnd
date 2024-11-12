import { useEffect, useState } from "react"
import "./SideBarCSS.css"
import { User } from "../../../Types/User";
import { useNavigate } from "react-router-dom";
export const SideBar: React.FC = () => {

    const [user, setUser] = useState<User>();
    const navigate = useNavigate()
    const role = localStorage.getItem('role')

    console.log(user)
    return (
        <div className="SideBar">
            <h3>ERS</h3>
            <hr />
            <div className="SideBarItems">
                <h4 onClick={() => { navigate("/dashboard") }}>Reimbursements</h4>
                {
                    role === "MANAGER" ?
                        <h4 onClick={() => { navigate("/dashboard/users") }}>Manage Users</h4> :
                        <></>
                }
            </div>
        </div>
    )
}