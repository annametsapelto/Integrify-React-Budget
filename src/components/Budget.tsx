import { useState, useEffect } from 'react';

import Incomes from "./Incomes";
import Expenses from "./Expenses";
import Balance from "./Balance";
import Savings from "./Savings";
import { MoneyAction } from '../types/MoneyAction';
import { Grid, Typography } from '@mui/material';

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
        <Grid container spacing={2}>
            <Grid item xs= {5}>
                <Incomes incomes = {incomes} setIncomes = {setIncomes} totalIncome = {totalIncomes}/>
            </Grid>
            <Grid item xs= {5}>
                <Grid>            
                    <Expenses totalExpenses = {totalExpenses} setExpenses = {setExpenses} expenses={expenses} balance={balance} setShowError={setShowError}/>
                    {showError && <Typography>You do not have enough money for the expense.</Typography>}
                </Grid>
            </Grid>
            <Grid item xs= {5}>
                <Balance balance={balance} savings={savings} setSavings={setSavings}/>
            </Grid>
            <Grid item xs= {5}>
                <Savings savings={savings}/>
            </Grid>
        </Grid>
    )
}

export default Budget;