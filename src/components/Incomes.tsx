import React, { useState } from 'react';

import {MoneyAction} from '../types/MoneyAction';
import {IncomeType} from '../types/IncomeType';


const Incomes = ({incomes, setIncomes, totalIncome}: IncomeType) => {
    
    return(
        <div>
            <p>The sum of your income is: {totalIncome}</p>
        </div>
    )
}

export default Incomes;