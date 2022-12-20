import { useState } from 'react';

import Incomes from "./Incomes";
import Expenses from "./Expenses";
import Balance from "./Balance";
import Savings from "./Savings";
import { MoneyAction } from '../types/MoneyAction';

const Budget = () => {
    const [incomes, setIncomes] = useState<MoneyAction[]>([]);
    const [expenses, setExpenses] = useState<MoneyAction[]>([]);
    const [totalIncomes, setTotalIncomes] = useState(0);
    const [totalExpenses, setTotalExpenses] = useState(0);
    const [balance, setBalance] = useState(0);
    const [savings, setSavings] = useState(0);
    const [target, getTarget] = useState(0);
    return (
        <div>
            <Incomes incomes = {incomes} setIncomes = {setIncomes} totalIncome = {totalIncomes}/>
            <Expenses totalExpenses = {totalExpenses} setExpenses = {setExpenses} expenses={expenses}/>
            <Balance />
            <Savings />
        </div>
    )
}

export default Budget;