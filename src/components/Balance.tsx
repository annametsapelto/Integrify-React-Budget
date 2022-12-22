import { useState } from "react";
import { BalanceType } from "../types/BalanceType";
import { Card, CardContent, Button, Typography, FormControl, FormLabel, TextField } from '@mui/material';

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
        <Card sx={{maxWidth: 400, margin: 3}}>
            <CardContent>            
                <Typography variant="h6">Your balance is: {balance}</Typography>
                <FormControl>
                    <form onSubmit={event => handleSubmit(event)}>
                        <FormLabel htmlFor="moveToSavings">Move a sum to savings</FormLabel>
                        <TextField 
                            type="number" 
                            id="moveToSavings" 
                            name="moveToSavings" 
                            value={toSavings} 
                            onChange={(event) => setToSavings(parseInt(event.target.value))}>                        
                        </TextField>
                        <Button variant="contained" type="submit">Move sum</Button>
                    </form>
                </FormControl>
            </CardContent>
        </Card>
    )
}

export default Balance;