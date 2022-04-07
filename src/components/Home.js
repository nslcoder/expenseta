import { useState } from 'react';
import { Link } from 'react-router-dom';
import expensesData from '../data/expenses.json';
import Expense from './Expense';
import AddExpense from './AddExpense';
import TotalExpenses from './TotalExpenses';

function Home() {
  const [expenses, setExpenses] = useState(expensesData);

  function createExpenses(newExpense) {
    const allExpenses = [...expenses, newExpense];
    setExpenses(allExpenses);
  }

  return (
    <div className='App'>
      <TotalExpenses expenses={expenses} />

      <div className='expenses-list'>
        {expenses.map((expense, index) => (
          <div className='expense-item' key={index}>
            <Expense expense={expense} />
          </div>
        ))}
      </div>

      <div className='add-btn'>
        <Link to='/add-expense'>
          <button>Add Expense</button>
        </Link>
      </div>

      <AddExpense createExpenses={createExpenses} />
    </div>
  );
}

export default Home;
