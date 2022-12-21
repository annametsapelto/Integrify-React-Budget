import { useState } from 'react';
import { SavingsType } from '../types/SavingsType';

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
        <div>
            <p>Your savings total is: {savings.savings}</p>
            <div>
                <form onSubmit={(event) => handleTarget(event)}>
                    <label htmlFor='savingTarget'></label>
                    <input type="number" id="savingTarget" name="savingTarget" value={target} onChange={(event) => (setTarget(parseInt(event.target.value)))}></input>
                    <button type="submit">Add target</button>
                </form>
            </div>
            <button onClick={(event) => handleTargetReset()}>Reset target</button>
            <p>Your saving target is now {finalTarget}</p>
        </div>
    )
}

export default Savings;