import { useState } from 'react';

const Savings = () => {
    const [target, getTarget] = useState(0);
    return (
        <div>
            <p>Your savings total is: </p>
        </div>
    )
}

export default Savings;