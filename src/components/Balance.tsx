import { BalanceType } from "../types/BalanceType";

const Balance = (balance: BalanceType) => {
    return (
        <div>
            <p>Your balance is: {balance.balance}</p>
        </div>
    )
}

export default Balance;