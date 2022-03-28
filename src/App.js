import { useState } from 'react';
import './App.css';
import expensesData from './data/expenses.json';
import Expense from './components/Expense';
import AddExpense from './components/AddExpense';
import TotalExpenses from './components/TotalExpenses';

function App() {
  const [expenses, setExpenses] = useState(expensesData);

  function createExpenses(newExpense) {
    const allExpenses = [...expenses, newExpense];
    setExpenses(allExpenses);
  }

  return (
    <div className='App'>
      <h1>Expenseta</h1>
      <h2>Expense tracker app</h2>

      <TotalExpenses expenses={expenses} />

      <div className='expenses-list'>
        {expenses.map((expense, index) => (
          <div className='expense-item' key={index}>
            <Expense expense={expense} />
          </div>
        ))}
      </div>

      <AddExpense createExpenses={createExpenses} />

      <footer>
        <p>
          Made with dedication by{' '}
          <a
            href='https://nslcoder.github.io/'
            target='_blank'
            rel='noopener noreferrer'
          >
            nslcoder
          </a>{' '}
          (Lokesh Gurung) for learning.
        </p>
      </footer>
    </div>
  );
}

export default App;
