import { useState } from 'react';

import { MoneyAction } from '../types/MoneyAction';
import { ExpenseType } from '../types/ExpenseType';
import FormTemplate from './FormTemplate';

const Expenses = ({expenses, setExpenses, totalExpenses}: ExpenseType) => {
 /*   const categories = [
        {value: "Housing", label: "housing"},
        {value: "Groseries", label: "groseries"},
        {value: "Bills", label: "bills"},
        {value: "Hobbies", label: "hobbies"},
        {value: "Travelling", label: "travelling"},
        {value: "Other", label: "other"}
    ] */
    return (
        <div>
            <p>Total of your expenses is: {totalExpenses}</p>
            <FormTemplate list = {expenses} setList = {setExpenses} formName = "Expense sum" reason = "Expense type"/>
            <div>
                <ul>
                    {expenses.map((item) => 
                        <li>{item.source} {item.amount} {item.date}</li>
                    )}
                </ul>
            </div>
        </div>
    )
}

export default Expenses;