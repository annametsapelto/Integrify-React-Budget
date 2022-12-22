import { useState } from 'react';
import { SavingsType } from '../types/SavingsType';
import { Card, CardContent, Button, Typography, FormControl, FormLabel, TextField } from '@mui/material';

const Savings = (savings: SavingsType) => {
    const [target, setTarget] = useState(0);
    const [finalTarget, setFinalTarget] = useState(0);

    const handleTarget = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setFinalTarget(target);
    }

    const handleTargetReset = () => {
        setTarget(0);
        setFinalTarget(0);
    }

    return (
        <Card sx={{maxWidth: 400, margin: 3}}>
            <CardContent>
                <Typography variant="h6">Your savings total is: {savings.savings}</Typography>
                <FormControl>
                    <form onSubmit={(event) => handleTarget(event)}>
                        <FormLabel htmlFor='savingTarget'>Add a new saving target</FormLabel>
                        <TextField 
                            type="number" 
                            id="savingTarget" 
                            name="savingTarget" 
                            value={target} 
                            onChange={(event) => (setTarget(parseInt(event.target.value)))}>
                        </TextField>
                        <Button variant="contained" type="submit">Add target</Button>
                    </form>
                </FormControl>
                <Button variant="outlined" onClick={(event) => handleTargetReset()}>Reset target</Button>
                <Typography variant="h6">Your saving target is now {finalTarget}</Typography>
            </CardContent>
        </Card>
    )
}

export default Savings;