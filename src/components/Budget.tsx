import Incomes from "./Incomes";
import Expenses from "./Expenses";
import Balance from "./Balance";
import Savings from "./Savings";

const Budget = () => {
    return (
        <div>
            <Incomes />
            <Expenses />
            <Balance />
            <Savings />
        </div>
    )
}

export default Budget;