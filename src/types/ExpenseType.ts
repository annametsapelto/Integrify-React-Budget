import { MoneyAction } from "./MoneyAction";

export interface ExpenseType {
    expenses: MoneyAction[]
    setExpenses: React.Dispatch<React.SetStateAction<MoneyAction[]>>
    totalExpenses: number
    balance: number
    setShowError: React.Dispatch<React.SetStateAction<boolean>>
}