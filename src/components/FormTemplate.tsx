import { useState } from 'react';

import Select from 'react-select';
import { CategoryType } from '../types/CategoryType';
import { FormTemplateType } from '../types/FormTeplateType';
import {v4 as uuid4} from 'uuid';
import { MoneyAction } from '../types/MoneyAction';

const FormTemplate = ({formName, reason,/* categories,*/ list, setList}: FormTemplateType) => {
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
        setList([... list, MoneyItem]);
    }
    return(
        <div>
            <form onSubmit={(event) => handleSubmit(event)}> 
                <label htmlFor ="sum">{formName}</label>
                <input type="number" id="sum" name="sum" value={amount} onChange={(event) => setAmount(parseInt(event.target.value))}></input>
                <label htmlFor="source">{reason}</label>
                <input type="string" id="source" name="source" value={source} onChange= {(event) => setSource(event.target.value)}></input>
                <label htmlFor="date"></label>
                <input type="date" id="date" name="date" value={date} onChange= {(event) => setDate(event.target.value)}></input>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default FormTemplate;