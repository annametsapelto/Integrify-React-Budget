import { useState } from "react";
import { BalanceType } from "../types/BalanceType";

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
        <div>
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
                    <button type="submit">Move sum</button>
                </form>
            </div>
        </div>
    )
}

export default Balance;