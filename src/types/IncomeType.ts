import { MoneyAction } from './MoneyAction';

export interface IncomeType {
    incomes: MoneyAction[]
    setIncomes: React.Dispatch<React.SetStateAction<MoneyAction[]>>
    totalIncome: number
}