import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import expensesData from '../data/expenses.json';
import Expense from './Expense';
import TotalExpenses from './TotalExpenses';

function ExpensesList() {
  const [expenses, setExpenses] = useState(null);

  useEffect(() => {
    const expenses = JSON.parse(window.localStorage.getItem('expenses'));
    if (expenses) {
      setExpenses(expenses);
    } else {
      window.localStorage.setItem('expenses', JSON.stringify(expensesData));
      setExpenses(expensesData);
    }
  }, []);

  return (
    <>
      {!expenses ? (
        <h1>'Loading....'</h1>
      ) : (
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
            <Link to='/add-expense'>Add Expense</Link>
          </div>
        </div>
      )}
    </>
  );
}

export default ExpensesList;
