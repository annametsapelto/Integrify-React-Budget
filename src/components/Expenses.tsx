import { useState } from 'react';

import { MoneyAction } from '../types/MoneyAction';
import { ExpenseType } from '../types/ExpenseType';
import FormTemplate from './FormTemplate';
import { Card, CardContent } from '@mui/material';

const Expenses = ({expenses, setExpenses, totalExpenses, balance, setShowError}: ExpenseType) => {
 /*   const categories = [
        {value: "Housing", label: "housing"},
        {value: "Groseries", label: "groseries"},
        {value: "Bills", label: "bills"},
        {value: "Hobbies", label: "hobbies"},
        {value: "Travelling", label: "travelling"},
        {value: "Other", label: "other"}
    ] */
    return (
        <Card sx={{maxWidth: 300, margin: 3}}>
            <CardContent>            
                <p>Total of your expenses is: {totalExpenses}</p>
                <FormTemplate list = {expenses} setList = {setExpenses} formName = "Expense sum" reason = "Expense type" balance={balance} setShowError={setShowError}/>
                <div>
                    <ul>
                        {expenses.map((item) => 
                            <li key={item.id}>{item.source} {item.amount} {item.date}</li>
                        )}
                    </ul>
                </div>
            </CardContent>
        </Card>
    )
}

export default Expenses;