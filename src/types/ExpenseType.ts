import { MoneyAction } from "./MoneyAction";

export interface ExpenseType {
    expenses: MoneyAction[]
    setExpenses: React.Dispatch<React.SetStateAction<MoneyAction[]>>
    totalExpenses: number
}