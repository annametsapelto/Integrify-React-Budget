import React, { useState } from 'react';

import {MoneyAction} from '../types/MoneyAction';
import {IncomeType} from '../types/IncomeType';
import FormTemplate from './FormTemplate';
import { Card, CardContent } from '@mui/material';


const Incomes = ({incomes, setIncomes, totalIncome}: IncomeType) => {
/*    const categories = [
        {value: "Salary", label: "salary"},
        {value: "Investments", label: "investments"},
        {value: "Benefits", label: "benefits"},
        {value: "Selling", label: "selling"},
        {value: "Other", label: "other"}
    ]*/
    return(
        <Card sx={{maxWidth: 300, margin: 3}}>
            <CardContent>
                <p>The sum of your income is: {totalIncome}</p>
                <FormTemplate list = {incomes} setList = {setIncomes} /*categories = {categories}*/ formName= "Income sum" reason = "Income source"/>
                <div>
                    <ul>
                        {incomes.map((item) => 
                            <li key={item.id}>{item.source} {item.amount} {item.date}</li>
                        )}
                    </ul>
                </div>
            </CardContent>
        </Card>
    )
}

export default Incomes;