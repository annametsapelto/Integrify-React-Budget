import { useState } from "react";
import { BalanceType } from "../types/BalanceType";
import { Card, CardContent, Button } from '@mui/material';

const Balance = ({balance, setSavings, savings}: BalanceType) => {
    const [toSavings, setToSavings] = useState(0);

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (toSavings < balance) {
            setSavings(toSavings);
        } else {
            throw new Error;
        }
    }
    return (
        <Card sx={{maxWidth: 300, margin: 3}}>
            <CardContent>            
                <p>Your balance is: {balance}</p>
                <div>
                    <form onSubmit={event => handleSubmit(event)}>
                        <label htmlFor="moveToSavings">Move a sum to savings</label>
                        <input 
                            type="number" 
                            id="moveToSavings" 
                            name="moveToSavings" 
                            value={toSavings} 
                            onChange={(event) => setToSavings(parseInt(event.target.value))}>                        
                        </input>
                        <Button variant="contained" type="submit">Move sum</Button>
                    </form>
                </div>
            </CardContent>
        </Card>
    )
}

export default Balance;