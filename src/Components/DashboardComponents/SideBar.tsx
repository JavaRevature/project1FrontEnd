import { useEffect, useState } from "react"
import "./SideBarCSS.css"
import { User } from "../../Types/User";
export const SideBar: React.FC = () => {

    const [user, setUser] = useState<User>();

    useEffect(() => {
        if (localStorage.getItem('username') && localStorage.getItem('role')) {
            setUser(
                {
                    username: localStorage.getItem('username'),
                    role: localStorage.getItem('role')
                }
            )
        }
    }, [])

    console.log(user)
    return (
        <div className="SideBar">
            <h3>ERS</h3>
            <hr />
            <div className="SideBarItems">
                <h4>Reimbursements</h4>
                {
                    user?.role === "MANAGER" ?
                        <h4>Manage Users</h4> :
                        <></>
                }
            </div>
        </div>
    )
}