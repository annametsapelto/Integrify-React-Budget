import { useState, useEffect } from 'react';

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
    const [showError, setShowError] = useState(false);


    useEffect(() => {
        setTotalIncomes(incomes.reduce((prev, current) => prev + current.amount, 0));
     }, [incomes])

     useEffect(() => {
        setTotalExpenses(expenses.reduce((prev, current) => prev + current.amount, 0));
     },[expenses])

     useEffect(() => {
        setBalance(totalIncomes - totalExpenses - savings);
     }, [totalExpenses, totalIncomes, savings])

    return (
        <div>
            <Incomes incomes = {incomes} setIncomes = {setIncomes} totalIncome = {totalIncomes}/>
            <Expenses totalExpenses = {totalExpenses} setExpenses = {setExpenses} expenses={expenses} balance={balance} setShowError={setShowError}/>
            {!showError && <p>You do not have enough money for the expense.</p>}
            <Balance balance={balance} savings={savings} setSavings={setSavings}/>
            <Savings savings={savings}/>
        </div>
    )
}

export default Budget;