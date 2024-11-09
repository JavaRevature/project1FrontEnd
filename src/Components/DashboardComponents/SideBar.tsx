import { store } from "../../GlobalData/store"
import "./SideBarCSS.css"
export const SideBar: React.FC = () => {
    return (
        <div>
            <div>
                {
                    store.user.role === "EMPLOYEE" ?
                        <h3>Manage My Reimbursements</h3> :
                        <h3>Manage All Reimbursements</h3>
                }
            </div>
            <div>
                {
                    store.user.role === "MANAGER" ?
                        <h3>Manage Users</h3> :
                        <></>
                }
            </div>
        </div>
    )
}