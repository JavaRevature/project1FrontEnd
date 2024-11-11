import { User } from "./User";

export type Reimbursement = {
    id: string;
    submittedBy: User;
    status: string;
    amount: number;
    description: string;
    resolvedBy?: User;
}