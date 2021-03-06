
import Card from '../UI/Card'
import './Expenses.css';
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";
import ExpensesList from "./ExpensesList";

const Expenses = props => {

    const [filteredYear, setFilteredYear] = useState('2020');

    const filterChangedHandler = selectedYear => {
        setFilteredYear(selectedYear);
    };
    const filteredExpenses = props.items.filter(expense => {
        // if (expense.date.getFullYear().toString() === filteredYear) {
        //     console.log("sth");
        // }
        // return 'props.item';
        return expense.date.getFullYear().toString() === filteredYear
    });

    return (
        <div>
            <Card className='expenses'>
                <ExpensesFilter
                    selected={filteredYear}
                    onChangeFilter={filterChangedHandler} />
                <ExpensesList items={filteredExpenses} />
            </Card>
        </div>
    );
}

export default Expenses;