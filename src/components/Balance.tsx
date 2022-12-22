import { useState } from "react";
import { BalanceType } from "../types/BalanceType";
import { Card, CardContent, Button, Typography, FormGroup, FormLabel } from '@mui/material';

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
                <Typography variant="h6">Your balance is: {balance}</Typography>
                <FormGroup>
                    <form onSubmit={event => handleSubmit(event)}>
                        <FormLabel htmlFor="moveToSavings">Move a sum to savings</FormLabel>
                        <input 
                            type="number" 
                            id="moveToSavings" 
                            name="moveToSavings" 
                            value={toSavings} 
                            onChange={(event) => setToSavings(parseInt(event.target.value))}>                        
                        </input>
                        <Button variant="contained" type="submit">Move sum</Button>
                    </form>
                </FormGroup>
            </CardContent>
        </Card>
    )
}

export default Balance;