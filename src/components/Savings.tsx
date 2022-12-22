import { useState } from 'react';
import { SavingsType } from '../types/SavingsType';
import { Card, CardContent, Button } from '@mui/material';

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
        <Card sx={{maxWidth: 300, margin: 3}}>
            <CardContent>
                <p>Your savings total is: {savings.savings}</p>
                <div>
                    <form onSubmit={(event) => handleTarget(event)}>
                        <label htmlFor='savingTarget'></label>
                        <input type="number" id="savingTarget" name="savingTarget" value={target} onChange={(event) => (setTarget(parseInt(event.target.value)))}></input>
                        <Button variant="contained" type="submit">Add target</Button>
                    </form>
                </div>
                <Button variant="outlined" onClick={(event) => handleTargetReset()}>Reset target</Button>
                <p>Your saving target is now {finalTarget}</p>
            </CardContent>
        </Card>
    )
}

export default Savings;