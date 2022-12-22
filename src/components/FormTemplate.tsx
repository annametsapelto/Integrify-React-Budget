import { useState } from 'react';

import Select from 'react-select';
import { CategoryType } from '../types/CategoryType';
import { FormTemplateType } from '../types/FormTeplateType';
import {v4 as uuid4} from 'uuid';
import { MoneyAction } from '../types/MoneyAction';
import { Button, FormLabel, FormControl, TextField } from '@mui/material';

const FormTemplate = ({formName, reason,/* categories,*/ list, setList, balance, setShowError}: FormTemplateType) => {
//    const categoryList = {categories};
    const [amount, setAmount] = useState(0);
    const [source, setSource] = useState("");
//    const [category, setCategory] = useState("");
    const [date, setDate] = useState("");

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const id = uuid4();
        const MoneyItem: MoneyAction = {
            id, amount, source, date
        }
        if (setShowError) {
            if (!balance) {
                const balance = 0;
                if (balance < MoneyItem.amount) {
                    setShowError(true);
                    return;
                }
            } else {
                if (balance < MoneyItem.amount) {
                    setShowError(true);
                    return;
                }
            }
        }
        setList([... list, MoneyItem]);
    }

    const amountHandler = (event:React.ChangeEvent<HTMLInputElement |HTMLTextAreaElement>) => {
        setAmount(parseInt(event.target.value));
        if (setShowError) setShowError(false);
    }

    return(
        <div>
            <form onSubmit={(event) => handleSubmit(event)}> 
                <FormControl>                
                    <FormLabel htmlFor ="sum">{formName}</FormLabel>
                    <TextField type="number" id="sum" name="sum" value={amount} onChange={(event) => amountHandler(event)} required></TextField>
                    <FormLabel htmlFor="source">{reason}</FormLabel>
                    <TextField type="string" id="source" name="source" value={source} onChange={(event) => setSource(event.target.value)}></TextField>
                    <FormLabel htmlFor="date">Date</FormLabel>
                    <TextField type="date" id="date" name="date" value={date} onChange={(event) => setDate(event.target.value)}></TextField>
                    <Button variant="contained" type="submit">Submit</Button>
                </FormControl>
            </form>
        </div>
    )
}

export default FormTemplate;