import { useState } from 'react';
import { SavingsType } from '../types/SavingsType';

const Savings = (savings: SavingsType) => {
    const [target, setTarget] = useState(0);

    const handleTarget = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setTarget(target);
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
        </div>
    )
}

export default Savings;