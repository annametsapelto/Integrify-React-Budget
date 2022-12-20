import { useState } from 'react';

import { MoneyAction } from '../types/MoneyAction';
import { ExpenseType } from '../types/ExpenseType';

const Expenses = ({expenses, setExpenses, totalExpenses}: ExpenseType) => {
    return (
        <div>
            <p>Total of your expenses is: </p>
        </div>
    )
}

export default Expenses;